'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SplitReveal, Fade, ClipReveal } from '@/components/Motion';

const CARDS = [
  {
    tone: 'card-fill',
    title: 'Workplaces designed to perform',
    copy: 'Headquarters, IT floors and coworking campuses planned around how your teams actually work — with acoustics, lighting and brand cues engineered in.',
    href: '/services/office-interior-design',
    cta: 'Discover office interiors',
    image: '/images/service-office.jpg',
    alt: 'Corporate office interior with wood slat ceiling',
  },
  {
    tone: 'card-white',
    title: 'Homes built around real life',
    copy: 'Apartments to kanal residences: space planning, kitchens, wardrobes and ceilings detailed to the joint, executed by one accountable studio.',
    href: '/services/residential-interior-design',
    cta: 'Discover residential design',
    image: '/images/service-residential.jpg',
    alt: 'Warm contemporary living room with teak paneling',
  },
  {
    tone: 'card-navy on-dark',
    title: 'Retail that sells from the doorway',
    copy: 'Boutiques, showrooms and hospitality fit-outs planned around the customer loop — sightlines, power walls and lighting scenes that convert.',
    href: '/services/retail-showroom-interior-design',
    cta: 'Discover retail design',
    image: '/images/service-retail.jpg',
    alt: 'Timber and brass boutique retail interior',
  },
];

export default function ServicesSection() {
  return (
    <section className="band-beige py-[var(--spacing-section)]">
      <div className="container-x">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <Fade><span className="eyebrow center mb-6">What we do</span></Fade>
          <SplitReveal as="h2" className="h2 text-balance">
            Design solutions for offices, homes and everything between
          </SplitReveal>
          <Fade delay={0.1}>
            <p className="mt-6 text-[0.95rem] leading-relaxed">
              Thoughtful design meets precise execution. Every engagement balances clarity,
              material honesty and innovation — to create spaces that feel modern and endure.
            </p>
          </Fade>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {CARDS.map((c, i) => (
            <Fade key={c.title} delay={i * 0.1}>
              <Link href={c.href} className={`group flex h-full flex-col rounded-[var(--radius-l)] p-8 transition-all duration-500 ${c.tone} hover:-translate-y-1 hover:shadow-[var(--shadow-card)]`} data-cursor-label="View">
                <h3 className="font-[family-name:var(--font-display)] text-[1.35rem] leading-snug">{c.title}</h3>
                <p className={`mt-4 text-[0.92rem] leading-relaxed ${c.tone.includes('navy') ? 'text-[rgba(252,242,232,0.75)]' : ''}`}>{c.copy}</p>
                <span className={`mt-6 inline-flex items-center gap-2 border-b border-current/40 pb-1 text-sm font-medium ${c.tone.includes('navy') ? 'text-[var(--color-cream)]' : 'text-[var(--color-espresso)]'}`}>
                  {c.cta}
                  <ArrowUpRight size={14} className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
                <div className="img-round relative mt-8 aspect-[4/3] overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 31vw"
                    className="object-cover transition-transform duration-[1.4s] group-hover:scale-[1.05]"
                    style={{ transitionTimingFunction: 'var(--ease-lux)' }}
                  />
                </div>
              </Link>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
