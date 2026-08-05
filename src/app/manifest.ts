import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Web App Manifest — improves mobile/PWA signals and installability,
 * which Google factors into the mobile page experience.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — ${site.tagline}`,
    short_name: site.shortName,
    description:
      "Evidence-based physiotherapy & rehabilitation in River Gardens, Islamabad. Manual therapy, sports injury, orthopedic, neuro and pediatric rehab.",
    start_url: "/",
    display: "standalone",
    background_color: "#060e18",
    theme_color: "#0c5fcd",
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
