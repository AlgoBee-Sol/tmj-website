interface DoctorCardProps {
  name: string;
  designation: string;
  specializations: string[];
  experienceYears: number;
  bio: string;
  image?: string;
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
  specializations,
  experienceYears,
  bio,
  image,
}: DoctorCardProps) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl md:flex-row">
      {/* Image Side — initials avatar fallback; a real photo overlays it when present */}
      <div className="relative h-72 overflow-hidden bg-gradient-to-br from-blue-600 to-sky-600 md:h-auto md:min-h-[18rem] md:w-2/5">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl font-bold tracking-wide text-white/90">{getInitials(name)}</span>
        </div>
        {image && (
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/10"></div>
      </div>

      {/* Content Side */}
      <div className="flex flex-col justify-center p-8 md:w-3/5">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-foreground transition-colors group-hover:text-primary">
            {name}
          </h3>
          <div className="mb-1 mt-2 h-1 w-12 rounded-full bg-primary"></div>
          <p className="font-semibold text-primary">{designation}</p>
        </div>

        <div className="mb-6 space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="rounded bg-accent p-1 text-accent-foreground">🏆</span>
            <span>{specializations.join(", ")}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded bg-accent p-1 text-accent-foreground">⏳</span>
            <span>{experienceYears}+ Years Experience</span>
          </div>
        </div>

        <p className="border-l-4 border-primary/20 pl-4 text-sm italic leading-relaxed text-subtle-foreground">
          &quot;{bio}&quot;
        </p>
      </div>
    </div>
  );
}
