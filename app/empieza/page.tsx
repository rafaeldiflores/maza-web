import type { Metadata } from "next";
import Inicio from "../page";

/**
 * /empieza era la landing larga de los anuncios ("Probar 14 días gratis").
 * Con los talleres fundadores (13-10-2026) muestra la misma portada, para que
 * un anuncio o link antiguo no lleve a un enfoque que ya no corre.
 */
export const metadata: Metadata = {
  title: "MAZA — Gestión para talleres multirubro",
  alternates: { canonical: "/" },
};

export default function Empieza() {
  return <Inicio />;
}
