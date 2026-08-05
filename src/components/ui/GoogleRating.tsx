import Stars from "./Stars";
import { site } from "@/lib/site";

const { value, stars, countLabel, url } = site.rating;

/** Official Google mark, used only to attribute the reviews to their source. */
function GoogleG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.28-3.14.76-4.59l-7.97-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}

const label = `Rated ${value} out of 5 by ${countLabel} patients on Google — opens Google Reviews in a new tab`;

type Variant = "card" | "inline" | "ink";

/**
 * The clinic's Google rating, shown as a single verifiable trust signal that
 * always links out to the real reviews page. Three variants share one set of
 * numbers so the rating can never drift between placements.
 *
 *  · `card`   — boxed, for light sections and the footer
 *  · `inline` — compact pill, for the hero and header
 *  · `ink`    — glass treatment, for dark bands
 */
export default function GoogleRating({
  variant = "card",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  const common =
    "group inline-flex items-center rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2";

  if (variant === "inline" || variant === "ink") {
    const onInk = variant === "ink";
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={`${common} gap-3 py-2 pl-2.5 pr-4 ${
          onInk
            ? "border border-white/15 bg-white/[0.07] text-on-ink backdrop-blur-sm hover:border-white/30 hover:bg-white/[0.12]"
            : "border border-border bg-card text-foreground shadow-sm hover:border-primary-line hover:shadow-md"
        } ${className}`}
      >
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
            onInk ? "bg-white" : "bg-white ring-1 ring-border"
          }`}
        >
          <GoogleG className="h-4 w-4" />
        </span>

        <span className="flex items-center gap-2">
          <span className="tabular text-base font-bold leading-none">
            {value}
          </span>
          <Stars
            value={stars}
            size={14}
            className={onInk ? "text-white/30" : "text-foreground"}
          />
        </span>

        <span
          className={`hidden text-xs font-medium leading-tight sm:block ${
            onInk ? "text-on-ink-muted" : "text-subtle-foreground"
          }`}
        >
          {countLabel} Google
          <br />
          reviews
        </span>
      </a>
    );
  }

  /* card */
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-line hover:shadow-lg ${className}`}
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-border">
        <GoogleG className="h-6 w-6" />
      </span>

      <span className="min-w-0">
        <span className="flex items-center gap-2.5">
          <Stars value={stars} size={17} className="text-foreground" />
          <span className="tabular text-xl font-bold leading-none text-foreground">
            {value}
          </span>
        </span>
        <span className="mt-1.5 block text-sm text-muted-foreground">
          Rated by{" "}
          <span className="font-semibold text-foreground">{countLabel}</span>{" "}
          patients on Google
        </span>
      </span>

      <svg
        viewBox="0 0 24 24"
        className="ml-auto hidden h-4 w-4 shrink-0 text-subtle-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-primary sm:block"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 17 17 7M9 7h8v8"
        />
      </svg>
    </a>
  );
}
