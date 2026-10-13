import { FiArrowUpRight } from "react-icons/fi";
import { site } from "@/lib/site";
export default function GoogleRating({
  variant = "card",
  className = "",
}: {
  variant?: "card" | "inline" | "ink";
  className?: string;
}) {
  return (
    <a
      href={site.rating.url}
      target="_blank"
      rel="noopener noreferrer"
      title={`Owner-confirmed ${site.rating.verifiedAt}; view Google for the latest reviews`}
      className={`review-link ${variant === "ink" ? "review-link-ink" : ""} ${className}`}
    >
      <span className="google-letter" aria-hidden="true">
        G
      </span>
      <span>
        {site.rating.confirmed
          ? `${site.rating.value} · ${site.rating.count} Google reviews`
          : "Read our Google reviews"}
      </span>
      <FiArrowUpRight aria-hidden="true" />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
