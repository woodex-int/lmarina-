import type { ReactNode } from 'react';

export default function Marquee({
  children,
  reverse = false,
  className = '',
  speed = 28,
  ariaLabel,
}: {
  children: ReactNode;
  reverse?: boolean;
  className?: string;
  speed?: number;
  ariaLabel?: string;
}) {
  const items = Array.isArray(children) ? children : [children];
  return (
    <div
      className={`marquee ${reverse ? 'marquee-reverse' : ''} ${className}`}
      style={{ animationDuration: `${speed}s` }}
      aria-label={ariaLabel}
      role="marquee"
    >
      <div className="marquee-track" style={{ animationDuration: `${speed}s` }}>
        <div className="flex shrink-0 items-center">{items.map((c, i) => <div key={i} className="flex items-center">{c}</div>)}</div>
        <div className="flex shrink-0 items-center" aria-hidden>{items.map((c, i) => <div key={i} className="flex items-center">{c}</div>)}</div>
      </div>
    </div>
  );
}
