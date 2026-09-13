import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "MAZA — Gestión inteligente para tu taller";

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
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 76,
              height: 76,
              background: "#f2f2f5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="54" height="54" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#0a0a0a" strokeWidth="7" />
              <circle cx="50" cy="50" r="39" fill="none" stroke="#0a0a0a" strokeWidth="2" />
              <line x1="50" y1="50" x2="50" y2="11" stroke="#0a0a0a" strokeWidth="2" />
              <line x1="50" y1="50" x2="69.5" y2="16.73" stroke="#0a0a0a" strokeWidth="2" />
              <line x1="50" y1="50" x2="83.77" y2="30.5" stroke="#0a0a0a" strokeWidth="2" />
              <line x1="50" y1="50" x2="89" y2="50" stroke="#0a0a0a" strokeWidth="2" />
              <line x1="50" y1="50" x2="83.77" y2="69.5" stroke="#0a0a0a" strokeWidth="2" />
              <line x1="50" y1="50" x2="69.5" y2="83.27" stroke="#0a0a0a" strokeWidth="2" />
              <line x1="50" y1="50" x2="50" y2="89" stroke="#0a0a0a" strokeWidth="2" />
              <line x1="50" y1="50" x2="30.5" y2="83.27" stroke="#0a0a0a" strokeWidth="2" />
              <line x1="50" y1="50" x2="16.23" y2="69.5" stroke="#0a0a0a" strokeWidth="2" />
              <line x1="50" y1="50" x2="11" y2="50" stroke="#0a0a0a" strokeWidth="2" />
              <line x1="50" y1="50" x2="16.23" y2="30.5" stroke="#0a0a0a" strokeWidth="2" />
              <line x1="50" y1="50" x2="30.5" y2="16.73" stroke="#0a0a0a" strokeWidth="2" />
              <circle cx="50" cy="50" r="7" fill="#ff9900" />
            </svg>
          </div>
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
            14 días gratis
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
            Autos · Motos · Bicicletas
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
