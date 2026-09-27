// Build estático para Cloudflare: exporta el sitio a `out/`.
//
//   npm run build:cf                          → con la URL por defecto (abajo)
//   SITE_URL=https://midominio.com npm run build:cf
//
// SITE_URL es la que va a la metadata (og:image), el sitemap y robots.txt:
// tiene que ser el dominio donde queda publicado, o la previsualización al
// compartir el link llega rota.
import { execSync } from "node:child_process";

const POR_DEFECTO = "https://mazataller.com";

execSync("npx next build", {
  stdio: "inherit",
  env: {
    ...process.env,
    CF_EXPORT: "1",
    SITE_URL: process.env.SITE_URL || POR_DEFECTO,
  },
});
