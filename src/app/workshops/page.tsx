import type { Metadata } from "next";
import { FaUserMd, FaCertificate, FaUsers, FaHandsHelping } from "react-icons/fa";
import workshopsData from "@/data/workshops.json";
import WorkshopCard from "@/components/workshops/WorkshopCard";
import PageHero from "@/components/layout/PageHero";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import CtaBand from "@/components/ui/CtaBand";
import { site, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Physiotherapy Workshops & Hands-on Training in Islamabad",
  description:
    "Certified physiotherapy workshops in Islamabad led by Dr. Syed Mozaffar — dry needling, kinesio taping, Mulligan techniques, HVLA chiropractic, cupping therapy and therapeutic exercise.",
  alternates: { canonical: "/workshops" },
};

const workshopsItemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Professional Physiotherapy Workshops",
  itemListElement: workshopsData.map((workshop, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Course",
      name: workshop.title,
      description: workshop.shortDesc,
      url: absoluteUrl(`/workshops/${workshop.id}`),
      provider: {
        "@type": "MedicalClinic",
        name: site.name,
        url: absoluteUrl("/"),
      },
    },
  })),
};

const highlights = [
  {
    Icon: FaUserMd,
    title: "Expert-led",
    desc: "Every workshop is run directly by Dr. Syed Mozaffar, not a franchised instructor.",
  },
  {
    Icon: FaHandsHelping,
    title: "Hands-on practice",
    desc: "Small groups with supervised practical application — you leave able to use the technique.",
  },
  {
    Icon: FaCertificate,
    title: "Certification",
    desc: "A certificate of completion you can put toward your clinical portfolio.",
  },
  {
    Icon: FaUsers,
    title: "Every level",
    desc: "Built for final-year students, new graduates and practising clinicians alike.",
  },
];

export default function WorkshopsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Workshops", path: "/workshops" }]} />
      <JsonLd data={workshopsItemList} />

      <PageHero
        eyebrow="For Clinicians"
        title="Professional physiotherapy workshops"
        subtitle="Hands-on, certified training in advanced therapy techniques — conducted under the direct guidance of Dr. Syed Mozaffar at our Islamabad clinic."
      >
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/contact" size="lg">
            Register your interest
          </Button>
          <Button href="#programmes" variant="on-ink" size="lg">
            See all workshops
          </Button>
        </div>
      </PageHero>

      {/* Highlights */}
      <section className="relative z-10">
        <div className="container-page">
          <div className="-mt-10 grid gap-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-lg)] sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map(({ Icon, title, desc }) => (
              <div key={title} className="flex gap-4 p-2">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-lg text-primary">
                  <Icon aria-hidden="true" />
                </span>
                <div>
                  <h2 className="font-display text-sm font-bold text-foreground">
                    {title}
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programmes */}
      <section id="programmes" className="section scroll-mt-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Programmes"
            title="Available workshops"
            description="New dates are announced regularly. Register your interest and we will let you know when the next cohort opens."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {workshopsData.map((workshop) => (
              <WorkshopCard key={workshop.id} {...workshop} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Want in-house or custom training?"
        description="We arrange tailored workshops for clinics, hospitals and universities. Tell us your group size and the techniques you want covered."
        waMessage="Hi, I'd like to enquire about a custom or in-house physiotherapy workshop."
      />
    </>
  );
}
