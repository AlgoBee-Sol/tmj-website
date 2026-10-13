import Link from "next/link";
import services from "@/data/services.json";
import { pageMetadata } from "@/lib/seo";
import PageHero from "@/components/layout/PageHero";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import Conditions from "@/components/home/Conditions";
import CtaBand from "@/components/ui/CtaBand";
export const metadata = pageMetadata(
  "Physiotherapy services in Islamabad",
  "Explore manual therapy, sports rehabilitation, orthopedic, neurological and pediatric physiotherapy at our River Gardens clinic.",
  "/services",
);
export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Services", path: "/services" }]} />
      <PageHero
        eyebrow="Our services"
        title="The right care for your next step."
        subtitle="Physiotherapy and clinical rehabilitation in River Gardens, Islamabad. We start with your assessment and choose treatment together."
      />
      <section className="section">
        <div className="container-page service-directory">
          {services.map((s, i) => (
            <Link href={`/services/${s.id}`} key={s.id} className="service-row">
              <span className="row-number">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h2>{s.title}</h2>
                <p>{s.shortDesc}</p>
              </div>
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>
      <Conditions className="bg-surface" />
      <CtaBand />
    </>
  );
}
