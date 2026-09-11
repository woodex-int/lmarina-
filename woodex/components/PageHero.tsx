'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ChevronRight } from 'lucide-react';

export default function PageHero({
  eyebrow,
  title,
  italicWord,
  copy,
  image,
  imageAlt = '',
  crumb,
  children,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  italicWord?: string;
  copy?: ReactNode;
  image?: string;
  imageAlt?: string;
  crumb?: string;
  children?: ReactNode;
  dark?: boolean;
}) {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true });
      tl.fromTo('.ph-eyebrow', { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.7, ease: 'power3.out' })
        .fromTo('.ph-line', { yPercent: 120 }, { yPercent: 0, duration: 1.1, stagger: 0.09, ease: 'power4.out' }, 0.05)
        .fromTo('.ph-copy', { autoAlpha: 0, y: 22 }, { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }, 0.4)
        .fromTo('.ph-media', { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: 1.3, ease: 'power4.inOut' }, 0.25)
        .fromTo('.ph-img', { scale: 1.3 }, { scale: 1, duration: 1.9, ease: 'power3.out' }, 0.25);

      const start = () => tl.play(0);
      window.addEventListener('preloader:done', start, { once: true });
      const fallback = setTimeout(start, 2600);
      return () => clearTimeout(fallback);
    }, root);
    return () => ctx.revert();
  }, []);

  // split title around optional italic last/flagged word
  const parts = title.split('|');

  return (
    <section ref={root} className={`relative overflow-hidden pt-36 md:pt-44 ${dark ? 'on-dark bg-[var(--color-night)] text-[var(--color-cream)]' : ''}`}>
      <div className="container-x">
        <nav className="ph-eyebrow mb-8 flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[var(--color-fog)]" aria-label="Breadcrumb" style={{ opacity: 0 }}>
          <Link href="/" className="hover:text-[var(--color-walnut)]">Home</Link>
          <ChevronRight size={12} />
          {crumb ? (
            <>
              <Link href="/services" className="hover:text-[var(--color-walnut)]">Services</Link>
              <ChevronRight size={12} />
              <span className="text-[var(--color-walnut)]">{crumb}</span>
            </>
          ) : (
            <span className="text-[var(--color-walnut)]">{eyebrow.split('—')[0].trim()}</span>
          )}
        </nav>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7 xl:col-span-7">
            <span className="ph-eyebrow eyebrow mb-7 inline-flex" style={{ opacity: 0 }}>{eyebrow}</span>
            <h1 className="h1 text-balance">
              {parts.length > 1 ? (
                <>
                  <span className="block overflow-hidden"><span className="ph-line block pb-[0.08em]">{parts[0]}</span></span>
                  <span className="block overflow-hidden"><span className="ph-line block pb-[0.08em]"><em className="serif-italic text-[var(--color-walnut)]">{parts[1]}</em></span></span>
                </>
              ) : (
                <span className="block overflow-hidden"><span className="ph-line block pb-[0.08em]">{title}</span></span>
              )}
              {italicWord && (
                <span className="block overflow-hidden"><span className="ph-line block pb-[0.08em]"><em className="serif-italic text-[var(--color-walnut)]">{italicWord}</em></span></span>
              )}
            </h1>
            {copy && <div className="ph-copy lead mt-8 max-w-xl" style={{ opacity: 0 }}>{copy}</div>}
            <div className="ph-copy mt-9" style={{ opacity: 0 }}>{children}</div>
          </div>

          {image && (
            <div className="lg:col-span-5">
              <div className="ph-media relative aspect-[5/4] overflow-hidden rounded-[var(--radius-l)] shadow-[var(--shadow-card)] lg:aspect-[4/5]">
                <Image src={image} alt={imageAlt} fill priority sizes="(max-width: 1024px) 100vw, 42vw" className="ph-img object-cover" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
