'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine) return;
    document.body.classList.add('cursor-on');

    const xToD = gsap.quickTo(dot.current, 'x', { duration: 0.08, ease: 'power3' });
    const yToD = gsap.quickTo(dot.current, 'y', { duration: 0.08, ease: 'power3' });
    const xToR = gsap.quickTo(ring.current, 'x', { duration: reduce ? 0 : 0.5, ease: 'power3' });
    const yToR = gsap.quickTo(ring.current, 'y', { duration: reduce ? 0 : 0.5, ease: 'power3' });

    const move = (e: MouseEvent) => {
      xToD(e.clientX);
      yToD(e.clientY);
      xToR(e.clientX);
      yToR(e.clientY);
    };

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const interactive = t.closest('a, button, [data-cursor]');
      if (!interactive) {
        ring.current?.setAttribute('data-state', '');
        return;
      }
      const label = interactive.getAttribute('data-cursor-label');
      if (label && ring.current) {
        ring.current.setAttribute('data-state', 'view');
        ring.current.querySelector<HTMLElement>('.cursor-label')!.textContent = label;
      } else {
        ring.current?.setAttribute('data-state', 'hover');
      }
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      document.body.classList.remove('cursor-on');
    };
  }, []);

  return (
    <>
      <div ref={dot} className="cursor-dot" aria-hidden />
      <div ref={ring} className="cursor-ring" aria-hidden>
        <span className="cursor-label">View</span>
      </div>
    </>
  );
}
