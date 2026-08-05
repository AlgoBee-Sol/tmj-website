"use client";

import { FiSun, FiMoon } from "react-icons/fi";

/**
 * Light/dark toggle.
 *
 * The current theme lives in one place — the `dark` class on <html>, set before
 * paint by the inline script in the root layout. Rather than mirroring that into
 * React state (which means an effect, a hydration guard and a render pass), both
 * icons are rendered and CSS picks the right one. The click handler only has to
 * flip the class and persist the choice.
 */
export default function ThemeToggle({ className = "" }: { className?: string }) {
  const toggle = () => {
    const root = document.documentElement;
    const isDark = root.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      /* storage unavailable (private mode) — the toggle still works this session */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      className={`flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-colors hover:bg-surface hover:text-primary ${className}`}
    >
      <FiMoon className="h-[1.1rem] w-[1.1rem] dark:hidden" aria-hidden="true" />
      <FiSun
        className="hidden h-[1.1rem] w-[1.1rem] dark:block"
        aria-hidden="true"
      />
    </button>
  );
}
