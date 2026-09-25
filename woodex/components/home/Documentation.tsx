'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Armchair, PenTool, Boxes } from 'lucide-react';
import { SplitReveal, Fade, ClipReveal } from '@/components/Motion';

const FEATURES = [
  {
    icon: Armchair,
    title: 'Interior design',
    copy: 'Complete spatial and material design for offices, homes and retail — clarity, purpose and lasting impact.',
  },
  {
    icon: PenTool,
    title: 'Consultation & strategy',
    copy: 'Test-fit options, budget tracks and honest feasibility advice before a single wall is committed.',
  },
  {
    icon: Boxes,
    title: '3D modeling & walkthroughs',
    copy: 'Photoreal renders built from the real materials we specify — approve the room before it exists. Explore the 3D Studio.',
    href: '/3d-studio',
  },
];

export default function Documentation() {
  return (
    <section className="band-beige py-[var(--spacing-section)]">
      <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
        {/* left: heading + CTA + small image */}
        <div className="lg:col-span-4">
          <SplitReveal as="h2" className="h2 text-balance">
            Building spaces that are made to last
          </SplitReveal>
          <Fade delay={0.1}>
            <p className="mt-6 text-[0.95rem] leading-relaxed">
              Woodex is a design-and-build studio: architecture-focused interiors grounded in
              simplicity, balance and complete documentation — so what is drawn is exactly what
              is delivered.
            </p>
            <Link href="/about" className="btn mt-8">
              <span className="btn-label">Learn more</span>
              <span className="btn-arrow"><ArrowUpRight size={14} /></span>
            </Link>
          </Fade>
          <Fade delay={0.2}>
            <div className="img-round img-zoom relative mt-12 aspect-[4/3] overflow-hidden">
              <Image
                src="/images/about-studio.jpg"
                alt="Woodex studio desk with material samples and drawings"
                fill
                sizes="(max-width: 1024px) 100vw, 30vw"
                className="object-cover"
              />
            </div>
          </Fade>
        </div>

        {/* center: tall image */}
        <div className="lg:col-span-4">
          <ClipReveal className="img-zoom h-full min-h-[320px]">
            <div className="img-round relative h-full min-h-[320px]">
              <Image
                src="/images/service-residential.jpg"
                alt="Warm contemporary living space designed by Woodex"
                fill
                sizes="(max-width: 1024px) 100vw, 30vw"
                className="object-cover"
              />
            </div>
          </ClipReveal>
        </div>

        {/* right: feature rows with white hover card */}
        <div className="lg:col-span-4">
          <div className="flex flex-col">
            {FEATURES.map((f, i) => (
              <Fade key={f.title} delay={i * 0.08}>
                <Link
                  href={f.href ?? '/services'}
                  className="group -mx-6 flex flex-col gap-4 rounded-[var(--radius-l)] border-b border-[var(--color-line)] px-6 py-8 transition-all duration-500 hover:border-transparent hover:bg-[var(--color-cream)] hover:px-8 hover:shadow-[var(--shadow-card)]"
                  style={{ transitionTimingFunction: 'var(--ease-lux)' }}
                >
                  <span className="grid h-11 w-11 place-items-center text-[var(--color-espresso)] transition-transform duration-500 group-hover:-translate-y-0.5">
                    <f.icon size={26} strokeWidth={1.4} />
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] text-[1.4rem] leading-snug">{f.title}</h3>
                  <p className="text-[0.9rem] leading-relaxed">{f.copy}</p>
                </Link>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
