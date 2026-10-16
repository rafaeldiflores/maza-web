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
  escenarioReal: string;
  fallaComun: string;
  solucionMaza: string;
  metrica: string;
  etiquetaMetrica: string;
}

const PRUEBAS_DE_FUEGO: PruebaDeFuego[] = [
  {
    id: "presupuesto-parcial",
    numero: "01",
    etiquetaBoton: "01 · Cliente indeciso",
    pregunta: "¿Qué pasa si el cliente aprueba solo la mitad del presupuesto?",
    escenarioReal:
      "Le cotizas 4 reparaciones y el cliente por ahora solo quiere hacer 2. En el día a día del taller esto pasa todo el tiempo.",
    fallaComun:
      "En un sistema improvisado tienes que borrar la orden, recalcular todo a mano, volver a escribir por WhatsApp y rezar para no equivocarte en el cobro.",
    solucionMaza:
      "El cliente destilda desde su propio celular lo que no quiere hacer hoy. El total se recalcula en vivo, tu equipo recibe el aviso al instante y el inventario descuenta solo lo aprobado.",
    metrica: "1 TOQUE",
    etiquetaMetrica: "Aprobación parcial o total desde el celular del cliente",
  },
  {
    id: "manos-con-grasa",
    numero: "02",
    etiquetaBoton: "02 · Taller lleno",
    pregunta: "¿Qué pasa cuando tienes las manos ocupadas y 3 clientes esperando?",
    escenarioReal:
      "Lunes en la mañana: teléfonos sonando, vehículos entrando al mismo tiempo y ningún mecánico tiene tiempo para llenar planillas.",
    fallaComun:
      "Los programas hechos en oficina te obligan a completar 15 campos chiquititos antes de dejarte guardar una orden.",
    solucionMaza:
      "Botones grandes pensados para usarse en terreno. Escaneas el QR o anotas la patente, tomas las fotos de recepción y en 30 segundos la orden ya está en la cola y en el WhatsApp del cliente.",
    metrica: "30 SEG",
    etiquetaMetrica: "Tiempo real de recepción medido en mesón",
  },
  {
    id: "caja-real",
    numero: "03",
    etiquetaBoton: "03 · Pagos mixtos",
    pregunta: "¿Qué pasa cuando dejan abono y pagan mitad efectivo y mitad transferencia?",
    escenarioReal:
      "El cliente dejó un abono al ingresar, sumó un repuesto a mitad de semana y al retirar paga con dos medios distintos.",
    fallaComun:
      "Las apps genéricas solo entienden un pago único: a las 7 de la tarde la caja no cuadra y terminas anotando en un cuaderno aparte.",
    solucionMaza:
      "Registra abonos, pagos divididos, efectivo, transferencia y Mercado Pago. Separa automáticamente cuánto fue mano de obra y cuánto fue repuesto para que tu ganancia real quede clara al centavo.",
    metrica: "$0 DESCUADRE",
    etiquetaMetrica: "Arqueo de caja pensado para la realidad del mostrador",
  },
  {
    id: "puesta-en-marcha",
    numero: "04",
    etiquetaBoton: "04 · Carga de precios",
    pregunta: "¿Quién tiene tiempo para sentarse a digitar 200 servicios y repuestos?",
    escenarioReal:
      "Quieres ordenar el taller, pero tus precios están en una pizarra, en un cuaderno, en un Excel viejo o en tu cabeza.",
    fallaComun:
      "Otros sistemas te entregan una pantalla vacía y te dejan solo frente a un formulario eterno que abandonas al segundo día.",
    solucionMaza:
      "Mandas una foto de tu lista de precios o pizarra y nuestra IA junto a nuestro equipo dejan tu catálogo cargado y listo. Abres tu taller el primer día con tus propios precios funcionando.",
    metrica: "LLAVE EN MANO",
    etiquetaMetrica: "Tu catálogo cargado antes de atender tu primera orden",
  },
];

