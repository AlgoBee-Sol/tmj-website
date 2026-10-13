import JsonLd from "./JsonLd";
import { site, siteUrl, absoluteUrl, sameAs } from "@/lib/site";
import { clinicId, founderId, postalAddress } from "@/lib/seo";
export default function StructuredData() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "MedicalClinic",
            "@id": clinicId,
            name: site.name,
            alternateName: site.shortName,
            description: site.positioning,
            url: siteUrl,
            telephone: site.contact.phoneDial,
            email: site.contact.email,
            address: postalAddress,
            geo: {
              "@type": "GeoCoordinates",
              latitude: site.contact.geo.lat,
              longitude: site.contact.geo.lng,
            },
            image: absoluteUrl("/images/clinic-interior-1024.webp"),
            logo: absoluteUrl("/images/logo-tmj.webp"),
            hasMap: site.contact.mapLink,
            sameAs,
            areaServed: site.areasServed.map((name) => ({
              "@type": "Place",
              name,
            })),
            openingHoursSpecification: site.hours.schema.map((row) => ({
              "@type": "OpeningHoursSpecification",
              dayOfWeek: row.days,
              opens: row.opens,
              closes: row.closes,
            })),
            founder: { "@id": founderId },
          },
          {
            "@type": "WebSite",
            "@id": absoluteUrl("/#website"),
            url: siteUrl,
            name: site.name,
            inLanguage: "en",
            publisher: { "@id": clinicId },
          },
        ],
      }}
    />
  );
}
