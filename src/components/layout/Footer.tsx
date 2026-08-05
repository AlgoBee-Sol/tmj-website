import Link from "next/link";
import Image from "next/image";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import navData from "@/data/nav.json";
import servicesData from "@/data/services.json";
import GoogleRating from "@/components/ui/GoogleRating";
import MapEmbed from "@/components/map/MapEmbed";
import { site, socialLinks, telHref, mailHref } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* ---- Identity + socials ---- */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo-tmj.webp"
                alt=""
                width={44}
                height={44}
                loading="lazy"
                className="h-11 w-11 rounded-full"
              />
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-bold text-foreground">
                  The Muscular Junction
                </span>
                <span className="mt-1 text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-subtle-foreground">
                  Physiotherapy &amp; Rehabilitation
                </span>
              </span>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {navData.about}
            </p>

            <div className="mt-6 flex gap-2.5">
              {socialLinks.map(({ href, label, Icon, brand }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{ "--brand": brand } as React.CSSProperties}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--brand)] hover:bg-[var(--brand)] hover:text-white"
                >
                  <Icon className="text-[1.05rem]" aria-hidden="true" />
                </a>
              ))}
            </div>

            <GoogleRating variant="card" className="mt-6 max-w-sm" />
          </div>

          {/* ---- Clinic links ---- */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
              Clinic
            </h2>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              {navData.footerClinic.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ---- Services (deep links help internal crawl depth) ---- */}
          <div className="lg:col-span-3">
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
              Treatments
            </h2>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.id}`}
                    className="text-muted-foreground transition hover:text-primary"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ---- NAP ---- */}
          <div className="lg:col-span-3">
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
              Visit Us
            </h2>

            <ul className="mt-5 flex flex-col gap-4 text-sm">
              <li className="flex items-start gap-3">
                <FiMapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <a
                  href={site.contact.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="not-italic text-muted-foreground transition hover:text-primary"
                >
                  <address className="not-italic">
                    {site.contact.streetAddress}
                    <br />
                    {site.contact.locality}, {site.contact.countryName}
                  </address>
                </a>
              </li>

              <li className="flex items-start gap-3">
                <FiPhone
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <a
                  href={telHref}
                  className="font-medium text-foreground transition hover:text-primary"
                >
                  {site.contact.phone}
                </a>
              </li>

              <li className="flex items-start gap-3">
                <FiMail
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <a
                  href={mailHref}
                  className="break-all text-muted-foreground transition hover:text-primary"
                >
                  {site.contact.email}
                </a>
              </li>

              <li className="flex items-start gap-3">
                <FiClock
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <div className="text-muted-foreground">
                  {site.hours.schedule.map((row) => (
                    <div key={row.days} className="flex gap-2">
                      <span>{row.days}</span>
                      <span
                        className={
                          row.closed ? "font-medium text-subtle-foreground" : ""
                        }
                      >
                        {row.closed ? "Closed" : `${row.opens} – ${row.closes}`}
                      </span>
                    </div>
                  ))}
                </div>
              </li>
            </ul>

            <div className="mt-5 h-40 overflow-hidden rounded-xl border border-border">
              <MapEmbed />
            </div>
          </div>
        </div>

        {/* ---- Bottom ---- */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-7 text-xs text-subtle-foreground sm:flex-row">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>
            Physiotherapy &amp; rehabilitation in {site.contact.address}
          </p>
        </div>
      </div>
    </footer>
  );
}
