import { WhatsappIcon } from "./whatsapp-icon";
import { CREADOR, waLink } from "@/lib/site";

/**
 * El fundador y su historia, en tercera persona y voz de marca: un taller real
 * atendido cinco años en paralelo a Ingeniería Informática, y MAZA como
 * resultado de las dos cosas. MAZA habla en plural; la cara del fundador da
 * confianza sin que todo parezca depender de una sola persona.
 */
export function QuienEstaDetras() {
  return (
    <section id="quien" className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="caja reveal mx-auto flex max-w-4xl flex-col gap-6 p-6 sm:flex-row sm:items-start sm:gap-10 sm:p-10">
        {/* eslint-disable-next-line @next/next/no-img-element -- export estático, sin optimizador */}
        <img
          src={CREADOR.foto}
          alt={`${CREADOR.nombre}, fundador y CEO de MAZA`}
          width={96}
          height={96}
          loading="lazy"
          className="h-24 w-24 shrink-0 rounded-full object-cover object-top"
        />

        <div className="flex flex-col gap-4">
          <p className="rotulo text-[10px] text-value-shade">El fundador</p>
          <h2 className="font-display text-[clamp(2rem,5vw,3rem)] leading-[0.98] tracking-[0.01em] text-ink text-balance">
            Forjado en taller real. Respaldado por ingeniería.
          </h2>
          <div className="flex flex-col gap-3 text-base leading-relaxed text-ink-muted">
            <p>
              <strong className="text-ink">{CREADOR.nombre}</strong>, fundador y CEO de
              MAZA, es ingeniero en informática de {CREADOR.ciudad}. La mecánica y el
              software fueron siempre sus dos oficios.
            </p>
            <p>
              En <strong className="text-ink">{CREADOR.taller}</strong> vivió de cerca los
              problemas de todos los días: el cuaderno, las llamadas preguntando si el
              trabajo estaba listo, los presupuestos que nadie contestaba.
            </p>
            <p>
              MAZA nació para resolver eso en terreno: lleva{" "}
              <strong className="text-ink">1 año operando en el taller</strong>, testeado
              y probado en todo el proceso operativo antes de llegar a los demás.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
            <a
              href={waLink("Hola, quiero conversar sobre MAZA para mi taller.")}
              target="_blank"
              rel="noreferrer"
              data-cta="creador"
              className="inline-flex items-center justify-center gap-2 bg-value px-6 py-3 text-sm font-bold text-splash-bg transition-colors hover:bg-value-shade"
            >
              <WhatsappIcon />
              Escríbenos por WhatsApp
            </a>
            <a
              href={CREADOR.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center border border-border-strong px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-surface-alt"
            >
              LinkedIn del fundador ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
