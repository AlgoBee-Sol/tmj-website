import type { Metadata } from "next";
import { FiPhone, FiMail, FiMapPin, FiMessageSquare } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import PageHero from "@/components/layout/PageHero";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import LocationSection from "@/components/home/LocationSection";
import CtaBand from "@/components/ui/CtaBand";
import GoogleRating from "@/components/ui/GoogleRating";
import {
  site,
  telHref,
  mailHref,
  waHref,
  defaultWaMessage,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Location — Physiotherapy Clinic in Islamabad",
  description:
    "Contact The Muscular Junction physiotherapy clinic in Zone V, River Gardens, Islamabad. Call, WhatsApp or email to book an appointment. Open Mon–Fri 9am–9pm, Sat 10am–6pm.",
  alternates: { canonical: "/contact" },
};

const channels = [
  {
    Icon: FaWhatsapp,
    title: "WhatsApp",
    detail: "Fastest — usually answered same day",
    action: "Start a chat",
    href: waHref(defaultWaMessage),
    accent: "text-[var(--whatsapp)]",
  },
  {
    Icon: FiPhone,
    title: "Phone",
    detail: site.contact.phone,
    action: "Call the clinic",
    href: telHref,
    accent: "text-primary",
  },
  {
    Icon: FiMail,
    title: "Email",
    detail: site.contact.email,
    action: "Send an email",
    href: mailHref,
    accent: "text-primary",
  },
  {
    Icon: FiMessageSquare,
    title: "Booking form",
    detail: "Tell us the details up front",
    action: "Open the form",
    href: "/appointment",
    accent: "text-primary",
  },
];

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Contact Us", path: "/contact" }]} />

      <PageHero
        eyebrow="Get In Touch"
        title="Contact The Muscular Junction"
        subtitle={`We are in ${site.contact.address}. Reach us whichever way suits you — WhatsApp is usually the quickest.`}
      />

      <section className="section">
        <div className="container-page">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map(({ Icon, title, detail, action, href, accent }) => {
              return (
                <a
                  key={title}
                  href={href}
                  {...(href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="card-surface card-hover group flex flex-col p-6"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface text-xl ring-1 ring-border">
                    <Icon className={accent} aria-hidden="true" />
                  </span>

                  <h2 className="mt-5 font-display text-lg font-bold text-foreground">
                    {title}
                  </h2>
                  <p className="mt-1 flex-1 break-words text-sm text-muted-foreground">
                    {detail}
                  </p>

                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    {action}
                    <svg
                      className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14m-6-7 7 7-7 7"
                      />
                    </svg>
                  </span>
                </a>
              );
            })}
          </div>

          <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-border bg-surface p-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="flex items-center gap-3 text-sm text-muted-foreground">
              <FiMapPin
                className="h-5 w-5 shrink-0 text-primary"
                aria-hidden="true"
              />
              <span>
                <span className="font-semibold text-foreground">
                  Visiting us?
                </span>{" "}
                We are on the ground floor with parking outside.
              </span>
            </p>
            <GoogleRating variant="inline" />
          </div>
        </div>
      </section>

      <LocationSection />
      <CtaBand />
    </>
  );
}
