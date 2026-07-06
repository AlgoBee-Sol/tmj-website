import Link from "next/link";
import type { Metadata } from "next";
import WorkshopCard from "@/components/workshops/WorkshopCard";
import workshopsData from "@/data/workshops.json";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import siteData from "@/data/site.json";
import {
  FaUserMd,
  FaCertificate,
  FaUsers,
  FaHandsHelping,
} from "react-icons/fa";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || siteData.url;

export const metadata: Metadata = {
  title: "Physiotherapy Workshops & Hands-on Trainings in Islamabad",
  description:
    "Professional physiotherapy workshops led by Dr. Syed Mozaffar — Dry Needling, Kinesio Taping, Mulligan Techniques, HVLA Chiropractic, Cupping Therapy and more. Hands-on, certified training in Islamabad.",
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
      url: `${siteUrl}/workshops/${workshop.id}`,
      provider: { "@type": "MedicalClinic", name: siteData.name, url: siteUrl },
    },
  })),
};

const highlights = [
  {
    icon: FaUserMd,
    title: "Expert-Led",
    desc: "Every workshop is conducted under the direct guidance of Dr. Syed Mozaffar.",
  },
  {
    icon: FaHandsHelping,
    title: "Hands-on Practice",
    desc: "Small groups with supervised, practical application on real techniques.",
  },
  {
    icon: FaCertificate,
    title: "Certification",
    desc: "Receive a certificate of completion to advance your clinical practice.",
  },
  {
    icon: FaUsers,
    title: "For Every Level",
    desc: "Designed for students, new graduates and practising clinicians alike.",
  },
];

export default function WorkshopsPage() {
  return (
    <div className="min-h-screen bg-background pb-24">
      <Breadcrumbs items={[{ name: "Workshops", path: "/workshops" }]} />
      <JsonLd data={workshopsItemList} />
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-24 text-white">
        <div className="absolute right-[-8%] top-[-20%] h-[420px] w-[420px] rounded-full bg-blue-500 opacity-20 mix-blend-multiply blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-[-25%] left-[-10%] h-[460px] w-[460px] rounded-full bg-sky-600 opacity-20 mix-blend-multiply blur-3xl animate-pulse-slow" />
        <div className="container relative z-10 mx-auto max-w-4xl px-4 text-center md:px-6">
          <span className="mb-4 inline-block rounded-full border border-blue-500/30 bg-blue-800/40 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-blue-300 backdrop-blur-sm">
            Learning &amp; Development
          </span>
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Professional Physiotherapy{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Workshops
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300">
            We regularly arrange hands-on workshops on a range of advanced
            therapy techniques, conducted under the expert guidance of{" "}
            <span className="font-semibold text-white">Dr. Syed Mozaffar</span>.
            Sharpen your clinical skills and stay ahead with evidence-based
            practice.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-blue-900/50 transition hover:from-blue-400 hover:to-blue-500"
            >
              Enquire to Register
            </Link>
            <Link
              href="/services"
              className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="container relative z-10 mx-auto -mt-12 px-4 md:px-6">
        <div className="grid grid-cols-1 gap-4 rounded-2xl border border-border bg-card p-6 shadow-xl sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4 p-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-xl text-primary">
                <Icon aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Workshop grid */}
      <section className="container mx-auto mt-20 px-4 md:px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-2 block text-sm font-bold uppercase tracking-widest text-primary">
            Our Programmes
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground">
            Available Workshops
          </h2>
          <p className="text-muted-foreground">
            Choose from our range of certified, hands-on therapy workshops. New
            dates are announced regularly — register your interest to be
            notified.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {workshopsData.map((workshop) => (
            <WorkshopCard key={workshop.id} {...workshop} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto mt-20 px-4 md:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 to-blue-900 px-8 py-14 text-center text-white shadow-2xl">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">
            Want a custom or in-house training?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-blue-100">
            We also arrange tailored workshops for clinics, universities and
            professional groups. Get in touch to discuss dates and topics.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-white px-10 py-4 text-lg font-bold text-blue-900 shadow-xl transition-transform hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
