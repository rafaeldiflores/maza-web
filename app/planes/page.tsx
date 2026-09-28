import type { Metadata } from "next";
import { SitioHeader } from "@/components/sitio/sitio-header";
import { SitioFooter } from "@/components/sitio/sitio-footer";
import { CabeceraPagina } from "@/components/sitio/cabecera-pagina";
import { CierreCuenta } from "@/components/sitio/cierre-cuenta";
import { Pricing } from "@/components/pricing";
import { Faq } from "@/components/faq";
import { TRIAL_DIAS, URL_REGISTRO } from "@/lib/site";

export const metadata: Metadata = {
  title: "Planes y precios — MAZA",
  description: `Taller Solo, Taller Pro y Empresa. Empieza con ${TRIAL_DIAS} días gratis, sin tarjeta.`,
  alternates: { canonical: "/planes" },
};

/**
 * La tabla de la landing (fuente: PLANS en lib/site.ts ← docs/planes-y-precios.md)
 * con el camino directo arriba: la prueba se activa creando la cuenta, y el
 * plan de pago se contrata dentro de la app. Los botones de cada plan siguen
 * abriendo WhatsApp para quien prefiere conversarlo.
 */
export default function Planes() {
  return (
    <>
      <SitioHeader activa="/planes" />
      <main className="flex-1">
        <CabeceraPagina rotulo="Planes y precios" titulo="Paga por las personas que trabajan, no por las órdenes">
          <p>
            Todos los planes incluyen la app y la web, el link de seguimiento y el asistente con IA.
            Empiezas con {TRIAL_DIAS} días gratis y eliges plan cuando quieras, desde la app.
          </p>
          <a
            href={URL_REGISTRO}
            className="mt-6 inline-flex h-12 items-center bg-value px-6 text-base font-bold text-splash-bg"
          >
            Crear cuenta y probar gratis
          </a>
        </CabeceraPagina>
        <Pricing />
        <Faq />
        <CierreCuenta />
      </main>
      <SitioFooter />
    </>
  );
}
