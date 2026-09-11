import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Check, ArrowUpRight, Minus } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import FaqAccordion from '@/components/FaqAccordion';
import { SplitReveal, Fade, Counter } from '@/components/Motion';
import JsonLd from '@/components/JsonLd';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Interior Design Packages & Pricing in Lahore | Woodex',
  description:
    'Transparent Woodex engagement tiers: design-only packages from PKR 150/sq ft, full design with photoreal 3D walkthroughs, and turnkey design-build-fit-out from PKR 2,500/sq ft. Fixed BOQ pricing, free first consultation.',
  alternates: { canonical: '/pricing' },
};

const plans = [
  {
    name: 'Concept',
    tagline: 'Design-only package',
    price: '150',
    unit: 'per sq ft',
    floor: 'Minimum fee PKR 75,000 per room / zone',
    ideal: 'Ideal for clients who already have a contractor and need a precise, buildable design.',
    features: [
      '2 concept layout directions',
      'Mood, material & colour boards',
      'Photoreal 3D stills of key rooms',
      'Full 2D drawing pack for your builder',
      'Line-by-line BOQ with specification grades',
      'One round of design revisions',
    ],
    absent: ['Animated walkthrough video', 'Construction & furniture execution'],
    cta: 'Start with concept',
    featured: false,
  },
  {
    name: 'Studio',
    tagline: 'Design + full 3D walkthrough',
    price: '280',
    unit: 'per sq ft',
    floor: 'Minimum fee PKR 150,000 per project',
    ideal: 'Our most chosen package — see the entire space in motion before a wall moves.',
    features: [
      'Up to 3 spatial design directions',
      'Photoreal still renders, day & night scenes',
      'Cinematic animated walkthrough video',
      'Complete working drawings: civil, ceiling, electrical, plumbing, glazing, joinery',
      'Real material & veneer sampling from suppliers',
      'Two structured revision rounds',
      'Scheduled site-support visits during execution',
    ],
    absent: ['Construction & furniture execution'],
    cta: 'Choose the studio package',
    featured: true,
  },
  {
    name: 'Atelier',
    tagline: 'Turnkey design, build & furnish',
    price: '2,500',
    unit: 'per sq ft, built',
    floor: 'Design fee absorbed into the build contract',
    ideal: 'One contract, one timeline — walk into a finished, furnished, styled space.',
    features: [
      'Everything in the Studio package',
      'Civil, partitions, ceilings, flooring & paint',
      'Electrical, plumbing & HVAC coordination',
      'Glass partitions, doors & hardware',
      'Custom solid-wood furniture from our workshop',
      'Art, rugs, greenery & final styling',
      'Weekly reports, fixed BOQ, joint snag walkthrough',
      'Written build & 10-year craft warranties',
    ],
    absent: [],
    cta: 'Plan your turnkey project',
    featured: false,
  },
];

const pricingFaqs = [
  {
    q: 'How does Woodex charge for interior design?',
    a: 'Design-only work is charged per square foot of designed area — Concept from PKR 150/sq ft and Studio (with animated walkthrough and the full working-drawing set) from PKR 280/sq ft — subject to a small minimum fee per room or project. Turnkey projects are priced per built square foot from PKR 2,500, with the design fee absorbed into the build contract. After the free consultation you receive an exact, written quote — never an estimate that quietly grows.',
  },
  {
    q: 'What does a turnkey fit-out cost per square foot in Lahore?',
    a: 'Most office and residential fit-outs land between PKR 2,500 and 6,500 per square foot, depending on civil changes, glazing, HVAC upgrades, imported finishes and solid-wood furniture. We always present two specification tracks — considered and premium — on a line-by-line BOQ, so you decide where the budget goes before work begins.',
  },
  {
    q: 'Is the design fee adjusted if we proceed with turnkey build?',
    a: 'Yes. When a Studio or Concept design converts to an Atelier (turnkey) contract with Woodex, the design fee is absorbed against the build value. You never pay twice for the same work.',
  },
  {
    q: 'Why are prices quoted "from" rather than fixed?',
    a: 'Square footage tells only part of the story — a finance HQ with glass offices, acoustic ceilings and imported stone specifies differently than a warm residential floor. The per-sq-ft figures give you an honest budgeting band; the fixed price comes after the concept stage, as a detailed BOQ naming every material, quantity and grade. What we do not do is quote low and bill high.',
  },
  {
    q: 'What payment schedule do you work to?',
    a: 'Design packages are invoiced 50% on brief approval and 50% on drawing/walkthrough delivery. Turnkey projects follow transparent milestones — typically mobilisation, design approval, civil completion, furniture installation and post-snag handover — with each stage agreed in writing before work starts.',
  },
  {
    q: 'Can you work within a fixed budget?',
    a: 'That is our preferred way to work. Tell us the ceiling and the move-in date; we design to it, flag trade-offs honestly, and protect the items that matter most to you. Variations, if you request them, are priced in writing as variation orders — there are no silent extras in the final invoice.',
  },
];

