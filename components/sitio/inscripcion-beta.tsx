"use client";

import { useState, type FormEvent } from "react";
import { track } from "@vercel/analytics";
import { WhatsappIcon } from "../whatsapp-icon";
import { waLink } from "@/lib/site";

const CAMPOS = [
  { id: "nombre", label: "Tu nombre", placeholder: "Ej.: Carla Rojas", auto: "name" },
  { id: "taller", label: "Nombre del taller", placeholder: "Ej.: Taller Central", auto: "organization" },
  { id: "comuna", label: "Comuna", placeholder: "Ej.: San Antonio", auto: "address-level2" },
  { id: "trabajos", label: "¿Qué trabaja tu taller?", placeholder: "Ej.: mecánica de motos", auto: "off" },
] as const;

type Datos = Record<(typeof CAMPOS)[number]["id"], string>;

/**
 * Inscripción al programa de talleres fundadores. No hay servidor: arma un mensaje con los
 * datos y abre el WhatsApp de MAZA, para que la conversación sea de persona a persona
 * (el número del taller llega con el mensaje).
 */
export function InscripcionBeta() {
  const [datos, setDatos] = useState<Datos>({ nombre: "", taller: "", comuna: "", trabajos: "" });
  const [enviado, setEnviado] = useState(false);

  const enviar = (e: FormEvent) => {
    e.preventDefault();
    const mensaje = [
      "Hola, quiero inscribir mi taller como taller fundador de MAZA.",
      `Nombre: ${datos.nombre.trim()}`,
      `Taller: ${datos.taller.trim()}`,
      `Comuna: ${datos.comuna.trim()}`,
      `Trabajamos: ${datos.trabajos.trim()}`,
    ].join("\n");
    const link = waLink(mensaje);
    track("inscripcion_beta", { comuna: datos.comuna.trim() });
    // Sin "noopener": con él window.open devuelve null siempre y no se sabría si lo bloquearon.
    const ventana = window.open(link, "_blank");
    if (ventana) ventana.opener = null;
    else window.location.href = link;
    setEnviado(true);
  };

  return (
    <form id="inscripcion" onSubmit={enviar} className="caja flex w-full scroll-mt-24 flex-col gap-4 p-5 sm:p-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {CAMPOS.map((c) => (
          <label key={c.id} className="flex flex-col gap-1.5">
            <span className="text-sm font-semibold text-ink">{c.label}</span>
            <input
              required
              name={c.id}
              autoComplete={c.auto}
              placeholder={c.placeholder}
              value={datos[c.id]}
              onChange={(e) => setDatos((d) => ({ ...d, [c.id]: e.target.value }))}
              className="h-11 border border-border-strong bg-surface px-3 text-base text-ink placeholder:text-ink-faint focus:border-ink focus:outline-none"
            />
          </label>
        ))}
      </div>
      <button
        type="submit"
        data-cta="inicio-inscripcion-beta"
        className="inline-flex h-12 items-center justify-center gap-2 bg-value px-6 text-base font-bold text-splash-bg transition-colors hover:bg-value-shade"
      >
        <WhatsappIcon className="h-5 w-5" />
        Inscribir mi taller
      </button>
      <p className="text-xs leading-relaxed text-ink-muted" aria-live="polite">
        {enviado
          ? "Listo. Si WhatsApp no se abrió, revisa que el navegador no lo haya bloqueado. Te contactamos para contarte si tu taller quedó."
          : "Se abre WhatsApp con tus datos listos para enviar. Te contactamos para contarte si tu taller quedó."}
      </p>
    </form>
  );
}
