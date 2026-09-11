import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import { SplitReveal, Fade } from '@/components/Motion';
import { services } from '@/lib/services';
import JsonLd from '@/components/JsonLd';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Interior Design Services in Lahore | Offices, Homes, Retail & Furniture',
  description:
    'Explore Woodex Interiors’ full-service suite: office & residential interior design, retail showrooms, custom solid-wood furniture, 3D visualization and turnkey design & build across Pakistan.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${site.url}/services` },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHero
        eyebrow="The full-suite studio"
        title="One studio for the entire life of a space"
        copy="From workplace strategy and photoreal 3D walkthroughs to civil work, fit-out and furniture built in our own workshop — six services that combine into a single, accountable contract."
      >
        <div className="flex flex-wrap gap-4">
          <Link href="/contact" className="btn">
            <span className="btn-label">Book free consultation</span>
            <span className="btn-arrow"><ArrowUpRight size={14} /></span>
          </Link>
          <Link href="/projects" className="btn btn-outline">
            <span className="btn-label">See completed work</span>
            <span className="btn-arrow"><ArrowUpRight size={14} /></span>
          </Link>
        </div>
      </PageHero>

      <section className="container-x py-[var(--spacing-section)]">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <Fade><span className="eyebrow mb-6">Six services, one standard</span></Fade>
            <SplitReveal as="h2" className="h2 text-balance">
              The complete chain, without the gaps between vendors
            </SplitReveal>
          </div>
          <Fade className="md:col-span-4" delay={0.1}>
            <p>
              Most project failures happen in the handovers — designer to contractor, contractor
              to furniture maker. Woodex owns every handoff, so nothing lands in the gap.
            </p>
          </Fade>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <Fade key={s.slug} delay={(i % 2) * 0.1}>
              <Link
                href={`/services/${s.slug}`}
                className={`group relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-[var(--radius-l)] p-8 md:p-10 ${i % 3 === 0 ? 'md:col-span-2' : ''}`}
                data-cursor-label="Open"
              >
                <Image
                  src={s.heroImage}
                  alt={s.title}
                  fill
                  sizes={i % 3 === 0 ? '(max-width: 768px) 100vw, 100vw' : '(max-width: 768px) 100vw, 50vw'}
                  className="object-cover transition-transform duration-[1.4s] ease-[var(--ease-lux)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />
                <div className="relative text-[var(--color-cream)]">
                  <span className="text-xs uppercase tracking-[0.22em] text-[var(--color-brass-soft)]">{s.number} — Service</span>
                  <h3 className="mt-3 font-[family-name:var(--font-display)] text-[clamp(1.7rem,3vw,2.6rem)] leading-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-lg text-sm text-[var(--color-cream)]/75">{s.tagline}</p>
                  <span className="mt-6 inline-flex items-center gap-3 text-sm font-medium">
                    Explore service
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--color-cream)] text-[var(--color-espresso)] transition-transform duration-500 group-hover:rotate-45">
                      <ArrowUpRight size={16} />
                    </span>
                  </span>
                </div>
              </Link>
            </Fade>
          ))}
        </div>
      </section>

      <CtaBand
        title="Not sure which service your space needs?"
        copy="Tell us about the property and the deadline. The first site visit, test-fit and budget band are free, with no obligation to continue."
      />
    </>
  );
}
