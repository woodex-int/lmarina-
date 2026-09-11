# WOODEX INTERIORS — MASTER PLAN
### A cinematic, conversion-engineered website replicating the **Linoxa `home-two`** theme, re-authored for a Lahore-based interior design, architecture & custom solid-wood furniture studio.

**Reference theme:** https://linoxa.webflow.io/home-two (structure, rhythm & interaction language — re-created at 100% fidelity)
**Competitors audited:** [mavric.pk](https://mavric.pk/) · [hiline.pk](https://hiline.pk/interior-designer-in-lahore-pakistan/) · [aenzay.com](https://aenzay.com/)
**Build in this repo:** `woodex/` — Next.js 15 · Tailwind v4 · GSAP + Lenis · 20 pre-rendered routes
**Status:** ✅ Homepage (home-two replica), 6 complete SEO service pages, About, Projects (filterable), Journal + 3 articles, Contact, sitemap, structured data — building & running.

> This document is the single source of truth. It contains: brand & competitor strategy, the complete art-direction system, the 3D hero specification, the full UX/scroll choreography, SEO architecture & content strategy, the luxury audit, performance fix-list and the production launch checklist.

---

## 0. EXECUTIVE SUMMARY

**The opportunity.** Pakistan's interior-design category online is a sea of dense WordPress/Elementor pages, sticky quote bars, stock-looking photography and long blocks of keyword prose. The work these firms deliver (Hiline's Q-Links HQ, Aenzay's InnoVista co-working, Mavric's residences) is genuinely sophisticated; their websites undersell it by a decade. **No incumbent occupies the editorial, award-calibre, cinematic lane** — the lane Linoxa-style templates exist to fill.

**The positioning.** *Woodex — Considered spaces. Crafted in wood.* A design studio that began as a solid-wood furniture workshop and now designs and builds offices, homes and retail under one accountable contract. The category sells decoration; Woodex sells **certainty** — render-to-reality fidelity, fixed BOQ pricing, and furniture made by the people who designed the room.

**The product.** A Linoxa-`home-two`-identical experience — preloader, rotating-word hero, statement manifesto, word marquees, partner strip, hover-image service index, workshop feature, asymmetric collage, dark feature trio, big-type marquee, sticky about narrative, five-step process, testimonial slider, journal, CTA band, mega footer — wrapped in the exact Linoxa design system (Sora + Inter, Light Beige / Jet Black / Deep Navy, documented type scale) and engineered for the actual searches Pakistanis run ("office interior design lahore", "1 kanal house interior", "turnkey contractors", "custom sheesham furniture").

**The commercial model of the site.** One goal: a booked consultation or WhatsApp brief. Every page ends at a *free site visit + test-fit + budget band* offer designed to feel low-commitment, because the single biggest category friction is fear of the unknown budget.

**Success targets (12 months):**
| Metric | Target |
|---|---|
| Core keyword ranks | Page 1 for "office interior designer lahore", "turnkey interior lahore", "custom solid wood furniture lahore" |
| Organic leads | 25 qualified consultation requests/month by month 9 |
| LCP (mobile, field) | ≤ 2.5 s · CLS ≤ 0.05 · INP ≤ 200 ms |
| Lighthouse | ≥ 95 / 100 / 100 / 100 (Performance/A11y/BP/SEO) |
| Conversion rate | ≥ 2.2% of visitors to a CTA click; ≥ 0.8% to submitted brief |

---

# PART I — BRAND, AUDIENCE & COMPETITIVE STRATEGY

## 1. Brand diagnosis

### 1.1 What Woodex actually is
Woodex is a **full-suite interior studio**: Workplace & residential interior design · Architectural space planning · Retail/hospitality design · Custom solid-wood furniture (own workshop) · 3D visualization & walkthroughs · Turnkey design-and-build fit-outs. The line given by the client — *"Full-suite art gallery / Office Interior Design / Your office is your most visible brand statement"* — establishes **office interiors as the flagship commercial service**, supported by the full suite.

### 1.2 Brand essence
- **Truth:** We started at a workbench; we build what we draw.
- **Personality:** Quietly confident, material-obsessed, unhurried, precise, honest about money. *Old-money craft, modern clarity* (the same emotional territory Hiline attempts with "Old Money + Emotion + Innovation", but executed with restraint instead of clutter).
- **Anti-positioning:** Not the cheapest builder, not the glossy starchitect, not the keyword-farm WordPress site. The studio a detail-oriented client trusts after one studio visit.
- **Name logic:** "Woodex" = wood + index/tech → timber craft with an engineered, documented process. The visual identity must carry both warmth and precision.

### 1.3 The single-sentence pitch
> *"From first sketch to final fit-out, Woodex designs rooms that look exactly like the render and builds the solid-wood furniture inside them — on one contract and one timeline."*

## 2. Audience architecture

| Persona | Who | The pain they arrive with | Job-to-be-done | Primary proof they need |
|---|---|---|---|---|
| **P1 — The Founder/COO** (35–55) | Tech, finance, trading & services firms, 30–250 staff; relocating or fitting 3k–20k sq ft offices in Gulberg/DHA/industrial Lahore | "I can't afford downtime or a reception that embarrasses us; the last vendor overran by months." | Brand-grade HQ delivered on a fixed date & budget | Timeline certainty, named clients, workplace thinking, boardroom photography |
| **P2 — The Family Builder** (32–60, often a couple) | Building/renovating 5 marla–2 kanal homes in DHA, Bahria, Gulberg, Model Town | "Everyone shows the same Pinterest; who will actually coordinate everything and stay on budget?" | A home that fits joint-family life and ages well | 1-kanal case studies, kitchen/wardrobe detail, transparent budget bands |
| **P3 — The Retail/Franchise founder** | Boutiques, bridal/jewellery, F&B, showrooms, mall kiosks | "Every closed week costs rent; will the mall approve the drawings and can they work nights?" | Fast fit-out, conversion-led layout, landlord approvals | Speed stats, repeatable rollout kits, retail case work |
| **P4 — The Overseas Pakistani** | Remitting for a family home/investment remotely | "I'm not in the country — I need photos, reports and honesty." | Remote-buildable trust | Weekly visual reports, 3D walkthroughs, documentation |

**Devices:** P1 & P3 predominantly mobile for first contact (WhatsApp), desktop for design review. P2 mobile-first entirely. **Mobile is the primary design canvas**; desktop is the "wow the committee" layer.

## 3. Competitive teardown (what the data shows)

