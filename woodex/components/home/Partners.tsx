'use client';

import Marquee from '@/components/Marquee';
import { Fade } from '@/components/Motion';
import { clients } from '@/lib/content';

function Wordmark({ name }: { name: string }) {
  return (
    <span className="mx-8 flex items-center gap-8 whitespace-nowrap font-[family-name:var(--font-display)] text-xl tracking-tight text-[var(--color-ink-soft)]/70 md:mx-12 md:text-2xl">
      {name}
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brass)]/60" />
    </span>
  );
}

export default function Partners() {
  return (
    <section className="container-x py-20 md:py-28">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
        <div className="md:col-span-5">
          <Fade>
            <span className="eyebrow mb-5">Trusted partners built together</span>
          </Fade>
          <Fade delay={0.08}>
            <h2 className="h3">Driving confidence through long-term partnerships</h2>
          </Fade>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <Fade delay={0.15}>
            <p>
              Developers, family businesses and technology teams bring us their second and third
              projects — and their partners. Below, a selection of the names whose spaces we have
              shaped across offices, retail and residential work since 2014.
            </p>
          </Fade>
        </div>
      </div>

      <div className="mt-14 border-y border-[var(--color-line)] py-8">
        <Marquee speed={36} reverse>
          {clients.map((c) => (
            <Wordmark key={c} name={c} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
