import type { MetadataRoute } from "next";
import siteData from "@/data/site.json";

/**
 * Web App Manifest — improves mobile/PWA signals and installability,
 * which Google factors into the mobile page experience.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteData.name} — ${siteData.tagline}`,
    short_name: siteData.name,
    description:
      "Leading physiotherapy & rehabilitation clinic in Islamabad. Manual therapy, sports & neuro rehab, and professional physiotherapy workshops.",
    start_url: "/",
    display: "standalone",
    background_color: "#020617",
    theme_color: "#2563eb",
    lang: "en",
    dir: "ltr",
    categories: ["health", "medical", "fitness"],
    icons: [
      {
        src: "/images/logo-tmj.png",
        sizes: "any",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}
