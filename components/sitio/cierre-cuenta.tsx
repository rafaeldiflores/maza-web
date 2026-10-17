"use client";

import { useState } from "react";
import { URL_ENTRAR, waLink } from "@/lib/site";
import { WhatsappIcon } from "../whatsapp-icon";

const PARTICULAS = [
  { tx: "-85px", ty: "-60px", color: "#FF9900", rot: "25deg", delay: "0ms" },
  { tx: "-45px", ty: "-80px", color: "#22A559", rot: "-40deg", delay: "25ms" },
  { tx: "0px", ty: "-90px", color: "#F2F2F5", rot: "15deg", delay: "10ms" },
  { tx: "45px", ty: "-80px", color: "#FF9900", rot: "60deg", delay: "35ms" },
  { tx: "85px", ty: "-55px", color: "#22A559", rot: "-25deg", delay: "20ms" },
  { tx: "-95px", ty: "10px", color: "#22A559", rot: "-60deg", delay: "15ms" },
  { tx: "95px", ty: "15px", color: "#FF9900", rot: "35deg", delay: "30ms" },
  { tx: "-50px", ty: "55px", color: "#FF9900", rot: "-30deg", delay: "40ms" },
  { tx: "50px", ty: "55px", color: "#22A559", rot: "45deg", delay: "15ms" },
];

/**
 * Cierre de cada página del sitio: al apretar contactar despliega la
 * celebración de Taller Fundador con el 50% de descuento en la suscripción anual.
 */
export function CierreCuenta({ titulo = "¿Listo para ordenar tu taller?" }: { titulo?: string }) {
  const [celebrando, setCelebrando] = useState(false);

  const linkReclamar = waLink(
    "Hola, ¡desbloqueé mi cupo de Taller Fundador en la web con 50% de descuento en la suscripción anual! Quiero sumar mi taller a MAZA."
  );

  return (
    <section className="bg-splash-bg px-5 py-14 sm:px-8 sm:py-16 border-t border-[var(--line)]">
      <style>{`
        @keyframes maza-confetti {
          0% { transform: translate(0, 0) scale(0.4) rotate(0deg); opacity: 1; }
          70% { opacity: 1; }
          100% { transform: translate(var(--tx), var(--ty)) scale(1.1) rotate(var(--rot)); opacity: 0; }
        }
      `}</style>
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="max-w-[20ch] font-display text-[clamp(2.25rem,5vw,3.5rem)] leading-[0.98] tracking-[0.01em] text-splash-ink">
            {titulo}
          </h2>
          <p className="mt-2 flex items-center gap-1.5 font-mono text-xs text-splash-ink-faint">
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5 shrink-0 text-[#FF9900]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
            <span>Cupos Taller Fundador · Te entregamos tu catálogo de precios cargado</span>
          </p>
        </div>

        {!celebrando ? (
          <div className="flex w-full sm:w-auto flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setCelebrando(true)}
              data-cta="cierre-inscripcion"
              className="inline-flex h-12 flex-1 sm:flex-initial items-center justify-center bg-value px-6 font-bold text-splash-bg hover:bg-value-shade cursor-pointer"
            >
              Contactar y sumar mi taller →
            </button>
            <a
              href={URL_ENTRAR}
              className="inline-flex h-12 items-center justify-center border border-splash-border px-5 font-bold text-splash-ink hover:bg-white/5"
            >
              Entrar
            </a>
          </div>
        ) : (
          <div className="relative w-full max-w-md rounded-sm border-2 border-[#FF9900] bg-[#141417] p-4 shadow-[0_0_35px_-8px_rgba(255,153,0,0.45)]">
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

            <span className="inline-flex h-5 items-center gap-1.5 rounded-xs bg-[#22A559]/20 border border-[#22A559]/50 px-2 font-mono text-[10px] font-bold uppercase tracking-wider text-[#22A559]">
              <svg
                viewBox="0 0 24 24"
                className="h-3 w-3 shrink-0"
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
            <p className="mt-2 font-display text-2xl leading-none tracking-[0.01em] text-[#F2F2F5]">
              ESTÁS DENTRO DE LOS TALLERES FUNDADORES.
            </p>
            <p className="mt-1.5 flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#FF9900]">
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
              <span>Tienes un 50% de descuento en la suscripción anual + catálogo cargado sin costo.</span>
            </p>
            <a
              href={linkReclamar}
              target="_blank"
              rel="noreferrer"
              data-cta="cierre-reclamar-wa"
              className="mt-3 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-sm bg-[#25D366] px-4 text-xs sm:text-sm font-bold text-[#0A0A0A] hover:bg-[#20bd5a]"
            >
              <WhatsappIcon className="h-4 w-4 text-[#0A0A0A]" />
              Reclamar mi 50% anual por WhatsApp →
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

