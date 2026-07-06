import DoctorCard from "@/components/doctors/DoctorCard";
import doctorsData from "@/data/doctors.json";
import PageHero from "@/components/layout/PageHero";

export const metadata = {
  title: "Our Team",
  description:
    "Meet the experienced physiotherapists at The Muscular Junction — specialists in sports injury, manual therapy, neuro and pediatric rehabilitation.",
  alternates: { canonical: "/doctors" },
};

export default function DoctorsPage() {
  return (
    <div className="bg-background pb-24">
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
