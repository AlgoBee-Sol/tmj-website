import Link from "next/link";
import siteData from "@/data/site.json";
import servicesData from "@/data/services.json";
import doctorsData from "@/data/doctors.json";
import testimonialsData from "@/data/testimonials.json";
import workshopsData from "@/data/workshops.json";
import ServiceCard from "@/components/services/ServiceCard";
import DoctorCard from "@/components/doctors/DoctorCard";
import WorkshopCard from "@/components/workshops/WorkshopCard";
import TestimonialCard from "@/components/testimonials/TestimonialCard";
import FaqSection from "@/components/seo/FaqSection";

import { FaInstagram, FaFacebookF } from "react-icons/fa";
import {
  FaUserMd,
  FaNotesMedical,
  FaMicroscope,
  FaRegClock,
  FaChalkboardTeacher,
  FaStar,
  FaHeartbeat,
  FaCheck,
} from "react-icons/fa";

const stats = [
  { value: "4+", label: "Years of Experience" },
  { value: "1,500+", label: "Patients Treated" },
  { value: "98%", label: "Recovery Success" },
  { value: "15+", label: "Therapy Techniques" },
];

const whyChooseUs = [
  {
    icon: FaUserMd,
    title: "Certified Specialists",
    desc: "Treatment led by qualified, experienced physiotherapists you can trust.",
  },
  {
    icon: FaNotesMedical,
    title: "Personalized Plans",
    desc: "Every recovery programme is tailored to your body, goals and lifestyle.",
  },
  {
    icon: FaMicroscope,
    title: "Evidence-Based Care",
    desc: "Modern equipment and the latest, research-backed treatment techniques.",
  },
  {
    icon: FaRegClock,
    title: "Flexible Scheduling",
    desc: "Convenient appointment times that fit around your daily routine.",
  },
];

