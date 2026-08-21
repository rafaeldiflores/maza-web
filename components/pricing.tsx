import { PLANS, WA_MESSAGES, waLink } from "@/lib/site";

const currency = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
  maximumFractionDigits: 0,
});

export function Pricing() {
  return (
    <section id="planes" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-12 max-w-2xl sm:mb-16">
          <h2 className="font-display text-[clamp(2.25rem,6vw,3.5rem)] leading-[0.98] tracking-[0.01em] text-ink text-balance">
            Planes para cada taller.
          </h2>
          <p className="mt-4 max-w-[58ch] text-base leading-relaxed text-ink-muted sm:text-lg">
            Sin pasarela adentro de la app: escríbenos por WhatsApp y
            activamos tu plan al tiro.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`reveal flex flex-col rounded-3xl border p-7 ${
                plan.highlighted
                  ? "border-accent/60 bg-white/[0.07] md:-translate-y-3 md:shadow-xl md:shadow-black/30"
                  : "border-border-soft bg-white/[0.03]"
              }`}
            >
              {plan.highlighted && (
                <span className="mb-4 inline-flex w-fit items-center rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-ink">
                  Más elegido
                </span>
              )}

              <h3 className="font-display text-3xl tracking-[0.02em] text-ink">
                {plan.name}
              </h3>
              <p className="mt-1 text-sm text-ink-muted">{plan.tagline}</p>

              <p className="mt-6 flex items-baseline gap-1.5">
                <span className="font-display text-4xl text-accent">
                  {currency.format(plan.price)}
                </span>
                <span className="text-sm font-medium text-ink-faint">
                  / mes
                </span>
              </p>

              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-ink-muted"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m4 10.5 4 4 8-9" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={waLink(WA_MESSAGES.plan(plan.name))}
                target="_blank"
                rel="noreferrer"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition-transform hover:scale-[1.02] active:scale-[0.98] ${
                  plan.highlighted
                    ? "bg-accent text-accent-ink"
                    : "border border-border-strong text-ink hover:bg-white/5"
                }`}
              >
                Contratar {plan.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
