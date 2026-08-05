import type { Metadata } from "next";
import { FiPhone, FiClock, FiCheck, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import AppointmentForm from "@/components/appointment/AppointmentForm";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import GoogleRating from "@/components/ui/GoogleRating";
import Stars from "@/components/ui/Stars";
import { site, telHref, waHref, defaultWaMessage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Physiotherapy Appointment in Islamabad",
  description:
    "Book a physiotherapy appointment at The Muscular Junction, River Gardens, Islamabad — instantly on WhatsApp or through our online form. No referral needed, same-day confirmation.",
  alternates: { canonical: "/appointment" },
};

const included = [
  "A full 45–60 minute physical assessment",
  "A clear explanation of what is causing your symptoms",
  "An honest estimate of how many sessions you need",
  "Treatment started in the same visit where appropriate",
];

export default function AppointmentPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ name: "Book Appointment", path: "/appointment" }]}
      />

      <section className="section-tight bg-surface">
        <div className="container-page">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="eyebrow eyebrow-center">Book an Appointment</span>
            <h1 className="display-1 mt-4 text-balance text-foreground">
              Your recovery starts with an assessment
            </h1>
            <p className="lead mt-5 text-muted-foreground">
              Send a request and our team will confirm your slot — usually the
              same day. No doctor&apos;s referral required.
            </p>
          </div>

          <div className="grid overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-lg)] lg:grid-cols-5">
            {/* ---- Reassurance panel ---- */}
            <div className="relative isolate overflow-hidden bg-ink p-8 text-white md:p-10 lg:col-span-2">
              <div
                className="bg-ink-wash absolute inset-0 -z-10"
                aria-hidden="true"
              />

              <h2 className="display-3 text-white">
                What your first visit includes
              </h2>

              <ul className="mt-7 space-y-3.5">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal/20 text-teal">
                      <FiCheck className="h-3 w-3" aria-hidden="true" />
                    </span>
                    <span className="text-sm leading-relaxed text-on-ink-muted">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="my-8 rule-ink" />

              <div className="space-y-3">
                <a
                  href={waHref(defaultWaMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 rounded-xl bg-[var(--whatsapp)] px-6 py-3.5 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[var(--whatsapp-dark)]"
                >
                  <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
                  Chat on WhatsApp
                </a>
                <a
                  href={telHref}
                  className="flex items-center justify-center gap-2.5 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  <FiPhone className="h-4 w-4" aria-hidden="true" />
                  {site.contact.phone}
                </a>
              </div>

              <dl className="mt-8 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <FiClock
                    className="mt-0.5 h-4 w-4 shrink-0 text-teal"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="font-semibold text-white">Opening hours</dt>
                    {site.hours.schedule.map((row) => (
                      <dd key={row.days} className="text-on-ink-muted">
                        {row.days}:{" "}
                        {row.closed
                          ? "Closed"
                          : `${row.opens} – ${row.closes}`}
                      </dd>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FiMapPin
                    className="mt-0.5 h-4 w-4 shrink-0 text-teal"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="font-semibold text-white">Clinic</dt>
                    <dd className="text-on-ink-muted">
                      {site.contact.address}
                    </dd>
                  </div>
                </div>
              </dl>

              <a
                href={site.rating.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] p-3.5 transition hover:bg-white/10"
                aria-label={`Rated ${site.rating.value} out of 5 by ${site.rating.countLabel} patients on Google — opens in a new tab`}
              >
                <Stars value={5} size={15} className="text-white/25" />
                <span className="text-xs text-on-ink-muted">
                  <span className="font-bold text-white">
                    {site.rating.value}
                  </span>{" "}
                  from {site.rating.countLabel} Google reviews
                </span>
              </a>
            </div>

            {/* ---- Form ---- */}
            <div className="p-8 md:p-10 lg:col-span-3">
              <h2 className="display-3 text-foreground">Request your slot</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Takes under a minute. We will confirm by WhatsApp or phone.
              </p>

              <div className="mt-7">
                <AppointmentForm />
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <GoogleRating variant="inline" />
          </div>
        </div>
      </section>
    </>
  );
}
