import Link from 'next/link';
import CTA from '@/components/CTA';

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[100svh] flex-col items-center justify-center pb-20 pt-40 text-center">
      <span className="eyebrow center mb-8">Error 404</span>
      <h1 className="display-xl">This room <em className="serif-italic text-[var(--color-walnut)]">doesn’t exist</em></h1>
      <p className="lead mt-8 max-w-md">
        The page you’re looking for has moved, or was never drawn. Let’s get you back into the
        house.
      </p>
      <div className="mt-10 flex gap-4">
        <CTA href="/">Back to home</CTA>
        <Link href="/projects" className="btn btn-outline">
          <span className="btn-label">View projects</span>
        </Link>
      </div>
    </section>
  );
}
