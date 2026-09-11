import Link from 'next/link';
import { ArrowUpRight, MapPin, Mail, Phone, Instagram, Facebook, Linkedin } from 'lucide-react';
import { site, nav } from '@/lib/site';
import { services } from '@/lib/services';

const socialIcons: Record<string, any> = { instagram: Instagram, facebook: Facebook, linkedin: Linkedin };

export default function Footer() {
  return (
    <footer className="on-dark relative overflow-hidden bg-[var(--color-night)] text-[var(--color-cream)]">
      <div className="container-x border-t border-[var(--color-line-light)] pt-20 pb-10">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div className="col-span-2 lg:col-span-1">
            <p className="font-[family-name:var(--font-display)] text-3xl font-medium">Woodex</p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-[var(--color-cream)]/65">
              Interior design, architecture and custom solid-wood furniture — from first sketch to final fit-out, under one roof.
            </p>
            <div className="mt-6 flex gap-3">
              {Object.entries(site.social).slice(0, 3).map(([k, v]) => {
                const Icon = socialIcons[k] ?? ArrowUpRight;
                return (
                  <a
                    key={k}
                    href={v}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={k}
                    className="grid h-10 w-10 place-items-center rounded-full border border-[var(--color-line-light)] transition-colors hover:border-[var(--color-brass)] hover:text-[var(--color-brass-soft)]"
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <p className="idx-label mb-5 !text-[#8d8378]">Explore</p>
            <ul className="space-y-3 text-sm text-[var(--color-cream)]/75">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="transition-colors hover:text-[var(--color-brass-soft)]">
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/pricing" className="transition-colors hover:text-[var(--color-brass-soft)]">
                  Packages &amp; pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="idx-label mb-5 !text-[#8d8378]">Services</p>
            <ul className="space-y-3 text-sm text-[var(--color-cream)]/75">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="transition-colors hover:text-[var(--color-brass-soft)]">
                    {s.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <p className="idx-label mb-5 !text-[#8d8378]">Studio</p>
            <ul className="space-y-4 text-sm text-[var(--color-cream)]/75">
              <li className="flex gap-3">
                <MapPin size={16} className="mt-1 shrink-0 text-[var(--color-brass-soft)]" />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.locality}, {site.address.region}, {site.address.country}
                </span>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="mt-1 shrink-0 text-[var(--color-brass-soft)]" />
                <a href={`mailto:${site.email}`} className="hover:text-[var(--color-brass-soft)]">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="mt-1 shrink-0 text-[var(--color-brass-soft)]" />
                <a href={`tel:${site.phoneHref}`} className="hover:text-[var(--color-brass-soft)]">
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-[var(--color-line-light)] pt-8 text-xs text-[var(--color-cream)]/45 md:flex-row md:items-center">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
            <Link href="/style-guide" className="underline-offset-4 opacity-70 transition-opacity hover:opacity-100 hover:underline">
              Style guide
            </Link>
          </div>
          <p className="flex items-center gap-2">
            Designed in Lahore
            <span className="inline-block h-1 w-1 rounded-full bg-[var(--color-brass)]" />
            Crafted in solid wood
            <span className="inline-block h-1 w-1 rounded-full bg-[var(--color-brass)]" />
            Built to outlast trends
          </p>
        </div>
      </div>

      {/* Giant watermark word */}
      <div aria-hidden className="pointer-events-none select-none overflow-hidden">
        <p className="translate-y-[18%] text-center font-[family-name:var(--font-display)] text-[clamp(4rem,17vw,19rem)] leading-none tracking-[-0.04em] text-[var(--color-cream)]/[0.045]">
          WOODEX
        </p>
      </div>
    </footer>
  );
}
