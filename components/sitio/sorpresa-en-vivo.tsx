"use client";

import { useState } from "react";
import Image from "next/image";
import { AndroidFrame } from "@/components/android-frame";
import { ComputerFrame } from "@/components/computer-frame";

type VistaId = "cliente" | "taller" | "meson" | "magia";

interface Vista {
  id: VistaId;
  etiqueta: string;
  insignia: string;
  colorInsignia: string;
  sorpresa: string;
}

const VISTAS: Vista[] = [
  {
    id: "cliente",
    etiqueta: "📱 Lo que ve tu cliente",
    insignia: "SIN INSTALAR NADA · APRUEBA EN 1 TOQUE",
    colorInsignia: "text-[#22A559]",
    sorpresa:
      "Abre su link en WhatsApp, ve las fotos de las piezas gastadas y elige entre Básico, Recomendada o Premium sin llamarte.",
  },
  {
    id: "taller",
    etiqueta: "🔧 Tu celular en taller",
    insignia: "COLA EN VIVO · AVANCE CON UNA MANO",
    colorInsignia: "text-[#FF9900]",
    sorpresa:
      "Sabes al instante qué vehículo ya aprobó desde el link, cuál está en diagnóstico y qué hay que entregar hoy.",
  },
  {
    id: "meson",
    etiqueta: "🖥️ Tu mesón en PC",
    insignia: "CONECTADO POR QR EN 1 SEGUNDO",
    colorInsignia: "text-[#FF9900]",
    sorpresa:
      "Sin contraseñas ni cables: escaneas un QR como en WhatsApp Web y administras caja, inventario y mostrador en pantalla ancha.",
  },
  {
    id: "magia",
    etiqueta: "🪄 1 Foto → Catálogo",
    insignia: "PUESTA EN MARCHA LLAVE EN MANO",
    colorInsignia: "text-[#22A559]",
    sorpresa:
      "No tipeas nada: nos mandas 1 foto de tu pizarra o cuaderno y te entregamos el taller con todos tus servicios y precios cargados.",
  },
];

export function SorpresaEnVivo() {
  const [vistaId, setVistaId] = useState<VistaId>("cliente");
  const activa = VISTAS.find((v) => v.id === vistaId) ?? VISTAS[0];

  return (
    <div className="flex flex-col items-center gap-3.5">
      {/* Selector instantáneo de perspectiva (Factor Sorpresa) */}
      <div
        role="tablist"
        aria-label="Explorar vistas de MAZA en vivo"
        className="grid w-full max-w-xl grid-cols-2 gap-1.5 rounded-sm border border-[#26262C] bg-[#0E0E11] p-1.5 sm:grid-cols-4"
      >
        {VISTAS.map((v) => {
          const esActiva = v.id === vistaId;
          return (
            <button
              key={v.id}
              type="button"
              role="tab"
              aria-selected={esActiva}
              onClick={() => setVistaId(v.id)}
              className={`rounded-xs px-2.5 py-2 font-mono text-[11px] font-bold transition-all cursor-pointer text-center truncate ${
                esActiva
                  ? "bg-[#FF9900] text-[#0A0A0A] shadow-sm"
                  : "bg-[#141417] text-[#9A9AA3] hover:border-[#FF9900]/40 hover:text-[#F2F2F5]"
              }`}
            >
              {v.etiqueta}
            </button>
          );
        })}
      </div>

      {/* Escenario visual sin recortes */}
      <div className="relative flex w-full items-center justify-center py-1">
        {vistaId === "cliente" && (
          <AndroidFrame aspect="aspect-[9/16]" className="max-w-[235px] sm:max-w-[255px]">
            <Image
              src="/screenshots/evidencia-link.png"
              alt="Link en vivo que recibe el cliente con fotos de hallazgos y 3 opciones de presupuesto"
              fill
              priority
              sizes="(max-width: 640px) 235px, 255px"
              className="object-contain object-top"
            />
          </AndroidFrame>
        )}

        {vistaId === "taller" && (
          <AndroidFrame aspect="aspect-[9/16]" className="max-w-[235px] sm:max-w-[255px]">
            <Image
              src="/screenshots/cola-moto.png"
              alt="Cola de trabajo en el celular del taller con aprobación en tiempo real"
              fill
              sizes="(max-width: 640px) 235px, 255px"
              className="object-contain object-top"
            />
          </AndroidFrame>
        )}

        {vistaId === "meson" && (
          <div className="w-full">
            <ComputerFrame
              file="screenshots/mostrador-pc.png"
              alt="Mostrador PC de MAZA sincronizado en tiempo real con el celular"
            />
          </div>
        )}

        {vistaId === "magia" && (
          <div className="grid w-full max-w-xl grid-cols-1 items-center gap-4 rounded-sm border border-[#26262C] bg-[#0E0E11] p-4 sm:grid-cols-12 sm:p-5">
            <div className="flex flex-col gap-2.5 sm:col-span-6">
              <span className="inline-flex w-fit items-center gap-1.5 rounded-xs border border-[#FF9900]/40 bg-[#FF9900]/10 px-2 py-0.5 font-mono text-[10px] font-bold text-[#FF9900]">
                PASO CERO · CERO PLANILLAS
              </span>
              <h3 className="font-display text-2xl sm:text-3xl leading-none text-[#F2F2F5]">
                DE TU PIZARRA A LA APP EN MINUTOS.
              </h3>
              <ol className="flex flex-col gap-2 border-l-2 border-[#26262C] pl-3 text-xs text-[#9A9AA3]">
                <li>
                  <strong className="text-[#F2F2F5]">1. Sacas 1 foto</strong> a tu lista de precios, cuaderno o PDF actual.
                </li>
                <li>
                  <strong className="text-[#F2F2F5]">2. Gemini IA + nuestro equipo</strong> estructuran tus servicios y repuestos.
                </li>
                <li>
                  <strong className="text-[#22A559]">3. Entras a trabajar</strong> con todo tu catálogo listo desde el día 1.
                </li>
              </ol>
            </div>
            <div className="flex justify-center sm:col-span-6">
              <AndroidFrame aspect="aspect-[9/19.5]" className="max-w-[195px] sm:max-w-[210px]">
                <Image
                  src="/screenshots/servicios.png"
                  alt="Catálogo de servicios cargado en MAZA con precios y tiempos estimados"
                  fill
                  sizes="210px"
                  className="object-contain object-top"
                />
              </AndroidFrame>
            </div>
          </div>
        )}
      </div>

      {/* Cápsula explicativa de 1 línea */}
      <div className="flex w-full max-w-xl flex-col items-center gap-1 rounded-sm border border-[#26262C] bg-[#141417] px-3.5 py-2.5 text-center">
        <span className={`font-mono text-[10px] font-bold uppercase tracking-wider ${activa.colorInsignia}`}>
          ● {activa.insignia}
        </span>
        <p className="text-xs leading-snug text-[#F2F2F5]">{activa.sorpresa}</p>
      </div>
    </div>
  );
}
