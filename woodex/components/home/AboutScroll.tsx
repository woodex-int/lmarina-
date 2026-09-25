'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SplitReveal, Fade, ClipReveal } from '@/components/Motion';

const ROWS = [
  { label: 'Residential design solutions', href: '/services/residential-interior-design' },
  { label: 'Turnkey project management', href: '/services/turnkey-design-build' },
  { label: 'Furniture & joinery experts', href: '/services/custom-solid-wood-furniture' },
];

export default function AboutScroll() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      {/* left navy panel with image card */}
      <div className="band-navy on-dark relative flex min-h-[420px] items-center justify-center px-[var(--spacing-gutter)] py-20 lg:min-h-[640px]">
        <ClipReveal className="img-zoom w-full max-w-[460px]">
          <div className="img-round-lg relative aspect-[4/5] overflow-hidden shadow-[0_60px_140px_-50px_rgba(0,0,0,0.9)]">
            <Image
              src="/images/service-retail.jpg"
              alt="Retail and commercial interiors crafted by Woodex"
              fill
              sizes="(max-width: 1024px) 100vw, 34vw"
              className="object-cover"
            />
          </div>
        </ClipReveal>
        <span className="idx-label absolute bottom-8 left-[var(--spacing-gutter)] !text-[rgba(252,242,232,0.55)]">01 — Commercial</span>
      </div>

      {/* right light panel */}
      <div className="band-gray relative overflow-hidden px-[var(--spacing-gutter)] py-20 lg:py-24">
        <div className="mx-auto flex h-full max-w-xl flex-col justify-center">
          <Fade><span className="eyebrow mb-6">Commercial & residential</span></Fade>
          <SplitReveal as="h2" className="h2 text-balance">
            Commercial architecture and space solutions for Lahore
          </SplitReveal>
          <Fade delay={0.1}>
            <p className="mt-6 max-w-lg text-[0.95rem] leading-relaxed">
              Creating meaningful environments through modern design, precision detailing and a
              refined material vision — from mall-road boutiques to DHA living rooms.
            </p>
            <Link href="/services" className="btn mt-8">
              <span className="btn-label">Explore our services</span>
              <span className="btn-arrow"><ArrowUpRight size={14} /></span>
            </Link>
          </Fade>
          <div className="mt-12">
            {ROWS.map((r, i) => (
              <Fade key={r.label} delay={0.06 * i}>
                <Link href={r.href} className="link-row">
                  <span>{r.label}</span>
                  <ArrowUpRight size={16} />
                </Link>
              </Fade>
            ))}
          </div>
        </div>
        {/* peek image */}
        <Fade delay={0.2}>
          <div className="img-round img-zoom absolute -bottom-0 right-8 hidden w-[230px] overflow-hidden shadow-[var(--shadow-lift)] lg:block">
            <div className="relative aspect-[4/3]">
              <Image src="/images/service-residential.jpg" alt="Residential project corner" fill sizes="230px" className="object-cover" />
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
