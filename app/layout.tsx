import type { Metadata } from "next";
import { Bebas_Neue, Archivo } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MAZA — Gestión inteligente para tu taller",
  description:
    "MAZA es la app de gestión para talleres de autos, motos o bicicletas: cola de trabajo, inventario, presupuestos con aprobación online, seguimiento en vivo para tus clientes y un asistente con IA.",
  metadataBase: new URL("https://maza-app.vercel.app"),
  openGraph: {
    title: "MAZA — Gestión inteligente para tu taller",
    description:
      "Cola de trabajo, inventario, presupuestos con aprobación online y seguimiento en vivo para tus clientes. Para talleres de autos, motos y bicicletas.",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${bebasNeue.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
