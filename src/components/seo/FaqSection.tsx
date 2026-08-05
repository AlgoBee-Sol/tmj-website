import faqsData from "@/data/faqs.json";
import JsonLd from "./JsonLd";
import SectionHeading from "@/components/ui/SectionHeading";

/**
 * Visible FAQ plus matching FAQPage JSON-LD.
 *
 * The questions mirror real pre-booking objections (referral, cost of time,
 * number of sessions, female therapist) which is what makes them useful to
 * patients — and, incidentally, what makes them quotable by Google's AI
 * overviews and answer engines.
 */
export default function FaqSection({
  className = "",
  emitSchema = true,
}: {
  className?: string;
  /** Only one FAQPage block should exist per URL. */
  emitSchema?: boolean;
}) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqsData.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <section className={`section ${className}`}>
      {emitSchema && <JsonLd data={faqSchema} />}

      <div className="container-page">
        <SectionHeading
          eyebrow="Common Questions"
          title="Before you book"
          description="The things patients ask us most often, answered honestly."
        />

        <div className="container-prose mt-12 space-y-3">
          {faqsData.map(({ q, a }) => (
            <details
              key={q}
              className="group card-surface overflow-hidden p-0 transition-colors open:border-primary-line"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-left font-display text-[1.0625rem] font-bold text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
                {q}
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary transition-transform duration-300 group-open:rotate-45"
                  aria-hidden="true"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>

              <p className="px-5 pb-5 text-[0.9375rem] leading-relaxed text-muted-foreground">
                {a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
