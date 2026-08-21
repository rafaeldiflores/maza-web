import type { Metadata } from "next";
import { Bebas_Neue, Archivo } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  title: "MAZA — Tu taller ordenado, tu cliente informado",
  description:
    "App de gestión para talleres de autos, motos y bicicletas: cola de trabajo, inventario y caja, con link de seguimiento en vivo y presupuestos que el cliente aprueba desde el celular. 14 días gratis.",
  metadataBase: new URL("https://maza-app.vercel.app"),
  openGraph: {
    title: "MAZA — Tu taller ordenado, tu cliente informado",
    description:
      "Cola de trabajo, inventario y caja, con seguimiento en vivo y presupuestos que se aprueban desde el celular. 14 días gratis.",
    locale: "es_CL",
    type: "website",
    siteName: "MAZA",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${bebasNeue.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
