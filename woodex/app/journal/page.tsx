import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import { Fade, ClipReveal } from '@/components/Motion';
import { posts } from '@/lib/content';
import JsonLd from '@/components/JsonLd';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Journal — Interior Design, Office Fit-Out & Woodcraft Insights',
  description:
    'Practical, Pakistan-specific guidance from the Woodex studio: office interior trends, fit-out timelines, solid wood vs veneer, budgets and decisions explained for clients, not designers.',
  alternates: { canonical: '/journal' },
};

export default function JournalPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'Woodex Journal',
          url: `${site.url}/journal`,
          blogPost: posts.map((p) => ({
            '@type': 'BlogPosting',
            headline: p.title,
            datePublished: p.date,
            image: `${site.url}${p.image}`,
            author: { '@type': 'Organization', name: site.name },
            publisher: { '@type': 'Organization', name: site.name },
            mainEntityOfPage: `${site.url}/journal/${p.slug}`,
          })),
        }}
      />
      <PageHero
        eyebrow="The Woodex Journal"
        title="Notes from the studio and the workshop"
        copy="What we have learned designing and building hundreds of spaces in Pakistan — written to help you brief, budget and decide with confidence."
      />

      <section className="container-x py-[var(--spacing-section)]">
        {/* Featured */}
        <Fade>
          <Link href={`/journal/${posts[0].slug}`} className="group grid grid-cols-1 gap-10 border-b border-[var(--color-line)] pb-16 md:grid-cols-2 md:items-center">
            <ClipReveal className="img-zoom relative aspect-[16/10] overflow-hidden rounded-[var(--radius-l)]">
              <Image src={posts[0].image} alt={posts[0].title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </ClipReveal>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-walnut)]">
                Featured · {posts[0].category} · {posts[0].readTime}
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(1.8rem,3.4vw,2.8rem)] leading-[1.1] transition-colors duration-500 group-hover:text-[var(--color-walnut)]">
                {posts[0].title}
              </h2>
              <p className="lead mt-5">{posts[0].excerpt}</p>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium">
                Read the feature <ArrowRight size={15} className="transition-transform duration-500 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </Fade>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2">
          {posts.slice(1).map((p, i) => (
            <Fade key={p.slug} delay={(i % 2) * 0.1}>
              <Link href={`/journal/${p.slug}`} className="group block">
                <ClipReveal className="img-zoom relative aspect-[16/9] overflow-hidden rounded-[var(--radius-m)]">
                  <Image src={p.image} alt={p.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                </ClipReveal>
                <p className="mt-5 text-[11px] uppercase tracking-[0.2em] text-[var(--color-fog)]">
                  {p.category} · {new Date(p.date).toLocaleDateString('en-PK', { day: 'numeric', month: 'long', year: 'numeric' })} · {p.readTime}
                </p>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-[1.6rem] leading-snug transition-colors duration-500 group-hover:text-[var(--color-walnut)]">
                  {p.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed">{p.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-walnut)]">
                  Read article <ArrowRight size={14} className="transition-transform duration-500 group-hover:translate-x-1" />
                </span>
              </Link>
            </Fade>
          ))}
        </div>
      </section>

      <CtaBand title="Planning a space of your own?" copy="Read enough? The first consultation and test-fit are free — bring your floor plan and your questions." />
    </>
  );
}
