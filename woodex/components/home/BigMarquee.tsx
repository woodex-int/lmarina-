'use client';

import Marquee from '@/components/Marquee';

export default function BigMarquee() {
  const items = ['Crafted in wood', 'Built around you', 'Designed to outlast trends', 'Delivered on a date'];
  return (
    <section className="on-dark overflow-hidden bg-[var(--color-espresso)] py-14 md:py-20">
      <Marquee speed={38}>
        {items.map((t, i) => (
          <span key={i} className="flex items-center">
            <span className={`mx-5 whitespace-nowrap font-[family-name:var(--font-display)] text-[clamp(2.2rem,6vw,5.5rem)] leading-none tracking-[-0.03em] md:mx-9 ${i % 2 ? 'italic text-[var(--color-brass-soft)]' : 'text-[var(--color-cream)]'}`}>
              {t}
            </span>
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" className="text-[var(--color-brass-soft)]">
              <path d="M7 17L17 7M17 7H8M17 7v9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        ))}
      </Marquee>
    </section>
  );
}
