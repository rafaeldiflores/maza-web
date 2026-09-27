"use client";

import { createContext, useContext, useState } from "react";

export type Rubro = "bici" | "moto" | "auto";

export type DatosRubro = {
  label: string;
  /** Para el mensaje de WhatsApp: "…en mi taller de motos". */
  taller: string;
  /**
   * El mismo vehículo que arma la demo real del Worker (DEMO_POR_RUBRO en
   * Maza-app/cloudflare-worker/worker.js): si cambia allá, cambia acá.
   */
  vehiculo: string;
};

export const RUBROS: Record<Rubro, DatosRubro> = {
  bici: { label: "Bici", taller: "taller de bicicletas", vehiculo: "Trek Marlin 7" },
  moto: { label: "Moto", taller: "taller de motos", vehiculo: "Honda CB 190R" },
  auto: { label: "Auto", taller: "taller de autos", vehiculo: "Chevrolet Onix" },
};

type Valor = { rubro: Rubro | null; setRubro: (r: Rubro) => void };

const Contexto = createContext<Valor>({ rubro: null, setRubro: () => {} });

export function RubroProvider({ children }: { children: React.ReactNode }) {
  const [rubro, setRubro] = useState<Rubro | null>(null);
  return <Contexto.Provider value={{ rubro, setRubro }}>{children}</Contexto.Provider>;
}

export const useRubro = () => useContext(Contexto);
