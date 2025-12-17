# CONTEXT.md - Secunit Mercantile Website

**Last Updated:** December 17, 2025  
**Live Site:** https://secunit.io  
**Purpose:** Enterprise-grade security, DevOps, SRE, and AI consulting for small and mid-sized businesses

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Architecture](#architecture)
4. [Project Structure](#project-structure)
5. [Content Management](#content-management)
6. [Styling System](#styling-system)
7. [Contact Form](#contact-form)
8. [Deployment](#deployment)
9. [Development Workflow](#development-workflow)
10. [Key Features](#key-features)
11. [Internationalization](#internationalization)
12. [Known Issues & TODOs](#known-issues--todos)
13. [Component Inventory](#component-inventory)

---

## 🎯 Project Overview

Secunit Mercantile is a consulting website offering:
- **AI Enablement** - Practical AI implementation guidance
- **FinOps & Cost Optimization** - Cloud cost reduction services
- **Virtual DevOps & SRE** - Fractional engineering leadership
- **Virtual CISO & InfoSec** - Security leadership services

The site features:
- Static site generation with Astro v5
- Blog with MDX support
- Contact form with Cloudflare D1 storage
- Email notifications via Resend
- Dark mode support
- Mobile-responsive design
- SEO optimized

---

## 🛠 Tech Stack

### Core Framework
- **Astro v5.16.5** - Static Site Generator
- **React v19.2.3** - For interactive components (minimal usage)
- **TypeScript v5.9.3** - Type safety

### Styling
- **Tailwind CSS v3.4.19** - Utility-first CSS framework
- **@tailwindcss/forms** - Form styling
- **@tailwindcss/typography** - Prose styling for markdown
- **Starwind UI Components** - Pre-built Astro component library

### Content Management
- **Astro Content Collections** - Type-safe content management
- **MDX** - Markdown with JSX components
- **Keystatic** - Git-based CMS (configured but optional)

### Deployment & Backend
- **Cloudflare Pages** - Static hosting
- **Cloudflare Pages Functions** - Serverless API endpoints
- **Cloudflare D1** - SQLite database for contact form
- **Resend API** - Email delivery service

### Build Tools
- **Prettier** - Code formatting
- **ESLint** - Linting (configured via eslint.config.mjs)

---

## 🏗 Architecture

### Build Process
1. Astro compiles `.astro`, `.tsx`, and `.mdx` files
2. Static HTML/CSS/JS generated to `/dist` directory
3. Cloudflare Pages serves static files
4. Cloudflare Pages Functions handle API routes (`/functions/api/*`)

### Rendering Strategy
- **Output:** `static` (full static site generation)
- **No SSR** - All pages pre-rendered at build time
- **Client-side JS** - Minimal, only for interactive features (theme toggle, mobile menu, contact form)

### Data Flow

```
Content (MDX/JSON) 
  → Astro Content Collections 
  → Type-safe queries 
  → Static HTML generation

Contact Form Submission
  → Client-side JS
  → POST /api/contact
  → Cloudflare Pages Function
  → D1 Database + Resend Email
  → Response to client
```

---

## 📁 Project Structure

```
secunit-website/
├── functions/
│   └── api/
│       └── contact.ts           # Cloudflare Pages Function for contact form
├── public/
│   ├── favicon.svg
│   ├── favicons/                # Multiple favicon formats
│   ├── images/
│   │   └── brand/               # Brand logos (horizontal, stacked, icon)
│   ├── logos/                   # Client/partner logos (SVG)
│   ├── people/                  # Team headshots
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── icons/               # SVG icons organized by theme
│   │   └── images/              # Template/component images
│   ├── components/
│   │   ├── Header.astro         # Main navigation
│   │   ├── Footer.astro         # Site footer
│   │   ├── ThemeToggle.astro    # Dark mode toggle
│   │   ├── about/               # About page components
│   │   ├── hero/                # Hero section variants
│   │   ├── faq/                 # FAQ accordion components
│   │   ├── forms/               # Form components
│   │   ├── starwind/            # Starwind UI component library
│   │   └── [other components]
│   ├── config/
│   │   ├── en/                  # English config files
│   │   │   ├── siteData.json.ts      # Site metadata
│   │   │   ├── navData.json.ts       # Navigation structure
│   │   │   ├── faqData.json.ts       # FAQ content
│   │   │   ├── teamData.json.ts      # Team member data
│   │   │   └── testimonialData.json.ts
│   │   ├── siteSettings.json.ts # Global site settings
│   │   └── types/               # TypeScript type definitions
│   ├── data/
│   │   ├── authors/             # Blog author profiles (MDX)
│   │   ├── blog/                # Blog posts organized by slug
│   │   │   └── en/              # English blog posts
│   │   ├── careers/             # Job postings (MDX)
│   │   └── otherPages/          # Additional MDX pages
│   ├── js/
│   │   ├── blogUtils.ts         # Blog helper functions
│   │   ├── jsonLD.ts            # Structured data helpers
│   │   ├── localeUtils.ts       # Internationalization utilities
│   │   └── translationUtils.ts  # Translation helpers
│   ├── layouts/
│   │   ├── Base.astro           # Base HTML layout with SEO
│   │   ├── BaseLayout.astro     # Extended base layout
│   │   ├── BlogLayoutCentered.astro
│   │   ├── BlogLayoutSidebar.astro
│   │   └── CareerLayout.astro
│   ├── pages/
│   │   ├── index.astro          # Homepage
│   │   ├── services.astro       # Services page
│   │   ├── about.astro          # About page
│   │   ├── contact.astro        # Contact page with form
│   │   ├── privacy.astro        # Privacy policy
│   │   ├── terms.astro          # Terms of service
│   │   ├── blog/                # Blog listing and posts
│   │   ├── careers/             # Career listings
│   │   └── rss.xml.ts           # RSS feed generator
│   ├── styles/
│   │   ├── global.css           # Global styles & Tailwind
│   │   ├── buttons.css          # Button styles
│   │   ├── markdown-content.css # Markdown prose styling
│   │   └── keystatic.css        # Keystatic CMS styles
│   └── content.config.ts        # Content collection schemas
├── scripts/
│   ├── i18n/                    # Internationalization scripts
│   └── remove-keystatic.js      # Keystatic removal utility
├── astro.config.mjs             # Astro configuration
├── tailwind.config.mjs          # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
├── wrangler.toml                # Cloudflare configuration
├── netlify.toml                 # Legacy Netlify config (not used)
├── keystatic.config.tsx         # Keystatic CMS config
└── starwind.config.json         # Starwind component registry
```

---

## 📝 Content Management

### Content Collections

Defined in `src/content.config.ts`:

1. **blog** - Blog posts
   - Location: `src/data/blog/en/`
   - Schema: title, description, authors (reference), pubDate, heroImage, categories, draft
   - Format: MDX files with frontmatter

2. **authors** - Blog authors
   - Location: `src/data/authors/`
   - Schema: name, avatar (image), about, email, authorLink

3. **otherPages** - Additional content pages
   - Location: `src/data/otherPages/`
   - Schema: title, description, mappingKey, draft

4. **careers** - Job postings
   - Location: `src/data/careers/`
   - Schema: title, category, location, type, requirements, applicationUrl, publishDate

### Querying Content

```typescript
import { getCollection } from "astro:content";

// Get all published blog posts
const posts = await getCollection("blog", ({ data }) => {
  return data.draft !== true;
});

// Get specific author
const author = await getEntry("authors", "author-slug");
```

### Adding New Blog Post

1. Create folder: `src/data/blog/en/my-post-slug/`
2. Add `index.mdx` with frontmatter:
```mdx
---
title: "My Post Title"
description: "Post description"
authors: ["author-slug"]
pubDate: "2025-12-17"
heroImage: ./heroImage.jpg
categories: ["category1", "category2"]
draft: false
---

Content goes here...
```

---

## 🎨 Styling System

### Tailwind Configuration

**Theme Colors** (defined in `src/styles/global.css`):
```css
/* Light mode */
--color-primary: 17 96 232        /* #1160e8 - blue */
--color-secondary: 247 147 30     /* #f7931e - orange */
--color-body: 74 74 74            /* #4a4a4a */

/* Dark mode */
--color-darkmode-primary: 56 139 255
--color-darkmode-body: 200 200 200
```

### Custom CSS Classes

**Layout Classes:**
- `.container` - Max-width container with responsive padding
- `.section` - Standard section padding (py-16 md:py-24)
- `.section-sm` - Small section padding (py-12 md:py-16)

**Component Classes:**
- `.btn` - Base button styles
- `.btn-primary` - Primary button with shadow
- `.btn-outline` - Outlined button
- `.card` - Card with border and shadow
- `.input` - Form input styling
- `.textarea` - Textarea styling
- `.select` - Select dropdown with custom arrow

**Utility Classes:**
- `.text-gradient` - Gradient text effect

### Dark Mode

- Implementation: Tailwind's `class` strategy
- Toggle: Floating button (bottom-right) via `ThemeToggle.astro`
- Storage: `localStorage` with system preference fallback
- Prevention: Inline script in `<head>` prevents flash

---

## 📬 Contact Form

### Frontend (`src/pages/contact.astro`)

**Form Fields:**
- name (required)
- email (required)
- company (optional)
- phone (optional)
- inquiry_type (required) - Select: AI Enablement, DevOps & SRE, Security & Compliance, General Inquiry, Other
- message (required)
- referral_source (optional) - Select: Google Search, LinkedIn, Referral, Other
- website (hidden honeypot field)

**Client-side Logic:**
- Prevents default form submission
- JSON POST to `/api/contact`
- Honeypot spam prevention
- Loading state with spinner
- Success/error message display

### Backend (`functions/api/contact.ts`)

**Cloudflare Pages Function:**
- Type: `onRequestPost`
- Environment variables: `DB` (D1), `RESEND_API_KEY`, `CONTACT_EMAIL`

**Process Flow:**
1. Validate required fields
2. Check honeypot (silent fail if triggered)
3. Validate email format
4. Extract metadata (IP, user agent, referrer)
5. Insert to D1 database
6. Send email via Resend API
7. Return JSON response with contact_id

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

### Environment Variables

**Cloudflare Pages Environment Variables:**
- `RESEND_API_KEY` - Resend API key for email sending
- `CONTACT_EMAIL` - Destination email (default: whyhellothere@secunit.io)

**Cloudflare D1 Binding:**
- Variable name: `DB`
- Database name: `secunit-contacts`
- Database ID: `4b4a4589-119f-4a2b-aff7-0de7402ade8d`

### Exporting Contacts

```bash
# Query D1 database
wrangler d1 execute secunit-contacts --command="SELECT * FROM contacts WHERE status = 'new'"

# Export to JSON
wrangler d1 execute secunit-contacts --command="SELECT * FROM contacts" --json > contacts.json
```

---

## 🚀 Deployment

### Cloudflare Pages

**Configuration:**
- Framework preset: Astro
- Build command: `yarn build` or `npm run build`
- Build output: `dist/`
- Node version: 18+ (specified by Cloudflare)

**Custom Domain:**
- Primary: `secunit.io`
- WWW redirect: `www.secunit.io` → `secunit.io`

**Environment Setup:**
1. Connect GitHub repository
2. Set environment variables (RESEND_API_KEY, CONTACT_EMAIL)
3. Bind D1 database (`DB` → `secunit-contacts`)
4. Configure custom domain
5. Deploy automatically on push to `main`

### Build Process

```bash
# Install dependencies
yarn install

# Build for production
yarn build

# Preview production build locally
yarn preview
```

**Build Output:**
- Static HTML/CSS/JS in `dist/`
- Cloudflare Pages Functions in `functions/` (automatically detected)
- Sitemap generated
- RSS feed generated

---

## 💻 Development Workflow

### Local Development

```bash
# Start dev server (http://localhost:4321)
yarn dev

# Format code
yarn format

# Lint code
yarn lint
```

### Adding a New Page

1. Create `src/pages/my-page.astro`
2. Use `Base` layout for consistency
3. Add to navigation in `src/components/Header.astro`
4. Add to footer if applicable in `src/components/Footer.astro`

### Adding a New Component

1. Create component in `src/components/[category]/ComponentName.astro`
2. Use TypeScript for props interface
3. Follow existing component patterns
4. Use Tailwind classes for styling

### Testing Contact Form Locally

**Note:** Contact form requires Cloudflare environment variables and D1 database. For local testing:
1. Use `wrangler dev` with local D1 binding
2. Or deploy to Cloudflare Pages preview environment
3. Or mock the API response for frontend testing

---

## ✨ Key Features

### SEO Optimization

**Base Layout (`src/layouts/Base.astro`):**
- Canonical URLs
- Open Graph tags (og:title, og:description, og:image)
- Twitter Card tags
- Sitemap generation
- RSS feed
- Structured data (JSON-LD) support via `src/js/jsonLD.ts`

### Performance

- Static site generation (no runtime server)
- Minimal JavaScript
- Optimized images (manual optimization)
- Preconnect to external resources (Google Fonts)
- Dark mode without flash (inline script)

### Accessibility

- Semantic HTML
- ARIA labels on interactive elements
- Focus states on all interactive elements
- Keyboard navigation support
- Color contrast compliance

### Mobile Responsive

- Mobile-first Tailwind approach
- Responsive navigation (hamburger menu)
- Touch-friendly tap targets
- Responsive typography scale

---

## 🌍 Internationalization

### Current Setup

**Configured for i18n but only English (EN) is active:**
- Locale support: `en`, `fr` (defined in `src/config/siteSettings.json.ts`)
- Default locale: `en`
- Content structure supports multiple languages (`blog/en/`, config files in `en/`)

**To Activate French:**
1. Create `src/config/fr/` directory with translated config files
2. Add blog posts to `src/data/blog/fr/`
3. Update navigation to include language switcher
4. Translate static strings in components

**i18n Scripts:**
- Located in `scripts/i18n/`
- Can copy content between locales
- Update configuration files
- Manage translations

---

## 🐛 Known Issues & TODOs

### ✅ Completed Cleanup (Dec 17, 2025)

1. **Team Images** - ✅ DELETED
   - Removed `src/assets/images/team/` directory with 6 placeholder stock photos
   - Removed `src/config/en/teamData.json.ts` with fake team member data (Jacob Jones, Cameron Williamson, etc.)
   - Removed unused components: `AboutTeam.astro`, `AboutCard.astro`
   - Updated `translationData.json.ts` to remove teamData references

2. **Blog Content** - ✅ DELETED
   - Removed sample/template blog posts: `example-one`, `example-two`, `example-three`
   - Remaining blog posts are theme-specific (VSCode extensions, Tailwind, TSConfig)

3. **Build Issues** - ✅ FIXED
   - Fixed all missing dependencies (8 packages installed)
   - Configured i18n properly in Astro config
   - Fixed Tailwind theme import errors
   - Replaced non-existent color classes with standard Tailwind colors
   - Added missing path aliases and integrations
   - Build now completes successfully (28 pages)

### Cleanup Items

1. **Legacy Config** - `netlify.toml` is present but site uses Cloudflare
   - Action: Can be deleted (kept for reference)

2. **Keystatic** - CMS is configured but may not be in use
   - Config: `keystatic.config.tsx`
   - Action: Confirm if needed, remove via `scripts/remove-keystatic.js` if not

3. **Unused Starwind Components** - Many Starwind components installed but not used
   - Location: `src/components/starwind/`
   - Action: Audit and remove unused components to reduce bundle size

### Feature TODOs

1. **Analytics** - No analytics currently implemented
   - Recommendation: Add Cloudflare Web Analytics or Plausible

2. **Newsletter** - CTA components exist but no newsletter integration
   - Recommendation: Integrate with email service (ConvertKit, Mailchimp, etc.)

3. **Blog Categories** - Category system exists but no category pages
   - Action: Create category listing pages

4. **Search** - No search functionality
   - Recommendation: Add client-side search (Pagefind, Fuse.js)

5. **Testimonials** - Data exists but not displayed on homepage
   - Action: Add testimonials section to homepage

### Content TODOs

1. **About Page** - Jason Dinges bio is placeholder "Bio coming soon"
2. **LinkedIn Links** - Placeholder URLs on about page (line 41 in about.astro)
3. **Privacy Policy** - Review and update
4. **Terms of Service** - Review and update
5. **404 Page** - Could be improved with custom design
6. **Blog Posts** - Remaining blog posts are theme-related (VSCode extensions, etc.) - replace with Secunit-relevant content

---

## 📦 Component Inventory

### Active/Used Components

**Layout Components:**
- `Header.astro` - Main navigation with mobile menu
- `Footer.astro` - Site footer with links and social
- `ThemeToggle.astro` - Dark mode toggle button

**Page Sections:**
- `hero/` - Hero section variants
- `faq/accordion/` - FAQ accordion components
- `logo-cloud/` - Client logo display
- `testimonials/` - Testimonial cards and sliders

**Content Components:**
- `about/AboutCard.astro`, `AboutHeader.astro`, `AboutTeam.astro`
- `post-card/` - Blog post cards
- `category/CategoryBadge.astro`
- `share-buttons/` - Social sharing

**Form Components:**
- `forms/` - Form input components
- Contact form in `pages/contact.astro`

**Utility Components:**
- `seo/` - SEO meta tags
- `markdown-components/` - MDX components
- `button/Button.astro`

### Starwind Components

**Installed (in `src/components/starwind/`):**
- alert, avatar, badge, button, card, checkbox, dialog
- pagination, select, tabs, tooltip, accordion, switch
- input, label, textarea, separator, alert-dialog
- aspect-ratio, breadcrumb, button-group, dropdown
- dropzone, item, kbd, progress, radio-group, sheet
- skeleton, spinner, table, toggle

**Note:** Many Starwind components are installed but not actively used. Consider auditing and removing unused components.

---

## 🔧 Configuration Files

### `astro.config.mjs`
- Site URL: `https://secunit.io`
- Output: `static`
- Integrations: react, tailwind, sitemap, mdx
- Markdown: Shiki theme (github-dark)

### `tailwind.config.mjs`
- Content: All source files in `src/`
- Dark mode: `class` strategy
- Custom colors: primary, secondary, darkmode variants
- Plugins: typography, forms

### `tsconfig.json`
- Path alias: `@/` → `src/`
- Strict mode enabled

### `wrangler.toml`
- Project name: `secunit-io`
- Compatibility date: 2024-12-01
- D1 database binding configuration

### `starwind.config.json`
- Component directory: `src/components`
- Tailwind base color: `neutral`
- CSS variables: enabled

---

## 🎯 Design System

### Typography

**Font Family:**
- Inter (Google Fonts)
- Weights: 400, 500, 600, 700, 800
- Used for both body and headings

**Scale:**
- Base: 16px
- Headings: `font-heading font-bold`
- Body: `text-body` (light) / `text-darkmode-body` (dark)

### Colors

**Primary (Blue):**
- Light: `#1160e8`
- Dark: `#388bff`
- Usage: CTA buttons, links, primary accents

**Secondary (Orange):**
- Color: `#f7931e`
- Usage: AI Enablement service, secondary accents

**Service Colors:**
- AI Enablement: Secondary (orange)
- DevOps/SRE: Primary (blue)
- FinOps: Amber
- Virtual CISO: Green

### Spacing

- Container max-width: `max-w-7xl`
- Section padding: `py-16 md:py-24` (section) or `py-12 md:py-16` (section-sm)
- Card padding: `p-6`
- Grid gaps: `gap-8` or `gap-12`

### Shadows

- Card: `shadow-lg`
- Button: `shadow-lg shadow-primary/25`
- Hover: `hover:shadow-xl`

---

## 📞 Support & Contact

**Project Owner:** Matthew Evans  
**Email:** matthew@secunit.io  
**Website:** https://secunit.io  
**GitHub:** https://github.com/Secunit-Mercantile

---

## 📝 Notes for Future Development

### Performance Considerations

1. **Image Optimization** - Consider adding Astro's image optimization integration
2. **Font Loading** - Currently using Google Fonts; consider self-hosting for better performance
3. **Component Tree Shaking** - Remove unused Starwind components

### Security Considerations

1. **Content Security Policy** - Consider adding CSP headers via Cloudflare
2. **Rate Limiting** - Consider adding rate limiting to contact form endpoint
3. **Input Sanitization** - Form inputs are validated but not sanitized before email display

### Scalability Considerations

1. **Blog Pagination** - Current blog listing shows all posts; add pagination if blog grows
2. **Search** - Add search when blog reaches 20+ posts
3. **Image CDN** - Consider moving images to Cloudflare Images or R2 for better performance

### Maintenance

1. **Dependencies** - Keep Astro and dependencies updated
2. **Content Audit** - Regular review of blog posts and service descriptions
3. **Analytics Review** - Monitor contact form submissions and page performance
4. **A/B Testing** - Consider testing different CTA placements and copy

---

**End of CONTEXT.md**

