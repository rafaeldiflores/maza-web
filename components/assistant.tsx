import { BRIEF_ALERTAS, IA_CAPACIDADES, IA_EJEMPLOS } from "@/lib/site";
import { FeatureIcon } from "./feature-icon";
import { PhoneFrame } from "./phone-frame";

export function Assistant() {
  return (
    <section
      id="asistente"
      className="border-y border-border-soft bg-black/20 px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="reveal max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3.5 py-1.5 text-xs font-bold text-accent">
            <FeatureIcon name="ia" className="h-4 w-4" />
            Incluido en todos los planes
          </span>
          <h2 className="mt-5 font-display text-[clamp(2.25rem,6vw,3.75rem)] leading-[0.98] tracking-[0.01em] text-ink text-balance">
            No es un chatbot pegado encima.
          </h2>
          <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-ink-muted sm:text-lg">
            El asistente de MAZA lee tu taller entero antes de contestar:
            el inventario con su stock real, la cola de trabajo, la agenda,
            la caja del día y el historial de cada cliente. Por eso responde
            con tus números, no con generalidades.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="flex flex-col items-center gap-6">
            <PhoneFrame
              file="screenshots/ia.png"
              alt="Conversación con el asistente de MAZA respondiendo con datos del taller"
            />
            <div className="flex max-w-[420px] flex-wrap justify-center gap-2">
              {IA_EJEMPLOS.map((q) => (
                <span
                  key={q}
                  className="rounded-full border border-border-soft bg-white/[0.04] px-3.5 py-1.5 text-[13px] text-ink-muted"
                >
                  {q}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            {IA_CAPACIDADES.map((cap) => (
              <div key={cap.title} className="reveal flex flex-col gap-2">
                <h3 className="text-lg font-bold text-ink">{cap.title}</h3>
                <p className="max-w-[52ch] text-[15px] leading-relaxed text-ink-muted">
                  {cap.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal mt-20 grid grid-cols-1 items-center gap-10 border-t border-border-soft pt-16 sm:gap-14 lg:grid-cols-[1.1fr_1fr]">
          <div className="flex max-w-[52ch] flex-col gap-4">
            <h3 className="font-display text-[clamp(1.75rem,4.5vw,2.75rem)] leading-[1.02] tracking-[0.01em] text-ink text-balance">
              Y antes de que preguntes, ya te avisó.
            </h3>
            <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
              Al abrir la app tienes el día armado: qué es urgente, qué está
              atrasado y qué se puede cerrar hoy. No hay que ir a buscarlo en
              ninguna pantalla.
            </p>

            <ul className="mt-2 flex flex-col gap-2.5">
              {BRIEF_ALERTAS.map((alerta) => (
                <li
                  key={alerta}
                  className="flex items-start gap-2.5 text-[15px] text-ink-muted"
                >
                  <svg
                    viewBox="0 0 20 20"
                    className="mt-1 h-4 w-4 shrink-0 text-accent"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M10 6v5M10 14h.01" />
                    <circle cx="10" cy="10" r="7.5" />
                  </svg>
                  {alerta}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center lg:justify-end">
            <PhoneFrame
              file="screenshots/brief.png"
              alt="Resumen del día con los pendientes priorizados del taller"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
