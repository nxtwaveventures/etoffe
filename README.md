# Étoffe - Authentic Banarasi Sarees

A Next.js website for custom Banarasi saree consultations.

## Quick Start

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Environment Variables

Create `.env.local`:

```
NEXT_PUBLIC_WHATSAPP_NUMBER=918123340481
NEXT_PUBLIC_GOOGLE_FORM_ID=1FAIpQLSdCG53r5tkN24sMXux1_X7zQkJNpxjb0aGFXLUDs-L2IuHeyw
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Vercel Deployment

### Step 1: Import Project
1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select `nxtwaveventures/etoffe`

### Step 2: Configure Environment Variables
In the deployment settings, add:

- `NEXT_PUBLIC_WHATSAPP_NUMBER` = `918123340481`
- `NEXT_PUBLIC_GOOGLE_FORM_ID` = `1FAIpQLSdCG53r5tkN24sMXux1_X7zQkJNpxjb0aGFXLUDs-L2IuHeyw`

### Step 3: Deploy
Click "Deploy" - Vercel will automatically detect Next.js settings.

### Step 4: Add Custom Domain (11sari.com)
1. In your Vercel project → Settings → Domains
2. Add domain: `11sari.com`
3. Add domain: `www.11sari.com`
4. Configure DNS in GoDaddy:

**DNS Records:**
- Type: `A` | Name: `@` | Value: `76.76.21.21`
- Type: `CNAME` | Name: `www` | Value: `cname.vercel-dns.com`

Wait 1-24 hours for DNS propagation.

## Google Form Setup

See `SETUP.md` for detailed instructions on:
- Creating the 23-question consultation form
- Setting up automated email responses
- Configuring form privacy settings

## Tech Stack

- Next.js 14.2.33
- TypeScript
- Tailwind CSS
- Framer Motion (removed for performance)
- Google Forms integration

## Domain

- Production: https://11sari.com
- Repository: https://github.com/nxtwaveventures/etoffe
