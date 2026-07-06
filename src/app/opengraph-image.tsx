import { ImageResponse } from "next/og";
import siteData from "@/data/site.json";

// Statically generated 1200×630 social-share image (Open Graph + Twitter/X).
// Self-contained — no external fonts or assets — so it builds anywhere.
export const alt =
  "The Muscular Junction — Physiotherapy & Rehabilitation Clinic in Islamabad";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#020617",
          backgroundImage:
            "linear-gradient(135deg, #020617 0%, #0b1e4d 55%, #0f172a 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: eyebrow badge */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "18px",
              height: "18px",
              borderRadius: "9999px",
              backgroundColor: "#34d399",
            }}
          />
          <div
            style={{
              fontSize: "28px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "#93c5fd",
              fontWeight: 600,
            }}
          >
            Physiotherapy &amp; Rehabilitation Center
          </div>
        </div>

        {/* Middle: name + tagline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "92px",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-2px",
            }}
          >
            {siteData.name}
          </div>
          <div style={{ fontSize: "38px", color: "#cbd5e1", fontWeight: 500 }}>
            Best Physiotherapy &amp; Rehabilitation Clinic in Islamabad
          </div>
        </div>

        {/* Bottom: location + doctor */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.15)",
            paddingTop: "28px",
          }}
        >
          <div style={{ fontSize: "30px", color: "#e2e8f0" }}>
            Islamabad, Pakistan
          </div>
          <div style={{ fontSize: "30px", color: "#93c5fd", fontWeight: 600 }}>
            Led by Dr. Syed Mozaffar
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
