import Link from "next/link";
import articles from "@/data/articles.json";
import { pageMetadata } from "@/lib/seo";
import PageHero from "@/components/layout/PageHero";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import CtaBand from "@/components/ui/CtaBand";
export const metadata = pageMetadata(
  "Patient journal — Physiotherapy & rehabilitation",
  "Practical reading from The Muscular Junction: preparing for an appointment, discussing rehabilitation goals and understanding your care.",
  "/blog",
);
export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Patient journal", path: "/blog" }]} />
      <PageHero
        eyebrow="The patient journal"
        title="Knowledge for a more confident next step."
        subtitle="Practical reading to help you prepare, ask questions and take part in your rehabilitation."
      />
      <section className="section">
        <div className="container-page">
          <div className="blog-grid">
            {articles.map((a) => (
              <article className="blog-card" key={a.id}>
                <p className="eyebrow">{a.category}</p>
                <h2>
                  <Link href={`/blog/${a.id}`}>{a.title}</Link>
                </h2>
                <p>{a.description}</p>
                <p className="mt-4 text-xs">
                  By {a.author} ·{" "}
                  <time dateTime={a.updated}>
                    {new Date(a.updated + "T00:00:00Z").toLocaleDateString(
                      "en-GB",
                      {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                        timeZone: "UTC",
                      },
                    )}
                  </time>
                </p>
                <Link href={`/blog/${a.id}`} className="text-link">
                  Read the guide ↗
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
