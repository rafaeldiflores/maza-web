// BORRADOR: revisar con asesoría legal antes de cobrar
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Términos y condiciones — MAZA",
  description:
    "Condiciones de uso de MAZA para talleres multirubro: planes, pagos, datos de clientes e IA.",
};

function Section({
  n,
  title,
  children,
}: {
  n: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <p className="titulo-seccion">
        {n.toString().padStart(2, "0")} · {title}
      </p>
      <div className="mt-4 flex flex-col gap-3 text-[15px] leading-relaxed text-ink-muted">
        {children}
      </div>
    </section>
  );
}

export default function TerminosPage() {
  return (
    <>
      <Header />
      <main className="flex-1 px-5 py-14 sm:px-8 sm:py-20">
        <div className="caja mx-auto max-w-3xl p-7 sm:p-12">
          <h1 className="text-3xl font-bold tracking-[-0.01em] text-ink sm:text-4xl">
            Términos y condiciones
          </h1>
          <p className="rotulo mt-2 text-[10px]">
            Última actualización: 12 de septiembre de 2026
          </p>

          <div className="mt-10 flex flex-col gap-10">
            <Section n={1} title="Objeto">
              <p>
                Estos términos regulan el uso de{" "}
                <strong className="text-ink">MAZA</strong>, una aplicación de
                gestión para talleres multirubro,
                desarrollada por{" "}
                <strong className="text-ink">Rafael Di Fiore</strong>. Al
                crear una cuenta o usar la aplicación, aceptas estos términos.
                Si no estás de acuerdo, no debes usar MAZA.
              </p>
            </Section>

            <Section n={2} title="Cuenta y responsabilidad del usuario">
              <p>
                Eres responsable de mantener la confidencialidad de tus
                credenciales de acceso y de toda la actividad realizada desde
                tu cuenta. Debes entregar información real y mantenerla
                actualizada. MAZA está pensado para uso profesional por
                dueños de taller y su equipo, no para consumidores finales.
              </p>
              <p>
                Eres responsable de la exactitud de los datos que cargas en el
                sistema (clientes, vehículos, servicios, precios, inventario):
                MAZA es una herramienta de gestión y no valida ni corrige esa
                información.
              </p>
            </Section>

            <Section n={3} title="Planes, prueba gratuita y pagos">
              <p>
                MAZA ofrece un período de prueba gratuito de 14 días con
                funciones limitadas. Al finalizar, la cuenta queda bloqueada
                hasta contratar un plan pago (Taller Solo, Taller Pro o Empresa).
                Los precios vigentes se muestran en la aplicación y en este
                sitio, en pesos chilenos (CLP), y pueden actualizarse con
                aviso previo.
              </p>
              <p>
                Los pagos de los planes de MAZA se procesan a través de{" "}
                <strong className="text-ink">Mercado Pago</strong>, con
                renovación periódica (mensual o anual) mientras la
                suscripción esté activa. El ciclo anual se cobra por
                adelantado con el descuento indicado en cada momento.
              </p>
              <p>
                Puedes cancelar tu suscripción cuando quieras; la cancelación
                aplica hacia el próximo ciclo de cobro y no genera reembolsos
                por el período parcial ya pagado, salvo que la ley chilena
                aplicable (Ley N.º 19.496 de Protección de los Derechos de
                los Consumidores) disponga lo contrario para tu caso.
              </p>
            </Section>

            <Section n={4} title="Datos de tus clientes">
              <p>
                Como dueño del taller, tú decides qué datos de tus clientes
                cargas en MAZA (nombre, teléfono, vehículos) y eres el{" "}
                <strong className="text-ink">responsable</strong> de ese
                tratamiento frente a tus clientes y frente a la ley,
                incluyendo la Ley N.º 19.628 sobre Protección de la Vida
                Privada y, en lo que corresponda según su entrada en vigencia,
                la Ley N.º 21.719 de Protección de Datos Personales.
              </p>
              <p>
                MAZA actúa como{" "}
                <strong className="text-ink">encargado del tratamiento</strong>
                : almacena y procesa esos datos únicamente para prestarte el
                servicio, con las medidas de seguridad descritas en la{" "}
                <Link href="/privacidad" className="text-value-shade hover:underline">
                  Política de privacidad
                </Link>
                . Es tu responsabilidad contar con la habilitación necesaria
                frente a tus clientes para registrar y usar sus datos en la
                app.
              </p>
            </Section>

            <Section n={5} title="Asistente de inteligencia artificial">
              <p>
                El asistente de IA entrega diagnósticos, sugerencias de
                servicio y textos orientativos a partir de los datos de tu
                taller. Sus respuestas son una ayuda, no un reemplazo del
                criterio técnico del mecánico ni de la evaluación directa del
                vehículo. MAZA no se hace responsable por decisiones tomadas
                únicamente en base a lo que sugiere el asistente. Los mensajes
                a clientes que redacta la IA siempre requieren tu revisión y
                envío manual: nunca se envían solos.
              </p>
            </Section>

            <Section n={6} title="Cobro del taller a sus clientes (Mercado Pago Connect)">
              <p>
                Desde el plan Taller Pro, puedes vincular tu propia cuenta de
                Mercado Pago para cobrar presupuestos directamente a tus
                clientes desde el link de seguimiento. Esa relación de cobro
                es exclusivamente entre tu taller y tu cliente:{" "}
                <strong className="text-ink">
                  MAZA no es parte de esa transacción, no intermedia los
                  fondos
                </strong>{" "}
                y estos se depositan directo en tu cuenta de Mercado Pago.
                MAZA no emite boletas, facturas ni ningún otro documento
                tributario por esos cobros: esa obligación es tuya frente a
                tus clientes y frente al SII.
              </p>
            </Section>

            <Section n={7} title="Disponibilidad del servicio">
              <p>
                MAZA se ofrece &quot;tal cual&quot; y &quot;según
                disponibilidad&quot;. Hacemos
                lo posible por mantener el servicio disponible y estable,
                pero no garantizamos continuidad ininterrumpida: puede haber
                mantenciones, fallas de terceros (Firebase, Mercado Pago,
                proveedores de IA) o cortes fuera de nuestro control.
              </p>
            </Section>

            <Section n={8} title="Limitación de responsabilidad">
              <p>
                En la medida permitida por la ley chilena, MAZA no será
                responsable por daños indirectos, lucro cesante o pérdida de
                datos derivados del uso o la imposibilidad de uso de la
                aplicación. Recomendamos exportar periódicamente tus datos de
                clientes e inventario desde Configuración → Exportar datos.
              </p>
            </Section>

            <Section n={9} title="Suspensión por uso indebido">
              <p>
                Podemos suspender o cerrar una cuenta que use la aplicación
                para fines distintos a la gestión de un taller, que intente
                vulnerar la seguridad del sistema, que abuse del asistente de
                IA fuera de un uso justo, o que incumpla gravemente estos
                términos.
              </p>
            </Section>

            <Section n={10} title="Eliminación de cuenta">
              <p>
                Puedes eliminar tu cuenta y los datos asociados en cualquier
                momento desde{" "}
                <a
                  href="https://mazataller.com/eliminar-cuenta"
                  target="_blank"
                  rel="noreferrer"
                  className="text-value-shade hover:underline"
                >
                  mazataller.com/eliminar-cuenta
                </a>
                . Al eliminar la cuenta se borran tu perfil, los datos de tus
                clientes y vehículos, el inventario y el historial operativo
                del taller. Los registros de pago se conservan por el plazo
                exigido por la normativa contable y tributaria chilena, aun
                después de eliminada la cuenta.
              </p>
            </Section>

            <Section n={11} title="Propiedad intelectual">
              <p>
                El software, el diseño, la marca MAZA y los contenidos de este
                sitio son propiedad de Rafael Di Fiore. Los datos que cargas
                en la aplicación (clientes, inventario, historial de tu
                taller) son tuyos; no te reclamamos ningún derecho sobre
                ellos más allá de lo necesario para prestarte el servicio.
              </p>
            </Section>

            <Section n={12} title="Modificaciones">
              <p>
                Podemos actualizar estos términos ocasionalmente. Te
                notificaremos cualquier cambio significativo a través de la
                aplicación. El uso continuado de MAZA después de un cambio
                implica su aceptación.
              </p>
            </Section>

            <Section n={13} title="Ley aplicable y jurisdicción">
              <p>
                Estos términos se rigen por las leyes de la República de
                Chile. Cualquier controversia derivada de su interpretación o
                aplicación se someterá a los tribunales ordinarios de
                justicia de la ciudad de Santiago.
              </p>
            </Section>

            <Section n={14} title="Contacto">
              <p>
                Para consultas sobre estos términos, escríbenos a{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-value-shade hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>{" "}
                o contáctanos por WhatsApp al{" "}
                <a
                  href={waLink("Hola, tengo una consulta sobre los términos de MAZA.")}
                  target="_blank"
                  rel="noreferrer"
                  className="text-value-shade hover:underline"
                >
                  {CONTACT_PHONE_DISPLAY}
                </a>
                .
              </p>
            </Section>
          </div>

          <Link
            href="/"
            className="mt-12 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-muted hover:text-ink"
          >
            ← Volver al inicio
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
