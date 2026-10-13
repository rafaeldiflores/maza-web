import Link from "next/link";
import { Logo } from "../logo";
import { ProntoGooglePlay } from "./pronto-google-play";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  URL_ENTRAR,
  URL_REGISTRO,
  WA_MESSAGES,
  waLink,
} from "@/lib/site";

// En el celular cada enlace mide 44 px de alto para tocarlo con el dedo.
const enlace = "inline-flex min-h-11 items-center self-start text-sm text-ink-muted hover:text-ink sm:min-h-0";

/** Pie del sitio oficial: el mapa del sitio en columnas, como una placa de datos. */
export function SitioFooter() {
  return (
    <footer className="border-t border-border-strong bg-surface px-5 py-12 sm:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 sm:grid-cols-5">
        <div className="col-span-2 flex flex-col gap-3">
          <Logo />
          <p className="max-w-[34ch] text-sm leading-relaxed text-ink-faint">
            Gestión para talleres multirubro. La app ejecuta en el taller;
            la web administra desde el mesón.
          </p>
          <ProntoGooglePlay className="self-start" />
        </div>

        <div className="flex flex-col sm:gap-2">
          <p className="rotulo rotulo-sm mb-1">Producto</p>
          <Link href="/funciones" className={enlace}>Funciones</Link>
          <Link href="/planes" className={enlace}>Planes y precios</Link>
          <Link href="/ayuda" className={enlace}>Ayuda</Link>
        </div>

        <div className="flex flex-col sm:gap-2">
          <p className="rotulo rotulo-sm mb-1">Cuenta</p>
          <a href={URL_ENTRAR} className={enlace}>Entrar</a>
          <a href={URL_REGISTRO} className={enlace}>Crear cuenta</a>
          <a href="/eliminar-cuenta" className={enlace}>Eliminar cuenta</a>
        </div>

        <div className="flex flex-col sm:gap-2">
          <p className="rotulo rotulo-sm mb-1">MAZA</p>
          <Link href="/nosotros" className={enlace}>Nosotros</Link>
          <a href={waLink(WA_MESSAGES.general)} target="_blank" rel="noreferrer" className={enlace}>
            WhatsApp {CONTACT_PHONE_DISPLAY}
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} className={`${enlace} break-all`}>{CONTACT_EMAIL}</a>
          <Link href="/privacidad" className={enlace}>Privacidad</Link>
          <Link href="/terminos" className={enlace}>Términos</Link>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-6xl border-t border-neutral-track pt-4 pb-16 font-mono text-xs text-ink-faint sm:pb-0">
        MAZA © {new Date().getFullYear()} · Hecho en Chile, desde un taller real
      </p>
    </footer>
  );
}
