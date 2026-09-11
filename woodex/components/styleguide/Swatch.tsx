'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';

export default function Swatch({
  name,
  hex,
  dark = false,
}: {
  name: string;
  hex: string;
  dark?: boolean;
}) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard?.writeText(hex);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      }}
      className="group overflow-hidden rounded-[var(--radius-m)] border border-[var(--color-line)] text-left"
      title={`Copy ${hex}`}
    >
      <span
        className="relative block h-24 w-full"
        style={{ background: hex }}
      >
        <span
          className={`absolute right-3 top-3 rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] transition-opacity ${
            copied ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          } ${dark ? 'bg-[var(--color-cream)]/90 text-[var(--color-espresso)]' : 'bg-[var(--color-espresso)]/85 text-[var(--color-cream)]'}`}
        >
          {copied ? <Check size={11} className="inline" /> : 'Copy'}
        </span>
      </span>
      <span className="block bg-[var(--color-cream)] px-4 py-3">
        <span className="block text-sm font-medium text-[var(--color-espresso)]">{name}</span>
        <span className="mono block text-xs uppercase text-[var(--color-fog)]">{hex}</span>
      </span>
    </button>
  );
}
