# Dev Environment Setup

This document describes the development environment setup for `dev.secunit.io`.

## Branch Strategy

- **`main`** - Production branch (deploys to `secunit.io`)
- **`dev`** - Development branch (deploys to `dev.secunit.io`)

## Fly.io Apps

- **Production:** `secunit-io` → `secunit.io`
- **Development:** `secunit-io-dev` → `dev.secunit.io`

## Initial Setup

### 1. Create Dev Fly.io App

```bash
# Create the dev app
fly apps create secunit-io-dev

# Launch with dev config (will prompt for settings)
fly launch --config fly.dev.toml --name secunit-io-dev --no-deploy
```

### 2. Set Environment Variables

```bash
# Set dev-specific environment variables
fly secrets set --app secunit-io-dev \
  RESEND_API_KEY="your-resend-api-key" \
  CONTACT_EMAIL="dev@secunit.io" \
  CLOUDFLARE_ACCOUNT_ID="your-account-id" \
  CLOUDFLARE_D1_DATABASE_ID="dev-database-id" \
  CLOUDFLARE_API_TOKEN="your-d1-api-token" \
  ASTRO_SITE_URL="https://dev.secunit.io"
```

### 3. Create Dev D1 Database (Optional)

If you want a separate database for dev:

```bash
# Create dev database
wrangler d1 create secunit-contacts-dev

# Get the database ID and update secrets
fly secrets set --app secunit-io-dev CLOUDFLARE_D1_DATABASE_ID="new-dev-db-id"
```

### 4. Add Custom Domain

```bash
# Add dev subdomain
fly certs add dev.secunit.io --app secunit-io-dev
```

## Deployment

### Manual Deployment

```bash
# Deploy dev branch to dev environment
fly deploy --config fly.dev.toml --app secunit-io-dev
```

### Automatic Deployment

The GitHub Actions workflow (`deploy-dev.yml`) automatically deploys when you push to the `dev` branch.

## Workflow

### Daily Development

1. Work on `dev` branch
2. Push changes → Auto-deploys to `dev.secunit.io`
3. Test on dev environment
4. When ready, merge `dev` → `main` → Auto-deploys to production

### Syncing from Production

```bash
# Update dev branch with latest from main
git checkout dev
git merge main
git push origin dev
```

## Differences from Production

- **Environment:** `NODE_ENV=development`
- **Site URL:** `https://dev.secunit.io`
- **Min Machines:** Can scale to zero (cost savings)
- **Database:** Separate D1 database (optional)
- **Email:** Dev email address for contact form

## Troubleshooting

### View Dev Logs

```bash
fly logs --app secunit-io-dev
```

### SSH into Dev Instance

```bash
fly ssh console --app secunit-io-dev
```

### Check Dev App Status

```bash
fly status --app secunit-io-dev
```

