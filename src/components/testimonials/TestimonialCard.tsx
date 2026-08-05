import Image from "next/image";
import { FaInstagram, FaPlay, FaQuoteLeft } from "react-icons/fa";
import Stars from "@/components/ui/Stars";

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
      aria-label={`Watch ${name}'s video review on Instagram — opens in a new tab`}
      className="card-surface card-hover group flex h-full flex-col p-6"
    >
      <div className="flex items-center justify-between">
        <Stars value={5} size={15} className="text-foreground" />
        <FaQuoteLeft
          className="text-2xl text-primary-soft"
          aria-hidden="true"
        />
      </div>

      <blockquote className="mt-4 flex-1 text-[0.9375rem] leading-relaxed text-muted-foreground">
        &ldquo;{text}&rdquo;
      </blockquote>

      <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
        <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary-soft text-sm font-bold text-primary">
          {thumbnail ? (
            <Image
              src={thumbnail}
              alt=""
              fill
              sizes="44px"
              loading="lazy"
              className="object-cover"
            />
          ) : (
            name
              .replace(/^(Dr|Mr|Ms|Mrs|Brig)\.?\s+/i, "")
              .charAt(0)
              .toUpperCase()
          )}
        </span>

        <span className="min-w-0 flex-1">
          <span className="block truncate text-sm font-bold text-foreground">
            {name}
          </span>
          <span className="block truncate text-xs text-subtle-foreground">
            {role}
          </span>
        </span>

        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
          <FaPlay className="ml-0.5 text-[0.7rem]" aria-hidden="true" />
        </span>
      </figcaption>

      <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-subtle-foreground transition-colors group-hover:text-primary">
        <FaInstagram aria-hidden="true" />
        Watch the full story on Instagram
      </span>
    </a>
  );
}
