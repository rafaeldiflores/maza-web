"use client";

import { useState } from "react";
import Image from "next/image";
import { WaLink } from "@/components/wa-tracking";
import { waUrl } from "@/lib/marca";

interface PruebaDeFuego {
  id: string;
  numero: string;
  etiquetaBoton: string;
  pregunta: string;
  fallaComun: string;
  solucionMaza: string;
  metrica: string;
  etiquetaMetrica: string;
  captura: string;
  pieCaptura: string;
}

const PRUEBAS_DE_FUEGO: PruebaDeFuego[] = [
  {
    id: "presupuesto-opciones",
    numero: "01",
    etiquetaBoton: "01 · Cero disputas",
    pregunta: "¿Cotizas varias cosas o el cliente cuestiona por qué se cambia una pieza?",
    fallaComun:
      "Discutes por teléfono, borras la orden a mano por WhatsApp y arriesgas cobrar mal en caja.",
    solucionMaza:
      "Subes fotos de la pieza gastada y envías opciones (Básico, Recomendada, Premium) o ítems destildables. Aprueba en 1 toque.",
    metrica: "1 TOQUE",
    etiquetaMetrica: "Opciones y evidencia",
    captura: "/screenshots/presupuesto-opciones.png",
    pieCaptura: "Presupuesto con opciones: Básico $45.000 vs Completo ★ Recomendada $80.000",
  },
  {
    id: "manos-con-grasa",
    numero: "02",
    etiquetaBoton: "02 · Hora punta",
    pregunta: "¿8 vehículos adentro y no sabes si alcanzas a entregar todo hoy?",
    fallaComun:
      "15 campos chiquititos obligatorios y una lista ciega que no calcula tu carga real de trabajo.",
    solucionMaza:
      "Recepción en 30 seg con checklist de 19 puntos. La vista «Mi Día» suma las horas de tus órdenes y calcula a qué hora terminas.",
    metrica: "30 SEG",
    etiquetaMetrica: "Recepción + Carga horaria",
    captura: "/screenshots/mi-dia.png",
    pieCaptura: "Vista Mi Día: 4 trabajos · 6 h 50 min · Terminas cerca de las 06:27",
  },
  {
    id: "caja-real",
    numero: "03",
    etiquetaBoton: "03 · Caja exacta",
    pregunta: "¿Dejan abono y al retirar pagan mitad efectivo y mitad transferencia?",
    fallaComun:
      "Solo aceptan un pago único: a las 7 PM el efectivo del cajón no cuadra y vuelves al cuaderno.",
    solucionMaza:
      "Separa tu ganancia del día del efectivo exacto que debe haber en el cajón. Soporta abonos, pagos divididos y retiros de caja.",
    metrica: "$0 DESCUADRE",
    etiquetaMetrica: "Efectivo vs Transferencias",
    captura: "/screenshots/balances.png",
    pieCaptura: "Cierre de caja: separa ganancia hoy ($64.500) del efectivo en cajón ($12.500)",
  },
  {
    id: "equipo-permisos",
    numero: "04",
    etiquetaBoton: "04 · Equipo y costos",
    pregunta: "¿Sumas mecánicos pero no quieres que vean tu caja ni tus costos?",
    fallaComun:
      "Todos entran con la misma clave y cualquiera ve cuánto ganas, tus márgenes de repuestos o borra órdenes.",
    solucionMaza:
      "Cada mecánico avanza sus órdenes asignadas en su celular, mientras caja, balances y costos de compra quedan ocultos.",
    metrica: "ROLES CLAROS",
    etiquetaMetrica: "Caja y costos blindados",
    captura: "/screenshots/equipo.png",
    pieCaptura: "Permisos de taller: caja y costos de inventario ocultos al mecánico",
  },
];

