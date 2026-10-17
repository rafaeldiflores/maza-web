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

const PARTICULAS = [
  { tx: "-90px", ty: "-65px", color: "#FF9900", rot: "25deg", delay: "0ms" },
  { tx: "-55px", ty: "-85px", color: "#22A559", rot: "-40deg", delay: "30ms" },
  { tx: "-15px", ty: "-95px", color: "#F2F2F5", rot: "15deg", delay: "10ms" },
  { tx: "25px", ty: "-90px", color: "#FF9900", rot: "60deg", delay: "40ms" },
  { tx: "65px", ty: "-80px", color: "#22A559", rot: "-25deg", delay: "20ms" },
  { tx: "95px", ty: "-60px", color: "#FF9900", rot: "45deg", delay: "50ms" },
  { tx: "-105px", ty: "-20px", color: "#22A559", rot: "-60deg", delay: "15ms" },
  { tx: "105px", ty: "-15px", color: "#F2F2F5", rot: "35deg", delay: "25ms" },
  { tx: "-80px", ty: "45px", color: "#FF9900", rot: "-30deg", delay: "35ms" },
  { tx: "-35px", ty: "65px", color: "#22A559", rot: "50deg", delay: "5ms" },
  { tx: "35px", ty: "60px", color: "#FF9900", rot: "-45deg", delay: "45ms" },
  { tx: "85px", ty: "40px", color: "#22A559", rot: "20deg", delay: "15ms" },
];

/**
 * Inscripción al programa de talleres fundadores con celebración sorpresa:
 * al presionar contactar se despliega la celebración confirmando el cupo
 * de Taller Fundador y el 50% de descuento en la suscripción anual.
 */
