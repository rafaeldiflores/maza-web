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
            Tres cosas que cambian cómo te ve tu cliente — y siete más que
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
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/[0.06] text-accent">
                      <FeatureIcon name={feature.icon} className="h-6 w-6" />
                    </span>
                    {feature.tag && (
                      <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-bold text-accent">
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

        <div className="reveal mt-24 border-t border-border-soft pt-14 sm:mt-32">
          <h3 className="mb-10 max-w-[40ch] font-display text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.02] tracking-[0.01em] text-ink text-balance">
            Y todo el resto del taller, resuelto.
          </h3>

          <div className="grid grid-cols-1 gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
            {rest.map((feature) => (
              <div key={feature.icon} className="reveal flex flex-col gap-2.5">
                <FeatureIcon
                  name={feature.icon}
                  className="h-6 w-6 text-accent"
                />
                <h4 className="text-base font-bold text-ink">
                  {feature.title}
                </h4>
                <p className="max-w-[42ch] text-[15px] leading-relaxed text-ink-muted">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
