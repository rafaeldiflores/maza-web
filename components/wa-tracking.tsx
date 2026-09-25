"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";
import { nombreOrigen, origenVisita } from "@/lib/origen";

/**
 * Un solo listener para todos los links a WhatsApp de la página: al tocarlo
 * suma el origen al mensaje ("Vengo de TikTok") y registra el evento con el
 * botón (`data-cta`) y el origen. Así cada conversación dice de qué red vino
 * sin que la persona tenga que contarlo.
 */
export function WaTracking() {
  useEffect(() => {
    const origen = origenVisita();

    const alTocar = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.<HTMLAnchorElement>('a[href*="wa.me/"]');
      if (!a) return;

      const nombre = nombreOrigen(origen);
      if (nombre && !a.dataset.origenAplicado) {
        const url = new URL(a.href);
        const texto = url.searchParams.get("text") ?? "";
        // encodeURIComponent y no searchParams.set: este último codifica los
        // espacios como "+", y WhatsApp no siempre los lee como espacios.
        a.href = `${url.origin}${url.pathname}?text=${encodeURIComponent(
          `${texto} (Vengo de ${nombre})`
        )}`;
        a.dataset.origenAplicado = "1";
      }

      track("whatsapp", { cta: a.dataset.cta ?? "otro", origen });
    };

    document.addEventListener("click", alTocar, true);
    return () => document.removeEventListener("click", alTocar, true);
  }, []);

  return null;
}
