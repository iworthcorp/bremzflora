# Bremz Flora

Personal-brand website for Bremz Flora — digital marketing, social media strategy, branding, content marketing, and business development.

Built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (Next.js will pick the next free port if 3000 is taken).

## Content

Editable content lives outside the components, under `src/data/` (services, testimonials, conferences, gallery) and `src/lib/site-config.ts` (brand name, email, location, social links, booking URL).

## Images

`public/images/` currently holds generated placeholder graphics (see `scripts/generate-placeholders.mjs`) standing in for real photography. Swap them for actual photos of Bremz Flora before launch — same filenames, or update the paths in `src/data/*` and the hero/about components.

## Contact form

`src/components/ContactForm.tsx` posts to `src/app/api/contact/route.ts`, which currently just validates and echoes success. Wire it up to a real provider (Formspree, Resend, etc.) before going live — see the `TODO` in that route file.

## Deploy

Ready to deploy as-is on [Vercel](https://vercel.com/new). No environment variables or extra configuration required.
