import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import FaqAccordion from '@/components/FaqAccordion';
import { SplitReveal, Fade, ClipReveal, Counter } from '@/components/Motion';
import { stats, processSteps, testimonials } from '@/lib/content';
import { services } from '@/lib/services';
import JsonLd from '@/components/JsonLd';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About Woodex Interiors — From a Woodwork Bench to a Full-Service Studio',
  description:
    'Founded in Lahore in 2014, Woodex Interiors grew from a solid-wood furniture workshop into a full-service interior design, architecture and fit-out studio. Meet the team, our craft-first process and the values behind the work.',
  alternates: { canonical: '/about' },
};

const values = [
  {
    title: 'Honest materials, honestly priced',
    copy: 'Solid timber is labelled solid; veneer is labelled veneer. Our BOQs name species, grades and quantities — because a client who cannot trust the invoice cannot trust the room.',
  },
  {
    title: 'Drawn before it is built',
    copy: 'Nothing is “decided on site”. You approve photoreal renders, a fixed scope and a dated schedule before the first wall is touched.',
  },
  {
    title: 'The workshop is the conscience',
    copy: 'Because we make the furniture ourselves, our designers specify only what joiners can actually build well — and our budgets carry no subcontractor fiction.',
  },
  {
    title: 'Calm is a deliverable',
    copy: 'Weekly reports, one project director, a written snag list closed in ten days. A renovation should feel like an upgrade to your life, not a second job.',
  },
];

const faqs = [
  { q: 'Where is the Woodex studio?', a: 'Our studio and furniture workshop are in Gulberg III, Lahore. Site visits are scheduled across DHA, Bahria Town, Gulberg, Model Town and the industrial estates, with active projects in Islamabad, Karachi, Sialkot and Gujranwala.' },
  { q: 'Do you work with clients who already have a contractor?', a: 'Yes — our design-only package includes drawing sets, 3D walkthroughs, BOQ and scheduled site-support visits so your contractor executes accurately.' },
  { q: 'What happens in the free consultation?', a: 'A 45-minute studio or site conversation: your goals, the property, a rough budget band, timeline feasibility and an honest recommendation — even if that recommendation is not us.' },
  { q: 'How do you price design work?', a: 'Design is quoted per square foot or as a fixed design fee after the initial consultation. For turnkey projects the fee is absorbed into the build, and every project carries a transparent, line-item BOQ.' },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About Woodex Interiors',
          url: `${site.url}/about`,
          mainEntity: { '@id': `${site.url}/#organization` },
        }}
      />
      <PageHero
        eyebrow="Since 2014 — Lahore, Pakistan"
        title="We started at a workbench. | The rest grew around it."
        copy="Woodex is a design and fit-out studio that never forgot it began making solid-wood furniture — which is why our drawings are buildable, our budgets believable, and our rooms built to outlast trends."
        image="/images/about-studio.jpg"
        imageAlt="The Woodex studio team reviewing material boards"
      >
        <Link href="/contact" className="btn">
          <span className="btn-label">Meet us at the studio</span>
          <span className="btn-arrow"><ArrowUpRight size={14} /></span>
        </Link>
      </PageHero>

      {/* FOUNDER STORY — struggle to solution */}
      <section className="container-x py-[var(--spacing-section)]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Fade><span className="eyebrow">Our story</span></Fade>
          </div>
          <div className="lg:col-span-8">
            <SplitReveal as="h2" className="h2 mb-10 text-balance">
              The city was full of beautiful catalogues — and rooms that fell apart in two years.
            </SplitReveal>
            <div className="grid gap-6 text-[1.05rem] leading-[1.8] text-[var(--color-ink-soft)]">
              <Fade>
                <p>
                  In 2014 our founder was running a two-bench wood workshop, building solid-sheesham
                  furniture for Lahore’s families. Month after month, the same client returned with
                  the same story: the interior they had paid a designer for looked nothing like the
                  render — the “walnut” was laminate, the joints were staples, and nobody on site
                  would take responsibility.
                </p>
              </Fade>
              <Fade delay={0.08}>
                <p>
                  The question was always the same: <em className="text-[var(--color-walnut)]">“Can
                  you do the whole room?”</em> So we did. First a wall of joinery, then a bedroom, a
                  whole apartment, then a 12,000-square-foot headquarters. Twelve years later the
                  studio designs offices, homes, retail and hospitality projects nationwide — but
                  every project still passes through the same workshop standards: seasoned timber,
                  documented joinery, named materials.
                </p>
              </Fade>
              <Fade delay={0.16}>
                <p>
                  We exist for clients who want the render and the reality to be the same
                  photograph — and a team that still answers the phone in year seven.
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="on-dark bg-[var(--color-night)] py-20 md:py-24">
        <div className="container-x grid grid-cols-2 gap-y-12 md:grid-cols-4">
          {stats.map((s, i) => (
            <Fade key={s.label} delay={i * 0.08}>
              <div className="border-l border-[var(--color-line-light)] pl-6">
                <p className="stat-num !text-[var(--color-cream)]">
                  <Counter to={parseInt(s.value, 10)} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-sm text-[var(--color-cream)]/65">{s.label}</p>
              </div>
            </Fade>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="container-x py-[var(--spacing-section)]">
        <div className="mb-14 max-w-3xl">
          <Fade><span className="eyebrow mb-6">What we will not compromise</span></Fade>
          <SplitReveal as="h2" className="h2 text-balance">Four values, enforced by the people who build the work</SplitReveal>
        </div>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius-l)] border border-[var(--color-line)] bg-[var(--color-line)] md:grid-cols-2">
          {values.map((v, i) => (
            <Fade key={v.title} delay={(i % 2) * 0.1}>
              <div className="h-full bg-[var(--color-paper)] p-10">
                <span className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-brass)]">0{i + 1}</span>
                <h3 className="mt-4 text-[1.5rem]">{v.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed">{v.copy}</p>
              </div>
            </Fade>
          ))}
        </div>
      </section>

      {/* CRAFT IMAGE SPLIT */}
      <section className="container-x pb-[var(--spacing-section)]">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <ClipReveal className="img-zoom relative aspect-[4/3] overflow-hidden rounded-[var(--radius-l)]">
            <Image src="/images/service-furniture.jpg" alt="Solid wood joinery in the Woodex workshop" fill sizes="(max-width: 1024px) 100vw, 46vw" className="object-cover" />
          </ClipReveal>
          <div>
            <Fade><span className="eyebrow mb-6">The process</span></Fade>
            <SplitReveal as="h2" className="h3 mb-8">Five steps. Fixed dates. Zero silent gaps.</SplitReveal>
            <div className="space-y-6">
              {processSteps.map((p) => (
                <Fade key={p.step}>
                  <div className="flex gap-5 border-t border-[var(--color-line)] pt-5">
                    <span className="text-sm text-[var(--color-brass)]">{p.step}</span>
                    <div>
                      <h3 className="text-lg">{p.title} <span className="ml-2 text-[11px] uppercase tracking-[0.18em] text-[var(--color-fog)]">{p.duration}</span></h3>
                      <p className="mt-1 text-sm leading-relaxed">{p.copy}</p>
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x pb-[var(--spacing-section)]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Fade>
              <span className="eyebrow mb-6">Before you ask</span>
              <h2 className="h3">Practical questions, practical answers</h2>
            </Fade>
          </div>
          <div className="lg:col-span-8">
            <FaqAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <CtaBand title="Come and feel the timber before you brief us" copy="Visit the Gulberg studio, walk through materials and half-built joinery, and decide whether this is the workshop you want building your space." />
    </>
  );
}
