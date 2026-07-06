import Link from "next/link";
import { FaRegClock, FaCertificate, FaArrowRight } from "react-icons/fa";
import { getWorkshopIcon } from "./workshopIcons";

export interface WorkshopCardProps {
  id: string;
  title: string;
  shortDesc: string;
  icon?: string;
  duration?: string;
  level?: string;
  image?: string;
}

export default function WorkshopCard({
  id,
  title,
  shortDesc,
  icon,
  duration,
  level,
  image,
}: WorkshopCardProps) {
  const Icon = getWorkshopIcon(icon);

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-2xl">
      {/* Media / Icon header — gradient base so a missing image still looks intentional */}
      <div className="relative h-40 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-sky-600">
        {image && (
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${image})` }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />

        {/* Icon badge */}
        <div className="absolute bottom-0 left-6 translate-y-1/2">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-card text-2xl text-primary shadow-lg ring-1 ring-border transition-transform duration-300 group-hover:scale-105">
            <Icon aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-grow flex-col p-6 pt-12">
        <h3 className="mb-3 text-lg font-bold text-foreground">{title}</h3>
        <p className="mb-5 flex-grow text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {shortDesc}
        </p>

        {/* Meta chips */}
        {(duration || level) && (
          <div className="mb-5 flex flex-wrap gap-2">
            {duration && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
                <FaRegClock className="text-primary" aria-hidden="true" />
                {duration}
              </span>
            )}
            {level && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                <FaCertificate className="text-primary" aria-hidden="true" />
                {level}
              </span>
            )}
          </div>
        )}

        <Link
          href={`/workshops/${id}`}
          className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-primary-dark"
        >
          View details &amp; register
          <FaArrowRight className="text-xs transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
