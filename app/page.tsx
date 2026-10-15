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
import { SocialProof } from "@/components/social-proof";
import { TecnologiasBar } from "@/components/sitio/tecnologias-bar";
import { WaLink } from "@/components/wa-tracking";
import { waUrl } from "@/lib/marca";
import {
  FEATURES,
  URL_ENTRAR,
  clp,
  precioDesde,
} from "@/lib/site";

/**
 * Portada del sitio oficial. Mientras dure el programa de talleres fundadores,
 * lo primero es la invitación a inscribir el taller (llega al WhatsApp de MAZA).
 * No hay "crear cuenta" en el sitio: /registro sigue existiendo (sin indexar)
 * para quien reciba el link a mano.
 * "Entrar a mi taller" queda chico, para los talleres que ya usan MAZA.
 */
export const metadata: Metadata = {
  title: "MAZA — Gestión para talleres multirubro",
  alternates: { canonical: "/" },
};

const PASOS = [
  {
    n: "01",
    titulo: "Recibes",
    texto:
      "Ingresas el vehículo en el celular: cliente, fotos, inspección y servicios. La orden nace con su número y queda en la cola.",
    imagenMovil: "/screenshots/seguimiento.png",
    badgeResultado: "⚡ Ingreso en 30 seg con QR y fotos",
    badgeColor: "text-[#FF9900]",
  },
  {
    n: "02",
    titulo: "Informas",
    texto:
      "Tu cliente recibe un link por WhatsApp: ve cómo va su vehículo y aprueba el presupuesto con un toque. Sin llamadas.",
    imagenMovil: "/screenshots/presupuesto.png",
    badgeResultado: "✓ Aprobado online por el cliente",
    badgeColor: "text-[#22A559]",
  },
  {
    n: "03",
    titulo: "Entregas y cobras",
    texto:
      "Cierras la orden, cobras y la caja queda cuadrada. El historial del vehículo te espera en la próxima visita.",
    imagenMovil: "/screenshots/maza-agente-chat.png",
    badgeResultado: "● Caja cuadrada al instante",
    badgeColor: "text-[#FF9900]",
  },
];

const SUPERFICIES = [
  {
    rotulo: "App · en el taller",
    titulo: "El celular ejecuta",
    items: ["Recepción con fotos e inspección", "Avance de cada orden", "Entrega y cobro", "Asistente con IA"],
  },
  {
    rotulo: "Web · en el mesón",
    titulo: "El computador administra",
    items: ["Venta de mostrador", "Inventario y compras", "Balances y cierre de caja", "Catálogo de servicios"],
  },
];

