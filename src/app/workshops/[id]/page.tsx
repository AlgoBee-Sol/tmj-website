import { notFound } from "next/navigation";
import Image from "next/image";
import workshops from "@/data/workshops.json";
import services from "@/data/services.json";
import { pageMetadata, clinicId, founderId, postalAddress } from "@/lib/seo";
import { absoluteUrl, waHref, site } from "@/lib/site";
import { workshopDate, workshopStatus } from "@/lib/workshops.mjs";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import PageHero from "@/components/layout/PageHero";
import RelatedLinks from "@/components/content/RelatedLinks";
import Button from "@/components/ui/Button";
export const dynamic = "force-dynamic";
type Props = { params: Promise<{ id: string }> };
export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const w = workshops.find((w) => w.id === id);
  if (!w) notFound();
  return pageMetadata(
    w.title,
    `${w.shortDesc} ${w.startDate ? workshopDate(w.startDate) : "Programme information"} at The Muscular Junction, Islamabad.`,
    `/workshops/${w.id}`,
  );
}
export default async function Page({ params }: Props) {
  const { id } = await params;
  const w = workshops.find((w) => w.id === id);
  if (!w) notFound();
  const status = workshopStatus(w);
  const upcoming = status === "upcoming";
  const message = upcoming
    ? `Hello, I would like to register for ${w.title} on ${workshopDate(w.startDate!)}. Please confirm fees, eligibility and availability.`
    : `Hello, I would like to ask about ${w.title} and future sessions.`;
  const relatedEvents = workshops.filter((x) => x.programmeId === w.id);
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Workshops", path: "/workshops" },
          { name: w.title, path: `/workshops/${w.id}` },
        ]}
      />
      {w.startDate && w.endDate && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "EducationEvent",
            name: w.title,
            description: w.fullDesc,
            url: absoluteUrl(`/workshops/${w.id}`),
            startDate: w.startDate,
            endDate: w.endDate,
            eventStatus: "https://schema.org/EventScheduled",
            eventAttendanceMode:
              "https://schema.org/OfflineEventAttendanceMode",
            location: {
              "@type": "Place",
              name: site.name,
              address: postalAddress,
            },
            organizer: { "@id": clinicId },
            ...(w.instructor === "Dr. Syed Mozaffar"
              ? { performer: { "@id": founderId } }
              : {}),
          }}
        />
      )}
      <PageHero
        eyebrow={
          upcoming
            ? "Upcoming hands-on workshop"
            : status === "past"
              ? "Past event"
              : status === "in-progress"
                ? "Today’s workshop"
                : "Programme archive"
        }
        title={w.title}
        subtitle={w.shortDesc}
      />
      <div className="container-page section content-layout">
        <article className="prose-content">
          <h2>About this {w.startDate ? "session" : "programme"}</h2>
          <p>{w.fullDesc}</p>
          {w.completionConfirmed && (
            <p>
              The clinic confirms a previous session in {w.historicalMonth}.
              Contact us for information about that programme or future dates.
            </p>
          )}
          <h2>Topics covered</h2>
          <ul>
            {w.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <h2>Who should enquire?</h2>
          <p>
            Contact the clinic to discuss the programme’s suitability for your
            qualifications and experience. Eligibility, fees and what is
            included should be confirmed before you register. Invasive or
            advanced techniques require appropriate training and professional
            scope.
          </p>
          {w.startDate && (
            <dl className="event-facts">
              <div>
                <dt>Date</dt>
                <dd>
                  <time dateTime={w.startDate}>
                    {workshopDate(w.startDate)}
                  </time>
                </dd>
              </div>
              <div>
                <dt>Time</dt>
                <dd>{w.time} · Pakistan time</dd>
              </div>
              <div>
                <dt>Venue</dt>
                <dd>
                  {site.name}
                  <br />
                  {site.contact.address}
                </dd>
              </div>
              <div>
                <dt>
                  {w.instructor === "Dr. Syed Mozaffar"
                    ? "Instructor"
                    : "Hosted by"}
                </dt>
                <dd>{w.instructor}</dd>
              </div>
            </dl>
          )}
          {!w.startDate && (
            <p>
              Programme information is kept available for professional
              reference. Check the upcoming workshop dates for current
              registration options.
            </p>
          )}
          <RelatedLinks
            title="Related clinical services"
            items={services
              .filter((s) => w.serviceIds.includes(s.id))
              .map((s) => ({ title: s.title, href: `/services/${s.id}` }))}
          />
          <RelatedLinks
            title="Continue exploring"
            items={[
              ...relatedEvents.map((e) => ({
                title: e.title,
                href: `/workshops/${e.id}`,
              })),
              { title: "Dr. Syed Mozaffar", href: "/doctors/dr-syed-mozaffar" },
              { title: "All workshops", href: "/workshops" },
            ]}
          />
          {w.photos.length > 0 && (
            <section>
              <h2>Workshop photos</h2>
              {w.photos.map((photo: { src: string; alt: string }) => (
                <Image
                  key={photo.src}
                  src={photo.src}
                  alt={photo.alt}
                  width={1000}
                  height={667}
                />
              ))}
            </section>
          )}
        </article>
        <aside className="booking-aside">
          <p className="eyebrow">
            {upcoming ? "Registration" : "Workshop enquiries"}
          </p>
          <h2>
            {upcoming
              ? "Join the workshop."
              : status === "past"
                ? "Ask about the next session."
                : "Keep learning with us."}
          </h2>
          <p>
            {upcoming
              ? "Contact the clinic to confirm your place, eligibility and current fee."
              : "Contact the clinic for information about this programme and future sessions."}
          </p>
          <Button href={waHref(message)}>
            {upcoming ? "Register on WhatsApp" : "Enquire on WhatsApp"} ↗
          </Button>
          <a className="text-link" href={`tel:${site.contact.phoneDial}`}>
            Call {site.contact.phone}
          </a>
          <Button variant="secondary" href={site.contact.mapLink}>
            Get directions ↗
          </Button>
        </aside>
      </div>
    </>
  );
}
