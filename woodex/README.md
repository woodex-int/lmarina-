# Woodex Interiors — immersive website

Award-calibre, scroll-driven marketing site for a Lahore interior design, architecture and
custom solid-wood furniture studio. Theme language: Linoxa `home-two`, fully re-authored and
rebuilt (not copied) for the Woodex brand.

**Live experience features:** cinematic preloader, custom cursor, Lenis smooth scrolling,
GSAP ScrollTrigger choreography (masked-word reveals, clip-path media wipes, parallax depth,
floating 3D-tilt chips, infinite marquees), fullscreen menu, filterable portfolio, testimonial
carousel, FAQ accordions and a WhatsApp-first brief form.

## Stack
- Next.js 15 (App Router, fully static/SSG) · React 19 · TypeScript
- Tailwind CSS v4 (design tokens in `app/globals.css`)
- GSAP + ScrollTrigger · Lenis · lucide-react
- Self-hosted variable fonts (Fraunces + Inter via fontsource)
- No UI framework / no CMS dependency — content lives in `lib/`

## Run
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production static build
npm run start
```

## Structure
- `app/` — routes: home, about, services (+6 detail pages), projects, journal (+3 articles),
  contact, `sitemap.ts`, `robots.ts`
- `components/` — motion system (`Motion.tsx`, `SmoothScroll.tsx`, `Preloader.tsx`, `Cursor.tsx`),
  chrome (`Header`, `Footer`, `WhatsAppFab`), home acts (`components/home/*`)
- `lib/services.ts` — full SEO content for all six services (copy, deliverables, stats, FAQs)
- `lib/content.ts` — projects, journal articles, testimonials, process, stats, clients
- `public/images/` — generated brand imagery (replace with project photography per master plan)

## SEO
Per-page metadata + canonicals, OpenGraph/Twitter cards, Organization (`InteriorDesigner`),
Service, FAQPage, BreadcrumbList, Blog/Article JSON-LD, XML sitemap, robots, semantic landmarks,
AVIF/WebP responsive images. Set the production domain via `NEXT_PUBLIC_SITE_URL`.

See `../MASTER_PLAN.md` for the complete brand, art-direction, 3D-hero, motion, SEO, audit,
performance and launch specification.
