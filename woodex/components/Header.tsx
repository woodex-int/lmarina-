'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { nav, site } from '@/lib/site';
import CTA from './CTA';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const links = gsap.utils.toArray<HTMLElement>('.menu-link');
    const meta = gsap.utils.toArray<HTMLElement>('.menu-meta');
    if (open) {
      if (reduce) gsap.set(menuRef.current, { clipPath: 'inset(0 0 0% 0)' });
      else {
        gsap.set(menuRef.current, { display: 'block' });
        gsap.fromTo(
          menuRef.current,
          { clipPath: 'inset(0 0 100% 0)' },
          { clipPath: 'inset(0 0 0% 0)', duration: 0.9, ease: 'power4.inOut' }
        );
        gsap.fromTo(
          links,
          { yPercent: 120, rotate: 4 },
          { yPercent: 0, rotate: 0, duration: 0.9, stagger: 0.06, ease: 'power4.out', delay: 0.35 }
        );
        gsap.fromTo(meta, { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.08, delay: 0.7 });
      }
      document.body.style.overflow = 'hidden';
      (window as any).lenis?.stop();
    } else {
      document.body.style.overflow = '';
      (window as any).lenis?.start();
      if (menuRef.current && !reduce) {
        gsap.to(menuRef.current, {
          clipPath: 'inset(0 0 100% 0)',
          duration: 0.7,
          ease: 'power4.inOut',
          onComplete: () => gsap.set(menuRef.current, { display: 'none' }),
        });
      } else if (menuRef.current) {
        gsap.set(menuRef.current, { display: 'none' });
      }
    }
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header
        ref={headerRef}
        className={`site-header fixed inset-x-0 top-0 z-[950] ${open ? 'menu-open' : ''}`}
        data-scrolled={scrolled && !open}
      >
        <div className="container-x flex items-center justify-between py-5 md:py-6">
          <Link href="/" className="flex items-baseline gap-2" aria-label="Woodex Interiors home">
            <span className="font-[family-name:var(--font-display)] text-[1.45rem] tracking-[-0.02em] font-medium">
              Woodex
            </span>
            <span className="hidden text-[10px] uppercase tracking-[0.28em] opacity-60 sm:inline">Interiors</span>
          </Link>

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
            {nav.slice(1, 6).map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={`nav-link ${pathname.startsWith(n.href) && n.href !== '/' ? 'active' : ''}`}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${site.phoneHref}`}
              className="hidden items-center gap-2 text-sm font-medium md:inline-flex"
            >
              <Phone size={14} /> {site.phone}
            </a>
            <div className="hidden sm:block">
              <CTA href="/contact" variant={open ? 'light' : scrolled ? 'outline' : 'light'}>
                Book free consultation
              </CTA>
            </div>
            <button
              onClick={() => setOpen((v) => !v)}
              className="grid h-12 w-12 place-items-center rounded-full border border-current/20 transition-colors hover:bg-current/10"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
      </header>

      <div ref={menuRef} className="fullmenu overflow-hidden" style={{ display: 'none' }}>
        <div className="container-x grid h-full grid-cols-1 gap-10 pb-12 md:grid-cols-[1.4fr_1fr]">
          <nav className="flex flex-col justify-center gap-1" aria-label="Fullscreen">
            {nav.map((n, i) => (
              <div key={n.href} className="overflow-hidden">
                <Link
                  href={n.href}
                  className={`menu-link group flex items-baseline gap-4 font-[family-name:var(--font-display)] text-[clamp(2.6rem,7vw,5.5rem)] leading-[1.04] tracking-[-0.03em] ${
                    pathname === n.href ? 'text-[var(--color-brass-soft)]' : ''
                  }`}
                >
                  <span className="text-xs font-sans text-[var(--color-brass-soft)]">0{i + 1}</span>
                  <span className="transition-transform duration-500 group-hover:translate-x-3" style={{ transitionTimingFunction: 'var(--ease-lux)' }}>
                    {n.label}
                  </span>
                  <ArrowUpRight size={26} className="mb-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </Link>
              </div>
            ))}
          </nav>

          <div className="flex flex-col justify-end gap-8 text-sm">
            <div className="menu-meta">
              <p className="idx-label mb-2 !text-[#8f98a6]">Start a project</p>
              <a href={`mailto:${site.email}`} className="text-lg text-[var(--color-cream)] underline-offset-4 hover:underline">
                {site.email}
              </a>
            </div>
            <div className="menu-meta">
              <p className="idx-label mb-2 !text-[#8f98a6]">Studio</p>
              <p className="text-[var(--color-cream)]/80">
                {site.address.street}
                <br />
                {site.address.locality}, {site.address.country}
              </p>
            </div>
            <div className="menu-meta flex flex-wrap gap-x-5 gap-y-2">
              {Object.entries(site.social).map(([k, v]) => (
                <a key={k} href={v} target="_blank" rel="noreferrer" className="textlink capitalize">
                  {k}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
