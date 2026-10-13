import doctors from "@/data/doctors.json";
import DoctorCard from "@/components/doctors/DoctorCard";
import PageHero from "@/components/layout/PageHero";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import CtaBand from "@/components/ui/CtaBand";
import { pageMetadata, clinicId, founderId } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
export const metadata = pageMetadata(
  "Our physiotherapists — Dr. Syed Mozaffar & team",
  "Meet the physiotherapists at The Muscular Junction, Islamabad, including Dr. Syed Mozaffar and female physiotherapists Ulfat Zahra, Eman Fatima and Ayesha.",
  "/doctors",
);
export default function Page() {
  const team = doctors.filter((d) => d.published);
  return (
    <>
      <Breadcrumbs items={[{ name: "Doctors", path: "/doctors" }]} />
      <PageHero
        eyebrow="People behind the care"
        title="Meet your physiotherapy team."
        subtitle="Talk to us about your needs and preferences. We will help you arrange an appointment with a suitable clinician at our River Gardens clinic."
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": team.map((d) => ({
            "@type": "Person",
            "@id":
              d.id === "dr-syed-mozaffar"
                ? founderId
                : absoluteUrl(`/doctors#${d.id}`),
            name: d.name,
            jobTitle: d.designation,
            description: d.bio,
            knowsAbout: d.specializations,
            worksFor: { "@id": clinicId },
            ...(d.image ? { image: absoluteUrl(d.image) } : {}),
          })),
        }}
      />
      <section className="section">
        <div className="container-page">
          <h2 className="sr-only">Our clinicians</h2>
          <div className="team-grid">
            {team.map((d) => (
              <DoctorCard key={d.id} {...d} />
            ))}
          </div>
          <p className="mt-8 text-muted-foreground">
            Female physiotherapists are available. Please request Dr. Ulfat
            Zahra, Dr. Eman Fatima or Dr. Ayesha when booking; availability will
            be confirmed by the clinic.
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
