import Link from "next/link";
import { ServiceIcon } from "./serviceIcons";

interface ServiceCardProps {
  id: string;
  title: string;
  shortDesc: string;
  icon?: string;
  conditions?: string[];
  sessionLength?: string;
}

/**
 * Icon-led service card.
 *
 * There are no stock photos here by design: a generic clinic photo adds a
 * network request and no information, while the first three conditions treated
 * tell a visitor within a second whether this is the page for their problem.
 */
export default function ServiceCard({
  id,
  title,
  shortDesc,
  icon,
  conditions = [],
}: ServiceCardProps) {
  return (
    <Link
      href={`/services/${id}`}
      className="card-surface card-hover group relative flex h-full flex-col overflow-hidden p-6"
    >
      {/* Corner wash warms up on hover */}
      <span
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary-soft opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />

      <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-xl text-primary ring-1 ring-primary-line transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
        <ServiceIcon name={icon} />
      </span>

      <h3 className="relative mt-5 font-display text-lg font-bold text-foreground">
        {title}
      </h3>

      <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
        {shortDesc}
      </p>

      {conditions.length > 0 && (
        <ul className="relative mt-5 flex flex-wrap gap-1.5">
          {conditions.slice(0, 3).map((condition) => (
            <li
              key={condition}
              className="rounded-full border border-border bg-surface px-2.5 py-1 text-[0.6875rem] font-medium text-muted-foreground"
            >
              {condition}
            </li>
          ))}
        </ul>
      )}

      <span className="relative mt-6 inline-flex items-center gap-1.5 pt-1 text-sm font-semibold text-primary">
        Treatment details
        <svg
          className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-7 7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}
