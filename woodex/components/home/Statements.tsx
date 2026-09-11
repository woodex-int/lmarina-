'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SplitReveal, Fade } from '@/components/Motion';

const statements = [
  {
    head: 'Spaces shaped by purpose and identity',
    copy: 'Interior design is more than decoration — it is the evidence of what a company or family stands for. We craft rooms that read true on arrival: honest materials, generous proportions, and a point of view held consistently from lobby to last corner.',
    href: '/about',
    cta: 'Our philosophy',
  },
  {
    head: 'Timeless designs with lasting material',
    copy: 'Trends photograph well; walnut ages better. Every Woodex space is built around solid timber, real stone and joinery documented down to the joint — designed to survive ten years of use and look like the better for it.',
    href: '/services/custom-solid-wood-furniture',
    cta: 'Our furniture workshop',
  },
  {
    head: 'Design that helps business grow',
    copy: 'We measure an office by hiring offers accepted, deals closed in the reception and staff still at their desks in year three. Beauty is the entry ticket; performance is the deliverable — from first test-fit to turnkey handover.',
    href: '/services/office-interior-design',
    cta: 'Office interiors',
  },
];

export default function Statements() {
  return (
    <section className="container-x py-[var(--spacing-section)]">
      <div className="grid gap-14 border-t border-[var(--color-line)] pt-14 md:gap-20">
        {statements.map((s, i) => (
          <div key={i} className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-2">
              <Fade>
                <span className="idx-label">0{i + 1} — Principle</span>
              </Fade>
            </div>
            <div className="md:col-span-7">
              <SplitReveal as="h2" className="h2 text-balance">
                {s.head}
              </SplitReveal>
            </div>
            <div className="md:col-span-3 md:pt-3">
              <Fade delay={0.1}>
                <p className="text-[0.95rem] leading-relaxed">{s.copy}</p>
                <Link href={s.href} className="btn btn-outline mt-6">
                  <span className="btn-label">{s.cta}</span>
                  <span className="btn-arrow"><ArrowUpRight size={14} /></span>
                </Link>
              </Fade>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
