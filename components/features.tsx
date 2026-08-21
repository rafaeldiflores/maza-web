import { FEATURES } from "@/lib/site";
import { FeatureIcon } from "./feature-icon";

export function Features() {
  return (
    <section id="funciones" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-12 max-w-2xl sm:mb-16">
          <h2 className="font-display text-[clamp(2.25rem,6vw,3.5rem)] leading-[0.98] tracking-[0.01em] text-ink text-balance">
            Todo el taller, en una sola pantalla.
          </h2>
          <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-ink-muted sm:text-lg">
            MAZA conecta la cola de trabajo con lo que tu cliente ve en su
            celular: seguimiento en vivo, aprobación de presupuestos y todo
            el respaldo operativo del taller.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <article
              key={feature.title}
              className={`reveal group rounded-2xl border border-border-soft p-6 transition-colors hover:border-border-strong ${
                feature.featured
                  ? "bg-white/[0.06] lg:col-span-2"
                  : "bg-white/[0.03]"
              }`}
              style={{ animationDelay: `${Math.min(i, 6) * 40}ms` }}
            >
              <FeatureIcon
                name={feature.icon}
                className={`h-7 w-7 ${feature.featured ? "text-accent" : "text-ink-faint"} transition-colors group-hover:text-accent`}
              />
              <h3 className="mt-4 text-lg font-bold text-ink">
                {feature.title}
              </h3>
              <p className="mt-1.5 max-w-[48ch] text-[15px] leading-relaxed text-ink-muted">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
