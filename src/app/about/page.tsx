import type { Metadata } from "next";
import { FiTarget, FiEye, FiHeart, FiCheck } from "react-icons/fi";
import PageHero from "@/components/layout/PageHero";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import GoogleRating from "@/components/ui/GoogleRating";
import CtaBand from "@/components/ui/CtaBand";
import WhyUs from "@/components/home/WhyUs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Our Physiotherapy Clinic in Islamabad",
  description:
    "The Muscular Junction is an evidence-based physiotherapy and rehabilitation clinic in Zone V, River Gardens, Islamabad — five years of assessment-led care, led by Dr. Syed Mozaffar.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    Icon: FiTarget,
    title: "Precision over guesswork",
    desc: "We do not treat a region because it hurts. We assess, identify the structure responsible, and treat that — then re-test to prove it worked.",
  },
  {
    Icon: FiEye,
    title: "Honesty about outcomes",
    desc: "If physiotherapy is not the right answer for your problem, we will say so and point you to who can help. We would rather lose a booking than waste your money.",
  },
  {
    Icon: FiHeart,
    title: "Care that respects your time",
    desc: "Clear session counts, no open-ended packages, and a discharge plan from the start. Recovery should have an endpoint you can see.",
  },
];

const facilities = [
  "Private, curtained treatment rooms",
  "Full rehabilitation gym and parallel bars",
  "Electrotherapy and modality suite",
  "Dedicated pediatric therapy space",
  "Sterile, single-use dry needling supplies",
  "Ground-floor access with parking outside",
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "About Us", path: "/about" }]} />

      <PageHero
        eyebrow="Who We Are"
        title="Five years of evidence-based physiotherapy in Islamabad"
        subtitle={`The Muscular Junction opened in ${new Date().getFullYear() - site.yearsOfExcellence} with one aim: to make properly assessed, properly measured physiotherapy the normal standard in Islamabad rather than the exception.`}
      />

      {/* ---------------- Story ---------------- */}
      <section className="section">
        <div className="container-page">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element --
                  see Hero.tsx: unoptimized next/image cannot emit a srcset. */}
              <img
                src="/images/clinic-interior-1920.webp"
                srcSet="/images/clinic-interior-1024.webp 1024w, /images/clinic-interior-1920.webp 1920w"
                sizes="(min-width: 1024px) 45vw, 100vw"
                alt="Reception and rehabilitation area at The Muscular Junction clinic, River Gardens, Islamabad"
                width={1920}
                height={1033}
                loading="lazy"
                decoding="async"
                className="w-full rounded-2xl border border-border object-cover shadow-[var(--shadow-lg)]"
              />

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="card-surface p-5">
                  <span className="tabular block font-display text-3xl font-bold text-primary">
                    {site.yearsOfExcellence}
                  </span>
                  <span className="mt-1 block text-sm font-medium text-muted-foreground">
                    Years of Excellence
                  </span>
                </div>
                <div className="card-surface p-5">
                  <span className="tabular block font-display text-3xl font-bold text-primary">
                    {site.patientsTreated}
                  </span>
                  <span className="mt-1 block text-sm font-medium text-muted-foreground">
                    Patients Treated
                  </span>
                </div>
              </div>
            </div>

            <div>
              <span className="eyebrow">Our Story</span>
              <h2 className="display-2 mt-4 text-balance text-foreground">
                Built to close the gap between injury and recovery
              </h2>

              <div className="mt-6 space-y-5 text-[1.0625rem] leading-relaxed text-muted-foreground">
                <p>
                  Dr. Syed Mozaffar founded The Muscular Junction after seeing
                  the same pattern too often: patients handed a set of exercises
                  and a heat pack, discharged without ever being told what was
                  actually wrong, and back in pain within a month.
                </p>
                <p>
                  We built the clinic around the opposite approach. Every
                  patient gets a full physical assessment before any treatment
                  begins, a diagnosis explained in language that makes sense, and
                  a plan with a realistic number of sessions attached to it.
                  Progress is re-measured as we go — so when something is not
                  working, we know early and change it.
                </p>
                <p>
                  That standard is also why we teach. Dr. Mozaffar runs certified
                  workshops in dry needling, Mulligan techniques, HVLA and
                  cupping for practising physiotherapists across Pakistan,
                  because raising the floor for the profession helps patients
                  well beyond our own treatment rooms.
                </p>
              </div>

              <GoogleRating variant="card" className="mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Values ---------------- */}
      <section className="section bg-surface">
        <div className="container-page">
          <SectionHeading
            eyebrow="What We Stand For"
            title="Three commitments we hold ourselves to"
          />

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {values.map(({ Icon, title, desc }) => (
              <div key={title} className="card-surface card-hover p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-xl text-primary ring-1 ring-primary-line">
                  <Icon aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                  {title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Facilities ---------------- */}
      <section className="section">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="eyebrow">The Clinic</span>
              <h2 className="display-2 mt-4 text-balance text-foreground">
                A space built for rehabilitation, not just treatment
              </h2>
              <p className="lead mt-5 text-muted-foreground">
                Hands-on therapy needs a private room. Loading and gait work need
                actual floor space and equipment. Our clinic in{" "}
                {site.contact.address} has both.
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {facilities.map((facility) => (
                <li
                  key={facility}
                  className="card-surface flex items-start gap-3 p-5"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success-soft text-success">
                    <FiCheck className="h-3 w-3" aria-hidden="true" />
                  </span>
                  <span className="text-[0.9375rem] text-muted-foreground">
                    {facility}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <WhyUs showCta={false} />
      <CtaBand />
    </>
  );
}
