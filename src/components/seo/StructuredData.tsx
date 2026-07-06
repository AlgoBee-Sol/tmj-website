import siteData from "@/data/site.json";
import servicesData from "@/data/services.json";

/**
 * JSON-LD structured data for local / medical SEO.
 * Rendered once in the root layout so it is present on every page.
 * Helps Google surface the clinic in Maps, rich results and knowledge panels.
 */
export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalClinic", "Physiotherapy"],
        "@id": `${siteData.url}/#clinic`,
        name: siteData.name,
        description: siteData.tagline,
        url: siteData.url,
        telephone: siteData.contact.phone,
        email: siteData.contact.email,
        image: `${siteData.url}/images/logo-tmj.png`,
        logo: `${siteData.url}/images/logo-tmj.png`,
        priceRange: "$$",
        medicalSpecialty: "Physiotherapy",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Gardens Street, Shah's Arcade, River Gardens",
          addressLocality: "Islamabad",
          addressCountry: "PK",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteData.contact.geo.lat,
          longitude: siteData.contact.geo.lng,
        },
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
        "@type": "WebSite",
        "@id": `${siteData.url}/#website`,
        url: siteData.url,
        name: siteData.name,
        description: siteData.tagline,
        publisher: { "@id": `${siteData.url}/#clinic` },
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