### 3.1 Mavric — mavric.pk
- **Stack & SEO:** WordPress, aggressive long-form copy and location/house-size landing pages ("1 kanal house design lahore", "5 marla house design", "landscape designer lahore"). Strong internal-linking strategy; services = Architecture, Interior, Furniture Design, Residential.
- **Trust plays:** "certified/experienced team", budget-conscious, transparent communication, turnkey.
- **Weaknesses (our opening):** Dense text walls, templated WordPress feel, inconsistent image aspect ratios/crops, generic iconography, no cinematic motion, furniture is mentioned but not dramatized, weak headline hierarchy.
- **Steal:** The discipline of long-form, intent-matched copy and size/location landing pages → replicate via Journal + location expansion pages (Phase 3).

### 3.2 Hiline — hiline.pk
- **Stack & positioning:** WordPress/Elementor; tagline *"Old Money + Emotion + Innovation"*, "Sharing stories with designs since 2009", 100+ projects.
- **Commercial mechanics:** Persistent quote form + WhatsApp/email/share bar on every service page; services split **Offices & Workspaces / Shops & Showrooms / Homes & Apartments**; sub-services Construction Drawings, 3D Renders, 3D Visualization; strong case-study depth (Jasmine Grand Mall, Q-Links HQ, US Group IT/Finance, Nevtech, coworking brands).
- **Weaknesses:** Intrusive sticky bars, heavy layout, crowded type, no breathing room, forms before value is established.
- **Steal:** The three commercial service verticals and "100+ projects since…" proof; the persistent WhatsApp option — but present it elegantly (floating, non-blocking, shown after value).

### 3.3 Aenzay — aenzay.com
- **Positioning:** 15 years, **ISO 9001 & ISO 45001**, services Interior Designing / Architectural Designing / Engineering & Fit-Outs; offices Lahore, Islamabad, Karachi; portfolio sized in sq ft (InnoVista 37,776 sq ft, Flow Petroleum 11,000 sq ft).
- **Trust plays:** Blue-chip logo wall — DHL, Nestlé, PepsiCo, Unilever, DHA, Formulatrix; downloadable company profile (Google Drive).
- **Weaknesses:** Utilitarian, text-dense pages, dated media treatment, no emotional narrative, generic headings.
- **Steal:** Quantify every project in square footage; publish a downloadable company/profile PDF; accreditations belong near the footer/contact.

### 3.4 Gap matrix
| Capability | Mavric | Hiline | Aenzay | **Woodex (this plan)** |
|---|---|---|---|---|
| Cinematic, award-calibre motion/UX | ✗ | ✗ | ✗ | **✓ Linoxa-grade system** |
| Editorial typography & art direction | ✗ | partial | ✗ | **✓ Sora/Inter, exact Linoxa tokens** |
| Own furniture workshop as hero | partial | ✗ | ✗ | **✓ flagship feature card + service** |
| Render-to-reality promise (3D→build) | ✗ | partial | ✗ | **✓ 3D service + side-by-side proof** |
| Transparent budget bands & timelines | partial | ✗ | ✗ | **✓ published in Journal & FAQs** |
| Fixed BOQ / single-contract accountability | partial | partial | partial | **✓ core message everywhere** |
| Persistent WhatsApp/quote path | ✗ | ✓ (ugly) | ✗ | **✓ elegant floating action** |
| Structured data / semantic SEO | weak | weak | weak | **✓ Service/FAQ/Article/Breadcrumb JSON-LD** |
| PageSpeed/Core Web Vitals discipline | weak | weak | weak | **✓ SSG, AVIF, 103 kB shared JS** |

**Strategic conclusion:** compete on **perceived quality** at the top of the funnel (nobody else can win an Awwwards-style first impression) and on **trust mechanics** at the bottom (fixed BOQ, timelines, owned workshop, quantified portfolio) — while matching their long-tail SEO depth over time.

## 4. Goals, KPIs & conversion model

1. **Primary conversion:** *Book free consultation* (form) / WhatsApp brief (tap).
2. **Secondary:** phone call, project enquiry on a specific case, downloaded profile/price guide (Phase 2 lead magnet).
3. **Micro-conversions (measured):** 3D/gallery interactions, service-row hovers, FAQ opens, 50%+ scroll depth, CTA exposure.
4. **Funnel:** Cinamic homepage → service page (intent match) → case/proof → free test-fit offer → WhatsApp/form → studio visit → signed BOQ.
5. **Baseline instrumentation:** GA4 (form_* and whatsapp_click events), Microsoft Clarity recordings/heatmaps, Search Console; conversion events pushed to Google Ads for retargeting.

---

# PART II — ART DIRECTION (Award-winning Creative & 3D Director's spec)

## 5. Visual narrative & emotional journey

**Narrative arc across the homepage — a five-act film:**

1. **Arrival / Aspiration** (preloader + hero): the brand promise assembles itself word by word over a warm, cinematic room. Emotion: *calm anticipation — "these people are different."*
2. **Belief** (three statements + marquees): the philosophy lands — purpose, permanence, performance. Emotion: *intellectual trust.*
3. **Proof of range** (partner strip, service rows, workshop feature, collage): breadth + the unique craft asset. Emotion: *"they can actually do all of it."*
4. **Self-recognition** (about narrative + process + stats + testimonials): the visitor sees their own project running smoothly. Emotion: *relief from category anxiety.*
5. **Commitment** (journal reinforces expertise → CTA band): invitation, not pressure. Emotion: *low-risk next step.*

**Material metaphor running through every page:** *a room revealed in daylight* — clip-path wipes that read like blinds lifting onto a finished space, light oak and pale stone textures, workshop moments in bright ateliers, single deep-navy accents. The site should feel like walking into a sunlit, museum-quiet architecture studio — beige plaster, pale timber, black steel, one navy chair.

## 6. Color system (with reasoning)

The palette now follows the **Linoxa style guide exactly** (8 documented tokens), with Woodex semantic token names mapped onto them:

