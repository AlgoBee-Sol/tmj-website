import servicesData from "@/data/services.json";
import Stars from "@/components/ui/Stars";
import { site } from "@/lib/site";

/**
 * Overlapping trust strip.
 *
 * Every figure here is one a visitor could verify — years open, patients seen,
 * the public Google rating, the number of treatments offered. Nothing is an
 * unauditable clinical outcome claim.
 */
export default function TrustStats() {
  const stats = [
    {
      value: String(site.yearsOfExcellence),
      label: "Years of Excellence",
      sub: "Serving Islamabad since 2021",
    },
    {
      value: site.patientsTreated,
      label: "Patients Treated",
      sub: "Across every specialty",
    },
    {
      value: site.rating.value,
      label: "Google Rating",
      sub: `From ${site.rating.countLabel} patient reviews`,
      rating: true,
      href: site.rating.url,
    },
    {
      value: String(servicesData.length),
      label: "Specialist Services",
      sub: "From manual therapy to neuro rehab",
    },
  ];

  return (
    <section className="relative z-10 bg-background">
      <div className="container-page">
        <div className="-mt-12 grid grid-cols-2 overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-lg)] lg:grid-cols-4">
          {stats.map((stat, i) => {
            const inner = (
              <>
                <div className="flex items-baseline justify-center gap-1.5">
                  <span className="tabular font-display text-3xl font-bold text-primary md:text-4xl">
                    {stat.value}
                  </span>
                  {stat.rating && (
                    <Stars
                      value={5}
                      size={14}
                      className="relative -top-0.5 text-foreground"
                    />
                  )}
                </div>
                <div className="mt-1.5 text-sm font-semibold text-foreground">
                  {stat.label}
                </div>
                <div className="mt-0.5 text-xs text-subtle-foreground">
                  {stat.sub}
                </div>
              </>
            );

            const cell =
              "px-4 py-7 text-center transition-colors md:px-6 " +
              (i % 2 === 0 ? "border-r border-border " : "") +
              (i < 2 ? "border-b border-border lg:border-b-0 " : "") +
              "lg:border-r lg:last:border-r-0";

            return stat.href ? (
              <a
                key={stat.label}
                href={stat.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${cell} hover:bg-surface`}
                aria-label={`${site.name} is rated ${site.rating.value} out of 5 by ${site.rating.countLabel} patients on Google — opens Google Reviews in a new tab`}
              >
                {inner}
              </a>
            ) : (
              <div key={stat.label} className={cell}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
