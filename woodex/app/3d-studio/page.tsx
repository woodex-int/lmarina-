import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRight,
  Box,
  Glasses,
  Layers,
  Check,
  ArrowLeft,
} from 'lucide-react';
import CTA from '@/components/CTA';
import FaqAccordion from '@/components/FaqAccordion';
import { SplitReveal, Fade, ClipReveal } from '@/components/Motion';
import CtaBand from '@/components/CtaBand';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: '3D Interior Visualization & Walkthrough Studio in Lahore',
  description:
    'Woodex 3D Studio produces photoreal interior renders, VR walkthroughs and material-accurate lighting scenes for offices, homes and retail in Lahore — approve the room before it is built.',
  keywords: [
    '3d interior design lahore',
    'interior rendering pakistan',
    '3d walkthrough office design',
    'virtual reality interior design lahore',
    'photorealistic interior renders',
  ],
  alternates: { canonical: '/3d-studio' },
  openGraph: {
    title: 'Woodex 3D Studio — see your space before it exists',
    description:
      'Photoreal renders, VR walkthroughs and material-accurate lighting scenes, built from the exact specification we will construct.',
    url: `${site.url}/3d-studio`,
    images: [{ url: '/images/service-3d.jpg', width: 1600, height: 900, alt: 'Woodex 3D studio render desk' }],
  },
};

const DELIVERABLES = [
  {
    icon: Box,
    tone: 'card-fill',
    title: 'Photoreal stills',
    copy: 'Camera-matched images of every principal room, built from real materials, real fixtures and your actual floor plan — approved line by line.',
  },
  {
    icon: Glasses,
    tone: 'card-white',
    title: 'VR & video walkthroughs',
    copy: 'Walk the space at full scale — headset, screen or phone. Sightlines, daylight at each hour and evening scenes, before a single brick moves.',
  },
  {
    icon: Layers,
    tone: 'card-navy on-dark',
    title: 'Material & lighting bible',
    copy: 'Every render is tied to a sample sheet: timber species, stone codes, paint systems, colour temperature. What you approve is what we procure.',
  },
];

const PIPELINE = [
  { n: '01', title: 'Brief & references', time: 'Day 1–2', copy: 'Goals, audiences, brand cues and a reference session — we agree shot list and approval criteria up front.' },
  { n: '02', title: 'White-model blockout', time: 'Day 3–5', copy: 'Geometry, furniture layout and circulation checked from the plan — nothing textured until the space is right.' },
  { n: '03', title: 'Materials & dressing', time: 'Week 2', copy: 'Real product models, specified timbers and stones, art and greenery placed the way the build team will install them.' },
  { n: '04', title: 'Lighting & grade', time: 'Week 2–3', copy: 'Layered daylight and artificial scenes, then a colour grade matched to the mood board you signed off.' },
  { n: '05', title: 'Delivery & handover pack', time: 'Week 3', copy: 'Stills, walkthrough video, VR scene and the sample-linked specification pack your contractor builds from.' },
];

const PACKAGES = [
  {
    name: 'Single Room',
    price: 'PKR 65,000',
    unit: 'per room',
    tone: 'card-white',
    featured: false,
    items: ['3 photoreal angles', '1 revision round', 'Sample sheet for main finishes', '5-day turnaround'],
  },
  {
    name: 'Full Floor Walkthrough',
    price: 'PKR 385,000',
    unit: 'per project',
    tone: 'card-navy on-dark',
    featured: true,
    items: ['Every principal room, 3+ angles', '90-second cinematic walkthrough', 'Day & evening lighting scenes', 'Two revision rounds', 'Material & lighting bible'],
  },
  {
    name: 'Studio Retainer',
    price: 'PKR 120,000',
    unit: 'per month',
    tone: 'card-fill',
    featured: false,
    items: ['Rolling render support for developers', 'Sales-gallery & show-home visuals', 'Priority queue', 'Monthly pricing review included'],
  },
];

