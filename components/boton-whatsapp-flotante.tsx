"use client";

import { usePathname } from "next/navigation";
import { WhatsappIcon } from "./whatsapp-icon";
import { WA_MESSAGES, waLink } from "@/lib/site";

/**
 * Botón flotante persistente de WhatsApp.
 * Permite que cualquier dueño de taller que esté mirando la web (en inicio,
 * planes, funciones o ayuda) pueda abrir un chat directo con MAZA con 1 toque.
 *
 * En /empieza en pantallas móviles se oculta para no superponerse con CtaFija,
 * y en la portada para no tapar el formulario de inscripción a la beta.
 */
export function BotonWhatsappFlotante() {
  const pathname = usePathname();
  const ocultarEnCelular = pathname === "/empieza" || pathname === "/";

  return (
    <aside
      aria-label="Contacto directo por WhatsApp"
      className={`fixed bottom-5 right-5 z-40 transition-transform duration-200 hover:-translate-y-0.5 ${
        ocultarEnCelular ? "hidden sm:block" : "block"
      }`}
    >
      <a
        href={waLink(WA_MESSAGES.general)}
        target="_blank"
        rel="noreferrer"
        data-cta="flotante-whatsapp"
        aria-label="Escribir a MAZA por WhatsApp"
        className="group flex items-center gap-2.5 border-2 border-ink bg-[#25D366] px-3.5 py-2.5 text-ink shadow-[3px_3px_0px_#1a1a2e] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_#1a1a2e]"
      >
        <div className="flex h-7 w-7 items-center justify-center text-ink">
          <WhatsappIcon className="h-6 w-6 text-ink" />
        </div>
        <div className="flex flex-col pr-1 text-left">
          <span className="font-bold text-xs uppercase tracking-tight text-ink sm:text-sm">
            Escríbenos
          </span>
          <span className="font-mono text-[10px] font-semibold text-ink/80">
            WhatsApp MAZA
          </span>
        </div>
      </a>
    </aside>
  );
}
