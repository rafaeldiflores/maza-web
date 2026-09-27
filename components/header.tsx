import Link from "next/link";
import { Logo } from "./logo";
import { mensajeCtaPrincipal, textoCtaPrincipal, waLink } from "@/lib/site";

const NAV_LINKS = [
  { href: "#funciones", label: "Funciones" },
  { href: "#asistente", label: "Asistente IA" },
  { href: "#planes", label: "Planes" },
  { href: "#preguntas", label: "Preguntas" },
];

export function Header() {
  return (
    <header className="vidrio-cabecera sticky top-0 z-40 border-b border-border-soft">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <Link href="/" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rotulo text-[11px] transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={waLink(mensajeCtaPrincipal())}
          target="_blank"
          rel="noreferrer"
          data-cta="header"
          className="hidden shrink-0 bg-value px-5 py-2.5 text-sm font-bold text-splash-bg sm:inline-flex sm:items-center"
        >
          Probar gratis
        </a>

        <details className="relative md:hidden">
          <summary
            className="grid h-11 w-11 cursor-pointer list-none place-items-center border border-border-strong text-ink [&::-webkit-details-marker]:hidden"
            aria-label="Abrir menú"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </summary>
          <div className="caja absolute right-0 top-12 flex w-56 flex-col">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="border-b border-neutral-track px-4 py-3 text-sm font-semibold text-ink-muted last:border-b-0 hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href={waLink(mensajeCtaPrincipal())}
              target="_blank"
              rel="noreferrer"
              data-cta="menu"
              className="bg-value px-4 py-3 text-center text-sm font-bold text-splash-bg"
            >
              {textoCtaPrincipal()}
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}
