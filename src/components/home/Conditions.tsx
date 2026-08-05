import conditionsData from "@/data/conditions.json";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { FiArrowRight } from "react-icons/fi";

/**
 * "Do you treat my problem?" — the first question most visitors actually have.
 *
 * Answering it explicitly is both the fastest qualification step in the funnel
 * and the page's densest block of genuine local search terms.
 */
export default function Conditions({
  className = "",
}: {
  className?: string;
}) {
  return (
    <section id="conditions" className={`section scroll-mt-28 ${className}`}>
      <div className="container-page">
        <SectionHeading
          eyebrow="Conditions We Treat"
          title="Come in with a problem, leave with a plan"
          description="If your condition is on this list, we see it regularly. If it isn't, send us a message anyway — we will tell you honestly whether physiotherapy is the right route."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {conditionsData.map((group) => (
            <div key={group.group} className="card-surface p-6">
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-primary">
                {group.group}
              </h3>

              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <svg
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 text-primary"
                      viewBox="0 0 6 6"
                      aria-hidden="true"
                    >
                      <circle cx="3" cy="3" r="3" fill="currentColor" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="/appointment" variant="secondary" size="lg">
            Not sure? Book an assessment
            <FiArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}
