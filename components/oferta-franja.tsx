import { WaLink } from "@/components/wa-tracking";
import { waUrl } from "@/lib/marca";

/**
 * Franja sobre la cabecera: convocatoria para talleres fundadores.
 */
export function OfertaFranja() {
  return (
    <aside
      aria-label="Convocatoria Talleres Fundadores"
      className="bg-[var(--ink)] text-[var(--bg)] px-4 py-2 text-xs sm:text-sm font-medium border-b border-[var(--line)]"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
          <span className="inline-flex items-center gap-1 font-mono text-[11px] font-bold tracking-wider text-[var(--amber)] uppercase">
            <svg viewBox="0 0 24 24" className="h-3 w-3 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
            CUPOS TALLER FUNDADOR
          </span>
          <span className="hidden sm:inline opacity-30" aria-hidden="true">
            ·
          </span>
          <span className="text-[11px] sm:text-xs opacity-90">
            Entregamos tu taller 100% configurado con tu lista de precios.
          </span>
        </div>
        <WaLink
          href={waUrl(
            "Hola, vi la web de MAZA y quiero sumar mi taller a los Talleres Fundadores."
          )}
          ubicacion="franja-fundadores"
          className="shrink-0 font-mono text-[11px] font-bold text-[var(--amber)] hover:underline inline-flex items-center gap-1 uppercase tracking-wider"
        >
          Sumar taller →
        </WaLink>
      </div>
    </aside>
  );
}
