# JS Garden Developers — Website

Marketing site for **J.S. Garden Developers** (Bengaluru residential plots).

## Tech stack

- **Next.js 15** (App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion**

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Copy `.env.example` to `.env.local` and fill in any of the optional keys
below to enable that feature — every one of them is a safe no-op when unset.

## What's included

- Homepage, About, Contact, Projects listing, and per-project detail pages
  (`src/app/projects/[slug]`), all driven by the data in `src/lib/site.ts`
- SEO: per-page metadata/canonicals, Open Graph + Twitter cards, a generated
  branded OG image (`src/app/opengraph-image.tsx`), JSON-LD (RealEstateAgent
  + BreadcrumbList), `sitemap.xml`, and `robots.txt`
- Header that switches from a transparent hero overlay to a solid navbar on
  scroll (`src/components/Header.tsx`)
- Auto-rotating project category tabs with a fill progress bar and an
  explicit pause/play control (`src/components/ProjectsShowcase.tsx`)
- Cookie consent banner (Necessary / Analytics / Marketing) wired to
  consent-gated GA4, Meta Pixel, and Google Ads loaders
  (`src/lib/tracking.ts`) — nothing loads until a visitor opts in, and
  "Reject non-essential" actually blocks it
- First-touch marketing attribution (UTM params, referrer, device) captured
  per visit and attached to submitted leads when consented
  (`src/lib/attribution.ts`)
- Lead enquiry form posting to `/api/leads` — logged server-side always, and
  emailed via Resend when `RESEND_API_KEY` / `LEAD_NOTIFICATION_EMAIL` are set
  (`src/lib/email.ts`)
- Privacy Policy page (`/privacy`), linked from the footer, the enquiry
  form's consent checkbox, and the cookie banner
- Custom 404 page, sitewide keyboard-focus styling, and a GitHub Actions
  workflow that runs lint + typecheck + build on every push/PR
  (`.github/workflows/ci.yml`)

## Environment variables

See `.env.example` for the full list with explanations. None are required
for `npm run dev` or `npm run build` to work — each integration degrades
gracefully to "logged, not sent" until configured:

- `NEXT_PUBLIC_GA_MEASUREMENT_ID`, `NEXT_PUBLIC_GOOGLE_ADS_ID`,
  `NEXT_PUBLIC_META_PIXEL_ID` — analytics/marketing tracker IDs
- `RESEND_API_KEY`, `LEAD_NOTIFICATION_EMAIL`, `LEAD_EMAIL_FROM` — lead
  notification email delivery

## Next steps for the company

1. Replace Unsplash placeholder photos with real project photography
2. Swap the placeholder domain in `src/lib/site.ts` (`siteUrl`) for the real
   production domain once registered
3. Create the analytics/email accounts above and drop the IDs into
   `.env.local` (or your hosting provider's environment settings)
4. Add real RERA registration numbers per project where applicable
