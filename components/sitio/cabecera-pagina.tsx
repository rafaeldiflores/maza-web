import type { ReactNode } from "react";

/**
 * Apertura de cada página interior del sitio: rótulo de sección en mono, el
 * título en Bebas y una bajada. Mismo patrón en todas, así el sitio se lee
 * como un solo documento y no como páginas sueltas.
 */
export function CabeceraPagina({
  rotulo,
  titulo,
  children,
}: {
  rotulo: string;
  titulo: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-border-strong px-5 pb-10 pt-12 sm:px-8 sm:pb-14 sm:pt-20">
      <div className="mx-auto max-w-6xl">
        <p className="titulo-seccion mb-6 max-w-fit pr-6">{rotulo}</p>
        <h1 className="max-w-[18ch] font-display text-[clamp(2.75rem,7vw,4.75rem)] leading-[0.95] tracking-[0.01em] text-ink text-balance">
          {titulo}
        </h1>
        {children && (
          <div className="mt-5 max-w-[62ch] text-lg leading-relaxed text-ink-muted">{children}</div>
        )}
      </div>
    </section>
  );
}
