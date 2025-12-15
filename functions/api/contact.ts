// Cloudflare Pages Function for contact form handling
// This runs as a Worker on form POST requests

interface Env {
  DB: D1Database;
  RESEND_API_KEY: string;
  CONTACT_EMAIL: string;
}

interface ContactForm {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  inquiry_type: string;
  message: string;
  referral_source?: string;
  website?: string; // honeypot
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  
  try {
    const data: ContactForm = await request.json();
    
    // Honeypot check
    if (data.website) {
      // Bot detected - return success but don't process
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    // Validate required fields
    if (!data.name || !data.email || !data.inquiry_type || !data.message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return new Response(JSON.stringify({ error: 'Invalid email address' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    // Get request metadata
    const userAgent = request.headers.get('user-agent') || '';
    const ipAddress = request.headers.get('cf-connecting-ip') || '';
    const pageUrl = request.headers.get('referer') || '';
    
    // Store in D1 database
    const insertResult = await env.DB.prepare(`
      INSERT INTO contacts (
        name, email, company, phone, inquiry_type, message, 
        referral_source, page_url, user_agent, ip_address
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      data.name,
      data.email,
      data.company || null,
      data.phone || null,
      data.inquiry_type,
      data.message,
      data.referral_source || null,
      pageUrl,
      userAgent,
      ipAddress
    ).run();
    
    const contactId = insertResult.meta.last_row_id;
    
    // Send email notification via Resend
    if (env.RESEND_API_KEY) {
      try {
        const emailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'Secunit Website <noreply@secunit.io>',
            to: [env.CONTACT_EMAIL || 'hello@secunit.io'],
            subject: `New Contact: ${data.inquiry_type} from ${data.name}`,
            html: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
              ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''}
              ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
              <p><strong>Inquiry Type:</strong> ${data.inquiry_type}</p>
              <p><strong>Message:</strong></p>
              <blockquote style="border-left: 3px solid #ccc; padding-left: 16px; margin-left: 0;">
                ${data.message.replace(/\n/g, '<br>')}
              </blockquote>
              ${data.referral_source ? `<p><strong>Referral Source:</strong> ${data.referral_source}</p>` : ''}
              <hr>
              <p style="color: #666; font-size: 12px;">
                Contact ID: ${contactId}<br>
                Submitted: ${new Date().toISOString()}<br>
                IP: ${ipAddress}
              </p>
            `,
            text: `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
${data.company ? `Company: ${data.company}` : ''}
${data.phone ? `Phone: ${data.phone}` : ''}
Inquiry Type: ${data.inquiry_type}

Message:
${data.message}

${data.referral_source ? `Referral Source: ${data.referral_source}` : ''}

---
Contact ID: ${contactId}
Submitted: ${new Date().toISOString()}
            `.trim(),
          }),
        });
        
        if (emailResponse.ok) {
          // Update database to mark email as sent
          await env.DB.prepare(
            'UPDATE contacts SET email_sent = 1 WHERE id = ?'
          ).bind(contactId).run();
        }
      } catch (emailError) {
        // Log but don't fail the request
        console.error('Failed to send email:', emailError);
      }
    }
    
    // Return success with the contact record for CRM import
    const jsonBlob = {
      source: 'website_contact_form',
      submitted_at: new Date().toISOString(),
      contact_id: contactId,
      contact: {
        name: data.name,
        email: data.email,
        company: data.company || null,
        phone: data.phone || null,
      },
      inquiry: {
        type: data.inquiry_type,
        message: data.message,
        referral_source: data.referral_source || null,
      },
      metadata: {
        page_url: pageUrl,
        user_agent: userAgent,
        ip_address: ipAddress,
      },
    };
    
    return new Response(JSON.stringify({ 
      success: true, 
      contact_id: contactId,
      json_blob: jsonBlob 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
    
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(JSON.stringify({ 
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
