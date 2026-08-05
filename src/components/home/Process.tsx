import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    n: "01",
    title: "Full assessment",
    time: "45–60 min",
    desc: "We take your history, test your movement, strength and joints, and find the structure that is actually driving your symptoms — not just the spot that hurts.",
  },
  {
    n: "02",
    title: "A plan you can see",
    time: "Same visit",
    desc: "You get a clear explanation of the diagnosis, the treatment plan, and an honest estimate of how many sessions it should take. Most patients start treatment the same day.",
  },
  {
    n: "03",
    title: "Treat, load, re-test",
    time: "Each session",
    desc: "Hands-on treatment is paired with graded exercise, and we re-measure as we go. If the numbers are not moving, the plan changes — we do not repeat a treatment that is not working.",
  },
  {
    n: "04",
    title: "Discharge, not dependence",
    time: "End of course",
    desc: "The goal is to finish. You leave with a maintenance programme and the knowledge to manage flare-ups yourself, rather than an open-ended course of appointments.",
  },
];

/**
 * What actually happens, in order. Removes the two things that stop people
 * booking: not knowing what the first visit involves, and suspecting they will
 * be strung along for sessions they do not need.
 */
export default function Process() {
  return (
    <section className="section bg-surface">
      <div className="container-page">
        <SectionHeading
          eyebrow="How It Works"
          title="What to expect, from first call to discharge"
          description="No mystery, no open-ended packages. Here is exactly how a course of treatment runs at our clinic."
        />

        <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.n} className="relative">
              {/* Connector between steps on wide screens */}
              {i < steps.length - 1 && (
                <span
                  className="absolute left-[calc(100%+0.35rem)] top-9 hidden h-px w-[calc(1.25rem-0.7rem)] bg-border-strong lg:block"
                  aria-hidden="true"
                />
              )}

              <div className="card-surface flex h-full flex-col p-6">
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl font-bold text-primary-line">
                    {step.n}
                  </span>
                  <span className="rounded-full bg-primary-soft px-2.5 py-1 text-[0.6875rem] font-semibold text-primary">
                    {step.time}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
