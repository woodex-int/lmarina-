import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { posts } from '@/lib/content';
import { site } from '@/lib/site';
import CtaBand from '@/components/CtaBand';
import CTA from '@/components/CTA';
import JsonLd from '@/components/JsonLd';
import { SplitReveal, Fade, ClipReveal } from '@/components/Motion';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.excerpt,
    alternates: { canonical: `/journal/${p.slug}` },
    openGraph: {
      type: 'article',
      title: p.title,
      description: p.excerpt,
      publishedTime: p.date,
      images: [{ url: p.image }],
    },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const idx = posts.findIndex((x) => x.slug === slug);
  if (idx === -1) notFound();
  const p = posts[idx];
  const next = posts[(idx + 1) % posts.length];

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: p.title,
          description: p.excerpt,
          image: `${site.url}${p.image}`,
          datePublished: p.date,
          dateModified: p.date,
          author: { '@type': 'Organization', name: site.name, url: site.url },
          publisher: {
            '@type': 'Organization',
            name: site.name,
            logo: { '@type': 'ImageObject', url: `${site.url}/favicon.svg` },
          },
          mainEntityOfPage: { '@type': 'WebPage', '@id': `${site.url}/journal/${p.slug}` },
          keywords: [p.category, 'interior design Pakistan', 'office interior Lahore'],
        }}
      />

      <article className="pt-36 md:pt-44">
        <div className="container-x">
          <Fade>
            <Link href="/journal" className="mb-8 inline-flex items-center gap-2 text-sm text-[var(--color-fog)] transition-colors hover:text-[var(--color-walnut)]">
              <ArrowLeft size={14} /> All articles
            </Link>
          </Fade>

          <div className="max-w-4xl">
            <Fade>
              <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-walnut)]">
                {p.category} · {new Date(p.date).toLocaleDateString('en-PK', { day: 'numeric', month: 'long', year: 'numeric' })} · {p.readTime}
              </p>
            </Fade>
            <SplitReveal as="h1" className="h1 mt-5 text-balance" stagger={0.04}>
              {p.title}
            </SplitReveal>
            <Fade delay={0.1}>
              <p className="lead mt-7">{p.excerpt}</p>
            </Fade>
          </div>

          <ClipReveal className="relative mt-12 aspect-[16/8] overflow-hidden rounded-[var(--radius-l)] shadow-[var(--shadow-card)]">
            <Image src={p.image} alt={p.title} fill priority sizes="100vw" className="object-cover" />
          </ClipReveal>
        </div>

        <div className="container-x py-16 md:py-24">
          <div className="mx-auto max-w-3xl space-y-12">
            {p.body.map((block, i) => (
              <Fade key={i} as="section">
                {block.heading && <h2 className="h3 mb-5">{block.heading}</h2>}
                {block.paragraphs.map((para, j) => (
                  <p key={j} className="mb-5 text-[1.07rem] leading-[1.85] text-[var(--color-ink)]/80">
                    {para}
                  </p>
                ))}
                {block.list && (
                  <ul className="mt-6 space-y-3">
                    {block.list.map((li) => (
                      <li key={li} className="flex gap-3 text-[1.02rem] leading-relaxed">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-brass)]" />
                        {li}
                      </li>
                    ))}
                  </ul>
                )}
              </Fade>
            ))}

            <div className="rounded-[var(--radius-l)] bg-[var(--color-paper-2)] p-10 text-center">
              <p className="font-[family-name:var(--font-display)] text-[1.5rem] leading-snug">
                A 45-minute first consultation — site visit, rough budget band and a test-fit — is free.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-4">
                <CTA>Book free consultation</CTA>
                <Link href="/services" className="btn btn-outline">
                  <span className="btn-label">All services</span>
                  <span className="btn-arrow"><ArrowRight size={14} /></span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* next */}
        <div className="container-x pb-24">
          <Link href={`/journal/${next.slug}`} className="group flex flex-wrap items-center justify-between gap-6 border-t border-[var(--color-line)] pt-10">
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-fog)]">Next article</span>
            <span className="font-[family-name:var(--font-display)] text-[clamp(1.3rem,2.6vw,2rem)] transition-colors group-hover:text-[var(--color-walnut)]">
              {next.title}
            </span>
            <ArrowRight size={22} className="transition-transform duration-500 group-hover:translate-x-2" />
          </Link>
        </div>
      </article>

      <CtaBand />
    </>
  );
}