export function InscripcionBeta({ colapsableEnMovil = false }: InscripcionBetaProps) {
  const [datos, setDatos] = useState<Datos>({ nombre: "", taller: "", comuna: "", trabajos: "" });
  const [enviado, setEnviado] = useState(false);
  const [celebrando, setCelebrando] = useState(false);
  const [burstKey, setBurstKey] = useState(0);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const primerInputRef = useRef<HTMLInputElement>(null);

  const dispararCelebracion = (enfocarInput = false) => {
    setCelebrando(true);
    setBurstKey((k) => k + 1);
    if (enfocarInput) {
      setMostrarFormulario(true);
      setTimeout(() => {
        primerInputRef.current?.focus();
      }, 100);
    }
  };

  useEffect(() => {
    const revisarHash = () => {
      if (window.location.hash === "#inscripcion") {
        dispararCelebracion(false);
      }
    };
    const alCelebrarEvento = () => dispararCelebracion(false);
    const alClickearAncla = (e: MouseEvent) => {
      const target = (e.target as HTMLElement | null)?.closest?.("a");
      if (target && (target.getAttribute("href") === "/#inscripcion" || target.getAttribute("href") === "#inscripcion")) {
        dispararCelebracion(false);
      }
    };

    revisarHash();
    window.addEventListener("hashchange", revisarHash);
    window.addEventListener("maza:celebrar-fundador", alCelebrarEvento);
    document.addEventListener("click", alClickearAncla);
    return () => {
      window.removeEventListener("hashchange", revisarHash);
      window.removeEventListener("maza:celebrar-fundador", alCelebrarEvento);
      document.removeEventListener("click", alClickearAncla);
    };
  }, []);

  const abrirWhatsAppDirecto = () => {
    dispararCelebracion(false);
    const mensaje =
      "Hola, ¡desbloqueé mi cupo de Taller Fundador en la web con 50% de descuento en la suscripción anual! Quiero sumar mi taller a MAZA.";
    const link = waLink(mensaje);
    track("inscripcion_beta_directo");
    setTimeout(() => {
      const ventana = window.open(link, "_blank");
      if (ventana) ventana.opener = null;
      else window.location.href = link;
    }, 350);
  };

  const enviar = (e: FormEvent) => {
    e.preventDefault();
    dispararCelebracion(false);
    const partes = [
      "Hola, ¡desbloqueé mi cupo de Taller Fundador con 50% de descuento en la suscripción anual!",
      datos.nombre.trim() ? `Nombre: ${datos.nombre.trim()}` : "",
      datos.taller.trim() ? `Taller: ${datos.taller.trim()}` : "",
      datos.comuna.trim() ? `Comuna: ${datos.comuna.trim()}` : "",
      datos.trabajos.trim() ? `Trabajamos: ${datos.trabajos.trim()}` : "",
    ].filter(Boolean);
    const link = waLink(partes.join("\n"));
    track("inscripcion_beta", { comuna: datos.comuna.trim() || "directo" });
    const ventana = window.open(link, "_blank");
    if (ventana) ventana.opener = null;
    else window.location.href = link;
    setEnviado(true);
  };

  const mostrarSoloBotones = colapsableEnMovil && !celebrando;

  return (
    <div id="inscripcion" className="relative w-full scroll-mt-24">
      <style>{`
        @keyframes maza-confetti {
          0% { transform: translate(0, 0) scale(0.4) rotate(0deg); opacity: 1; }
          70% { opacity: 1; }
          100% { transform: translate(var(--tx), var(--ty)) scale(1.1) rotate(var(--rot)); opacity: 0; }
        }
        @keyframes maza-pop {
          0% { transform: scale(0.94); opacity: 0; }
          60% { transform: scale(1.02); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>

      {mostrarSoloBotones && (
        <div className="flex w-full flex-col gap-2.5">
          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={() => dispararCelebracion(false)}
              data-cta="inicio-inscripcion-abrir"
              className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-sm bg-[#FF9900] px-6 text-base font-bold text-[#0A0A0A] shadow-lg transition-colors hover:bg-value-shade cursor-pointer"
            >
              Contactar y sumar mi taller →
            </button>
            <button
              type="button"
              onClick={() => dispararCelebracion(false)}
              data-cta="inicio-wa-directo"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-[#26262C] bg-[#141417] px-4 text-xs sm:text-sm font-bold text-[#F2F2F5] transition-colors hover:border-[#25D366] hover:text-[#25D366] cursor-pointer"
            >
              <WhatsappIcon className="h-4 w-4 text-[#25D366]" />
              WhatsApp directo
            </button>
          </div>
        </div>
      )}

      {!mostrarSoloBotones && (
        <div
          key={burstKey}
          style={{ animation: "maza-pop 320ms cubic-bezier(0.16, 1, 0.3, 1) forwards" }}
          className="relative overflow-visible rounded-sm border-2 border-[#FF9900] bg-[#121215] p-4 sm:p-5 shadow-[0_0_40px_-10px_rgba(255,153,0,0.45)]"
        >
          {/* Partículas de celebración */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/3 z-30 -translate-x-1/2 -translate-y-1/2"
            aria-hidden="true"
          >
            {PARTICULAS.map((p, i) => (
              <span
                key={i}
                style={
                  {
                    "--tx": p.tx,
                    "--ty": p.ty,
                    "--rot": p.rot,
                    backgroundColor: p.color,
                    animation: `maza-confetti 850ms cubic-bezier(0.16, 1, 0.3, 1) ${p.delay} forwards`,
                  } as React.CSSProperties
                }
                className="absolute h-2.5 w-2.5 rounded-xs"
              />
            ))}
          </div>

          {/* Encabezado de celebración */}
          <div className="flex items-start justify-between gap-2 border-b border-[#26262C] pb-3">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 items-center gap-1.5 rounded-xs bg-[#22A559]/20 border border-[#22A559]/50 px-2 font-mono text-[10px] font-bold uppercase tracking-wider text-[#22A559]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                ¡FELICIDADES! CUPO DESBLOQUEADO
              </span>
            </div>
            {colapsableEnMovil && (
              <button
                type="button"
                onClick={() => setCelebrando(false)}
                className="font-mono text-[11px] text-[#9A9AA3] hover:text-[#F2F2F5] cursor-pointer"
              >
                ×
              </button>
            )}
          </div>

          {/* Mensaje principal del premio Taller Fundador */}
          <div className="mt-3 flex flex-col gap-2">
            <h3 className="font-display text-2xl sm:text-3xl leading-[0.98] tracking-[0.01em] text-[#F2F2F5]">
              ¡FELICIDADES! ESTÁS DENTRO DE LOS TALLERES FUNDADORES.
            </h3>
            <div className="rounded-xs border border-[#FF9900]/50 bg-[#FF9900]/15 px-3.5 py-2.5">
              <p className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#FF9900]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                  <line x1="7" y1="7" x2="7.01" y2="7" />
                </svg>
                <span>Tienes un 50% de descuento en la suscripción anual</span>
              </p>
              <p className="mt-1 pl-6 text-[11px] sm:text-xs text-[#F2F2F5]/90">
                Además te entregamos el taller llave en mano con tu catálogo de precios cargado.
              </p>
            </div>
          </div>

          {/* Acción rápida en 1 clic por WhatsApp o desplegar datos opcionales */}
          {!mostrarFormulario ? (
            <div className="mt-4 flex flex-col gap-2">
              <button
                type="button"
                onClick={abrirWhatsAppDirecto}
                data-cta="inicio-reclamar-wa-directo"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sm bg-[#25D366] px-5 text-sm sm:text-base font-bold text-[#0A0A0A] shadow-md transition-transform active:scale-[0.99] hover:bg-[#20bd5a] cursor-pointer"
              >
                <WhatsappIcon className="h-5 w-5 text-[#0A0A0A]" />
                Reclamar mi 50% anual por WhatsApp →
              </button>
              <button
                type="button"
                onClick={() => setMostrarFormulario(true)}
                className="text-center font-mono text-[11px] text-[#9A9AA3] underline underline-offset-2 hover:text-[#F2F2F5] cursor-pointer py-1"
              >
                O deja los datos de tu taller antes de abrir WhatsApp
              </button>
            </div>
          ) : (
            <form onSubmit={enviar} className="mt-3.5 flex flex-col gap-3 border-t border-[#26262C] pt-3">
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {CAMPOS.map((c, idx) => (
                  <label key={c.id} className="flex flex-col gap-1">
                    <span className="text-xs font-semibold text-[#F2F2F5]">{c.label}</span>
                    <input
                      ref={idx === 0 ? primerInputRef : undefined}
                      required
                      name={c.id}
                      autoComplete={c.auto}
                      placeholder={c.placeholder}
                      value={datos[c.id]}
                      onChange={(e) => setDatos((d) => ({ ...d, [c.id]: e.target.value }))}
                      className="h-9 border border-[#26262C] bg-[#0E0E11] px-3 text-xs sm:text-sm text-[#F2F2F5] placeholder:text-[#6E6E77] focus:border-[#FF9900] focus:outline-none"
                    />
                  </label>
                ))}
              </div>
              <button
                type="submit"
                data-cta="inicio-inscripcion-beta"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-sm bg-[#25D366] px-5 text-sm font-bold text-[#0A0A0A] transition-colors hover:bg-[#20bd5a] cursor-pointer"
              >
                <WhatsappIcon className="h-5 w-5 text-[#0A0A0A]" />
                Enviar y reclamar mi 50% anual →
              </button>
              <p className="text-[11px] leading-snug text-[#9A9AA3]" aria-live="polite">
                {enviado
                  ? "Listo. Si WhatsApp no se abrió, revisa el bloqueador de ventanas."
                  : "Abre WhatsApp con tu cupo de Taller Fundador (50% dcto. anual) listo."}
              </p>
            </form>
          )}
        </div>
      )}
    </div>
  );
}

