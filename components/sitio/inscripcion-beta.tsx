"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import { track } from "@vercel/analytics";
import { WhatsappIcon } from "../whatsapp-icon";
import { waLink } from "@/lib/site";

const CAMPOS = [
  { id: "nombre", label: "Tu nombre", placeholder: "Ej.: Carla Rojas", auto: "name" },
  { id: "taller", label: "Nombre del taller", placeholder: "Ej.: Taller Central", auto: "organization" },
  { id: "comuna", label: "Comuna", placeholder: "Ej.: San Antonio", auto: "address-level2" },
  { id: "trabajos", label: "¿Qué trabaja tu taller?", placeholder: "Ej.: mecánica general", auto: "off" },
] as const;

type Datos = Record<(typeof CAMPOS)[number]["id"], string>;

interface InscripcionBetaProps {
  colapsableEnMovil?: boolean;
}

/**
 * Inscripción al programa de talleres fundadores. Arma un mensaje con los
 * datos y abre el WhatsApp de MAZA para atención directa 1 a 1.
 */
export function InscripcionBeta({ colapsableEnMovil = false }: InscripcionBetaProps) {
  const [datos, setDatos] = useState<Datos>({ nombre: "", taller: "", comuna: "", trabajos: "" });
  const [enviado, setEnviado] = useState(false);
  const [abiertoEnMovil, setAbiertoEnMovil] = useState(false);
  const primerInputRef = useRef<HTMLInputElement>(null);

  const desplegarYEnfocar = () => {
    setAbiertoEnMovil(true);
    setTimeout(() => {
      primerInputRef.current?.focus();
    }, 80);
  };

  useEffect(() => {
    const revisarHash = () => {
      if (window.location.hash === "#inscripcion") {
        setAbiertoEnMovil(true);
      }
    };
    revisarHash();
    window.addEventListener("hashchange", revisarHash);
    return () => window.removeEventListener("hashchange", revisarHash);
  }, []);

  const enviar = (e: FormEvent) => {
    e.preventDefault();
    const mensaje = [
      "Hola, quiero sumar mi taller como Taller Fundador de MAZA.",
      `Nombre: ${datos.nombre.trim()}`,
      `Taller: ${datos.taller.trim()}`,
      `Comuna: ${datos.comuna.trim()}`,
      `Trabajamos: ${datos.trabajos.trim()}`,
    ].join("\n");
    const link = waLink(mensaje);
    track("inscripcion_beta", { comuna: datos.comuna.trim() });
    const ventana = window.open(link, "_blank");
    if (ventana) ventana.opener = null;
    else window.location.href = link;
    setEnviado(true);
  };

  const debeColapsar = colapsableEnMovil && !abiertoEnMovil;

  return (
    <div id="inscripcion" className="w-full scroll-mt-24">
      {debeColapsar && (
        <div className="flex w-full flex-col gap-2.5 lg:hidden">
          <button
            type="button"
            onClick={desplegarYEnfocar}
            data-cta="inicio-inscripcion-abrir-movil"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sm bg-[#FF9900] px-6 text-base font-bold text-[#0A0A0A] shadow-lg transition-colors hover:bg-value-shade cursor-pointer"
          >
            Suma tu taller fundador →
          </button>
          <div className="flex flex-wrap items-center justify-between gap-2 px-0.5 font-mono text-[11px] text-[#9A9AA3]">
            <span>⚡ Te cargamos tu lista de precios</span>
            <a
              href={waLink("Hola, vi la web de MAZA y quiero sumar mi taller como Taller Fundador.")}
              target="_blank"
              rel="noreferrer"
              data-cta="inicio-wa-directo-movil"
              className="font-bold text-[#22A559] hover:underline"
            >
              WhatsApp directo →
            </a>
          </div>
        </div>
      )}

      <form
        onSubmit={enviar}
        className={`caja w-full flex-col gap-3.5 p-4 sm:p-5 transition-all duration-300 ${
          debeColapsar ? "hidden lg:flex" : "flex"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border-strong pb-2.5">
          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#FF9900]">
            ⚡ Cupo Taller Fundador · Puesta en marcha asistida
          </span>
          {abiertoEnMovil && colapsableEnMovil && (
            <button
              type="button"
              onClick={() => setAbiertoEnMovil(false)}
              className="font-mono text-[11px] text-ink-muted hover:text-ink lg:hidden"
            >
              Cerrar ×
            </button>
          )}
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {CAMPOS.map((c, idx) => (
            <label key={c.id} className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-ink">{c.label}</span>
              <input
                ref={idx === 0 ? primerInputRef : undefined}
                required
                name={c.id}
                autoComplete={c.auto}
                placeholder={c.placeholder}
                value={datos[c.id]}
                onChange={(e) => setDatos((d) => ({ ...d, [c.id]: e.target.value }))}
                className="h-10 border border-border-strong bg-surface px-3 text-sm text-ink placeholder:text-ink-faint focus:border-ink focus:outline-none"
              />
            </label>
          ))}
        </div>
        <button
          type="submit"
          data-cta="inicio-inscripcion-beta"
          className="inline-flex h-12 items-center justify-center gap-2 bg-value px-6 text-base font-bold text-splash-bg transition-colors hover:bg-value-shade cursor-pointer"
        >
          <WhatsappIcon className="h-5 w-5" />
          Sumar mi taller por WhatsApp →
        </button>
        <p className="text-[11px] leading-snug text-ink-muted" aria-live="polite">
          {enviado
            ? "Listo. Si WhatsApp no se abrió, revisa el bloqueador de ventanas. Te respondemos directo."
            : "Abre WhatsApp con tus datos listos · Nuestro equipo te entrega el catálogo cargado."}
        </p>
      </form>
    </div>
  );
}
