import Link from "next/link";
import ServiceCard from "@/components/services/ServiceCard";
import { getServiceIcon } from "@/components/services/serviceIcons";
import servicesData from "@/data/services.json";
import PageHero from "@/components/layout/PageHero";

export const metadata = {
  title: "Our Services",
  description:
    "Explore our physiotherapy and rehabilitation services — manual therapy, sports rehab, neuro rehab, orthopedic and pediatric physiotherapy and more.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <div className="bg-background pb-24">
      <PageHero
        eyebrow="Our Expertise"
        title="Our Services"
        subtitle="Specialized care tailored to your needs using advanced techniques and equipment."
      />

      <div className="container mx-auto mt-12 px-4 md:px-6">
        {/* Card grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => (
            <div key={service.id} id={service.id} className="scroll-mt-28">
              <ServiceCard
                id={service.id}
                title={service.title}
                shortDesc={service.shortDesc}
                icon={service.icon}
                image={service.image}
              />
            </div>
          ))}
        </div>

        {/* Detailed alternating sections */}
        <div className="mt-24 space-y-20">
          {servicesData.map((service, index) => {
            const Icon = getServiceIcon(service.icon);
            return (
            <div
              key={service.id + "_detail"}
              className={`flex flex-col items-center gap-8 md:gap-12 lg:flex-row ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full flex-1">
                <div className="relative h-72 overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-blue-600 via-blue-700 to-sky-600 shadow-lg">
                  <div className="absolute inset-0 flex items-center justify-center text-white/25">
                    <Icon className="h-28 w-28" aria-hidden="true" />
                  </div>
                  {service.image && (
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${service.image})` }}
                    ></div>
                  )}
                </div>
              </div>
              <div className="flex-1">
                <h2 className="mb-4 text-3xl font-bold text-foreground">{service.title}</h2>
                <p className="mb-6 leading-relaxed text-muted-foreground">{service.fullDesc}</p>
                <Link
                  href="/appointment"
                  className="inline-block rounded-full bg-primary px-6 py-2.5 font-semibold text-primary-foreground transition hover:bg-primary-dark"
                >
                  Book for {service.title}
                </Link>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
