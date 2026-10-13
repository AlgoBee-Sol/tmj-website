import Link from "next/link";
import data from "@/data/condition-pages.json";
import { pageMetadata } from "@/lib/seo";
import PageHero from "@/components/layout/PageHero";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import CtaBand from "@/components/ui/CtaBand";
export const metadata = pageMetadata(
  "Conditions we help manage in Islamabad",
  "Explore physiotherapy for back, neck, knee and shoulder pain, sports injuries and stroke rehabilitation at The Muscular Junction, River Gardens.",
  "/conditions",
);
export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Conditions", path: "/conditions" }]} />
      <PageHero
        eyebrow="Understand your symptoms"
        title="Care that starts with your everyday life."
        subtitle="A condition name is a starting point. Your assessment helps us understand what it means for you, and which treatment options may help."
      />
      <section className="section">
        <div className="container-page">
          {[...new Set(data.map((c) => c.group))].map((group) => (
            <section className="directory-group" key={group}>
              <h2>{group}</h2>
              <div>
                {data
                  .filter((c) => c.group === group)
                  .map((c) => (
                    <Link
                      className="directory-row"
                      key={c.id}
                      href={`/conditions/${c.id}`}
                    >
                      <h3>{c.title}</h3>
                      <p>{c.intro}</p>
                      <span aria-hidden="true">↗</span>
                    </Link>
                  ))}
              </div>
            </section>
          ))}
        </div>
      </section>
      <CtaBand
        title="Not sure where to start?"
        description="Describe what is affecting your daily life when you contact the clinic. We can help you arrange an assessment."
      />
    </>
  );
}
