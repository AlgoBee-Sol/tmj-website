import { FaInstagram, FaPlay } from "react-icons/fa";

export interface TestimonialCardProps {
  name: string;
  text: string;
  role: string;
  videoUrl: string;
  thumbnail?: string;
}

export default function TestimonialCard({
  name,
  text,
  role,
  videoUrl,
  thumbnail,
}: TestimonialCardProps) {
  return (
    <a
      href={videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Watch ${name}'s video review on Instagram`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-2xl"
    >
      {/* Video thumbnail — branded gradient base; a real thumbnail overlays it when present */}
      <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900">
        {thumbnail && (
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${thumbnail})` }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />

        {/* Instagram badge */}
        <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm">
          <FaInstagram className="text-lg" aria-hidden="true" />
        </span>

        {/* Play button */}
        <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-blue-700 shadow-xl transition-transform duration-300 group-hover:scale-110">
          <FaPlay className="ml-1 text-xl" aria-hidden="true" />
        </span>

        {/* Name / role */}
        <div className="absolute inset-x-0 bottom-0 p-5 text-white">
          <p className="text-lg font-bold drop-shadow">{name}</p>
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-200">
            {role}
          </p>
        </div>
      </div>

      {/* Quote */}
      <div className="flex flex-grow flex-col p-6">
        <p className="flex-grow text-sm leading-relaxed text-muted-foreground line-clamp-3">
          &ldquo;{text}&rdquo;
        </p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary">
          <FaInstagram aria-hidden="true" /> Watch on Instagram
        </span>
      </div>
    </a>
  );
}
