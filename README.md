# ilkancom

Mobile-first profile microsite built with Next.js, TypeScript, and Tailwind CSS.

The experience is designed as a two-step vertical flow:

1. A bold editorial cover section inspired by barber and fashion poster layouts
2. A practical swipe-down link hub with booking actions, social links, and featured content

## Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS 4
- `next/font`

## Run Locally

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Production

```bash
pnpm build
pnpm start
```

## Project Structure

```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    FeaturedCard.tsx
    LinkButton.tsx
    LinkHub.tsx
    ProfileHero.tsx
    SocialRow.tsx
    SwipeIndicator.tsx
  data/
    brand-profile.ts
  lib/
    site.ts
    utils.ts
public/
  images/
    experience/
```

## Editing The Brand Content

All demo content lives in:

- `src/data/brand-profile.ts`

Update this file to replace:

- brand name and handle
- hero title and subtitle
- city and service type
- CTA links
- social links
- featured card content
- image paths and accent colors

## Notes

- The homepage uses CSS scroll snap to create the cover-to-link-hub transition.
- The layout is optimized for phone widths first, then framed cleanly on larger screens.
- Reduced-motion preferences are respected in global styles.
