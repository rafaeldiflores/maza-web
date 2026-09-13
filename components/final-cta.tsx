import { LogoMark } from "./logo";
import { TRIAL_DIAS, WA_MESSAGES, waLink } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="px-5 pb-24 pt-8 sm:px-8 sm:pb-32">
      <div className="caja reveal mx-auto flex max-w-5xl flex-col items-center gap-7 px-6 py-16 text-center sm:px-14 sm:py-20">
        <span className="grid h-14 w-14 place-items-center bg-ink text-app-bg">
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
            className="inline-flex items-center justify-center bg-value px-8 py-4 text-base font-bold text-splash-bg"
          >
            Probar {TRIAL_DIAS} días gratis
          </a>
          <a
            href="#planes"
            className="inline-flex items-center justify-center border border-border-strong px-8 py-4 text-base font-semibold text-ink transition-colors hover:bg-surface-alt"
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
