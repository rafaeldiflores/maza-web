import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { SitioHeader } from "@/components/sitio/sitio-header";
import { SitioFooter } from "@/components/sitio/sitio-footer";
import { ComputerFrame } from "@/components/computer-frame";
import { PhoneFrame } from "@/components/phone-frame";
import { FeatureIcon } from "@/components/feature-icon";
import { StructuredData } from "@/components/structured-data";
import { InscripcionBeta } from "@/components/sitio/inscripcion-beta";
import { CierreCuenta } from "@/components/sitio/cierre-cuenta";
import { ProntoGooglePlay } from "@/components/sitio/pronto-google-play";
import { CelularConAsistente, MesonConAsistente } from "@/components/sitio/meson-con-asistente";
import { OfertaFranja } from "@/components/oferta-franja";
import { TecnologiasBar } from "@/components/sitio/tecnologias-bar";
import { IngenieriaTaller } from "@/components/sitio/ingenieria-taller";
import {
  type IconName,
  URL_ENTRAR,
  clp,
  precioDesde,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "MAZA — Gestión para talleres multirubro",
  alternates: { canonical: "/" },
};

const PASOS = [
  {
    n: "01",
    tiempo: "30 SEGUNDOS",
    titulo: "Recibes con fotos y checklist",
    texto: "Patente o QR, checklist de ingreso y fotos de evidencia. La orden entra directo a la cola.",
    imagenMovil: "/screenshots/orden-auto.png",
    badgeResultado: "⚡ Orden e inspección listas",
    badgeColor: "text-[#FF9900]",
  },
  {
    n: "02",
    tiempo: "1 TOQUE",
    titulo: "Ven las fotos y aprueban",
    texto: "Tu cliente revisa las fotos de lo encontrado en su link y elige la opción de presupuesto sin llamarte.",
    imagenMovil: "/screenshots/evidencia-link.png",
    badgeResultado: "✓ Aprobado desde el link",
    badgeColor: "text-[#22A559]",
  },
  {
    n: "03",
    tiempo: "AL CENTAVO",
    titulo: "Entregas y cuadras caja",
    texto: "Envías comprobante por WhatsApp, PDF o ticket térmico. Efectivo en cajón, transferencias y stock cuadran solos.",
    imagenMovil: "/screenshots/entrega-comprobante.png",
    badgeResultado: "● Comprobante y caja al día",
    badgeColor: "text-[#FF9900]",
  },
];

const SUPERFICIES = [
  {
    rotulo: "App Android · En el piso",
    titulo: "El celular ejecuta",
    sub: "Rápido y con una mano al lado del vehículo.",
    items: [
      "Recepción en 30 seg con fotos y QR",
      "Avance de estados en 1 toque",
      "Envío de presupuesto por WhatsApp",
      "Asistente IA con datos de tu taller",
    ],
  },
  {
    rotulo: "Web · En el mostrador",
    titulo: "El computador administra",
    sub: "Entras escaneando un QR, sin contraseñas.",
    items: [
      "Cierre de caja, abonos y balances",
      "Venta rápida de mostrador",
      "Inventario y alertas de stock bajo",
      "Catálogo de servicios y precios",
    ],
  },
];

const EQUIPAMIENTO_SERIE: { icon: IconName; titulo: string; resumen: string }[] = [
  {
    icon: "seguimiento",
    titulo: "Seguimiento en vivo",
    resumen: "Link para tu cliente sin instalar nada.",
  },
  {
    icon: "presupuesto",
    titulo: "Presupuestos online",
    resumen: "Aprueban total o parcial desde el celular.",
  },
  {
    icon: "equipo",
    titulo: "Dueño y mecánicos",
    resumen: "Cada uno con su acceso y carga asignada.",
  },
  {
    icon: "inventario",
    titulo: "Stock automático",
    resumen: "Se descuenta solo en cada reparación.",
  },
  {
    icon: "rubro",
    titulo: "Multirubro real",
    resumen: "Control por kilometraje o por calendario.",
  },
  {
    icon: "exportar",
    titulo: "Tus datos en Excel",
    resumen: "Descarga completa cuando quieras en 1 clic.",
  },
];

