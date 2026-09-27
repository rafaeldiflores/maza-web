import type { Rubro } from "./rubro-contexto";

/**
 * Ruedas del rubro, los mismos trazos que la app (Maza-app,
 * src/assets/icon/maza-*.svg). El ancho del neumático dice el rubro: bici =
 * cubierta fina y 8 rayos; moto = neumático delgado y llanta grande de 5
 * rayos; auto = neumático ancho con surco lateral y llanta chica.
 */
const RUEDAS: Record<Rubro, React.ReactNode> = {
  bici: (
    <>
      <circle cx="12" cy="12" r="9.5" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="1.3" strokeWidth="1.4" />
      <path
        d="M12 10.7V3.6M12 13.3v7.1M10.7 12H3.6M13.3 12h7.1m-9.22-.92-5.02-5.02m6.86 6.86 5.02 5.02m-5.02-6.86 5.02-5.02m-6.86 6.86-5.02 5.02"
        strokeWidth="1.1"
      />
    </>
  ),
  moto: (
    <>
      <path
        fill="currentColor"
        stroke="none"
        fillRule="evenodd"
        d="M12 1.5a10.5 10.5 0 1 1 0 21 10.5 10.5 0 0 1 0-21Zm0 2.3a8.2 8.2 0 1 0 0 16.4 8.2 8.2 0 0 0 0-16.4Z"
      />
      <circle cx="12" cy="12" r="1.8" strokeWidth="1.5" />
      <path
        d="M12 10.2V4.4m1.71 7.04 5.52-1.8m-6.17 3.82 3.41 4.69m-5.53-4.69-3.41 4.69m2.76-6.71-5.52-1.8"
        strokeWidth="1.6"
      />
    </>
  ),
  auto: (
    <>
      <mask id="maza-auto-surco">
        <rect width="24" height="24" fill="#fff" />
        <circle cx="12" cy="12" r="8.5" fill="none" stroke="#000" strokeWidth=".8" />
      </mask>
      <path
        mask="url(#maza-auto-surco)"
        fill="currentColor"
        stroke="none"
        fillRule="evenodd"
        d="M12 1.2a10.8 10.8 0 1 1 0 21.6 10.8 10.8 0 0 1 0-21.6Zm0 5.2a5.6 5.6 0 1 0 0 11.2 5.6 5.6 0 0 0 0-11.2Z"
      />
      <circle cx="12" cy="12" r="1.5" strokeWidth="1.4" />
      <path d="M12 10.5V6.9m1.43 4.64 3.42-1.11m-3.97 2.78 2.11 2.9m-3.87-2.9-2.11 2.9m1.56-4.57-3.42-1.11" />
    </>
  ),
};

export function RubroIcono({ rubro, className = "h-5 w-5" }: { rubro: Rubro; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {RUEDAS[rubro]}
    </svg>
  );
}
