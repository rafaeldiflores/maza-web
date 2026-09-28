import { TRIAL_DIAS, URL_ENTRAR, URL_REGISTRO } from "@/lib/site";

/** Cierre de cada página del sitio: los dos caminos, crear cuenta o entrar. */
export function CierreCuenta({ titulo = "Empieza hoy con tu taller real." }: { titulo?: string }) {
  return (
    <section className="bg-splash-bg px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="max-w-[18ch] font-display text-[clamp(2.25rem,5vw,3.5rem)] leading-[0.98] tracking-[0.01em] text-splash-ink">
            {titulo}
          </h2>
          <p className="mt-3 font-mono text-xs text-splash-ink-faint">
            {TRIAL_DIAS} días gratis · Sin tarjeta · Te ayudamos a cargarlo
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={URL_REGISTRO} className="inline-flex h-12 items-center bg-value px-6 font-bold text-splash-bg">
            Crear cuenta gratis
          </a>
          <a href={URL_ENTRAR} className="inline-flex h-12 items-center border border-splash-border px-6 font-bold text-splash-ink">
            Entrar
          </a>
        </div>
      </div>
    </section>
  );
}
