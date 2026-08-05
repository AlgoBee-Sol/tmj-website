"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiPhone, FiMapPin, FiClock, FiX, FiMenu } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import navData from "@/data/nav.json";
import ThemeToggle from "@/components/theme/ThemeToggle";
import GoogleRating from "@/components/ui/GoogleRating";
import { site, telHref, waHref, defaultWaMessage } from "@/lib/site";

/**
 * `/services/manual-therapy` should still light up the "Services" tab.
 *
 * Anchor links (e.g. `/services#conditions`) never count as active: the target
 * is a section, not a page, and matching on the path alone would light up two
 * tabs at once.
 */
function isActive(pathname: string, href: string) {
  if (href.includes("#")) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Lock the page behind the drawer while it is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* ---------- Utility bar: NAP above the fold, scrolls away ---------- */}
      <div className="hidden bg-ink text-on-ink-muted lg:block">
        <div className="container-page flex h-11 items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <a
              href={site.contact.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition hover:text-on-ink"
            >
              <FiMapPin className="h-3.5 w-3.5 text-teal" aria-hidden="true" />
              {site.contact.address}
            </a>
            <span className="flex items-center gap-2">
              <FiClock className="h-3.5 w-3.5 text-teal" aria-hidden="true" />
              {site.hours.summary}
            </span>
          </div>

          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping-soft absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Accepting new patients
            </span>
            <a
              href={telHref}
              className="flex items-center gap-2 font-semibold text-on-ink transition hover:text-teal"
            >
              <FiPhone className="h-3.5 w-3.5" aria-hidden="true" />
              {site.contact.phone}
            </a>
          </div>
        </div>
      </div>

      {/* ---------- Main bar ---------- */}
      <header className="sticky top-0 z-50 border-b border-border bg-card/85 backdrop-blur-md">
        <div className="container-page flex h-[4.5rem] items-center justify-between gap-4">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3"
            aria-label={`${site.name} — home`}
          >
            <Image
              src="/images/logo-tmj.webp"
              alt=""
              width={44}
              height={44}
              priority
              className="h-11 w-11 rounded-full"
            />
            <span className="flex flex-col leading-none">
              <span className="font-display text-[1.0625rem] font-bold tracking-tight text-foreground">
                The Muscular Junction
              </span>
              <span className="mt-1 hidden text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-subtle-foreground sm:block">
                Physiotherapy &amp; Rehabilitation
              </span>
            </span>
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 lg:flex"
          >
            {navData.primary.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "bg-primary-soft text-primary"
                      : "text-muted-foreground hover:bg-surface hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />

            <Link
              href="/appointment"
              className="hidden rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-primary)] transition hover:-translate-y-0.5 hover:bg-primary-dark sm:inline-flex"
            >
              Book Appointment
            </Link>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-foreground transition hover:bg-surface lg:hidden"
            >
              <FiMenu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* ---------- Mobile drawer ---------- */}
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 h-full w-full bg-ink/60 backdrop-blur-sm"
          />

          <div className="absolute inset-y-0 right-0 flex w-[min(21rem,88vw)] flex-col overflow-y-auto border-l border-border bg-background shadow-lg">
            <div className="flex h-[4.5rem] shrink-0 items-center justify-between border-b border-border px-5">
              <span className="font-display font-bold text-foreground">
                Menu
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-foreground transition hover:bg-surface"
              >
                <FiX className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Mobile" className="flex flex-col gap-1 p-4">
              {navData.primary.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-[0.9375rem] font-medium transition ${
                    isActive(pathname, link.href)
                      ? "bg-primary-soft text-primary"
                      : "text-foreground hover:bg-surface"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto space-y-3 border-t border-border p-4">
              <GoogleRating variant="card" />

              <Link
                href="/appointment"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center rounded-xl bg-primary px-5 py-3.5 font-semibold text-primary-foreground shadow-[var(--shadow-primary)]"
              >
                Book Appointment
              </Link>
              <a
                href={waHref(defaultWaMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--whatsapp)] px-5 py-3.5 font-semibold text-white"
              >
                <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
                Chat on WhatsApp
              </a>
              <a
                href={telHref}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-border-strong px-5 py-3 font-semibold text-foreground"
              >
                <FiPhone className="h-4 w-4" aria-hidden="true" />
                {site.contact.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
