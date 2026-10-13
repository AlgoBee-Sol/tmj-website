import Image from "next/image";
import doctors from "@/data/doctors.json";
import services from "@/data/services.json";
import conditions from "@/data/condition-pages.json";
import { pageMetadata, founderId, clinicId } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import RelatedLinks from "@/components/content/RelatedLinks";
import BookingAside from "@/components/content/BookingAside";
import MedicalNote from "@/components/content/MedicalNote";
import Button from "@/components/ui/Button";
const d = doctors[0];
const profile = d.profile!;
export const metadata = pageMetadata(
  "Dr. Syed Mozaffar — Physiotherapist in Islamabad",
  "Meet Dr. Syed Mozaffar, physiotherapist and neuro rehabilitation specialist at The Muscular Junction, River Gardens, Islamabad. Education, approach and appointments.",
  "/doctors/dr-syed-mozaffar",
);
export default function Page() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Doctors", path: "/doctors" },
          { name: d.name, path: `/doctors/${d.id}` },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": founderId,
          name: d.name,
          jobTitle: `${d.designation}; ${d.clinicalTitle}`,
          description: d.bio,
          hasCredential: {
            "@type": "EducationalOccupationalCredential",
            name: profile.education.qualification,
          },
          alumniOf: {
            "@type": "EducationalOrganization",
            name: profile.education.institution,
          },
          worksFor: { "@id": clinicId },
          url: absoluteUrl(`/doctors/${d.id}`),
          image: absoluteUrl(d.image),
          knowsAbout: d.specializations,
        }}
      />
      <section className="page-hero">
        <div className="container-page profile-hero">
          <div>
            <p className="eyebrow">Founder & lead physiotherapist</p>
            <h1>{d.name}</h1>
            <p className="doctor-role">{d.clinicalTitle}</p>
            <p className="mt-3 text-muted-foreground">{d.credentials} · River Gardens, Islamabad</p>
            <p className="lead mt-6">
              Assessment-led physiotherapy, clear explanations and
              rehabilitation built around your goals.
            </p>
            <Button className="mt-7" href="/appointment">
              Request an appointment ↗
            </Button>
          </div>
          <Image
            src={d.image}
            width={600}
            height={750}
            alt="Dr. Syed Mozaffar at The Muscular Junction"
            priority
          />
        </div>
      </section>
      <div className="container-page section content-layout">
        <article className="prose-content">
          <h2>About Dr. Mozaffar</h2>
          <p>{d.bio}</p>
          <h2>Education & clinical experience</h2>
          <p>
            <strong>{profile.education.qualification}</strong><br />
            {profile.education.institution}
          </p>
          <p>
            His clinical experience at {profile.experience.institution} includes work across the following departments:
          </p>
          <ul>
            {profile.experience.departments.map((department) => <li key={department}>{department}</li>)}
          </ul>
          <h2>A collaborative approach to rehabilitation</h2>
          <p>
            His approach centres on helping patients understand their care and take an active role in recovery.
            Treatment is planned together, with attention to daily function, quality of life and individual priorities.
          </p>
          <ul>
            {profile.approach.map((point) => <li key={point.title}><strong>{point.title}.</strong> {point.text}</li>)}
          </ul>
          <h2>Clinical interests</h2>
          <RelatedLinks
            title="Services to explore"
            items={services
              .filter((s) =>
                [
                  "manual-therapy",
                  "neuro-rehab",
                  "sports-rehab",
                  "dry-needling",
                  "cupping-therapy",
                ].includes(s.id),
              )
              .map((s) => ({ title: s.title, href: `/services/${s.id}` }))}
          />
          <RelatedLinks
            title="Common reasons to arrange an assessment"
            items={conditions
              .filter((c) =>
                [
                  "back-pain",
                  "stroke-rehabilitation",
                  "neck-pain",
                  "shoulder-pain",
                  "sports-injuries",
                  "acl-injury-rehabilitation",
                ].includes(c.id),
              )
              .map((c) => ({ title: c.title, href: `/conditions/${c.id}` }))}
          />
          <h2>Clinical techniques & professional development</h2>
          <p>{profile.development}</p>
          <ul>
            {profile.techniques.map((technique) => <li key={technique}>{technique}</li>)}
          </ul>
          <p>
            Each technique is considered in the context of assessment, suitability and informed consent.
            Hands-on treatment may form part of a broader rehabilitation plan alongside exercise and education.
          </p>
          <RelatedLinks
            title="Workshops and appointments"
            items={[
              {
                title: "Mulligan Technique — 25 October 2026",
                href: "/workshops/mulligan-technique-october-2026",
              },
              { title: "Workshop programmes & archive", href: "/workshops" },
              { title: "Clinic location and hours", href: "/contact" },
              { title: "Book with the clinic", href: "/appointment" },
            ]}
          />
          <MedicalNote />
        </article>
        <BookingAside />
      </div>
    </>
  );
}
