/* eslint-disable @next/next/no-img-element -- Responsive static WebP assets served directly by Cloudflare. */
import Link from "next/link";
import Button from "@/components/ui/Button";
import GoogleRating from "@/components/ui/GoogleRating";
import { FiArrowUpRight, FiPhone } from "react-icons/fi";
import { telHref, waHref, defaultWaMessage } from "@/lib/site";
export default function Hero() {
  return (
    <section className="home-hero">
      <div className="container-page hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Move well. Live fully.</p>
          <h1>
            Physiotherapy & rehabilitation in{" "}
            <span>River Gardens, Islamabad.</span>
          </h1>
          <p className="hero-promise">
            Recovery built on assessment, not guesswork.
          </p>
          <p className="hero-description">
            Personal care for pain, injury and the everyday movements that
            matter. Led by{" "}
            <Link href="/doctors/dr-syed-mozaffar">Dr. Syed Mozaffar</Link>,
            with a plan shaped around you.
          </p>
          <div className="hero-actions">
            <Button href="/appointment" size="lg">
              Book Appointment <FiArrowUpRight aria-hidden="true" />
            </Button>
            <Button href={telHref} variant="secondary" size="lg">
              <FiPhone aria-hidden="true" />
              Call now
            </Button>
          </div>
          <a
            className="hero-whatsapp"
            href={waHref(defaultWaMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Prefer a message? Chat on WhatsApp ↗
          </a>
          <GoogleRating variant="inline" />
        </div>
        <figure className="hero-photo">
          <img
            src="/images/clinic-interior-1024.webp"
            srcSet="/images/clinic-interior-1024.webp 1024w, /images/clinic-interior-1920.webp 1920w"
            sizes="(min-width: 1100px) 48vw, 100vw"
            width={1024}
            height={551}
            fetchPriority="high"
            alt="The Muscular Junction reception and rehabilitation space in River Gardens, Islamabad"
          />
          <figcaption>
            <span>YOUR LOCAL CLINIC</span>
            <strong>
              A place to take
              <br />
              your next step.
            </strong>
            <Link href="/contact" aria-label="Explore our clinic and location">
              <FiArrowUpRight aria-hidden="true" />
            </Link>
          </figcaption>
        </figure>
      </div>
      <div className="container-page hero-foot">
        <span>Individual Care</span>
        <span>Expert-Guided Rehabilitation</span>
        <span>Female Physiotherapists Available</span>
        <span>Patient Lift Facility</span>
      </div>
    </section>
  );
}
