import type { ReactNode } from "react";

interface Tecnologia {
  nombre: string;
  subtitulo: string;
  icono: ReactNode;
  spanDosCol?: boolean;
}

const TECNOLOGIAS: Tecnologia[] = [
  {
    nombre: "WhatsApp",
    subtitulo: "Avisos y link en 1 toque",
    icono: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4 text-[#25D366]"
        aria-hidden="true"
      >
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.37 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.57 14.43C16.32 14.3 15.1 13.7 14.87 13.62C14.65 13.54 14.48 13.5 14.32 13.75C14.15 14 13.67 14.56 13.52 14.73C13.38 14.89 13.23 14.92 12.98 14.79C12.73 14.67 11.93 14.4 10.98 13.56C10.24 12.9 9.74 12.09 9.6 11.84C9.45 11.59 9.58 11.46 9.71 11.33C9.82 11.22 9.96 11.04 10.09 10.89C10.21 10.74 10.26 10.63 10.34 10.47C10.42 10.3 10.38 10.16 10.32 10.04C10.26 9.91 9.77 8.71 9.56 8.22C9.36 7.74 9.16 7.8 9.01 7.8L8.54 7.79C8.38 7.79 8.11 7.85 7.88 8.1C7.66 8.35 7.02 8.95 7.02 10.17C7.02 11.39 7.91 12.56 8.03 12.73C8.16 12.89 9.78 15.38 12.26 16.45C12.85 16.7 13.31 16.86 13.67 16.97C14.26 17.16 14.8 17.13 15.22 17.07C15.7 17 16.69 16.47 16.9 15.89C17.11 15.31 17.11 14.81 17.04 14.71C16.98 14.61 16.82 14.56 16.57 14.43Z" />
      </svg>
    ),
  },
  {
    nombre: "Mercado Pago",
    subtitulo: "Cobros directo a tu cuenta",
    icono: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4 text-[#009EE3]"
        aria-hidden="true"
      >
        <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L6 14" />
        <path d="m7 15 3 3a2 2 0 0 0 2.8 0l5.2-5.2a2 2 0 0 0 0-2.8l-1.4-1.4a2 2 0 0 0-2.8 0L11 11" />
        <path d="m2 10 3-3a2 2 0 0 1 2.8 0l1.4 1.4" />
        <path d="m18 14 3-3a2 2 0 0 0 0-2.8l-1.4-1.4a2 2 0 0 0-2.8 0L15 8" />
      </svg>
    ),
  },
  {
    nombre: "Google Cloud",
    subtitulo: "Datos seguros y respaldados",
    icono: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4 text-[#4285F4]"
        aria-hidden="true"
      >
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    ),
  },
  {
    nombre: "Google Play",
    subtitulo: "App rápida en Android",
    icono: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4 text-[#34A853]"
        aria-hidden="true"
      >
        <path d="M3.6 2.5a1.5 1.5 0 0 0-.6 1.2v16.6c0 .5.2.9.6 1.2l.1.1 9.4-9.4v-.2L3.7 2.4l-.1.1zM16.5 15.4l-3.4-3.4 3.4-3.4.1.1 4 2.3c1.1.6 1.1 1.7 0 2.3l-4.1 2.1zM13.1 12l-9.5 9.5c.4.4 1 .4 1.6.1l11.3-6.4-3.4-3.2zm0 0L16.5 8.8 5.2 2.4c-.6-.3-1.2-.3-1.6.1L13.1 12z" />
      </svg>
    ),
  },
  {
    nombre: "Google Gemini IA",
    subtitulo: "Carga tu catálogo por foto",
    spanDosCol: true,
    icono: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4 text-[#FF9900]"
        aria-hidden="true"
      >
        <path d="m12 2 2.4 6.6a2 2 0 0 0 1.2 1.2L22 12l-6.4 2.2a2 2 0 0 0-1.2 1.2L12 22l-2.4-6.6a2 2 0 0 0-1.2-1.2L2 12l6.4-2.2a2 2 0 0 0 1.2-1.2L12 2Z" />
      </svg>
    ),
  },
];

export function TecnologiasBar() {
  return (
    <section className="border-y border-[#26262C] bg-[#0E0E11] px-5 py-5 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3.5 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-[#6E6E77] sm:text-left">
          CONECTADO Y RESPALDADO CON TECNOLOGÍA DE
        </p>

        {/* Móvil: grid de 2 columnas | Desktop: fila de 5 columnas */}
        <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-5 lg:gap-4">
          {TECNOLOGIAS.map((t) => (
            <div
              key={t.nombre}
              className={`flex items-center gap-2.5 rounded-sm border border-[#26262C] bg-[#141417]/80 px-3 py-2.5 ${
                t.spanDosCol ? "col-span-2 lg:col-span-1" : "col-span-1"
              }`}
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xs border border-[#26262C] bg-[#1C1C21]">
                {t.icono}
              </span>
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-bold leading-tight text-[#F2F2F5] truncate">
                  {t.nombre}
                </span>
                <span className="font-mono text-[10px] leading-tight text-[#9A9AA3] truncate">
                  {t.subtitulo}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
