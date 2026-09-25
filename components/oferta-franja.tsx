import { FUNDADOR, cuposFundador, ofertaFundador } from "@/lib/site";

/** Franja de lanzamiento sobre la cabecera: lo primero que ve quien viene de un anuncio. */
export function OfertaFranja() {
  if (!ofertaFundador()) return null;
  const pct = Math.round(FUNDADOR.descuento * 100);

  return (
    <a
      href="#planes"
      className="block bg-ink px-4 py-2 text-center text-[13px] font-semibold text-app-bg"
    >
      <span className="text-value">Lanzamiento:</span> {pct}% de por vida · quedan{" "}
      {cuposFundador()} de {FUNDADOR.cupos} cupos <span aria-hidden="true">→</span>
    </a>
  );
}
