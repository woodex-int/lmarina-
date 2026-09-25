'use client';

import { Star, Quote } from 'lucide-react';
import { Fade, SplitReveal } from '@/components/Motion';
import { testimonials } from '@/lib/content';

export default function Testimonials() {
  return (
    <section className="band-beige py-[var(--spacing-section)]">
      <div className="container-x">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Fade><span className="eyebrow mb-6">Client voices</span></Fade>
            <SplitReveal as="h2" className="h2 text-balance">
              Quiet proof, from the rooms we made
            </SplitReveal>
          </div>
          <Fade delay={0.1}>
            <div className="flex items-center gap-3 rounded-full border border-[var(--color-line)] bg-[var(--color-cream)] px-5 py-2.5">
              <div className="flex gap-0.5 text-[var(--color-brass)]">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={13} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <span className="text-[0.8rem] font-medium">4.9 average across 60+ reviews</span>
            </div>
          </Fade>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Fade key={t.name} delay={(i % 2) * 0.08}>
              <figure className={`h-full rounded-[var(--radius-l)] p-8 lg:p-9 ${i === 0 ? 'band-white shadow-[var(--shadow-card)]' : 'card-fill'} ${i === 3 ? 'md:col-span-2' : ''}`}>
                <Quote size={26} className="text-[var(--color-walnut)]" />
                <blockquote className="mt-5 font-[family-name:var(--font-display)] text-[1.12rem] leading-[1.55] tracking-[-0.015em] lg:text-[1.25rem]">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-4 border-t border-current/10 pt-6">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-[var(--color-brass)] text-[12px] font-semibold text-[var(--color-cream)]">
                    {t.name.split(' ').map((w) => w[0]).join('').slice(0, 2)}
                  </span>
                  <span className="text-sm">
                    <span className="block font-medium">{t.name}</span>
                    <span className="text-[var(--color-fog)]">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
