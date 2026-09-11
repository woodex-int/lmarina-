'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { projects, categories } from '@/lib/content';
import { SplitReveal, Fade, ClipReveal } from '@/components/Motion';
import CtaBand from '@/components/CtaBand';
import PageHero from '@/components/PageHero';
import Marquee from '@/components/Marquee';

export default function ProjectsPage() {
  const [cat, setCat] = useState<(typeof categories)[number]>('All');
  const filtered = cat === 'All' ? projects : projects.filter((p) => p.category === cat);

  return (
    <>
      <PageHero
        eyebrow="Selected works — 2014 to 2026"
        title="Rooms with a job to do"
        copy="A cross-section of headquarters, homes, showrooms and hospitality spaces delivered across Lahore, Islamabad and beyond — each one designed, rendered, built and furnished by one team."
      >
        <div className="flex flex-wrap gap-3">
          {categories.map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`tag ${cat === c ? 'active' : ''}`}>
              {c}
            </button>
          ))}
        </div>
      </PageHero>

      <section className="container-x py-16 md:py-24">
        <div className="grid grid-cols-12 gap-x-6 gap-y-14">
          {filtered.map((p, i) => (
            <Fade
              key={p.slug}
              delay={(i % 2) * 0.1}
              className={`col-span-12 ${i % 3 === 0 ? 'md:col-span-7' : 'md:col-span-5'} ${i % 3 !== 0 ? (i % 3 === 1 ? 'md:mt-24' : 'md:mt-0') : ''}`}
            >
              <Link href="/contact" className="group block" data-cursor-label="Brief us">
                <ClipReveal className="img-zoom relative overflow-hidden rounded-[var(--radius-m)]">
                  <div className={`relative ${i % 3 === 0 ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
                    <Image src={p.image} alt={`${p.title} — ${p.category} interior by Woodex, ${p.location}`} fill sizes="(max-width: 768px) 100vw, 55vw" className="object-cover" />
                  </div>
                </ClipReveal>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-walnut)]">
                      {p.category} · {p.year}
                    </p>
                    <h2 className="mt-2 font-[family-name:var(--font-display)] text-[clamp(1.4rem,2.4vw,2rem)] leading-tight transition-colors duration-500 group-hover:text-[var(--color-walnut)]">
                      {p.title}
                    </h2>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-[var(--color-ink-soft)]">{p.summary}</p>
                  </div>
                  <span className="mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[var(--color-line)] transition-all duration-500 group-hover:rotate-45 group-hover:bg-[var(--color-espresso)] group-hover:text-[var(--color-cream)]">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
                <div className="mt-3 flex gap-5 text-[11px] uppercase tracking-[0.16em] text-[var(--color-fog)]">
                  <span>{p.location}</span>
                  <span>{p.area}</span>
                </div>
              </Link>
            </Fade>
          ))}
        </div>

        <Fade className="mt-24 text-center">
          <p className="lead mb-8">Your project is the one missing from this list.</p>
          <Link href="/contact" className="btn">
            <span className="btn-label">Start your project</span>
            <span className="btn-arrow"><ArrowRight size={14} /></span>
          </Link>
        </Fade>
      </section>

      <div className="border-y border-[var(--color-line)] py-8">
        <Marquee speed={34} reverse>
          {['Offices', 'Homes', 'Retail', 'Hospitality', 'Coworking', 'Furniture'].map((t, i) => (
            <span key={i} className="flex items-center">
              <span className={`mx-6 whitespace-nowrap font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,4rem)] ${i % 2 ? 'italic text-[var(--color-walnut)]' : ''}`}>{t}</span>
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-brass)]" />
            </span>
          ))}
        </Marquee>
      </div>

      <CtaBand />
    </>
  );
}
