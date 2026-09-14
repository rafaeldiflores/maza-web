export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="MAZA"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="50" cy="50" r="41" strokeWidth="5.5" />
      <circle cx="50" cy="50" r="35" strokeWidth="1.6" opacity="0.4" />
      <g strokeWidth="2.6" strokeLinecap="round">
        <line x1="50" y1="15" x2="50" y2="50" />
        <line x1="74.75" y1="25.25" x2="50" y2="50" />
        <line x1="85" y1="50" x2="50" y2="50" />
        <line x1="74.75" y1="74.75" x2="50" y2="50" />
        <line x1="50" y1="85" x2="50" y2="50" />
        <line x1="25.25" y1="74.75" x2="50" y2="50" />
        <line x1="15" y1="50" x2="50" y2="50" />
        <line x1="25.25" y1="25.25" x2="50" y2="50" />
      </g>
      <circle cx="50" cy="50" r="16.5" strokeWidth="3.5" />
      <circle cx="50" cy="50" r="8" strokeWidth="3" />
      <circle cx="50" cy="37.2" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="62.8" cy="50" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="50" cy="62.8" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="37.2" cy="50" r="1.3" fill="currentColor" stroke="none" />
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
