export interface AndroidFrameProps {
  className?: string;
  children?: React.ReactNode;
  /** Relación de aspecto para la pantalla. Por defecto 'aspect-[9/19.5]'. */
  aspect?: string;
}

/**
 * Marco de un Galaxy S25 Ultra: canto plano de titanio, esquinas apenas
 * redondeadas y bisel mínimo, sin cámara para no tapar la captura. El canto es un
 * degradado fino (no un chasis grueso) para que la captura sea la protagonista.
 */
export function AndroidFrame({
  className,
  children,
  aspect = "aspect-[9/19.5]",
}: AndroidFrameProps) {
  return (
    <div className={`relative mx-auto w-full max-w-[270px] sm:max-w-[285px] ${className ?? ""}`}>
      {/* Botones del canto derecho: volumen arriba, encendido debajo */}
      <div
        className="pointer-events-none absolute -right-[2px] top-[17%] h-[11%] w-[2px] rounded-r-[1px] bg-gradient-to-b from-[#9a9ca1] to-[#6d7075]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-[2px] top-[31%] h-[6%] w-[2px] rounded-r-[1px] bg-gradient-to-b from-[#9a9ca1] to-[#6d7075]"
        aria-hidden="true"
      />

      {/* Canto de titanio */}
      <div className="rounded-[26px] bg-gradient-to-br from-[#b4b6ba] via-[#6f7277] to-[#a3a5aa] p-[2px] shadow-[0_24px_50px_-16px_rgba(0,0,0,0.45),0_8px_18px_-8px_rgba(0,0,0,0.25)] dark:from-[#7c7f85] dark:via-[#3d4045] dark:to-[#6a6d72] dark:shadow-[0_28px_60px_-16px_rgba(0,0,0,0.85)]">
        {/* Bisel negro mínimo */}
        <div className="rounded-[24px] bg-black p-[4px]">
          <div className={`relative ${aspect} w-full overflow-hidden rounded-[20px] bg-surface`}>
            {/* Reflejo sutil del vidrio plano */}
            <div
              className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-tr from-transparent via-transparent to-white/[0.05]"
              aria-hidden="true"
            />

            <div className="relative h-full w-full">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
