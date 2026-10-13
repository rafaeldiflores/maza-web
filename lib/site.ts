/**
 * URL canónica del sitio. Se usa para la metadata (og:image), el sitemap y
 * robots.txt — si no coincide con el dominio real, la previsualización al
 * compartir el link llega rota, que es justo lo que más importa acá.
 *
 * Orden: SITE_URL explícita (el build de Cloudflare la pasa, ver `build:cf`
 * en package.json), después el dominio de producción que expone Vercel, y al
 * final el hostname de Vercel de siempre.
 */
export const SITE_URL = process.env.SITE_URL
  ? process.env.SITE_URL.replace(/\/$/, "")
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://mazataller.com";

/**
 * Token de Cloudflare Web Analytics (panel de Cloudflare → Analytics & Logs →
 * Web Analytics → agregar el sitio). Sin cookies ni banner. Vacío = no se
 * carga nada. En Vercel sigue @vercel/analytics.
 */
export const CF_ANALYTICS_TOKEN = process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN || "";

export const WHATSAPP_NUMBER = "56936410159";
export const CONTACT_PHONE = "+56936410159";
export const CONTACT_PHONE_DISPLAY = "+56 9 3641 0159";
export const CONTACT_EMAIL = "contacto@mazataller.com";

/**
 * Quién está detrás (datos del portafolio, rafaelitoraldev.vercel.app). Sin
 * testimonios todavía, la historia real del creador es la prueba social:
 * nada de acá se adorna.
 */
export const CREADOR = {
  nombre: "Rafael Díaz Flores",
  corto: "Rafael",
  titulo: "Ingeniero informático (Duoc UC)",
  cargo: "Fundador y CEO",
  ciudad: "El Quisco, Chile",
  taller: "Litoral Bikes",
  linkedin: "https://www.linkedin.com/in/rafaeldiaz-it",
  foto: "/fundador.jpg",
} as const;

/**
 * La cuenta vive en la web de la app (mazataller.com/app). El sitio manda ahí
 * por direcciones cortas que redirige el Worker maza-app-web, así ningún texto
 * muestra la ruta técnica y la web se puede mudar sin tocar el sitio.
 */
export const URL_ENTRAR = "/entrar";
export const URL_REGISTRO = "/registro";
/** El formulario de alta en la web (Firebase Hosting detrás de /app). */
export const URL_ALTA_WEB = "/app/registrar";
/**
 * La app está en prueba cerrada: solo la instalan los testers que se suman
 * escribiendo por WhatsApp. Al publicarla en Google Play, esto pasa a false y
 * el sello "Pronto en Google Play" y el paso previo al registro cambian solos.
 */
export const APP_EN_PRUEBA_CERRADA = true;

/** Páginas del sitio oficial, en el orden del menú. */
export const NAV_SITIO = [
  { href: "/funciones", label: "Funciones" },
  { href: "/planes", label: "Planes" },
  { href: "/ayuda", label: "Ayuda" },
  { href: "/nosotros", label: "Nosotros" },
] as const;

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Mensaje del botón principal: siempre la prueba gratis. El Fundador se
 * menciona solo dentro de Planes; en la entrada (lo que ve quien llega de un
 * anuncio) nada de descuentos ni contadores: Instagram bajó el perfil por eso.
 */
export const mensajeCtaPrincipal = () => WA_MESSAGES.trial;

/** Días de prueba gratis. Debe coincidir con el trial del PlanService de la app. */
export const TRIAL_DIAS = 14;

/**
 * Oferta de lanzamiento: el Plan Fundador de docs/planes-y-precios.md (50% de
 * por vida sobre cualquier plan de pago, cupo de 20 talleres). Una sola bolsa:
 * los talleres piloto de Google Play cuentan dentro de los mismos 20. `tomados`
 * = testers activos + talleres en prueba + Fundadores pagando; se sube al
 * activar la prueba y se baja si al terminarla no paga. Se actualiza a mano: el
 * contador tiene que ser verdad, si no la urgencia se vuelve un truco. Con
 * `activa: false` la sección vuelve a los precios de lista.
 *
 * Apagado el 13-10-2026: en la web solo va el precio de lista (IVA incluido).
 * El trato de los beta testers (gratis durante la beta y luego 50% por 12
 * meses) se ofrece uno a uno por WhatsApp, no se publica.
 */
