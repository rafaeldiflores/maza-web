export interface AndroidFrameProps {
  className?: string;
  children?: React.ReactNode;
  /** Relación de aspecto para la pantalla. Por defecto 'aspect-[9/19.5]'. */
  aspect?: string;
}

export function AndroidFrame({
  className,
  children,
  aspect = "aspect-[9/19.5]",
}: AndroidFrameProps) {
  return (
    <div
      className={`group relative mx-auto w-full max-w-[270px] sm:max-w-[285px] transition-transform duration-300 ease-out hover:-translate-y-1 ${
        className ?? ""
      }`}
    >
      {/* ─── Botones físicos en el canto derecho del chasis Android ─── */}
      <div
        className="pointer-events-none absolute -right-[3.5px] top-24 h-9 w-[3.5px] rounded-r-[2px] bg-neutral-600/90 shadow-sm dark:bg-neutral-500"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-[3.5px] top-38 h-18 w-[3.5px] rounded-r-[2px] bg-neutral-600/90 shadow-sm dark:bg-neutral-500"
        aria-hidden="true"
      />

      {/* ─── Chasis exterior del dispositivo Android (Titanio / Grafito) ─── */}
      <div className="relative rounded-[42px] border-[2.5px] border-neutral-700/80 bg-gradient-to-b from-[#25272e] via-[#141518] to-[#1c1e24] p-[9px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.38),0_12px_24px_-8px_rgba(0,0,0,0.22)] ring-1 ring-white/15 sm:rounded-[46px] sm:p-[10px] dark:border-neutral-800 dark:from-[#2e3138] dark:via-[#101114] dark:to-[#1a1c21] dark:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.85)] dark:ring-white/10">
        {/* Ranura del parlante superior / auricular en el bisel */}
        <div
          className="pointer-events-none absolute left-1/2 top-1.5 h-[3px] w-12 -translate-x-1/2 rounded-full bg-neutral-700/90 dark:bg-neutral-600"
          aria-hidden="true"
        />

        {/* ─── Pantalla interior con esquinas curvas continuas ─── */}
        <div
          className={`relative ${aspect} w-full overflow-hidden rounded-[32px] border border-black/40 bg-surface shadow-inner sm:rounded-[36px]`}
        >

          {/* Reflejo de cristal 3D sutil sobre el vidrio de la pantalla */}
          <div
            className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.07]"
            aria-hidden="true"
          />

          {/* Barra inferior de gestos Android (Pill de navegación) */}
          <div
            className="pointer-events-none absolute bottom-1.5 left-1/2 z-30 h-1 w-24 -translate-x-1/2 rounded-full bg-neutral-800/40 backdrop-blur-[1px] dark:bg-white/40"
            aria-hidden="true"
          />

          {/* Contenido dentro de la pantalla */}
          <div className="relative h-full w-full">{children}</div>
        </div>
      </div>
    </div>
  );
}
