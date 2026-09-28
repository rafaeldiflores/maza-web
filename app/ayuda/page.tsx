import type { Metadata } from "next";
import { SitioHeader } from "@/components/sitio/sitio-header";
import { SitioFooter } from "@/components/sitio/sitio-footer";
import { CabeceraPagina } from "@/components/sitio/cabecera-pagina";
import { CierreCuenta } from "@/components/sitio/cierre-cuenta";
import { TRIAL_DIAS, WA_MESSAGES, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ayuda — MAZA",
  description:
    "Guías de MAZA: primeros pasos, recibir un vehículo, link y presupuesto, cola de trabajo, inventario, importar con IA, el mesón en el computador y el equipo.",
  alternates: { canonical: "/ayuda" },
};

/**
 * Guías cortas, una por tarea, con los nombres que la persona ve en la app
 * (botones, íconos, pantallas). Es la base de la documentación: cada guía
 * tiene su ancla (/ayuda#meson) para enlazarla desde WhatsApp o desde la app.
 * Si la app cambia un nombre o un cupo, se cambia acá.
 */
type Guia = { id: string; titulo: string; pasos: string[]; nota?: string };

const GUIAS: Guia[] = [
  {
    id: "primeros-pasos",
    titulo: "Primeros pasos",
    pasos: [
      "Crea tu cuenta en mazataller.com con «Crear cuenta», o descarga la app desde Google Play.",
      "Elige tu rubro (bicicletas, motos o autos) y el nombre del taller. El catálogo parte con servicios de ejemplo.",
      "En Servicios pon tus precios con el ícono de etiquetas, o importa tu lista completa (ver «Importar tu lista de precios»).",
      `Tienes ${TRIAL_DIAS} días de prueba con todo incluido. El plan se elige después, desde la app.`,
    ],
  },
  {
    id: "recibir",
    titulo: "Recibir un vehículo",
    pasos: [
      "Toca el botón + del centro (Ingreso).",
      "Escribe el teléfono del cliente: si ya está en tu cartera, MAZA lo reconoce y carga sus datos.",
      "Completa el vehículo, los servicios, las fotos del ingreso y la fecha de entrega. Puedes ingresar varios vehículos juntos.",
      "Al guardar, MAZA ofrece enviarle al cliente el link de seguimiento por WhatsApp y te lleva a la cola.",
    ],
  },
  {
    id: "link",
    titulo: "Link de seguimiento y presupuesto",
    pasos: [
      "El cliente abre el link y ve en qué etapa va su vehículo, sin llamarte.",
      "En Diagnóstico armas el presupuesto (puedes ofrecer hasta tres opciones y marcar una como recomendada) y lo envías.",
      "El cliente aprueba desde el mismo link con su nombre; te llega un aviso y la orden queda lista para reparar.",
      "Si el cliente prefiere conversarlo, lo avisa desde el link y te llega un botón para escribirle.",
    ],
  },
  {
    id: "cola",
    titulo: "La cola de trabajo",
    pasos: [
      "En Taller ves todas las órdenes por estado, de Recibida a Entregada, con lo más urgente arriba.",
      "Cada tarjeta dice qué sigue (armar presupuesto, reenviar link, escribirle) con su botón.",
      "Los cambios de estado se hacen desde el celular; en el computador la cola se consulta.",
    ],
  },
  {
    id: "inventario",
    titulo: "Inventario y recepción de compra",
    pasos: [
      "En Inventario, el ícono de descarga abre la Recepción de compra.",
      "Puedes cargar a mano, con lector de códigos, con una planilla Excel o CSV, con el XML del SII o con la foto o PDF de la factura.",
      "Con la factura, la IA lee productos, cantidades y costos y propone la categoría de los nuevos. Tú revisas antes de registrar.",
      "Los repuestos se descuentan solos del stock al iniciar la reparación.",
    ],
  },
  {
    id: "importar-precios",
    titulo: "Importar tu lista de precios",
    pasos: [
      "En Servicios, toca el ícono de documento arriba a la derecha.",
      "Sube una foto de tu pizarra o cartel, un PDF, o pega el mensaje donde tienes tus precios: la IA arma el catálogo con categorías y duración.",
      "También puedes subir una planilla Excel o CSV, sin IA.",
      "Revisas cada servicio (y los que se parecen a uno que ya tienes) antes de guardar.",
    ],
  },
  {
    id: "ia",
    titulo: "El asistente y el cupo de IA",
    pasos: [
      "El asistente (botón ✦) conoce tu taller: órdenes, clientes, stock y caja. Pregúntale como a un colega.",
      "Leer documentos con IA (facturas y listas de precios) tiene un cupo diario por taller: Taller Solo 3, Taller Pro 5, Empresa 10 y 1 durante la prueba.",
      "El cupo se renueva cada día. Planillas y XML se importan sin gastar cupo.",
    ],
  },
  {
    id: "meson",
    titulo: "MAZA en el computador del mesón",
    pasos: [
      "En el computador, abre mazataller.com y toca «Entrar»: aparece un código QR.",
      "En el celular, abre el menú de cuenta (tu inicial arriba a la derecha) y toca «Vincular mostrador».",
      "Escanea el código: el computador entra solo, sin escribir la contraseña.",
      "En la web están la venta de mostrador, el inventario, los balances y el catálogo, con los mismos datos en vivo.",
    ],
  },
  {
    id: "equipo",
    titulo: "Trabajar en equipo",
    pasos: [
      "Taller Pro permite 2 personas a la vez; Empresa, desde 3.",
      "Comparte el código de tu taller: la otra persona crea su cuenta y toca «¿Tienes un código de taller?».",
      "El mecánico trabaja las órdenes; precios, caja y borrados quedan para el dueño.",
    ],
  },
  {
    id: "cuenta",
    titulo: "Tu cuenta",
    pasos: [
      "Para entrar desde cualquier equipo: mazataller.com → Entrar.",
      "Si olvidaste la contraseña, en Entrar toca «¿Olvidaste tu contraseña?».",
      "Para eliminar tu cuenta y sus datos: mazataller.com/eliminar-cuenta.",
    ],
  },
];

