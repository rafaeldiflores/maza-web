import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidad — MAZA",
  description:
    "Cómo MAZA recopila, usa y protege los datos de talleres de autos, motos y bicicletas.",
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

export default function PrivacidadPage() {
  return (
    <>
      <Header />
      <main className="flex-1 px-5 py-14 sm:px-8 sm:py-20">
        <div className="caja mx-auto max-w-3xl p-7 sm:p-12">
          <h1 className="text-3xl font-bold tracking-[-0.01em] text-ink sm:text-4xl">
            Política de privacidad
          </h1>
          <p className="rotulo mt-2 text-[10px]">
            Última actualización: 26 de septiembre de 2026
          </p>

          <div className="mt-10 flex flex-col gap-10">
            <Section n={1} title="Quiénes somos">
              <p>
                MAZA es una aplicación de gestión para talleres de autos,
                motos y bicicletas, desarrollada por{" "}
                <strong className="text-ink">Rafael Di Fiore</strong>. Para
                consultas sobre privacidad, escríbenos a{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-value-shade hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </Section>

            <Section n={2} title="Datos que recopilamos">
              <p>
                Recopilamos únicamente la información necesaria para que la
                aplicación funcione:
              </p>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>
                  <strong className="text-ink">Datos de cuenta:</strong>{" "}
                  dirección de correo electrónico y contraseña, o cuenta de
                  Google si usas el inicio de sesión con Google.
                </li>
                <li>
                  <strong className="text-ink">Perfil del taller:</strong>{" "}
                  nombre, apellido, nombre del taller, ciudad, número de
                  teléfono y logotipo del taller (imagen opcional).
                </li>
                <li>
                  <strong className="text-ink">Datos de clientes:</strong>{" "}
                  nombre, teléfono y vehículos registrados por el dueño del
                  taller, ingresados manualmente por el usuario de la app o
                  importados desde la agenda del teléfono (ver abajo).
                </li>
                <li>
                  <strong className="text-ink">Contactos del teléfono:</strong>{" "}
                  solo si el dueño del taller usa la opción de importar
                  clientes, la app de Android pide permiso para leer la agenda.
                  La agenda se lee en el propio teléfono y se muestra como una
                  lista; únicamente el nombre y el número de celular de los
                  contactos que el dueño marca se guardan como clientes del
                  taller. El resto de la agenda no sale del dispositivo ni se
                  almacena. El permiso se puede revocar en cualquier momento
                  desde los ajustes de Android.
                </li>
                <li>
                  <strong className="text-ink">Fotos de ingreso:</strong>{" "}
                  las fotos del vehículo que se toman al recibirlo (frente,
                  lados, tablero, daños) quedan guardadas en el teléfono que
                  las tomó; en la base de datos solo se guarda la referencia a
                  cada archivo. La app pide permiso de cámara para tomarlas.
                </li>
                <li>
                  <strong className="text-ink">Datos operativos:</strong>{" "}
                  registros de servicios, reparaciones, presupuestos, repuestos,
                  abonos, ventas, gastos y cierres de caja del taller.
                </li>
                <li>
                  <strong className="text-ink">Aceptación de los términos:</strong>{" "}
                  al crear la cuenta guardamos qué versión de los Términos de
                  servicio y de esta política aceptaste, y la fecha.
                </li>
                <li>
                  <strong className="text-ink">Datos técnicos:</strong>{" "}
                  un identificador del dispositivo para enviarte notificaciones
                  (por ejemplo, cuando un cliente aprueba un presupuesto), y
                  eventos de uso de la app (qué pantallas y funciones se usan)
                  para mejorarla. No usamos publicidad.
                </li>
                <li>
                  <strong className="text-ink">
                    Consultas al asistente IA:
                  </strong>{" "}
                  el texto que escribes en el chat del asistente se envía a un
                  servicio de inteligencia artificial para generar respuestas.
                  Para responder, el asistente puede usar datos de tu taller
                  (órdenes, inventario, servicios). Aplicamos filtros para no
                  enviar datos personales innecesarios de tus clientes.
                </li>
              </ul>
            </Section>

            <Section n={3} title="Cómo usamos los datos">
              <p>Usamos los datos exclusivamente para:</p>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>
                  Proveer las funcionalidades de la app: gestión de clientes,
                  inventario, servicios y balances.
                </li>
                <li>
                  Generar el resumen diario y las respuestas del asistente IA
                  a partir de los datos del taller.
                </li>
                <li>Identificarte como usuario y mantener tu sesión activa.</li>
                <li>
                  Mostrar a tu cliente el seguimiento de su orden y su
                  presupuesto, a través del link que tú le envías.
                </li>
                <li>
                  Enviarte notificaciones del taller y mejorar la app a partir
                  de métricas de uso agregadas.
                </li>
              </ul>
              <p>
                No vendemos, arrendamos ni compartimos tus datos personales
                con terceros con fines comerciales.
              </p>
            </Section>

            <Section n={4} title="Servicios de terceros">
              <p>La aplicación utiliza los siguientes servicios externos:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <span className="rotulo inline-block border border-border-strong px-2 py-0.5 text-[10px] text-value-shade">
                    Firebase (Google)
                  </span>{" "}
                  — autenticación, base de datos (Firestore), notificaciones
                  (Cloud Messaging), métricas de uso (Analytics) y el modelo
                  de inteligencia artificial principal del asistente (Gemini,
                  mediante Firebase AI Logic). Política de privacidad:{" "}
                  <a
                    href="https://firebase.google.com/support/privacy"
                    target="_blank"
                    rel="noreferrer"
                    className="text-value-shade hover:underline"
                  >
                    firebase.google.com/support/privacy
                  </a>
                </li>
                <li>
                  <span className="rotulo inline-block border border-border-strong px-2 py-0.5 text-[10px] text-value-shade">
                    Anthropic Claude
                  </span>{" "}
                  — modelo de inteligencia artificial de respaldo para el
                  asistente, consultado a través de un servidor propio
                  (Cloudflare Workers) sin exponer claves al dispositivo.
                  Política de privacidad:{" "}
                  <a
                    href="https://www.anthropic.com/privacy"
                    target="_blank"
                    rel="noreferrer"
                    className="text-value-shade hover:underline"
                  >
                    anthropic.com/privacy
                  </a>
                </li>
                <li>
                  <span className="rotulo inline-block border border-border-strong px-2 py-0.5 text-[10px] text-value-shade">
                    Cloudflare
                  </span>{" "}
                  — servidor propio de MAZA (Workers): intermedia las consultas
                  de IA, sirve el link de seguimiento que ve tu cliente y
                  procesa los avisos de Mercado Pago. También busca en el
                  catálogo del taller (Workers AI y Vectorize). Política de
                  privacidad:{" "}
                  <a
                    href="https://www.cloudflare.com/privacypolicy/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-value-shade hover:underline"
                  >
                    cloudflare.com/privacypolicy
                  </a>
                </li>
                <li>
                  <span className="rotulo inline-block border border-border-strong px-2 py-0.5 text-[10px] text-value-shade">
                    Mercado Pago
                  </span>{" "}
                  — procesa los pagos: la contratación de planes de MAZA (desde
                  la web) y, si el taller lo conecta, el cobro de reparaciones a
                  sus clientes. Los datos de tarjeta los recibe y procesa
                  Mercado Pago; MAZA no los ve ni los guarda. Política de
                  privacidad:{" "}
                  <a
                    href="https://www.mercadopago.cl/privacidad"
                    target="_blank"
                    rel="noreferrer"
                    className="text-value-shade hover:underline"
                  >
                    mercadopago.cl/privacidad
                  </a>
                </li>
              </ul>
              <p>
                Para escribirle a un cliente por WhatsApp, la app abre
                WhatsApp en tu teléfono con el mensaje listo: MAZA no envía
                datos a WhatsApp ni a Meta.
              </p>
            </Section>

            <Section n={5} title="Datos de los clientes del taller">
              <p>
                Los datos de tus clientes (nombre, teléfono, vehículos,
                órdenes) los ingresas tú como taller. Respecto de esos datos,
                el taller es el responsable y MAZA actúa como encargado: los
                guarda y los procesa solo para prestarte el servicio, nunca
                para fines propios.
              </p>
              <p>
                El link de seguimiento que le envías a tu cliente muestra el
                estado de su orden, el presupuesto y el comprobante, y le
                permite aprobar o pagar. Funciona para quien tenga el link, que
                está firmado, no es adivinable y tiene fecha de vencimiento.
                Envíalo solo a tu cliente.
              </p>
            </Section>

            <Section n={6} title="Almacenamiento y seguridad">
              <p>
                Tus datos se almacenan en servidores de Google Firebase
                (Firestore) con acceso restringido: cada usuario solo puede
                leer y modificar sus propios datos. Las comunicaciones entre
                la app y los servidores se realizan siempre mediante
                conexiones cifradas (HTTPS/TLS).
              </p>
              <p>
                El logotipo del taller se almacena como imagen comprimida en tu
                perfil. Las fotos de ingreso de los vehículos se guardan en el
                teléfono que las tomó y no se suben a nuestros servidores. Las
                credenciales de Mercado Pago del taller se guardan cifradas y
                fuera del perfil.
              </p>
            </Section>

            <Section n={7} title="Tus derechos">
              <p>En cualquier momento puedes:</p>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>
                  <strong className="text-ink">Acceder</strong> a todos tus
                  datos desde la propia aplicación (secciones Clientes,
                  Inventario, Balances).
                </li>
                <li>
                  <strong className="text-ink">Exportar</strong> tus datos de
                  clientes e inventario en formato Excel desde Configuración →
                  Respaldo.
                </li>
                <li>
                  <strong className="text-ink">Modificar</strong> tu
                  información de perfil desde la sección Perfil.
                </li>
                <li>
                  <strong className="text-ink">Revocar permisos</strong> de
                  contactos, cámara y notificaciones desde los ajustes de
                  Android, cuando quieras.
                </li>
                <li>
                  <strong className="text-ink">Eliminar</strong> tu cuenta y
                  todos los datos asociados desde{" "}
                  <a
                    href="https://acceso-maza.web.app/eliminar-cuenta"
                    target="_blank"
                    rel="noreferrer"
                    className="text-value-shade hover:underline"
                  >
                    acceso-maza.web.app/eliminar-cuenta
                  </a>
                  . Se borran tu perfil, los datos de tus clientes y
                  vehículos, el inventario y el historial operativo del
                  taller; los registros de pago se conservan por el plazo
                  exigido por la normativa contable y tributaria chilena. Si
                  tienes dudas, escríbenos a{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-value-shade hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  .
                </li>
              </ul>
            </Section>

            <Section n={8} title="Datos de menores">
              <p>
                MAZA está destinado a uso profesional por adultos. No
                recopilamos intencionalmente datos de menores de 13 años. Si
                detectas que un menor ha registrado datos en la app,
                contáctanos para eliminarlos.
              </p>
            </Section>

            <Section n={9} title="Cambios a esta política">
              <p>
                Podemos actualizar esta política ocasionalmente. Te
                notificaremos cualquier cambio significativo a través de la
                aplicación. El uso continuado de MAZA después de los cambios
                implica la aceptación de la nueva política.
              </p>
            </Section>

            <Section n={10} title="Contacto">
              <p>
                Para cualquier consulta relacionada con privacidad o
                eliminación de datos, escríbenos a{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-value-shade hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>{" "}
                o contáctanos por WhatsApp al{" "}
                <a
                  href={waLink("Hola, tengo una consulta sobre privacidad en MAZA.")}
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