export const FUNDADOR = {
  activa: false,
  descuento: 0.5,
  cupos: 20,
  tomados: 0,
} as const;

export const cuposFundador = () => Math.max(FUNDADOR.cupos - FUNDADOR.tomados, 0);
export const ofertaFundador = () => FUNDADOR.activa && cuposFundador() > 0;

/** Precio con la oferta aplicada (o el de lista si no hay oferta). */
export function precioFinal(precio: number) {
  return ofertaFundador() ? Math.round(precio * (1 - FUNDADOR.descuento)) : precio;
}

export const clp = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
  maximumFractionDigits: 0,
});

/** Texto del botón principal, el mismo en hero, barra fija y cierre. */
export const textoCtaPrincipal = () => `Probar ${TRIAL_DIAS} días gratis`;

export const WA_MESSAGES = {
  general: "Hola, quiero saber más sobre MAZA para mi taller.",
  trial: `Hola, quiero probar MAZA gratis por ${TRIAL_DIAS} días en mi taller.`,
  plan: (plan: string) =>
    `Hola, quiero probar MAZA con el plan ${plan} en mi taller.`,
  tester:
    "Hola, quiero crear mi cuenta de MAZA y sumarme a la prueba de la app de Android. Mi correo de Google Play es: ",
} as const;

