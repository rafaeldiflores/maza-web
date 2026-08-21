import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "MAZA — Gestión inteligente para tu taller";

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
          background: "linear-gradient(150deg, #1a1a2e 0%, #312e81 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 76,
              height: 76,
              borderRadius: 20,
              background: "#f5f6fa",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="54" height="54" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#1a1a2e" strokeWidth="7" />
              <circle cx="50" cy="50" r="39" fill="none" stroke="#1a1a2e" strokeWidth="2" />
              <line x1="50" y1="50" x2="50" y2="11" stroke="#1a1a2e" strokeWidth="2" />
              <line x1="50" y1="50" x2="69.5" y2="16.73" stroke="#1a1a2e" strokeWidth="2" />
              <line x1="50" y1="50" x2="83.77" y2="30.5" stroke="#1a1a2e" strokeWidth="2" />
              <line x1="50" y1="50" x2="89" y2="50" stroke="#1a1a2e" strokeWidth="2" />
              <line x1="50" y1="50" x2="83.77" y2="69.5" stroke="#1a1a2e" strokeWidth="2" />
              <line x1="50" y1="50" x2="69.5" y2="83.27" stroke="#1a1a2e" strokeWidth="2" />
              <line x1="50" y1="50" x2="50" y2="89" stroke="#1a1a2e" strokeWidth="2" />
              <line x1="50" y1="50" x2="30.5" y2="83.27" stroke="#1a1a2e" strokeWidth="2" />
              <line x1="50" y1="50" x2="16.23" y2="69.5" stroke="#1a1a2e" strokeWidth="2" />
              <line x1="50" y1="50" x2="11" y2="50" stroke="#1a1a2e" strokeWidth="2" />
              <line x1="50" y1="50" x2="16.23" y2="30.5" stroke="#1a1a2e" strokeWidth="2" />
              <line x1="50" y1="50" x2="30.5" y2="16.73" stroke="#1a1a2e" strokeWidth="2" />
              <circle cx="50" cy="50" r="7" fill="#ff9900" />
            </svg>
          </div>
          <span
            style={{
              fontSize: 46,
              fontWeight: 800,
              color: "#f5f6fa",
              letterSpacing: 2,
            }}
          >
            MAZA
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 74,
              fontWeight: 800,
              color: "#f5f6fa",
              lineHeight: 1.05,
              letterSpacing: -2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Tu taller ordenado.</span>
            <span>Tu cliente informado.</span>
          </div>
          <div style={{ fontSize: 30, color: "#c3c6d9", lineHeight: 1.4 }}>
            Con un asistente que conoce tu taller de memoria.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              background: "#ff9900",
              color: "#1a1a2e",
              fontSize: 26,
              fontWeight: 800,
              padding: "14px 30px",
              borderRadius: 999,
            }}
          >
            14 días gratis
          </div>
          <div style={{ fontSize: 26, color: "#8d90ab" }}>
            Autos · Motos · Bicicletas
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
