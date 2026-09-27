import type { NextConfig } from "next";

/**
 * El sitio es 100% estático (no hay rutas de servidor ni datos por pedido),
 * así que en Cloudflare se sirve como archivos: `npm run build:cf` exporta a
 * `out/` y `wrangler deploy` lo publica (ver wrangler.jsonc).
 *
 * El export solo se activa con CF_EXPORT=1 para que el deploy de Vercel siga
 * igual mientras dure la mudanza. En el export, `next/image` no tiene servidor
 * que optimice: las imágenes se sirven tal cual.
 */
const exportEstatico = process.env.CF_EXPORT === "1";

const nextConfig: NextConfig = exportEstatico
  ? { output: "export", images: { unoptimized: true } }
  : {};

export default nextConfig;
