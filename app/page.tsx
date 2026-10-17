import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { SitioHeader } from "@/components/sitio/sitio-header";
import { SitioFooter } from "@/components/sitio/sitio-footer";
import { AndroidFrame } from "@/components/android-frame";
import { StructuredData } from "@/components/structured-data";
import { InscripcionBeta } from "@/components/sitio/inscripcion-beta";
import { CierreCuenta } from "@/components/sitio/cierre-cuenta";
import { ProntoGooglePlay } from "@/components/sitio/pronto-google-play";
import { TecnologiasBar } from "@/components/sitio/tecnologias-bar";
import { IngenieriaTaller } from "@/components/sitio/ingenieria-taller";
import { SorpresaEnVivo } from "@/components/sitio/sorpresa-en-vivo";
import {
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
    tiempo: "30 SEG",
    titulo: "Recibes con fotos",
    texto: "Checklist de ingreso y fotos de evidencia en una mano.",
    imagenMovil: "/screenshots/ingreso.png",
    badgeResultado: "● Ingreso listo",
    badgeColor: "text-[#FF9900]",
  },
  {
    n: "02",
    tiempo: "1 TOQUE",
    titulo: "Aprueban en su link",
    texto: "Tu cliente ve las fotos en su celular y aprueba sin llamarte.",
    imagenMovil: "/screenshots/evidencia-link.png",
    badgeResultado: "✓ Aprobado online",
    badgeColor: "text-[#22A559]",
  },
  {
    n: "03",
    tiempo: "AL CENTAVO",
    titulo: "Entregas y cuadras",
    texto: "Comprobante por WhatsApp o ticket. Caja y stock cuadran solos.",
    imagenMovil: "/screenshots/entrega-comprobante.png",
    badgeResultado: "● Caja cuadrada",
    badgeColor: "text-[#FF9900]",
  },
];

export default function Inicio() {
  return (
    <>
      <StructuredData />
      <SitioHeader activa="/" />
      <main className="flex-1">
        {/* ─── 1. HERO MINIMALISTA + FACTOR SORPRESA EN VIVO ────────── */}
        <section className="px-5 pb-12 pt-6 sm:px-8 sm:pb-16 sm:pt-10">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="flex flex-col items-start gap-4 lg:col-span-5">
              <p className="rotulo text-[#FF9900]">
                SISTEMA PARA TALLERES MULTIRUBRO · CUPOS TALLER FUNDADOR
              </p>
              <h1 className="font-display text-[clamp(2.75rem,6vw,4.2rem)] leading-[0.92] tracking-[0.01em] text-ink text-balance">
                TU TALLER EN ORDEN. SIN CUADERNO.
              </h1>
              <p className="max-w-[40ch] text-base sm:text-lg leading-snug text-ink-muted">
                Recibes en 30 segundos, tu cliente aprueba con fotos desde su celular y tu caja cuadra sola.
              </p>

              {/* Gancho sorpresa único y directo */}
              <div className="flex w-full items-center gap-2.5 rounded-sm border border-[#FF9900]/35 bg-[#FF9900]/10 px-3.5 py-2.5 text-xs text-[#F2F2F5]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 shrink-0 text-[#FF9900]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                  <circle cx="12" cy="13" r="4" />
                </svg>
                <span>
                  <strong className="font-mono text-[#FF9900]">Llave en mano:</strong> mandas 1 foto de tu lista de precios y te entregamos el taller cargado.
                </span>
              </div>

              <InscripcionBeta colapsableEnMovil />

              <div className="mt-1 flex w-full flex-wrap items-center justify-between gap-3 border-t border-[var(--line)] pt-2.5">
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

            <div className="lg:col-span-7">
              <SorpresaEnVivo />
            </div>
          </div>
        </section>

        {/* ─── 2. TECNOLOGÍA SELECCIONABLE (1 clic, cero popups) ────── */}
        <TecnologiasBar />

        {/* ─── 3. FLUJO EN 3 PASOS (Capturas 100% completas) ────────── */}
        <section className="border-b border-border-strong bg-surface px-5 py-12 sm:px-8 sm:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="rotulo text-[#FF9900]">EL DÍA A DÍA EN 3 TOQUES</p>
                <h2 className="mt-1 font-display text-[clamp(2rem,4.5vw,2.9rem)] leading-none tracking-[0.01em] text-ink">
                  CÓMO TRABAJA TU TALLER CON MAZA
                </h2>
              </div>
              <Link
                href="/funciones"
                className="font-mono text-xs font-bold text-[#FF9900] hover:underline"
              >
                Ver las 12 funciones en detalle →
              </Link>
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
                  <p className="text-xs sm:text-sm leading-snug text-ink-muted">{p.texto}</p>

                  {/* Captura completa sin recorte inferior ni lateral */}
                  <div className="mt-auto pt-3">
                    <div className="overflow-hidden rounded-sm border border-[#26262C] bg-[#0A0A0A]">
                      <div className="flex items-center justify-between border-b border-[#26262C] bg-[#141417] px-3 py-1.5 font-mono text-[10px]">
                        <span className={`font-bold ${p.badgeColor}`}>
                          {p.badgeResultado}
                        </span>
                        <span className="text-[#9A9AA3]">Paso {p.n}</span>
                      </div>
                      <div className="flex justify-center bg-[#0E0E11] py-4 px-3">
                        <AndroidFrame
                          aspect="aspect-[9/16]"
                          className="max-w-[205px] sm:max-w-[215px]"
                        >
                          <Image
                            src={p.imagenMovil}
                            alt={p.titulo}
                            fill
                            sizes="220px"
                            className="object-contain object-top"
                          />
                        </AndroidFrame>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ─── 4. INGENIERÍA EN TALLER REAL ─────────────────────────── */}
        <IngenieriaTaller />

        {/* ─── 5. BARRA COMPACTA DE PLANES Y FUNCIONES ──────────────── */}
        <section className="px-5 py-10 sm:px-8 sm:py-12">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 rounded-sm border border-border-strong bg-surface p-5 sm:flex-row sm:items-center sm:p-6">
            <div>
              <p className="rotulo rotulo-sm text-[#FF9900]">PLANES CLAROS · SIN AMARRES</p>
              <p className="mt-1 text-sm sm:text-base text-ink">
                Desde <span className="cifra text-2xl text-value-shade">{clp.format(precioDesde())}</span> / mes (IVA incluido). Cancela cuando quieras en 1 clic.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/planes"
                className="inline-flex min-h-10 items-center rounded-sm bg-[#FF9900] px-4 py-2 text-xs sm:text-sm font-bold text-[#0E0E11] hover:bg-[#FFAD33]"
              >
                Ver los 3 planes →
              </Link>
              <Link
                href="/funciones"
                className="inline-flex min-h-10 items-center rounded-sm border border-border-strong bg-app-bg px-4 py-2 text-xs sm:text-sm font-semibold text-ink hover:border-ink"
              >
                Explorar todas las pantallas →
              </Link>
            </div>
          </div>
        </section>

        <CierreCuenta />
      </main>
      <SitioFooter />
    </>
  );
}

