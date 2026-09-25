'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { processSteps } from '@/lib/content';
import { SplitReveal, Fade } from '@/components/Motion';
import CTA from '@/components/CTA';

export default function Process() {
  return (
    <section className="band-gray py-[var(--spacing-section)]">
      <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
        {/* sticky intro */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Fade><span className="eyebrow mb-6">How a Woodex project runs</span></Fade>
            <SplitReveal as="h2" className="h2 text-balance">
              Organized, documented, delivered on a date
            </SplitReveal>
            <Fade delay={0.12}>
              <div className="img-round img-zoom relative mt-9 aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/service-turnkey.jpg"
                  alt="Woodex site team coordinating a turnkey office fit-out"
                  fill
                  sizes="(max-width: 1024px) 100vw, 32vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-6 text-[0.92rem] leading-relaxed">
                We blend strategic foresight and meticulous coordination into structured project
                roadmaps that align stakeholders, streamline timelines, and drive every initiative
                toward measurable outcomes — with confidence.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <CTA variant="outline">Start with step one</CTA>
                <Link href="/projects" className="btn">
                  <span className="btn-label">Our projects</span>
                  <span className="btn-arrow"><ArrowUpRight size={14} /></span>
                </Link>
              </div>
            </Fade>
          </div>
        </div>

        {/* list rows */}
        <div className="lg:col-span-7 lg:col-start-5">
          <div className="overflow-hidden rounded-[var(--radius-l)]">
            {processSteps.map((s, i) => (
              <Fade key={s.step} delay={i * 0.05}>
                <div className="num-row group grid grid-cols-[auto_1fr_auto] items-center gap-5 px-6 py-7 lg:px-8">
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-[var(--color-line)] transition-all duration-500 group-hover:border-transparent group-hover:bg-[var(--color-brass)] group-hover:text-[var(--color-cream)]">
                    <ArrowLeft size={15} className="transition-transform duration-500 group-hover:rotate-[24deg]" />
                  </span>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-[1.3rem] leading-snug lg:text-[1.55rem]">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 max-w-xl text-[0.85rem] leading-relaxed text-[var(--color-fog)]">{s.copy}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-[family-name:var(--font-display)] text-[1.3rem] font-medium lg:text-[1.6rem]">{s.step}</span>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[var(--color-walnut)]">{s.duration}</p>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
