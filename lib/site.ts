export const WHATSAPP_NUMBER = "56934358652";

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_MESSAGES = {
  general: "Hola, quiero saber más sobre MAZA para mi taller.",
  plan: (plan: string) =>
    `Hola, quiero contratar el plan ${plan} de MAZA.`,
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
  },
  {
    title: "Presupuestos con aprobación online",
    description:
      "El cliente aprueba o rechaza el presupuesto desde el link, sin tener que pasar por el taller ni llamar por teléfono.",
    icon: "presupuesto",
    tag: "Cierra ventas más rápido",
    shotAlt: "Presupuesto esperando aprobación del cliente desde el celular",
  },
  {
    title: "Equipo con dueño y mecánicos",
    description:
      "En el plan Empresa cada mecánico tiene su propio acceso y la carga de trabajo se reparte entre todo el equipo.",
    icon: "equipo",
    tag: "Plan Empresa",
    shotAlt: "Panel de equipo con mecánicos y carga de trabajo repartida",
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
      "Cola de trabajo y agenda completa",
      "Inventario con descuento automático",
      "Asistente IA integrado",
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
