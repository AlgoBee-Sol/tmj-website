import type { ReactNode } from "react";

interface PageHeroProps {
  title: string;
  subtitle?: ReactNode;
  eyebrow?: string;
  children?: ReactNode;
}

/** Shared inner-page header. One ink band, one type scale, every route. */
export default function PageHero({
  title,
  subtitle,
  eyebrow,
  children,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <div className="bg-ink-wash absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className="bg-grid absolute inset-0 -z-10 text-white opacity-[0.05]"
        aria-hidden="true"
      />

      <div className="container-page py-16 text-center md:py-20">
        {eyebrow && (
          <span className="eyebrow eyebrow-center text-teal">{eyebrow}</span>
        )}

        <h1 className="display-1 mx-auto mt-4 max-w-4xl text-balance text-white">
          {title}
        </h1>

        {subtitle && (
          <p className="lead mx-auto mt-5 max-w-2xl text-on-ink-muted">
            {subtitle}
          </p>
        )}

        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
