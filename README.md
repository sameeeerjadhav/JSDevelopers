# JS Garden Developers — Website Redesign

Modern marketing site for **J.S. Garden Developers** (Bengaluru residential plots).

## Tech stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion**
- Cookie consent + lead enquiry API

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## What’s included

- Redesigned homepage (brand-first hero, projects, trust stats, why us, enquire, footer)
- Cookie consent (Necessary / Analytics / Marketing)
- Lead form posting to `/api/leads` (logged server-side; ready to wire to CRM/email)
- WhatsApp + call CTAs using existing company numbers

## Next steps for the company

1. Replace Unsplash hero images with real project photography
2. Add GA4 / Meta Pixel IDs inside `CookieConsent` loaders
3. Connect `/api/leads` to email, Google Sheets, or CRM
4. Add dedicated project detail pages when content is ready
