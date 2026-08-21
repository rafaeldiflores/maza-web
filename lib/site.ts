/**
 * URL canónica del sitio. Se usa para la metadata (og:image), el sitemap y
 * robots.txt — si no coincide con el dominio real, la previsualización al
 * compartir el link llega rota, que es justo lo que más importa acá.
 *
 * Vercel expone el dominio de producción en VERCEL_PROJECT_PRODUCTION_URL,
 * así que esto sigue solo al dominio actual y al conectar uno propio basta
 * con cambiar el fallback.
 */
export const SITE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://maza-web-rho.vercel.app";

export const WHATSAPP_NUMBER = "56934358652";

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Días de prueba gratis. Debe coincidir con el trial del PlanService de la app. */
export const TRIAL_DIAS = 14;

export const WA_MESSAGES = {
  general: "Hola, quiero saber más sobre MAZA para mi taller.",
  trial: `Hola, quiero probar MAZA gratis por ${TRIAL_DIAS} días en mi taller.`,
  plan: (plan: string) => `Hola, quiero contratar el plan ${plan} de MAZA.`,
} as const;

export type IconName =
  | "rubro"
  | "cola"
  | "seguimiento"
  | "presupuesto"
  | "qr"
  | "inventario"
  | "ia"
  | "domicilio"
  | "balances"
  | "equipo"
  | "exportar";

export type Feature = {
  title: string;
  description: string;
  icon: IconName;
  /** Insignia corta para resaltar el diferencial frente a la competencia. */
  tag?: string;
  /** Texto alternativo de la captura de esta función. */
  shotAlt: string;
  /**
   * Las estrella van en bloque grande con captura; el resto en grid compacto.
   * Solo 3 deberían llevarlo: más bloques grandes = muro de scroll antes de
   * llegar a los precios.
   */
  spotlight?: boolean;
  /** Tiene su propia sección dedicada, así que no va en el grid ni en spotlight. */
  ownSection?: boolean;
};

/**
 * Cada función tiene su propio bloque con captura, para vender de a una.
 * La captura se busca en /public/screenshots/<icon>.png (ver lib/media.ts):
 * si no está, se muestra un placeholder "pendiente" en su lugar. Para
 * agregarla solo hay que dejar el PNG/JPG en esa ruta exacta y volver a
 * desplegar — no hace falta tocar código.
 */
export const FEATURES: Feature[] = [
  {
    title: "Link de seguimiento en vivo",
    description:
      "Cada cliente recibe un link para seguir su vehículo en tiempo real, sin instalar nada. Lo genera el mismo servidor que atiende la cola de tu taller.",
    icon: "seguimiento",
    tag: "Poco común en talleres",
    shotAlt: "Vista del cliente siguiendo su vehículo en vivo desde el link",
    spotlight: true,
  },
  {
    title: "Presupuestos con aprobación online",
    description:
      "El cliente aprueba o rechaza el presupuesto desde el link, sin tener que pasar por el taller ni llamar por teléfono.",
    icon: "presupuesto",
    tag: "Cierra ventas más rápido",
    shotAlt: "Presupuesto esperando aprobación del cliente desde el celular",
    spotlight: true,
  },
  {
    title: "Equipo con dueño y mecánicos",
    description:
      "En el plan Empresa cada mecánico tiene su propio acceso y la carga de trabajo se reparte entre todo el equipo.",
    icon: "equipo",
    tag: "Plan Empresa",
    shotAlt: "Panel de equipo con mecánicos y carga de trabajo repartida",
    spotlight: true,
  },
  {
    title: "Un taller, tu rubro",
    description:
      "Autos, motos o bicicletas: eliges el rubro y la app habla tu idioma, con los campos y recordatorios que corresponden.",
    icon: "rubro",
    shotAlt: "Selector de rubro del taller: autos, motos o bicicletas",
  },
  {
    title: "Cola de trabajo y agenda",
    description:
      "Desde que el vehículo entra hasta que se entrega: estados, órdenes numeradas y citas agendadas en una sola lista.",
    icon: "cola",
    shotAlt: "Cola de trabajo con los estados de cada vehículo",
  },
  {
    title: "QR al ingreso",
    description:
      "Escanea el QR del cliente y vincula el vehículo al taller en segundos, sin tipear datos repetidos.",
    icon: "qr",
    shotAlt: "Escaneo del QR del cliente al ingresar un vehículo",
  },
  {
    title: "Inventario en tiempo real",
    description:
      "El stock de repuestos se descuenta solo con cada reparación y te avisa cuando algo se está agotando.",
    icon: "inventario",
    shotAlt: "Lista de repuestos con stock disponible",
  },
  {
    title: "Asistente IA integrado",
    description:
      "Consulta diagnósticos y sugerencias de servicio a un asistente que conoce tu inventario y tu cola en tiempo real.",
    icon: "ia",
    shotAlt: "Conversación con el asistente de inteligencia artificial",
    ownSection: true,
  },
  {
    title: "Despacho a domicilio",
    description:
      "Sectores y costos configurables, con comprobante enviado por WhatsApp con el nombre de tu taller.",
    icon: "domicilio",
    shotAlt: "Configuración de despacho a domicilio con sectores y costos",
  },
  {
    title: "Balances y estadísticas",
    description:
      "Ingresos del día, la semana y el mes, entregas realizadas y cierre de caja sin planillas.",
    icon: "balances",
    shotAlt: "Balances del taller con ingresos del día, semana y mes",
  },
  {
    title: "Exportación de datos",
    description:
      "Exporta tu listado de clientes e inventario a Excel cuando lo necesites.",
    icon: "exportar",
    shotAlt: "Exportación del listado de clientes e inventario a Excel",
  },
];

