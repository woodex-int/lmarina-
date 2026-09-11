import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Palette, Type, Box as BoxIcon, BadgeCheck, MousePointerClick, List, Shapes,
  UserRound, TextCursorInput, Pilcrow, ArrowUpRight, CheckCircle2, AlertTriangle,
  Armchair, Compass, Box, Quote, Star, MapPin, Phone, Mail, ArrowRight, ArrowDown,
  Menu, X, Plus, Instagram, Facebook, Linkedin,
} from 'lucide-react';
import Swatch from '@/components/styleguide/Swatch';
import { SplitReveal, Fade } from '@/components/Motion';

export const metadata: Metadata = {
  title: 'Style Guide — Woodex Design System',
  description:
    'The Woodex Interiors visual system: color, typography, shadows, logo, buttons, lists, icons, avatars, form states and rich-text standards.',
  robots: { index: false, follow: true },
  alternates: { canonical: '/style-guide' },
};

const colors = [
  { name: 'Paper', hex: '#F4EFE6' },
  { name: 'Paper-2 / Sand base', hex: '#ECE4D6' },
  { name: 'Cream', hex: '#FAF7F1', dark: true },
  { name: 'Sand', hex: '#D9CBB4' },
  { name: 'Clay', hex: '#C4AD8C' },
  { name: 'Brass', hex: '#A97F49' },
  { name: 'Brass soft', hex: '#C9A66B' },
  { name: 'Walnut', hex: '#5B3D2B', dark: true },
  { name: 'Walnut deep', hex: '#3D2819', dark: true },
  { name: 'Espresso', hex: '#17120D', dark: true },
  { name: 'Ink', hex: '#201A14', dark: true },
  { name: 'Night', hex: '#100D0A', dark: true },
];

const typeRows = [
  { spec: 'H1', size: '5rem (80px)', lh: '112.5%', weight: '500', cls: 'h1', text: 'Considered spaces' },
  { spec: 'H2', size: '2.812rem (45px)', lh: '122%', weight: '500', cls: 'h2', text: 'Lasting design' },
  { spec: 'H3', size: '1.875rem (30px)', lh: '133%', weight: '500', cls: 'h3', text: 'Life, enhanced' },
  { spec: 'H4', size: '1.562rem (25px)', lh: '128%', weight: '500', cls: 'h4', text: 'The workshop standard' },
  { spec: 'H5', size: '1.25rem (20px)', lh: '150%', weight: '500', cls: 'h5', text: 'What is included' },
  { spec: 'H6', size: '1.125rem (18px)', lh: '155%', weight: '400', cls: 'h6', text: 'Related services' },
];

const lineIcons = [
  { icon: Armchair, label: 'Interior design' },
  { icon: Compass, label: 'Consultation' },
  { icon: Box, label: '3D modeling' },
  { icon: Quote, label: 'Testimonial' },
  { icon: Star, label: 'Rating' },
  { icon: MapPin, label: 'Location' },
  { icon: Phone, label: 'Phone' },
  { icon: Mail, label: 'Email' },
  { icon: ArrowUpRight, label: 'External arrow' },
  { icon: ArrowRight, label: 'Forward' },
  { icon: ArrowDown, label: 'Scroll' },
  { icon: Menu, label: 'Menu open' },
  { icon: X, label: 'Menu close' },
  { icon: Plus, label: 'Accordion' },
  { icon: CheckCircle2, label: 'Success' },
];

const people = [
  { initials: 'AR', tone: '#5B3D2B' },
  { initials: 'MS', tone: '#A97F49' },
  { initials: 'FK', tone: '#3D2819' },
  { initials: 'A&', tone: '#6B6055' },
];

function SectionTag({ icon: Icon, children, id }: { icon: any; children: string; id: string }) {
  return (
    <div id={id} className="mb-10 flex items-center gap-4">
      <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--color-espresso)] text-[var(--color-cream)]">
        <Icon size={17} />
      </span>
      <h2 className="h3 !mb-0">{children}</h2>
      <span className="ml-2 hidden h-px flex-1 bg-[var(--color-line)] md:block" />
    </div>
  );
}

