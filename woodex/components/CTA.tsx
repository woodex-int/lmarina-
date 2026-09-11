import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function ArrowCircle({ light = false }: { light?: boolean }) {
  return (
    <span className="btn-arrow">
      <ArrowUpRight size={14} strokeWidth={2} />
    </span>
  );
}

export default function CTA({
  children,
  href = '/contact',
  variant = 'dark',
  className = '',
}: {
  children: React.ReactNode;
  href?: string;
  variant?: 'dark' | 'light' | 'outline' | 'outline-light';
  className?: string;
}) {
  const map = { dark: '', light: 'btn-light', outline: 'btn-outline', 'outline-light': 'btn-outline-light' };
  const external = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
  const classes = `btn ${map[variant]} ${className}`;
  const inner = (
    <>
      <span className="btn-label">{children}</span>
      <ArrowCircle />
    </>
  );
  if (external)
    return (
      <a href={href} className={classes} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
        {inner}
      </a>
    );
  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}
