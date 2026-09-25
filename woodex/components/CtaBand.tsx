'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowUpRight, Pause, Play } from 'lucide-react';
import { SplitReveal, Fade } from './Motion';

export default function CtaBand({
  title = 'Have a space in mind? Make it unmistakably yours.',
  copy = 'First site visit, strategy call and test-fit — complimentary, with an honest budget band before any design fee is discussed.',
}: {
  title?: string;
  copy?: string;
}) {
  const [playing, setPlaying] = useState(true);

  return (
    <section className="band-beige py-[var(--spacing-section)]">
      <div className="container-x">
        {/* media chip */}
        <Fade>
          <div className="img-round relative mb-6 aspect-[21/9] max-h-[420px] w-full overflow-hidden">
            <Image
              src="/images/gallery-lobby.jpg"
              alt="Walk through a completed Woodex lobby — studio film"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setPlaying((p) => !p)}
                aria-label={playing ? 'Pause studio film' : 'Play studio film'}
                className="grid h-16 w-16 place-items-center rounded-full bg-[rgba(252,242,232,0.22)] text-[var(--color-cream)] backdrop-blur-md transition-all duration-500 hover:scale-105 hover:bg-[var(--color-cream)] hover:text-[var(--color-espresso)]"
              >
                {playing ? <Pause size={20} fill="currentColor" strokeWidth={0} /> : <Play size={20} fill="currentColor" strokeWidth={0} />}
              </button>
            </div>
            <p className="glass-chip absolute bottom-5 left-5 px-4 py-2 text-[0.78rem] text-[var(--color-cream)]">
              Studio film — 90 seconds inside Woodex
            </p>
          </div>
        </Fade>

        {/* navy banner */}
        <Fade delay={0.1}>
          <div className="band-navy on-dark relative overflow-hidden rounded-[var(--radius-l)] px-8 py-12 md:px-12 md:py-14">
            <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(125,147,184,0.35),transparent_65%)]" />
            <div className="relative flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <span className="eyebrow mb-5">Start a project</span>
                <SplitReveal as="h2" className="h3 text-balance !text-[var(--color-cream)] md:text-[clamp(1.5rem,1rem+1.6vw,2.3rem)]">
                  {title}
                </SplitReveal>
                <p className="mt-5 max-w-lg text-[0.92rem] leading-relaxed">{copy}</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn btn-light" data-cursor-label="Start">
                  <span className="btn-label">Get in touch</span>
                  <span className="btn-arrow"><ArrowUpRight size={14} /></span>
                </Link>
                <Link href="/pricing" className="btn btn-outline-light">
                  <span className="btn-label">See packages</span>
                  <span className="btn-arrow"><ArrowUpRight size={14} /></span>
                </Link>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
