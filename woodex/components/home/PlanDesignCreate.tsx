'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';
import { SplitReveal, Fade, ClipReveal } from '@/components/Motion';

const CHECKS = [
  {
    title: 'Structural & site assessments',
    copy: 'We survey slabs, columns, services and light paths before designing — so stability, safety and long-term performance are engineered in, not discovered on site.',
  },
  {
    title: 'Functional space planning',
    copy: 'Efficient layouts that maximize usability, flow and comfort — every adjacency aligned with how your team or family actually lives, measured against the brief.',
  },
];

export default function PlanDesignCreate() {
  return (
    <section className="band-beige py-[var(--spacing-section)]">
      <div className="container-x grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
        {/* left: heading + checks */}
        <div>
          <Fade><span className="eyebrow mb-6">Planning & documentation</span></Fade>
          <SplitReveal as="h2" className="h2 text-balance">
            Detailed site analysis and planning for optimal outcomes
          </SplitReveal>

          <div className="mt-10 flex flex-col gap-9">
            {CHECKS.map((c, i) => (
              <Fade key={c.title} delay={0.06 * i}>
                <div className="flex gap-5">
                  <span className="check-bullet mt-1"><Check size={16} strokeWidth={2} /></span>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-[1.15rem] leading-snug">{c.title}</h3>
                    <p className="mt-2 max-w-md text-[0.92rem] leading-relaxed">{c.copy}</p>
                  </div>
                </div>
              </Fade>
            ))}
          </div>

          <Fade delay={0.18}>
            <Link href="/about" className="btn mt-11">
              <span className="btn-label">Discover the process</span>
              <span className="btn-arrow"><ArrowUpRight size={14} /></span>
            </Link>
          </Fade>
        </div>

        {/* right: overlapping rounded images */}
        <div className="relative min-h-[420px] lg:min-h-[520px]">
          <ClipReveal className="img-zoom absolute right-0 top-0 w-[78%]">
            <div className="img-round-lg relative aspect-[4/5] overflow-hidden shadow-[var(--shadow-card)]">
              <Image
                src="/images/service-residential.jpg"
                alt="Residential interior layout study — warm modern living space"
                fill
                sizes="(max-width: 1024px) 80vw, 38vw"
                className="object-cover"
              />
            </div>
          </ClipReveal>
          <Fade delay={0.22}>
            <div className="img-round img-zoom absolute bottom-0 left-0 w-[52%] overflow-hidden border-4 border-[var(--color-cream)] shadow-[var(--shadow-lift)] lg:w-[46%]">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/service-office.jpg"
                  alt="Floor-plan and ceiling coordination drawings brought to life"
                  fill
                  sizes="(max-width: 1024px) 46vw, 22vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
