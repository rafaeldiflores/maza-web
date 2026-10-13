import { ImageResponse } from "next/og";
import { CLARO, GOMA, MARCA, NARANJO, RUEDA_EN_TUERCA, TINTA, TUERCA } from "@/lib/marca";

// Se genera al compilar: el export estático de Cloudflare no tiene servidor.
export const dynamic = "force-static";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** Favicon: la rueda a color dentro de la tuerca tinta, sobre fondo transparente. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="64" height="64" viewBox="0 0 100 100">
          <path d={TUERCA} fill={TINTA} stroke={TINTA} strokeWidth={8} strokeLinejoin="round" />
          <g transform={RUEDA_EN_TUERCA}>
            <path d={MARCA.goma} fill={GOMA} />
            <path d={MARCA.llanta} fill={CLARO} fillRule="evenodd" />
            <path d={MARCA.buje} fill={NARANJO} fillRule="evenodd" />
          </g>
        </svg>
      </div>
    ),
    { ...size }
  );
}
