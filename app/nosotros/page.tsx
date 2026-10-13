import type { Metadata } from "next";
import { SitioHeader } from "@/components/sitio/sitio-header";
import { SitioFooter } from "@/components/sitio/sitio-footer";
import { CabeceraPagina } from "@/components/sitio/cabecera-pagina";
import { CierreCuenta } from "@/components/sitio/cierre-cuenta";
import { QuienEstaDetras } from "@/components/quien-esta-detras";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CREADOR,
  WA_MESSAGES,
  waLink,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Nosotros — MAZA",
  description: `MAZA nació en un taller real. Conoce a su fundador, ${CREADOR.nombre}, y cómo contactarnos por WhatsApp y correo.`,
  alternates: { canonical: "/nosotros" },
};

export default function Nosotros() {
  return (
    <>
      <SitioHeader activa="/nosotros" />
      <main className="flex-1">
        <CabeceraPagina rotulo="Nosotros" titulo="Hecho desde un taller real">
          MAZA nació en el mesón de {CREADOR.taller}, en {CREADOR.ciudad}: primero para ordenar
          un taller de verdad, después para los demás.
        </CabeceraPagina>

        <QuienEstaDetras />

        <section className="border-t border-border-strong px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="titulo-seccion mb-8 max-w-fit pr-6">Contacto</p>
            <dl className="caja grid grid-cols-1 sm:grid-cols-3">
              <div className="flex flex-col gap-2 p-6">
                <dt className="rotulo rotulo-sm">WhatsApp</dt>
                <dd>
                  <a
                    href={waLink(WA_MESSAGES.general)}
                    target="_blank"
                    rel="noreferrer"
                    className="cifra text-xl text-ink underline-offset-4 hover:underline"
                  >
                    {CONTACT_PHONE_DISPLAY}
                  </a>
                </dd>
                <dd className="text-sm text-ink-faint">Respuesta en el día, también para configurar tu catálogo.</dd>
              </div>
              <div className="flex flex-col gap-2 border-t border-border-strong p-6 sm:border-l sm:border-t-0">
                <dt className="rotulo rotulo-sm">Correo</dt>
                <dd>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="break-all text-lg font-semibold text-ink hover:underline">
                    {CONTACT_EMAIL}
                  </a>
                </dd>
              </div>
              <div className="flex flex-col gap-2 border-t border-border-strong p-6 sm:border-l sm:border-t-0">
                <dt className="rotulo rotulo-sm">Dónde</dt>
                <dd className="text-lg font-semibold text-ink">{CREADOR.ciudad}</dd>
                <dd className="text-sm text-ink-faint">Talleres de toda Latinoamérica.</dd>
              </div>
            </dl>
          </div>
        </section>

        <CierreCuenta />
      </main>
      <SitioFooter />
    </>
  );
}