const GALLERY = [
  { src: '/images/service-3d.jpg', label: 'Meridian HQ — boardroom approval set' },
  { src: '/images/gallery-boardroom.jpg', label: 'The same room — photographed on handover day' },
  { src: '/images/gallery-lobby.jpg', label: 'The Grove — lobby lighting study' },
  { src: '/images/hero-office.jpg', label: 'Northwind — executive floor scene' },
];

const STUDIO_FAQS = [
  {
    q: 'Do the renders match what actually gets built?',
    a: 'That is the point of the studio. Every material in a Woodex render is a material we stock or can source, every fixture is on the procurement list, and the lighting scene is graded to the fittings scheduled. Our builders work from the same image pack you approved.',
  },
  {
    q: 'Can I walk the space in VR?',
    a: 'Yes. Full-floor projects include a VR scene viewable on headsets in our Gulberg studio or on your own device, plus a cinematic walkthrough video for stakeholders who never put a headset on.',
  },
  {
    q: 'How fast can the studio deliver?',
    a: 'A single room takes about five working days; a full apartment or floor plate runs two to three weeks including reviews. Retainer clients hold priority in the queue during launch pushes.',
  },
  {
    q: 'Is 3D visualization only for big budgets?',
    a: 'No — a render review typically prevents changes on site that cost multiples of the design fee. Clients who are choosing between two layouts or stone options usually save the render cost several times over on the first snag avoided.',
  },
];

