'use client';

import { Armchair, Compass, Box } from 'lucide-react';
import { Fade, SplitReveal } from '@/components/Motion';

const features = [
  {
    icon: Armchair,
    title: 'Interior design',
    copy: 'Complete spatial and material design for offices, homes and retail — modern clarity grounded in warm, lasting material.',
  },
  {
    icon: Compass,
    title: 'Consultation & strategy',
    copy: 'Workplace strategy, test-fit options, budget tracks and honest feasibility advice before you commit a rupee.',
  },
  {
    icon: Box,
    title: '3D modeling',
    copy: 'Photoreal renders and walkthroughs built from the real materials we specify — approval before construction, not after.',
  },
];

export default function FeatureTrio() {
  return (
    <section className="on-dark bg-[var(--color-night)] py-[var(--spacing-section)] text-[var(--color-cream)]">
      <div className="container-x">
        <div className="mb-16 max-w-3xl">
          <Fade><span className="eyebrow mb-6">Capabilities</span></Fade>
          <SplitReveal as="h2" className="h2 text-balance">
            Three disciplines, one accountable studio
          </SplitReveal>
        </div>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius-l)] border border-[var(--color-line-light)] bg-[var(--color-line-light)] md:grid-cols-3">
          {features.map((f, i) => (
            <Fade key={f.title} delay={i * 0.12}>
              <div className="group flex h-full flex-col gap-6 bg-[var(--color-night)] p-10 transition-colors duration-500 hover:bg-[var(--color-night-2)] md:p-12">
                <div className="grid h-14 w-14 place-items-center rounded-full border border-[var(--color-line-light)] text-[var(--color-brass-soft)] transition-all duration-500 group-hover:rotate-[8deg] group-hover:border-[var(--color-brass)]">
                  <f.icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-2xl">{f.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--color-cream)]/65">{f.copy}</p>
                <span className="mt-auto pt-4 text-xs uppercase tracking-[0.22em] text-[var(--color-brass-soft)]">0{i + 1}</span>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
