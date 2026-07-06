import JsonLd from "./JsonLd";

/**
 * Visible FAQ + FAQPage JSON-LD.
 * The questions target common local search intent ("physiotherapy in Islamabad",
 * "conditions treated", "do I need a referral") and feed Google's AI Overviews
 * and answer engines, which read the on-page content and the structured data.
 */
const faqs = [
  {
    q: "Where is The Muscular Junction physiotherapy clinic located?",
    a: "The Muscular Junction is located at Gardens Street, Shah's Arcade, River Gardens, Islamabad. We welcome patients from across Islamabad, Rawalpindi, Bahria Town and DHA Islamabad.",
  },
  {
    q: "What conditions do you treat at your physiotherapy clinic?",
    a: "We treat back and neck pain, sports injuries, post-surgery and post-fracture rehabilitation, sciatica, frozen shoulder, arthritis, sprains and strains, stroke and other neurological conditions, and pediatric developmental issues — using manual therapy, sports rehab, neuro rehab, orthopedic and pediatric physiotherapy.",
  },
  {
    q: "Who is Dr. Syed Mozaffar?",
    a: "Dr. Syed Mozaffar is the founder and lead physiotherapist at The Muscular Junction. He specialises in sports injury rehabilitation and advanced manual therapy, and leads the clinic's professional physiotherapy workshops on dry needling, cupping, Mulligan and HVLA techniques.",
  },
  {
    q: "Do I need a doctor's referral to book a physiotherapy session?",
    a: "No referral is required. You can book a physiotherapy appointment directly with The Muscular Junction by phone, WhatsApp or through our online booking form.",
  },
  {
    q: "What are your clinic timings and how do I book an appointment?",
    a: "The clinic is open Monday to Saturday, 9:00 AM to 9:00 PM. You can book instantly on WhatsApp, call us, or send a request through the appointment page and our team will confirm your slot.",
  },
  {
    q: "Do you offer physiotherapy workshops and training?",
    a: "Yes. We regularly run hands-on, certified physiotherapy workshops in Islamabad — including Dry Needling, Kinesio Taping, Mulligan Techniques, HVLA Chiropractic and Cupping Therapy — led by Dr. Syed Mozaffar.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function FaqSection() {
  return (
    <section className="bg-background py-24">
      <JsonLd data={faqSchema} />
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-2 block text-sm font-bold uppercase tracking-widest text-primary">
            Frequently Asked Questions
          </span>
          <h2 className="mb-4 text-balance text-4xl font-bold text-foreground">
            Physiotherapy in Islamabad — Your Questions Answered
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about treatment, booking and our clinic.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map(({ q, a }) => (
            <details
              key={q}
              className="group rounded-2xl border border-border bg-card p-6 transition-colors open:border-primary/30"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-foreground marker:content-none">
                {q}
                <span className="shrink-0 text-primary transition-transform duration-300 group-open:rotate-45">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
