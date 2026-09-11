'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { SplitReveal, Fade } from '@/components/Motion';

const rows = [
  {
    n: '01',
    title: 'Office interior design',
    copy: 'Headquarters, technology floors, coworking campuses and executive suites — workplace strategy through turnkey fit-out.',
    href: '/services/office-interior-design',
    image: '/images/service-office.jpg',
    alt: 'Corporate office interior with wood slat ceiling and glass meeting rooms',
  },
  {
    n: '02',
    title: 'Residential interiors',
    copy: 'Apartments to 2-kanal family homes: space planning, kitchens, wardrobes, ceilings and bespoke furniture.',
    href: '/services/residential-interior-design',
    image: '/images/service-residential.jpg',
    alt: 'Warm contemporary residential living room with teak paneling',
  },
  {
    n: '03',
    title: 'Retail & showroom design',
    copy: 'Boutiques, jewellery and bridal stores, showrooms and mall fit-outs planned around the customer journey.',
    href: '/services/retail-showroom-interior-design',
    image: '/images/service-retail.jpg',
    alt: 'Timber and brass boutique retail interior',
  },
];

const pills = [
  { label: '3D visualization & walkthroughs', href: '/services/3d-visualization' },
  { label: 'Turnkey design & build', href: '/services/turnkey-design-build' },
  { label: 'Custom solid-wood furniture', href: '/services/custom-solid-wood-furniture' },
];

export default function ServicesSection() {
  return (
    <section className="container-x py-[var(--spacing-section)]">
      <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <Fade><span className="eyebrow mb-6">What we do</span></Fade>
          <SplitReveal as="h2" className="h2 text-balance">
            Design solutions for spaces that have to perform
          </SplitReveal>
        </div>
        <div className="md:col-span-4">
          <Fade delay={0.12}>
            <p className="lead !text-[1.05rem]">
              Thoughtful design meets precise execution — clarity, balance and craft, for spaces
              that feel modern now and considered in a decade.
            </p>
          </Fade>
        </div>
      </div>

      {/* hover rows */}
      <div className="relative">
        {rows.map((r) => (
          <Link
            key={r.n}
            href={r.href}
            className="service-row group relative grid grid-cols-12 items-center gap-4 py-9 md:py-12"
            data-cursor-label="Open"
          >
            <span className="col-span-2 text-sm text-[var(--color-fog)] md:col-span-1">({r.n})</span>
            <h3 className="col-span-10 font-[family-name:var(--font-display)] text-[clamp(1.7rem,4vw,3.4rem)] leading-[1.05] tracking-[-0.02em] transition-transform duration-500 group-hover:translate-x-3 md:col-span-5" style={{ transitionTimingFunction: 'var(--ease-lux)' }}>
              {r.title}
            </h3>
            <p className="col-span-10 col-start-3 max-w-md text-[0.95rem] md:col-span-5 md:col-start-7">{r.copy}</p>
            <span className="col-span-12 flex justify-end md:col-span-1 md:col-start-12">
              <span className="grid h-12 w-12 place-items-center rounded-full border border-[var(--color-line)] transition-all duration-500 group-hover:bg-[var(--color-espresso)] group-hover:text-[var(--color-cream)]" style={{ transitionTimingFunction: 'var(--ease-lux)' }}>
                <ArrowUpRight size={18} />
              </span>
            </span>

            <div className="row-preview hidden md:block">
              <Image src={r.image} alt={r.alt} fill sizes="340px" className="object-cover" />
            </div>
          </Link>
        ))}
      </div>

      {/* big feature card */}
      <Fade className="mt-16">
        <div className="grid grid-cols-1 overflow-hidden rounded-[var(--radius-l)] bg-[var(--color-night-2)] on-dark md:grid-cols-2">
          <div className="relative min-h-[320px] md:min-h-[560px]">
            <Image
              src="/images/service-furniture.jpg"
              alt="Craftsman joining solid sheesham wood in the Woodex workshop"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center gap-7 p-10 md:p-16">
            <span className="eyebrow">Flagship capability</span>
            <h3 className="h3 text-balance">The furniture workshop behind every Woodex interior</h3>
            <p>
              Before we designed rooms, we built the furniture inside them. Seasoned sheesham,
              walnut and oak; mortise-and-tenon joinery; hand-rubbed finishes — a capability most
              studios subcontract and we have owned since day one.
            </p>
            <ul className="grid gap-3 text-sm text-[var(--color-cream)]/75">
              {['Seasoned solid timber, moisture-checked', 'Traditional joinery, ten-year craft warranty', 'Single pieces to commercial batch orders'].map((x) => (
                <li key={x} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brass)]" /> {x}
                </li>
              ))}
            </ul>
            <div className="mt-2">
              <Link href="/services/custom-solid-wood-furniture" className="btn btn-light">
                <span className="btn-label">Explore the workshop</span>
                <span className="btn-arrow"><ArrowUpRight size={14} /></span>
              </Link>
            </div>
          </div>
        </div>
      </Fade>

      {/* quick pills */}
      <div className="mt-10 flex flex-wrap gap-4">
        {pills.map((p) => (
          <Fade key={p.label}>
            <Link href={p.href} className="group inline-flex items-center gap-3 rounded-full border border-[var(--color-line)] px-7 py-4 text-[0.95rem] font-medium transition-colors duration-500 hover:border-[var(--color-espresso)] hover:bg-[var(--color-espresso)] hover:text-[var(--color-cream)]">
              {p.label}
              <ArrowRight size={15} className="transition-transform duration-500 group-hover:translate-x-1" style={{ transitionTimingFunction: 'var(--ease-lux)' }} />
            </Link>
          </Fade>
        ))}
      </div>
    </section>
  );
}
