import type { ReactNode } from "react";
export default function PageHero({
  title,
  subtitle,
  eyebrow,
  children,
}: {
  title: string;
  subtitle?: ReactNode;
  eyebrow?: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="container-page">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {subtitle && <p className="lead">{subtitle}</p>}
        {children && <div className="mt-7">{children}</div>}
      </div>
    </section>
  );
}
