import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${siteConfig.shortName} — Premium Residential Plots in Bengaluru`;

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #061428 0%, #0a1f3d 55%, #0f2c4f 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#2f9e63",
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 26,
              fontWeight: 600,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#8fd9ac",
            }}
          >
            {siteConfig.iso}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.1,
          }}
        >
          {siteConfig.shortName}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            maxWidth: 900,
            fontSize: 32,
            lineHeight: 1.4,
            color: "rgba(255,255,255,0.78)",
          }}
        >
          RERA-ready residential plots on the Whitefield–Malur corridor —
          built for families who want land, not just listings.
        </div>
      </div>
    ),
    { ...size },
  );
}
