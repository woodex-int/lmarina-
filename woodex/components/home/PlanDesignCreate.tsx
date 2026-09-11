'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  { n: '01', label: 'Layout', sub: 'Space planning', copy: 'Test-fits, adjacency and circulation — the plan every material decision answers to.' },
  { n: '02', label: 'Design', sub: 'Materials & 3D', copy: 'Warm material systems detailed in photoreal renders before anything is ordered.' },
  { n: '03', label: 'Create', sub: 'Build & craft', copy: 'Fit-out on site and solid-wood furniture in our workshop, on one timeline.' },
];

export default function PlanDesignCreate() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.pdc-step',
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          stagger: 0.14,
          ease: 'power3.out',
          scrollTrigger: { trigger: root.current, start: 'top 82%' },
        }
      );
      gsap.fromTo(
        '.pdc-line',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.6,
          ease: 'power3.inOut',
          scrollTrigger: { trigger: root.current, start: 'top 75%' },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="container-x py-16 md:py-24">
      <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-10">
        {STEPS.map((s) => (
          <div key={s.n} className="pdc-step relative">
            <div className="flex items-baseline gap-4">
              <span className="text-sm text-[var(--color-fog)]">{s.n}</span>
              <span className="h-px flex-1 bg-[var(--color-line)] md:hidden" />
            </div>
            <p className="mt-5 text-[11px] uppercase tracking-[0.24em] text-[var(--color-walnut)]">{s.sub}</p>
            <h3 className="mt-2 font-[family-name:var(--font-display)] text-[clamp(2.4rem,5vw,4.2rem)] leading-none tracking-[-0.03em]">
              {s.label}
            </h3>
            <p className="mt-4 max-w-xs text-[0.95rem] leading-relaxed">{s.copy}</p>
          </div>
        ))}
      </div>
      <div className="pdc-line mt-14 hidden h-px origin-left bg-[var(--color-line)] md:block" />
    </section>
  );
}
