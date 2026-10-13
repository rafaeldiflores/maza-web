import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { CLARO, MARCA, NARANJO, RUEDA_EN_TUERCA, TUERCA } from "@/lib/marca";

// Se genera al compilar: el export estático de Cloudflare no tiene servidor.
export const dynamic = "force-static";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "MAZA — Gestión inteligente para tu taller";

// Barlow, la tipografía de texto de la marca (assets/fonts, licencia OFL).
const barlow = await readFile(join(process.cwd(), "assets/fonts/Barlow-Regular.ttf"));
const barlowExtraBold = await readFile(join(process.cwd(), "assets/fonts/Barlow-ExtraBold.ttf"));

const MONO =
  "ui-monospace, 'SF Mono', 'Cascadia Code', 'Roboto Mono', Consolas, monospace";

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
          padding: 72,
          background: "#0a0a0a",
          fontFamily: "Barlow",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* Tuerca tinta con borde claro sutil para que se lea sobre el fondo negro */}
          <svg width="84" height="84" viewBox="0 0 100 100">
            <path d={TUERCA} fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth={10.5} strokeLinejoin="round" />
            <path d={TUERCA} fill="#1a1a2e" stroke="#1a1a2e" strokeWidth={8} strokeLinejoin="round" />
            <g transform={RUEDA_EN_TUERCA}>
              <path d={MARCA.silueta} fill={CLARO} fillRule="evenodd" />
              <path d={MARCA.buje} fill={NARANJO} fillRule="evenodd" />
            </g>
          </svg>
          <span
            style={{
              fontSize: 46,
              fontWeight: 800,
              color: "#f2f2f5",
              letterSpacing: 2,
            }}
          >
            MAZA
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 800,
              color: "#f2f2f5",
              lineHeight: 1.08,
              letterSpacing: -1.5,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Tu taller ordenado.</span>
            <span>Tu cliente informado.</span>
          </div>
          <div style={{ fontSize: 28, color: "#9497a1", lineHeight: 1.4 }}>
            Con un asistente que conoce tu taller de memoria.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              background: "#ff9900",
              color: "#0a0a0a",
              fontFamily: MONO,
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
              padding: "12px 24px",
            }}
          >
            Talleres fundadores
          </div>
          <div
            style={{
              fontFamily: MONO,
              fontSize: 20,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#9497a1",
            }}
          >
            Talleres multirubro · mazataller.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Barlow", data: barlow, style: "normal", weight: 400 },
        { name: "Barlow", data: barlowExtraBold, style: "normal", weight: 800 },
      ],
    }
  );
}
