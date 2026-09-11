'use client';

import { useEffect, useRef, useState } from 'react';
import { Quote, ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { Fade } from '@/components/Motion';
import { testimonials } from '@/lib/content';

export default function Testimonials() {
  const [i, setI] = useState(0);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % testimonials.length), 7000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="on-dark relative overflow-hidden bg-[var(--color-walnut-deep)] py-[var(--spacing-section)] text-[var(--color-cream)]">
      <div aria-hidden className="pointer-events-none absolute -right-20 top-0 h-[34vw] w-[34vw] rounded-full bg-[radial-gradient(circle,rgba(125,147,184,0.20),transparent_65%)]" />
      <div className="container-x relative">
        <Fade>
          <div className="mb-12 flex items-center justify-between">
            <span className="eyebrow">Client voices</span>
            <div className="flex gap-3">
              <button
                onClick={() => setI((v) => (v - 1 + testimonials.length) % testimonials.length)}
                className="grid h-12 w-12 place-items-center rounded-full border border-[var(--color-line-light)] transition-colors hover:bg-[var(--color-cream)] hover:text-[var(--color-espresso)]"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={() => setI((v) => (v + 1) % testimonials.length)}
                className="grid h-12 w-12 place-items-center rounded-full border border-[var(--color-line-light)] transition-colors hover:bg-[var(--color-cream)] hover:text-[var(--color-espresso)]"
                aria-label="Next testimonial"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </Fade>

        <div ref={root} className="grid min-h-[280px] place-items-center text-center md:min-h-[240px]">
          {testimonials.map((t, idx) => (
            <figure
              key={idx}
              className="col-start-1 row-start-1 max-w-4xl transition-all duration-700"
              style={{
                opacity: i === idx ? 1 : 0,
                transform: i === idx ? 'translateY(0)' : 'translateY(24px)',
                pointerEvents: i === idx ? 'auto' : 'none',
                transitionTimingFunction: 'var(--ease-lux)',
              }}
              aria-hidden={i !== idx}
            >
              <Quote size={34} className="mx-auto mb-7 text-[var(--color-brass-soft)]" />
              <div className="mb-6 flex justify-center gap-1 text-[var(--color-brass-soft)]">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={15} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="font-[family-name:var(--font-display)] text-[clamp(1.4rem,2.6vw,2.1rem)] leading-[1.3] tracking-[-0.01em]">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-8 text-sm">
                <span className="font-medium text-[var(--color-cream)]">{t.name}</span>
                <span className="mx-2 opacity-40">/</span>
                <span className="text-[var(--color-cream)]/60">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 flex justify-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
              className="h-1.5 rounded-full transition-all duration-500"
              style={{
                width: i === idx ? 36 : 10,
                background: i === idx ? 'var(--color-brass-soft)' : 'rgba(244,239,230,0.25)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
