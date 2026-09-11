import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/inter/wght.css';
import '@fontsource-variable/fraunces/wght.css';
import '@fontsource-variable/fraunces/wght-italic.css';
import './globals.css';

import SmoothScroll from '@/components/SmoothScroll';
import Preloader from '@/components/Preloader';
import Cursor from '@/components/Cursor';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFab from '@/components/WhatsAppFab';
import JsonLd from '@/components/JsonLd';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Woodex Interiors | Interior Designers & Custom Furniture Studio in Lahore',
    template: '%s | Woodex Interiors',
  },
  description: site.description,
  keywords: [
    'interior designer lahore',
    'office interior design lahore',
    'architects in lahore',
    'custom furniture lahore',
    'turnkey interior Pakistan',
    '3D interior rendering',
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: site.url,
    siteName: site.name,
    title: 'Woodex Interiors | Considered spaces. Crafted in wood.',
    description: site.description,
    images: [{ url: '/images/hero-office.jpg', width: 1600, height: 900, alt: 'Woodex Interiors — warm walnut office interior' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Woodex Interiors | Considered spaces. Crafted in wood.',
    description: site.description,
    images: ['/images/hero-office.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: '#17120d',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
};

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'InteriorDesigner',
  '@id': `${site.url}/#organization`,
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  logo: `${site.url}/favicon.svg`,
  image: `${site.url}/images/hero-office.jpg`,
  description: site.description,
  telephone: site.phone,
  email: site.email,
  foundingDate: site.founded,
  priceRange: '$$–$$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: 'PK',
  },
  geo: { '@type': 'GeoCoordinates', addressLocality: 'Lahore, Pakistan' },
  areaServed: site.areasServed.map((name) => ({ '@type': 'City', name })),
  openingHours: 'Mo-Sa 10:00-19:00',
  sameAs: Object.values(site.social),
  knowsAbout: [
    'Office interior design',
    'Residential interior design',
    'Retail and showroom design',
    'Custom solid wood furniture',
    '3D architectural visualization',
    'Turnkey design and build',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="grain antialiased">
        <JsonLd data={orgJsonLd} />
        <Preloader />
        <Cursor />
        <SmoothScroll>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <WhatsAppFab />
        </SmoothScroll>
      </body>
    </html>
  );
}
