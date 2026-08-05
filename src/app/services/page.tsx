import type { Metadata } from "next";
import servicesData from "@/data/services.json";
import ServiceCard from "@/components/services/ServiceCard";
import Conditions from "@/components/home/Conditions";
import Process from "@/components/home/Process";
import PageHero from "@/components/layout/PageHero";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import CtaBand from "@/components/ui/CtaBand";
import { absoluteUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Physiotherapy Services in Islamabad",
  description:
    "Physiotherapy and rehabilitation services at The Muscular Junction, River Gardens, Islamabad — manual therapy, sports injury, orthopedic, neurological and pediatric rehab, dry needling, cupping and cryotherapy.",
  alternates: { canonical: "/services" },
};

const servicesItemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Physiotherapy & Rehabilitation Services",
  itemListElement: servicesData.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: service.title,
    url: absoluteUrl(`/services/${service.id}`),
  })),
};

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Services", path: "/services" }]} />
      <JsonLd data={servicesItemList} />

      <PageHero
        eyebrow="Our Services"
        title="Physiotherapy services in Islamabad"
        subtitle={`Seven specialist treatment areas, all delivered from our clinic in ${site.contact.address}. Each one starts with a full assessment.`}
      />

      <section className="section">
        <div className="container-page">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                shortDesc={service.shortDesc}
                icon={service.icon}
                conditions={service.conditions}
              />
            ))}
          </div>
        </div>
      </section>

      <Conditions className="bg-surface" />
      <Process />
      <CtaBand
        title="Not sure which treatment you need?"
        description="That is what the assessment is for. Book one and we will tell you exactly which pathway fits — or refer you on if physiotherapy is not the answer."
      />
    </>
  );
}
