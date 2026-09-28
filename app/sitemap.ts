import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Se genera al compilar: el export estático de Cloudflare no tiene servidor.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pagina = (ruta: string, priority: number, changeFrequency: "monthly" | "yearly" = "monthly") => ({
    url: `${SITE_URL}${ruta}`,
    changeFrequency,
    priority,
  });
  return [
    pagina("", 1),
    pagina("/funciones", 0.8),
    pagina("/planes", 0.8),
    pagina("/ayuda", 0.7),
    pagina("/nosotros", 0.5),
    pagina("/empieza", 0.6),
    pagina("/privacidad", 0.3, "yearly"),
    pagina("/terminos", 0.3, "yearly"),
  ];
}
