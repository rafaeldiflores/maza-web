import type { Metadata } from "next";
import { SitioHeader } from "@/components/sitio/sitio-header";
import { SitioFooter } from "@/components/sitio/sitio-footer";
import { CabeceraPagina } from "@/components/sitio/cabecera-pagina";
import { CierreCuenta } from "@/components/sitio/cierre-cuenta";
import { Features } from "@/components/features";
import { Assistant } from "@/components/assistant";
import { HybridPlatform } from "@/components/hybrid-platform";

export const metadata: Metadata = {
  title: "Funciones — MAZA",
  description:
    "Link de seguimiento, presupuestos con aprobación online, cola de trabajo, inventario, caja, equipo y un asistente con IA que conoce tu taller.",
  alternates: { canonical: "/funciones" },
};

/** Las secciones de producto de la landing, ordenadas como página de referencia. */
export default function Funciones() {
  return (
    <>
      <SitioHeader activa="/funciones" />
      <main className="flex-1">
        <CabeceraPagina rotulo="Funciones" titulo="Todo lo que hace MAZA por tu taller">
          De la recepción a la entrega: lo que ve tu cliente, lo que ordena tu taller por dentro
          y el asistente que conoce tus datos.
        </CabeceraPagina>
        <Features />
        <Assistant />
        <HybridPlatform />
        <CierreCuenta />
      </main>
      <SitioFooter />
    </>
  );
}
