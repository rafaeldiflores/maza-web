import Link from "next/link";
import { Logo } from "./logo";
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, WA_MESSAGES, waLink } from "@/lib/site";

export function Footer() {
  return (
    <footer id="pie" className="border-t border-border-soft px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-3">
          <Logo />
          <p className="max-w-[38ch] text-sm leading-relaxed text-ink-faint">
            Gestión inteligente para talleres multirubro.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <a
            href={waLink(WA_MESSAGES.general)}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-ink-muted hover:text-ink"
          >
            WhatsApp ({CONTACT_PHONE_DISPLAY})
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-semibold text-ink-muted hover:text-ink"
          >
            {CONTACT_EMAIL}
          </a>
          <Link
            href="/privacidad"
            className="font-semibold text-ink-muted hover:text-ink"
          >
            Política de privacidad
          </Link>
          <Link
            href="/terminos"
            className="font-semibold text-ink-muted hover:text-ink"
          >
            Términos y condiciones
          </Link>
          <a
            href="https://app.mazataller.com/eliminar-cuenta"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-ink-muted hover:text-ink"
          >
            Eliminar cuenta
          </a>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-6xl text-xs text-ink-faint">
        MAZA © {new Date().getFullYear()} · Todos los derechos reservados
      </p>
    </footer>
  );
}
