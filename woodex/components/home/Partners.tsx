'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SplitReveal, Fade } from '@/components/Motion';
import { clients, clientNotes } from '@/lib/content';

export default function Partners() {
  const [active, setActive] = useState(0);
  const client = clients[active];
  const note = clientNotes[client];

  return (
    <section className="band-navy on-dark py-[var(--spacing-section)]">
      <div className="container-x">
        <div className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Fade><span className="eyebrow mb-6">Trusted partners built together</span></Fade>
            <SplitReveal as="h2" className="h2 text-balance !text-[var(--color-cream)]">
              Driving success through strong partnerships
            </SplitReveal>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <Fade delay={0.12}>
              <p>
                Developers, family businesses and technology teams bring us their second and third
                projects — and their partners. Hover a name to see what we built for them.
              </p>
            </Fade>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          {/* logo tile grid */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:col-span-7">
            {clients.map((c, i) => (
              <Fade key={c} delay={(i % 3) * 0.05}>
                <button
                  className={`logo-tile w-full text-center text-[0.98rem] md:text-[1.05rem] ${i >= 6 ? 'hidden sm:grid lg:grid' : ''}`}
                  data-active={active === i}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                >
                  {c}
                </button>
              </Fade>
            ))}
          </div>

          {/* detail panel */}
          <div className="lg:col-span-5">
            <div key={client} className="flex h-full flex-col justify-between gap-10">
              <p className="text-[0.95rem] leading-relaxed text-[rgba(252,242,232,0.72)]">{note?.note}</p>
              <div className="border-t border-[rgba(252,242,232,0.2)] pt-7">
                <p className="font-[family-name:var(--font-display)] text-[1.6rem] leading-tight text-[var(--color-cream)]">
                  {client.toUpperCase()}
                </p>
                <p className="mt-2 text-[0.8rem] uppercase tracking-[0.2em] text-[rgba(252,242,232,0.55)]">{note?.field}</p>
                <p className="idx-label mt-6">
                  {String(active + 1).padStart(2, '0')} / {String(clients.length).padStart(2, '0')} — selected partner
                </p>
              </div>
            </div>
            <Link href="/projects" className="btn btn-light mt-10">
              <span className="btn-label">See the work</span>
              <span className="btn-arrow"><ArrowUpRight size={14} /></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