/**
 * Video de demo. Mismo mecanismo que las capturas: dejar el archivo en
 * /public/demo/demo.mp4 (+ opcionalmente demo/poster.jpg) y se activa solo.
 */
export const DEMO_VIDEO = {
  file: "demo/demo.mp4",
  poster: "demo/poster.jpg",
};

/**
 * Lo que el asistente hace de verdad (ver ai.service.ts en la app). Cada
 * punto corresponde a una capacidad real, no a promesa de marketing: si algo
 * cambia en el servicio, esta lista se corrige.
 */
export const IA_CAPACIDADES = [
  {
    title: "Lee tu taller, no internet",
    body: "Cada respuesta se arma con tus datos del momento: qué repuesto está bajo el mínimo, cuántos vehículos hay en cada estado, qué se facturó esta semana, qué citas tienes mañana.",
  },
  {
    title: "Diagnostica y arma la orden",
    body: "Le describes el síntoma y te propone servicios y repuestos de tu propio catálogo, con tus precios. Nunca inventa un servicio que no tengas cargado.",
  },
  {
    title: "Redacta el WhatsApp al cliente",
    body: "“Avísale a Diego que su moto está lista” y te deja el mensaje escrito con los datos reales de esa orden. Tú lo revisas y lo envías: nunca se manda solo.",
  },
  {
    title: "Sabe cómo se usa la app",
    body: "Tiene el manual de MAZA adentro. Si no encuentras dónde se agenda una cita o cómo se cierra la caja, se lo preguntas en vez de buscar en menús.",
  },
];

/** Preguntas reales que el asistente responde con los datos del taller. */
export const IA_EJEMPLOS = [
  "¿Qué repuestos tengo bajo stock?",
  "¿Cuánto llevo facturado este mes?",
  "Me suena atrás al frenar, ¿qué puede ser?",
  "Avísale a Diego que su auto está listo",
  "¿Qué citas tengo mañana?",
  "¿Cuántas motos hay en el taller?",
  "¿Cómo agendo una cita?",
];

/** Lo que MAZA detecta solo y te muestra al abrir la app. */
export const BRIEF_ALERTAS = [
  "Entregas que se pasaron de fecha",
  "Citas agendadas que no llegaron",
  "Repuestos que te van a faltar para el trabajo de hoy",
  "Vehículos listos que el cliente todavía no sabe que puede retirar",
  "Clientes a los que les toca mantención",
];

