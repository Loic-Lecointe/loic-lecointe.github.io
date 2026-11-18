import { ImageResponse } from "next/og";

import { profileConfig } from "@/config/profile";

export const alt = "Loïc Lecointe, développeur full stack";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        background: "#0f1722",
        backgroundImage:
          "linear-gradient(rgba(228,234,242,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(228,234,242,0.05) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        color: "#e4eaf2",
        borderLeft: "12px solid #f0b23e",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          fontSize: 28,
        }}
      >
        <div
          style={{
            width: 16,
            height: 16,
            borderRadius: 999,
            background: "#3fcf8e",
          }}
        />
        {profileConfig.availability.status}
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 120, fontWeight: 800, lineHeight: 1 }}>
          Loïc Lecointe
        </div>
        <div style={{ fontSize: 44, color: "#f0b23e", marginTop: 24 }}>
          {profileConfig.role}
        </div>
      </div>

      <div style={{ fontSize: 30, color: "#96a5b8" }}>
        Next.js · React · TypeScript · C# / .NET · Three.js
      </div>
    </div>,
    size,
  );
}
