import Link from "next/link";
import { URL_ENTRAR } from "@/lib/site";

/**
 * Cierre de cada página del sitio: inscribir el taller (MAZA entra por
 * invitación, como taller fundador) o entrar, para quien ya usa MAZA.
 */
export function CierreCuenta({ titulo = "¿Quieres tu taller adentro?" }: { titulo?: string }) {
  return (
    <section className="bg-splash-bg px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="max-w-[18ch] font-display text-[clamp(2.25rem,5vw,3.5rem)] leading-[0.98] tracking-[0.01em] text-splash-ink">
            {titulo}
          </h2>
          <p className="mt-3 font-mono text-xs text-splash-ink-faint">
            Talleres fundadores · Pocos cupos · Te contactamos por WhatsApp
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/#inscripcion"
            data-cta="cierre-inscripcion"
            className="inline-flex h-12 items-center bg-value px-6 font-bold text-splash-bg"
          >
            Inscribir mi taller
          </Link>
          <a href={URL_ENTRAR} className="inline-flex h-12 items-center border border-splash-border px-6 font-bold text-splash-ink">
            Entrar
          </a>
        </div>
      </div>
    </section>
  );
}
