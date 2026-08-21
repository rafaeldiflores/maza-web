export const WHATSAPP_NUMBER = "56934358652";

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_MESSAGES = {
  general: "Hola, quiero saber más sobre MAZA para mi taller.",
  plan: (plan: string) =>
    `Hola, quiero contratar el plan ${plan} de MAZA.`,
} as const;

export type Feature = {
  title: string;
  description: string;
  icon: IconName;
  featured?: boolean;
};

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

export const FEATURES: Feature[] = [
  {
    title: "Link de seguimiento en vivo",
    description:
      "Cada cliente recibe un link para seguir su vehículo en tiempo real, sin instalar nada. Lo genera el mismo servidor que atiende la cola de tu taller.",
    icon: "seguimiento",
    featured: true,
  },
  {
    title: "Presupuestos con aprobación online",
    description:
      "El cliente aprueba o rechaza el presupuesto desde el link, sin tener que pasar por el taller ni llamar por teléfono.",
    icon: "presupuesto",
    featured: true,
  },
  {
    title: "Equipo con dueño y mecánicos",
    description:
      "En el plan Empresa cada mecánico tiene su propio acceso y la carga de trabajo se reparte entre todo el equipo.",
    icon: "equipo",
    featured: true,
  },
  {
    title: "Un taller, tu rubro",
    description:
      "Autos, motos o bicicletas: eliges el rubro y la app habla tu idioma, con los campos y recordatorios que corresponden.",
    icon: "rubro",
  },
  {
    title: "Cola de trabajo y agenda",
    description:
      "Desde que el vehículo entra hasta que se entrega: estados, órdenes numeradas y citas agendadas en una sola lista.",
    icon: "cola",
  },
  {
    title: "QR al ingreso",
    description:
      "Escanea el QR del cliente y vincula el vehículo al taller en segundos, sin tipear datos repetidos.",
    icon: "qr",
  },
  {
    title: "Inventario en tiempo real",
    description:
      "El stock de repuestos se descuenta solo con cada reparación y te avisa cuando algo se está agotando.",
    icon: "inventario",
  },
  {
    title: "Asistente IA integrado",
    description:
      "Consulta diagnósticos y sugerencias de servicio a un asistente que conoce tu inventario y tu cola en tiempo real.",
    icon: "ia",
  },
  {
    title: "Despacho a domicilio",
    description:
      "Sectores y costos configurables, con comprobante enviado por WhatsApp con el nombre de tu taller.",
    icon: "domicilio",
  },
  {
    title: "Balances y estadísticas",
    description:
      "Ingresos del día, la semana y el mes, entregas realizadas y cierre de caja sin planillas.",
    icon: "balances",
  },
  {
    title: "Exportación de datos",
    description:
      "Exporta tu listado de clientes e inventario a Excel cuando lo necesites.",
    icon: "exportar",
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
