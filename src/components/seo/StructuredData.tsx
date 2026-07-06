import siteData from "@/data/site.json";
import servicesData from "@/data/services.json";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || siteData.url;

// Cities/areas the clinic serves — powers "physiotherapy near me" style local intent.
const areaServed = [
  "Islamabad",
  "Rawalpindi",
  "Bahria Town",
  "DHA Islamabad",
].map((name) => ({ "@type": "City", name }));

/**
 * JSON-LD structured data for local / medical SEO.
 * Rendered once in the root layout so it is present on every page.
 * Helps Google (and AI answer engines) surface the clinic in Maps,
 * rich results, knowledge panels and generative overviews.
 */
export default function StructuredData() {
  const clinicId = `${siteUrl}/#clinic`;
  const founderId = `${siteUrl}/#dr-syed-mozaffar`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalClinic", "Physiotherapy", "LocalBusiness"],
        "@id": clinicId,
        name: siteData.name,
        alternateName: "TMJ Physiotherapy Islamabad",
        description:
          "Leading physiotherapy and rehabilitation clinic in Islamabad offering manual therapy, sports rehab, neuro rehab, orthopedic and pediatric physiotherapy, plus professional physiotherapy workshops.",
        slogan: "Recover Faster. Move Better.",
        url: siteUrl,
        telephone: siteData.contact.phone,
        email: siteData.contact.email,
        image: [
          `${siteUrl}/images/logo-tmj.png`,
          `${siteUrl}/images/clinic-interior.png`,
        ],
        logo: `${siteUrl}/images/logo-tmj.png`,
        priceRange: "$$",
        currenciesAccepted: "PKR",
        paymentAccepted: "Cash, Credit Card, Debit Card, Bank Transfer",
        medicalSpecialty: "Physiotherapy",
        knowsAbout: [
          "Physiotherapy",
          "Manual Therapy",
          "Sports Rehabilitation",
          "Neurological Rehabilitation",
          "Orthopedic Physiotherapy",
          "Pediatric Physiotherapy",
          "Dry Needling",
          "Cupping Therapy",
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Gardens Street, Shah's Arcade, River Gardens",
          addressLocality: "Islamabad",
          addressRegion: "Islamabad Capital Territory",
          addressCountry: "PK",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteData.contact.geo.lat,
          longitude: siteData.contact.geo.lng,
        },
        hasMap: siteData.contact.mapEmbedUrl,
        areaServed,
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "09:00",
            closes: "21:00",
          },
        ],
        founder: { "@id": founderId },
        employee: { "@id": founderId },
        sameAs: [
          siteData.social.facebook,
          siteData.social.instagram,
          siteData.social.linkedin,
        ],
        availableService: servicesData.map((service) => ({
          "@type": "MedicalTherapy",
          name: service.title,
          description: service.shortDesc,
        })),
      },
      {
        "@type": ["Person", "Physician"],
        "@id": founderId,
        name: "Dr. Syed Mozaffar",
        jobTitle: "Founder & Lead Physiotherapist",
        medicalSpecialty: "Physiotherapy",
        worksFor: { "@id": clinicId },
        knowsAbout: [
          "Sports Injury Rehabilitation",
          "Manual Therapy",
          "Dry Needling",
          "Cupping Therapy",
          "Mulligan Techniques",
          "HVLA Chiropractic",
        ],
        url: `${siteUrl}/doctors`,
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteData.name,
        description: siteData.tagline,
        inLanguage: "en",
        publisher: { "@id": clinicId },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // JSON-LD is trusted, developer-authored content built from local data.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
