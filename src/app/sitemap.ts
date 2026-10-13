import type { MetadataRoute } from "next";
import { contentRoutes } from "@/lib/routes";
import { absoluteUrl } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return contentRoutes.map((path) => ({ url: absoluteUrl(path) }));
}
