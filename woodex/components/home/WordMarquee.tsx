'use client';

import Marquee from '@/components/Marquee';

const WORDS = [
  { word: 'Interiors', style: 'solid', accent: false },
  { word: 'Architecture', style: 'outline', accent: false },
  { word: 'Furniture', style: 'solid', accent: true },
  { word: '3D Design', style: 'outline', accent: false },
  { word: 'Fit-Outs', style: 'solid', accent: false },
];

function Item({ word, style, accent }: { word: string; style: string; accent: boolean }) {
  const cls =
    style === 'solid'
      ? `font-[family-name:var(--font-display)] font-medium ${accent ? 'text-[var(--color-walnut)]' : 'text-[var(--color-espresso)]'}`
      : 'text-transparent [-webkit-text-stroke:1.5px_var(--color-espresso)]';
  return (
    <span className="flex items-center">
      <span className={`mx-6 whitespace-nowrap text-[clamp(2.6rem,7.5vw,7rem)] font-normal leading-none tracking-[-0.03em] md:mx-10 ${cls}`}>
        {word}
      </span>
      <span className="h-3 w-3 rounded-full bg-[var(--color-brass)]" />
    </span>
  );
}

export default function WordMarquee() {
  return (
    <section className="border-y border-[var(--color-line)] py-10 md:py-14">
      <Marquee speed={32}>
        {WORDS.map((w, i) => (
          <Item key={i} {...w} />
        ))}
      </Marquee>
    </section>
  );
}
