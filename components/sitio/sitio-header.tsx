import Link from "next/link";
import { Logo } from "../logo";
import { NAV_SITIO, URL_ENTRAR, URL_REGISTRO } from "@/lib/site";

/**
 * Cabecera del sitio oficial. A diferencia de la de la landing (anclas dentro
 * de una sola página y "Probar gratis" por WhatsApp), esta navega entre
 * páginas y la acción principal es crear la cuenta: quien llega acá busca
 * MAZA, no un anuncio.
 *
 * `activa` es la ruta de la página actual: el sitio es estático y la marca se
 * decide al compilar, sin JavaScript en el cliente.
 */
export function SitioHeader({ activa }: { activa?: string }) {
  return (
    <header className="vidrio-cabecera sticky top-0 z-40 border-b border-border-soft">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-5 py-3 sm:px-8">
        <Link href="/" className="shrink-0" aria-label="MAZA, inicio">
          <Logo />
        </Link>

        <nav className="hidden flex-1 items-center gap-7 md:flex" aria-label="Principal">
          {NAV_SITIO.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={activa === l.href ? "page" : undefined}
              className={`border-b-2 py-1 text-sm font-semibold transition-colors ${
                activa === l.href
                  ? "border-ink text-ink"
                  : "border-transparent text-ink-muted hover:text-ink"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <a
            href={URL_ENTRAR}
            data-cta="sitio-entrar"
            className="inline-flex h-10 items-center border border-border-strong px-4 text-sm font-bold text-ink transition-colors hover:bg-surface-alt"
          >
            Entrar
          </a>
          <a
            href={URL_REGISTRO}
            data-cta="sitio-registro"
            className="hidden h-10 items-center bg-value px-4 text-sm font-bold text-splash-bg sm:inline-flex"
          >
            Crear cuenta
          </a>

          <details className="relative md:hidden">
            <summary
              className="grid h-10 w-10 cursor-pointer list-none place-items-center border border-border-strong text-ink [&::-webkit-details-marker]:hidden"
              aria-label="Abrir menú"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </summary>
            <div className="caja absolute right-0 top-12 flex w-60 flex-col">
              {NAV_SITIO.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`border-b border-neutral-track px-4 py-3 text-sm font-semibold ${
                    activa === l.href ? "text-ink" : "text-ink-muted"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <a href={URL_REGISTRO} className="bg-value px-4 py-3 text-center text-sm font-bold text-splash-bg">
                Crear cuenta gratis
              </a>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
