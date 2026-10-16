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
}

const PRUEBAS_DE_FUEGO: PruebaDeFuego[] = [
  {
    id: "presupuesto-parcial",
    numero: "01",
    etiquetaBoton: "01 · Aprueba la mitad",
    pregunta: "¿Cotizas 4 cosas y el cliente solo quiere hacer 2?",
    fallaComun:
      "Borras la orden, recalculas a mano por WhatsApp y arriesgas cobrar mal en caja.",
    solucionMaza:
      "El cliente destilda en su celular lo que no hará hoy. Total, orden y stock se ajustan solos.",
    metrica: "1 TOQUE",
    etiquetaMetrica: "Recálculo en vivo",
  },
  {
    id: "manos-con-grasa",
    numero: "02",
    etiquetaBoton: "02 · Hora punta",
    pregunta: "¿Manos ocupadas y 3 vehículos entrando a la vez?",
    fallaComun:
      "15 campos chiquititos obligatorios que nadie tiene tiempo de llenar en el taller.",
    solucionMaza:
      "Botones grandes de terreno: patente o QR, fotos de ingreso y link enviado en 30 segundos.",
    metrica: "30 SEG",
    etiquetaMetrica: "Recepción en mesón",
  },
  {
    id: "caja-real",
    numero: "03",
    etiquetaBoton: "03 · Pagos mixtos",
    pregunta: "¿Dejan abono y al retirar pagan mitad efectivo y mitad transferencia?",
    fallaComun:
      "Solo entienden un pago único: a las 7 PM la caja no cuadra y vuelves al cuaderno.",
    solucionMaza:
      "Soporta abonos, pagos divididos y Mercado Pago. Separa mano de obra y repuestos al centavo.",
    metrica: "$0 DESCUADRE",
    etiquetaMetrica: "Cierre de caja exacto",
  },
  {
    id: "puesta-en-marcha",
    numero: "04",
    etiquetaBoton: "04 · Tus precios hoy",
    pregunta: "¿Quién tiene tiempo de digitar 200 servicios y repuestos?",
    fallaComun:
      "Te entregan una cuenta vacía y un formulario eterno que abandonas al segundo día.",
    solucionMaza:
      "Mandas 1 foto de tu pizarra o lista y nuestro equipo junto a la IA te entregan el taller cargado.",
    metrica: "LLAVE EN MANO",
    etiquetaMetrica: "Catálogo listo día 1",
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
              <strong className="font-semibold text-[#F2F2F5]">1 año operando en taller real</strong>, probado en todo el proceso operativo.
            </p>
          </div>

          {/* Sello compacto de origen con foto real */}
          <div className="flex items-center gap-3 rounded-sm border border-[#26262C] bg-[#141417] p-3 lg:max-w-xs shrink-0">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-[#FF9900]">
              <Image
                src="/fundador.jpg"
                alt="Taller Litoral Bikes en operación"
                width={48}
                height={48}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#22A559]">
                ● Litoral Bikes · El Quisco
              </span>
              <span className="text-xs font-bold text-[#F2F2F5]">
                1 año en el taller real
              </span>
              <span className="text-[11px] text-[#9A9AA3] leading-tight">
                Testeado y probado en cada orden antes de salir al mercado.
              </span>
            </div>
          </div>
        </div>

        {/* ─── Simulador interactivo ultra-escaneable ─────────────────── */}
        <div className="mt-7 rounded-sm border border-[#26262C] bg-[#141417] p-4 sm:p-6">
          <div className="flex items-center justify-between gap-2">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#9A9AA3]">
              TOCA UN CASO REAL DE TALLER:
            </p>
            <span className="font-mono text-[10px] text-[#FF9900]">
              👆 Compara en 1 toque
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

          {/* Resultado al grano */}
          <div className="mt-4 rounded-sm border border-[#26262C] bg-[#0A0A0A] p-4 sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#26262C] pb-3">
              <h3 className="font-display text-xl leading-tight tracking-[0.01em] text-[#F2F2F5] sm:text-2xl">
                {prueba.pregunta}
              </h3>
              <div className="inline-flex items-center gap-2 rounded-xs border border-[#FF9900]/40 bg-[#141417] px-3 py-1">
                <span className="font-mono text-sm font-extrabold text-[#FF9900]">
                  {prueba.metrica}
                </span>
                <span className="font-mono text-[10px] uppercase text-[#9A9AA3]">
                  · {prueba.etiquetaMetrica}
                </span>
              </div>
            </div>

            <div className="mt-3.5 grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-4">
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
