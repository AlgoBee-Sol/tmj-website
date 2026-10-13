const steps = [
  [
    "Listen & assess",
    "We discuss your history, goals and the movements that are difficult.",
  ],
  [
    "Explain & plan",
    "We share a clinical impression and agree the next steps with you.",
  ],
  [
    "Treat & practise",
    "Your rehabilitation combines suitable treatment with guided activity.",
  ],
  [
    "Review & progress",
    "We review function, adjust your plan and support your next stage.",
  ],
];
export default function Process() {
  return (
    <section className="section process-section">
      <div className="container-page">
        <p className="eyebrow">Your rehabilitation journey</p>
        <h2 className="display-2 mt-4">A clear plan. One step at a time.</h2>
        <ol className="process-grid">
          {steps.map(([title, body], i) => (
            <li key={title}>
              <span>0{i + 1}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
