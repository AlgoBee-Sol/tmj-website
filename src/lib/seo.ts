import type { Metadata } from "next";
import { absoluteUrl, site } from "./site";

export const clinicId = absoluteUrl("/#clinic");
export const founderId = absoluteUrl("/doctors/dr-syed-mozaffar#person");
export function pageMetadata(
  title: string,
  description: string,
  path: string,
  article = false,
): Metadata {
  const fullTitle =
    path === "/"
      ? `${site.name} | Physiotherapy in Islamabad`
      : `${title} | ${site.name}`;
  return {
    // The root layout's title template does not apply to its own page segment.
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      type: article ? "article" : "website",
      title: fullTitle,
      description,
      url: absoluteUrl(path),
      siteName: site.name,
      locale: "en_PK",
      images: [
        {
          url: absoluteUrl("/opengraph-image"),
          width: 1200,
          height: 630,
          alt: `${site.name}, River Gardens, Islamabad`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl("/twitter-image")],
    },
  };
}
export const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: site.contact.streetAddress,
  addressLocality: site.contact.locality,
  addressRegion: site.contact.region,
  addressCountry: site.contact.country,
};
