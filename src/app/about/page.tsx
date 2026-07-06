import siteData from "@/data/site.json";
import PageHero from "@/components/layout/PageHero";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { FaHeart, FaHandshake, FaLightbulb } from "react-icons/fa";

export const metadata = {
  title: "About Our Physiotherapy Clinic in Islamabad",
  description:
    "Learn about The Muscular Junction — a trusted physiotherapy & rehabilitation clinic in Islamabad led by Dr. Syed Mozaffar, built on patient-centric, evidence-based care.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: FaHeart,
    title: "Patient-Centric Care",
    desc: "Your health and comfort are our top priorities. We tailor every session to your unique needs.",
  },
  {
    icon: FaHandshake,
    title: "Integrity & Trust",
    desc: "We believe in honest communication and transparent treatment plans with no hidden costs.",
  },
  {
    icon: FaLightbulb,
    title: "Continuous Innovation",
    desc: "We stay updated with the latest advancements in physiotherapy to provide the best care.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background pb-24">
      <Breadcrumbs items={[{ name: "About Us", path: "/about" }]} />
      <PageHero
        eyebrow="Who We Are"
        title="About Us"
        subtitle="Dedicated to restoring your health through advanced physiotherapy and compassionate care."
      />

      <div className="container mx-auto mt-16 px-4 md:px-6">
        {/* Mission */}
        <div className="mb-20 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border shadow-xl">
            <img
              src="/images/clinic-interior.png"
              alt="The Muscular Junction clinic interior"
              className="h-full w-full object-cover"
              style={{ minHeight: "320px", backgroundColor: "#e2e8f0" }}
            />
          </div>
          <div>
            <span className="mb-2 block text-sm font-bold uppercase tracking-widest text-primary">
              Our Mission
            </span>
            <h2 className="mb-6 text-3xl font-bold text-foreground">
              Empowering Pain-Free, Active Lives
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              At {siteData.name}, our mission is to provide world-class
              rehabilitation services that empower our patients to live
              pain-free, active lives. We believe in a holistic approach,
              treating not just the symptoms but the root cause of the problem.
            </p>
            <p className="mb-8 leading-relaxed text-muted-foreground">
              Established with a vision to bridge the gap between injury and
              recovery, we utilize the latest evidence-based techniques and
              state-of-the-art equipment to ensure faster and safer recovery.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-xl border border-border bg-accent p-5">
                <span className="mb-1 block text-4xl font-bold text-primary">
                  4+
                </span>
                <span className="font-medium text-muted-foreground">
                  Years Experience
                </span>
              </div>
              <div className="rounded-xl border border-border bg-accent p-5">
                <span className="mb-1 block text-4xl font-bold text-primary">
                  1500+
                </span>
                <span className="font-medium text-muted-foreground">
                  Happy Patients
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="mb-2 block text-sm font-bold uppercase tracking-widest text-primary">
              Our Core Values
            </span>
            <h2 className="text-3xl font-bold text-foreground">
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-card p-8 transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 text-2xl text-white shadow-lg shadow-blue-500/20">
                  <Icon aria-hidden="true" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground">
                  {title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
