import Image from "next/image";

export interface ComputerFrameProps {
  file?: string;
  alt?: string;
  className?: string;
  children?: React.ReactNode;
}

export function ComputerFrame({
  file = "screenshots/mostrador-pc.png",
  alt = "Mostrador PC de MAZA sincronizado en tiempo real",
  className,
  children,
}: ComputerFrameProps) {
  const ready = Boolean(file);

  return (
    <div className={`relative mx-auto w-full max-w-4xl ${className ?? ""}`}>
      {/* ─── Pantalla / Monitor de Escritorio ─── */}
      <div className="relative rounded-2xl border-[2.5px] border-neutral-700/80 bg-[#16171d] p-2 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.45)] ring-1 ring-white/10 sm:p-2.5 dark:border-neutral-800 dark:bg-[#0e0f13] dark:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.85)]">
        {/* Barra superior estilo ventana de ordenador / navegador */}
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2 border-b border-neutral-800/80 px-2 pb-2 pt-1 sm:px-3 sm:pb-2.5">
          {/* Botones de control de ventana (Rojo, Amarillo, Verde) */}
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-3 w-3 rounded-full border border-[#e0443e]/70 bg-[#ff5f56]" />
            <span className="h-3 w-3 rounded-full border border-[#dea123]/70 bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full border border-[#1aab29]/70 bg-[#27c93f]" />
          </div>

          {/* Pestaña del navegador (pantalla mediana y grande) */}
          <div className="hidden items-center gap-2 rounded-t-md border-x border-t-2 border-border-strong border-t-value bg-surface px-3 py-1 text-[11px] font-semibold text-ink sm:flex">
            <span className="grid h-3.5 w-3.5 place-items-center bg-ink text-[8px] font-bold text-app-bg">
              M
            </span>
            <span>MAZA · Mostrador PC</span>
            <span className="ml-1 text-[10px] text-ink-ghost">×</span>
          </div>

          {/* Barra de dirección URL con candado y estado en vivo */}
          <div className="flex min-w-[200px] flex-1 items-center justify-between gap-2 rounded border border-neutral-700/60 bg-neutral-900/90 px-2.5 py-1 text-xs sm:max-w-md">
            <div className="flex items-center gap-1.5 truncate text-neutral-300">
              <svg
                viewBox="0 0 24 24"
                className="h-3 w-3 shrink-0 text-success"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span className="truncate font-mono text-[11px] text-neutral-300">
                https://<strong className="text-white">mazataller.com</strong>
                /app
              </span>
            </div>

            <span className="rotulo flex shrink-0 items-center gap-1.5 text-[9px] text-value-shade">
              <span className="h-2 w-2 animate-pulse rounded-full bg-value" />
              ● En vivo
            </span>
          </div>
        </div>

        {/* Superficie de la pantalla (Display 16:10) */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-black/50 bg-surface shadow-inner">
          {/* Reflejo de cristal 3D sutil */}
          <div
            className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-tr from-transparent via-white/[0.015] to-white/[0.05]"
            aria-hidden="true"
          />

          {children ? (
            <div className="relative h-full w-full">{children}</div>
          ) : ready && file ? (
            <Image
              src={`/${file}`}
              alt={alt}
              fill
              sizes="(max-width: 1024px) 100vw, 850px"
              className="object-cover object-top"
              priority={false}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center p-6 text-center text-ink-muted">
              <p className="text-sm">Vista de Mostrador PC</p>
            </div>
          )}
        </div>

        {/* Bisel inferior del monitor con micro LED de encendido */}
        <div className="flex items-center justify-center pt-2 sm:pt-2.5">
          <span
            className="h-1 w-1 rounded-full bg-neutral-600 dark:bg-neutral-500"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* ─── Soporte y Base del Monitor (Pie de pantalla) ─── */}
      <div className="pointer-events-none hidden sm:block" aria-hidden="true">
        {/* Brazo / Cuello vertical del monitor */}
        <div className="mx-auto h-5 w-24 border-x border-neutral-700/60 bg-gradient-to-b from-[#25272e] to-[#16171b] shadow-inner sm:h-6 sm:w-28" />
        {/* Base metálica horizontal */}
        <div className="mx-auto h-2.5 w-52 rounded-full border-t border-white/20 bg-gradient-to-r from-neutral-700 via-neutral-500 to-neutral-700 shadow-lg sm:w-64" />
        {/* Sombra ambiental proyectada sobre el escritorio */}
        <div className="mx-auto -mt-1 h-3 w-64 rounded-full bg-black/25 blur-md sm:w-76 dark:bg-black/60" />
      </div>
    </div>
  );
}
