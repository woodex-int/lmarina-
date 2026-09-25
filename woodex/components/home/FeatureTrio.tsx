'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SplitReveal, Fade, ClipReveal } from '@/components/Motion';

const ROWS = [
  { label: 'Residential design solutions', href: '/services/residential-interior-design' },
  { label: 'Office & workplace strategy', href: '/services/office-interior-design' },
  { label: 'Master planning & turnkey build', href: '/services/turnkey-design-build' },
];

export default function FeatureTrio() {
  return (
    <section className="band-gray py-[var(--spacing-section)]">
      <div className="container-x grid grid-cols-12 gap-5">
        {/* big image */}
        <div className="col-span-12 lg:col-span-5">
          <ClipReveal className="img-zoom h-full min-h-[340px]">
            <div className="img-round-lg relative h-full min-h-[340px]">
              <Image
                src="/images/gallery-lobby.jpg"
                alt="Double-height hotel lobby with backlit stone and oak slat ceiling"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </ClipReveal>
        </div>

        {/* heading card */}
        <div className="col-span-12 sm:col-span-8 lg:col-span-4">
          <div className="card-white h-full p-8">
            <SplitReveal as="h2" className="h3 text-balance">
              Creating timeless built environments
            </SplitReveal>
          </div>
        </div>

        {/* CTA card */}
        <div className="col-span-12 sm:col-span-4 lg:col-span-3">
          <div className="card-white flex h-full items-start justify-end p-8">
            <Link href="/services" className="btn">
              <span className="btn-label">Explore our services</span>
              <span className="btn-arrow"><ArrowUpRight size={14} /></span>
            </Link>
          </div>
        </div>

        {/* bottom bento: copy + links + image */}
        <div className="col-span-12 lg:col-span-7">
          <div className="card-white flex h-full flex-col justify-between gap-8 p-8 lg:p-10">
            <p className="max-w-2xl text-[0.95rem] leading-relaxed">
              Our interiors reflect a balance of creativity and precision — spaces that respond to
              context, elevate daily life, and stand as lasting symbols of craft. Every Woodex
              environment is designed, detailed and delivered by one accountable studio.
            </p>
            <div>
              {ROWS.map((r) => (
                <Link key={r.label} href={r.href} className="link-row">
                  <span>{r.label}</span>
                  <ArrowUpRight size={16} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* side image */}
        <div className="col-span-12 sm:col-span-5 lg:col-span-5">
          <div className="card-white h-full p-6">
            <div className="img-round img-zoom relative aspect-[4/3]">
              <Image
                src="/images/service-3d.jpg"
                alt="3D walkthrough render and material samples on the studio desk"
                fill
                sizes="(max-width: 1024px) 90vw, 38vw"
                className="object-cover"
              />
            </div>
            <p className="idx-label mt-4">Approved on screen — then built</p>
          </div>
        </div>
      </div>
    </section>
  );
}
