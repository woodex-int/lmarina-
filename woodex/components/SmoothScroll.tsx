'use client';

import { useEffect, type ReactNode } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: !reduce,
      touchMultiplier: 1.6,
      wheelMultiplier: 1,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // anchor links via lenis
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const id = anchor.getAttribute('href');
      if (!id || id === '#') return;
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        lenis.scrollTo(el as HTMLElement, { offset: -90 });
      }
    };
    document.addEventListener('click', onClick);

    document.documentElement.classList.add('lenis', 'lenis-smooth');
    if (!reduce) document.body.classList.add('reveal-ready');

    // recalculate triggers once fonts/images settle (prevents early/late reveals)
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    window.addEventListener('preloader:done', () => setTimeout(refresh, 150));
    if (document.fonts) document.fonts.ready.then(() => ScrollTrigger.refresh());
    const refreshTimer = setTimeout(refresh, 600);

    // expose for preloader / menu
    (window as any).lenis = lenis;

    return () => {
      document.removeEventListener('click', onClick);
      window.removeEventListener('load', refresh);
      clearTimeout(refreshTimer);
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
