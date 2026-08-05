import servicesData from "@/data/services.json";
import doctorsData from "@/data/doctors.json";
import { site, siteUrl, absoluteUrl, sameAs } from "@/lib/site";

const clinicId = `${siteUrl}/#clinic`;
const founderId = `${siteUrl}/#dr-syed-mozaffar`;

/**
 * Site-wide JSON-LD for local and medical search.
 *
 * Rendered once from the root layout so the clinic entity is present on every
 * page and Google can reconcile the NAP here with the Google Business Profile.
 *
 * Note: the Google rating is shown to visitors and links out to the real
 * reviews page, but is deliberately NOT emitted as `aggregateRating`. Google's
 * review-snippet guidelines exclude self-serving ratings a business publishes
 * about itself, and marking them up risks a structured-data manual action.
 */
export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalClinic", "Physiotherapy", "LocalBusiness"],
        "@id": clinicId,
        name: site.name,
        alternateName: site.shortName,
        description:
          "Evidence-based physiotherapy and rehabilitation clinic in Zone V, River Gardens, Islamabad — manual therapy, sports injury rehabilitation, orthopedic, neurological and pediatric physiotherapy, dry needling and cupping.",
        slogan: "Assessed properly. Treated precisely. Back to moving.",
        url: siteUrl,
        telephone: site.contact.phone,
        email: site.contact.email,
        image: [
          absoluteUrl("/images/logo-tmj.png"),
          absoluteUrl("/images/clinic-interior-1920.webp"),
        ],
        logo: absoluteUrl("/images/logo-tmj.png"),
        priceRange: "$$",
        currenciesAccepted: "PKR",
        paymentAccepted: "Cash, Credit Card, Debit Card, Bank Transfer",
        medicalSpecialty: "Physiotherapy",
        knowsAbout: servicesData.map((s) => s.title),
        address: {
          "@type": "PostalAddress",
          streetAddress: site.contact.streetAddress,
          addressLocality: site.contact.locality,
          addressRegion: site.contact.region,
          addressCountry: site.contact.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: site.contact.geo.lat,
          longitude: site.contact.geo.lng,
        },
        hasMap: site.contact.mapLink,
        areaServed: site.areasServed.map((name) => ({ "@type": "City", name })),
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            opens: "09:00",
            closes: "21:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "10:00",
            closes: "18:00",
          },
        ],
        founder: { "@id": founderId },
        employee: doctorsData.map((doc) => ({
          "@type": ["Person", "Physician"],
          name: doc.name,
          jobTitle: doc.designation,
          medicalSpecialty: "Physiotherapy",
          knowsAbout: doc.specializations,
        })),
        sameAs,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Physiotherapy & Rehabilitation Services",
          itemListElement: servicesData.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "MedicalTherapy",
              name: service.title,
              description: service.shortDesc,
              url: absoluteUrl(`/services/${service.id}`),
            },
          })),
        },
        potentialAction: {
          "@type": "ReserveAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: absoluteUrl("/appointment"),
            inLanguage: "en",
            actionPlatform: [
              "http://schema.org/DesktopWebPlatform",
              "http://schema.org/MobileWebPlatform",
            ],
          },
          result: {
            "@type": "Reservation",
            name: "Physiotherapy appointment",
          },
        },
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
        url: absoluteUrl("/doctors"),
        image: absoluteUrl("/images/doctors/doctor-1.jpg"),
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: site.name,
        description: site.positioning,
        inLanguage: "en",
        publisher: { "@id": clinicId },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // Developer-authored, built from local data only.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
