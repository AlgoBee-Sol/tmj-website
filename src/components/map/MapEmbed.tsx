"use client";

import { useState } from "react";
import { FiMapPin, FiNavigation } from "react-icons/fi";
import { site } from "@/lib/site";

/**
 * Click-to-load Google Maps facade.
 *
 * The Maps embed pulls in several hundred KB of third-party JavaScript and
 * blocks the main thread while it boots. Almost nobody scrolls to the map, so
 * we render a styled placeholder that carries the same information (address +
 * directions link) and only mount the iframe once a visitor asks for it.
 */
export default function MapEmbed({
  className = "",
  title = "The Muscular Junction clinic location",
}: {
  className?: string;
  title?: string;
}) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        src={site.contact.mapEmbedUrl}
        title={title}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        className={`h-full w-full border-0 ${className}`}
      />
    );
  }

  return (
    <div
      className={`relative flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden bg-surface p-6 text-center ${className}`}
    >
      {/* Abstract street grid — evokes a map without loading one */}
      <div
        className="bg-grid pointer-events-none absolute inset-0 text-foreground opacity-[0.07]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(60% 60% at 50% 45%, var(--primary-soft), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-primary)]">
        <span
          className="animate-ping-soft absolute inset-0 rounded-full bg-primary"
          aria-hidden="true"
        />
        <FiMapPin className="relative h-5 w-5" aria-hidden="true" />
      </span>

      <div className="relative">
        <p className="font-semibold text-foreground">{site.name}</p>
        <p className="mt-1 text-sm text-muted-foreground">
          {site.contact.address}
        </p>
      </div>

      <div className="relative flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="rounded-lg border border-border-strong bg-card px-4 py-2 text-sm font-semibold text-foreground shadow-sm transition hover:border-primary-line hover:bg-primary-soft hover:text-primary"
        >
          Load interactive map
        </button>
        <a
          href={site.contact.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary-dark"
        >
          <FiNavigation className="h-4 w-4" aria-hidden="true" />
          Directions
        </a>
      </div>
    </div>
  );
}
