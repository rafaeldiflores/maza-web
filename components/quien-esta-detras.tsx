import { WhatsappIcon } from "./whatsapp-icon";
import { CREADOR, waLink } from "@/lib/site";

/**
 * El creador y su historia: un taller de bicis abierto en pandemia para pagar
 * la carrera, cinco años atendido en paralelo a Ingeniería Informática, y
 * MAZA como resultado de las dos cosas.
 */
export function QuienEstaDetras() {
  return (
    <section id="quien" className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="caja reveal mx-auto flex max-w-4xl flex-col gap-6 p-6 sm:flex-row sm:items-start sm:gap-10 sm:p-10">
        {/* eslint-disable-next-line @next/next/no-img-element -- export estático, sin optimizador */}
        <img
          src={CREADOR.foto}
          alt={`${CREADOR.nombre}, creador de MAZA`}
          width={96}
          height={96}
          loading="lazy"
          className="h-24 w-24 shrink-0 rounded-full object-cover"
        />

        <div className="flex flex-col gap-4">
          <p className="rotulo text-[10px] text-value-shade">Quién está detrás</p>
          <h2 className="font-display text-[clamp(2rem,5vw,3rem)] leading-[0.98] tracking-[0.01em] text-ink text-balance">
            Cinco años de taller. Cuatro de ingeniería.
          </h2>
          <div className="flex flex-col gap-3 text-base leading-relaxed text-ink-muted">
            <p>
              Soy {CREADOR.nombre}, ingeniero informático,
              de {CREADOR.ciudad}. Desde chico me interesó cómo funcionan las
              cosas, las bicis y los celulares por igual. En pandemia, cuando
              las bicis se llenaron de trabajo, abrí un taller para pagarme la
              carrera.
            </p>
            <p>
              Lo atendí cinco años mientras estudiaba, y lo usé de laboratorio:
              lo que aprendía en la carrera lo probaba con mis propios clientes.
              El cuaderno, las llamadas preguntando si la bici estaba lista, los
              presupuestos que nadie contestaba. De ahí nació MAZA, que llevo
              casi dos años construyendo.
            </p>
            <p>
              Lo construyo y lo atiendo yo: si me escribes, te respondo yo.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
            <a
              href={waLink(`Hola ${CREADOR.corto}, quiero conversar sobre MAZA para mi taller.`)}
              target="_blank"
              rel="noreferrer"
              data-cta="creador"
              className="inline-flex items-center justify-center gap-2 bg-value px-6 py-3 text-sm font-bold text-splash-bg transition-colors hover:bg-value-shade"
            >
              <WhatsappIcon />
              Escribirme por WhatsApp
            </a>
            <a
              href={CREADOR.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center border border-border-strong px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-surface-alt"
            >
              Ver mi LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
