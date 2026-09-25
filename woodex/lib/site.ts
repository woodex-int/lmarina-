export const site = {
  name: 'Woodex Interiors',
  legalName: 'Woodex Interiors & Furniture Studio',
  tagline: 'Considered spaces. Crafted in wood.',
  description:
    'Woodex Interiors is a Lahore-based interior design, architecture and custom solid-wood furniture studio crafting offices, homes, retail and hospitality spaces — from first sketch to final fit-out.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://woodex.pk',
  phone: '+92 300 0000000',
  phoneHref: '+923000000000',
  whatsapp: '923000000000',
  email: 'studio@woodex.pk',
  address: {
    street: 'Studio 4, Design Lane, Gulberg III',
    locality: 'Lahore',
    region: 'Punjab',
    postalCode: '54660',
    country: 'Pakistan',
  },
  areasServed: ['Lahore', 'Islamabad', 'Karachi', 'DHA', 'Bahria Town', 'Gulberg', 'Sialkot', 'Gujranwala'],
  founded: '2014',
  hours: 'Mon–Sat, 10:00–19:00 PKT',
  social: {
    instagram: 'https://instagram.com/woodex.pk',
    facebook: 'https://facebook.com/woodex.pk',
    linkedin: 'https://linkedin.com/company/woodex-pk',
    pinterest: 'https://pinterest.com/woodexpk',
  },
};

export type NavItem = { label: string; href: string };
export const nav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: '3D Studio', href: '/3d-studio' },
  { label: 'Projects', href: '/projects' },
  { label: 'Journal', href: '/journal' },
  { label: 'Contact', href: '/contact' },
];
