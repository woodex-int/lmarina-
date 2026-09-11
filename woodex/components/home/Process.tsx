'use client';

import { processSteps } from '@/lib/content';
import { SplitReveal, Fade } from '@/components/Motion';
import CTA from '@/components/CTA';

export default function Process() {
  return (
    <section className="container-x py-[var(--spacing-section)]">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <Fade><span className="eyebrow mb-6">How a Woodex project runs</span></Fade>
          <SplitReveal as="h2" className="h2 text-balance">
            Five calm, documented steps from first visit to handover
          </SplitReveal>
        </div>
        <div className="md:col-span-3 md:col-start-10">
          <Fade delay={0.1}>
            <CTA variant="outline">Start with step one</CTA>
          </Fade>
        </div>
      </div>

      <div className="mt-16">
        {processSteps.map((s, i) => (
          <Fade key={s.step} delay={i * 0.05}>
            <div className="group grid grid-cols-12 items-start gap-4 border-t border-[var(--color-line)] py-10 last:border-b md:gap-8 md:py-12">
              <span className="col-span-3 text-sm text-[var(--color-fog)] md:col-span-2">{s.step}</span>
              <h3 className="col-span-9 font-[family-name:var(--font-display)] text-[clamp(1.5rem,3vw,2.4rem)] leading-tight transition-transform duration-500 group-hover:translate-x-2 md:col-span-3" style={{ transitionTimingFunction: 'var(--ease-lux)' }}>
                {s.title}
              </h3>
              <span className="col-span-6 col-start-4 text-xs uppercase tracking-[0.18em] text-[var(--color-walnut)] md:col-span-2 md:col-start-6">{s.duration}</span>
              <p className="col-span-12 max-w-xl text-[0.95rem] md:col-span-5 md:col-start-8">{s.copy}</p>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
}
