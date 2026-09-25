import { FEATURES } from "@/lib/site";
import { FeatureIcon } from "./feature-icon";
import { PhoneFrame } from "./phone-frame";
import { WorkshopToolsGrid } from "./workshop-tools-grid";

/**
 * En el celular las tres funciones estrella van en un carrusel horizontal
 * (se deslizan con el dedo, como un carrusel de Instagram): una pantalla en
 * vez de tres. Desde `sm` vuelven a los bloques alternados con captura.
 *
 * `.reveal` va en el contenedor y no en cada tarjeta: su animación usa el
 * scroll más cercano, y dentro del carrusel ese es el horizontal, así que las
 * tarjetas fuera de vista quedarían invisibles.
 */
export function Features() {
  const spotlight = FEATURES.filter((f) => f.spotlight);

  return (
    <section id="funciones" className="px-5 py-16 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-8 max-w-2xl sm:mb-24">
          <h2 className="font-display text-[clamp(2.25rem,6vw,3.5rem)] leading-[0.98] tracking-[0.01em] text-ink text-balance">
            Lo que ningún cuaderno puede hacer.
          </h2>
          <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-ink-muted sm:text-lg">
            Tres cosas que cambian cómo te ve tu cliente — y ocho más que
            ordenan el taller por dentro.
          </p>
        </div>

        <div className="reveal -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-col sm:gap-28 sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden">
          {spotlight.map((feature, i) => {
            const imageFirst = i % 2 === 0;
            return (
              <div
                key={feature.icon}
                className="grid w-[78%] shrink-0 snap-center grid-cols-1 content-start items-center gap-5 sm:w-auto sm:grid-cols-2 sm:gap-14"
              >
                <div
                  className={`flex justify-center ${imageFirst ? "sm:order-1" : "sm:order-2"}`}
                >
                  <div className="w-[210px] sm:w-full">
                    <PhoneFrame
                      file={`screenshots/${feature.icon}.png`}
                      alt={feature.shotAlt}
                    />
                  </div>
                </div>

                <div
                  className={`flex max-w-[50ch] flex-col gap-2 sm:gap-3 ${imageFirst ? "sm:order-2" : "sm:order-1"}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="hidden h-11 w-11 shrink-0 place-items-center border border-border-strong text-ink sm:grid">
                      <FeatureIcon name={feature.icon} className="h-6 w-6" />
                    </span>
                    {feature.tag && (
                      <span className="rotulo text-[10px] text-value-shade">
                        {feature.tag}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-[clamp(1.6rem,3.5vw,2.5rem)] leading-[1.02] tracking-[0.01em] text-ink text-balance">
                    {feature.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-ink-muted sm:text-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <p className="rotulo mt-3 text-center text-[10px] sm:hidden">
          Desliza para ver más →
        </p>

        <WorkshopToolsGrid />
      </div>
    </section>
  );
}
