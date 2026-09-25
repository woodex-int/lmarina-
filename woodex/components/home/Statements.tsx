'use client';

import Image from 'next/image';
import { Boxes, Presentation } from 'lucide-react';
import { SplitReveal, Fade, ClipReveal, Counter } from '@/components/Motion';

export default function Statements() {
  return (
    <section className="band-white py-[var(--spacing-section)]">
      <div className="container-x">
        <div className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-12 md:items-end">
          <Fade className="md:col-span-3"><span className="eyebrow">About the studio</span></Fade>
          <div className="md:col-span-9">
            <SplitReveal as="h2" className="h2 max-w-3xl text-balance">
              Designing spaces with purpose and precision
            </SplitReveal>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {/* tall image */}
          <div className="md:row-span-2">
            <ClipReveal className="img-zoom h-full min-h-[340px]">
              <div className="img-round relative h-full min-h-[340px]">
                <Image
                  src="/images/hero-office.jpg"
                  alt="Walnut-panelled office designed and built by Woodex Interiors"
                  fill
                  sizes="(max-width: 768px) 100vw, 32vw"
                  className="object-cover"
                />
              </div>
            </ClipReveal>
          </div>

          {/* stat */}
          <Fade>
            <div className="card-fill flex h-full flex-col justify-between gap-8 p-8 md:flex-row md:items-center">
              <p className="stat-num"><Counter to={94} suffix="%" /></p>
              <p className="max-w-[14rem] font-[family-name:var(--font-display)] text-[1.05rem] leading-snug">
                Clients who return or refer us within three years
              </p>
            </div>
          </Fade>

          {/* avatars */}
          <Fade delay={0.08}>
            <div className="card-fill flex h-full items-center gap-5 p-8">
              <div className="flex -space-x-3">
                {['AR', 'MS', 'FK'].map((t) => (
                  <span key={t} className="grid h-10 w-10 place-items-center rounded-full border-2 border-[var(--color-cream)] bg-[var(--color-brass)] text-[11px] font-semibold text-[var(--color-cream)]">
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-[0.9rem] leading-snug">
                A workshop-born studio of 24 designers, architects and joiners.
              </p>
            </div>
          </Fade>

          {/* feature card */}
          <Fade delay={0.12}>
            <div className="card-fill flex h-full flex-col gap-5 p-8">
              <span className="icon-sq bg-[var(--color-espresso)] text-[var(--color-cream)]"><Boxes size={22} strokeWidth={1.5} /></span>
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-[1.2rem] leading-snug">Solid-wood furniture</h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed">
                  Walnut, sheesham and oak joinery built in our own workshop — documented to the joint.
                </p>
              </div>
            </div>
          </Fade>

          {/* navy card */}
          <Fade delay={0.16}>
            <div className="card-navy on-dark flex h-full flex-col gap-5 p-8">
              <span className="icon-sq bg-[var(--color-cream)] text-[var(--color-espresso)]"><Presentation size={22} strokeWidth={1.5} /></span>
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-[1.2rem] leading-snug !text-[var(--color-cream)]">Turnkey delivery</h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-[rgba(252,242,232,0.75)]">
                  One contract, one team, one handover date — civil to styling, on a dated Gantt.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
