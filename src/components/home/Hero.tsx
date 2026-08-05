import { FiMapPin, FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Button from "@/components/ui/Button";
import GoogleRating from "@/components/ui/GoogleRating";
import { site, waHref, defaultWaMessage } from "@/lib/site";

const proof = [
  "No doctor's referral needed",
  "Same-day booking on WhatsApp",
  "Female physiotherapist available",
];

/**
 * Home hero.
 *
 * The background is the clinic's own reception — a real photo of a real room is
 * the strongest trust signal available, and it does more work here than any
 * stock illustration would. It is also the LCP element, so it is served as a
 * pre-sized WebP with an explicit srcset and high fetch priority.
 */
export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      {/* Photographic backdrop */}
      {/* eslint-disable-next-line @next/next/no-img-element --
          next/image runs unoptimized on this deploy (no Cloudflare IMAGES
          binding), so it cannot emit a srcset. A plain <img> with pre-built
          WebP derivatives is strictly smaller here. */}
      <img
        src="/images/clinic-interior-1920.webp"
        srcSet="/images/clinic-interior-1024.webp 1024w, /images/clinic-interior-1920.webp 1920w"
        sizes="100vw"
        alt="The reception and treatment area at The Muscular Junction physiotherapy clinic in River Gardens, Islamabad"
        width={1920}
        height={1033}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
      />

      {/* Scrim: keeps the copy legible while leaving the room visible */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/94 to-ink/60 md:to-ink/35"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-transparent to-ink/70"
        aria-hidden="true"
      />

      <div className="container-page relative py-20 md:py-28 lg:py-32">
        <div className="max-w-2xl">
          <p className="rise inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-3.5 py-1.5 text-xs font-semibold text-on-ink backdrop-blur-sm">
            <FiMapPin className="h-3.5 w-3.5 text-teal" aria-hidden="true" />
            Physiotherapy &amp; Rehabilitation · {site.contact.address}
          </p>

          <h1
            className="rise display-1 mt-6 text-balance text-white"
            style={{ animationDelay: "60ms" }}
          >
            Recovery built on{" "}
            <span className="text-teal">assessment</span>, not guesswork.
          </h1>

          <p
            className="rise lead mt-6 max-w-xl text-on-ink-muted"
            style={{ animationDelay: "120ms" }}
          >
            Every treatment plan at The Muscular Junction starts with a full
            physical assessment — so you leave the first session knowing what is
            wrong, what we are doing about it, and roughly how long it should
            take.
          </p>

          <div
            className="rise mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "180ms" }}
          >
            <Button href="/appointment" size="lg">
              Book an assessment
              <FiArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button
              href={waHref(defaultWaMessage)}
              variant="on-ink"
              size="lg"
              aria-label="Book on WhatsApp — opens in a new tab"
            >
              <FaWhatsapp className="h-5 w-5 text-[#25D366]" aria-hidden="true" />
              Book on WhatsApp
            </Button>
          </div>

          <div
            className="rise mt-9 flex flex-wrap items-center gap-x-5 gap-y-3"
            style={{ animationDelay: "240ms" }}
          >
            <GoogleRating variant="ink" />

            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {proof.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-on-ink-muted"
                >
                  <svg
                    className="h-4 w-4 shrink-0 text-teal"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m5 13 4 4L19 7"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
