'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { posts } from '@/lib/content';
import { SplitReveal, Fade, ClipReveal } from '@/components/Motion';

export default function JournalPreview() {
  return (
    <section className="container-x py-[var(--spacing-section)]">
      <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
        <div>
          <Fade><span className="eyebrow mb-6">Journal</span></Fade>
          <SplitReveal as="h2" className="h2">
            Supporting confident decisions through expertise
          </SplitReveal>
        </div>
        <Fade delay={0.1}>
          <Link href="/journal" className="btn btn-outline">
            <span className="btn-label">View all articles</span>
            <span className="btn-arrow"><ArrowUpRight size={14} /></span>
          </Link>
        </Fade>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {posts.map((p, i) => (
          <Fade key={p.slug} delay={i * 0.1}>
            <Link href={`/journal/${p.slug}`} className="group block" data-cursor-label="Read">
              <ClipReveal className="img-zoom relative aspect-[4/3] overflow-hidden rounded-[var(--radius-m)]">
                <Image src={p.image} alt={p.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </ClipReveal>
              <div className="mt-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-[var(--color-fog)]">
                <span className="text-[var(--color-walnut)]">{p.category}</span>
                <span className="h-1 w-1 rounded-full bg-[var(--color-fog)]" />
                <span>{new Date(p.date).toLocaleDateString('en-PK', { month: 'short', year: 'numeric' })}</span>
                <span className="h-1 w-1 rounded-full bg-[var(--color-fog)]" />
                <span>{p.readTime}</span>
              </div>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-[1.35rem] leading-snug transition-colors duration-500 group-hover:text-[var(--color-walnut)]">
                {p.title}
              </h3>
              <p className="mt-2 text-[0.92rem] leading-relaxed">{p.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-walnut)]">
                Read article <ArrowRight size={14} className="transition-transform duration-500 group-hover:translate-x-1" />
              </span>
            </Link>
          </Fade>
        ))}
      </div>
    </section>
  );
}
