import { WaLink } from "@/components/wa-tracking";
import { waUrl } from "@/lib/marca";

/**
 * Franja sobre la cabecera: convocatoria para talleres fundadores.
 */
export function OfertaFranja() {
  return (
    <aside
      aria-label="Convocatoria Talleres Fundadores"
      className="bg-[var(--ink)] text-[var(--bg)] px-4 py-2.5 text-xs sm:text-sm font-medium border-b border-[var(--line)]"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 sm:flex-row text-center sm:text-left">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
          <span className="font-mono text-[11px] font-bold tracking-wider text-[var(--amber)] uppercase">
            CONVOCATORIA TALLERES FUNDADORES
          </span>
          <span className="hidden sm:inline opacity-30" aria-hidden="true">
            ·
          </span>
          <span>
            Buscamos los primeros 10 talleres aliados: te dejamos el sistema cargado con tus precios y condiciones especiales.
          </span>
        </div>
        <WaLink
          href={waUrl(
            "Hola, vi el video de MAZA y quiero postular mi taller a uno de los cupos del Programa de Talleres Fundadores."
          )}
          ubicacion="franja-fundadores"
          className="shrink-0 font-bold text-[var(--amber)] hover:underline inline-flex items-center gap-1"
        >
          Reservar cupo por WhatsApp →
        </WaLink>
      </div>
    </aside>
  );
}
