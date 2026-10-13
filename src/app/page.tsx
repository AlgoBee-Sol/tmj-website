import Link from "next/link";
import services from "@/data/services.json";
import testimonials from "@/data/testimonials.json";
import Hero from "@/components/home/Hero";
import Conditions from "@/components/home/Conditions";
import DoctorFeature from "@/components/home/DoctorFeature";
import Process from "@/components/home/Process";
import WhyUs from "@/components/home/WhyUs";
import LocationSection from "@/components/home/LocationSection";
import FaqSection from "@/components/seo/FaqSection";
import CtaBand from "@/components/ui/CtaBand";
import GoogleRating from "@/components/ui/GoogleRating";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Physiotherapy in River Gardens, Islamabad",
  "Assessment-led physiotherapy and rehabilitation at The Muscular Junction, River Gardens, Islamabad. Meet Dr. Syed Mozaffar and book an appointment.",
  "/",
);
export default function Home() {
  return (
    <>
      <Hero />
      <Conditions />
      <section className="section bg-surface">
        <div className="container-page">
          <div className="section-intro">
            <div>
              <p className="eyebrow">Our services</p>
              <h2 className="display-2 mt-4">
                Different needs.
                <br />A considered approach.
              </h2>
            </div>
            <div>
              <p className="lead">
                From hands-on therapy to a structured return to activity, your
                assessment guides the treatment.
              </p>
              <Link href="/services" className="text-link mt-5">
                Explore all services ↗
              </Link>
            </div>
          </div>
          <div className="home-services">
            {services.slice(0, 6).map((s, i) => (
              <Link href={`/services/${s.id}`} key={s.id}>
                <span className="row-number">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.shortDesc}</p>
                <span className="service-arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <DoctorFeature />
      <WhyUs />
      <Process />
      <section id="reviews" className="section reviews-section">
        <div className="container-page">
          <div className="section-intro">
            <div>
              <p className="eyebrow">Patient perspectives</p>
              <h2 className="display-2 mt-4">In our patients’ words.</h2>
            </div>
            <GoogleRating />
          </div>
          <div className="testimonial-grid">
            {testimonials.map((t) => (
              <figure key={t.id}>
                <span className="quote-mark" aria-hidden="true">
                  “
                </span>
                <blockquote>{t.text}</blockquote>
                <figcaption>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </figcaption>
                <a href={t.videoUrl} target="_blank" rel="noopener noreferrer">
                  {t.videoUrl.includes("/reel/")
                    ? "View patient story"
                    : "Clinic Instagram"}{" "}
                  ↗
                </a>
              </figure>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Individual experiences vary. These accounts do not predict another
            person’s treatment outcome.
          </p>
        </div>
      </section>
      <section className="education-band">
        <div className="container-page">
          <div>
            <p className="eyebrow">For the profession</p>
            <h2>
              Learning that supports
              <br />
              thoughtful clinical practice.
            </h2>
          </div>
          <div>
            <p>
              Explore hands-on workshops in Mulligan techniques, taping, dry
              needling and rehabilitation, with Dr. Syed Mozaffar.
            </p>
            <Link href="/workshops" className="text-link">
              Upcoming workshops & archive ↗
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
