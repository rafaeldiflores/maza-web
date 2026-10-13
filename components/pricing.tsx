import {
  FUNDADOR,
  PLANS,
  TRIAL_DIAS,
  WA_MESSAGES,
  ofertaFundador,
  precioFinal,
  waLink,
} from "@/lib/site";
import Link from "next/link";

const currency = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
  maximumFractionDigits: 0,
});

function ListaFunciones({
  features,
  className = "",
}: {
  features: string[];
  className?: string;
}) {
  return (
    <ul className={`flex flex-col ${className}`}>
      {features.map((feature, fi) => (
        <li
          key={feature}
          className={`flex items-start gap-2.5 py-2.5 text-sm text-ink-muted ${
            fi < features.length - 1 ? "border-b border-border-soft" : ""
          }`}
        >
          <span className="testigo mt-1.5 bg-value" />
          {feature}
        </li>
      ))}
    </ul>
  );
}

export function Pricing() {
  const oferta = ofertaFundador();
  const pct = Math.round(FUNDADOR.descuento * 100);

  return (
    <section id="planes" className="px-5 py-16 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-12 max-w-2xl sm:mb-16">
          <h2 className="font-display text-[clamp(2.25rem,6vw,3.5rem)] leading-[0.98] tracking-[0.01em] text-ink text-balance">
            Un plan para cada tamaño de taller.
          </h2>
          <p className="mt-4 max-w-[58ch] text-base leading-relaxed text-ink-muted sm:text-lg">
            Te acompañamos en la puesta en marcha: hablas con una persona, no
            con un formulario.
          </p>
        </div>

        {oferta ? (
          <div className="reveal mb-8 flex flex-col gap-1.5 border border-border-strong bg-value-soft px-5 py-4">
            <span className="rotulo w-fit bg-value px-2.5 py-1 text-[10px] text-splash-bg">
              {TRIAL_DIAS} días gratis
            </span>
            <p className="text-sm font-medium text-ink">
              Pruébalo con el trabajo real de tu taller antes de pagar nada.
            </p>
            <p className="text-sm text-ink-muted">
              Estamos partiendo: los primeros {FUNDADOR.cupos} talleres que se
              queden con MAZA tienen precio de lanzamiento ({pct}% menos)
              mientras mantengan el plan.
            </p>
          </div>
        ) : (
          <div className="reveal mb-8 flex flex-col gap-1.5 border border-border-strong bg-value-soft px-5 py-4">
            <span className="rotulo w-fit bg-value px-2.5 py-1 text-[10px] text-splash-bg">
              Talleres fundadores
            </span>
            <p className="text-sm font-medium text-ink">
              Los talleres fundadores tienen condiciones especiales.
            </p>
            <Link href="/#inscripcion" className="inline-flex min-h-11 w-fit items-center text-sm font-bold text-ink underline underline-offset-4">
              Inscribe tu taller →
            </Link>
          </div>
        )}

        <div className="caja reveal grid grid-cols-1 md:grid-cols-3">
          {PLANS.map((plan, i) => (
            <div
              key={plan.name}
              className={`flex flex-col p-6 sm:p-7 border-neutral-track ${plan.highlighted ? "order-first md:order-none" : ""} ${
                i < PLANS.length - 1 ? "border-b md:border-b-0" : ""
              } ${i % PLANS.length !== PLANS.length - 1 ? "md:border-r" : ""} ${
                plan.highlighted ? "border-t-2 border-t-ink" : ""
              }`}
            >
              <p className="rotulo text-[10px] text-value-shade">
                {plan.highlighted ? "Recomendado" : " "}
              </p>

              <h3 className="mt-2 font-display text-3xl tracking-[0.02em] text-ink">
                {plan.name}
              </h3>
              <p className="mt-1 text-sm text-ink-muted">{plan.tagline}</p>

              {oferta && (
                <p className="mt-6 flex items-center gap-2">
                  <span className="text-sm text-ink-faint line-through">
                    {currency.format(plan.price)}
                  </span>
                  <span className="rotulo bg-value px-1.5 py-0.5 text-[10px] text-splash-bg">
                    Lanzamiento
                  </span>
                </p>
              )}
              <p
                className={`${oferta ? "mt-1" : "mt-6"} flex items-baseline gap-1.5`}
              >
                {plan.priceDesde && (
                  <span className="text-sm font-medium text-ink-faint">
                    desde
                  </span>
                )}
                <span className="cifra text-4xl text-value-shade">
                  {currency.format(precioFinal(plan.price))}
                </span>
                <span className="text-sm font-medium text-ink-faint">
                  / mes
                </span>
              </p>
              <p className="rotulo mt-1 text-[10px]">IVA incluido</p>
              {plan.extraSeatPrice && (
                <p className="rotulo mt-1 text-[10px]">
                  + {currency.format(precioFinal(plan.extraSeatPrice))} por mecánico extra
                </p>
              )}

              {plan.roiNote && (
                <div className="mt-2.5 border-l-2 border-value bg-value-soft/60 px-2.5 py-1.5 text-xs font-semibold text-value-shade">
                  {plan.roiNote}
                </div>
              )}

              <details className="group/incluye mt-5 border-t border-border-soft md:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between py-3 text-sm font-semibold text-ink [&::-webkit-details-marker]:hidden">
                  Qué incluye ({plan.features.length})
                  <span className="text-ink-faint transition-transform group-open/incluye:rotate-180">▾</span>
                </summary>
                <ListaFunciones features={plan.features} />
              </details>
              <div className="hidden flex-1 md:flex md:flex-col">
                <ListaFunciones features={plan.features} className="mt-6" />
              </div>

              <a
                href={waLink(WA_MESSAGES.plan(plan.name))}
                target="_blank"
                rel="noreferrer"
                data-cta={`plan-${plan.name.toLowerCase().replace(/\s+/g, "-")}`}
                className={`mt-5 md:mt-8 inline-flex items-center justify-center px-6 py-3 text-sm font-bold ${
                  plan.highlighted
                    ? "bg-value text-splash-bg"
                    : "border border-ink text-ink hover:bg-surface-alt"
                }`}
              >
                Consultar por {plan.name}
              </a>
            </div>
          ))}
        </div>

        {/* Banner de migración asistida */}
        <div className="reveal mt-10 flex flex-col items-start justify-between gap-4 border border-border-strong bg-surface p-6 sm:flex-row sm:items-center">
          <div className="flex flex-col gap-1">
            <span className="rotulo text-[10px] text-value-shade">
              Migración sin fricción
            </span>
            <h4 className="text-base font-bold text-ink">
              ¿Tienes tu lista en un cuaderno o Excel?
            </h4>
            <p className="text-sm text-ink-muted">
              Envíanos una foto de tus servicios o repuestos por WhatsApp y te
              dejamos el catálogo configurado en 10 minutos.
            </p>
          </div>
          <a
            href={waLink(
              "Hola, quiero que me ayuden a configurar el catálogo de mi taller en MAZA."
            )}
            target="_blank"
            rel="noreferrer"
            data-cta="migracion"
            className="shrink-0 border border-ink px-5 py-2.5 text-xs font-bold text-ink transition-colors hover:bg-surface-alt"
          >
            Configurar por WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
