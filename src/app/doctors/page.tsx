import DoctorCard from "@/components/doctors/DoctorCard";
import doctorsData from "@/data/doctors.json";
import PageHero from "@/components/layout/PageHero";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import siteData from "@/data/site.json";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || siteData.url;

export const metadata = {
  title: "Our Physiotherapists — Dr. Syed Mozaffar & Team",
  description:
    "Meet the experienced physiotherapists at The Muscular Junction, Islamabad — led by founder Dr. Syed Mozaffar, with specialists in sports injury, manual therapy, neuro and pediatric rehabilitation.",
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
      worksFor: { "@type": "MedicalClinic", name: siteData.name },
      image: `${siteUrl}${doc.image}`,
    },
  })),
};

export default function DoctorsPage() {
  return (
    <div className="bg-background pb-24">
      <Breadcrumbs items={[{ name: "Our Team", path: "/doctors" }]} />
      <JsonLd data={doctorsItemList} />
      <PageHero
        eyebrow="Our Team"
        title="Meet Our Experts"
        subtitle="Highly qualified professionals dedicated to your recovery and well-being."
      />

      <div className="container mx-auto mt-12 px-4 md:px-6">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
          {doctorsData.map((doc) => (
            <DoctorCard key={doc.id} {...doc} />
          ))}
        </div>
      </div>
    </div>
  );
}
