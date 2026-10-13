import { ImageResponse } from "next/og";
import { site } from "@/lib/site";
export const alt =
  "The Muscular Junction — Physiotherapy in River Gardens, Islamabad";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "#edf4f1",
          color: "#133747",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: 3 }}>
          PHYSIOTHERAPY & CLINICAL REHABILITATION
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 78, lineHeight: 1.08, fontWeight: 700 }}>
            {site.name}
          </div>
          <div style={{ fontSize: 34 }}>
            Recovery built on assessment, not guesswork.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #b5ccca",
            paddingTop: 24,
            fontSize: 25,
          }}
        >
          <span>River Gardens, Islamabad</span>
          <span>Led by Dr. Syed Mozaffar</span>
        </div>
      </div>
    ),
    size,
  );
}
