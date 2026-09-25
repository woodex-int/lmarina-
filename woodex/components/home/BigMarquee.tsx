'use client';

import { Fade, Counter } from '@/components/Motion';
import { stats } from '@/lib/content';

const META = [
  { label: 'Years designing & building', copy: 'From workbench to full design-and-build studio since 2014.' },
  { label: 'Spaces delivered', copy: 'Offices, homes, retail and hospitality across four cities.' },
  { label: 'Woodwork fitted', copy: 'Square feet of custom joinery built in our own workshop.' },
  { label: 'Return clients & referrals', copy: 'The clearest proof that the first project went well.' },
];

export default function BigMarquee() {
  return (
    <section className="band-white py-[var(--spacing-section)]">
      <div className="container-x">
        <div className="grid grid-cols-1 overflow-hidden rounded-[var(--radius-l)] border border-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => {
            const navy = i === 1;
            return (
              <Fade key={s.label}>
                <div className={`flex h-full flex-col gap-8 border-b border-[var(--color-line)] p-8 sm:[&:nth-child(-n+2)]:border-b lg:border-b-0 ${navy ? 'on-dark bg-[var(--color-brass)] !text-[var(--color-cream)]' : 'bg-[var(--color-paper-2)]'} ${i % 2 === 1 ? 'sm:border-l' : ''} lg:border-l lg:first:border-l-0`}>
                  <p className="stat-num !text-[3.4rem]">
                    {navy ? (
                      <span className="text-[var(--color-cream)]"><Counter to={parseInt(s.value, 10)} suffix={s.suffix} /></span>
                    ) : (
                      <Counter to={parseInt(s.value, 10)} suffix={s.suffix} />
                    )}
                  </p>
                  <div className="border-t border-current/15 pt-6">
                    <h3 className="font-[family-name:var(--font-display)] text-[1.05rem] leading-snug">{s.label}</h3>
                    <p className={`mt-3 text-[0.85rem] leading-relaxed ${navy ? 'text-[rgba(252,242,232,0.75)]' : 'text-[var(--color-ink-soft)]'}`}>{META[i].copy}</p>
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
