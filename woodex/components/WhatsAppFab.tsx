'use client';

import { useEffect, useRef, useState } from 'react';
import { site } from '@/lib/site';

export default function WhatsAppFab() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      ref={root}
      className="fixed bottom-5 right-5 z-[940] flex items-center gap-3 md:bottom-8 md:right-8"
      style={{
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity .5s var(--ease-lux), transform .5s var(--ease-lux)',
        pointerEvents: show ? 'auto' : 'none',
      }}
    >
      <div
        className="hidden rounded-2xl bg-[var(--color-cream)] px-4 py-3 shadow-[var(--shadow-card)] md:block"
        style={{ opacity: open ? 1 : 0, transform: open ? 'translateX(0)' : 'translateX(12px)', transition: 'all .45s var(--ease-lux)', pointerEvents: open ? 'auto' : 'none' }}
      >
        <p className="text-sm font-medium text-[var(--color-espresso)]">Chat with the studio</p>
        <p className="text-xs text-[var(--color-fog)]">Typically replies within an hour</p>
      </div>

      <a
        href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
          "Hello Woodex — I'd like a free design consultation."
        )}`}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        aria-label="Chat on WhatsApp"
        className="relative grid h-14 w-14 place-items-center rounded-full bg-[#256f57] text-white shadow-[var(--shadow-card)] transition-transform duration-500 hover:scale-105"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#256f57] opacity-20" aria-hidden />
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.8c2.17 0 4.2.84 5.74 2.38a8.06 8.06 0 0 1 2.38 5.74c0 4.47-3.64 8.11-8.12 8.11a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.12.82.83-3.04-.2-.31a8.06 8.06 0 0 1-1.24-4.28c0-4.47 3.64-8.11 8.16-8.11Zm-3.2 4.53c-.18 0-.46.07-.7.32-.24.25-.93.9-.93 2.21 0 1.3.95 2.56 1.09 2.74.13.18 1.86 2.84 4.5 3.88 2.2.87 2.65.69 3.13.65.48-.05 1.55-.63 1.77-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.18-.5-.31-.26-.13-1.55-.77-1.79-.86-.24-.09-.42-.13-.6.14-.18.27-.69.85-.85 1.03-.16.18-.31.2-.58.07-.26-.13-1.1-.41-2.1-1.3-.78-.69-1.3-1.55-1.45-1.81-.16-.27-.02-.41.11-.54.12-.12.26-.31.39-.47.13-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.13-.62-1.49-.85-2.04-.22-.53-.45-.46-.6-.46h-.14Z" />
        </svg>
      </a>
    </div>
  );
}
