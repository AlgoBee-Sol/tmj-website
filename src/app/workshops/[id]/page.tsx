import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FaRegCalendarAlt,
  FaRegClock,
  FaMapMarkerAlt,
  FaChalkboardTeacher,
  FaLayerGroup,
  FaCheckCircle,
  FaWhatsapp,
  FaArrowLeft,
} from "react-icons/fa";

import workshopsData from "@/data/workshops.json";
import { WorkshopIcon } from "@/components/workshops/workshopIcons";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import CtaBand from "@/components/ui/CtaBand";
import { site, absoluteUrl, waHref } from "@/lib/site";

type Params = { id: string };

const getWorkshop = (id: string) => workshopsData.find((w) => w.id === id);

export function generateStaticParams(): Params[] {
  return workshopsData.map((w) => ({ id: w.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { id } = await params;
  const workshop = getWorkshop(id);
  if (!workshop) return { title: "Workshop Not Found" };

  return {
    title: `${workshop.title} in Islamabad — ${workshop.date}`,
    description: `${workshop.shortDesc} Led by Dr. Syed Mozaffar at The Muscular Junction, Islamabad.`,
    alternates: { canonical: `/workshops/${workshop.id}` },
  };
}

export default async function WorkshopDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;
  const workshop = getWorkshop(id);
  if (!workshop) notFound();

  const waMessage =
    `Hi, I would like to register for the "${workshop.title}" workshop ` +
    `scheduled on ${workshop.date} (${workshop.time}). Please share the details.`;

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: workshop.title,
    description: workshop.fullDesc,
    url: absoluteUrl(`/workshops/${workshop.id}`),
    provider: {
      "@type": "MedicalClinic",
      name: site.name,
      url: absoluteUrl("/"),
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Onsite",
      courseWorkload: workshop.duration,
      location: {
        "@type": "Place",
        name: workshop.venue,
        address: {
          "@type": "PostalAddress",
          streetAddress: site.contact.streetAddress,
          addressLocality: site.contact.locality,
          addressRegion: site.contact.region,
          addressCountry: site.contact.country,
        },
      },
      instructor: { "@type": "Person", name: workshop.instructor },
    },
  };

  const scheduleRows = [
    { Icon: FaRegCalendarAlt, label: "Date", value: workshop.date },
    { Icon: FaRegClock, label: "Time", value: workshop.time },
    { Icon: FaMapMarkerAlt, label: "Venue", value: workshop.venue },
    {
      Icon: FaChalkboardTeacher,
      label: "Instructor",
      value: workshop.instructor,
    },
    { Icon: FaLayerGroup, label: "Level", value: workshop.level },
  ];

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Workshops", path: "/workshops" },
          { name: workshop.title, path: `/workshops/${workshop.id}` },
        ]}
      />
      <JsonLd data={courseSchema} />

      {/* ---------------- Hero ---------------- */}
      <section className="relative isolate overflow-hidden bg-ink">
        <div className="bg-ink-wash absolute inset-0 -z-10" aria-hidden="true" />
        <div
          className="bg-grid absolute inset-0 -z-10 text-white opacity-[0.05]"
          aria-hidden="true"
        />

        <div className="container-page py-16 md:py-20">
          <Link
            href="/workshops"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-on-ink-muted transition hover:text-white"
          >
            <FaArrowLeft className="text-xs" aria-hidden="true" /> All workshops
          </Link>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-2xl text-teal ring-1 ring-white/15">
              <WorkshopIcon name={workshop.icon} />
            </span>

            <div>
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-on-ink-muted">
                  <FaRegClock aria-hidden="true" /> {workshop.duration}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-on-ink-muted">
                  <FaLayerGroup aria-hidden="true" /> {workshop.level}
                </span>
              </div>
              <h1 className="display-2 text-balance text-white">
                {workshop.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Body ---------------- */}
      <section className="section">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="display-3 text-foreground">About this workshop</h2>
              <p className="lead mt-5 text-muted-foreground">
                {workshop.fullDesc}
              </p>

              <h2 className="display-3 mt-12 text-foreground">
                What you&apos;ll learn
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {workshop.highlights.map((point) => (
                  <li
                    key={point}
                    className="card-surface flex items-start gap-3 p-4"
                  >
                    <FaCheckCircle
                      className="mt-0.5 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Registration card */}
            <aside>
              <div className="card-surface overflow-hidden p-0 lg:sticky lg:top-28">
                <div className="border-b border-border bg-surface px-6 py-5">
                  <h2 className="font-display text-lg font-bold text-foreground">
                    Workshop details
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Guided by {workshop.instructor}
                  </p>
                </div>

                <dl className="divide-y divide-border">
                  {scheduleRows.map(({ Icon: RowIcon, label, value }) => (
                    <div key={label} className="flex items-start gap-3 px-6 py-4">
                      <RowIcon
                        className="mt-0.5 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-wide text-subtle-foreground">
                          {label}
                        </dt>
                        <dd className="font-medium text-foreground">{value}</dd>
                      </div>
                    </div>
                  ))}
                </dl>

                <div className="space-y-3 p-6">
                  <a
                    href={waHref(waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-[var(--whatsapp)] px-6 py-4 font-bold text-white shadow-[0_8px_24px_rgb(37_211_102/0.3)] transition hover:-translate-y-0.5 hover:bg-[var(--whatsapp-dark)]"
                  >
                    <FaWhatsapp className="text-xl" aria-hidden="true" />
                    Register on WhatsApp
                  </a>
                  <p className="text-center text-xs text-subtle-foreground">
                    Opens WhatsApp with a pre-filled registration message.
                  </p>
                  <Link
                    href="/contact"
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-border-strong px-6 py-3 font-semibold text-foreground transition hover:bg-surface"
                  >
                    Enquire another way
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CtaBand
        title={`Register for ${workshop.title}`}
        description={`${workshop.date} · ${workshop.time} · ${workshop.venue}`}
        waMessage={waMessage}
      />
    </>
  );
}