export default function PricingPage() {
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pricingFaqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const productLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: plans.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        name: `Woodex ${p.name} — ${p.tagline}`,
        description: p.ideal,
        provider: { '@type': 'InteriorDesigner', name: site.name, url: site.url },
      },
    })),
  };

  return (
    <>
      <JsonLd data={[faqLd, productLd]} />

      <PageHero
        eyebrow="Engagement tiers"
        title="Flexible design pricing, | written before we begin"
        copy="No retainers disguised as estimates, no final invoices that surprise. Three transparent ways to work with Woodex — every one starting with a free consultation, test-fit and budget band."
        image="/images/service-3d.jpg"
        imageAlt="Woodex design package: 3D render and material documents on the studio desk"
      >
        <div className="flex flex-wrap gap-4">
          <Link href="/contact" className="btn">
            <span className="btn-label">Book free consultation</span>
            <span className="btn-arrow"><ArrowUpRight size={14} /></span>
          </Link>
          <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" className="btn btn-outline">
            <span className="btn-label">Ask on WhatsApp</span>
            <span className="btn-arrow"><ArrowUpRight size={14} /></span>
          </a>
        </div>
      </PageHero>

      {/* PRICING CARDS */}
      <section className="container-x py-[var(--spacing-section)]">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Fade key={p.name} delay={i * 0.1}>
              <div
                className={`relative flex h-full flex-col rounded-[var(--radius-l)] border p-9 ${
                  p.featured
                    ? 'on-dark border-transparent bg-[var(--color-night)] text-[var(--color-cream)] shadow-[var(--shadow-lift)] lg:-translate-y-5'
                    : 'border-[var(--color-line)] bg-[var(--color-cream)]'
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3.5 left-9 rounded-full bg-[var(--color-brass)] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-cream)]">
                    Most chosen
                  </span>
                )}
                <p className={`text-[11px] uppercase tracking-[0.24em] ${p.featured ? 'text-[var(--color-brass-soft)]' : 'text-[var(--color-walnut)]'}`}>
                  {p.tagline}
                </p>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl">{p.name}</h2>

                <div className="mt-7 flex items-baseline gap-2">
                  <span className="font-[family-name:var(--font-display)] text-5xl tracking-tight">
                    <span className="align-top text-2xl">{p.price.includes(',') ? 'PKR ' : 'PKR '}</span>
                    {p.price}
                  </span>
                  <span className={`text-sm ${p.featured ? 'text-[var(--color-cream)]/60' : 'text-[var(--color-fog)]'}`}>{p.unit}</span>
                </div>
                <p className={`mt-2 text-xs ${p.featured ? 'text-[var(--color-cream)]/55' : 'text-[var(--color-fog)]'}`}>{p.floor}</p>

                <p className={`mt-6 border-t pt-6 text-[0.95rem] leading-relaxed ${p.featured ? 'border-[var(--color-line-light)] text-[var(--color-cream)]/80' : 'border-[var(--color-line)]'}`}>
                  {p.ideal}
                </p>

                <ul className="mt-7 space-y-3.5 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${p.featured ? 'bg-[var(--color-brass)] text-[var(--color-cream)]' : 'bg-[var(--color-walnut)]/12 text-[var(--color-walnut)]'}`}>
                        <Check size={11} strokeWidth={3} />
                      </span>
                      <span className={p.featured ? 'text-[var(--color-cream)]/85' : ''}>{f}</span>
                    </li>
                  ))}
                  {p.absent.map((f) => (
                    <li key={f} className="flex items-start gap-3 opacity-40">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-current">
                        <Minus size={10} strokeWidth={3} />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`btn mt-9 w-full justify-center ${p.featured ? 'btn-light' : ''}`}
                >
                  <span className="btn-label">{p.cta}</span>
                  <span className="btn-arrow"><ArrowUpRight size={14} /></span>
                </Link>
              </div>
            </Fade>
          ))}
        </div>

        <Fade className="mt-10">
          <p className="text-center text-sm text-[var(--color-fog)]">
            All figures are budgeting bands for a standard specification; your fixed quote follows
            the free site visit. Prices exclude government taxes where applicable.
          </p>
        </Fade>
      </section>

      {/* STATS + IMAGE STRIP */}
      <section className="on-dark bg-[var(--color-walnut-deep)] py-20 text-[var(--color-cream)] md:py-28">
        <div className="container-x grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div>
            <Fade><span className="eyebrow mb-6">What every package includes</span></Fade>
            <SplitReveal as="h2" className="h2 text-balance">
              Transparent pricing is a design principle, not a marketing line
            </SplitReveal>
            <Fade delay={0.1}>
              <p className="lead mt-7">
                The same drawing standards, material honesty and workshop craft apply whether you
                commission a single room or a headquarters. The packages differ in scope — never
                in the standard of work.
              </p>
            </Fade>
            <div className="mt-12 grid grid-cols-3 gap-6">
              {[
                { v: 240, s: '+', l: 'Projects delivered' },
                { v: 100, s: '%', l: 'Fixed-BOQ projects' },
                { v: 94, s: '%', l: 'Clients who return or refer' },
              ].map((x, i) => (
                <Fade key={x.l} delay={i * 0.08}>
                  <div className="border-l border-[var(--color-line-light)] pl-5">
                    <p className="stat-num !text-[var(--color-cream)] text-[clamp(2rem,1.2rem+3vw,3.6rem)]">
                      <Counter to={x.v} suffix={x.s} />
                    </p>
                    <p className="mt-2 text-xs leading-snug text-[var(--color-cream)]/60">{x.l}</p>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
          <Fade delay={0.12}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-l)] shadow-[var(--shadow-lift)]">
              <Image src="/images/service-turnkey.jpg" alt="Woodex fit-out delivered against a fixed BOQ and schedule" fill sizes="(max-width:1024px) 100vw, 46vw" className="object-cover" />
            </div>
          </Fade>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x py-[var(--spacing-section)]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Fade>
              <span className="eyebrow mb-6">Pricing questions</span>
              <h2 className="h3">You have questions — we have actual numbers</h2>
            </Fade>
          </div>
          <div className="lg:col-span-8">
            <FaqAccordion faqs={pricingFaqs} />
          </div>
        </div>
      </section>

      <CtaBand
        title="Get your exact number — free"
        copy="Share your floor plan and your budget band. The first site visit, test-fit and indicative quote are complimentary, with no obligation to continue."
      />
    </>
  );
}
