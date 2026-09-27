import { MARCA, NARANJO } from "@/lib/marca";

/** La rueda de MAZA: llanta y rayos en `currentColor`, buje en naranjo. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} role="img" aria-label="MAZA">
      <path d={MARCA.anillo} fill="currentColor" fillRule="evenodd" />
      <path d={MARCA.rayos} fill="currentColor" />
      <path d={MARCA.buje} fill={NARANJO} fillRule="evenodd" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <span className="grid h-9 w-9 place-items-center bg-ink text-app-bg">
        <LogoMark className="h-6 w-6" />
      </span>
      <span className="font-display text-2xl tracking-[0.04em] text-ink">
        MAZA
      </span>
    </span>
  );
}
