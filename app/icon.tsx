import { ImageResponse } from "next/og";
import { CLARO, GOMA, MARCA, NARANJO, TINTA } from "@/lib/marca";

// Se genera al compilar: el export estático de Cloudflare no tiene servidor.
export const dynamic = "force-static";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** Favicon: el mismo ícono de la app (rueda a color sobre tinta). */
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
          <path d={MARCA.goma} fill={GOMA} />
          <path d={MARCA.llanta} fill={CLARO} fillRule="evenodd" />
          <path d={MARCA.buje} fill={NARANJO} fillRule="evenodd" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
