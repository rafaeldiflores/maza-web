import { LogoMark } from "./logo";
import { PhoneFrame } from "./phone-frame";
import { TRIAL_DIAS, WA_MESSAGES, waLink } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-14 sm:px-8 sm:pb-28 sm:pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-accent/10 blur-3xl"
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        <div className="hero-stagger flex flex-col items-start gap-6">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-ink text-bg-start shadow-lg shadow-black/30 sm:h-16 sm:w-16">
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
              className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-base font-bold text-accent-ink transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Probar {TRIAL_DIAS} días gratis
            </a>
            <a
              href={waLink(WA_MESSAGES.general)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-border-strong px-7 py-3.5 text-base font-semibold text-ink transition-colors hover:bg-white/5"
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
          <PhoneFrame
            file="screenshots/hero.png"
            alt="Pantalla de inicio de MAZA con el resumen del día del taller"
            className="max-w-[280px] rotate-[2deg]"
          />
        </div>
      </div>
    </section>
  );
}
