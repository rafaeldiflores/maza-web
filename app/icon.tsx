import { ImageResponse } from "next/og";
import { CLARO, MARCA, NARANJO, TINTA } from "@/lib/marca";

// Se genera al compilar: el export estático de Cloudflare no tiene servidor.
export const dynamic = "force-static";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** Favicon: el mismo ícono de la app (rueda clara, buje naranjo, sobre tinta). */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: TINTA,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="48" height="48" viewBox="0 0 100 100">
          <path d={MARCA.anillo} fill={CLARO} fillRule="evenodd" />
          <path d={MARCA.rayos} fill={CLARO} />
          <path d={MARCA.buje} fill={NARANJO} fillRule="evenodd" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
