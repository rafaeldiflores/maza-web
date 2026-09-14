export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="MAZA"
    >
      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="7" />
      <circle cx="50" cy="50" r="39" fill="none" stroke="currentColor" strokeWidth="2" />
      <line x1="50" y1="50" x2="50.00" y2="11.00" stroke="currentColor" strokeWidth="1.6" />
      <line x1="50" y1="50" x2="69.50" y2="16.73" stroke="currentColor" strokeWidth="1.6" />
      <line x1="50" y1="50" x2="83.77" y2="30.50" stroke="currentColor" strokeWidth="1.6" />
      <line x1="50" y1="50" x2="89.00" y2="50.00" stroke="currentColor" strokeWidth="1.6" />
      <line x1="50" y1="50" x2="83.77" y2="69.50" stroke="currentColor" strokeWidth="1.6" />
      <line x1="50" y1="50" x2="69.50" y2="83.27" stroke="currentColor" strokeWidth="1.6" />
      <line x1="50" y1="50" x2="50.00" y2="89.00" stroke="currentColor" strokeWidth="1.6" />
      <line x1="50" y1="50" x2="30.50" y2="83.27" stroke="currentColor" strokeWidth="1.6" />
      <line x1="50" y1="50" x2="16.23" y2="69.50" stroke="currentColor" strokeWidth="1.6" />
      <line x1="50" y1="50" x2="11.00" y2="50.00" stroke="currentColor" strokeWidth="1.6" />
      <line x1="50" y1="50" x2="16.23" y2="30.50" stroke="currentColor" strokeWidth="1.6" />
      <line x1="50" y1="50" x2="30.50" y2="16.73" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="50" cy="50" r="6" fill="currentColor" />
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