const ESPECIFICACIONES_CHASIS = [
  {
    rotulo: "ORIGEN OPERATIVO",
    valor: "Litoral Bikes · El Quisco",
    detalle: "Nacido adentro de un taller real, no en una agencia.",
  },
  {
    rotulo: "INGENIERÍA + OFICIO",
    valor: "4 años Ing. Informática",
    detalle: "Construido con arquitectura sólida para no fallar en hora punta.",
  },
  {
    rotulo: "RODAJE EN TERRENO",
    valor: "1 año de operación diaria",
    detalle: "Testeado y probado en cada etapa antes de abrirse a otros talleres.",
  },
  {
    rotulo: "TUS DATOS SIEMPRE TUYOS",
    valor: "Google Cloud + Excel",
    detalle: "Respaldo automático continuo y descarga completa en 1 toque.",
  },
] as const;

export function IngenieriaTaller() {
  const [activa, setActiva] = useState< number >(0);
  const prueba = PRUEBAS_DE_FUEGO[activa];

  return (
    <section
      id="ingenieria-real"
      className="border-b border-[#26262C] bg-[#0A0A0A] px-5 py-16 text-[#F2F2F5] sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* ─── Cabecera: Golpe de autoridad ───────────────────────────── */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-xs border border-[#FF9900]/40 bg-[#141417] px-3 py-1.5">
              <span className="h-2 w-2 rounded-full bg-[#FF9900]" aria-hidden="true" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#FF9900]">
                INGENIERÍA DE TALLER · CERO SOFTWARE IMPROVISADO
              </span>
            </div>

            <h2 className="mt-4 font-display text-[clamp(2.35rem,6vw,3.75rem)] leading-[0.94] tracking-[0.01em] text-[#F2F2F5] text-balance">
              NO FUE HECHO EN UNA OFICINA.
              <br />
              <span className="text-[#FF9900]">FUE FORJADO EN EL MESÓN.</span>
            </h2>

            <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-[#9A9AA3] sm:text-lg">
              Cualquiera arma una aplicación bonita en un fin de semana, pero en un taller de verdad
              los sistemas de juguete duran dos días. MAZA une{" "}
              <strong className="font-semibold text-[#F2F2F5]">
                Ingeniería Informática profesional
              </strong>{" "}
              con{" "}
              <strong className="font-semibold text-[#F2F2F5]">
                1 año completo de operación real en taller
              </strong>
              , probado en todo el proceso operativo.
            </p>
          </div>

          {/* Sello compacto de origen con foto real */}
          <div className="flex items-center gap-3.5 rounded-sm border border-[#26262C] bg-[#141417] p-3.5 lg:max-w-xs">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-[#FF9900]">
              <Image
                src="/fundador.jpg"
                alt="Taller Litoral Bikes en operación"
                width={56}
                height={56}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#22A559]">
                ● Validado en operación diaria
              </span>
              <span className="text-sm font-bold text-[#F2F2F5]">
                Primero ordenó Litoral Bikes
              </span>
              <span className="text-xs text-[#9A9AA3]">
                Ninguna función sale sin probarse antes en el mostrador real.
              </span>
            </div>
          </div>
        </div>

        {/* ─── Simulador interactivo: Las 4 Pruebas de Fuego ──────────── */}
        <div className="mt-10 rounded-sm border border-[#26262C] bg-[#141417] p-4 sm:p-7">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#9A9AA3]">
              PONLO A PRUEBA · TOCA UN CASO REAL DE TALLER:
            </p>
            <span className="font-mono text-[10px] text-[#FF9900] lg:hidden">
              👆 Toca cada botón para comparar
            </span>
          </div>

          {/* Botonera táctil (Grid 2x2 en móvil para cero scroll lateral oculto, 4 cols en desktop) */}
          <div
            className="mt-3.5 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3"
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
                  className={`flex items-center justify-between rounded-sm border px-3 py-3 text-left font-mono text-xs font-bold transition-all cursor-pointer ${
                    seleccionada
                      ? "border-[#FF9900] bg-[#FF9900] text-[#0A0A0A] shadow-md"
                      : "border-[#26262C] bg-[#0A0A0A] text-[#F2F2F5] hover:border-[#FF9900]/50"
                  }`}
                >
                  <span className="truncate">{p.etiquetaBoton}</span>
                  <span
                    className={`ml-1.5 text-[10px] ${
                      seleccionada ? "text-[#0A0A0A]" : "text-[#FF9900]"
                    }`}
                  >
                    {seleccionada ? "●" : "→"}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Panel de resultado de la prueba seleccionada */}
          <div className="mt-5 rounded-sm border border-[#26262C] bg-[#0A0A0A] p-4 sm:p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-2xl">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#FF9900]">
                  PRUEBA DE TERRENO #{prueba.numero}
                </span>
                <h3 className="mt-1 font-display text-2xl leading-tight tracking-[0.01em] text-[#F2F2F5] sm:text-3xl">
                  {prueba.pregunta}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#9A9AA3]">
                  {prueba.escenarioReal}
                </p>
              </div>

              {/* Indicador tipo instrumento digital */}
              <div className="flex shrink-0 flex-col justify-center rounded-sm border border-[#26262C] bg-[#141417] px-4 py-3 lg:min-w-[230px] lg:text-right">
                <span className="font-mono text-2xl font-extrabold tracking-tight text-[#FF9900]">
                  {prueba.metrica}
                </span>
                <span className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-[#9A9AA3]">
                  {prueba.etiquetaMetrica}
                </span>
              </div>
            </div>

            {/* Comparativa directa: App improvisada vs Ingeniería MAZA */}
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              {/* Lo que pasa en software improvisado */}
              <div className="rounded-sm border border-[#26262C] bg-[#141417]/70 p-4">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-xs bg-[#e53935]/20 font-mono text-xs font-bold text-[#ff6b6b]">
                    ✕
                  </span>
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#ff6b6b]">
                    App improvisada de oficina
                  </span>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-[#9A9AA3]">
                  {prueba.fallaComun}
                </p>
              </div>

              {/* Cómo lo resuelve MAZA */}
              <div className="rounded-sm border border-[#22A559]/50 bg-[#141417] p-4">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-xs bg-[#22A559]/20 font-mono text-xs font-bold text-[#22A559]">
                    ✓
                  </span>
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#22A559]">
                    Ingeniería MAZA en el taller
                  </span>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-[#F2F2F5]">
                  {prueba.solucionMaza}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Placa de Chasis: Especificaciones de Respaldo ──────────── */}
        <div className="mt-6 grid grid-cols-2 border-l border-t border-[#26262C] lg:grid-cols-4">
          {ESPECIFICACIONES_CHASIS.map((spec) => (
            <div
              key={spec.rotulo}
              className="flex flex-col gap-1 border-b border-r border-[#26262C] bg-[#141417]/50 p-4 sm:p-5"
            >
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#6E6E77]">
                {spec.rotulo}
              </span>
              <span className="font-display text-xl tracking-[0.02em] text-[#F2F2F5] sm:text-2xl">
                {spec.valor}
              </span>
              <span className="text-xs leading-relaxed text-[#9A9AA3]">
                {spec.detalle}
              </span>
            </div>
          ))}
        </div>

        {/* ─── Gancho de Conversión Directa ───────────────────────────── */}
        <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-sm border border-[#FF9900]/40 bg-[#141417] p-5 sm:flex-row sm:items-center">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#FF9900]">
              ¿TIENES UN CASO ESPECIAL EN TU TALLER?
            </span>
            <p className="text-sm font-semibold text-[#F2F2F5] sm:text-base">
              Háblanos directo por WhatsApp: te mostramos cómo trabaja MAZA con el flujo real de tu taller.
            </p>
          </div>
          <WaLink
            href={waUrl(
              "Hola, vi la web de MAZA y quiero ver cómo funciona el sistema en el caso real de mi taller."
            )}
            ubicacion="ingenieria-taller-cta"
            className="inline-flex min-h-11 w-full shrink-0 items-center justify-center rounded-sm bg-[#FF9900] px-5 py-2.5 text-sm font-bold text-[#0A0A0A] transition-colors hover:bg-value-shade sm:w-auto"
          >
            Probar con mi taller por WhatsApp →
          </WaLink>
        </div>
      </div>
    </section>
  );
}
