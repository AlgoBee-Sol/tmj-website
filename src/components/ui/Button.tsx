import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "whatsapp" | "on-ink";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-xl font-semibold " +
  "transition-all duration-200 whitespace-nowrap " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 " +
  "disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground shadow-[var(--shadow-primary)] hover:bg-primary-dark hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "border border-border-strong bg-card text-foreground shadow-sm hover:border-primary-line hover:bg-primary-soft hover:text-primary hover:-translate-y-0.5 active:translate-y-0",
  ghost: "text-primary hover:bg-primary-soft",
  whatsapp:
    "bg-[var(--whatsapp)] text-white shadow-[0_8px_24px_rgb(37_211_102/0.3)] hover:bg-[var(--whatsapp-dark)] hover:-translate-y-0.5 active:translate-y-0",
  "on-ink":
    "border border-white/20 bg-white/10 text-white backdrop-blur-sm hover:border-white/35 hover:bg-white/20 hover:-translate-y-0.5 active:translate-y-0",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

interface ButtonProps {
  children: ReactNode;
  /** Internal route (next/link) or absolute/`tel:`/`mailto:` URL (<a>). */
  href: string;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  className?: string;
  "aria-label"?: string;
}

/**
 * The single call-to-action surface for the site. Everything that looks like a
 * button routes through here so hit areas, focus rings and hover motion stay
 * identical across pages.
 */
export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  external,
  className = "",
  ...rest
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const isExternal =
    external ?? /^(https?:|tel:|mailto:)/.test(href);

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
