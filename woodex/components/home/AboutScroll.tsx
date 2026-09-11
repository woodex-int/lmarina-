'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SplitReveal, Fade, ClipReveal, Parallax, Counter } from '@/components/Motion';
import { stats } from '@/lib/content';

export default function AboutScroll() {
  return (
    <section className="container-x py-[var(--spacing-section)]">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
        {/* sticky visual */}
        <div className="relative lg:col-span-6">
          <div className="lg:sticky lg:top-28">
            <ClipReveal className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-l)] shadow-[var(--shadow-card)]">
              <Parallax speed={0.08}>
                <div className="relative h-[115%] w-full">
                  <Image
                    src="/images/about-studio.jpg"
                    alt="Woodex design studio team reviewing wood and marble material samples"
                    fill
                    sizes="(max-width: 1024px) 100vw, 46vw"
                    className="object-cover"
                  />
                </div>
              </Parallax>
            </ClipReveal>

            {/* floating scroll card */}
            <Fade delay={0.2}>
              <div className="absolute -bottom-8 -right-2 w-[min(78%,290px)] rounded-2xl bg-[var(--color-cream)] p-6 shadow-[var(--shadow-lift)] md:-right-8">
                <p className="idx-label mb-3">Strategic planning</p>
                <p className="font-[family-name:var(--font-display)] text-xl leading-snug">
                  Designed for how your space is used every single day
                </p>
                <Link href="/about" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-walnut)]">
                  Meet the studio <ArrowUpRight size={14} />
                </Link>
              </div>
            </Fade>
          </div>
        </div>

        {/* copy + stats */}
        <div className="flex flex-col justify-center lg:col-span-6 lg:pl-8">
          <Fade><span className="eyebrow mb-6">The studio</span></Fade>
          <SplitReveal as="h2" className="h2 mb-8 text-balance">
            A design studio that still behaves like a workshop
          </SplitReveal>
          <Fade>
            <p className="lead mb-5">
              Woodex began at a workbench in 2014, building solid-wood furniture for clients who
              kept asking one question: &ldquo;can you do the whole room?&rdquo; Today we design
              offices, homes and retail environments across Pakistan — and the workshop still
              sits at the centre of how we think.
            </p>
          </Fade>
          <Fade delay={0.1}>
            <p className="mb-10 max-w-xl">
              That origin explains the difference. We know what timber costs, how veneer is
              matched, how long joinery genuinely takes — so our budgets are honest, our details
              are buildable, and nothing on a drawing is left to &ldquo;site decision&rdquo;.
            </p>
          </Fade>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 border-t border-[var(--color-line)] pt-10">
            {stats.map((s, i) => (
              <Fade key={s.label} delay={i * 0.08}>
                <p className="stat-num">
                  <Counter to={parseInt(s.value, 10)} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm text-[var(--color-ink-soft)]">{s.label}</p>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
