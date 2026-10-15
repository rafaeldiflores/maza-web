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

const SECCIONES_RAPIDAS = [
  { href: "#recepcion", label: "01 Recepción 30s" },
  { href: "#presupuesto", label: "02 Link y Aprobación" },
  { href: "#ia", label: "03 Asistente IA" },
  { href: "#meson", label: "04 Mostrador PC" },
  { href: "#herramientas", label: "10 Herramientas" },
];

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

        {/* Barra de navegación rápida SOLO en móvil (< lg) */}
        <div className="sticky top-16 z-30 -mx-5 flex gap-2 overflow-x-auto border-b border-[#26262C] bg-[#0A0A0A]/95 px-5 py-2.5 backdrop-blur [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:hidden">
          {SECCIONES_RAPIDAS.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className="shrink-0 rounded-xs border border-[#26262C] bg-[#141417] px-3 py-1 font-mono text-[11px] font-semibold text-[#F2F2F5] transition-colors hover:border-[#FF9900] hover:text-[#FF9900]"
            >
              {s.label}
            </a>
          ))}
        </div>

        <Features />
        <Assistant />
        <HybridPlatform />
        <CierreCuenta />
      </main>
      <SitioFooter />
    </>
  );
}
