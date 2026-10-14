import { APP_EN_PRUEBA_CERRADA } from "@/lib/site";

/**
 * Sello de la app de Android. Mientras la app esté en prueba cerrada dice
 * "Pronto en Google Play" y no enlaza a nada (la ficha solo la ven los
 * testers). Siempre oscuro, como los sellos de las tiendas, en los dos temas.
 */
export function ProntoGooglePlay({ className }: { className?: string }) {
  if (!APP_EN_PRUEBA_CERRADA) return null;
  return (
    <div
      className={`inline-flex items-center gap-2.5 rounded-lg border border-white/15 bg-[#111] px-3.5 py-2 text-white ${className ?? ""}`}
      aria-label="Pronto en Google Play"
    >
      <IconoGooglePlay className="h-6 w-6 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-white/70">
          Web App lista · Pronto en
        </span>
        <span className="mt-0.5 text-[17px] font-semibold tracking-[-0.01em]">Google Play</span>
      </span>
    </div>
  );
}

export function IconoGooglePlay({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="#00D7FE" d="M3.6 1.8 13.4 12 3.6 22.2c-.4-.2-.6-.7-.6-1.2V3c0-.5.2-1 .6-1.2z" />
      <path fill="#FFCE00" d="m16.8 8.6-3.4 3.4 3.4 3.4 3.9-2.2c1.1-.6 1.1-1.8 0-2.4z" />
      <path fill="#00F076" d="M3.6 1.8 13.4 12l3.4-3.4L5.2 2c-.6-.4-1.2-.4-1.6-.2z" />
      <path fill="#F83F52" d="M3.6 22.2c.4.2 1 .2 1.6-.2l11.6-6.6-3.4-3.4z" />
    </svg>
  );
}
