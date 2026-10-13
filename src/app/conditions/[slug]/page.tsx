import { notFound } from "next/navigation";
import conditions from "@/data/condition-pages.json";
import services from "@/data/services.json";
import { pageMetadata, clinicId } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import PageHero from "@/components/layout/PageHero";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import FaqSection from "@/components/seo/FaqSection";
import MedicalNote from "@/components/content/MedicalNote";
import RelatedLinks from "@/components/content/RelatedLinks";
import BookingAside from "@/components/content/BookingAside";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return conditions.map((c) => ({ slug: c.id }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const c = conditions.find((c) => c.id === slug);
  if (!c) notFound();
  return pageMetadata(c.seoTitle, c.metaDescription, `/conditions/${c.id}`);
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  const c = conditions.find((c) => c.id === slug);
  if (!c) notFound();
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Conditions", path: "/conditions" },
          { name: c.title, path: `/conditions/${c.id}` },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          name: c.seoTitle,
          url: absoluteUrl(`/conditions/${c.id}`),
          about: { "@type": "MedicalCondition", name: c.title },
          publisher: { "@id": clinicId },
          dateModified: c.updated,
        }}
      />
      <PageHero eyebrow={c.group} title={c.seoTitle} subtitle={c.intro} />
      <div className="container-page section content-layout">
        <article className="prose-content">
          <h2>Common symptoms</h2>
          <ul>
            {c.symptoms.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
          <h2>What may contribute?</h2>
          <p>{c.causes}</p>
          <div className="care-note">
            <h2>When to seek medical assessment</h2>
            <p>{c.seekHelp}</p>
          </div>
          <h2>Your assessment in River Gardens</h2>
          <p>{c.assessment}</p>
          <h2>How physiotherapy may help</h2>
          <p>{c.treatment}</p>
          <h2>Recovery and progress</h2>
          <p>{c.recovery}</p>
          <RelatedLinks
            title="Related treatment options"
            items={services
              .filter((s) => c.serviceIds.includes(s.id))
              .map((s) => ({ title: s.title, href: `/services/${s.id}` }))}
          />
          <RelatedLinks
            title="Explore next"
            items={[
              ...conditions
                .filter((x) => c.relatedIds.includes(x.id))
                .map((x) => ({ title: x.title, href: `/conditions/${x.id}` })),
              {
                title:
                  c.id === "stroke-rehabilitation"
                    ? "Meet our rehabilitation team"
                    : "Dr. Syed Mozaffar",
                href:
                  c.id === "stroke-rehabilitation"
                    ? "/doctors"
                    : "/doctors/dr-syed-mozaffar",
              },
              { title: "Clinic location & directions", href: "/contact" },
            ]}
          />
          <MedicalNote />
          <p className="source-note">
            Further reading:{" "}
            <a href={c.source} target="_blank" rel="noopener noreferrer">
              {c.sourceLabel}: {c.title}
            </a>
            . Content updated <time dateTime={c.updated}>13 October 2026</time>.
          </p>
        </article>
        <BookingAside />
      </div>
      <FaqSection
        items={c.faqs}
        title={`Questions about ${c.title.toLowerCase()}`}
        className="bg-surface"
      />
    </>
  );
}
