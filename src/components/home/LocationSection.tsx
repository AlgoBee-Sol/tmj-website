import { FiMapPin, FiPhone, FiClock, FiNavigation } from "react-icons/fi";
import MapEmbed from "@/components/map/MapEmbed";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { site, telHref } from "@/lib/site";

/**
 * Location block — the site's main local-SEO surface.
 *
 * Carries the canonical NAP in crawlable text (matching the Google Business
 * Profile exactly), the areas patients travel from, and a click-to-load map.
 */
export default function LocationSection() {
  return (
    <section className="section bg-surface">
      <div className="container-page">
        <SectionHeading
          eyebrow="Find Us"
          title={
            <>
              Physiotherapy in{" "}
              <span className="text-primary">River Gardens, Islamabad</span>
            </>
          }
          description="Easy to reach from across Islamabad and Rawalpindi, with parking outside the clinic."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {/* Details */}
          <div className="card-surface flex flex-col p-7 lg:col-span-2">
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <FiMapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-foreground">Address</h3>
                  <address className="mt-1 not-italic text-sm leading-relaxed text-muted-foreground">
                    {site.contact.streetAddress}
                    <br />
                    {site.contact.locality}, {site.contact.countryName}
                  </address>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <FiPhone className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-foreground">
                    Phone &amp; WhatsApp
                  </h3>
                  <a
                    href={telHref}
                    className="mt-1 block text-sm font-medium text-primary transition hover:text-primary-dark"
                  >
                    {site.contact.phone}
                  </a>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <FiClock className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-bold text-foreground">
                    Opening Hours
                  </h3>
                  <dl className="mt-2 space-y-1.5 text-sm">
                    {site.hours.schedule.map((row) => (
                      <div
                        key={row.days}
                        className="flex justify-between gap-4 text-muted-foreground"
                      >
                        <dt>{row.days}</dt>
                        <dd
                          className={
                            row.closed
                              ? "font-medium text-subtle-foreground"
                              : "font-medium text-foreground"
                          }
                        >
                          {row.closed
                            ? "Closed"
                            : `${row.opens} – ${row.closes}`}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </li>
            </ul>

            <div className="mt-7 border-t border-border pt-6">
              <h3 className="text-sm font-bold text-foreground">
                Patients travel to us from
              </h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {site.areasServed.map((area) => (
                  <li
                    key={area}
                    className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            <Button
              href={site.contact.mapLink}
              variant="secondary"
              size="lg"
              className="mt-7 w-full"
            >
              <FiNavigation className="h-4 w-4" aria-hidden="true" />
              Get directions on Google Maps
            </Button>
          </div>

          {/* Map */}
          <div className="min-h-[22rem] overflow-hidden rounded-2xl border border-border shadow-sm lg:col-span-3">
            <MapEmbed />
          </div>
        </div>
      </div>
    </section>
  );
}