export function IngenieriaTaller() {
  const [activa, setActiva] = useState<number>(0);
  const prueba = PRUEBAS_DE_FUEGO[activa];

  return (
    <section
      id="ingenieria-real"
      className="border-b border-[#26262C] bg-[#0A0A0A] px-5 py-14 text-[#F2F2F5] sm:px-8 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* ─── Cabecera compacta + Sello de origen ────────────────────── */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-xs border border-[#FF9900]/40 bg-[#141417] px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-[#FF9900]" aria-hidden="true" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#FF9900]">
                INGENIERÍA DE TALLER · CERO SOFTWARE DE JUGUETE
              </span>
            </div>

            <h2 className="mt-3 font-display text-[clamp(2.2rem,5.5vw,3.5rem)] leading-[0.94] tracking-[0.01em] text-[#F2F2F5] text-balance">
              NO FUE HECHO EN UNA OFICINA.{" "}
              <span className="text-[#FF9900]">FUE FORJADO EN EL MESÓN.</span>
            </h2>

            <p className="mt-2.5 text-sm leading-relaxed text-[#9A9AA3] sm:text-base">
              En un taller real las apps improvisadas duran dos días. MAZA une{" "}
              <strong className="font-semibold text-[#F2F2F5]">4 años de Ingeniería Informática</strong> con{" "}
              <strong className="font-semibold text-[#F2F2F5]">1 año operando en taller real</strong>, testeado y probado en todo el proceso operativo.
            </p>
          </div>

          {/* Sello compacto de origen con foto real bien encuadrada */}
          <div className="flex items-center gap-3.5 rounded-sm border border-[#26262C] bg-[#141417] p-3.5 lg:max-w-sm shrink-0">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-[#FF9900] bg-[#0A0A0A]">
              <Image
                src="/fundador.jpg"
                alt="Rafael Díaz Flores — Fundador de MAZA en taller Litoral Bikes"
                width={96}
                height={96}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#22A559]">
                ● Litoral Bikes · El Quisco
              </span>
              <span className="text-xs font-bold text-[#F2F2F5]">
                1 año operando en taller real
              </span>
              <span className="text-[11px] text-[#9A9AA3] leading-tight">
                Testeado y probado en todo el proceso operativo antes de abrir cupos.
              </span>
            </div>
          </div>
        </div>

        {/* ─── Simulador interactivo con captura real por caso ────────── */}
        <div className="mt-7 rounded-sm border border-[#26262C] bg-[#141417] p-4 sm:p-6">
          <div className="flex items-center justify-between gap-2">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#9A9AA3]">
              TOCA UN CASO REAL DE TALLER Y MIRA LA PANTALLA:
            </p>
            <span className="font-mono text-[10px] text-[#FF9900]">
              👆 4 pruebas de fuego
            </span>
          </div>

          <div
            className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4"
            role="tablist"
            aria-label="Pruebas de fuego en taller real"
          >
            {PRUEBAS_DE_FUEGO.map((p, idx) => {
              const seleccionada = idx === activa;
              return (
                <button
                  key={p.id}
                  type="button"
                  role="tab"
                  aria-selected={seleccionada}
                  onClick={() => setActiva(idx)}
                  className={`flex items-center justify-between rounded-sm border px-3 py-2.5 text-left font-mono text-xs font-bold transition-all cursor-pointer ${
                    seleccionada
                      ? "border-[#FF9900] bg-[#FF9900] text-[#0A0A0A] shadow-md"
                      : "border-[#26262C] bg-[#0A0A0A] text-[#F2F2F5] hover:border-[#FF9900]/50"
                  }`}
                >
                  <span className="truncate">{p.etiquetaBoton}</span>
                  <span className={`ml-1 text-[10px] ${seleccionada ? "text-[#0A0A0A]" : "text-[#FF9900]"}`}>
                    {seleccionada ? "●" : "→"}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Resultado al grano + Captura real de la pantalla */}
          <div className="mt-4 grid grid-cols-1 items-center gap-4 rounded-sm border border-[#26262C] bg-[#0A0A0A] p-4 sm:p-5 lg:grid-cols-12">
            <div className="flex flex-col gap-3.5 lg:col-span-7">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#26262C] pb-3">
                <h3 className="font-display text-xl leading-tight tracking-[0.01em] text-[#F2F2F5] sm:text-2xl">
                  {prueba.pregunta}
                </h3>
                <div className="inline-flex items-center gap-2 rounded-xs border border-[#FF9900]/40 bg-[#141417] px-2.5 py-1">
                  <span className="font-mono text-xs font-extrabold text-[#FF9900]">
                    {prueba.metrica}
                  </span>
                  <span className="font-mono text-[10px] uppercase text-[#9A9AA3]">
                    · {prueba.etiquetaMetrica}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                <div className="rounded-sm border border-[#26262C] bg-[#141417]/60 p-3.5">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ff6b6b]">
                    ✕ App improvisada de oficina
                  </span>
                  <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-[#9A9AA3]">
                    {prueba.fallaComun}
                  </p>
                </div>

                <div className="rounded-sm border border-[#22A559]/50 bg-[#141417] p-3.5">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#22A559]">
                    ✓ Ingeniería MAZA en terreno
                  </span>
                  <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-[#F2F2F5]">
                    {prueba.solucionMaza}
                  </p>
                </div>
              </div>
            </div>

            {/* Evidencia visual real de ese caso */}
            <div className="overflow-hidden rounded-sm border border-[#26262C] bg-[#0E0E11] lg:col-span-5">
              <div className="flex items-center justify-between border-b border-[#26262C] bg-[#141417] px-3 py-1.5 font-mono text-[10px]">
                <span className="font-bold text-[#22A559]">● Pantalla real en MAZA</span>
                <span className="text-[#9A9AA3]">Caso {prueba.numero}</span>
              </div>
              <div className="flex flex-col items-center p-3">
                <div className="w-[195px] max-h-60 overflow-hidden rounded-t-xl border border-[#26262C] bg-[#0A0A0A] shadow-lg">
                  <Image
                    src={prueba.captura}
                    alt={prueba.pieCaptura}
                    width={380}
                    height={800}
                    className="w-full object-cover object-top"
                  />
                </div>
                <p className="mt-2 text-center font-mono text-[10px] text-[#9A9AA3]">
                  {prueba.pieCaptura}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-3.5 flex flex-wrap items-center justify-between gap-2 pt-1 text-xs">
            <span className="text-[#9A9AA3]">
              ¿Quieres ver cómo se adapta al flujo de tu taller?
            </span>
            <WaLink
              href={waUrl(
                "Hola, vi la web de MAZA y quiero ver cómo funciona el sistema en el caso real de mi taller."
              )}
              ubicacion="ingenieria-taller-cta"
              className="font-mono text-xs font-bold text-[#FF9900] hover:underline"
            >
              Consultar por WhatsApp →
            </WaLink>
          </div>
        </div>
      </div>
    </section>
  );
}
