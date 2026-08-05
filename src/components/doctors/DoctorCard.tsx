import Image from "next/image";

interface DoctorCardProps {
  name: string;
  designation: string;
  credentials?: string;
  specializations: string[];
  experienceYears: number;
  bio: string;
  image?: string;
  /** The first card in a grid can preload its portrait as the LCP candidate. */
  priority?: boolean;
}

function getInitials(name: string): string {
  return name
    .replace(/^(Dr|Mr|Ms|Mrs)\.?\s+/i, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w.charAt(0).toUpperCase())
    .join("");
}

export default function DoctorCard({
  name,
  designation,
  credentials,
  specializations,
  experienceYears,
  bio,
  image,
  priority = false,
}: DoctorCardProps) {
  return (
    <article className="card-surface card-hover flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[4/5] overflow-hidden bg-ink">
        {image ? (
          <Image
            src={image}
            alt={`${name}, ${designation} at The Muscular Junction`}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            priority={priority}
            className="object-cover object-top transition-transform duration-500 hover:scale-[1.03]"
          />
        ) : (
          /* Monogram fallback — deliberate, not a broken image */
          <div className="bg-ink-wash absolute inset-0 flex items-center justify-center">
            <span
              className="bg-grid absolute inset-0 text-white opacity-[0.06]"
              aria-hidden="true"
            />
            <span className="relative font-display text-5xl font-bold tracking-wide text-white/85">
              {getInitials(name)}
            </span>
          </div>
        )}

        <span className="absolute left-3 top-3 rounded-full bg-black/45 px-2.5 py-1 text-[0.6875rem] font-semibold text-white backdrop-blur-sm">
          {experienceYears}+ yrs
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold leading-tight text-foreground">
          {name}
          {credentials && (
            <span className="ml-1.5 text-sm font-semibold text-subtle-foreground">
              {credentials}
            </span>
          )}
        </h3>
        <p className="mt-1 text-sm font-semibold text-primary">{designation}</p>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {bio}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5 border-t border-border pt-4">
          {specializations.map((spec) => (
            <li
              key={spec}
              className="rounded-full bg-primary-soft px-2.5 py-1 text-[0.6875rem] font-medium text-primary"
            >
              {spec}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
