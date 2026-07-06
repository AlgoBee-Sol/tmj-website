import type { MetadataRoute } from "next";
import siteData from "@/data/site.json";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || siteData.url;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
