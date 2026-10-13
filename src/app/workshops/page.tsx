import workshops from "@/data/workshops.json";
import WorkshopCard from "@/components/workshops/WorkshopCard";
import PageHero from "@/components/layout/PageHero";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";
import { workshopStatus } from "@/lib/workshops.mjs";
import Button from "@/components/ui/Button";
import { waHref } from "@/lib/site";
export const dynamic = "force-dynamic";
export const metadata = pageMetadata(
  "Physiotherapy workshops in Islamabad",
  "Explore Mulligan Technique, Kinesiology Taping and other physiotherapy workshops at The Muscular Junction, River Gardens, Islamabad. Dates, programmes and archives.",
  "/workshops",
);
export default function Page() {
  const upcoming = workshops
    .filter((w) => ["upcoming", "in-progress"].includes(workshopStatus(w)))
    .sort((a, b) => (a.startDate || "").localeCompare(b.startDate || ""));
  const past = workshops.filter((w) => workshopStatus(w) === "past");
  return (
    <>
      <Breadcrumbs items={[{ name: "Workshops", path: "/workshops" }]} />
      <PageHero
        eyebrow="Professional education"
        title="Learn together. Practise thoughtfully."
        subtitle="Hands-on physiotherapy workshops at The Muscular Junction in River Gardens, Islamabad. Explore the principles, practical applications and clinical reasoning behind treatment."
      />
      <section className="section" id="programmes">
        <div className="container-page">
          <h2 className="display-2 mb-8">Upcoming workshops</h2>
          {upcoming.length ? (
            <div className="workshop-grid">
              {upcoming.map((w) => (
                <WorkshopCard key={w.id} workshop={w} />
              ))}
            </div>
          ) : (
            <p className="lead">
              Contact the clinic for the next workshop dates.
            </p>
          )}
          <p className="text-sm text-muted-foreground mt-6">
            Please confirm eligibility, fees and availability with the clinic
            before registering. Workshop participation does not replace
            professional registration or permission to practise.
          </p>
        </div>
      </section>
      {past.length > 0 && (
        <section className="section bg-surface">
          <div className="container-page">
            <h2 className="display-2 mb-8">Past events</h2>
            <div className="workshop-grid">
              {past.map((w) => (
                <WorkshopCard key={w.id} workshop={w} />
              ))}
            </div>
          </div>
        </section>
      )}
      <section className="section bg-surface">
        <div className="container-page">
          <p className="eyebrow">Continue exploring</p>
          <h2 className="display-2 mt-4 mb-8">Programme archive</h2>
          <div className="workshop-grid">
            {workshops
              .filter((w) => !w.startDate)
              .map((w) => (
                <WorkshopCard key={w.id} workshop={w} />
              ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container-page">
          <h2 className="display-2">Training enquiries</h2>
          <p className="lead mt-4">
            Ask about future sessions, group learning or a previous workshop.
          </p>
          <Button
            className="mt-6"
            href={waHref(
              "Hello, I would like information about physiotherapy workshops at The Muscular Junction.",
            )}
          >
            Ask about workshops ↗
          </Button>
        </div>
      </section>
    </>
  );
}
