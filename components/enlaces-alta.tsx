"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";
import { origenVisita, refVisita } from "@/lib/origen";
import { URL_ALTA_WEB } from "@/lib/site";

/**
 * Los links al alta de la web (`/app/registrar`) llevan de dónde vino la
 * visita (`canal`) y el código de referido (`ref`), que el wizard de la app
 * guarda en el embudo y en la cuenta. Va en el layout: el origen se decide
 * con la PRIMERA página vista, que casi nunca es la del botón de alta.
 */
export function EnlacesAlta() {
  useEffect(() => {
    const origen = origenVisita();
    const ref = refVisita();

    const alTocar = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.<HTMLAnchorElement>("a[href]");
      if (!a) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin || !url.pathname.startsWith(URL_ALTA_WEB)) return;

      if (!url.searchParams.has("canal")) url.searchParams.set("canal", origen);
      if (ref && !url.searchParams.has("ref")) url.searchParams.set("ref", ref);
      a.href = url.toString();

      track("registro", { cta: a.dataset.cta ?? "otro", origen });
    };

    document.addEventListener("click", alTocar, true);
    return () => document.removeEventListener("click", alTocar, true);
  }, []);

  return null;
}
