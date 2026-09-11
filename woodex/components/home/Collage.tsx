'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SplitReveal, Fade, ClipReveal, Parallax } from '@/components/Motion';

export default function Collage() {
  return (
    <section className="container-x py-[var(--spacing-section)]">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          <Fade><span className="eyebrow mb-6">From drawing to handover</span></Fade>
          <SplitReveal as="h2" className="h2 text-balance">
            Every detail documented before a single wall moves
          </SplitReveal>
        </div>
        <div className="md:col-span-4 md:col-start-9">
          <Fade delay={0.1}>
            <p className="mb-6">
              Concept boards, technical drawing sets, BOQs and 3D walkthroughs — the complete
              design language agreed, priced and approved up front. What you walk through on
              screen is what gets built.
            </p>
            <Link href="/services/3d-visualization" className="textlink">
              See the visualization process <ArrowUpRight size={15} />
            </Link>
          </Fade>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-12 gap-4 md:gap-6">
        <ClipReveal className="img-zoom col-span-12 md:col-span-6 md:row-span-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-m)] md:aspect-[4/5] md:h-full">
            <Image
              src="/images/gallery-lobby.jpg"
              alt="Completed double-height reception with oak slats and backlit onyx"
              fill
              sizes="(max-width: 768px) 100vw, 48vw"
              className="object-cover"
            />
          </div>
        </ClipReveal>

        <ClipReveal delay={0.1} className="img-zoom col-span-12 md:col-span-6">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-m)] md:h-full">
            <Parallax speed={0.06}>
              <div className="relative h-[120%] w-full">
                <Image
                  src="/images/gallery-boardroom.jpg"
                  alt="Walnut boardroom designed by Woodex"
                  fill
                  sizes="(max-width: 768px) 100vw, 48vw"
                  className="object-cover"
                />
              </div>
            </Parallax>
          </div>
        </ClipReveal>

        <ClipReveal delay={0.18} className="img-zoom col-span-6 md:col-span-3">
          <div className="relative aspect-square overflow-hidden rounded-[var(--radius-m)]">
            <Image
              src="/images/service-3d.jpg"
              alt="3D render and material samples on a studio desk"
              fill
              sizes="(max-width: 768px) 50vw, 24vw"
              className="object-cover"
            />
          </div>
        </ClipReveal>

        <ClipReveal delay={0.24} className="img-zoom col-span-6 md:col-span-3">
          <div className="relative aspect-square overflow-hidden rounded-[var(--radius-m)]">
            <Image
              src="/images/service-furniture.jpg"
              alt="Walnut joinery detail from the Woodex workshop"
              fill
              sizes="(max-width: 768px) 50vw, 24vw"
              className="object-cover"
            />
          </div>
        </ClipReveal>
      </div>
    </section>
  );
}
