import Link from "next/link";
const reasons = [
  [
    "Time to understand you",
    "Your history and goals help shape the assessment and treatment options.",
  ],
  [
    "An active part in your recovery",
    "We explain what you can practise between appointments and how to review your response.",
  ],
  [
    "Progress that means something",
    "Goals focus on the activities you want to regain, with regular review and adjustment.",
  ],
  [
    "Care with clear boundaries",
    "We discuss alternatives and recommend medical assessment when physiotherapy is not the appropriate next step.",
  ],
];
export default function WhyUs({ showCta = true }: { showCta?: boolean }) {
  return (
    <section className="section">
      <div className="container-page why-layout">
        <div>
          <p className="eyebrow">Why The Muscular Junction</p>
          <h2 className="display-2 mt-4">
            Care built around
            <br />
            the person, too.
          </h2>
          <p className="lead mt-5">
            Good rehabilitation starts with listening. It continues with a plan
            you understand.
          </p>
          {showCta && (
            <Link href="/about" className="text-link mt-6">
              Our approach to care ↗
            </Link>
          )}
        </div>
        <div className="why-list">
          {reasons.map(([title, body]) => (
            <div key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