export default function Ayuda() {
  return (
    <>
      <SitioHeader activa="/ayuda" />
      <main className="flex-1">
        <CabeceraPagina rotulo="Ayuda" titulo="Guías de MAZA, paso a paso">
          Cada guía es una tarea del día. Si algo no está acá, escríbenos por WhatsApp y te
          ayudamos a dejarlo listo.
        </CabeceraPagina>

        <div className="px-5 py-12 sm:px-8 sm:py-16">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[220px_1fr]">
            <nav aria-label="Guías" className="lg:sticky lg:top-24 lg:self-start">
              <p className="rotulo rotulo-sm mb-3">Guías</p>
              <ol className="flex flex-col border-l border-border-strong">
                {GUIAS.map((g) => (
                  <li key={g.id}>
                    <a href={`#${g.id}`} className="block py-1.5 pl-4 text-sm text-ink-muted hover:text-ink">
                      {g.titulo}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="flex flex-col gap-6">
              {GUIAS.map((g) => (
                <article key={g.id} id={g.id} className="caja scroll-mt-24 p-6 sm:p-8">
                  <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.25rem)] leading-none tracking-[0.01em] text-ink">
                    {g.titulo}
                  </h2>
                  <ol className="mt-5 flex flex-col">
                    {g.pasos.map((p, i) => (
                      <li key={i} className="grid grid-cols-[2.25rem_1fr] gap-2 border-t border-neutral-track py-3">
                        <span className="cifra text-sm text-value-shade">{String(i + 1).padStart(2, "0")}</span>
                        <span className="text-[15px] leading-relaxed text-ink-muted">{p}</span>
                      </li>
                    ))}
                  </ol>
                </article>
              ))}

              <div className="caja flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[15px] text-ink-muted">
                  <span className="font-bold text-ink">¿No encontraste lo que buscabas?</span> Te
                  respondemos por WhatsApp.
                </p>
                <a
                  href={waLink(WA_MESSAGES.general)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 shrink-0 items-center border border-ink px-5 text-sm font-bold text-ink"
                >
                  Escribir por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        <CierreCuenta />
      </main>
      <SitioFooter />
    </>
  );
}
