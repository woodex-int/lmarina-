'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, ArrowLeft, ArrowUpRight } from 'lucide-react';

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

const ROTATING = ['Inspired spaces.', 'Lasting design.', 'Life, enhanced.'];

const SLIDES = [
  { img: '/images/service-3d.jpg', title: 'Precision in every model', copy: 'Crafted with detail, built to inspire.' },
  { img: '/images/gallery-boardroom.jpg', title: 'Rendered, then built', copy: 'The walkthrough is the contract.' },
  { img: '/images/service-turnkey.jpg', title: 'Materials you can trust', copy: 'Real walnut, real light, real rooms.' },
];

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLSpanElement>(null);
  const [w, setW] = useState(0);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setW((i) => (i + 1) % ROTATING.length), 3200);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const el = wordRef.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    gsap.fromTo(el, { yPercent: 60, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 0.9, ease: 'power4.out' });
  }, [w]);

  // entrance + scroll choreography
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ paused: true });
      intro
        .fromTo('.hero-eyebrow', { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power3.out' })
        .fromTo('.hero-line', { yPercent: 120, rotate: 2.5 }, { yPercent: 0, rotate: 0, duration: 1.25, stagger: 0.13, ease: 'power4.out' }, 0.1)
        .fromTo('.hero-word', { yPercent: 60, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 1.1, ease: 'power4.out' }, 0.35)
        .fromTo('.hero-copy > *', { autoAlpha: 0, y: 26 }, { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out' }, 0.55)
        .fromTo('.hero-img', { scale: 1.35 }, { scale: 1, duration: 2.4, ease: 'power3.out' }, 0.2)
        .fromTo('.hero-ghost', { autoAlpha: 0, yPercent: 22 }, { autoAlpha: 1, yPercent: 0, duration: 1.6, ease: 'power4.out' }, 0.5)
        .fromTo('.hero-card', { autoAlpha: 0, y: 40, rotateX: -8 }, { autoAlpha: 1, y: 0, rotateX: 0, duration: 1.1, ease: 'power4.out', transformPerspective: 900 }, 0.85)
        .fromTo('.hero-chip', { autoAlpha: 0, y: 26 }, { autoAlpha: 1, y: 0, duration: 0.9, ease: 'power3.out' }, 1.05)
        .fromTo('.hero-scroll', { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 }, 1.2);

      const start = () => intro.play(0);
      window.addEventListener('preloader:done', start, { once: true });
      const fallback = setTimeout(start, 2600);

      if (!reduce) {
        gsap.to('.hero-img', {
          yPercent: 12, scale: 1.12, ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
        });
        gsap.to('.hero-headline', {
          yPercent: -16, autoAlpha: 0.15, ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
        });
        gsap.to('.hero-ghost', {
          yPercent: -30, ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
        });
        gsap.to('.hero-card', {
          y: -46, ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
        });
      } else {
        intro.progress(1);
      }
      return () => clearTimeout(fallback);
    }, root);
    return () => ctx.revert();
  }, []);

  const move = (dir: number) => setSlide((s) => (s + dir + SLIDES.length) % SLIDES.length);

  return (
    <section ref={root} className="on-dark relative flex min-h-[100svh] flex-col overflow-hidden bg-[var(--color-espresso)]" data-cursor="">
      {/* backdrop image + dusk wash + hairlines */}
      <div aria-hidden className="absolute inset-0">
        <Image
          src="/images/hero-office.jpg"
          alt="Warm walnut corporate office interior designed by Woodex Interiors in Lahore"
          fill
          priority
          sizes="100vw"
          className="hero-img object-cover"
        />
        <div className="hero-dusk absolute inset-0" />
      </div>
      <div aria-hidden className="hairlines"><span className="hair-mid" /></div>

      {/* ghost gradient word */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-[-2%] z-[1] overflow-hidden text-center">
        <p className="hero-ghost ghost-word translate-y-[14%] text-[clamp(5rem,15.5vw,16rem)] leading-[0.86]">WOOD</p>
      </div>

      <div className="container-x relative z-10 flex flex-1 flex-col justify-end pt-36 md:pt-44">
        <div className="grid flex-1 grid-cols-1 items-end gap-10 pb-8 lg:grid-cols-12">
          {/* headline block */}
          <div className="hero-headline lg:col-span-8">
            <span className="hero-eyebrow mb-7 inline-block text-[11px] font-medium uppercase tracking-[0.26em] text-[var(--color-cream)]/85" style={{ opacity: 0 }} aria-live="polite">
              <span key={w} ref={wordRef} className="inline-block">{ROTATING[w]}</span>
            </span>
            <h1 className="font-[family-name:var(--font-display)] font-medium tracking-[-0.045em] text-[clamp(2.9rem,1.1rem+7.4vw,7.6rem)] leading-[1.02]">
              <span className="block overflow-hidden pb-[0.06em]"><span className="hero-line block text-[var(--color-cream)]">Timeless spaces</span></span>
              <span className="block overflow-hidden pb-[0.06em]"><span className="hero-line block text-[var(--color-cream)]">with lasting impact</span></span>
            </h1>

            <div className="hero-copy mt-10 grid grid-cols-1 items-end gap-8 md:grid-cols-[auto_1fr]">
              <div style={{ opacity: 0 }}>
                <Link href="/contact" className="btn btn-light" data-cursor-label="Start">
                  <span className="btn-label">Get started</span>
                  <span className="btn-arrow"><ArrowUpRight size={14} /></span>
                </Link>
              </div>
              <p className="max-w-xl text-[0.98rem] leading-[1.65] text-[rgba(252,242,232,0.78)] md:justify-self-end md:text-right" style={{ opacity: 0 }}>
                We design and build offices, homes and retail spaces that reflect identity and
                enhance daily life — solid-wood furniture, complete documentation, and a turnkey
                team that hands over on the date it promised.
              </p>
            </div>
          </div>

          {/* floating glass card — 3D studio widget */}
          <div className="hero-card relative z-20 lg:col-span-4 lg:col-start-9" style={{ opacity: 0 }}>
            <Link href="/3d-studio" className="glass block overflow-hidden p-5" data-cursor-label="Open">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-[family-name:var(--font-display)] text-[1.05rem] leading-snug text-[var(--color-cream)]">{SLIDES[slide].title}</p>
                  <p className="mt-1.5 text-[0.82rem] text-[rgba(252,242,232,0.72)]">{SLIDES[slide].copy}</p>
                </div>
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--color-cream)] text-[var(--color-espresso)]">
                  <ArrowUpRight size={15} />
                </span>
              </div>
              <div className="img-round relative mt-5 aspect-[16/9] overflow-hidden">
                {SLIDES.map((s, i) => (
                  <Image
                    key={s.img + i}
                    src={s.img}
                    alt={`${s.title} — 3D visualization by the Woodex studio`}
                    fill
                    sizes="(max-width: 1024px) 88vw, 26vw"
                    className="object-cover transition-all duration-700"
                    style={{ opacity: slide === i ? 1 : 0, transform: slide === i ? 'scale(1)' : 'scale(1.06)', transitionTimingFunction: 'var(--ease-lux)' }}
                  />
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  {SLIDES.map((_, i) => (
                    <button
                      key={i}
                      onClick={(e) => { e.preventDefault(); setSlide(i); }}
                      aria-label={`Show render ${i + 1}`}
                      className="h-1.5 rounded-full transition-all duration-500"
                      style={{ width: slide === i ? 22 : 8, background: slide === i ? 'var(--color-cream)' : 'rgba(252,242,232,0.35)' }}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button onClick={(e) => { e.preventDefault(); move(-1); }} aria-label="Previous render" className="grid h-8 w-8 place-items-center rounded-full border border-[rgba(252,242,232,0.3)] transition-colors hover:bg-[rgba(252,242,232,0.14)]"><ArrowLeft size={13} /></button>
                  <button onClick={(e) => { e.preventDefault(); move(1); }} aria-label="Next render" className="grid h-8 w-8 place-items-center rounded-full border border-[rgba(252,242,232,0.3)] transition-colors hover:bg-[rgba(252,242,232,0.14)]"><ArrowUpRight size={13} className="rotate-45" /></button>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* bottom rail */}
        <div className="hero-scroll relative z-10 flex items-center justify-between gap-4 border-t border-[rgba(252,242,232,0.16)] py-5" style={{ opacity: 0 }}>
          <Link href="/contact" className="hero-chip glass-chip text-[0.78rem] text-[var(--color-cream)]" style={{ opacity: 0 }}>
            <span className="grid h-7 w-7 place-items-center rounded-full bg-[var(--color-cream)] text-[var(--color-espresso)] text-[10px] font-semibold">12</span>
            <span className="leading-tight">
              <span className="block font-medium">Free site visit &amp; test-fit</span>
              <span className="block text-[rgba(252,242,232,0.6)]">Lahore · Islamabad · Karachi</span>
            </span>
          </Link>
          <span className="hidden items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-[rgba(252,242,232,0.6)] md:flex">
            Design · Build · Furnish <ArrowDown size={13} className="animate-bounce" />
          </span>
        </div>
      </div>
    </section>
  );
}