export default function StyleGuidePage() {
  return (
    <article className="pt-32 md:pt-40">
      {/* HEADER */}
      <header className="on-dark bg-[var(--color-night)] py-20 text-[var(--color-cream)] md:py-28">
        <div className="container-x">
          <Fade><span className="eyebrow mb-6">Design system · v1.0</span></Fade>
          <SplitReveal as="h1" className="h1 max-w-4xl">
            Woodex style guide
          </SplitReveal>
          <Fade delay={0.12}>
            <p className="lead mt-7 max-w-2xl">
              The single source for how Woodex looks and behaves — color, type, elevation,
              components and states. Structure mirrors the Linoxa foundation; the palette and
              voice are Woodex&apos;s own.
            </p>
          </Fade>
          <Fade delay={0.2}>
            <div className="mt-9 flex flex-wrap gap-4 text-sm text-[var(--color-cream)]/65">
              <Link href="#colors" className="textlink">Colors</Link>
              <Link href="#typography" className="textlink">Typography</Link>
              <Link href="#shadows" className="textlink">Shadows</Link>
              <Link href="#logo" className="textlink">Logo</Link>
              <Link href="#buttons" className="textlink">Buttons</Link>
              <Link href="#lists" className="textlink">Lists</Link>
              <Link href="#icons" className="textlink">Icons</Link>
              <Link href="#avatars" className="textlink">Avatars</Link>
              <Link href="#inputs" className="textlink">Inputs</Link>
              <Link href="#rich-text" className="textlink">Rich text</Link>
            </div>
          </Fade>
        </div>
      </header>

      <div className="container-x space-y-20 py-20 md:space-y-28 md:py-28">
        {/* COLORS */}
        <section>
          <SectionTag id="colors" icon={Palette}>Colors</SectionTag>
          <Fade>
            <div className="sg-panel">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {colors.map((c) => (
                  <Swatch key={c.hex} {...c} />
                ))}
              </div>
              <p className="sub-text mt-7 max-w-3xl">
                Warm paper and bone replace generic grey-white; walnut is the brand hue and brass
                the only accent. Ink on paper reaches ~11.8:1 contrast; cream on espresso ~14:1.
                Click any swatch to copy its hex value.
              </p>
            </div>
          </Fade>
        </section>

        {/* TYPOGRAPHY */}
        <section>
          <SectionTag id="typography" icon={Type}>Typography</SectionTag>
          <Fade>
            <div className="sg-panel overflow-x-auto">
              <table className="sg-table mb-10 min-w-[640px]">
                <thead>
                  <tr><th>Token</th><th>Size</th><th>Line height</th><th>Weight</th></tr>
                </thead>
                <tbody>
                  {typeRows.map((r) => (
                    <tr key={r.spec}>
                      <td className="font-medium text-[var(--color-espresso)]">{r.spec}</td>
                      <td className="mono">{r.size}</td>
                      <td className="mono">{r.lh}</td>
                      <td className="mono">{r.weight}</td>
                    </tr>
                  ))}
                  <tr><td className="font-medium text-[var(--color-espresso)]">Body font</td><td className="mono">1rem (16px)</td><td className="mono">162%</td><td className="mono">400</td></tr>
                  <tr><td className="font-medium text-[var(--color-espresso)]">Sub text</td><td className="mono">0.875rem (14px)</td><td className="mono">185%</td><td className="mono">400</td></tr>
                  <tr><td className="font-medium text-[var(--color-espresso)]">Button text</td><td className="mono">0.9375rem (15px)</td><td className="mono">162%</td><td className="mono">500</td></tr>
                </tbody>
              </table>

              <div className="space-y-6 border-t border-[var(--color-line)] pt-10">
                {typeRows.map((r) => (
                  <div key={r.spec} className="grid grid-cols-[70px_1fr] items-baseline gap-4 border-b border-[var(--color-line)] pb-5 md:grid-cols-[110px_1fr]">
                    <span className="mono text-xs text-[var(--color-fog)]">{r.spec}</span>
                    <span className={r.cls}>{r.text}{r.spec === 'H1' && <em className="serif-italic text-[var(--color-walnut)]"> crafted in wood</em>}</span>
                  </div>
                ))}
                <div className="grid grid-cols-[70px_1fr] gap-4 md:grid-cols-[110px_1fr]">
                  <span className="mono text-xs text-[var(--color-fog)]">Body</span>
                  <p>
                    Architecture is more than structures — it is about creating meaningful
                    environments. Body copy is Inter at 1rem/1.62, never narrower than a 68-character
                    measure, with warm ink rather than pure black.
                  </p>
                </div>
                <div className="grid grid-cols-[70px_1fr] gap-4 md:grid-cols-[110px_1fr]">
                  <span className="mono text-xs text-[var(--color-fog)]">Sub</span>
                  <p className="sub-text">
                    Captions, metadata and supporting notes use the sub-text treatment: 0.875rem
                    at 185% line height in muted ink.
                  </p>
                </div>
                <div className="grid grid-cols-[70px_1fr] gap-4 md:grid-cols-[110px_1fr]">
                  <span className="mono text-xs text-[var(--color-fog)]">Eyebrow</span>
                  <span className="eyebrow">Interior design · Architecture · Furniture</span>
                </div>
              </div>
            </div>
          </Fade>
        </section>

        {/* SHADOWS */}
        <section>
          <SectionTag id="shadows" icon={BoxIcon}>Shadows</SectionTag>
          <Fade>
            <div className="sg-panel grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                { name: 'Small', cls: 'shadow-[var(--shadow-sm)]', copy: '0 4px 14px -6px rgba(23,18,13,.18)' },
                { name: 'Medium', cls: 'shadow-[var(--shadow-card)]', copy: '0 24px 60px -28px rgba(23,18,13,.35)' },
                { name: 'Large', cls: 'shadow-[var(--shadow-lift)]', copy: '0 40px 90px -35px rgba(23,18,13,.55)' },
              ].map((s) => (
                <div key={s.name} className="rounded-[var(--radius-m)] bg-[var(--color-paper)] p-8 text-center">
                  <div className={`mx-auto mb-7 h-24 w-24 rounded-2xl bg-[var(--color-cream)] ${s.cls}`} />
                  <p className="font-[family-name:var(--font-display)] text-xl">{s.name}</p>
                  <p className="mono mt-2 text-[0.72rem] leading-relaxed text-[var(--color-fog)]">{s.copy}</p>
                </div>
              ))}
            </div>
          </Fade>
        </section>

        {/* LOGO */}
        <section>
          <SectionTag id="logo" icon={BadgeCheck}>Logo &amp; favicons</SectionTag>
          <Fade>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="sg-panel flex flex-col items-center justify-center gap-8 bg-[var(--color-cream)] py-14">
                <p className="flex items-baseline gap-2 text-[var(--color-espresso)]">
                  <span className="font-[family-name:var(--font-display)] text-5xl font-medium tracking-[-0.03em]">Woodex</span>
                  <span className="text-[11px] uppercase tracking-[0.3em] opacity-60">Interiors</span>
                </p>
                <p className="idx-label">On paper / light backgrounds</p>
              </div>
              <div className="sg-panel on-dark flex flex-col items-center justify-center gap-8 border-0 bg-[var(--color-night)] py-14">
                <p className="flex items-baseline gap-2 text-[var(--color-cream)]">
                  <span className="font-[family-name:var(--font-display)] text-5xl font-medium tracking-[-0.03em]">Woodex</span>
                  <span className="text-[11px] uppercase tracking-[0.3em] opacity-60">Interiors</span>
                </p>
                <p className="idx-label">On night / dark backgrounds</p>
              </div>
              <div className="sg-panel flex items-center justify-around md:col-span-2">
                <div className="text-center">
                  <Image src="/favicon.svg" alt="Woodex favicon small" width={40} height={40} className="mx-auto" />
                  <p className="sub-text mt-3">Favicon · 40px</p>
                </div>
                <div className="text-center">
                  <Image src="/favicon.svg" alt="Woodex favicon large" width={88} height={88} className="mx-auto rounded-[18px]" />
                  <p className="sub-text mt-3">App icon · 88px</p>
                </div>
                <div className="text-center">
                  <span className="mx-auto grid h-[88px] w-[88px] place-items-center rounded-[18px] bg-[var(--color-walnut)] font-[family-name:var(--font-display)] text-4xl text-[var(--color-brass-soft)]">W</span>
                  <p className="sub-text mt-3">Monogram variant</p>
                </div>
              </div>
            </div>
          </Fade>
        </section>

        {/* BUTTONS */}
        <section>
          <SectionTag id="buttons" icon={MousePointerClick}>Buttons</SectionTag>
          <Fade>
            <div className="sg-panel space-y-10">
              <div>
                <p className="idx-label mb-5">On light — primary, outline, light card</p>
                <div className="flex flex-wrap items-center gap-4">
                  <Link href="/contact" className="btn"><span className="btn-label">Button style one</span><span className="btn-arrow"><ArrowUpRight size={14} /></span></Link>
                  <Link href="/services" className="btn btn-outline"><span className="btn-label">Button style two</span><span className="btn-arrow"><ArrowUpRight size={14} /></span></Link>
                  <Link href="/pricing" className="btn btn-light"><span className="btn-label">Light variant</span><span className="btn-arrow"><ArrowUpRight size={14} /></span></Link>
                  <span className="textlink">Text link <ArrowRight size={14} /></span>
                </div>
              </div>
              <div className="on-dark -mx-4 rounded-[var(--radius-l)] bg-[var(--color-night)] p-8 md:-mx-10">
                <p className="idx-label mb-5 !text-[#8d8378]">On dark — light &amp; outline-light</p>
                <div className="flex flex-wrap items-center gap-4">
                  <Link href="/contact" className="btn btn-light"><span className="btn-label">Button style one</span><span className="btn-arrow"><ArrowUpRight size={14} /></span></Link>
                  <Link href="/projects" className="btn btn-outline-light"><span className="btn-label">Button style two</span><span className="btn-arrow"><ArrowUpRight size={14} /></span></Link>
                </div>
              </div>
              <div>
                <p className="idx-label mb-5">States</p>
                <div className="flex flex-wrap items-center gap-4">
                  <span className="btn opacity-50 pointer-events-none"><span className="btn-label">Disabled</span><span className="btn-arrow"><ArrowUpRight size={14} /></span></span>
                  <span className="btn !bg-[var(--color-walnut)]"><span className="btn-label">Hover / pressed</span><span className="btn-arrow"><ArrowUpRight size={14} /></span></span>
                  <span className="btn focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-brass)]"><span className="btn-label">Keyboard focus</span><span className="btn-arrow"><ArrowUpRight size={14} /></span></span>
                </div>
              </div>
            </div>
          </Fade>
        </section>

        {/* LISTS */}
        <section>
          <SectionTag id="lists" icon={List}>Lists</SectionTag>
          <Fade>
            <div className="sg-panel grid gap-12 md:grid-cols-2">
              <div>
                <p className="idx-label mb-5">Unordered</p>
                <ul className="space-y-3">
                  {['List item one — warm brass disc', 'List item two — 1.62 line height', 'List item three — short and scannable'].map((t) => (
                    <li key={t} className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-brass)]" />{t}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="idx-label mb-5">Ordered</p>
                <ol className="list-decimal space-y-3 pl-5">
                  <li>List item one</li>
                  <li>List item two</li>
                  <li>List item three</li>
                </ol>
              </div>
            </div>
          </Fade>
        </section>

        {/* ICONS */}
        <section>
          <SectionTag id="icons" icon={Shapes}>Icons</SectionTag>
          <Fade>
            <div className="sg-panel space-y-10">
              <div>
                <p className="idx-label mb-5">Social icons — 1.5 stroke, circular hover frames</p>
                <div className="flex gap-3">
                  {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                    <span key={i} className="grid h-11 w-11 place-items-center rounded-full border border-[var(--color-line)] transition-colors hover:border-[var(--color-brass)] hover:text-[var(--color-walnut)]">
                      <Icon size={16} />
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="idx-label mb-5">Line icons — Lucide, 1.5 stroke, 24px grid</p>
                <div className="grid grid-cols-3 gap-4 sm:grid-cols-5">
                  {lineIcons.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex flex-col items-center gap-2 rounded-[var(--radius-m)] border border-[var(--color-line)] p-5 text-center transition-colors hover:border-[var(--color-brass)] hover:text-[var(--color-walnut)]">
                      <Icon size={21} strokeWidth={1.5} />
                      <span className="text-[0.72rem] leading-tight text-[var(--color-fog)]">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Fade>
        </section>

        {/* AVATARS */}
        <section>
          <SectionTag id="avatars" icon={UserRound}>Avatars</SectionTag>
          <Fade>
            <div className="sg-panel">
              <p className="idx-label mb-5">2.5rem (40px) — initials on walnut tones until photography arrives</p>
              <div className="flex items-center -space-x-3">
                {people.map((p) => (
                  <span
                    key={p.initials}
                    className="grid h-10 w-10 place-items-center rounded-full border-2 border-[var(--color-cream)] text-[0.72rem] font-semibold tracking-wide text-[var(--color-cream)]"
                    style={{ background: p.tone }}
                  >
                    {p.initials}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex items-center gap-8">
                {[32, 40, 56, 72].map((s) => (
                  <div key={s} className="text-center">
                    <span className="mx-auto grid place-items-center rounded-full bg-[var(--color-walnut)] text-[var(--color-cream)]" style={{ width: s, height: s, fontSize: s * 0.32 }}>AR</span>
                    <p className="mono mt-2 text-[0.7rem] text-[var(--color-fog)]">{s}px</p>
                  </div>
                ))}
              </div>
            </div>
          </Fade>
        </section>

        {/* INPUTS */}
        <section>
          <SectionTag id="inputs" icon={TextCursorInput}>Inputs &amp; states</SectionTag>
          <Fade>
            <div className="sg-panel grid gap-12 md:grid-cols-2">
              <div>
                <p className="idx-label mb-5">Underline fields</p>
                <div className="space-y-7">
                  <label className="block"><span className="idx-label">Text input</span><input className="field" placeholder="Your name" /></label>
                  <label className="block"><span className="idx-label">Text area</span><textarea rows={3} className="field resize-none" placeholder="Tell us about the space…" /></label>
                  <label className="block"><span className="idx-label">Select</span>
                    <select className="field bg-transparent" defaultValue="">
                      <option value="" disabled>Choose a service</option>
                      <option>Office interior design</option>
                      <option>Residential interior design</option>
                      <option>Turnkey design &amp; build</option>
                    </select>
                  </label>
                </div>
              </div>
              <div>
                <p className="idx-label mb-5">State messages</p>
                <div className="space-y-4">
                  <div className="form-state" role="status">
                    <CheckCircle2 size={16} />
                    <span>Thank you! Your submission has been received — a designer responds within one working day.</span>
                  </div>
                  <div className="form-state form-error" role="alert">
                    <AlertTriangle size={16} />
                    <span>Oops! Something went wrong while submitting the form. Please try WhatsApp instead.</span>
                  </div>
                  <div className="form-success rounded-[var(--radius-s)] px-4 py-3 text-sm">
                    Inline success note style for field-level confirmation.
                  </div>
                </div>
                <p className="sub-text mt-7">
                  Fields are underline-only with brass focus; the contact form hands off to
                  WhatsApp and email so no lead is lost to a failing backend.
                </p>
              </div>
            </div>
          </Fade>
        </section>

        {/* RICH TEXT */}
        <section>
          <SectionTag id="rich-text" icon={Pilcrow}>Rich text</SectionTag>
          <Fade>
            <div className="sg-panel grid gap-10 lg:grid-cols-2">
              <div className="rich-text">
                <h4>Considered standards for lasting interiors</h4>
                <p>
                  Strategic design insight drives lasting value by blending craft, function and
                  honest material. Every Woodex drawing is buildable, every BOQ transparent, and
                  every timber species named on the invoice before work begins.
                </p>
                <ol>
                  <li>Two to three schematic layouts before detailing</li>
                  <li>Photoreal walkthrough approval before construction</li>
                  <li>Solid-wood furniture from our own workshop</li>
                </ol>
                <h5>Why documentation comes first</h5>
                <p>
                  The most expensive sentence in construction is &ldquo;I thought it would look
                  different.&rdquo; Complete documentation deletes it — which is why every scope,
                  schedule and finish is agreed on paper and in 3D first.
                </p>
              </div>
              <div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-m)]">
                  <Image src="/images/service-3d.jpg" alt="Woodex drawing pack and material samples" fill sizes="(max-width:1024px) 100vw, 46vw" className="object-cover" />
                </div>
                <p className="sub-text mt-4">
                  Rich-text imagery uses 14px radii, 4:3 plates and descriptive, keyword-aware alt
                  text — never decorative imagery without a caption.
                </p>
              </div>
            </div>
          </Fade>
        </section>

        {/* closing */}
        <Fade>
          <div className="sg-panel flex flex-col items-start justify-between gap-7 bg-[var(--color-espresso)] on-dark md:flex-row md:items-center">
            <div>
              <h3 className="!text-[var(--color-cream)]">The system is the brand, made repeatable.</h3>
              <p className="mt-2 text-sm text-[var(--color-cream)]/65">Need a component not listed here? It extends these tokens — it never invents new ones.</p>
            </div>
            <Link href="/" className="btn btn-light shrink-0"><span className="btn-label">Back to home</span><span className="btn-arrow"><ArrowUpRight size={14} /></span></Link>
          </div>
        </Fade>
      </div>
    </article>
  );
}
