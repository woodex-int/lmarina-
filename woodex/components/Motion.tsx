'use client';

import { useEffect, useRef, type ReactNode, type ElementType } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

function useReduce() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** Word-by-word masked headline reveal on scroll */
export function SplitReveal({
  children,
  as: Tag = 'span',
  className = '',
  delay = 0,
  stagger = 0.06,
  start = 'top 86%',
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
  start?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = useReduce();

    const words = el.querySelectorAll('.sr-word');
    if (reduce) {
      gsap.set(words, { yPercent: 0 });
      return;
    }
    const ctx = gsap.context(() => {
      gsap.set(words, { yPercent: 115, rotate: 4 });
      gsap.to(words, {
        yPercent: 0,
        rotate: 0,
        duration: 1.05,
        ease: 'power4.out',
        stagger,
        delay,
        scrollTrigger: { trigger: el, start },
      });
    }, el);
    return () => ctx.revert();
  }, [delay, stagger, start]);

  const text = typeof children === 'string' ? children : '';
  return (
    <Tag ref={ref} className={className}>
      {text ? (
        text.split(' ').map((w, i) => (
          <span key={i} className="inline-block overflow-hidden align-bottom" style={{ paddingBottom: '0.08em', marginBottom: '-0.08em' }}>
            <span className="sr-word inline-block will-change-transform">{w}</span>
            {i < text.split(' ').length - 1 ? ' ' : ''}
          </span>
        ))
      ) : (
        children
      )}
    </Tag>
  );
}

/** Generic fade + rise on scroll */
export function Fade({
  children,
  className = '',
  delay = 0,
  y = 34,
  as: Tag = 'div',
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = useReduce();
    if (reduce) {
      gsap.set(el, { autoAlpha: 1, y: 0 });
      return;
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.1,
          ease: 'power3.out',
          delay,
          scrollTrigger: { trigger: el, start: 'top 88%' },
        }
      );
    });
    return () => ctx.revert();
  }, [delay, y]);
  return <Tag ref={ref as any} className={className}>{children}</Tag>;
}

/** Clip-path reveal for media */
export function ClipReveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = useReduce();
    if (reduce) {
      gsap.set(el, { clipPath: 'inset(0 0 0% 0)' });
      return;
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { clipPath: 'inset(0 0 100% 0)' },
        {
          clipPath: 'inset(0 0 0% 0)',
          duration: 1.35,
          ease: 'power4.inOut',
          delay,
          scrollTrigger: { trigger: el, start: 'top 85%' },
        }
      );
      const img = el.querySelector('img');
      if (img) {
        gsap.fromTo(
          img,
          { scale: 1.25 },
          { scale: 1, duration: 1.7, ease: 'power3.out', delay, scrollTrigger: { trigger: el, start: 'top 85%' } }
        );
      }
    });
    return () => ctx.revert();
  }, [delay]);
  return (
    <div ref={ref} className={className} style={{ willChange: 'clip-path' }}>
      {children}
    </div>
  );
}

/** Parallax translate based on scroll progress */
export function Parallax({
  children,
  speed = 0.12,
  className = '',
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || useReduce()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { yPercent: -speed * 100 },
        {
          yPercent: speed * 100,
          ease: 'none',
          scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
        }
      );
    });
    return () => ctx.revert();
  }, [speed]);
  return (
    <div ref={ref} className={className} style={{ willChange: 'transform' }}>
      {children}
    </div>
  );
}

/** Number counter */
export function Counter({ to, suffix = '', duration = 1.8 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obj = { v: 0 };
    const reduce = useReduce();
    const set = () => (el.textContent = `${Math.round(obj.v)}${suffix}`);
    if (reduce) {
      obj.v = to;
      set();
      return;
    }
    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      once: true,
      onEnter: () =>
        gsap.to(obj, {
          v: to,
          duration,
          ease: 'power2.out',
          onUpdate: set,
        }),
    });
    return () => st.kill();
  }, [to, suffix, duration]);
  return <span ref={ref}>0{suffix}</span>;
}
