'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, ArrowUpRight, MapPin, Star } from 'lucide-react';
import CTA from '@/components/CTA';

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

const ROTATING = ['Considered spaces.', 'Lasting design.', 'Life, enhanced.'];

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLSpanElement>(null);
  const [index, setIndex] = useState(0);

  // rotate hero words
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % ROTATING.length);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const el = wordRef.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    gsap.fromTo(el, { yPercent: 60, autoAlpha: 0, rotateX: -30 }, { yPercent: 0, autoAlpha: 1, rotateX: 0, duration: 0.9, ease: 'power4.out' });
  }, [index]);

  // entrance + scroll choreography
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ paused: true });
      intro
        .fromTo('.hero-eyebrow', { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power3.out' })
        .fromTo('.hero-line', { yPercent: 120, rotate: 3 }, { yPercent: 0, rotate: 0, duration: 1.2, stagger: 0.12, ease: 'power4.out' }, 0.1)
        .fromTo('.hero-word', { yPercent: 60, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 1.1, ease: 'power4.out' }, 0.35)
        .fromTo('.hero-copy > *', { autoAlpha: 0, y: 26 }, { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out' }, 0.55)
        .fromTo('.hero-media', { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: 1.4, ease: 'power4.inOut' }, 0.3)
        .fromTo('.hero-img', { scale: 1.35 }, { scale: 1, duration: 2.2, ease: 'power3.out' }, 0.3)
        .fromTo('.hero-chip', { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out' }, 0.9)
        .fromTo('.hero-scroll', { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 }, 1.2);

      const start = () => intro.play(0);
      window.addEventListener('preloader:done', start, { once: true });
      const fallback = setTimeout(start, 2600);

      if (!reduce) {
        // scroll parallax on media
        gsap.to('.hero-img', {
          yPercent: 14,
          scale: 1.12,
          ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
        });
        gsap.to('.hero-headline', {
          yPercent: -18,
          autoAlpha: 0.15,
          ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
        });
        gsap.to('.hero-chip', {
          yPercent: -60,
          ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
        });
      } else {
        intro.progress(1);
      }

      return () => clearTimeout(fallback);
    }, root);
    return () => ctx.revert();
  }, []);

  // mouse tilt on chips
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      const { innerWidth: w, innerHeight: h } = window;
      const x = (e.clientX / w - 0.5) * 2;
      const y = (e.clientY / h - 0.5) * 2;
      gsap.to('.hero-chip-a', { x: x * 18, y: y * 14, rotateX: -y * 5, rotateY: x * 6, duration: 1.2, ease: 'power3.out', transformPerspective: 600 });
      gsap.to('.hero-chip-b', { x: x * -26, y: y * -18, rotateX: y * 5, rotateY: -x * 7, duration: 1.4, ease: 'power3.out', transformPerspective: 600 });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section ref={root} className="relative flex min-h-[100svh] flex-col overflow-hidden pt-32 md:pt-36" data-cursor="">
      {/* warm ambient wash */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-[10%] top-[8%] h-[46vw] w-[46vw] rounded-full bg-[radial-gradient(circle,rgba(15,30,54,0.10),transparent_65%)]" />
        <div className="absolute -left-[12%] bottom-[-10%] h-[40vw] w-[40vw] rounded-full bg-[radial-gradient(circle,rgba(15,30,54,0.08),transparent_65%)]" />
      </div>

      <div className="container-x relative z-10 grid flex-1 grid-cols-1 gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center">
        {/* LEFT: headline */}
        <div className="hero-headline">
          <span className="hero-eyebrow eyebrow mb-7 inline-flex" style={{ opacity: 0 }}>
            Interior design · Architecture · Furniture — Lahore
          </span>
          <h1 className="display-xl" aria-live="polite">
            <span className="block overflow-hidden">
              <span className="hero-line block pb-[0.06em]">Considered spaces.</span>
            </span>
            <span className="grid pb-[0.06em]">
              <span className="invisible col-start-1 row-start-1">
                <em className="serif-italic">Life, enhanced.</em>
              </span>
              <span className="col-start-1 row-start-1 overflow-hidden">
                <span key={index} ref={wordRef} className="hero-word block">
                  <em className="serif-italic text-[var(--color-walnut)]">{ROTATING[index]}</em>
                </span>
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="hero-line block pb-[0.06em]">crafted&nbsp;in&nbsp;wood.</span>
            </span>
          </h1>

          <div className="hero-copy mt-9 max-w-xl">
            <p className="lead">
              We design and build offices, homes and retail spaces that feel inevitable —
              paired with the solid-wood furniture our studio was founded on. One team, from
              first sketch to final fit-out.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <CTA href="/contact">Book free consultation</CTA>
              <Link href="/projects" className="btn btn-outline">
                <span className="btn-label">Explore our work</span>
                <span className="btn-arrow"><ArrowUpRight size={14} /></span>
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT: media */}
        <div className="relative">
          <div className="hero-media relative aspect-[4/5] overflow-hidden rounded-[var(--radius-l)] shadow-[var(--shadow-lift)] md:aspect-[5/6]">
            <Image
              src="/images/hero-office.jpg"
              alt="Warm walnut corporate office interior designed by Woodex Interiors in Lahore"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="hero-img object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-[var(--color-cream)]">
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] opacity-80">Featured project</p>
                <p className="font-[family-name:var(--font-display)] text-xl">Meridian Capital HQ</p>
              </div>
              <Link href="/projects" className="grid h-11 w-11 place-items-center rounded-full bg-[var(--color-cream)] text-[var(--color-espresso)] transition-transform hover:rotate-45" style={{ transitionTimingFunction: 'var(--ease-lux)' }}>
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>

          {/* floating chips with depth */}
          <div className="hero-chip hero-chip-a absolute -left-3 top-10 hidden rounded-2xl bg-[var(--color-cream)] p-4 shadow-[var(--shadow-card)] md:block" style={{ transformStyle: 'preserve-3d' }}>
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-[var(--color-walnut)] text-[var(--color-cream)]">
                <Star size={16} fill="currentColor" />
              </div>
              <div>
                <p className="font-[family-name:var(--font-display)] text-lg leading-none">12 years</p>
                <p className="mt-1 text-[11px] uppercase tracking-wider text-[var(--color-fog)]">of craft since 2014</p>
              </div>
            </div>
          </div>

          <div className="hero-chip hero-chip-b absolute -bottom-7 -right-2 rounded-2xl bg-[var(--color-espresso)] p-4 text-[var(--color-cream)] shadow-[var(--shadow-lift)] md:-right-6" style={{ transformStyle: 'preserve-3d' }}>
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full border border-[var(--color-line-light)]">
                <MapPin size={15} />
              </div>
              <div>
                <p className="text-sm font-medium leading-none">Lahore · Islamabad</p>
                <p className="mt-1 text-[11px] uppercase tracking-wider text-[var(--color-cream)]/60">· Karachi · Sialkot</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* scroll hint */}
      <div className="hero-scroll container-x relative z-10 mt-12 flex items-center justify-between pb-8" style={{ opacity: 0 }}>
        <span className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-[var(--color-fog)]">
          <ArrowDown size={14} className="animate-bounce" /> Scroll to explore
        </span>
        <span className="hidden text-[11px] uppercase tracking-[0.22em] text-[var(--color-fog)] md:block">
          Design · Build · Furnish
        </span>
      </div>
    </section>
  );
}
