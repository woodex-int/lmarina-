'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import type { FAQ } from '@/lib/services';
import { Fade } from './Motion';

export default function FaqAccordion({ faqs, dark = false }: { faqs: FAQ[]; dark?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className={dark ? 'on-dark' : ''}>
      {faqs.map((f, i) => (
        <Fade key={i} delay={i * 0.05}>
          <div className={`acc-item ${open === i ? 'open' : ''}`}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-8 py-7 text-left"
              aria-expanded={open === i}
            >
              <span className="font-[family-name:var(--font-display)] text-[clamp(1.15rem,2vw,1.5rem)] leading-snug">
                {f.q}
              </span>
              <span className="acc-icon grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[var(--color-line)]">
                <Plus size={16} />
              </span>
            </button>
            <div className="acc-body">
              <div>
                <p className="max-w-3xl pb-7 text-[0.97rem] leading-relaxed">{f.a}</p>
              </div>
            </div>
          </div>
        </Fade>
      ))}
    </div>
  );
}