export default function StudioPage() {
  return (
    <>
      {/* HERO — navy band, giant ghost word */}
      <section className="band-navy on-dark relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
        <div aria-hidden className="hairlines"><span className="hair-mid" /></div>
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-[-4%] overflow-hidden text-center">
          <p className="ghost-word translate-y-[20%] text-[clamp(4.5rem,15vw,15rem)] leading-[0.9]">RENDER</p>
        </div>

        <div className="container-x relative z-10">
          <nav className="mb-8 flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[rgba(252,242,232,0.55)]" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[var(--color-cream)]">Home</Link><span>›</span>
            <span className="text-[var(--color-cream)]">3D Studio</span>
          </nav>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <span className="eyebrow mb-7 inline-flex">Precision in every model</span>
              <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.6rem,1.3rem+4.6vw,5rem)] font-medium leading-[1.06] tracking-[-0.035em] text-[var(--color-cream)]">
                <span className="block overflow-hidden"><span className="block">See your space</span></span>
                <span className="block overflow-hidden"><span className="block">before it exists.</span></span>
              </h1>
              <p className="lead mt-8 max-w-xl !text-[rgba(252,242,232,0.78)]">
                The Woodex 3D Studio renders every office, home and retail room from the exact
                materials, lighting and joinery we will build — approval happens on screen,
                not in the field.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <CTA variant="light">Book a render review</CTA>
                <Link href="/services/3d-visualization" className="btn btn-outline-light">
                  <span className="btn-label">The full service</span>
                  <span className="btn-arrow"><ArrowUpRight size={14} /></span>
                </Link>
              </div>
            </div>

            {/* glass media card */}
            <div className="lg:col-span-5">
              <div className="glass overflow-hidden p-4">
                <div className="img-round relative aspect-[4/3] overflow-hidden">
                  <Image src="/images/service-3d.jpg" alt="Photoreal 3D render in progress at the Woodex studio" fill priority sizes="(max-width: 1024px) 90vw, 40vw" className="object-cover" />
                </div>
                <div className="flex items-center justify-between px-3 py-4">
                  <p className="text-[0.82rem] leading-snug">
                    <span className="font-[family-name:var(--font-display)] font-medium text-[var(--color-cream)]">Meridian boardroom — day scene</span>
                    <span className="mx-2 opacity-40">·</span>
                    <span className="text-[rgba(252,242,232,0.6)]">delivered exactly</span>
                  </p>
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--color-cream)] text-[var(--color-espresso)]"><ArrowUpRight size={14} /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES trio — beige */}
      <section className="band-beige py-[var(--spacing-section)]">
        <div className="container-x">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <Fade><span className="eyebrow center mb-6">What the studio delivers</span></Fade>
            <SplitReveal as="h2" className="h2 text-balance">
              Images you can build a contract on
            </SplitReveal>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {DELIVERABLES.map((d, i) => (
              <Fade key={d.title} delay={i * 0.08}>
                <div className={`flex h-full flex-col gap-5 rounded-[var(--radius-l)] p-8 lg:p-9 ${d.tone} ${d.tone.includes('navy') ? '' : 'shadow-none'}`}>
                  <span className={`icon-sq ${d.tone.includes('navy') ? 'bg-[var(--color-cream)] text-[var(--color-espresso)]' : 'bg-[var(--color-espresso)] text-[var(--color-cream)]'}`}>
                    <d.icon size={22} strokeWidth={1.5} />
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] text-[1.3rem] leading-snug">{d.title}</h3>
                  <p className={`text-[0.92rem] leading-relaxed ${d.tone.includes('navy') ? 'text-[rgba(252,242,232,0.75)]' : ''}`}>{d.copy}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* RENDER vs REALITY — gray */}
      <section className="band-gray py-[var(--spacing-section)]">
        <div className="container-x">
          <div className="mb-12 max-w-2xl">
            <Fade><span className="eyebrow mb-6">Render vs reality</span></Fade>
            <SplitReveal as="h2" className="h2 text-balance">
              The left image is a promise. The right one is proof.
            </SplitReveal>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {[
              { img: '/images/service-3d.jpg', tag: 'Render — approved Jan 2025', alt: '3D render of the Meridian Capital boardroom' },
              { img: '/images/gallery-boardroom.jpg', tag: 'Delivered — handover Jun 2025', alt: 'Photographed Meridian Capital boardroom on handover day' },
            ].map((s, i) => (
              <Fade key={s.tag} delay={i * 0.1}>
                <div className="img-round img-zoom relative aspect-[4/3] overflow-hidden">
                  <Image src={s.img} alt={s.alt} fill sizes="(max-width: 768px) 100vw, 46vw" className="object-cover" />
                  <span className="glass-chip absolute bottom-4 left-4 px-4 py-2 text-[0.78rem] font-medium text-[var(--color-cream)]">{s.tag}</span>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* PIPELINE — beige rows */}
      <section className="band-beige py-[var(--spacing-section)]">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Fade><span className="eyebrow mb-6">Studio pipeline</span></Fade>
              <SplitReveal as="h2" className="h2 text-balance">
                Three weeks from brief to walkthrough
              </SplitReveal>
              <Fade delay={0.12}>
                <p className="mt-6 text-[0.95rem] leading-relaxed">
                  A fixed sequence with one review gate per stage — no open-ended revision loops,
                  no surprises on the invoice.
                </p>
                <CTA>Start with a room</CTA>
              </Fade>
            </div>
          </div>
          <div className="lg:col-span-7 lg:col-start-5">
            {PIPELINE.map((s, i) => (
              <Fade key={s.n} delay={i * 0.05}>
                <div className="num-row group grid grid-cols-[auto_1fr_auto] items-center gap-5 px-6 py-7 lg:px-8">
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-[var(--color-line)] transition-all duration-500 group-hover:border-transparent group-hover:bg-[var(--color-brass)] group-hover:text-[var(--color-cream)]">
                    <ArrowLeft size={15} className="transition-transform duration-500 group-hover:rotate-[24deg]" />
                  </span>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-[1.3rem] leading-snug lg:text-[1.55rem]">{s.title}</h3>
                    <p className="mt-1.5 max-w-xl text-[0.85rem] leading-relaxed text-[var(--color-fog)]">{s.copy}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-[family-name:var(--font-display)] text-[1.3rem] font-medium lg:text-[1.6rem]">{s.n}</span>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[var(--color-walnut)]">{s.time}</p>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY — navy */}
      <section className="band-navy on-dark py-[var(--spacing-section)]">
        <div className="container-x">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <Fade><span className="eyebrow mb-6">From the studio queue</span></Fade>
              <SplitReveal as="h2" className="h2 text-balance !text-[var(--color-cream)]">
                Recent scenes, drawn from live projects
              </SplitReveal>
            </div>
            <Fade delay={0.1}>
              <Link href="/projects" className="btn btn-light">
                <span className="btn-label">See finished projects</span>
                <span className="btn-arrow"><ArrowUpRight size={14} /></span>
              </Link>
            </Fade>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {GALLERY.map((g, i) => (
              <Fade key={g.label} delay={(i % 2) * 0.08}>
                <div className="img-round img-zoom relative aspect-[16/10] overflow-hidden">
                  <Image src={g.src} alt={g.label} fill sizes="(max-width: 768px) 100vw, 46vw" className="object-cover" />
                  <span className="glass-chip absolute bottom-4 left-4 px-4 py-2 text-[0.78rem] text-[var(--color-cream)]">{g.label}</span>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES — gray */}
      <section className="band-gray py-[var(--spacing-section)]">
        <div className="container-x">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <Fade><span className="eyebrow center mb-6">Studio packages</span></Fade>
            <SplitReveal as="h2" className="h2 text-balance">
              Transparent renders, fixed fees
            </SplitReveal>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {PACKAGES.map((p, i) => (
              <Fade key={p.name} delay={i * 0.08}>
                <div className={`flex h-full flex-col rounded-[var(--radius-l)] p-8 lg:p-9 ${p.tone} ${p.featured ? 'md:-translate-y-3 shadow-[var(--shadow-lift)]' : ''}`}>
                  <p className={`text-[11px] uppercase tracking-[0.22em] ${p.featured ? 'text-[var(--color-brass-soft)]' : 'text-[var(--color-walnut)]'}`}>{p.name}</p>
                  <p className="mt-5 font-[family-name:var(--font-display)] text-[2rem] font-medium tracking-[-0.03em]">{p.price}</p>
                  <p className={`text-[0.8rem] ${p.featured ? 'text-[rgba(252,242,232,0.6)]' : 'text-[var(--color-fog)]'}`}>{p.unit}</p>
                  <ul className={`mt-7 flex flex-col gap-3.5 border-t pt-7 ${p.featured ? 'border-[rgba(252,242,232,0.2)]' : 'border-[var(--color-line)]'}`}>
                    {p.items.map((it) => (
                      <li key={it} className={`flex items-start gap-3 text-[0.9rem] ${p.featured ? 'text-[rgba(252,242,232,0.85)]' : ''}`}>
                        <Check size={15} className={`mt-1 shrink-0 ${p.featured ? 'text-[var(--color-brass-soft)]' : 'text-[var(--color-walnut)]'}`} />
                        {it}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-8">
                    <Link href="/contact" className={`btn w-full justify-center ${p.featured ? 'btn-light' : ''}`}>
                      <span className="btn-label">Enquire</span>
                      <span className="btn-arrow"><ArrowUpRight size={14} /></span>
                    </Link>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — beige */}
      <section className="band-beige py-[var(--spacing-section)]">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Fade><span className="eyebrow mb-6">Good questions</span></Fade>
            <SplitReveal as="h2" className="h2 text-balance">
              Before you commission a render
            </SplitReveal>
            <Fade delay={0.12}>
              <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed">
                Everything clients ask the studio — answered plainly. Anything else, the first
                review call is complimentary.
              </p>
            </Fade>
          </div>
          <div className="lg:col-span-7 lg:col-start-5">
            <FaqAccordion faqs={STUDIO_FAQS} />
          </div>
        </div>
      </section>

      <CtaBand
        title="Your next room, approved on a screen this month."
        copy="Send a floor plan today — we will scope the render pack and a fixed fee within one working day."
      />
    </>
  );
}
