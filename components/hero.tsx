import { LogoMark } from "./logo";
import { OrdenMockup } from "./orden-mockup";
import { TRIAL_DIAS, WA_MESSAGES, waLink } from "@/lib/site";

export function Hero() {
  return (
    <section className="px-5 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-16">
      <div className="mx-auto grid max-w-6xl xl:max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="flex flex-col items-start gap-6 lg:col-span-5">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center bg-ink text-app-bg sm:h-14 sm:w-14">
              <LogoMark className="h-8 w-8 sm:h-10 sm:w-10" />
            </span>
            <span className="rotulo text-[10px] text-value-shade border border-border-strong px-2.5 py-1">
              App Android + Web Mostrador PC
            </span>
          </div>

          <h1 className="font-display text-[clamp(2.75rem,8.5vw,5rem)] leading-[0.95] tracking-[0.01em] text-ink text-balance">
            Tu taller ordenado.
            <br />
            Tu cliente informado.
          </h1>

          <p className="max-w-[50ch] text-lg leading-relaxed text-ink-muted sm:text-xl">
            MAZA lleva la cola de trabajo, el inventario y la caja: tu mecánico
            trabaja con el celular en el taller, tu recepción cobra en el computador,
            y cada cliente aprueba su presupuesto en 1 toque desde WhatsApp.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={waLink(WA_MESSAGES.trial)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-value px-7 py-3.5 text-base font-bold text-splash-bg hover:bg-value-shade transition-colors"
            >
              Probar {TRIAL_DIAS} días gratis
            </a>
            <a
              href={waLink(WA_MESSAGES.general)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center border border-border-strong px-7 py-3.5 text-base font-semibold text-ink transition-colors hover:bg-surface-alt"
            >
              Ver demo por WhatsApp →
            </a>
          </div>

          <div className="flex flex-col gap-1 text-sm text-ink-faint">
            <p className="font-medium text-ink-muted">
              📱 Celular en taller + 💻 Computador en mesón sincronizados en 0.3s
            </p>
            <p className="text-xs">
              Sin tarjeta de crédito · Sin contratos · Autos, motos, bicicletas, detailing y lavado
            </p>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end lg:col-span-7">
          <OrdenMockup />
        </div>
      </div>
    </section>
  );
}
