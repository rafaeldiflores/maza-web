"use client";

import { useEffect, useRef, useState } from "react";
import { track } from "@vercel/analytics";
import { AndroidFrame } from "./android-frame";
import { RUBROS, useRubro, type Rubro } from "./rubro-contexto";

/**
 * Página real del cliente con una orden de ejemplo (GET /o/demo en el Worker
 * de Maza-app). Es la misma que usa la app para "Mira lo que ve tu cliente":
 * nunca puede diferir de lo que recibe un cliente de verdad.
 */
const DEMO_URL = "https://mazataller.com/o/demo";
/** Ancho al que se dibuja la página real; después se escala al marco. */
const ANCHO_PAGINA = 375;

const CLIENTE = "Diego Morales";

/** Qué hacer en la demo, en tres pasos cortos. */
const PASOS = ["Quita lo que no quieras", "Escribe tu nombre", "Aprueba"];

/** Se reinicia al cambiar de rubro (key): la página del cliente parte de cero. */
export function OrdenMockup() {
  const { rubro } = useRubro();
  const r: Rubro = rubro ?? "moto";
  return <Demo key={r} r={r} />;
}

function Demo({ r }: { r: Rubro }) {
  const [tab, setTab] = useState<"cliente" | "taller">("cliente");
  const [aprobado, setAprobado] = useState(false);

  // La demo real, al aprobar, se recarga con ?aprobado=1. Mismo origen en
  // producción (mazataller.com), así que se puede leer; en otro origen el
  // acceso tira y simplemente no se detecta.
  const alCargar = (e: React.SyntheticEvent<HTMLIFrameElement>) => {
    try {
      const busca = e.currentTarget.contentWindow?.location.search ?? "";
      if (busca.includes("aprobado=1") && !aprobado) {
        setAprobado(true);
        track("demo", { accion: "aprobar", rubro: r });
        if (window.innerWidth < 640) setTimeout(() => setTab("taller"), 900);
      }
    } catch {
      /* origen distinto: sin detección */
    }
  };

  return (
    <div className="flex w-full flex-col items-center">
      <p className="rotulo mb-2 flex items-center gap-2 border border-border-strong bg-surface px-3 py-1.5 text-[11px] text-ink">
        <span className={`h-2 w-2 rounded-full ${aprobado ? "bg-success" : "bg-value"}`} />
        {aprobado ? "Aprobado: mira lo que te llega" : "Pruébalo: tú eres el cliente"}
      </p>
      <ol className="mb-4 flex flex-wrap justify-center gap-x-3 gap-y-1 text-xs text-ink-muted">
        {PASOS.map((p, i) => (
          <li key={p}>
            <span className="font-bold text-ink">{i + 1}.</span> {p}
          </li>
        ))}
      </ol>

      {/* Pestañas solo en el celular; en pantallas grandes van lado a lado. */}
      <div className="mb-4 flex w-full max-w-[320px] border border-border-strong bg-surface p-1 sm:hidden">
        {(["cliente", "taller"] as const).map((t, i) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={`relative flex-1 py-1.5 text-center text-xs font-bold ${
              tab === t ? "bg-ink text-app-bg" : "text-ink-muted"
            }`}
          >
            {i + 1}. {t === "cliente" ? "Tu cliente" : "Tu taller"}
            {t === "taller" && aprobado && (
              <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-success" />
            )}
          </button>
        ))}
      </div>

      <div className="grid w-full grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:gap-5 xl:gap-8">
        <div className={`flex-col items-center ${tab === "taller" ? "hidden sm:flex" : "flex"}`}>
          <Rotulo paso="Tu cliente" titulo="Le llega un link por WhatsApp" />
          <AndroidFrame className="max-w-[280px] sm:max-w-[290px]" aspect="aspect-[9/18.8]">
            <PaginaReal rubro={r} onLoad={alCargar} />
          </AndroidFrame>
        </div>

        <div className={`flex-col items-center ${tab === "cliente" ? "hidden sm:flex" : "flex"}`}>
          <Rotulo paso="Tu taller" titulo="Te enteras al instante" />
          <AndroidFrame className="max-w-[280px] sm:max-w-[290px]" aspect="aspect-[9/18.8]">
            <VistaTaller vehiculo={RUBROS[r].vehiculo} />
          </AndroidFrame>
        </div>
      </div>
    </div>
  );
}

