import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import servicesData from "@/data/services.json";
import doctorsData from "@/data/doctors.json";
import testimonialsData from "@/data/testimonials.json";
import workshopsData from "@/data/workshops.json";

import Hero from "@/components/home/Hero";
import TrustStats from "@/components/home/TrustStats";
import Conditions from "@/components/home/Conditions";
import Process from "@/components/home/Process";
import WhyUs from "@/components/home/WhyUs";
import LocationSection from "@/components/home/LocationSection";

import ServiceCard from "@/components/services/ServiceCard";
import DoctorCard from "@/components/doctors/DoctorCard";
import WorkshopCard from "@/components/workshops/WorkshopCard";
import TestimonialCard from "@/components/testimonials/TestimonialCard";

import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import GoogleRating from "@/components/ui/GoogleRating";
import CtaBand from "@/components/ui/CtaBand";
import FaqSection from "@/components/seo/FaqSection";

export default function Home() {
  const featuredServices = servicesData.slice(0, 6);
  const featuredDoctors = doctorsData.slice(0, 4);
  const featuredWorkshops = workshopsData.slice(0, 3);

  return (
    <>
      <Hero />
      <TrustStats />

      {/* ---------------- Services ---------------- */}
      <section className="section">
        <div className="container-page">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              align="left"
              eyebrow="Our Services"
              title="Specialist physiotherapy, matched to the problem"
              description="Seven treatment areas, each led by a therapist who works in it every day."
            />
            <Button
              href="/services"
              variant="secondary"
              className="shrink-0 self-start md:self-auto"
            >
              All services
              <FiArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
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
      <WhyUs />

      {/* ---------------- Team ---------------- */}
      <section className="section bg-surface">
        <div className="container-page">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              align="left"
              eyebrow="Our Team"
              title="The people who will actually treat you"
              description="Four physiotherapists, each with a defined specialty — so you are matched to the right one from the first visit."
            />
            <Button
              href="/doctors"
              variant="secondary"
              className="shrink-0 self-start md:self-auto"
            >
              Meet the team
              <FiArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredDoctors.map((doc, i) => (
              <DoctorCard key={doc.id} {...doc} priority={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Reviews ---------------- */}
      <section id="reviews" className="section scroll-mt-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Patient Reviews"
            title="Rated 5.0 by our patients"
            description="Every review below is public. Read all of them on our Google profile, or watch patients tell their own story on Instagram."
          />

          <div className="mt-9 flex justify-center">
            <GoogleRating variant="card" className="w-full max-w-md" />
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonialsData.map((t) => (
              <TestimonialCard key={t.id} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Workshops ---------------- */}
      <section className="relative isolate overflow-hidden bg-ink">
        <div className="bg-ink-wash absolute inset-0 -z-10" aria-hidden="true" />
        <div
          className="bg-grid absolute inset-0 -z-10 text-white opacity-[0.05]"
          aria-hidden="true"
        />

        <div className="container-page section">
          <SectionHeading
            onInk
            eyebrow="For Clinicians"
            title="We train the physiotherapists who train Pakistan"
            description="Dr. Syed Mozaffar runs certified, hands-on workshops for practising clinicians and final-year students — dry needling, Mulligan, HVLA, cupping and more."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {featuredWorkshops.map((workshop) => (
              <WorkshopCard key={workshop.id} {...workshop} onInk />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              href="/workshops"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-white/90"
            >
              View all workshops
              <FiArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <LocationSection />
      <FaqSection />
      <CtaBand />
    </>
  );
}
