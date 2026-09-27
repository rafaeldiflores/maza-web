import { TRIAL_DIAS } from "@/lib/site";

/**
 * Franja sobre la cabecera: lo primero que ve quien viene de un anuncio.
 * Habla de la prueba y de la ayuda, nunca de descuentos ni cupos (ver
 * mensajeCtaPrincipal en lib/site.ts).
 */
export function OfertaFranja() {
  return (
    <a
      href="#empezar"
      className="block bg-ink px-4 py-2 text-center text-[13px] font-semibold text-app-bg"
    >
      <span className="text-value">{TRIAL_DIAS} días gratis:</span> te ayudamos a
      dejar tu taller cargado <span aria-hidden="true">→</span>
    </a>
  );
}
