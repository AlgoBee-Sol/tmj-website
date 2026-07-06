import type { MetadataRoute } from "next";
import siteData from "@/data/site.json";
import workshopsData from "@/data/workshops.json";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || siteData.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = [
    { path: "/", priority: 1 },
    { path: "/about", priority: 0.8 },
    { path: "/services", priority: 0.9 },
    { path: "/workshops", priority: 0.9 },
    { path: "/doctors", priority: 0.8 },
    { path: "/appointment", priority: 0.7 },
    { path: "/contact", priority: 0.6 },
    ...workshopsData.map((w) => ({ path: `/workshops/${w.id}`, priority: 0.7 })),
  ];

  return routes.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority,
  }));
}
