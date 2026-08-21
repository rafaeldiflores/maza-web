import { LogoMark } from "./logo";
import { TRIAL_DIAS, WA_MESSAGES, waLink } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="px-5 pb-24 pt-8 sm:px-8 sm:pb-32">
      <div className="reveal relative mx-auto flex max-w-5xl flex-col items-center gap-7 overflow-hidden rounded-[2.5rem] border border-border-strong bg-white/[0.05] px-6 py-16 text-center sm:px-14 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
        />

        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-ink text-bg-start">
          <LogoMark className="h-9 w-9" />
        </span>

        <h2 className="max-w-[18ch] font-display text-[clamp(2.25rem,6vw,4rem)] leading-[0.98] tracking-[0.01em] text-ink text-balance">
          Empieza con el vehículo que tienes en el taller ahora.
        </h2>

        <p className="max-w-[52ch] text-base leading-relaxed text-ink-muted sm:text-lg">
          No hace falta cargar el histórico ni cerrar el taller un día para
          migrar. Cargas lo que está en el mesón hoy y sigues trabajando.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={waLink(WA_MESSAGES.trial)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-base font-bold text-accent-ink transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Probar {TRIAL_DIAS} días gratis
          </a>
          <a
            href="#planes"
            className="inline-flex items-center justify-center rounded-full border border-border-strong px-8 py-4 text-base font-semibold text-ink transition-colors hover:bg-white/5"
          >
            Ver los planes
          </a>
        </div>

        <p className="text-sm text-ink-faint">
          Sin tarjeta de crédito · Sin permanencia · Cancelas cuando quieras
        </p>
      </div>
    </section>
  );
}
