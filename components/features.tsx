import { FEATURES } from "@/lib/site";
import { FeatureIcon } from "./feature-icon";
import { PhoneFrame } from "./phone-frame";

export function Features() {
  const spotlight = FEATURES.filter((f) => f.spotlight);
  const rest = FEATURES.filter((f) => !f.spotlight && !f.ownSection);

  return (
    <section id="funciones" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-16 max-w-2xl sm:mb-24">
          <h2 className="font-display text-[clamp(2.25rem,6vw,3.5rem)] leading-[0.98] tracking-[0.01em] text-ink text-balance">
            Lo que ningún cuaderno puede hacer.
          </h2>
          <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-ink-muted sm:text-lg">
            Tres cosas que cambian cómo te ve tu cliente — y ocho más que
            ordenan el taller por dentro.
          </p>
        </div>

        <div className="flex flex-col gap-20 sm:gap-28">
          {spotlight.map((feature, i) => {
            const imageFirst = i % 2 === 0;
            return (
              <div
                key={feature.icon}
                className="reveal grid grid-cols-1 items-center gap-10 sm:grid-cols-2 sm:gap-14"
              >
                <div
                  className={`flex justify-center ${imageFirst ? "sm:order-1" : "sm:order-2"}`}
                >
                  <PhoneFrame
                    file={`screenshots/${feature.icon}.png`}
                    alt={feature.shotAlt}
                  />
                </div>

                <div
                  className={`flex max-w-[50ch] flex-col gap-3 ${imageFirst ? "sm:order-2" : "sm:order-1"}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 shrink-0 place-items-center border border-border-strong text-ink">
                      <FeatureIcon name={feature.icon} className="h-6 w-6" />
                    </span>
                    {feature.tag && (
                      <span className="rotulo text-[10px] text-value-shade">
                        {feature.tag}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.02] tracking-[0.01em] text-ink text-balance">
                    {feature.title}
                  </h3>
                  <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="reveal mt-24 sm:mt-32">
          <p className="titulo-seccion">Y todo el resto del taller, resuelto</p>

          <div className="caja mt-8">
            {rest.map((feature, i) => (
              <div
                key={feature.icon}
                className={`flex items-start gap-4 p-5 ${
                  i < rest.length - 1 ? "border-b border-neutral-track" : ""
                }`}
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center border border-border-soft text-ink">
                  <FeatureIcon name={feature.icon} className="h-5 w-5" />
                </span>
                <div className="flex flex-col gap-1">
                  <h4 className="text-base font-bold text-ink">
                    {feature.title}
                  </h4>
                  <p className="max-w-[52ch] text-[15px] leading-relaxed text-ink-muted">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
