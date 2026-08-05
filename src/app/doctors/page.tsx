import type { Metadata } from "next";
import doctorsData from "@/data/doctors.json";
import DoctorCard from "@/components/doctors/DoctorCard";
import PageHero from "@/components/layout/PageHero";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import GoogleRating from "@/components/ui/GoogleRating";
import CtaBand from "@/components/ui/CtaBand";
import { site, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Physiotherapists — Dr. Syed Mozaffar & Team",
  description:
    "Meet the physiotherapists at The Muscular Junction, River Gardens, Islamabad — led by founder Dr. Syed Mozaffar, with specialists in sports injury, manual therapy, women's health, neurological and pediatric rehabilitation.",
  alternates: { canonical: "/doctors" },
};

const doctorsItemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Physiotherapists at The Muscular Junction",
  itemListElement: doctorsData.map((doc, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": ["Person", "Physician"],
      name: doc.name,
      jobTitle: doc.designation,
      description: doc.bio,
      medicalSpecialty: "Physiotherapy",
      knowsAbout: doc.specializations,
      worksFor: { "@type": "MedicalClinic", name: site.name },
      ...(doc.image ? { image: absoluteUrl(doc.image) } : {}),
    },
  })),
};

export default function DoctorsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Our Team", path: "/doctors" }]} />
      <JsonLd data={doctorsItemList} />

      <PageHero
        eyebrow="Our Team"
        title="The physiotherapists behind your recovery"
        subtitle="Four clinicians with defined specialties, so you are matched to the right one from the first visit — including a female physiotherapist for patients who prefer one."
      />

      <section className="section">
        <div className="container-page">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {doctorsData.map((doc, i) => (
              <DoctorCard key={doc.id} {...doc} priority={i === 0} />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <GoogleRating variant="card" className="w-full max-w-md" />
          </div>
        </div>
      </section>

      <CtaBand
        title="Book with the right therapist"
        description="Tell us what is going on and we will schedule you with the clinician who treats it every day. Mention if you would prefer a female physiotherapist."
      />
    </>
  );
}