export type IconName =
  | "servicios"
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
      "El cliente aprueba desde el link con su nombre, destilda lo que no quiere o pide conversar el precio. Sin pasar por el taller ni llamar por teléfono.",
    icon: "presupuesto",
    tag: "Cierra ventas más rápido",
    shotAlt: "Presupuesto esperando aprobación del cliente desde el celular",
    spotlight: true,
  },
  {
    title: "Equipo con dueño y mecánicos",
    description:
      "Cada uno con su acceso, y en el inicio ves quién tiene qué entre manos y qué quedó sin dueño. Taller Pro suma un segundo acceso; Empresa, el equipo completo con asignación por mecánico.",
    icon: "equipo",
    tag: "Taller Pro y Empresa",
    shotAlt: "Panel de equipo con mecánicos y carga de trabajo repartida",
    spotlight: true,
  },
  {
    title: "Los servicios los defines tú",
    description:
      "Creas cada servicio con su nombre y su precio. Nada está atado a la mecánica: si haces detailing, lavado o pulido, tu catálogo dice eso y MAZA trabaja igual.",
    icon: "servicios",
    shotAlt: "Catálogo de servicios del taller con nombres y precios propios",
  },
  {
    title: "Un taller, tu rubro",
    description:
      "Multirubro: eliges el rubro del taller (auto, moto o bicicleta) y la app habla tu idioma, con los campos y recordatorios que corresponden.",
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
 * Sin archivo, la sección no aparece.
 */
export const DEMO_VIDEO = {
  file: "demo/demo.mp4",
  poster: "demo/poster.jpg",
  /** true = grabado en vertical (9:16), como un reel. */
  vertical: true,
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
    title: "El cuaderno pierde plata",
    body: "Una hoja mojada, una letra ilegible o una orden que nadie encuentra. Con cada servicio o repuesto no anotado, el taller pierde dinero sin darse cuenta.",
  },
  {
    title: "“¿Ya está listo mi vehículo?”",
    body: "Clientes llamando varias veces al día interrumpiendo al mecánico debajo del motor. Con el link en vivo de MAZA, el cliente ve el avance solo desde su celular.",
  },
  {
    title: "Presupuestos que se enfrían",
    body: "Mandas el monto por WhatsApp, el cliente no responde y el vehículo ocupa espacio por días. En MAZA el cliente aprueba con un toque en el link.",
  },
  {
    title: "Cerrar la caja a ciegas",
    body: "A fin de mes no sabes cuánto entró de verdad ni qué repuesto se gastó. MAZA descuenta el inventario solo y cuadra la caja en 10 segundos.",
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
 */
export const TESTIMONIALS: Testimonial[] = [];

export const FAQS = [
  {
    q: "¿Puedo usar MAZA en mi computador o solo en el celular?",
    a: "En ambos a la vez. Tienes la app en tu teléfono para avanzar trabajos y tomar fotos a pie de vehículo, y la web de mostrador para tu PC o laptop en la recepción. Se conectan con un código QR (igual que WhatsApp Web) y lo que haces en uno aparece en el otro al momento.",
  },
  {
    q: "¿Sirve para mi rubro?",
    a: "Sí. MAZA es multirubro: al crear tu cuenta eliges el rubro de tu taller y la app cambia los campos y los términos: el auto se controla por kilometraje, la bicicleta por calendario. No es una app de autos adaptada a la fuerza.",
  },
  {
    q: "No hago mecánica, hago detailing / lavado. ¿Me sirve igual?",
    a: "Sí. El catálogo de servicios es tuyo: creas cada servicio con el nombre y el precio que quieras, así que puede decir “Pulido de faros” o “Lavado premium” igual que diría “Cambio de pastillas”. Todo lo demás —la cola de trabajo, el seguimiento del cliente, los presupuestos, la caja— funciona igual sin importar qué le hagas al vehículo.",
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
    a: "Es justamente para quien trabaja solo o con un equipo chico. Taller Solo está pensado para una persona; Taller Pro suma un segundo acceso trabajando a la par (socio o ayudante); y el equipo completo con roles y asignación por mecánico aparece desde el plan Empresa.",
  },
  {
    q: "Tengo todo en un cuaderno, ¿tengo que cargar todo de nuevo?",
    a: "No hace falta empezar por el histórico. La mayoría parte cargando solo los vehículos que están en el taller ahora, y el resto de los clientes se van sumando solos a medida que vuelven. Además, nos puedes mandar una foto de tu lista por WhatsApp y te ayudamos a dejarla cargada.",
  },
];

export type Plan = {
  name: string;
  price: number;
  /** true = "price" es el piso de un plan que escala (Empresa, por asiento). */
  priceDesde?: boolean;
  /** Costo de cada asiento adicional, si el plan escala (solo Empresa). */
  extraSeatPrice?: number;
  tagline: string;
  roiNote?: string;
  features: string[];
  highlighted?: boolean;
};

/** Precio del plan más barato, con la oferta aplicada. */
export const precioDesde = () => precioFinal(Math.min(...PLANS.map((p) => p.price)));
export const precioDesdeLista = () => Math.min(...PLANS.map((p) => p.price));

/**
 * Fuente de verdad: docs/planes-y-precios.md y plan.service.ts en Maza-app.
 * Cualquier cambio de nombre, precio o función tiene que reflejarse ahí
 * primero (o venir de ahí) — este archivo no inventa nada nuevo.
 */
export const PLANS: Plan[] = [
  {
    name: "Taller Solo",
    price: 24990,
    tagline: "Para el mecánico o taller unipersonal",
    roiNote: "Ideal si atiendes tú mismo el mesón y el taller.",
    features: [
      "1 acceso simultáneo: celular en el taller + PC en mostrador",
      "Asistente IA que lee el stock y caja de tu taller",
      "Link de seguimiento en vivo para tus clientes",
      "Presupuestos con aprobación online en 1 toque",
      "Inventario con descuento automático por orden",
      "Balances y cuadre de caja diaria en segundos",
    ],
  },
  {
    name: "Taller Pro",
    price: 39990,
    tagline: "Dueño + 1 socio o ayudante trabajando a la vez",
    roiNote: "Para cuando ya no das abasto solo: dos personas a la par.",
    features: [
      "Todo lo de Taller Solo",
      "Cobro online del presupuesto con Mercado Pago (acceso anticipado)",
      "2 accesos trabajando a la par (taller y mesón)",
      "Órdenes de trabajo y clientes ilimitados",
      "Soporte prioritario y asistencia de catálogo",
    ],
    highlighted: true,
  },
  {
    name: "Empresa",
    price: 59990,
    priceDesde: true,
    extraSeatPrice: 9990,
    tagline: "Talleres de 3 o más personas con mecánicos",
    roiNote: "Cada mecánico con sus órdenes y el dueño viendo todo.",
    features: [
      "Todo lo de Taller Pro",
      "Base de 3 personas: dueño + 2 mecánicos",
      "Todo el equipo conectado a la vez en PC y celular",
      "Asignación de órdenes por mecánico",
      "Reporte de productividad y rendimiento por mecánico",
    ],
  },
];
