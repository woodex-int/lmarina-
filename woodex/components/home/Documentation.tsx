'use client';

import Link from 'next/link';
import { ArrowUpRight, FileText, Lamp, Layers, Ruler, Sofa, Calculator } from 'lucide-react';
import { SplitReveal, Fade } from '@/components/Motion';

const DOCS = [
  { icon: Ruler, title: 'Layout & floor plans', copy: 'Furniture, circulation and demolition layouts with measured dimensions.' },
  { icon: Layers, title: 'False-reflected ceiling', copy: 'Rafter, tray and slat ceilings with electrical and beam coordination.' },
  { icon: Lamp, title: 'Lighting & electrical', copy: 'Circuit layouts, switch points, lighting scenes and data planning.' },
  { icon: Sofa, title: 'Furniture joinery drawings', copy: 'Sectioned workshop drawings for every built-in and bespoke piece.' },
  { icon: FileText, title: 'Flooring & finishing schedules', copy: 'Named materials, codes and quantities — matched to real samples.' },
  { icon: Calculator, title: 'Fixed BOQ & Gantt schedule', copy: 'Line-by-line pricing and a dated construction timeline.' },
];

export default function Documentation() {
  return (
    <section className="container-x py-[var(--spacing-section)]">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Fade><span className="eyebrow mb-6">Building documentation</span></Fade>
          <SplitReveal as="h2" className="h2 text-balance">
            Architecture focused on clarity, balance and documentation
          </SplitReveal>
          <Fade delay={0.1}>
            <p className="lead mt-7">
              Nothing is &ldquo;decided on site&rdquo;. Every Woodex project arrives with a complete,
              priced drawing pack — the same documents our own builders and workshop build from,
              so your contractor, your builder and your furniture maker are reading one truth.
            </p>
          </Fade>
          <Fade delay={0.18}>
            <Link href="/services/3d-visualization" className="btn btn-outline mt-9">
              <span className="btn-label">Learn about the drawing pack</span>
              <span className="btn-arrow"><ArrowUpRight size={14} /></span>
            </Link>
          </Fade>
        </div>

        <div className="grid grid-cols-1 gap-px self-start overflow-hidden rounded-[var(--radius-l)] border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2 lg:col-span-7">
          {DOCS.map((d, i) => (
            <Fade key={d.title} delay={(i % 2) * 0.08}>
              <div className="group flex h-full flex-col gap-4 bg-[var(--color-paper)] p-8 transition-colors duration-500 hover:bg-[var(--color-cream)]">
                <d.icon size={22} strokeWidth={1.5} className="text-[var(--color-walnut)] transition-transform duration-500 group-hover:-translate-y-0.5" />
                <h3 className="text-[1.15rem]">{d.title}</h3>
                <p className="text-[0.88rem] leading-relaxed">{d.copy}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
