import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

// Statically generated 1200×630 social share image (Open Graph + Twitter/X).
// Self-contained — no external fonts or network assets — so it builds anywhere.
//
// Two Satori constraints shape the markup below:
//  · every <div> with more than one child needs an explicit `display`, and a
//    split text node (`{a} · {b}`) counts as several children — hence the
//    pre-built template strings;
//  · glyphs outside the bundled font (★) trigger a runtime font download and
//    fail the build offline, so the stars are drawn as SVG.
export const alt =
  "The Muscular Junction — Evidence-based physiotherapy in River Gardens, Islamabad";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const STAR =
  "M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z";

const eyebrow = `Physiotherapy & Rehabilitation · ${site.contact.address}`;
const ratingLine = `${site.rating.value} · ${site.rating.countLabel} Google reviews`;

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
          padding: "68px 76px",
          backgroundColor: "#051323",
          backgroundImage:
            "radial-gradient(70% 80% at 85% 5%, #0c5fcd55, transparent 60%)," +
            "radial-gradient(60% 70% at 5% 100%, #0d8fa044, transparent 60%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: location badge */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "9999px",
              backgroundColor: "#2cc9d6",
            }}
          />
          <div
            style={{
              fontSize: "25px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "#8fd4dd",
              fontWeight: 600,
            }}
          >
            {eyebrow}
          </div>
        </div>

        {/* Middle: name + promise */}
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              fontSize: "84px",
              fontWeight: 800,
              lineHeight: 1.03,
              letterSpacing: "-2.5px",
            }}
          >
            {site.name}
          </div>
          <div style={{ fontSize: "36px", color: "#a6bed3", fontWeight: 500 }}>
            Recovery built on assessment, not guesswork.
          </div>
        </div>

        {/* Bottom: rating + founder */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.15)",
            paddingTop: "26px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <svg width="150" height="26" viewBox="0 0 150 26" fill="#f0a020">
              {[0, 1, 2, 3, 4].map((i) => (
                <path
                  key={i}
                  d={STAR}
                  transform={`translate(${i * 31}, 1) scale(1.083)`}
                />
              ))}
            </svg>
            <div
              style={{ fontSize: "28px", color: "#e2e8f0", fontWeight: 600 }}
            >
              {ratingLine}
            </div>
          </div>

          <div style={{ fontSize: "28px", color: "#8fd4dd", fontWeight: 600 }}>
            Led by Dr. Syed Mozaffar
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
