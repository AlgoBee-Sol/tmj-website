import type { MetadataRoute } from "next";
import servicesData from "@/data/services.json";
import workshopsData from "@/data/workshops.json";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: { path: string; priority: number; freq: "weekly" | "monthly" }[] =
    [
      { path: "/", priority: 1, freq: "weekly" },
      { path: "/services", priority: 0.9, freq: "monthly" },
      ...servicesData.map((s) => ({
        path: `/services/${s.id}`,
        priority: 0.8,
        freq: "monthly" as const,
      })),
      { path: "/appointment", priority: 0.9, freq: "monthly" },
      { path: "/doctors", priority: 0.8, freq: "monthly" },
      { path: "/workshops", priority: 0.8, freq: "weekly" },
      ...workshopsData.map((w) => ({
        path: `/workshops/${w.id}`,
        priority: 0.7,
        freq: "weekly" as const,
      })),
      { path: "/about", priority: 0.7, freq: "monthly" },
      { path: "/contact", priority: 0.7, freq: "monthly" },
    ];

  return routes.map(({ path, priority, freq }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: freq,
    priority,
  }));
}
