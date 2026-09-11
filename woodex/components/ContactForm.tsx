'use client';

import { useState } from 'react';
import { Check, ArrowUpRight } from 'lucide-react';
import { site } from '@/lib/site';

const services = [
  'Office interior design',
  'Residential interior design',
  'Retail / showroom',
  'Custom furniture',
  '3D visualization',
  'Turnkey design & build',
  'Not sure yet',
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: services[0], area: '', message: '' });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handoff to WhatsApp + email — swap for an API route / CRM in production.
    const text = encodeURIComponent(
      `New enquiry — Woodex Interiors%0AName: ${form.name}%0APhone: ${form.phone}%0AService: ${form.service}%0AArea: ${form.area}%0A%0A${form.message}`
    );
    window.open(`https://wa.me/${site.whatsapp}?text=${text}`, '_blank');
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center rounded-[var(--radius-l)] border border-[var(--color-line)] p-12 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-[var(--color-walnut)] text-[var(--color-cream)]">
          <Check size={26} />
        </span>
        <h3 className="mt-7 font-[family-name:var(--font-display)] text-3xl">Thank you, {form.name.split(' ')[0]}.</h3>
        <p className="lead mt-4 max-w-md">
          Your brief has opened in WhatsApp. If it did not, email us directly at{' '}
          <a href={`mailto:${site.email}`} className="text-[var(--color-walnut)] underline underline-offset-4">{site.email}</a>{' '}
          — a designer responds within one working day.
        </p>
        <button onClick={() => setSent(false)} className="btn btn-outline mt-8">
          <span className="btn-label">Send another brief</span>
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-[var(--radius-l)] border border-[var(--color-line)] bg-[var(--color-cream)] p-8 md:p-12">
      <div className="grid grid-cols-1 gap-x-8 gap-y-2 md:grid-cols-2">
        <label className="field-label">
          <span className="idx-label">Full name *</span>
          <input required value={form.name} onChange={set('name')} className="field" placeholder="Your name" />
        </label>
        <label className="field-label">
          <span className="idx-label">Phone / WhatsApp *</span>
          <input required type="tel" value={form.phone} onChange={set('phone')} className="field" placeholder="03xx xxxxxxx" />
        </label>
        <label className="field-label">
          <span className="idx-label">Email</span>
          <input type="email" value={form.email} onChange={set('email')} className="field" placeholder="you@company.com" />
        </label>
        <label className="field-label">
          <span className="idx-label">Property area</span>
          <input value={form.area} onChange={set('area')} className="field" placeholder="e.g. 8,000 sq ft office, DHA" />
        </label>
        <label className="field-label md:col-span-2">
          <span className="idx-label">What do you need? *</span>
          <select required value={form.service} onChange={set('service')} className="field bg-transparent">
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </label>
        <label className="field-label md:col-span-2">
          <span className="idx-label">Tell us about the space</span>
          <textarea rows={4} value={form.message} onChange={set('message')} className="field resize-none" placeholder="Location, timeline, anything you already know…" />
        </label>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-5">
        <p className="max-w-xs text-xs leading-relaxed text-[var(--color-fog)]">
          By sending, you agree to be contacted about your enquiry. We never share client details.
        </p>
        <button type="submit" className="btn">
          <span className="btn-label">Send design brief</span>
          <span className="btn-arrow"><ArrowUpRight size={14} /></span>
        </button>
      </div>
    </form>
  );
}
