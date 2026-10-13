import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import articles from "@/data/articles.json";
import services from "@/data/services.json";
import conditions from "@/data/condition-pages.json";
import { pageMetadata, clinicId } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import PageHero from "@/components/layout/PageHero";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import MedicalNote from "@/components/content/MedicalNote";
import RelatedLinks from "@/components/content/RelatedLinks";
import BookingAside from "@/components/content/BookingAside";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.id }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const a = articles.find((a) => a.id === slug);
  if (!a) notFound();
  return pageMetadata(a.title, a.description, `/blog/${a.id}`, true);
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  const a = articles.find((a) => a.id === slug);
  if (!a) notFound();
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Patient journal", path: "/blog" },
          { name: a.title, path: `/blog/${a.id}` },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: a.title,
          description: a.description,
          image: absoluteUrl(a.image),
          datePublished: a.published,
          dateModified: a.updated,
          author: {
            "@type": "Organization",
            "@id": clinicId,
            name: a.author,
            url: absoluteUrl("/about"),
          },
          publisher: { "@id": clinicId },
          mainEntityOfPage: absoluteUrl(`/blog/${a.id}`),
          articleSection: a.category,
        }}
      />
      <PageHero eyebrow={a.category} title={a.title} subtitle={a.description} />
      <div className="container-page section content-layout">
        <article className="prose-content">
          <div className="article-meta">
            <span>
              By <Link href="/about">{a.author}</Link>
            </span>
            <span>
              Updated <time dateTime={a.updated}>13 October 2026</time>
            </span>
          </div>
          <Image
            src={a.image}
            alt={a.imageAlt}
            width={1024}
            height={551}
            className="content-photo"
          />
          {a.sections.map((s) => (
            <section key={s.heading}>
              <h2>{s.heading}</h2>
              {s.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </section>
          ))}
          <RelatedLinks
            title="Related services"
            items={services
              .filter((s) => a.serviceIds.includes(s.id))
              .map((s) => ({ title: s.title, href: `/services/${s.id}` }))}
          />
          <RelatedLinks
            title="Related condition guides"
            items={conditions
              .filter((c) => a.conditionIds.includes(c.id))
              .map((c) => ({ title: c.title, href: `/conditions/${c.id}` }))}
          />
          <RelatedLinks
            title="More from the journal"
            items={articles
              .filter((x) => x.id !== a.id)
              .map((x) => ({ title: x.title, href: `/blog/${x.id}` }))}
          />
          <MedicalNote />
        </article>
        <BookingAside />
      </div>
    </>
  );
}