/** El dolor antes de la solución: nombrarlo hace que las funciones aterricen. */
export const PROBLEMS = [
  {
    title: "El cuaderno del mesón",
    body: "Una hoja mojada, una letra que no se entiende, y la orden que nadie encuentra cuando el cliente viene a buscar su vehículo.",
  },
  {
    title: "“¿Ya está listo?”",
    body: "El mismo cliente preguntando tres veces al día, interrumpiendo al mecánico que está con las manos adentro de un motor.",
  },
  {
    title: "Presupuestos que se enfrían",
    body: "Mandas el monto por WhatsApp, el cliente no responde, y a la semana el vehículo sigue ocupando espacio sin que nadie decida nada.",
  },
  {
    title: "Cerrar la caja a ciegas",
    body: "Fin de mes y no sabes cuánto entró de verdad, qué repuesto se gastó, ni cuál servicio te está dejando plata.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  workshop: string;
  /** Foto en /public/<photo>; si no existe se usa la inicial del nombre. */
  photo: string;
};

/**
 * VACÍO A PROPÓSITO. No hay testimonios inventados: MAZA todavía no tiene
 * usuarios reales, y un testimonio falso se nota y quema la confianza justo
 * donde más importa. La sección no se renderiza mientras esto esté vacío.
 *
 * Para llenarlo: conseguir 2-3 talleres piloto (aunque sea gratis a cambio
 * del testimonio), pedirles una frase textual, el nombre del taller y una
 * foto real, y agregarlos acá.
 */
export const TESTIMONIALS: Testimonial[] = [];

export const FAQS = [
  {
    q: "¿Sirve para mi rubro?",
    a: "Sí. Al crear tu cuenta eliges si el taller es de autos, motos o bicicletas, y la app cambia los campos y los términos: el auto se controla por kilometraje, la bicicleta por calendario. No es una app de autos adaptada a la fuerza.",
  },
  {
    q: "¿Necesito internet para usarla?",
    a: "Sí, MAZA sincroniza los datos de tu taller en la nube para que estén respaldados y disponibles desde cualquier dispositivo. Con la conexión del celular basta.",
  },
  {
    q: "¿Mis datos y los de mis clientes están seguros?",
    a: "Se guardan cifrados en servidores de Google Firebase, con reglas que impiden que otra cuenta lea los datos de tu taller. Puedes exportarlos a Excel o pedir que se eliminen cuando quieras.",
  },
  {
    q: "El asistente de IA, ¿se inventa las cosas?",
    a: "No trabaja de memoria general: antes de cada respuesta lee los datos reales de tu taller. Cuando propone servicios o repuestos, solo puede elegir de tu propio catálogo — si algo no lo tienes cargado, no aparece. Y los mensajes a clientes te los deja escritos para que los revises: nunca envía nada por su cuenta.",
  },
  {
    q: "¿Puedo cancelar cuando quiera?",
    a: `Sí. No hay contrato de permanencia ni multa por salir. Además parte con ${TRIAL_DIAS} días gratis para que pruebes con tu trabajo real antes de pagar nada.`,
  },
  {
    q: "Trabajo solo, ¿igual me sirve?",
    a: "Es justamente para quien trabaja solo o con un equipo chico. El plan Pro está pensado para un usuario; el equipo con mecánicos aparte solo aparece en el plan Empresa.",
  },
  {
    q: "Tengo todo en un cuaderno, ¿tengo que cargar todo de nuevo?",
    a: "No hace falta empezar por el histórico. La mayoría parte cargando solo los vehículos que están en el taller ahora, y el resto de los clientes se van sumando solos a medida que vuelven.",
  },
];

export type Plan = {
  name: string;
  price: number;
  tagline: string;
  features: string[];
  highlighted?: boolean;
};

export const PLANS: Plan[] = [
  {
    name: "Pro",
    price: 14990,
    tagline: "Para el que trabaja solo",
    features: [
      "Asistente IA con los datos de tu taller",
      "Resumen del día con alertas automáticas",
      "Cola de trabajo y agenda completa",
      "Inventario con descuento automático",
      "Balances y estadísticas",
    ],
  },
  {
    name: "Ilimitado",
    price: 24990,
    tagline: "Sin límites de clientes ni vehículos",
    features: [
      "Todo lo de Pro",
      "Clientes y vehículos ilimitados",
      "Despacho a domicilio",
      "Exportación a Excel",
    ],
    highlighted: true,
  },
  {
    name: "Empresa",
    price: 49990,
    tagline: "Para talleres con equipo",
    features: [
      "Todo lo de Ilimitado",
      "Mecánicos con acceso propio",
      "Reparto de carga de trabajo",
      "Soporte prioritario",
    ],
  },
];