export default function Inicio() {
  const destacadas = FEATURES.filter((f) => !f.ownSection).slice(0, 6);

  return (
    <>
      <StructuredData />
      <OfertaFranja />
      <SitioHeader activa="/" />
      <main className="flex-1">
        {/* ─── Apertura ─────────────────────────────────────────────── */}
        <section className="px-5 pb-16 pt-8 sm:px-8 sm:pb-24 sm:pt-12">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="flex flex-col items-start gap-5 lg:col-span-5">
              <p className="rotulo">SISTEMA MULTIRUBRO EN OPERACIÓN · CUPOS TALLER FUNDADOR</p>
              <h1 className="font-display text-[clamp(2.75rem,6vw,4rem)] leading-[0.92] tracking-[0.01em] text-ink text-balance">
                TU TALLER EN ORDEN. SIN CUADERNO.
              </h1>
              <p className="max-w-[46ch] text-lg leading-relaxed text-ink-muted">
                Recibe vehículos en 30 segundos, envía presupuestos que tu cliente aprueba con un toque por WhatsApp y cuadra tu caja al centavo. Forjado en 5 años de taller real.
              </p>
              <div className="border-l-2 border-[#FF9900] bg-[#141417] px-3.5 py-2.5 rounded-r-sm w-full">
                <p className="text-xs leading-relaxed text-[#F2F2F5]">
                  ⚡ <strong>Cupos Taller Fundador (Puesta en marcha asistida):</strong> Manda una foto de tu lista de precios y nuestro equipo te entrega el taller 100% configurado con tu catálogo + beneficio fundador.
                </p>
              </div>
              <InscripcionBeta colapsableEnMovil />
              <a
                href={URL_ENTRAR}
                data-cta="inicio-entrar"
                className="inline-flex min-h-11 items-center text-sm font-semibold text-ink-muted hover:text-ink hover:underline"
              >
                ¿Ya usas MAZA? Entrar a mi taller →
              </a>
              <ProntoGooglePlay />
              <div className="mt-4 pt-4 border-t border-[var(--line)]">
                <WaLink
                  href={waUrl("Hola, vi el video de MAZA y quiero consultar por un cupo de Taller Fundador.")}
                  ubicacion="hero-fundadores"
                  className="inline-flex items-center gap-2 text-xs font-medium text-[var(--ink)] hover:text-[var(--amber-ink)] transition-colors"
                >
                  <span className="h-2 w-2 rounded-full bg-[var(--amber)]" aria-hidden="true" />
                  <span><strong>¿Vienes por el video?</strong> Postula a un cupo de Taller Fundador (te dejamos el catálogo cargado) →</span>
                </WaLink>
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

        <TecnologiasBar />

        <SocialProof />

        {/* ─── Cómo trabaja un taller con MAZA ─────────────────────── */}
        <section className="border-y border-border-strong bg-surface px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="titulo-seccion mb-8 max-w-fit pr-6">Un día en el taller</p>
            <ol className="grid grid-cols-1 border border-border-strong sm:grid-cols-3">
              {PASOS.map((p, i) => (
                <li
                  key={p.n}
                  className={`flex flex-col gap-3 p-6 ${i > 0 ? "border-t border-border-strong sm:border-l sm:border-t-0" : ""}`}
                >
                  <span className="cifra text-3xl text-value-shade">{p.n}</span>
                  <h2 className="font-display text-3xl leading-none tracking-[0.01em] text-ink">{p.titulo}</h2>
                  <p className="text-[15px] leading-relaxed text-ink-muted">{p.texto}</p>

                  {/* Evidencia visual en móvil (< lg) */}
                  <div className="mt-4 overflow-hidden rounded-sm border border-[#26262C] bg-[#0A0A0A] lg:hidden">
                    <div className="flex items-center gap-1.5 border-b border-[#26262C] bg-[#141417] px-3 py-1.5">
                      <span className={`font-mono text-[10px] font-bold ${p.badgeColor}`}>
                        {p.badgeResultado}
                      </span>
                    </div>
                    <Image
                      src={p.imagenMovil}
                      alt={p.titulo}
                      width={600}
                      height={350}
                      className="max-h-48 w-full object-cover object-top"
                    />
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ─── Dos superficies ──────────────────────────────────────── */}
        <section className="px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="max-w-[20ch] font-display text-[clamp(2.25rem,5vw,3.5rem)] leading-[0.98] tracking-[0.01em] text-ink text-balance">
              La app ejecuta. La web administra.
            </h2>
            <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-ink-muted sm:text-lg">
              Una sola cuenta, los mismos datos en vivo. En el computador entras a mazataller.com,
              escaneas un código con el celular y listo: sin escribir la contraseña.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {SUPERFICIES.map((s) => (
                <div key={s.rotulo} className="caja p-6">
                  <p className="rotulo rotulo-sm">{s.rotulo}</p>
                  <h3 className="mt-2 font-display text-3xl leading-none tracking-[0.01em] text-ink">{s.titulo}</h3>

                  {s.rotulo.includes("Web") && (
                    <div className="mb-4 mt-4 overflow-hidden rounded-sm border border-[#26262C] bg-[#0A0A0A] lg:hidden">
                      <div className="flex items-center justify-between border-b border-[#26262C] bg-[#141417] px-3 py-1.5 font-mono text-[10px] text-[#9A9AA3]">
                        <div className="flex items-center gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-[#374151]" />
                          <span className="h-2 w-2 rounded-full bg-[#374151]" />
                          <span className="h-2 w-2 rounded-full bg-[#374151]" />
                          <span className="ml-1 text-[#F2F2F5]">https://mazataller.com/app</span>
                        </div>
                        <span className="font-bold text-[#22A559]">● En vivo</span>
                      </div>
                      <Image
                        src="/screenshots/mostrador-pc.png"
                        alt="Mostrador PC de MAZA con cola de trabajo en vivo"
                        width={700}
                        height={400}
                        className="w-full object-cover object-top"
                      />
                    </div>
                  )}

                  <ul className="mt-5 flex flex-col">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-center gap-3 border-t border-neutral-track py-2.5 text-[15px] text-ink">
                        <span className="testigo text-ink" aria-hidden="true" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Funciones ────────────────────────────────────────────── */}
        <section className="border-t border-border-strong px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="flex items-baseline gap-3">
                <h2 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] leading-[0.98] tracking-[0.01em] text-ink">
                  Lo que hace por ti
                </h2>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#9A9AA3] lg:hidden">
                  Desliza →
                </span>
              </div>
              <Link href="/funciones" className="text-sm font-bold text-ink underline underline-offset-4">
                Ver todas las funciones →
              </Link>
            </div>

            {/* Móvil (< lg): Carrusel horizontal */}
            <div className="mt-8 -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:hidden">
              {destacadas.map((f) => (
                <div
                  key={f.icon}
                  className="flex min-w-[80vw] sm:min-w-[60vw] snap-center flex-col gap-3 border border-border-strong bg-surface p-6"
                >
                  <FeatureIcon name={f.icon} className="h-6 w-6 text-ink" />
                  <h3 className="text-lg font-bold leading-snug text-ink">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-muted">{f.description}</p>
                </div>
              ))}
            </div>

            {/* Desktop (lg:): Grilla intacta */}
            <div className="mt-10 hidden border-l border-t border-border-strong lg:grid lg:grid-cols-3">
              {destacadas.map((f) => (
                <div key={f.icon} className="flex flex-col gap-3 border-b border-r border-border-strong bg-surface p-6">
                  <FeatureIcon name={f.icon} className="h-6 w-6 text-ink" />
                  <h3 className="text-lg font-bold leading-snug text-ink">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-muted">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Planes y ayuda ───────────────────────────────────────── */}
        <section className="px-5 pb-16 sm:px-8 sm:pb-24">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2">
            <Link href="/planes" className="caja group flex flex-col gap-3 p-6 hover:border-ink">
              <p className="rotulo rotulo-sm">Planes y precios</p>
              <p className="text-ink-muted">
                Desde <span className="cifra text-3xl text-value-shade">{clp.format(precioDesde())}</span> al mes,
                IVA incluido
              </p>
              <p className="text-sm text-ink-muted">
                Tres planes según cuántas personas trabajan. Precios con IVA incluido.
              </p>
              <span className="mt-auto text-sm font-bold text-ink group-hover:underline">Ver planes →</span>
            </Link>
            <Link href="/ayuda" className="caja group flex flex-col gap-3 p-6 hover:border-ink">
              <p className="rotulo rotulo-sm">Ayuda</p>
              <p className="font-display text-3xl leading-none tracking-[0.01em] text-ink">Guías paso a paso</p>
              <p className="text-sm text-ink-muted">
                Primeros pasos, recibir un vehículo, enviar el link, importar con IA y usar el mesón.
              </p>
              <span className="mt-auto text-sm font-bold text-ink group-hover:underline">Ir a la ayuda →</span>
            </Link>
          </div>
        </section>

        <CierreCuenta />
      </main>
      <SitioFooter />
    </>
  );
}