| Linoxa token | Hex | Woodex role | One-line reasoning |
|---|---|---|---|
| Light Beige | `#FCF2E8` | Page base (`paper`) | The template's signature warm gallery background; flatters architectural photography without sterile white. |
| Black | `#000000` | Preloader, darkest bands (`night`) | Maximum cinematic contrast for entrances and the feature-trio band. |
| Jet Black | `#111111` | Headlines, primary buttons, raised dark surfaces (`espresso`/`ink`/`night-2`) | Slightly softer than pure black — the workhorse dark. |
| Deep Navy Blue | `#0F1E36` | **Single brand accent** (`walnut`/`brass` roles): emphasis, links, icon tiles, dark feature band | The one cool note in a warm system — reads premium and architectural; tint `#7D93B8` used for on-dark accent text. |
| Charcoal Gray | `#525252` | Body copy (`ink-soft`) | Documented body-text grey with AA contrast on beige. |
| Silver | `#C0C0C0` | Muted fills (`clay`) | Neutral mid-grey for de-emphasized UI. |
| Light Gray | `#E3E1E1` | Raised neutral surfaces (`paper-2`) | Cool light grey cards/bands that sit cleanly on beige. |
| Deep Gray | `#D9D9D9` | Borders, hairlines (`sand`) | The standard neutral border value. |
| *(derived)* | `#8F98A6` | Captions/eyebrows on dark (`fog`) | Navy-tinted caption grey for dark bands. |
| White | `#FFFFFF` | Inverted text/pills (`cream`) | Buttons and type on dark. |

**Usage rhythm:** light `Light Beige` base → black / Jet-Black / Deep-Navy bands every 3–4 sections (feature trio = black, signature/process = jet black, outcomes/testimonials = deep navy). Dark bands are *pacing devices* that make the next light section feel like walking into daylight. The original warm walnut/brass art direction was deliberately replaced to reach 1:1 design-system fidelity with Linoxa; "wood craft" now lives in imagery, copy and the workshop story rather than brown UI chrome.

**Contrast & accessibility:** Jet Black `#111` on Light Beige `#FCF2E8` ≈ 13.5:1 (AAA); white on Jet Black ≈ 17:1; Deep Navy on beige ≈ 9:1; Charcoal `#525252` body on beige ≈ 7:1 (AA).

## 7. Typography

Linoxa is a **sans-serif system** (confirmed from the live template and its "Sans Serif" classification) — no serif or italic is used.
- **Display — Sora Variable** (weights 400–700, headings at **500**): modern geometric-grotesque display face matching the reference headings; tight display tracking (-0.03em, hero -0.045em).
- **Body/UI — Inter Variable** (300–700, tabular numerals for stats/counters): neutral, engineered, superbly legible on mobile.
- **Fluid scale (clamp, mobile→desktop) — aligned to the Linoxa style-guide spec:** Display (hero only) `clamp(3.25rem,1rem+9vw,10.5rem)` · **H1 5rem / 112.5% / 500** · **H2 2.812rem / 122% / 500** · **H3 1.875rem / 133% / 500** · H4 1.562rem / 128% · H5 1.25rem / 150% · H6 1.125rem / 155% / 400 · Lead `1.06→1.25rem` · Body 1rem / **162%** / 400 · Sub-text 0.875rem / 185% · Button 0.9375rem / 162% / 500 · eyebrows 11px, +0.24em tracking, uppercase.
- **Rules:** headlines tight (`letter-spacing:-0.03em`, hero -0.045em); never more than ~68 characters per measure; emphasis words render non-italic at weight 500 in Deep Navy (Sora has no italic); numbers always tabular.
- **Live reference:** the full system is published at **`/style-guide`** (noindex utility, linked in the footer) mirroring Linoxa's style guide: the exact 8-color palette with copy-to-clipboard hex, complete type table + live specimens, small/medium/large shadows, logo & favicon lockups, all button states (incl. focus/disabled), lists, social + line icon library, 40px avatars, inputs with success/error states, and rich-text standards.
- **Self-hosted via fontsource** (no Google round-trip; FOUT eliminated; see Performance).

## 8. Spacing, grid, radius, elevation

- 8pt base; section padding `clamp(5.5rem,4rem+7vw,11rem)` — generous editorial whitespace is the #1 "expensive" signal competitors lack.
- 12-column grid, max content width 1480px, fluid gutters `1.25→4rem`.
- Radii: media 14–26px (`--radius-m/l`), pills 999px, small tags 6px. Soft radii = crafted furniture edges; never sharp corporate corners.
- Elevation is rare and warm: `0 40px 90px -35px rgba(23,18,13,.55)` on floating cards; depth mostly via scale + clip reveals + actual parallax, not box-shadow.

## 9. Imagery & material treatment

- **Photography direction:** bright, airy interiors in soft daylight; light beige plaster/limewash, **pale oak** veneer and slats, light travertine/terrazzo, cream boucle/linen, black steel frames, and **one deliberate Deep Navy accent** per scene (a chair, panel or door); mostly **unpeopled** rooms (the viewer imagines themselves in); occasional candid craft/team moments for humanity; light oak grain macro textures.
- **Crops:** 4:5 hero portrait (mobile 4:5/1:1), 16:10 feature, 4:3 cards, 1:1 accents; the asymmetric collage (big + wide + two macros) is a signature Linoxa device, retained.
- **Treatment:** zero fake HDR; consistent bright neutral grade (high-key, soft shadows, no amber/sepia); every image sits inside clip-reveal and slow 1.05–1.25 scale on scroll/hover. Alt text always descriptive & keyword-aware (accessibility + image SEO).
- **Generated suite (delivered, all regraded to the Linoxa palette):** hero office, office/workspace, residential, retail, furniture-workshop (pale oak), 3D studio, turnkey fit-out, studio team, boardroom, hotel-lobby. Final production should replace AI images with shot photography following this exact shot list.

## 10. Buttons, micro-components & states

- **Primary button:** espresso pill, arrow in a circular chip; on hover a walnut fill wipes up (translateY 101%→0), arrow nudges x+3. Secondary = 1px hairline outline that fills invert; light variants for dark bands. 550ms, easing `cubic-bezier(.22,1,.36,1)`.
- **Service rows:** hairline-separated index rows; hover reveals a floating rotated preview image (scale .92 rotate(-4°) → 1 rotate(2°)) that follows the row — the most copied "luxury index" interaction and the centrepiece of the services section.
- **Tags/pills** for portfolio filters; **accordion** for FAQs (grid-template-rows 0fr→1fr, plus rotates 45°); **inputs** are underline-only, no boxes (quiet luxury); labels are tracked uppercase micros.
- **State coverage:** hover, focus-visible (2px Deep-Navy offset ring — non-negotiable for a11y), active, disabled, reduced-motion.

## 11. THE 3D / HERO SPEC (creative-technologist brief)

### 11.1 Shipped version (Layered "2.5D" cinematic — in the build now)
Chosen deliberately for performance and because we have no proprietary model yet; it achieves 90% of the awe at 2% of the payload.

