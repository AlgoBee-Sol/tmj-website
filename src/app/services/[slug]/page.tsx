import { notFound } from "next/navigation";
import services from "@/data/services.json";
import conditions from "@/data/condition-pages.json";
import { pageMetadata, clinicId } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import PageHero from "@/components/layout/PageHero";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import FaqSection from "@/components/seo/FaqSection";
import RelatedLinks from "@/components/content/RelatedLinks";
import MedicalNote from "@/components/content/MedicalNote";
import BookingAside from "@/components/content/BookingAside";
import Image from "next/image";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const s = services.find((s) => s.id === slug);
  if (!s) notFound();
  return pageMetadata(s.seoTitle, s.metaDescription, `/services/${s.id}`);
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  const s = services.find((s) => s.id === slug);
  if (!s) notFound();
  const related = conditions.filter((c) => s.conditionIds.includes(c.id));
  const other = services
    .filter(
      (x) =>
        x.id !== s.id &&
        (x.conditionIds.some((id) => s.conditionIds.includes(id)) ||
          (s.id === "dry-needling-cupping" &&
            ["dry-needling", "cupping-therapy"].includes(x.id))),
    )
    .slice(0, 4);
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Services", path: "/services" },
          { name: s.title, path: `/services/${s.id}` },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": absoluteUrl(`/services/${s.id}#service`),
          name: s.title,
          description: s.fullDesc,
          url: absoluteUrl(`/services/${s.id}`),
          provider: { "@id": clinicId },
          areaServed: { "@type": "Place", name: "River Gardens, Islamabad" },
          serviceType: s.title,
        }}
      />
      <PageHero
        eyebrow="Assessment-led care · River Gardens"
        title={s.seoTitle}
        subtitle={s.shortDesc}
      />
      <div className="container-page section content-layout">
        <article className="prose-content">
          <h2>What is {s.title.toLowerCase()}?</h2>
          <p>{s.fullDesc}</p>
          <h2>What happens during treatment?</h2>
          <ol>
            {s.whatWeDo.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ol>
          <h2>Goals and potential benefits</h2>
          <p>{s.benefit}</p>
          <div className="care-note">
            <h2>Is it suitable for you?</h2>
            <p>{s.suitability}</p>
          </div>
          {related.length > 0 ? (
            <RelatedLinks
              title="When this service may be considered"
              items={related.map((c) => ({
                title: c.title,
                href: `/conditions/${c.id}`,
              }))}
            />
          ) : (
            <>
              <h2>Who may benefit?</h2>
              <ul>
                {s.conditions.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </>
          )}
          <h2>Care at The Muscular Junction</h2>
          <p>
            Our River Gardens clinic brings assessment, discussion and
            rehabilitation together. We explain the options, agree goals and
            review how the plan is working. Ask about clinician availability and
            session length when booking.
          </p>
          <Image
            src="/images/clinic-interior-1024.webp"
            alt="Reception at The Muscular Junction clinic in River Gardens"
            width={1024}
            height={551}
            className="content-photo"
          />
          <RelatedLinks
            title="Related services"
            items={other.map((x) => ({
              title: x.title,
              href: `/services/${x.id}`,
            }))}
          />
          <RelatedLinks
            title="Meet your care team"
            items={[
              { title: "Dr. Syed Mozaffar", href: "/doctors/dr-syed-mozaffar" },
              { title: "All physiotherapists", href: "/doctors" },
              { title: "Visit the clinic", href: "/contact" },
            ]}
          />
          <MedicalNote />
          {s.id === "cupping-therapy" && (
            <p className="source-note">
              Further reading:{" "}
              <a href="https://www.nccih.nih.gov/health/cupping">
                NCCIH information on cupping and evidence limitations
              </a>
              .
            </p>
          )}
        </article>
        <BookingAside />
      </div>
      <FaqSection
        items={s.faqs}
        title={`Questions about ${s.title.toLowerCase()}`}
        className="bg-surface"
      />
    </>
  );
}