function Rotulo({ paso, titulo }: { paso: string; titulo: string }) {
  return (
    <div className="mb-2 text-center">
      <span className="rotulo text-[9px] text-ink-faint">{paso}</span>
      <p className="text-xs font-bold text-ink">{titulo}</p>
    </div>
  );
}

/** La página real dentro del marco, dibujada a 375 px y escalada al ancho. */
function PaginaReal({
  rubro,
  onLoad,
}: {
  rubro: Rubro;
  onLoad: (e: React.SyntheticEvent<HTMLIFrameElement>) => void;
}) {
  const caja = useRef<HTMLDivElement>(null);
  const [escala, setEscala] = useState(0.7);

  useEffect(() => {
    const el = caja.current;
    if (!el) return;
    const obs = new ResizeObserver(([e]) => setEscala(e.contentRect.width / ANCHO_PAGINA));
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // #card-presupuesto: abre en lo que hay que tocar; la línea de tiempo queda
  // arriba, a un scroll.
  const src = `${DEMO_URL}?r=${rubro}&n=${encodeURIComponent("Taller Central")}#card-presupuesto`;

  return (
    <div ref={caja} className="h-full w-full overflow-hidden bg-app-bg">
      <iframe
        src={src}
        title="Página que recibe el cliente, con una orden de ejemplo"
        loading="lazy"
        onLoad={onLoad}
        style={{
          width: ANCHO_PAGINA,
          height: `${100 / escala}%`,
          transform: `scale(${escala})`,
          transformOrigin: "0 0",
        }}
        className="border-0"
      />
    </div>
  );
}

/**
 * Lo que ve el taller cuando el cliente aprueba, con los textos reales de la
 * app: la notificación (notificarPresupuestoAprobado en el Worker) y el panel
 * de respuesta de la orden (orden.page.html). Al aprobar NO se descuenta
 * stock: eso pasa en la reparación o la entrega.
 */
function VistaTaller({ vehiculo }: { vehiculo: string }) {
  return (
    <div className="flex h-full flex-col gap-3 bg-app-bg px-3 pb-6 pt-4 text-xs">
      {/* Notificación push */}
      <div className="flex gap-2.5 rounded-xl border border-border-soft bg-surface p-3 shadow-sm">
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-ink text-[10px] font-bold text-app-bg">
          M
        </span>
        <div className="min-w-0">
          <p className="text-[10px] text-ink-faint">MAZA · ahora</p>
          <p className="font-semibold leading-snug text-ink">{CLIENTE} aprobó el presupuesto</p>
          <p className="text-ink-muted">{vehiculo} · Presupuesto</p>
        </div>
      </div>

      {/* La orden en la app */}
      <div className="flex flex-1 flex-col gap-2.5 rounded-xl border border-border-soft bg-surface p-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-sm font-bold text-ink">{vehiculo}</p>
            <p className="text-ink-muted">{CLIENTE}</p>
          </div>
          <span className="shrink-0 rounded bg-success/15 px-1.5 py-0.5 text-[10px] font-bold text-success">
            Por iniciar
          </span>
        </div>

        <div className="rounded-lg border border-success/40 bg-success/10 p-2.5">
          <p className="font-semibold text-ink">✓ {CLIENTE} aprobó desde el link</p>
          <p className="mt-0.5 text-ink-muted">Firmó como «{CLIENTE}»</p>
          <p className="text-ink-muted">Hace un momento · desde Android</p>
          <p className="mt-1.5 font-semibold text-ink underline underline-offset-2">Ver constancia</p>
        </div>

        <p className="leading-snug text-ink-muted">
          Queda la constancia con su nombre, la fecha y lo que aprobó. Sin
          llamadas ni “dale, hazlo” por audio.
        </p>

        <span className="mt-auto block bg-value py-2.5 text-center text-[13px] font-bold text-splash-bg">
          Iniciar reparación
        </span>
      </div>
    </div>
  );
}