export default function Home() {
  const featuredServices = servicesData.slice(0, 3);
  const featuredDoctors = doctorsData.slice(0, 2);
  const featuredWorkshops = workshopsData.slice(0, 3);

  return (
    <div className="overflow-hidden font-sans">
      {/* ============================= Hero ============================= */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-slate-950 text-white">
        {/* Layered background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900"></div>
        <div className="absolute right-[-8%] top-[-12%] h-[520px] w-[520px] animate-pulse-slow rounded-full bg-blue-600 opacity-25 mix-blend-screen blur-[120px]"></div>
        <div
          className="absolute bottom-[-15%] left-[-10%] h-[560px] w-[560px] animate-pulse-slow rounded-full bg-sky-500 opacity-20 mix-blend-screen blur-[120px]"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.08]"></div>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"></div>

        <div className="container relative z-10 mx-auto grid grid-cols-1 items-center gap-14 px-4 py-24 md:px-6 lg:grid-cols-2 lg:py-20">
          {/* Left */}
          <div className="animate-fade-in-up space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold tracking-wide text-blue-200 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
              </span>
              Physiotherapy Center in Islamabad
            </div>

            <h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              Recover{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Faster
              </span>
              .<br />
              Move{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Better
              </span>
              .
            </h1>

            <p className="max-w-lg text-lg leading-relaxed text-slate-300 md:text-xl">
              {siteData.tagline}. We combine advanced technology with
              personalized care to help you reclaim your life.
            </p>

            <div className="flex flex-col gap-4 pt-2 sm:flex-row">
              <Link
                href="/appointment"
                className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-blue-900/50 transition hover:from-blue-400 hover:to-blue-500"
              >
                Book Appointment
                <svg
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <Link
                href="/services"
                className="flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                View Services
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-6">
              {["Certified Experts", "Modern Clinic", "1.5k+ Patients"].map(
                (item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm font-medium text-slate-200"
                  >
                    <FaCheck
                      className="text-xs text-blue-400"
                      aria-hidden="true"
                    />
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Right visual */}
          <div
            className="relative hidden animate-fade-in-up lg:block"
            style={{ animationDelay: "0.15s" }}
          >
            {/* Decorative rings */}
            <div className="absolute left-1/2 top-1/2 h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"></div>
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10"></div>

            <div className="relative mx-auto max-w-[440px]">
              {/* Main frame */}
              <div className="animate-float relative flex h-[540px] w-full items-center justify-center overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] shadow-2xl shadow-blue-950/50 backdrop-blur-xl">
                <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/30 blur-3xl"></div>

                {/* ECG pulse line */}
                <svg
                  className="absolute inset-x-0 top-1/2 w-full -translate-y-1/2"
                  viewBox="0 0 400 160"
                  fill="none"
                  preserveAspectRatio="xMidYMid meet"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient
                      id="heroPulse"
                      x1="0"
                      y1="0"
                      x2="400"
                      y2="0"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#60a5fa" stopOpacity="0" />
                      <stop offset="0.35" stopColor="#60a5fa" />
                      <stop offset="0.7" stopColor="#22d3ee" />
                      <stop offset="1" stopColor="#22d3ee" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 80 H118 L132 80 L146 44 L160 120 L174 22 L188 80 L202 80 H400"
                    stroke="url(#heroPulse)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                {/* Center badge */}
                <div className="relative z-10 flex flex-col items-center gap-3 text-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-white/10 text-4xl text-white backdrop-blur-md">
                    <FaHeartbeat aria-hidden="true" />
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">
                    Trusted Care
                  </p>
                </div>
              </div>

              {/* Floating rating card */}
              <div
                className="absolute -right-5 top-10 animate-bounce-slow rounded-2xl bg-white p-4 shadow-xl"
                style={{ animationDuration: "6s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-amber-100 p-2.5 text-lg text-amber-500">
                    <FaStar aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-gray-500">
                      Patient Rating
                    </p>
                    <p className="text-lg font-bold text-gray-900">5.0/5.0</p>
                    <p className="text-xs text-gray-500">on Google Reviews</p>
                  </div>
                </div>
              </div>

              {/* Floating success card */}
              <div
                className="absolute -left-5 bottom-24 animate-bounce-slow rounded-2xl bg-white p-4 shadow-xl"
                style={{ animationDuration: "7s", animationDelay: "1s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-emerald-100 p-2.5 text-lg text-emerald-600">
                    <FaHeartbeat aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-gray-500">
                      Success Rate
                    </p>
                    <p className="text-lg font-bold text-gray-900">98%</p>
                  </div>
                </div>
              </div>

              {/* Avatar stack pill */}
              <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/10 bg-slate-900/80 px-4 py-2 backdrop-blur-md">
                <div className="flex -space-x-2">
                  {[
                    "from-blue-400 to-blue-600",
                    "from-sky-400 to-sky-600",
                    "from-cyan-400 to-cyan-600",
                    "from-indigo-400 to-indigo-600",
                  ].map((g) => (
                    <span
                      key={g}
                      className={`h-7 w-7 rounded-full border-2 border-slate-900 bg-gradient-to-br ${g}`}
                    ></span>
                  ))}
                </div>
                <span className="whitespace-nowrap text-xs font-semibold text-slate-200">
                  1,500+ patients
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= Stats Strip ============================= */}
      <section className="relative z-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="-mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-xl lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card px-6 py-8 text-center transition-colors hover:bg-accent"
              >
                <div className="text-3xl font-bold text-primary md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm font-medium text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= Services ============================= */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="mb-2 block text-sm font-bold uppercase tracking-widest text-primary">
              Our Expertise
            </span>
            <h2 className="mb-6 text-balance text-4xl font-bold text-foreground">
              World-Class Physiotherapy Services
            </h2>
            <p className="text-lg text-muted-foreground">
              We offer a wide range of specialized treatments designed to help
              you recover from injury and improve your quality of life.
            </p>
          </div>

          <div className="mb-16 grid grid-cols-1 gap-8 px-2 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-block rounded-full border-2 border-primary px-8 py-3 font-bold text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              Explore All Treatments
            </Link>
          </div>
        </div>
      </section>

      {/* ============================= Why Choose Us ============================= */}
      <section className="bg-muted py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="mb-2 block text-sm font-bold uppercase tracking-widest text-primary">
              Why Choose Us
            </span>
            <h2 className="mb-6 text-balance text-4xl font-bold text-foreground">
              A Higher Standard of Care
            </h2>
            <p className="text-lg text-muted-foreground">
              From your first consultation to full recovery, we are committed to
              a treatment experience that is safe, personal and effective.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 text-2xl text-white shadow-lg shadow-blue-500/20">
                  <Icon aria-hidden="true" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= Workshops ============================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-24 text-white">
        <div className="absolute right-[-6%] top-[-10%] h-[420px] w-[420px] animate-pulse-slow rounded-full bg-blue-500 opacity-20 mix-blend-multiply blur-3xl"></div>
        <div
          className="absolute bottom-[-15%] left-[-8%] h-[440px] w-[440px] animate-pulse-slow rounded-full bg-sky-600 opacity-20 mix-blend-multiply blur-3xl"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.07]"></div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="mb-2 block text-sm font-bold uppercase tracking-widest text-blue-400">
              Learning &amp; Development
            </span>
            <h2 className="mb-6 text-balance text-4xl font-bold tracking-tight">
              Professional Physiotherapy{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Workshops
              </span>
            </h2>
            <p className="text-lg leading-relaxed text-slate-300">
              We regularly arrange hands-on workshops on a range of advanced
              therapy techniques, conducted under the expert guidance of{" "}
              <span className="font-semibold text-white">
                Dr. Syed Mozaffar
              </span>
              .
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 backdrop-blur-sm">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-sky-500 text-white">
                <FaChalkboardTeacher aria-hidden="true" />
              </span>
              <span className="text-sm font-medium text-slate-200">
                Led by{" "}
                <span className="font-bold text-white">Dr. Syed Mozaffar</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredWorkshops.map((workshop) => (
              <WorkshopCard key={workshop.id} {...workshop} />
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/workshops"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-bold text-blue-900 shadow-xl transition-transform hover:scale-105"
            >
              View All Workshops
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================= Appointment CTA ============================= */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-blue-900">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="mb-8 text-balance text-3xl font-bold text-white md:text-5xl">
            Ready to feel your best?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-blue-100">
            Schedule your consultation today. Our expert team is ready to guide
            you on your path to recovery.
          </p>
          <Link
            href="/appointment"
            className="inline-block rounded-full bg-white px-10 py-4 text-lg font-bold text-blue-900 shadow-2xl transition-transform hover:scale-105"
          >
            Book Your Appointment Now
          </Link>
        </div>
      </section>

      {/* ============================= Doctors Preview ============================= */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 flex flex-col items-end justify-between gap-6 md:flex-row">
            <div>
              <span className="mb-2 block text-sm font-bold uppercase tracking-widest text-primary">
                Our Team
              </span>
              <h2 className="text-4xl font-bold text-foreground">
                Meet The Experts
              </h2>
            </div>
            <Link
              href="/doctors"
              className="hidden font-bold text-primary transition hover:text-primary-dark md:block"
            >
              View All Doctors &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {featuredDoctors.map((doc) => (
              <DoctorCard key={doc.id} {...doc} />
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link
              href="/doctors"
              className="font-bold text-primary transition hover:text-primary-dark"
            >
              View All Doctors &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ============================= Testimonials (Instagram videos) ============================= */}
      <section id="testimonials" className="scroll-mt-24 bg-muted py-24">
        <div className="container mx-auto px-4 md:px-6">
          <header className="mx-auto mb-16 max-w-3xl text-center">
            <span className="mb-2 block text-sm font-bold uppercase tracking-widest text-primary">
              Patient Stories
            </span>
            <h2 className="mb-4 text-4xl font-bold text-foreground">
              Real Patient Video Reviews
            </h2>
            <p className="text-lg text-muted-foreground">
              Watch our patients share their recovery journeys on Instagram.
            </p>

            <div className="mt-6 flex justify-center gap-4">
              <a
                href={siteData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-border bg-card text-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:text-white hover:shadow-lg"
              >
                <span className="absolute inset-0 bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af] opacity-0 transition group-hover:opacity-100" />
                <FaInstagram className="relative text-lg transition-transform duration-300 group-hover:scale-110" />
              </a>

              <a
                href={siteData.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="group relative flex h-14 w-14 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#1877F2] hover:text-white hover:shadow-lg"
              >
                <FaFacebookF className="text-lg transition-transform duration-300 group-hover:scale-110" />
              </a>
            </div>
          </header>

          <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonialsData.map((t) => (
              <TestimonialCard key={t.id} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================= FAQ ============================= */}
      <FaqSection />
    </div>
  );
}
