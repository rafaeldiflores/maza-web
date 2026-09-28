import Link from "next/link";
import type { Metadata } from "next";
import { SitioHeader } from "@/components/sitio/sitio-header";
import { SitioFooter } from "@/components/sitio/sitio-footer";
import { ComputerFrame } from "@/components/computer-frame";
import { PhoneFrame } from "@/components/phone-frame";
import { FeatureIcon } from "@/components/feature-icon";
import { StructuredData } from "@/components/structured-data";
import { CierreCuenta } from "@/components/sitio/cierre-cuenta";
import {
  FEATURES,
  TRIAL_DIAS,
  URL_ENTRAR,
  URL_REGISTRO,
  clp,
  precioDesde,
} from "@/lib/site";

/**
 * Portada del sitio oficial. Quien llega acá ya busca MAZA (o vuelve a entrar):
 * lo primero es qué es y los dos caminos, crear cuenta o entrar. La venta
 * larga, con demo y WhatsApp, vive en /empieza para los anuncios.
 */
export const metadata: Metadata = {
  title: "MAZA — Gestión para talleres de bicicletas, motos y autos",
  alternates: { canonical: "/" },
};

const PASOS = [
  {
    n: "01",
    titulo: "Recibes",
    texto:
      "Ingresas el vehículo en el celular: cliente, fotos, inspección y servicios. La orden nace con su número y queda en la cola.",
  },
  {
    n: "02",
    titulo: "Informas",
    texto:
      "Tu cliente recibe un link por WhatsApp: ve cómo va su vehículo y aprueba el presupuesto con un toque. Sin llamadas.",
  },
  {
    n: "03",
    titulo: "Entregas y cobras",
    texto:
      "Cierras la orden, cobras y la caja queda cuadrada. El historial del vehículo te espera en la próxima visita.",
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
      <SitioHeader activa="/" />
      <main className="flex-1">
        {/* ─── Apertura ─────────────────────────────────────────────── */}
        <section className="px-5 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-20">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="flex flex-col items-start gap-6 lg:col-span-5">
              <p className="rotulo">Gestión de talleres · Bici · Moto · Auto</p>
              <h1 className="font-display text-[clamp(3rem,8vw,5.25rem)] leading-[0.92] tracking-[0.01em] text-ink text-balance">
                Todo tu taller en un solo sistema.
              </h1>
              <p className="max-w-[44ch] text-lg leading-relaxed text-ink-muted">
                Órdenes, clientes, inventario y caja, con un link para que tu cliente siga su
                vehículo y apruebe el presupuesto desde el celular.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={URL_REGISTRO}
                  data-cta="inicio-registro"
                  className="inline-flex h-12 items-center bg-value px-6 text-base font-bold text-splash-bg"
                >
                  Crear cuenta gratis
                </a>
                <a
                  href={URL_ENTRAR}
                  data-cta="inicio-entrar"
                  className="inline-flex h-12 items-center border border-ink px-6 text-base font-bold text-ink hover:bg-surface"
                >
                  Entrar a mi taller
                </a>
              </div>
              <p className="font-mono text-xs text-ink-faint">
                {TRIAL_DIAS} días gratis · Sin tarjeta · Celular y computador
              </p>
            </div>

            <div className="relative lg:col-span-7">
              <ComputerFrame alt="La web de MAZA en el computador del mesón" />
              <div className="absolute -bottom-8 -left-2 hidden w-[150px] sm:block lg:-left-10 lg:w-[170px]">
                <PhoneFrame file="screenshots/hero.png" alt="La app de MAZA en el celular del taller" />
              </div>
            </div>
          </div>
        </section>

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
              <h2 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] leading-[0.98] tracking-[0.01em] text-ink">
                Lo que hace por ti
              </h2>
              <Link href="/funciones" className="text-sm font-bold text-ink underline underline-offset-4">
                Ver todas las funciones →
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-1 border-l border-t border-border-strong sm:grid-cols-2 lg:grid-cols-3">
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
                Desde <span className="cifra text-3xl text-value-shade">{clp.format(precioDesde())}</span> al mes
              </p>
              <p className="text-sm text-ink-muted">
                Tres planes según cuántas personas trabajan. Empiezas con {TRIAL_DIAS} días gratis.
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
