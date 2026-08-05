import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /**
     * OpenNext on Cloudflare only transforms images when an `IMAGES` binding is
     * configured; without one, `/_next/image` streams the original bytes back
     * through the Worker — a pointless hop that is slower than serving the
     * asset directly from the CDN.
     *
     * Source images are pre-sized and converted to WebP instead, so requests go
     * straight to the static asset host. If a Cloudflare Images binding is added
     * to `wrangler.jsonc` later, drop this flag to get automatic AVIF + srcset.
     */
    unoptimized: true,
  },
  poweredByHeader: false,
};

export default nextConfig;

// Enables Cloudflare bindings (env, KV, R2, etc.) during `next dev`.
// Guarded so it is a no-op if the adapter isn't installed yet.
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
