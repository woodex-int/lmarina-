'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { SplitReveal, Fade } from '@/components/Motion';

const SHOTS = [
  { src: '/images/service-3d.jpg', label: 'Meridian boardroom — render', note: 'Photoreal approval set, 2025' },
  { src: '/images/gallery-boardroom.jpg', label: 'Meridian boardroom — built', note: 'Delivered on the render, Gulberg' },
  { src: '/images/gallery-lobby.jpg', label: 'The Grove — lobby study', note: 'Lighting scene pass, DHA' },
  { src: '/images/service-office.jpg', label: 'Northwind — focus pods', note: 'Acoustic layout, Jail Road' },
  { src: '/images/hero-office.jpg', label: 'Kindle — timber pods', note: 'Material test, Orchard' },
];

export default function Collage() {
  const [a, setA] = useState(1);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const id = setInterval(() => setA((v) => (v + 1) % SHOTS.length), 4600);
    return () => clearInterval(id);
  }, []);

  const move = (d: number) => setA((v) => (v + d + SHOTS.length) % SHOTS.length);

  return (
    <section className="band-navy on-dark overflow-hidden py-[var(--spacing-section)]">
      <div className="container-x">
        <div className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Fade><span className="eyebrow mb-6">The 3D Studio</span></Fade>
            <SplitReveal as="h2" className="h2 text-balance !text-[var(--color-cream)]">
              Every room approved before a single wall moves
            </SplitReveal>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <Fade delay={0.1}>
              <p className="mb-6">
                Photoreal renders, VR walkthroughs and material-accurate lighting scenes — the same
                images you approve become the specification our builders work from.
              </p>
              <Link href="/3d-studio" className="btn btn-light">
                <span className="btn-label">Explore the 3D Studio</span>
                <span className="btn-arrow"><ArrowUpRight size={14} /></span>
              </Link>
            </Fade>
          </div>
        </div>
      </div>

      {/* coverflow */}
      <div className="coverflow mt-4 w-full">
        {SHOTS.map((s, i) => {
          const off = ((i - a + SHOTS.length + Math.floor(SHOTS.length / 2)) % SHOTS.length) - Math.floor(SHOTS.length / 2);
          const abs = Math.abs(off);
          const isActive = off === 0;
          return (
            <button
              key={s.src + i}
              onClick={() => setA(i)}
              onMouseEnter={() => setA(i)}
              aria-label={`Show ${s.label}`}
              className="coverflow-item cursor-pointer"
              style={{
                width: isActive ? 'clamp(300px, 46vw, 760px)' : 'clamp(180px, 20vw, 320px)',
                aspectRatio: isActive ? '16/9' : '4/3',
                transform: `rotateY(${off * -34}deg) translateX(${off * 8}px) scale(${1 - abs * 0.09})`,
                opacity: abs === 0 ? 1 : abs === 1 ? 0.55 : 0.22,
                zIndex: 10 - abs,
                filter: isActive ? 'none' : 'saturate(0.8)',
                boxShadow: isActive ? '0 50px 120px -40px rgba(0,0,0,0.8)' : 'none',
              }}
            >
              <Image src={s.src} alt={`${s.label} — Woodex 3D visualization`} width={1280} height={720} sizes="(max-width: 768px) 90vw, 46vw" className="h-full w-full object-cover" />
              {isActive && (
                <span className="glass-chip absolute bottom-4 left-4 px-4 py-2 text-[0.78rem] text-[var(--color-cream)]">
                  <span className="font-medium">{s.label}</span>
                  <span className="mx-2 opacity-40">·</span>
                  <span className="opacity-70">{s.note}</span>
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div className="container-x mt-10 flex items-center justify-between">
        <p className="idx-label">{String(a + 1).padStart(2, '0')} / {String(SHOTS.length).padStart(2, '0')} — render &amp; reality</p>
        <div className="flex gap-3">
          <button onClick={() => move(-1)} aria-label="Previous render" className="grid h-12 w-12 place-items-center rounded-full border border-[rgba(252,242,232,0.3)] transition-colors hover:bg-[var(--color-cream)] hover:text-[var(--color-espresso)]"><ArrowLeft size={16} /></button>
          <button onClick={() => move(1)} aria-label="Next render" className="grid h-12 w-12 place-items-center rounded-full border border-[rgba(252,242,232,0.3)] transition-colors hover:bg-[var(--color-cream)] hover:text-[var(--color-espresso)]"><ArrowRight size={16} /></button>
        </div>
      </div>
    </section>
  );
}
