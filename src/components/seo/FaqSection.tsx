import { clinicFaqs, type Faq } from "@/lib/faqs";
import JsonLd from "./JsonLd";
export default function FaqSection({
  className = "",
  emitSchema = true,
  items = clinicFaqs,
  title = "Before you book",
}: {
  className?: string;
  emitSchema?: boolean;
  items?: Faq[];
  title?: string;
}) {
  return (
    <section className={`section ${className}`}>
      <div className="container-page faq-layout">
        <div>
          <p className="eyebrow">Your questions</p>
          <h2 className="display-2 mt-4">{title}</h2>
          <p className="mt-5 text-muted-foreground">
            A little clarity before your first visit.
          </p>
        </div>
        <div>
          {items.map(({ q, a }) => (
            <details key={q} className="faq-item">
              <summary>
                {q}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
      {emitSchema && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: items.map(({ q, a }) => ({
              "@type": "Question",
              name: q,
              acceptedAnswer: { "@type": "Answer", text: a },
            })),
          }}
        />
      )}
    </section>
  );
}
