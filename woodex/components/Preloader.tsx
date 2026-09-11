'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const WORDS = ['Considered', 'spaces.', 'Crafted', 'in wood.'];

export default function Preloader() {
  const root = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLSpanElement>(null);
  const wordWrap = useRef<HTMLSpanElement>(null);
  const count = useRef<HTMLSpanElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.body.style.overflow = 'hidden';

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = '';
        setDone(true);
        window.dispatchEvent(new Event('preloader:done'));
      },
    });

    if (reduce) {
      tl.to(root.current, { autoAlpha: 0, duration: 0.2 }).set(root.current, { display: 'none' });
      return;
    }

    const counter = { v: 0 };
    tl.fromTo(
      wordWrap.current,
      { yPercent: 110 },
      { yPercent: 0, duration: 0.9, ease: 'power4.out' },
      0.1
    );
    tl.to(bar.current, { scaleX: 1, duration: 2.0, ease: 'power2.inOut' }, 0.15);
    tl.to(
      counter,
      {
        v: 100,
        duration: 2.0,
        ease: 'power2.inOut',
        onUpdate: () => {
          if (count.current) count.current.textContent = String(Math.round(counter.v)).padStart(3, '0');
        },
      },
      0.15
    );
    tl.to(wordWrap.current, { yPercent: -110, duration: 0.7, ease: 'power3.in' }, '+=0.15');
    tl.to(root.current, {
      yPercent: -100,
      duration: 1.0,
      ease: 'power4.inOut',
    });
    tl.set(root.current, { display: 'none' });

    return () => {
      tl.kill();
      document.body.style.overflow = '';
    };
  }, []);

  if (done) return null;

  return (
    <div ref={root} className="preloader" aria-hidden>
      <div className="flex flex-col items-center gap-7">
        <span className="preloader-word">
          <span className="block overflow-hidden">
            <span ref={wordWrap} className="block">
              {WORDS[0]} <em className="serif-italic" style={{ color: 'var(--color-brass-soft)' }}>{WORDS[1]}</em>
            </span>
          </span>
        </span>
        <div className="preloader-bar">
          <span ref={bar} />
        </div>
        <div className="flex items-center justify-between" style={{ width: 'min(280px, 60vw)' }}>
          <span className="text-[11px] uppercase tracking-[0.22em] text-[#8f98a6]">Woodex Interiors</span>
          <span ref={count} className="preloader-count">000</span>
        </div>
      </div>
    </div>
  );
}
