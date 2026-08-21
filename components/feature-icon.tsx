import type { IconName } from "@/lib/site";

const paths: Record<IconName, React.ReactNode> = {
  rubro: (
    <>
      <path d="M9 3h6l1.5 5.5a6.5 6.5 0 1 1-9 0L9 3Z" />
      <path d="M9.5 10.5h5" />
    </>
  ),
  cola: (
    <>
      <rect x="3.5" y="4" width="17" height="16" rx="2" />
      <path d="M3.5 9h17" />
      <path d="M7 13h4M7 16.5h7" />
    </>
  ),
  seguimiento: (
    <>
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  presupuesto: (
    <>
      <path d="M6 3h9l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M14.5 3v4.5H19" />
      <path d="m9 15 2 2 4-4.5" />
    </>
  ),
  qr: (
    <>
      <rect x="3.5" y="3.5" width="6.5" height="6.5" rx="1" />
      <rect x="14" y="3.5" width="6.5" height="6.5" rx="1" />
      <rect x="3.5" y="14" width="6.5" height="6.5" rx="1" />
      <path d="M14 14h3v3h-3zM19.5 14v3M14 19.5h3M17.5 19.5h2" />
    </>
  ),
  inventario: (
    <>
      <path d="M3.5 7.5 12 3l8.5 4.5L12 12 3.5 7.5Z" />
      <path d="M3.5 7.5V16L12 20.5 20.5 16V7.5" />
      <path d="M12 12v8.5" />
    </>
  ),
  ia: (
    <>
      <rect x="5" y="7" width="14" height="11" rx="2.5" />
      <path d="M12 7V4M9.5 4h5" />
      <circle cx="9.5" cy="12.5" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="12.5" r="1.2" fill="currentColor" stroke="none" />
      <path d="M9 16h6" />
    </>
  ),
  domicilio: (
    <>
      <path d="M3.5 16.5V6.5A1 1 0 0 1 4.5 5.5h8.5v11" />
      <path d="M13 9.5h3.7L20.5 13v3.5h-2" />
      <circle cx="7.5" cy="18" r="1.8" />
      <circle cx="16.5" cy="18" r="1.8" />
    </>
  ),
  balances: (
    <>
      <path d="M4 20V10M10 20V4M16 20v-7M22 20v-4" transform="translate(-1)" />
    </>
  ),
  equipo: (
    <>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9.5" r="2.3" />
      <path d="M3.5 20v-1.5A4.5 4.5 0 0 1 8 14h2a4.5 4.5 0 0 1 4.5 4.5V20" />
      <path d="M15.2 14.3A3.8 3.8 0 0 1 20.5 18v2" />
    </>
  ),
  exportar: (
    <>
      <path d="M12 3v11.5" />
      <path d="m7.5 10 4.5 4.5L16.5 10" />
      <path d="M4.5 17v2.5a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V17" />
    </>
  ),
};

export function FeatureIcon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
