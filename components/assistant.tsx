import { BRIEF_ALERTAS, IA_CAPACIDADES } from "@/lib/site";
import { FeatureIcon } from "./feature-icon";
import { AssistantChat } from "./assistant-chat";

const BRIEF_DATOS = [
  { rotulo: "En cola", valor: "7" },
  { rotulo: "Listas p/ entrega", valor: "3" },
  { rotulo: "Stock bajo", valor: "2" },
];

const currency = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
  maximumFractionDigits: 0,
});

/**
 * Panel de lectura (DESIGN.md §5): el LCD embutido de la placa, siempre
 * oscuro en los dos temas. Briefing del día que el asistente arma solo.
 */
function PanelLectura() {
  return (
    <div className="w-full max-w-[300px] border-2 border-splash-border bg-splash-bg px-5 py-5 text-splash-ink">
      <p className="rotulo text-[10px] text-splash-ink-faint">
        Briefing del día
      </p>
      <div className="mt-4 grid grid-cols-3 gap-px bg-splash-border">
        {BRIEF_DATOS.map((dato) => (
          <div
            key={dato.rotulo}
            className="flex flex-col gap-1 bg-splash-bg px-2 py-3 text-center"
          >
            <span className="cifra text-2xl text-splash-ink">
              {dato.valor}
            </span>
            <span className="rotulo text-[9px] text-splash-ink-faint">
              {dato.rotulo}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-baseline justify-between border-t border-splash-border pt-4">
        <span className="rotulo text-[10px] text-splash-ink-faint">
          Cobrado hoy
        </span>
        <span className="cifra text-xl text-value">
          {currency.format(184500)}
        </span>
      </div>
    </div>
  );
}

export function Assistant() {
  return (
    <section
      id="asistente"
      className="border-y border-border-soft bg-surface-alt px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="reveal max-w-3xl">
          <span className="rotulo inline-flex items-center gap-2 border border-border-strong px-3 py-1.5 text-[10px]">
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
          <div className="flex flex-col items-center">
            <AssistantChat />
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
                  <span className="testigo mt-1.5 bg-ink-faint" />
                  {alerta}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center lg:justify-end">
            <PanelLectura />
          </div>
        </div>
      </div>
    </section>
  );
}
