"use client";

import { createContext, useContext, useState } from "react";

export type Rubro = "bici" | "moto" | "auto";

export type DemoItem = {
  id: "diag" | "frenos" | "repuesto";
  name: string;
  category: "diagnostico" | "servicio" | "repuesto";
  price: number;
};

export type DatosRubro = {
  label: string;
  /** Para el mensaje de WhatsApp: "…en mi taller de motos". */
  taller: string;
  vehiculo: string;
  modelo: string;
  cliente: string;
  repuesto: string;
  items: DemoItem[];
};

/**
 * La demo del hero cambia según el rubro elegido: vehículo, trabajos y
 * precios de ese tipo de taller. Sin elección se muestra moto.
 */
export const RUBROS: Record<Rubro, DatosRubro> = {
  bici: {
    label: "Bici",
    taller: "taller de bicicletas",
    vehiculo: "Trek Marlin 7 · 2023",
    modelo: "Trek Marlin 7",
    cliente: "Diego Morales",
    repuesto: "Pastillas Shimano",
    items: [
      { id: "diag", name: "Revisión y ajuste general", category: "diagnostico", price: 8000 },
      { id: "frenos", name: "Cambio pastillas freno de disco (mano de obra)", category: "servicio", price: 10000 },
      { id: "repuesto", name: "Pastillas Shimano de resina (repuesto)", category: "repuesto", price: 9000 },
    ],
  },
  moto: {
    label: "Moto",
    taller: "taller de motos",
    vehiculo: "Honda CB 500 · 2021",
    modelo: "Honda CB 500 F",
    cliente: "Diego Morales",
    repuesto: "Pastillas OEM",
    items: [
      { id: "diag", name: "Diagnóstico y escaneo general", category: "diagnostico", price: 8000 },
      { id: "frenos", name: "Cambio pastillas de freno (mano de obra)", category: "servicio", price: 22000 },
      { id: "repuesto", name: "Pastillas delanteras OEM (repuesto)", category: "repuesto", price: 15000 },
    ],
  },
  auto: {
    label: "Auto",
    taller: "taller de autos",
    vehiculo: "Toyota Yaris · 2019",
    modelo: "Toyota Yaris",
    cliente: "Diego Morales",
    repuesto: "Pastillas OEM",
    items: [
      { id: "diag", name: "Diagnóstico con escáner OBD", category: "diagnostico", price: 15000 },
      { id: "frenos", name: "Cambio pastillas de freno (mano de obra)", category: "servicio", price: 30000 },
      { id: "repuesto", name: "Pastillas delanteras OEM (repuesto)", category: "repuesto", price: 35000 },
    ],
  },
};

type Valor = { rubro: Rubro | null; setRubro: (r: Rubro) => void };

const Contexto = createContext<Valor>({ rubro: null, setRubro: () => {} });

export function RubroProvider({ children }: { children: React.ReactNode }) {
  const [rubro, setRubro] = useState<Rubro | null>(null);
  return <Contexto.Provider value={{ rubro, setRubro }}>{children}</Contexto.Provider>;
}

export const useRubro = () => useContext(Contexto);
