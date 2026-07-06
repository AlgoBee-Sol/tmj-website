"use client";

import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

/**
 * Light/Dark theme toggle.
 * The initial theme is applied by an inline script in the root layout
 * (before paint) to avoid a flash of the wrong theme. This component only
 * reads the current state on mount and lets the user switch it.
 */
export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    const root = document.documentElement;
    root.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* ignore storage errors (private mode, etc.) */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-muted hover:text-primary ${className}`}
    >
      {/* Render icon only after mount so SSR/CSR markup matches */}
      {mounted &&
        (isDark ? (
          <FiSun className="h-5 w-5" aria-hidden="true" />
        ) : (
          <FiMoon className="h-5 w-5" aria-hidden="true" />
        ))}
    </button>
  );
}
