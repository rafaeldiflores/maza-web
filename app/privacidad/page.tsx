import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

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
            Última actualización: 21 de agosto de 2026
          </p>

          <div className="mt-10 flex flex-col gap-10">
            <Section n={1} title="Quiénes somos">
              <p>
                MAZA es una aplicación de gestión para talleres de autos,
                motos y bicicletas, desarrollada por{" "}
                <strong className="text-ink">Rafael Di Fiore</strong>. Para
                consultas sobre privacidad, escríbenos a{" "}
                <a
                  href="mailto:rafasandiflores2@gmail.com"
                  className="text-value-shade hover:underline"
                >
                  rafasandiflores2@gmail.com
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
                  taller, ingresados manualmente por el usuario de la app.
                </li>
                <li>
                  <strong className="text-ink">Datos operativos:</strong>{" "}
                  registros de servicios, reparaciones, repuestos e ingresos
                  del taller.
                </li>
                <li>
                  <strong className="text-ink">
                    Consultas al asistente IA:
                  </strong>{" "}
                  el texto que escribes en el chat del asistente se envía a un
                  servicio de inteligencia artificial para generar respuestas.
                  No incluye datos personales de terceros salvo que tú los
                  escribas.
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
                  — autenticación de usuarios y base de datos (Firestore).
                  Política de privacidad:{" "}
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
                  — modelo de inteligencia artificial que procesa las
                  consultas del asistente, enviadas a través de un proxy
                  propio (Cloudflare Workers) sin exponer claves de API al
                  dispositivo. Política de privacidad:{" "}
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
                    Cloudflare Workers
                  </span>{" "}
                  — infraestructura proxy para las solicitudes al asistente
                  IA. Política de privacidad:{" "}
                  <a
                    href="https://www.cloudflare.com/privacypolicy/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-value-shade hover:underline"
                  >
                    cloudflare.com/privacypolicy
                  </a>
                </li>
              </ul>
            </Section>

            <Section n={5} title="Almacenamiento y seguridad">
              <p>
                Tus datos se almacenan en servidores de Google Firebase
                (Firestore) con acceso restringido: cada usuario solo puede
                leer y modificar sus propios datos. Las comunicaciones entre
                la app y los servidores se realizan siempre mediante
                conexiones cifradas (HTTPS/TLS).
              </p>
              <p>
                El logotipo del taller se almacena como imagen comprimida
                directamente en tu perfil de Firestore. No usamos servicios de
                almacenamiento de archivos de terceros.
              </p>
            </Section>

            <Section n={6} title="Tus derechos">
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
                  Exportar datos.
                </li>
                <li>
                  <strong className="text-ink">Modificar</strong> tu
                  información de perfil desde la sección Perfil.
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
                    href="mailto:soporte@maza.app"
                    className="text-value-shade hover:underline"
                  >
                    soporte@maza.app
                  </a>
                  .
                </li>
              </ul>
            </Section>

            <Section n={7} title="Datos de menores">
              <p>
                MAZA está destinado a uso profesional por adultos. No
                recopilamos intencionalmente datos de menores de 13 años. Si
                detectas que un menor ha registrado datos en la app,
                contáctanos para eliminarlos.
              </p>
            </Section>

            <Section n={8} title="Cambios a esta política">
              <p>
                Podemos actualizar esta política ocasionalmente. Te
                notificaremos cualquier cambio significativo a través de la
                aplicación. El uso continuado de MAZA después de los cambios
                implica la aceptación de la nueva política.
              </p>
            </Section>

            <Section n={9} title="Contacto">
              <p>
                Para cualquier consulta relacionada con privacidad o
                eliminación de datos, escríbenos a{" "}
                <a
                  href="mailto:rafasandiflores2@gmail.com"
                  className="text-value-shade hover:underline"
                >
                  rafasandiflores2@gmail.com
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
