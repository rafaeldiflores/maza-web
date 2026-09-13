import { LogoMark } from "./logo";
import { TRIAL_DIAS, WA_MESSAGES, waLink } from "@/lib/site";

const ITEMS = [
  { name: "Diagnóstico y revisión general", price: 8000 },
  { name: "Cambio de pastillas de freno", price: 22000 },
  { name: "Repuesto: pastillas delanteras", price: 15000 },
];

const currency = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
  maximumFractionDigits: 0,
});

const total = ITEMS.reduce((sum, item) => sum + item.price, 0);

/**
 * Maqueta fiel de la vista del cliente en /o/<token> (ver worker.js), con un
 * presupuesto esperando aprobación: es el núcleo del producto, así que va en
 * HTML/CSS real en vez de una captura o un PhoneFrame genérico.
 */
function OrdenMockup() {
  return (
    <div className="w-full max-w-[300px] border-2 border-ink bg-surface">
      <div className="border-b border-border-strong px-5 py-4 text-center">
        <p className="rotulo">Taller Demo</p>
        <h3 className="mt-1 text-lg font-bold text-ink">
          Honda CB 500 · 2021
        </h3>
        <p className="cifra mt-1 inline-block border border-border-soft px-2 py-0.5 text-[11px]">
          ORDEN #0142
        </p>
      </div>

      <div className="flex items-center gap-2.5 border-b border-border-strong bg-value-soft px-5 py-3">
        <span className="testigo bg-value" />
        <span className="rotulo text-[11px] text-ink">
          Esperando aprobación
        </span>
      </div>

      <div className="px-5 py-4">
        <p className="titulo-seccion">Presupuesto</p>
        <div className="mt-3 flex flex-col">
          {ITEMS.map((item) => (
            <div
              key={item.name}
              className="flex items-baseline justify-between gap-3 border-b border-neutral-track py-2.5 text-[13px]"
            >
              <span className="text-ink-muted">{item.name}</span>
              <span className="cifra shrink-0 text-[13px]">
                {currency.format(item.price)}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-3 flex items-baseline justify-between border-t border-border-strong pt-3">
          <span className="rotulo">Total</span>
          <span className="cifra text-[22px] text-value-shade">
            {currency.format(total)}
          </span>
        </div>

        <button
          type="button"
          tabIndex={-1}
          className="mt-4 w-full bg-value py-3 text-sm font-bold text-splash-bg"
        >
          Aprobar presupuesto
        </button>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="px-5 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        <div className="flex flex-col items-start gap-6">
          <span className="grid h-14 w-14 place-items-center bg-ink text-app-bg sm:h-16 sm:w-16">
            <LogoMark className="h-9 w-9 sm:h-11 sm:w-11" />
          </span>

          <h1 className="font-display text-[clamp(2.75rem,9vw,5.25rem)] leading-[0.95] tracking-[0.01em] text-ink text-balance">
            Tu taller ordenado.
            <br />
            Tu cliente informado.
          </h1>

          <p className="max-w-[50ch] text-lg leading-relaxed text-ink-muted sm:text-xl">
            MAZA lleva la cola de trabajo, el inventario y la caja — con un
            asistente que conoce tu taller de memoria y le da a cada cliente
            un link para seguir su vehículo en vivo y aprobar el presupuesto
            desde el celular.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={waLink(WA_MESSAGES.trial)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-value px-7 py-3.5 text-base font-bold text-splash-bg"
            >
              Probar {TRIAL_DIAS} días gratis
            </a>
            <a
              href={waLink(WA_MESSAGES.general)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center border border-border-strong px-7 py-3.5 text-base font-semibold text-ink transition-colors hover:bg-surface-alt"
            >
              ¿Dudas? Hablemos
            </a>
          </div>

          <p className="text-sm text-ink-faint">
            Sin tarjeta de crédito · Sin permanencia · Mecánica, detailing,
            lavado — autos, motos y bicicletas
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <OrdenMockup />
        </div>
      </div>
    </section>
  );
}
