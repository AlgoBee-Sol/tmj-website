"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import siteData from "@/data/site.json";
import footerData from "@/data/footer.json";
import ThemeToggle from "@/components/theme/ThemeToggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass =
    "relative w-fit font-medium text-muted-foreground transition hover:text-primary " +
    "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 " +
    "after:bg-primary after:transition-all after:duration-300 hover:after:w-full";

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo-tmj.png"
              alt={`${siteData.name} logo`}
              width={40}
              height={40}
              className="rounded-full"
              priority
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold leading-tight text-primary">
                {siteData.name}
              </span>
              <span className="hidden text-xs text-subtle-foreground sm:block">
                {siteData.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {footerData.links.map((link) => (
              <Link key={link.href} href={link.href} className={navLinkClass}>
                {link.label}
              </Link>
            ))}

            <ThemeToggle />

            {/* CTA */}
            <Link
              href="/appointment"
              className="rounded-full bg-primary px-5 py-2 font-medium text-primary-foreground shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-xl"
            >
              Book Appointment
            </Link>
          </nav>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-foreground transition hover:bg-muted"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-border py-4 md:hidden">
            <nav className="flex flex-col gap-4">
              {footerData.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`${navLinkClass} px-2`}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/appointment"
                onClick={() => setIsOpen(false)}
                className="mx-2 rounded-lg bg-primary px-4 py-2 text-center text-primary-foreground transition hover:bg-primary-dark"
              >
                Book Appointment
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
