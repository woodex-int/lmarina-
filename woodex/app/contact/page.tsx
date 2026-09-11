import type { Metadata } from 'next';
import { MapPin, Mail, Phone, Clock, MessageCircle } from 'lucide-react';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import { Fade } from '@/components/Motion';
import JsonLd from '@/components/JsonLd';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact Woodex Interiors — Book a Free Design Consultation in Lahore',
  description:
    'Book a free interior design consultation with Woodex in Lahore. Share your floor plan, budget band and timeline — first site visit and test-fit are complimentary. Call, WhatsApp or visit our Gulberg studio.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact Woodex Interiors',
          url: `${site.url}/contact`,
          mainEntity: { '@id': `${site.url}/#organization` },
        }}
      />
      <PageHero
        eyebrow="Start a project"
        title="Tell us about the space. | We’ll bring the plan."
        copy="Share your floor plan, your deadline and what success looks like. The first site visit, test-fit and budget band are free — usually scheduled within 48 hours."
      />

      <section className="container-x py-[var(--spacing-section)]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Fade>
              <div className="space-y-8">
                <div className="border-t border-[var(--color-line)] pt-6">
                  <p className="idx-label mb-3">Studio</p>
                  <p className="flex gap-3 text-[1.05rem]">
                    <MapPin size={18} className="mt-1 shrink-0 text-[var(--color-walnut)]" />
                    {site.address.street}, {site.address.locality}, {site.address.region}, {site.address.country}
                  </p>
                </div>
                <div className="border-t border-[var(--color-line)] pt-6">
                  <p className="idx-label mb-3">Direct</p>
                  <a href={`tel:${site.phoneHref}`} className="flex items-center gap-3 text-[1.05rem] hover:text-[var(--color-walnut)]">
                    <Phone size={18} className="text-[var(--color-walnut)]" /> {site.phone}
                  </a>
                  <a href={`mailto:${site.email}`} className="mt-3 flex items-center gap-3 text-[1.05rem] hover:text-[var(--color-walnut)]">
                    <Mail size={18} className="text-[var(--color-walnut)]" /> {site.email}
                  </a>
                </div>
                <div className="border-t border-[var(--color-line)] pt-6">
                  <p className="idx-label mb-3">Hours</p>
                  <p className="flex gap-3 text-[1.05rem]">
                    <Clock size={18} className="mt-1 shrink-0 text-[var(--color-walnut)]" /> {site.hours}
                  </p>
                </div>
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-[var(--radius-m)] bg-[var(--color-espresso)] p-6 text-[var(--color-cream)] transition-colors hover:bg-[var(--color-walnut)]"
                >
                  <div>
                    <p className="font-[family-name:var(--font-display)] text-xl">Prefer WhatsApp?</p>
                    <p className="mt-1 text-sm text-[var(--color-cream)]/70">Fastest response during studio hours</p>
                  </div>
                  <MessageCircle size={26} />
                </a>
              </div>
            </Fade>
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
