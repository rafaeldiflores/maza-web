import { HeroCta } from "./hero-cta";
import { OrdenMockup } from "./orden-mockup";
import { CREADOR, TRIAL_DIAS } from "@/lib/site";

export function Hero() {
  return (
    <section id="inicio" className="px-5 pb-16 pt-8 sm:px-8 sm:pb-24 sm:pt-16">
      <div className="mx-auto grid max-w-6xl xl:max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="flex flex-col items-start gap-5 lg:col-span-5">
          <h1 className="font-display text-[clamp(2.75rem,8.5vw,5rem)] leading-[0.95] tracking-[0.01em] text-ink text-balance">
            Tu taller ordenado.
            <br />
            Tu cliente informado.
          </h1>

          <p className="max-w-[40ch] text-lg leading-relaxed text-ink-muted sm:text-xl">
            Tu cliente aprueba el presupuesto desde WhatsApp. Tú dejas de
            contestar “¿ya está listo?”.
          </p>

          <HeroCta />

          <p className="text-xs text-ink-faint">
            {TRIAL_DIAS} días gratis · Te ayudamos a cargarlo · Sin tarjeta
          </p>

          {/* Cara humana: sin testimonios todavía, esto es lo verdadero. */}
          <a href="#quien" className="flex items-center gap-3 border-t border-border-soft pt-4">
            {/* eslint-disable-next-line @next/next/no-img-element -- export estático, sin optimizador */}
            <img
              src={CREADOR.foto}
              alt={`${CREADOR.nombre}, creador de MAZA`}
              width={48}
              height={48}
              className="h-12 w-12 shrink-0 rounded-full object-cover"
            />
            <p className="text-sm leading-snug text-ink-muted">
              <span className="font-semibold text-ink">Te atiendo yo, {CREADOR.corto}.</span>
              <br />
              Tuve taller de bicicletas y creé MAZA.{" "}
              <span className="underline underline-offset-2">Mi historia ↓</span>
            </p>
          </a>
        </div>

        <div id="demo-cliente" className="flex scroll-mt-20 justify-center lg:col-span-7 lg:justify-end">
          <OrdenMockup />
        </div>
      </div>
    </section>
  );
}