- **Central composition:** portrait 4:5 architectural photograph (bright beige/pale-oak office/reception with a navy accent) in a rounded 26px frame with a soft ambient shadow and a subtle navy radial glow behind it.
- **Depth layers:** (a) grain overlay fixed at z-9000; (b) ambient radial gradients at ~10% parallax; (c) headline z-10; (d) media with scroll-scrubbed scale 1.35→1.12 and y 14%; (e) two floating glass cards ("12 years of craft", "Lahore · Islamabad · Karachi") that **tilt in 3D toward the cursor** (rotateX/rotateY ±7°, parallax x±26px, transformPerspective 600).
- **Headline:** static line "Considered spaces." → **rotating italic line cycling** *Lasting design. → Built in wood. → Life, enhanced.* every 3.2s (mask slide + fade) → static "crafted in wood."
- **Entrance (after preloader):** eyebrow 0→1; headline lines masked rise (120%→0, 3° rotation, stagger .12, 1.2s, power4.out); copy blocks .55s; media clip-path inset(0 0 100%)→0 (1.4s) while image scales 1.35→1 over 2.2s; chips at .9s.
- **Scroll behaviour:** scrubbed parallax — media zooms/pans, headline drifts up and fades to 15% opacity, chips rise faster (parallax depth).
- **Cursor:** custom difference-blend dot + lagging ring; expands to "View"/"Open"/"Read" label over interactive media.
- **CTAs:** *Book free consultation* (primary) + *Explore our work* (outline); scroll hint bottom-left; meta bottom-right.

### 11.2 Flagship WebGL upgrade (Phase 2 — the "unforgettable" option)
- **Central object:** a slowly rotating **architectural room section / exploded axonometric of an office** that *assembles itself from solid-wood parts* — timber slats, a boardroom table, glazing panels, pendant lamps drifting together on load (the brand story in 3 seconds: pieces → room).
- **Geometry/materials:** low-poly PBR; pale-oak slats with procedural grain normal map + subtle clearcoat; black-steel hardware at metalness 1/roughness .28; frosted glass (transmission) partitions; matte Light-Beige plaster walls; one Deep-Navy upholstered element; a single light-terrazzo floor plane.
- **Lighting:** HDRI golden-hour environment (warm key from screen-left at 3200K), soft cool fill opposite, one emissive pendant; baked AO; exposure tuned for cinematic blacks; optional god-ray volumetric (desktop only).
- **Camera:** 35mm-equivalent, slight handheld breathing (±0.4°), slow dolly-in on load; scroll scrubs camera through the section → exploded view → completed room → pulls back as the next section pins.
- **Geometry/materials:** low-poly PBR; pale-oak slats with procedural grain normal map + subtle clearcoat; black-steel hardware at metalness 1/roughness .28; frosted glass (transmission) partitions; matte Light-Beige plaster walls; one Deep-Navy upholstered element; a single light-terrazzo floor plane.
- **Atmosphere:** fine dust motes in the light beam (GPU points, ≤2k), film grain overlay, subtle vignette, warm fog at 0.03 density.
- **Cursor:** pointer raycasts onto furniture pieces — they highlight and a label fades in ("Walnut boardroom table — hand-joined"); click scrubs to that assembly step.
- **Tech & budgets:** **React Three Fiber + drei + GLTF** + `@react-three/postprocessing`; DRACO/Meshopt compressed model ≤ 1.8MB, KTX2 textures; lazy-loaded behind the 2.5D poster so LCP is the `<Image>` (never the canvas); capped DPR 1.75; mobile renders the still image + light parallax (no WebGL under 6GB RAM / reduced-data); pause RAF when tab hidden; aim ≤1.2MB JS increment and 60fps (scrub at 30fps acceptable on scroll).
- **Headline (locked):** *Considered spaces.* / rotating: *Lasting design.* → *Crafted in wood.* → *Life, enhanced.*
- **CTA:** *Book free consultation* + *Explore our work.*

## 12. Atmosphere & depth toolkit
Film grain (animated SVG turbulence, fixed, 5% opacity), warm radial glows per section, clip-path scene wipes at section boundaries, hairline rules and oversized outlined/stroked marquee type alternating with italic serif words, giant watermark "WOODEX" at 4.5% in the footer, mix-blend-difference cursor, noise-free but shadow-rich photography.

---

# PART III — UX ARCHITECTURE & MOTION SYSTEM

## 13. Sitemap & page inventory

```
/                              Home — Linoxa home-two replica (16 acts, incl. Layout/Design/Create
                               micro-bar + Building documentation pack section)
/pricing                       Packages & pricing (Linoxa pricing-one equivalent):
                               Concept / Studio / Atelier tiers, PKR/sq ft, stats, pricing FAQ schema
/about                         Studio story, values, stats, process, FAQ
/services                      Full-suite index (6 services, alternating cards)
/services/office-interior-design        ★ Flagship, full SEO + FAQ schema
/services/residential-interior-design
/services/retail-showroom-interior-design
/services/custom-solid-wood-furniture
/services/3d-visualization
/services/turnkey-design-build
/projects                      Filterable portfolio (All/Offices/Residential/Retail/Hospitality)
/journal                       Editorial index + featured article
/journal/[slug]                3 SEO articles (Article schema)
/contact                       Brief form (WhatsApp handoff) + details
/style-guide                   Design system reference (noindex; Linoxa style-guide equivalent)
/sitemap.xml · /robots.txt · JSON-LD on every relevant route
Phase 2: /projects/[slug] case studies · /locations/* (DHA, Bahria, Gulberg, Islamabad…)
         /pricing or /cost-guide lead magnet · /profile.pdf
```

## 14. Second-by-second page flow (first load → final CTA)

