# Secunit Mercantile Website

Enterprise-grade security, DevOps, and AI consulting for small and mid-sized businesses.

**Live site:** https://secunit.io

## Tech Stack

- **Framework:** [Astro](https://astro.build/) v5
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) v3
- **Hosting:** [Cloudflare Pages](https://pages.cloudflare.com/)
- **Database:** [Cloudflare D1](https://developers.cloudflare.com/d1/) (SQLite)
- **Email:** [Resend](https://resend.com/)

## Local Development

```bash
# Install dependencies
yarn install

# Start dev server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview
```

## Deployment

This site is automatically deployed to Cloudflare Pages when changes are pushed to the `main` branch.

### Initial Setup

1. **Connect GitHub to Cloudflare Pages:**
   - Go to Cloudflare Dashboard → Pages → Create a project
   - Connect your GitHub account and select this repository
   - Build settings:
     - Framework preset: Astro
     - Build command: `yarn build`
     - Build output directory: `dist`

2. **Configure Environment Variables:**
   In Cloudflare Pages → Settings → Environment variables, add:
   - `RESEND_API_KEY` - Your Resend API key for email notifications
   - `CONTACT_EMAIL` - Destination email for contact form (default: hello@secunit.io)

3. **Bind D1 Database:**
   In Cloudflare Pages → Settings → Functions → D1 database bindings:
   - Variable name: `DB`
   - D1 database: `secunit-contacts`

4. **Configure Custom Domain:**
   In Cloudflare Pages → Custom domains → Add:
   - `secunit.io`
   - `www.secunit.io` (redirect to apex)

## Project Structure

```
secunit-website/
├── functions/
│   └── api/
│       └── contact.ts      # Contact form handler (Pages Function)
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── ThemeToggle.astro
│   ├── layouts/
│   │   └── Base.astro
│   ├── pages/
│   │   ├── index.astro     # Homepage
│   │   ├── services.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── privacy.astro
│   │   └── terms.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── wrangler.toml           # Cloudflare bindings config
└── package.json
```

## Contact Form

The contact form stores submissions in Cloudflare D1 and sends email notifications via Resend.

### Database Schema

```sql
CREATE TABLE contacts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at TEXT DEFAULT (datetime('now')),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  inquiry_type TEXT NOT NULL,
  message TEXT NOT NULL,
  referral_source TEXT,
  page_url TEXT,
  user_agent TEXT,
  ip_address TEXT,
  email_sent INTEGER DEFAULT 0,
  status TEXT DEFAULT 'new'
);
```

### Exporting Contacts for CRM

Query the D1 database to export contacts as JSON:

```bash
wrangler d1 execute secunit-contacts --command="SELECT * FROM contacts WHERE status = 'new'"
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | Resend API key for sending emails | Yes |
| `CONTACT_EMAIL` | Destination email for form submissions | No (default: hello@secunit.io) |

## License

© 2025 Secunit Mercantile LLC. All rights reserved.
