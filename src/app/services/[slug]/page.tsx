import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowRight, FiClock, FiRepeat, FiCheck } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import servicesData from "@/data/services.json";
import { ServiceIcon } from "@/components/services/serviceIcons";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import Button from "@/components/ui/Button";
import GoogleRating from "@/components/ui/GoogleRating";
import CtaBand from "@/components/ui/CtaBand";
import { site, absoluteUrl, waHref } from "@/lib/site";

type Params = { slug: string };

const getService = (slug: string) => servicesData.find((s) => s.id === slug);

export function generateStaticParams(): Params[] {
  return servicesData.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: service.seoTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.id}` },
    openGraph: {
      title: `${service.seoTitle} | ${site.name}`,
      description: service.metaDescription,
      url: absoluteUrl(`/services/${service.id}`),
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = servicesData.filter((s) => s.id !== service.id).slice(0, 3);

  const waMessage = `Hi, I'd like to book a ${service.title} appointment at The Muscular Junction.`;

  const therapySchema = {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    name: service.title,
    description: service.fullDesc,
    url: absoluteUrl(`/services/${service.id}`),
    howPerformed: service.whatWeDo.join(" "),
    relevantSpecialty: { "@type": "MedicalSpecialty", name: "Physiotherapy" },
    availableService: service.conditions.map((c) => ({
      "@type": "MedicalCondition",
      name: c,
    })),
    provider: {
      "@type": "MedicalClinic",
      name: site.name,
      url: absoluteUrl("/"),
      address: {
        "@type": "PostalAddress",
        streetAddress: site.contact.streetAddress,
        addressLocality: site.contact.locality,
        addressRegion: site.contact.region,
        addressCountry: site.contact.country,
      },
      telephone: site.contact.phone,
    },
  };

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.id}` },
        ]}
      />
      <JsonLd data={therapySchema} />

      {/* ---------------- Hero ---------------- */}
      <section className="relative isolate overflow-hidden bg-ink">
        <div
          className="bg-ink-wash absolute inset-0 -z-10"
          aria-hidden="true"
        />
        <div
          className="bg-grid absolute inset-0 -z-10 text-white opacity-[0.05]"
          aria-hidden="true"
        />

        <div className="container-page py-16 md:py-20">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-on-ink-muted">
              <li>
                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/services" className="transition hover:text-white">
                  Services
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-medium text-white">{service.title}</li>
            </ol>
          </nav>

          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl text-teal ring-1 ring-white/15">
                <ServiceIcon name={service.icon} />
              </span>

              <h1 className="display-1 mt-6 text-balance text-white">
                {service.seoTitle}
              </h1>

              <p className="lead mt-5 max-w-2xl text-on-ink-muted">
                {service.shortDesc}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/appointment" size="lg">
                  Book this treatment
                  <FiArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
                <Button href={waHref(waMessage)} variant="on-ink" size="lg">
                  <FaWhatsapp
                    className="h-5 w-5 text-[#25D366]"
                    aria-hidden="true"
                  />
                  Ask a question
                </Button>
              </div>
            </div>

            {/* At-a-glance card */}
            <div className="lg:col-span-4">
              <dl className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <FiClock className="h-5 w-5 text-teal" aria-hidden="true" />
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-on-ink-muted">
                      Session length
                    </dt>
                    <dd className="font-semibold text-white">
                      {service.sessionLength}
                    </dd>
                  </div>
                </div>

                <div className="my-5 rule-ink" />

                <div className="flex items-center gap-3">
                  <FiRepeat className="h-5 w-5 text-teal" aria-hidden="true" />
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-on-ink-muted">
                      Typical course
                    </dt>
                    <dd className="font-semibold text-white">
                      {service.typicalCourse}
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Body ---------------- */}
      <section className="section">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="display-3 text-foreground">
                About {service.title.toLowerCase()}
              </h2>
              <p className="lead mt-5 text-muted-foreground">
                {service.fullDesc}
              </p>

              <h2 className="display-3 mt-12 text-foreground">
                What your treatment includes
              </h2>
              <ul className="mt-6 space-y-3">
                {service.whatWeDo.map((item) => (
                  <li
                    key={item}
                    className="card-surface flex items-start gap-3 p-4"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success-soft text-success">
                      <FiCheck className="h-3 w-3" aria-hidden="true" />
                    </span>
                    <span className="text-[0.9375rem] leading-relaxed text-muted-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="lg:col-span-5">
              <div className="lg:sticky lg:top-28 space-y-5">
                <div className="card-surface p-6">
                  <h2 className="font-display text-base font-bold text-foreground">
                    Conditions we treat with this
                  </h2>
                  <ul className="mt-4 grid gap-2">
                    {service.conditions.map((condition) => (
                      <li
                        key={condition}
                        className="flex items-center gap-2.5 text-sm text-muted-foreground"
                      >
                        <span
                          className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                          aria-hidden="true"
                        />
                        {condition}
                      </li>
                    ))}
                  </ul>
                </div>

                <GoogleRating variant="card" />

                <div className="card-surface p-6">
                  <h2 className="font-display text-base font-bold text-foreground">
                    Other treatments
                  </h2>
                  <ul className="mt-4 space-y-1">
                    {others.map((other) => (
                      <li key={other.id}>
                        <Link
                          href={`/services/${other.id}`}
                          className="flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition hover:bg-surface hover:text-primary"
                        >
                          {other.title}
                          <FiArrowRight
                            className="h-3.5 w-3.5 shrink-0"
                            aria-hidden="true"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CtaBand
        title={`Book ${service.title.toLowerCase()} in Islamabad`}
        description={`Assessment-led ${service.title.toLowerCase()} at our clinic in ${site.contact.address}. No referral needed.`}
        waMessage={waMessage}
      />
    </>
  );
}