| Time | Event | Purpose / attention design |
|---|---|---|
| 0.0–0.4s | `<head>` critical CSS, fonts preloaded, paper background painted instantly | No white flash; perceived speed |
| 0.1–2.4s | **Preloader**: night panel, "Considered *spaces.*" masked word rises, navy-tinted bar scales, counter 000→100 (tab-numeral), word exits up, panel wipes away (power4, 1s) | Brand tone while assets settle; turns waiting into choreography |
| 2.4–4.5s | **Hero entrance** (timeline §11.1): eyebrow → masked headline lines → copy/CTAs → image clip wipe + image settle zoom → floating chips | Eye path: top-left word → face of the type → image → CTAs |
| 3.2s loop | Rotating italic phrase every 3.2s | Keeps hero alive without motion noise; reinforces 3 brand values |
| Scroll act 1 | **Statements** (3 manifesto rows, numbered 01–03) reveal lines by word as they enter; paragraphs fade | Reading cadence; establishes philosophy |
| | **Word marquee** "Interiors ✦ Architecture ✦ Furniture ✦ 3D Design ✦ Fit-Outs" — outlined sans + italic serif alternating, infinite 32s, pauses on hover | Brand breadth; playful luxury; label-free positioning |
| | **Partners**: two-column claim + reverse-direction client wordmark strip | Social proof without fake logos (text wordmarks, replace with real client SVG logos) |
| | **Services index**: heading + 3 hairline rows; **floating image preview on hover** follows cursor; arrow circle inverts; below, full-bleed dark **Workshop feature card** (the differentiator); 3 quick-link pills | Primary navigation for intent; hero image = fastest path to service page |
| | **Collage**: asymmetric 4-image arrangement with clip reveals + one inner parallax image; process claim | Art-directed proof of visual quality |
| | **Feature trio** (dark band): Interior design / Consultation / 3D modeling with line icons, hover lift | Capability clarity |
| | **Big type marquee** on espresso: "Crafted in wood → Built around you → Designed to outlast trends → Delivered on a date" | Mantra + the four promises (incl. the #1 objection: dates) |
| | **About narrative**: sticky 4:5 image with inner parallax + floating "Strategic planning" card; right column story + 4 animated counters (12 / 240+ / 45k+ / 94%) | Founder story + quantified credibility |
| | **Process index**: 5 hairline rows (Discover→Concept→3D→Craft & build→Style & handover) with week ranges | Removes fear: "I know exactly what happens" |
| | **Testimonials** (walnut-deep band): rotating quote carousel, 5-stars, autoplay 7s + arrows/dots | Emotional proof |
| | **Journal**: 3 article cards (clip reveal + zoom image, category/date/read-time meta) | SEO depth + confidence; exits later on remarketing lists |
| | **CTA band** (night, min 70vh, centered): "Stay connected with us" + two CTAs | The single commitment moment |
| Footer | 4-col footer + giant WOODEX watermark, services/explore/contact, hours, social | Sitemap-level navigation; final WhatsApp/phone exit |
| Global | Sticky header: transparent over hero → blurred paper + hairline after 40px; full-screen night menu with giant staggered links (clip-wipe open, 0.9s), meta block; floating WhatsApp (appears after first CTA exposure) | Always an exit, never an obstruction |

## 15. Complete motion system (creative-developer spec)

- **Smooth scrolling:** Lenis 1.15s duration, custom easing `1.001 - 2^(-10t)`; wired to GSAP ticker; anchor links routed through `lenis.scrollTo(offset:-90)`; menu/preloader stop/start the scroll; `touchMultiplier 1.6`.
- **Layered parallax rates:** background glows 0.05 · media inner images 0.06–0.12 · floating chips 0.25 · headlines 0.12 — depth = differential speed, never one uniform pan.
- **Reveal vocabulary (use ONLY these 4 — discipline prevents noise):**
  1. **Masked-line rise** — word/line in overflow-hidden, y 115% + 4° → 0, power4.out 1.05s, stagger .04–.12 (headlines).
  2. **Fade-rise** — opacity 0 + y 34px → 0, power3.out 1.1s (paragraphs, cards; `[data-reveal]`).
  3. **Clip-wipe** — clip-path inset(bottom 100%)→0, power4.inOut 1.35s, paired with inner image 1.25→1 scale (all media).
  4. **Counter** — tabular numerals 0→target, power2.out 1.8s, once at 90% visibility.
- **Scroll-trigger rules:** start at `top 85–88%`, once=true (except scrubbed parallax/hero); stagger containers, not whole pages; max 120ms between sibling reveals.
- **Pinned moments (Phase 2 enhancement):** hero camera scrub; an optional pinned horizontal "process" scene on desktop only; service gallery pin on case-study pages.
- **Scene changes between dark/light bands:** clip-wipe the *background panel* from the bottom as it enters (0.9s), so day/night feels intentional; type reveals 120ms after the panel.
- **Image-sequence option (case pages):** export 60–90 frame JPEG sequence at 1600px (≈1.2–1.8MB after AVIF), scrub via ScrollTrigger + `<canvas>` with preloading; use for "renders → construction → finished room" — powerful render-to-reality proof.
- **Micro-interactions:** button wipe/fill; arrow chip translate/rotate 45°; service-row preview float; magnetic buttons (max 6px pull — add in Phase 2); link underline scaleX flip; accordion grid-rows; form field underline Deep-Navy on focus; chip 3D cursor tilt; menu link x+3 with arrow fade.
- **Easing library:** standard `--ease-lux cubic-bezier(.22,1,.36,1)` (exits/entrances), `--ease-soft (.65,0,.35,1)` (panel wipes), `--ease-spring (.34,1.4,.4,1)` (icon pops only).
- **Timing law:** entrances 0.8–1.4s; micro ≤0.55s; hover ≤0.5s; never chain more than 4 elements in one tween; **scrubbed motion always eased `none`**; hero autoplay loops use sine/ease power1 (never linear mechanical).
- **Performance guardrails:** transforms/opacity only (no layout-animating properties); `will-change` applied and removed around animation; one ScrollTrigger.refresh after fonts/images; ScrollTriggers batched; cap marquee (CSS keyframes, GPU transform only).
- **Reduced motion:** `prefers-reduced-motion` disables Lenis smoothing, parallax, preloader tween, cursor; all content shown static (already implemented).
- **SEO/UX safety:** no content locked inside JS-toggled opacity for crawlers — initial server HTML contains final text; reveal classes are added only when JS+motion are available.

## 16. Responsive choreography

| Breakpoint | Layout behaviour | Motion behaviour |
|---|---|---|
| ≥1280 | Full 12-col, hover previews, sticky columns, horizontal pin | Full system |
| 768–1279 | 2-col grids, side-by-side feature cards, preview image static | Disable row-follow preview (show image inline), keep reveals |
| 360–767 | Single col; hero media stacks under type; full menu same; 48px tap targets; marquees keep (GPU cheap) | Reduce parallax to 0.04, no cursor, no 3D tilt, counters static, reduced stagger |
| Coarse pointer / touch | No custom cursor; tap = hover for rows (image revealed under heading) | — |

---

# PART IV — COPY, MESSAGE HIERARCHY & CONTENT

## 17. Homepage message hierarchy (conversion copywriter's blueprint)

- **Problem the visitor arrives with:** "I'm about to spend tens of lakhs on an office/home; I fear overruns, ugly surprises, vendors blaming each other, and a room that won't match the render."
- **Alternatives they've already tried:** a separate designer who doesn't build; a contractor who "knows a carpenter"; Pinterest + the neighbourhood furniture market; a cheap agency whose portfolio looked suspiciously foreign.
- **Our unique answer:** one team designs, renders, builds and makes the furniture; the workshop is the proof of buildability; fixed BOQ and dated Gantt.
- **Proof:** 240+ spaces · 12 years · 45k+ sq ft woodwork · 94% repeat/referral · render-vs-reality photos · named clients · quantified cases (sq ft).
- **Price objection handled openly:** "Free first site visit, test-fit and budget band"; published bands and timelines in FAQs/Journal; "two specification tracks"; variation orders in writing — no silent extras.

**Homepage message stack (locked):**
- **H1:** Considered spaces. *(rotating: Lasting design. / Built in wood. / Life, enhanced.)* crafted in wood.
- **Sub-headline:** "We design and build offices, homes and retail spaces that feel inevitable — paired with the solid-wood furniture our studio was founded on. One team, from first sketch to final fit-out."
- **Three benefit blocks:** ① *One accountable team* — design, build & furniture on a single contract. ② *Render-to-reality* — approve photoreal 3D before a rupee is spent on site. ③ *Built to outlast trends* — seasoned solid timber, documented joinery, ten-year craft warranty.
- **Proof block:** counters + client strip + testimonial carousel.
- **Closing CTA:** *Book free consultation* (copy-ranked in §20).

## 18. Founder story — 15-second emotional version

> *"In 2014 I ran a two-bench wood workshop, building solid-sheesham furniture for Lahore's families. The same clients kept coming back with the same grief: the designer's render looked nothing like the room, the 'walnut' was laminate, and nobody on site would take responsibility. They always asked the same question — 'Can you do the whole room?' So we did. Twelve years later we design and fit out headquarters, homes and showrooms across Pakistan… and every project still passes through the workshop that started it."*

(Structure: relatable struggle → turning-point question → solution → present-day proof. Deployed as the About manifesto and a 45-second founder video script in Phase 2.)

## 19. Brand voice rules
Warm, short, declarative. One idea per sentence. No "premium luxury solutions" sludge — we deal in timber species, square feet, weeks and named joinery. Always pair the emotional with the measurable: *"Calm is a deliverable"* is immediately followed by *"weekly reports, snag list closed in ten days."*

## 20. CTA copy — 8 variations, ranked by expected CTR
Risk/low-commitment-first ranking for the Pakistani market (form = high commitment):

1. **Book free consultation** — primary, clearest value + zero-cost (currently the global CTA).
2. **Get my free site visit & test-fit** — highest tangible specificity for commercial clients; A/B test against #1 on service pages.
3. **See my budget band** — attacks the #1 objection (unknown price) head-on; use on journal/pricing entries.
4. **Talk to a designer on WhatsApp** — lowest friction mobile action; floating button.
5. **Start your design brief** — used on the contact form; "start" implies easy, saved progress.
6. **Walk through your space in 3D** — offer-led for visualization/office pages; curiosity click.
7. **Download the fit-out timeline & budget guide** — lead magnet (Phase 2), email capture.
8. **Explore our work** — zero-commitment secondary CTA (already shipped site-wide).
> *Never use:* "Submit", "Learn More" (banned per brief), "Click here". Rule: every button names the thing that happens next.

## 21. Service pages — content architecture (all 6 shipped)
Every `/services/[slug]` page follows the same conversion-optimized anatomy:
1. Breadcrumb + eyebrow + H1 (exact-match service keyword) + *italic pull statement* + CTAs + hero image clip-reveal.
2. **Overview** — 3 paragraphs: category truth/agitation → what Woodex does → the outcome (keyword-rich, ~300 words).
3. **Dark signature band** — the differentiated point of view for that service.
4. **What's included** — 6 numbered, buildable scope items (great SEO long-tail + kills scope anxiety).
5. **Outcomes band** — 4 stat tiles (timelines, densities, quantities).
6. **Gallery** — asymmetric, captioned project moments.
7. **Process** — the five-step method applied to that service.
8. **FAQ accordion** — 3–5 real questions incl. **price + timeline** (FAQPage schema → rich results).
9. **Related services** + reassurance strip (free visit · fixed BOQ · 3D approval · snag walkthrough · warranties).
10. CTA band.
Each page ships: unique `title`/`description`/keywords, canonical, OpenGraph, **Service + FAQPage + BreadcrumbList JSON-LD**.

| Service | Primary keyword | Flagship pull line |
|---|---|---|
| Office Interiors ★ | office interior design lahore | "Your office is your most visible brand statement." |
| Residential | residential interior designer lahore / 1 kanal house interior | "A home should feel inevitable — as though it could belong to nobody else." |
| Retail & Showrooms | retail / showroom interior design lahore | "Every square foot should either sell — or make the selling easier." |
| Custom Furniture | custom sheesham / solid wood furniture lahore | "We began as woodworkers. Everything else grew from the grain." |
| 3D Visualization | 3D interior rendering / walkthrough lahore | "Approve every brick and beam before anyone orders a brick." |
| Turnkey Design & Build | turnkey interior contractors lahore | "One contract. One timeline. One team that cannot point fingers." |

## 22. Editorial / SEO content plan (Journal)
**Shipped (3):** (1) Office interior trends shaping Pakistani workplaces 2026; (2) Solid wood vs veneer — how to choose furniture that lasts; (3) How long does an office fit-out take — a realistic Lahore timeline.
**Next 12 (publish cadence 2/month):** office fit-out cost per sq ft in Lahore 2026 · 1 kanal house interior budget breakdown · false ceiling designs & costs · best flooring for Pakistani homes (marble vs engineered wood) · retail conversion layout principles · how to read an interior BOQ · modular kitchen materials compared · lighting design guide (warm layers) · coworking design checklist · comparing interior designers: 15 questions to ask · DHA/Bahria approval rules for renovations · behind-the-build case documentaries.
All articles: intent-led H1, 900–1,600 words, FAQ block where useful, internal links to the matching service, one CTA, Article schema, unique AI-written-but-human-edited voice.

---

# PART V — SEO & TECHNICAL ARCHITECTURE

## 23. On-page & technical SEO (implemented)
- **Stack:** Next.js App Router, **fully static (SSG)** pages — sub-100ms TTFB on any static host; semantic landmarks (`header/nav/main/section/footer/article`), one H1/page, logical heading order.
- **Metadata:** per-page title/description templates, canonical per route, OG/Twitter cards with service-specific images, `en_PK` locale, robots directives, `metadataBase`.
- **Structured data:** global `InteriorDesigner` Organization JSON-LD (name, address, geo, areaServed, hours, sameAs, knowsAbout); route-level Service, FAQPage, BreadcrumbList, Blog/BlogPosting/Article, About/Contact pages.
- **Sitemap & robots:** generated `/sitemap.xml` incl. all services/posts; `/robots.txt` pointing to it.
- **Images:** Next/Image → AVIF/WebP, responsive `srcset` (360–2400w), lazy below fold, `priority` LCP image, descriptive alt (keyword-aware).
- **Fonts:** self-hosted variable woff2 (fontsource), `font-display:swap`, preloaded; no third-party font requests.
- **Security headers:** nosniff, referrer policy, powered-by removed (frame-ancestors/CSP to finalize with host).
- **Internationalization:** lang en; future Urdu/Punjabi via `hreflang` if audience warrants.
- **Local SEO (Phase 2, critical):** Google Business Profile (Lahore + Islamabad), all NAP citations consistent, aggregate rating + review schema once real reviews exist, location landing pages (`/interior-designer-dha-lahore` etc.), image geo metadata.

## 24. Keyword architecture
- **Money pages** map to commercial-intent terms in §21 table; each service page targets 1 head term + 6–10 supporting terms in body/FAQ.
- **Informational funnel** via Journal (cost, timeline, materials, how-to) — the exact query types competitors under-serve; interlink to money pages with exact anchors.
- **Local modifiers:** lahore, DHA (phase numbers), Bahria Town, Gulberg, Model Town, Johar Town, Islamabad, Karachi, Sialkot; house sizes: 5 marla, 10 marla, 1 kanal, 2 kanal; commercial: sq ft bands.
- **E-E-A-T signals:** named team/studio page, 12-year history, ISO pursuit (cert documentation), downloadable profile PDF, detailed case pages with client names/permission, authored journal posts.

## 25. Backlog of build routes (Phase 2/3)
Project case detail pages `/projects/[slug]` (schema ImageGallery/Service, before→after sequences) · location pages · pricing/cost-guide gated download · FAQ hub · careers · 404 ✓ done · loading skeletons · cookie/consent for GA/Clarity.

---

# PART VI — THE LUXURY AUDIT & RANKED FIX LIST

## 26. Ruthless creative audit — what separates premium from amateur (the standard we hold the build to, and how competitors fail)
Ranked by **impact on perceived quality**:

1. **Whitespace & rhythm** (highest impact). Amateurs fill space; luxury leaves air. Fix: enforce section rhythm (5.5–11rem), max measures, ≤1 idea per viewport. *All three competitors fail this.*
2. **Typography confidence & consistency**: one display family + one body family, fixed scale, tracked eyebrows, italic used sparingly. Linoxa-style oversized headlines win instantly.
3. **One motion language, repeated**: 4 reveal primitives only. Random animations = cheap.
4. **Photography unity**: single warm grade, consistent crops, no stock that looks stock.
5. **Hairline borders & soft radii instead of boxes/shadows** — quiet-luxury signal.
6. **Micro-interaction feedback on every interactive element** (arrow motion, underline wipe, image float, focus rings).
7. **Numerals & metadata as decoration** (indices 01–06, tabular stats, week ranges) — communicates precision.
8. **Sound/stillness**: no autoplay audio, no video hero with movement competing with type; ambient silence feels expensive.
9. **Favicon/social/404/email-template finish** — cheap sites forget the last 2% (all delivered).
10. **Copy brevity**: short lines that fit phones; never wall-of-text above the fold.
11. **Consistent corner/button/arrow/icon language** (single icon set — Lucide, 1.5 stroke).
12. **Restraint in colour**: 1 Deep-Navy accent; never multi-colour CTAs.

## 27. Full-dimension audit checklist (visual · story · motion · interaction · responsive · a11y · performance · compat · SEO · conversion)
*Used as the QA rubric before launch; each item gets pass/fail with owner.*

- **Visual:** tokens used only from the system; no off-palette greys; dark-band rhythm; image grades consistent; type scale respected; alignment to grid.
- **Storytelling:** each page states the visitor's problem within first viewport; proof before pitch; one CTA narrative per page; founder story present.
- **Motion smoothness:** no jank on scroll (test Lenis on mid Android); ScrollTriggers refresh on resize; no CLS from webfonts/images; pin/horizontal disabled on touch.
- **Interactions:** hover *and* focus states everywhere; touch affordance; menu opens/closes without scroll-lock bugs; form validation inline; WhatsApp handoff works.
- **Responsive:** 360/390/414/768/1024/1440/1920 tested; no horizontal overflow; media aspect boxes reserved.
- **Accessibility:** AA contrast; focus-visible rings; `prefers-reduced-motion` honoured; alt text; labels on inputs; aria-expanded/controls on menu/accordion; keyboard-only full pass; landmarks; captions when video lands.
- **Performance:** budgets in §28; LCP images preloaded; JS code-splitting; fonts subset; canvas/lazy below fold.
- **Browser compatibility:** Chrome/Safari/Edge/Firefox current + -1; iOS Safari back-cache (bfcache) Lenis reset; Android Chrome; scrollbar/clip-path fallbacks acceptable.
- **SEO:** titles ≤60 chars pattern, descriptions ≤155; canonical; schema valid (Rich Results test); sitemap submitted; GSC + GA verified; OG previews checked (Facebook/LinkedIn/WhatsApp unfurl).
- **Conversion:** CTA present every 2–3 viewports; sticky WhatsApp; form ≤6 fields; click-to-call; thank-you state; GA events: `cta_click`, `whatsapp_click`, `form_submit`, `faq_expand`, `project_filter`; Clarity session replay.

## 28. Performance fix-list (one-evening priority order, tools, targets)

| # | Fix | Tool | Expected gain | Stop when |
|---|---|---|---|---|
| 1 | Preload LCP hero + `priority`, serve AVIF via Next/Image, hero ≤ 120KB at 1080w | PageSpeed, Network tab | LCP −0.8–1.5s | LCP ≤ 2.5s (mobile, 4G throttled) |
| 2 | Self-host variable fonts, subset latin, woff2 only, preload roman, `swap` | Coverage/devtools | -1 external RTT, CLS→0 | CLS ≤ 0.05 |
| 3 | Audit JS: GSAP/ScrollTrigger only on client; heavy R3F/three dynamic-imported & idle-loaded; no carousels libs | bundle analyzer | TBT −100–300ms | TBT ≤ 200ms, INP ≤ 200ms |
| 4 | Compress/AVIF all generated images to ≤ 160KB each, explicit dimensions | sharp/Squoosh, Next built-in | 2–5MB page-weight | total ≤ 1.6MB first load |
| 5 | Static export/edge caching + long `immutable` headers on `/_next/static`, ISR for forms | host config | TTFB < 100ms | TTFB < 150ms |
| 6 | Defer/lazy: below-fold images lazy by default; Marquee is CSS-only; map/video none above fold | devtools | faster FCP/INP | FCP ≤ 1.8s |
| 7 | Hosting: put production on Vercel (or Netlify/Cloudflare Pages) with Pakistan edge; image CDN | — | global latency | TTFB consistent |
| 8 | Third parties: GA4 + Clarity only, deferred; no chat widget blocking (WhatsApp link, not SDK) | network tab | -200–600ms | ≤2 third-party requests |
| 9 | Preconnect none (self-hosted everything); CSP + security headers; enable HTTP/3 | security audit | A in security headers |
| 10 | Re-run Lighthouse mobile + PageSpeed Insights field data after deploy | Lighthouse/PSI/CrUX | — | 95/100/100/100 |
**Measurement toolkit:** Lighthouse (CI), PageSpeed Insights (lab+field/CrUX), WebPageTest (Throttled 3G), Chrome DevTools Performance, bundle-analyzer, Sentry for JS errors post-launch, Microsoft Clarity.
**Current shipped baseline:** fully static pages, **103 kB shared first-load JS**, homepage 174 kB total JS, images optimized via Next — target met at the code level; final numbers verified post-hosting with real image weights.

## 29. Production-ready launch checklist
- [ ] Replace AI image suite with photographed projects per shot list (§9), incl. render-vs-reality pairs
- [ ] Real phone/WhatsApp number, studio address, email, verified social links across footer/schema/sitemap
- [ ] Client logos/permissions in writing; update wordmark strip with SVGs
- [ ] Form endpoint: connect to CRM/email (Resend/Formspree/route handler) + WhatsApp; test on iOS/Android; honeypot/spam protection
- [ ] GA4 + GTM (as needed) + Clarity; conversion events QA in debug mode; consent banner
- [ ] GSC: verify, submit sitemap, request indexing of all 6 service pages; Bing Webmaster
- [ ] Google Business Profile(s), NAP citations, 10 seed review requests at handover
- [ ] Validate all JSON-LD (Rich Results Test & Schema validator); OG unfurls on WhatsApp/LinkedIn/FB
- [ ] Lighthouse mobile ≥ 95 all categories; WebPageTest once on slow device; axe DevTools zero serious issues
- [ ] Keyboard-only pass; reduced-motion pass; screen-reader pass (VoiceOver/TalkBack)
- [ ] 404 tested; all internal links checked (crawler/Screaming Frog/`next lint` + link check)
- [ ] Favicon set, app icons, OG defaults; `og:image` 1200×630 export; print stylesheet optional
- [ ] Legal: privacy policy, WhatsApp/form consent note (present), terms
- [ ] Privacy/performance: cookies only after consent; analytics anonymized
- [ ] Backup + form notification email on-call; UTM convention for campaigns (`?utm_source=…`)
- [ ] Stage content review: no lorem, correct dates, PKR budget bands, every CTA lands somewhere real
- [ ] Phase 2 WebGL hero behind feature flag with 2.5D poster fallback (§11.2)

## 30. Delivery roadmap
- **PHASE 1 — Foundation (this delivery):** design system, Linoxa home-two replica at full structural parity (hero → statements → **Layout/Design/Create bar** → marquees → partners → service index + big feature + pills → **building documentation pack** → image collage → icon trio → big marquee → sticky about → process → testimonials → journal → CTA), 6 complete service pages, **packages/pricing page**, about/projects/journal/contact, full motion system, SEO base, 10 generated images. ✅
- **PHASE 2 — Proof & conversion (2–4 wks):** case-study CMS/collection + `/projects/[slug]`; real photography swap; WebGL hero (R3F, flag-gated); floating WhatsApp; CRM-connected form; budget/timeline lead-magnet; GBP & citations; profile PDF; next 6 journal articles.
- **PHASE 3 — Scale (6–12 wks):** location & house-size landing pages; Urdu language toggle; image-sequence case stories; Google Ads landing variants + A/B CTA test (§20 ranking); review schema; careers; booking calendar.

---

# APPENDIX A — What's in the build (`woodex/`)

```
app/
  layout.tsx                  fonts, metadata, Organization JSON-LD, preloader/cursor/header/footer
  page.tsx                    Home = 14 sections mirroring home-two
  services/page.tsx + [slug]  service index + SSG detail pages (Service/FAQ/Breadcrumb schema)
  about · projects (filters) · journal (+[slug] Article schema) · contact (brief form→WhatsApp)
  sitemap.ts · robots.ts · not-found.tsx
components/
  SmoothScroll (Lenis+GSAP) · Preloader · Cursor · Header(fullscreen menu) · Footer · CtaBand
  Motion (SplitReveal/Fade/ClipReveal/Parallax/Counter) · Marquee · JsonLd · FaqAccordion
  PageHero · ContactForm
  home/ Hero (2.5D cinematic) · Statements · WordMarquee · Partners · ServicesSection
        Collage · FeatureTrio · BigMarquee · AboutScroll · Process · Testimonials · JournalPreview
lib/ site.ts · services.ts (6 full SEO services incl. FAQs) · content.ts (projects, posts, stats, steps)
public/images/  10 generated brand-consistent images (more slotted for next generation pass)
```
Run: `cd woodex && npm install && npm run dev` (build currently passes; 20 static routes; 103 kB shared JS).

# APPENDIX B — Design tokens at a glance (Linoxa style guide)
Light Beige `#FCF2E8` · Black `#000000` · Jet Black `#111111` · Deep Navy Blue `#0F1E36` (accent, on-dark tint `#7D93B8`) · Charcoal `#525252` · Silver `#C0C0C0` · Light Gray `#E3E1E1` · Deep Gray `#D9D9D9`
Type: Sora Variable 500 (display, no italics) + Inter Variable (UI/body) · hero display `clamp(3.25rem,1rem+9vw,10.5rem)` · H1 5rem/112.5% · H2 2.812rem/122% · H3 1.875rem/133% · H4 1.562rem · H5 1.25rem · H6 1.125rem · body 1rem/162% · sub 0.875rem/185% · button 0.9375rem/500
Ease: `cubic-bezier(.22,1,.36,1)` · radius 14/26/pill · shadows small `0 4px 14px -6px` / medium card / large lift · section padding `clamp(5.5rem,4rem+7vw,11rem)`.
Live system reference: `/style-guide`.
