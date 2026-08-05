import Link from "next/link";
import { FaRegClock, FaCertificate, FaRegCalendarAlt } from "react-icons/fa";
import { WorkshopIcon } from "./workshopIcons";

export interface WorkshopCardProps {
  id: string;
  title: string;
  shortDesc: string;
  icon?: string;
  duration?: string;
  level?: string;
  date?: string;
  /** Render for placement on a dark band. */
  onInk?: boolean;
}

export default function WorkshopCard({
  id,
  title,
  shortDesc,
  icon,
  duration,
  level,
  date,
  onInk = false,
}: WorkshopCardProps) {
  const shell = onInk
    ? "border-white/10 bg-white/[0.04] hover:border-white/25 hover:bg-white/[0.07]"
    : "card-surface card-hover";

  return (
    <article
      className={`group flex h-full flex-col rounded-2xl p-6 transition-all duration-300 ${
        onInk ? `border ${shell}` : shell
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-xl ${
            onInk
              ? "bg-white/10 text-teal ring-1 ring-white/15"
              : "bg-primary-soft text-primary ring-1 ring-primary-line"
          }`}
        >
          <WorkshopIcon name={icon} />
        </span>

        {level && (
          <span
            className={`rounded-full px-2.5 py-1 text-[0.6875rem] font-semibold ${
              onInk
                ? "bg-white/10 text-on-ink-muted"
                : "bg-surface text-muted-foreground"
            }`}
          >
            {level}
          </span>
        )}
      </div>

      <h3
        className={`mt-5 font-display text-lg font-bold leading-tight ${
          onInk ? "text-on-ink" : "text-foreground"
        }`}
      >
        {title}
      </h3>

      <p
        className={`mt-2 flex-1 text-sm leading-relaxed ${
          onInk ? "text-on-ink-muted" : "text-muted-foreground"
        }`}
      >
        {shortDesc}
      </p>

      <div
        className={`mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t pt-4 text-xs ${
          onInk
            ? "border-white/10 text-on-ink-muted"
            : "border-border text-muted-foreground"
        }`}
      >
        {date && (
          <span className="inline-flex items-center gap-1.5">
            <FaRegCalendarAlt
              className={onInk ? "text-teal" : "text-primary"}
              aria-hidden="true"
            />
            {date}
          </span>
        )}
        {duration && (
          <span className="inline-flex items-center gap-1.5">
            <FaRegClock
              className={onInk ? "text-teal" : "text-primary"}
              aria-hidden="true"
            />
            {duration}
          </span>
        )}
      </div>

      <Link
        href={`/workshops/${id}`}
        className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold ${
          onInk ? "text-teal hover:text-white" : "text-primary"
        }`}
      >
        <FaCertificate className="text-xs" aria-hidden="true" />
        Details &amp; registration
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
      </Link>
    </article>
  );
}
