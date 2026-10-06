import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { CF_ANALYTICS_TOKEN, SITE_URL } from "@/lib/site";

// En Vercel mide @vercel/analytics; fuera de Vercel (Cloudflare), el beacon de
// Cloudflare Web Analytics si hay token. Nunca los dos a la vez.
const enVercel = !!process.env.VERCEL;
import { EnlacesAlta } from "@/components/enlaces-alta";
import { WaTracking } from "@/components/wa-tracking";
import { BotonWhatsappFlotante } from "@/components/boton-whatsapp-flotante";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MAZA — Tu taller ordenado, tu cliente informado",
  description:
    "App de gestión para talleres multirubro: cola de trabajo, inventario y caja, con un asistente IA que conoce tus datos y presupuestos que el cliente aprueba desde el celular. 14 días gratis.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "MAZA — Tu taller ordenado, tu cliente informado",
    description:
      "Asistente IA con los datos reales de tu taller, seguimiento en vivo y presupuestos que se aprueban desde el celular. 14 días gratis.",
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
    <html lang="es" className={`${bebasNeue.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <BotonWhatsappFlotante />
        <EnlacesAlta />
        <WaTracking />
        {enVercel && <Analytics />}
        {!enVercel && CF_ANALYTICS_TOKEN && (
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={JSON.stringify({ token: CF_ANALYTICS_TOKEN })}
          />
        )}
      </body>
    </html>
  );
}
