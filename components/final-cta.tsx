import { LogoTuerca } from "./logo";
import { WhatsappIcon } from "./whatsapp-icon";
import { mensajeCtaPrincipal, textoCtaPrincipal, waLink } from "@/lib/site";

export function FinalCta() {
  return (
    <section id="empezar" className="px-5 pb-24 pt-8 sm:px-8 sm:pb-32">
      <div className="caja reveal mx-auto flex max-w-5xl flex-col items-center gap-7 px-6 py-16 text-center sm:px-14 sm:py-20">
        <LogoTuerca className="h-16 w-16" />

        <h2 className="max-w-[18ch] font-display text-[clamp(2.25rem,6vw,4rem)] leading-[0.98] tracking-[0.01em] text-ink text-balance">
          Empieza con el vehículo que tienes en el taller ahora.
        </h2>

        <p className="max-w-[52ch] text-base leading-relaxed text-ink-muted sm:text-lg">
          No hace falta cargar el histórico ni cerrar el taller un día para
          migrar. Cargas lo que está en el mesón hoy y sigues trabajando.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={waLink(mensajeCtaPrincipal())}
            target="_blank"
            rel="noreferrer"
            data-cta="cierre"
            className="inline-flex items-center justify-center gap-2 bg-value px-8 py-4 text-base font-bold text-splash-bg"
          >
            <WhatsappIcon />
            {textoCtaPrincipal()}
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
