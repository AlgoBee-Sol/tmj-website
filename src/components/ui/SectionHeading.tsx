import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  /** Render on a dark band. */
  onInk?: boolean;
  /** Heading level — sections below the page <h1> should stay h2. */
  as?: "h1" | "h2" | "h3";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  onInk = false,
  as: Tag = "h2",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={`${centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow && (
        <span
          className={`eyebrow ${centered ? "eyebrow-center" : ""} ${
            onInk ? "text-teal" : ""
          }`}
        >
          {eyebrow}
        </span>
      )}

      <Tag
        className={`mt-4 text-balance ${Tag === "h1" ? "display-1" : "display-2"} ${
          onInk ? "text-on-ink" : "text-foreground"
        }`}
      >
        {title}
      </Tag>

      {description && (
        <p
          className={`lead mt-5 ${onInk ? "text-on-ink-muted" : "text-muted-foreground"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
