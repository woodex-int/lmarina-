'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SplitReveal, Fade } from './Motion';

export default function CtaBand({
  title = 'Stay connected with us',
  copy = 'Reach out to explore how our design expertise can shape your next space — first site visit and test-fit are complimentary.',
  dark = true,
}: {
  title?: string;
  copy?: string;
  dark?: boolean;
}) {
  return (
    <section className={`relative overflow-hidden ${dark ? 'on-dark bg-[var(--color-night)] text-[var(--color-cream)]' : ''}`}>
      <div className="container-x flex min-h-[70svh] flex-col items-center justify-center py-28 text-center">
        <Fade>
          <span className="eyebrow center mb-7">Start a project</span>
        </Fade>
        <SplitReveal
          as="h2"
          className="h2 max-w-4xl text-balance"
          stagger={0.045}
        >
          {title}
        </SplitReveal>
        <Fade delay={0.15}>
          <p className="lead mt-6 max-w-xl">{copy}</p>
        </Fade>
        <Fade delay={0.25}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn btn-light" data-cursor-label="Start">
              <span className="btn-label">Book free consultation</span>
              <span className="btn-arrow">
                <ArrowUpRight size={14} />
              </span>
            </Link>
            <Link href="/projects" className="btn btn-outline-light">
              <span className="btn-label">View projects</span>
              <span className="btn-arrow">
                <ArrowUpRight size={14} />
              </span>
            </Link>
          </div>
        </Fade>
      </div>
    </section>
  );
}
