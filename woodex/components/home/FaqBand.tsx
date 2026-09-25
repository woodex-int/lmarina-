'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Minus, Plus } from 'lucide-react';
import { useState } from 'react';
import { SplitReveal, Fade, ClipReveal } from '@/components/Motion';
import { homeFaqs } from '@/lib/content';

export default function FaqBand() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="band-navy on-dark py-[var(--spacing-section)]">
      <div className="container-x grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
        {/* left: image + headline */}
        <div className="lg:col-span-5">
          <ClipReveal className="img-zoom">
            <div className="img-round relative aspect-[5/4] overflow-hidden">
              <Image
                src="/images/about-studio.jpg"
                alt="The Woodex studio reviewing design documentation"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </ClipReveal>
          <SplitReveal as="h2" className="h2 mt-9 text-balance !text-[var(--color-cream)]">
            Understanding our approach to design-led delivery
          </SplitReveal>
          <Fade delay={0.1}>
            <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed">
              We partner with visionary clients to craft spaces that are as functional as they are
              beautiful — built to stand the test of time. The honest answers start here.
            </p>
            <Link href="/contact" className="btn btn-light mt-8">
              <span className="btn-label">Talk to the studio</span>
              <span className="btn-arrow"><ArrowUpRight size={14} /></span>
            </Link>
          </Fade>
        </div>

        {/* right: boxed accordion (reference style) */}
        <div className="lg:col-span-6 lg:col-start-7">
          <div className="flex flex-col gap-3.5">
            {homeFaqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <Fade key={i} delay={i * 0.04}>
                  <div className={`rounded-[20px] border px-6 py-1 transition-colors duration-500 ${isOpen ? 'border-[rgba(252,242,232,0.5)] bg-[rgba(252,242,232,0.06)]' : 'border-[rgba(252,242,232,0.18)] hover:border-[rgba(252,242,232,0.4)]'}`}>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-6 py-5 text-left"
                    >
                      <span className="font-[family-name:var(--font-display)] text-[1.05rem] leading-snug lg:text-[1.18rem]">{f.q}</span>
                      <span className="grid h-8 w-8 shrink-0 place-items-center text-[var(--color-cream)]">
                        {isOpen ? <Minus size={17} /> : <Plus size={17} />}
                      </span>
                    </button>
                    <div className={`grid transition-[grid-template-rows] duration-500 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`} style={{ transitionTimingFunction: 'var(--ease-lux)' }}>
                      <div className="overflow-hidden">
                        <p className="pb-6 pr-10 text-[0.92rem] leading-relaxed text-[rgba(252,242,232,0.75)]">{f.a}</p>
                      </div>
                    </div>
                  </div>
                </Fade>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
