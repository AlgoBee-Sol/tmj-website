import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import workshopsData from "@/data/workshops.json";
import siteData from "@/data/site.json";
import { getWorkshopIcon } from "@/components/workshops/workshopIcons";
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

type Params = { id: string };

function getWorkshop(id: string) {
  return workshopsData.find((w) => w.id === id);
}

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
  if (!workshop) {
    return { title: "Workshop Not Found" };
  }
  return {
    title: `${workshop.title} — ${workshop.date}`,
    description: workshop.shortDesc,
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

  const Icon = getWorkshopIcon(workshop.icon);

  // Pre-filled WhatsApp registration message
  const waMessage =
    `Hi, I would like to register for the "${workshop.title}" workshop ` +
    `scheduled on ${workshop.date} (${workshop.time}). Please share the details.`;
  const waLink = `${siteData.social.whatsapp}?text=${encodeURIComponent(waMessage)}`;

  const scheduleRows = [
    { icon: FaRegCalendarAlt, label: "Date", value: workshop.date },
    { icon: FaRegClock, label: "Time", value: workshop.time },
    { icon: FaMapMarkerAlt, label: "Venue", value: workshop.venue },
    { icon: FaChalkboardTeacher, label: "Instructor", value: workshop.instructor },
    { icon: FaLayerGroup, label: "Level", value: workshop.level },
  ];

  return (
    <div className="bg-background pb-24">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 text-white md:py-20">
        <div className="absolute right-[-6%] top-[-30%] h-[360px] w-[360px] animate-pulse-slow rounded-full bg-blue-500 opacity-20 mix-blend-multiply blur-3xl" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.08]" />

        <div className="container relative z-10 mx-auto max-w-5xl px-4 md:px-6">
          <Link
            href="/workshops"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-blue-200 transition hover:text-white"
          >
            <FaArrowLeft className="text-xs" aria-hidden="true" /> All Workshops
          </Link>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-3xl text-white ring-1 ring-white/20 backdrop-blur-sm">
              <Icon aria-hidden="true" />
            </div>
            <div>
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-blue-100 backdrop-blur-sm">
                  <FaRegClock aria-hidden="true" /> {workshop.duration}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-blue-100 backdrop-blur-sm">
                  <FaLayerGroup aria-hidden="true" /> {workshop.level}
                </span>
              </div>
              <h1 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
                {workshop.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="container mx-auto mt-12 max-w-5xl px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Details */}
          <div className="lg:col-span-2">
            <h2 className="mb-4 text-2xl font-bold text-foreground">About this workshop</h2>
            <p className="mb-10 leading-relaxed text-muted-foreground">{workshop.fullDesc}</p>

            <h2 className="mb-5 text-2xl font-bold text-foreground">What you&apos;ll learn</h2>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {workshop.highlights.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                >
                  <FaCheckCircle className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-sm leading-relaxed text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Registration card (sticky) */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
                <div className="border-b border-border bg-muted px-6 py-5">
                  <h3 className="text-lg font-bold text-foreground">Workshop Details</h3>
                  <p className="text-sm text-muted-foreground">
                    Guided by {workshop.instructor}
                  </p>
                </div>

                <dl className="divide-y divide-border">
                  {scheduleRows.map(({ icon: RowIcon, label, value }) => (
                    <div key={label} className="flex items-start gap-3 px-6 py-4">
                      <RowIcon className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
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
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-6 py-4 text-lg font-bold text-white shadow-lg shadow-green-600/20 transition hover:-translate-y-0.5 hover:bg-[#20bd5a]"
                  >
                    <FaWhatsapp className="text-xl" aria-hidden="true" />
                    Register on WhatsApp
                  </a>
                  <p className="text-center text-xs text-subtle-foreground">
                    Opens WhatsApp with a pre-filled registration message.
                  </p>
                  <Link
                    href="/contact"
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-border px-6 py-3 font-semibold text-foreground transition hover:bg-muted"
                  >
                    Enquire via Contact
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
