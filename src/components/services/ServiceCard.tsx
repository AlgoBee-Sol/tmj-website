import Link from "next/link";
import { getServiceIcon } from "./serviceIcons";

interface ServiceCardProps {
  id: string;
  title: string;
  shortDesc: string;
  icon?: string;
  image?: string;
}

export default function ServiceCard({ id, title, shortDesc, icon, image }: ServiceCardProps) {
  const Icon = getServiceIcon(icon);

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-2xl">
      {/* Header — gradient + service icon watermark; a real image overlays it when present */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-sky-600">
        <div className="absolute inset-0 flex items-center justify-center text-white/25">
          <Icon className="h-24 w-24" aria-hidden="true" />
        </div>
        {image && (
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        )}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/65 to-transparent"></div>

        <div className="absolute bottom-4 left-4 z-20">
          <h3 className="text-xl font-bold text-white drop-shadow-md">{title}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-grow flex-col p-6">
        <p className="mb-6 flex-grow text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {shortDesc}
        </p>

        <Link
          href={`/services#${id}`}
          className="inline-flex w-full items-center justify-center rounded-xl border border-border bg-muted px-4 py-3 font-bold text-primary transition-colors duration-200 hover:bg-accent hover:text-accent-foreground group-hover:border-primary/30"
        >
          <span>Learn More</span>
          <svg
            className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
