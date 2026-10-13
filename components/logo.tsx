import { MARCA, NARANJO, RUEDA_EN_TUERCA, TUERCA } from "@/lib/marca";

/** La rueda de MAZA en `currentColor`, con el buje en naranjo. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} role="img" aria-label="MAZA">
      <path d={MARCA.silueta} fill="currentColor" fillRule="evenodd" />
      <path d={MARCA.buje} fill={NARANJO} fillRule="evenodd" />
    </svg>
  );
}

/**
 * Tuerca hexagonal (lados planos arriba y abajo) en tinta, con la rueda adentro.
 * Las esquinas se redondean con un trazo del mismo color, sin cambiar la forma.
 */

export function LogoTuerca({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} role="img" aria-label="MAZA">
      <path d={TUERCA} className="fill-ink stroke-ink" strokeWidth={8} strokeLinejoin="round" />
      <g transform={RUEDA_EN_TUERCA} className="text-app-bg">
        <path d={MARCA.silueta} fill="currentColor" fillRule="evenodd" />
        <path d={MARCA.buje} fill={NARANJO} fillRule="evenodd" />
      </g>
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      <LogoTuerca className="h-10 w-10 shrink-0" />
      <span className="font-display text-2xl tracking-[0.04em] text-ink">
        MAZA
      </span>
    </span>
  );
}