export default function Inicio() {
  return (
    <>
      <StructuredData />
      <OfertaFranja />
      <SitioHeader activa="/" />
      <main className="flex-1">
        {/* ─── 1. HERO: Gancho en 5 segundos ────────────────────────── */}
        <section className="px-5 pb-12 pt-6 sm:px-8 sm:pb-20 sm:pt-10">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="flex flex-col items-start gap-4 lg:col-span-5">
              <p className="rotulo">SISTEMA MULTIRUBRO EN OPERACIÓN · CUPOS TALLER FUNDADOR</p>
              <h1 className="font-display text-[clamp(2.75rem,6vw,4.1rem)] leading-[0.92] tracking-[0.01em] text-ink text-balance">
                TU TALLER EN ORDEN. SIN CUADERNO.
              </h1>
              <p className="max-w-[44ch] text-base sm:text-lg leading-snug text-ink-muted">
                Recibe vehículos en 30 segundos, envía presupuestos que aprueban con un toque por WhatsApp y cuadra tu caja al centavo.
              </p>

              {/* 3 Píldoras escaneables en 2 segundos (reemplaza párrafos densos) */}
              <ul className="flex w-full flex-col gap-1.5 border-l-2 border-[#FF9900] bg-[#141417] px-3.5 py-2.5 rounded-r-sm text-xs text-[#F2F2F5]">
                <li className="flex items-center gap-2">
                  <span className="font-mono font-bold text-[#FF9900]">⚡ Llave en mano:</span>
                  <span className="text-[#9A9AA3]">Mandas 1 foto y cargamos tu lista de precios.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-mono font-bold text-[#22A559]">✓ Cero llamadas:</span>
                  <span className="text-[#9A9AA3]">Tu cliente sigue y aprueba desde su celular.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-mono font-bold text-[#F2F2F5]">● 1 año en taller:</span>
                  <span className="text-[#9A9AA3]">Probado en todo el proceso operativo real.</span>
                </li>
              </ul>

              <InscripcionBeta colapsableEnMovil />

              <div className="mt-1 flex w-full flex-wrap items-center justify-between gap-3 pt-2 border-t border-[var(--line)]">
                <ProntoGooglePlay />
                <a
                  href={URL_ENTRAR}
                  data-cta="inicio-entrar"
                  className="inline-flex min-h-10 items-center text-xs sm:text-sm font-semibold text-ink-muted hover:text-ink hover:underline"
                >
                  ¿Ya usas MAZA? Entrar →
                </a>
              </div>
            </div>

            <div className="relative lg:col-span-7">
              <div className="hidden md:block">
                <ComputerFrame>
                  <MesonConAsistente />
                </ComputerFrame>
                <div className="absolute -bottom-8 -left-2 w-[150px] lg:-left-10 lg:w-[170px]">
                  <PhoneFrame file="screenshots/hero.png" alt="La app de MAZA en el celular del taller" />
                </div>
              </div>
              <PhoneFrame className="md:hidden">
                <CelularConAsistente />
              </PhoneFrame>
            </div>
          </div>
        </section>

        {/* ─── 2. RESPALDO TECNOLÓGICO ──────────────────────────────── */}
        <TecnologiasBar />

        {/* ─── 3. FLUJO EN 3 PASOS (Visual, directo y sin relleno) ──── */}
        <section className="border-b border-border-strong bg-surface px-5 py-14 sm:px-8 sm:py-18">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="rotulo text-[#FF9900]">EL FLUJO COMPLETO EN 3 PASOS</p>
                <h2 className="mt-1 font-display text-[clamp(2rem,4.5vw,3rem)] leading-none tracking-[0.01em] text-ink">
                  CÓMO TRABAJA TU TALLER CON MAZA
                </h2>
              </div>
              <p className="font-mono text-xs text-ink-muted">
                Sin planillas · Sin perseguir clientes por teléfono
              </p>
            </div>

            <ol className="grid grid-cols-1 border border-border-strong sm:grid-cols-3">
              {PASOS.map((p, i) => (
                <li
                  key={p.n}
                  className={`flex flex-col gap-2.5 p-5 sm:p-6 ${
                    i > 0 ? "border-t border-border-strong sm:border-l sm:border-t-0" : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="cifra text-3xl text-value-shade">{p.n}</span>
                    <span className="rounded-xs border border-border-strong bg-app-bg px-2 py-0.5 font-mono text-[10px] font-bold text-ink-muted">
                      {p.tiempo}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl leading-none tracking-[0.01em] text-ink">
                    {p.titulo}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-muted">{p.texto}</p>

                  {/* Evidencia visual real del paso */}
                  <div className="mt-auto pt-3">
                    <div className="overflow-hidden rounded-sm border border-[#26262C] bg-[#0A0A0A]">
                      <div className="flex items-center justify-between border-b border-[#26262C] bg-[#141417] px-3 py-1.5 font-mono text-[10px]">
                        <span className={`font-bold ${p.badgeColor}`}>
                          {p.badgeResultado}
                        </span>
                        <span className="text-[#9A9AA3]">Paso {p.n}</span>
                      </div>
                      <div className="flex justify-center bg-[#0E0E11] py-3 px-4">
                        <div className="w-[185px] max-h-56 overflow-hidden rounded-t-xl border border-[#26262C] bg-[#0A0A0A] shadow-md">
                          <Image
                            src={p.imagenMovil}
                            alt={p.titulo}
                            width={360}
                            height={780}
                            className="w-full object-cover object-top"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ─── 4. INGENIERÍA REAL (Diferenciador Anti-Improvisación) ── */}
        <IngenieriaTaller />

        {/* ─── 5. DOS PANTALLAS + EQUIPAMIENTO DE SERIE (Unificado) ─── */}
        <section className="px-5 py-14 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="rotulo text-[#FF9900]">SINCRONIZACIÓN EN TIEMPO REAL</p>
                <h2 className="mt-1 font-display text-[clamp(2.1rem,5vw,3.25rem)] leading-[0.96] tracking-[0.01em] text-ink">
                  LA APP EJECUTA. LA WEB ADMINISTRA.
                </h2>
              </div>
              <p className="max-w-[38ch] text-sm text-ink-muted">
                Escaneas un QR en el computador del mesón y trabajas con los mismos datos al instante.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {SUPERFICIES.map((s) => (
                <div key={s.rotulo} className="caja p-5 sm:p-6">
                  <p className="rotulo rotulo-sm">{s.rotulo}</p>
                  <h3 className="mt-1.5 font-display text-3xl leading-none tracking-[0.01em] text-ink">
                    {s.titulo}
                  </h3>
                  <p className="mt-1 text-xs text-ink-muted">{s.sub}</p>

                  {s.rotulo.includes("App") && (
                    <div className="mb-4 mt-3.5 overflow-hidden rounded-sm border border-[#26262C] bg-[#0A0A0A]">
                      <div className="flex items-center justify-between border-b border-[#26262C] bg-[#141417] px-3 py-1.5 font-mono text-[10px] text-[#9A9AA3]">
                        <span className="font-bold text-[#FF9900]">● Cola de trabajo en vivo (8 órdenes)</span>
                        <span className="text-[#F2F2F5]">App Android</span>
                      </div>
                      <div className="flex justify-center bg-[#0E0E11] py-3 px-4">
                        <div className="w-[185px] max-h-56 overflow-hidden rounded-t-xl border border-[#26262C] bg-[#0A0A0A] shadow-md">
                          <Image
                            src="/screenshots/cola-moto.png"
                            alt="Cola de trabajo real funcionando en el celular con estados y aprobación desde el link"
                            width={360}
                            height={780}
                            className="w-full object-cover object-top"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {s.rotulo.includes("Web") && (
                    <div className="mb-4 mt-3.5 overflow-hidden rounded-sm border border-[#26262C] bg-[#0A0A0A]">
                      <div className="flex items-center justify-between border-b border-[#26262C] bg-[#141417] px-3 py-1.5 font-mono text-[10px] text-[#9A9AA3]">
                        <div className="flex items-center gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-[#374151]" />
                          <span className="h-2 w-2 rounded-full bg-[#374151]" />
                          <span className="h-2 w-2 rounded-full bg-[#374151]" />
                          <span className="ml-1 text-[#F2F2F5]">https://mazataller.com/app</span>
                        </div>
                        <span className="font-bold text-[#22A559]">● En vivo</span>
                      </div>
                      <div className="bg-[#0E0E11] p-2">
                        <Image
                          src="/screenshots/mostrador-pc.png"
                          alt="Mostrador PC de MAZA con cola de trabajo en vivo"
                          width={700}
                          height={400}
                          className="w-full rounded-xs object-cover object-top"
                        />
                      </div>
                    </div>
                  )}

                  <ul className="mt-4 flex flex-col">
                    {s.items.map((it) => (
                      <li
                        key={it}
                        className="flex items-center gap-2.5 border-t border-neutral-track py-2 text-sm text-ink"
                      >
                        <span className="testigo text-ink" aria-hidden="true" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Matriz compacta de funciones (escaneable en segundos) */}
            <div className="mt-8">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-ink-muted">
                  INCLUIDO EN TU TALLER DESDE EL PRIMER DÍA
                </span>
                <Link href="/funciones" className="text-xs sm:text-sm font-bold text-[#FF9900] hover:underline">
                  Ver las 12 funciones →
                </Link>
              </div>
              <div className="grid grid-cols-2 border-l border-t border-border-strong sm:grid-cols-3 lg:grid-cols-6">
                {EQUIPAMIENTO_SERIE.map((f) => (
                  <div
                    key={f.icon}
                    className="flex flex-col gap-1.5 border-b border-r border-border-strong bg-surface p-3.5 sm:p-4"
                  >
                    <FeatureIcon name={f.icon} className="h-5 w-5 text-[#FF9900]" />
                    <h3 className="text-xs sm:text-sm font-bold leading-tight text-ink">{f.titulo}</h3>
                    <p className="text-[11px] leading-snug text-ink-muted">{f.resumen}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── 6. PRECIOS TRANSPARENTES Y AYUDA ────────────────────── */}
        <section className="px-5 pb-14 sm:px-8 sm:pb-20">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2">
            <Link href="/planes" className="caja group flex flex-col gap-2 p-5 sm:p-6 hover:border-ink">
              <p className="rotulo rotulo-sm">Planes transparentes · Sin amarres</p>
              <p className="text-ink-muted">
                Desde <span className="cifra text-3xl text-value-shade">{clp.format(precioDesde())}</span> / mes,
                IVA incluido
              </p>
              <p className="text-xs sm:text-sm text-ink-muted">
                Según el tamaño de tu equipo. Cancela cuando quieras en 1 clic.
              </p>
              <span className="mt-2 text-sm font-bold text-[#FF9900] group-hover:underline">
                Ver los 3 planes →
              </span>
            </Link>
            <Link href="/funciones" className="caja group flex flex-col gap-2 p-5 sm:p-6 hover:border-ink">
              <p className="rotulo rotulo-sm">Recorrido visual</p>
              <p className="font-display text-3xl leading-none tracking-[0.01em] text-ink">
                MIRA CADA PANTALLA POR DENTRO
              </p>
              <p className="text-xs sm:text-sm text-ink-muted">
                Revisa capturas reales de la cola, el presupuesto online, el asistente IA y la caja.
              </p>
              <span className="mt-2 text-sm font-bold text-ink group-hover:underline">
                Explorar pantallas y funciones →
              </span>
            </Link>
          </div>
        </section>

        <CierreCuenta />
      </main>
      <SitioFooter />
    </>
  );
}
