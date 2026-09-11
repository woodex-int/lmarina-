import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Check, ArrowRight } from 'lucide-react';
import { services, getService } from '@/lib/services';
import { processSteps } from '@/lib/content';
import { site } from '@/lib/site';
import PageHero from '@/components/PageHero';
import FaqAccordion from '@/components/FaqAccordion';
import CtaBand from '@/components/CtaBand';
import CTA from '@/components/CTA';
import JsonLd from '@/components/JsonLd';
import { SplitReveal, Fade, ClipReveal } from '@/components/Motion';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    keywords: s.keywords,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: {
      title: s.metaTitle,
      description: s.metaDescription,
      url: `${site.url}/services/${s.slug}`,
      images: [{ url: s.heroImage, width: 1600, height: 1000, alt: s.title }],
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  const related = services.filter((x) => x.slug !== s.slug).slice(0, 3);

  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.title,
    serviceType: s.title,
    description: s.metaDescription,
    url: `${site.url}/services/${s.slug}`,
    image: `${site.url}${s.heroImage}`,
    provider: {
      '@type': 'InteriorDesigner',
      name: site.name,
      url: site.url,
      telephone: site.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: site.address.street,
        addressLocality: site.address.locality,
        addressRegion: site.address.region,
        addressCountry: 'PK',
      },
    },
    areaServed: site.areasServed.map((a) => ({ '@type': 'City', name: a })),
    keywords: s.keywords.join(', '),
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: s.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const crumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${site.url}/services` },
      { '@type': 'ListItem', position: 3, name: s.title, item: `${site.url}/services/${s.slug}` },
    ],
  };

  return (
    <>
      <JsonLd data={[serviceLd, faqLd, crumbLd]} />

      <PageHero
        eyebrow={s.eyebrow}
        title={s.title}
        image={s.heroImage}
        imageAlt={`${s.title} by Woodex Interiors, Lahore`}
        crumb={s.shortName}
        copy={<p className="font-[family-name:var(--font-display)] font-medium !text-[var(--color-walnut)] text-[clamp(1.3rem,2.2vw,1.9rem)] !leading-[1.25]">{s.tagline}</p>}
      >
        <div className="flex flex-wrap gap-4">
          <CTA href="/contact">Book free consultation</CTA>
          <Link href="/projects" className="btn btn-outline">
            <span className="btn-label">View projects</span>
            <span className="btn-arrow"><ArrowUpRight size={14} /></span>
          </Link>
        </div>
      </PageHero>

      {/* INTRO */}
      <section className="container-x py-[var(--spacing-section)]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Fade>
              <span className="eyebrow sticky top-28">Overview</span>
            </Fade>
          </div>
          <div className="lg:col-span-8">
            {s.intro.map((para, i) => (
              <Fade key={i} delay={i * 0.08}>
                <p className={`mb-6 font-[family-name:var(--font-display)] text-[clamp(1.25rem,1.05rem+1.2vw,1.85rem)] leading-[1.35] tracking-[-0.01em] text-[var(--color-ink)] ${i > 0 ? '!text-[1.05rem] font-sans !font-normal !leading-[1.75] !tracking-normal !text-[var(--color-ink-soft)]' : ''}`}>
                  {para}
                </p>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* SIGNATURE DARK BAND */}
      <section className="on-dark bg-[var(--color-night)] py-[var(--spacing-section)]">
        <div className="container-x grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Fade><span className="eyebrow">The Woodex difference</span></Fade>
          </div>
          <div className="md:col-span-8">
            <SplitReveal as="h2" className="h2 text-balance">
              {s.signature.title}
            </SplitReveal>
            <Fade delay={0.15}>
              <p className="lead mt-8">{s.signature.copy}</p>
            </Fade>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="container-x py-[var(--spacing-section)]">
        <div className="mb-14 max-w-3xl">
          <Fade><span className="eyebrow mb-6">What’s included</span></Fade>
          <SplitReveal as="h2" className="h2 text-balance">
            A documented scope — nothing left to “site decisions”
          </SplitReveal>
        </div>
        <div className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2">
          {s.includes.map((item, i) => (
            <Fade key={item.title} delay={(i % 2) * 0.1}>
              <div className="flex gap-6 border-t border-[var(--color-line)] pt-8">
                <span className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-brass)]">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="text-[1.35rem]">{item.title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed">{item.copy}</p>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="on-dark bg-[var(--color-walnut-deep)] py-20 text-[var(--color-cream)] md:py-28">
        <div className="container-x">
          <Fade><span className="eyebrow mb-12">What to expect</span></Fade>
          <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4">
            {s.outcomes.map((o, i) => (
              <Fade key={i} delay={i * 0.08}>
                <div className="border-l border-[var(--color-line-light)] pl-6">
                  <p className="stat-num !text-[var(--color-cream)] text-[clamp(2.2rem,1.4rem+3vw,4rem)]">{o.stat}</p>
                  <p className="mt-2 text-sm font-medium text-[var(--color-brass-soft)]">{o.label}</p>
                  <p className="mt-3 text-xs leading-relaxed text-[var(--color-cream)]/60">{o.copy}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="container-x py-[var(--spacing-section)]">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Fade><span className="eyebrow mb-6">Selected work</span></Fade>
            <SplitReveal as="h2" className="h3">Projects in this discipline</SplitReveal>
          </div>
          <Fade delay={0.1}>
            <Link href="/projects" className="textlink">View full portfolio <ArrowRight size={15} /></Link>
          </Fade>
        </div>
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {s.gallery.map((g, i) => (
            <ClipReveal
              key={i}
              delay={(i % 2) * 0.1}
              className={`img-zoom relative overflow-hidden rounded-[var(--radius-m)] ${
                i === 0 ? 'col-span-12 md:col-span-7' : i === 1 ? 'col-span-12 md:col-span-5' : 'col-span-6 md:col-span-3'
              }`}
            >
              <div className={`relative ${i === 0 ? 'aspect-[16/10]' : i === 1 ? 'aspect-[4/3] md:h-full' : 'aspect-square'}`}>
                <Image src={g.src} alt={g.caption} fill sizes="(max-width: 768px) 100vw, 45vw" className="object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-5">
                  <p className="text-xs text-[var(--color-cream)]/90">{g.caption}</p>
                </div>
              </div>
            </ClipReveal>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="on-dark bg-[var(--color-night)] py-[var(--spacing-section)]">
        <div className="container-x">
          <div className="mb-14 max-w-3xl">
            <Fade><span className="eyebrow mb-6">How it runs</span></Fade>
            <SplitReveal as="h2" className="h2 text-balance">The Woodex process, applied to {s.shortName.toLowerCase()}</SplitReveal>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
            {processSteps.map((p, i) => (
              <Fade key={p.step} delay={i * 0.08}>
                <div className="flex h-full flex-col gap-4 rounded-[var(--radius-m)] border border-[var(--color-line-light)] p-7 transition-colors duration-500 hover:border-[var(--color-brass)]/60 hover:bg-[var(--color-night-2)]">
                  <span className="text-sm text-[var(--color-brass-soft)]">{p.step}</span>
                  <h3 className="text-xl">{p.title}</h3>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--color-cream)]/45">{p.duration}</p>
                  <p className="mt-auto text-sm leading-relaxed text-[var(--color-cream)]/65">{p.copy}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x py-[var(--spacing-section)]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Fade>
              <span className="eyebrow mb-6">Questions</span>
              <h2 className="h3 mb-6">Straight answers before you ask us</h2>
              <p className="mb-8 text-[0.95rem]">
                Budget bands, timelines and logistics — the questions every client brings to the
                first meeting. Prefer to ask a human? The consultation is free.
              </p>
              <CTA variant="outline">Ask your question</CTA>
            </Fade>
          </div>
          <div className="lg:col-span-8">
            <FaqAccordion faqs={s.faqs} />
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="border-t border-[var(--color-line)] py-20 md:py-28">
        <div className="container-x">
          <Fade><span className="eyebrow mb-10">Related services</span></Fade>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {related.map((r) => (
              <Fade key={r.slug}>
                <Link
                  href={`/services/${r.slug}`}
                  className="group flex h-full flex-col justify-between rounded-[var(--radius-m)] border border-[var(--color-line)] p-8 transition-all duration-500 hover:border-[var(--color-espresso)] hover:shadow-[var(--shadow-card)]"
                >
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-fog)]">{r.number}</span>
                    <h3 className="mt-4 text-[1.5rem] transition-colors duration-500 group-hover:text-[var(--color-walnut)]">{r.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed">{r.tagline}</p>
                  </div>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium">
                    Explore <ArrowRight size={14} className="transition-transform duration-500 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Fade>
            ))}
          </div>

          {/* reassurance checklist */}
          <Fade className="mt-14">
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 rounded-[var(--radius-m)] bg-[var(--color-paper-2)] px-8 py-7">
              {['Free first site visit', 'Fixed, transparent BOQ', 'Photoreal 3D approval', 'Documented snag walkthrough', 'Written warranties'].map((x) => (
                <span key={x} className="flex items-center gap-2 text-sm font-medium">
                  <Check size={15} className="text-[var(--color-walnut)]" /> {x}
                </span>
              ))}
            </div>
          </Fade>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
