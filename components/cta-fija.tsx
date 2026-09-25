"use client";

import { useEffect, useState } from "react";
import { WhatsappIcon } from "./whatsapp-icon";

type Props = {
  href: string;
  texto: string;
  detalle: string;
};

/**
 * Botón fijo abajo, solo en el celular. Aparece al dejar atrás el hero y se
 * esconde cuando el cierre (o el pie) ya está a la vista: nunca hay dos
 * botones iguales en pantalla.
 */
export function CtaFija({ href, texto, detalle }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const zonas = ["inicio", "empezar", "pie"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (zonas.length === 0) return;

    const aLaVista = new Map<Element, boolean>();
    const obs = new IntersectionObserver((entradas) => {
      for (const e of entradas) aLaVista.set(e.target, e.isIntersecting);
      setVisible(zonas.every((z) => !aLaVista.get(z)));
    });
    zonas.forEach((z) => obs.observe(z));
    return () => obs.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-border-strong bg-surface px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 transition-transform duration-300 sm:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        data-cta="fija"
        tabIndex={visible ? 0 : -1}
        className="flex items-center justify-center gap-2 bg-value px-5 py-3 text-base font-bold text-splash-bg"
      >
        <WhatsappIcon />
        {texto}
      </a>
      <p className="rotulo mt-1.5 text-center text-[10px]">{detalle}</p>
    </div>
  );
}
