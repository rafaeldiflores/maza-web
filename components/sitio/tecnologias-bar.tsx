"use client";

import { useState, type ReactNode } from "react";

interface Tecnologia {
  id: string;
  nombre: string;
  subtitulo: string;
  detalle: string;
  datoClave: string;
  colorBorde: string;
  icono: ReactNode;
  spanDosCol?: boolean;
}

const TECNOLOGIAS: Tecnologia[] = [
  {
    id: "whatsapp",
    nombre: "WhatsApp",
    subtitulo: "Avisos y link en 1 toque",
    detalle:
      "Abre el chat del cliente con el mensaje y su link de seguimiento ya redactados desde el propio número de tu taller. Tú revisas y envías en 1 toque, sin bots impersonales.",
    datoClave: "Directo desde tu número · Sin cobro por mensaje",
    colorBorde: "border-[#25D366]",
    icono: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        fill="#25D366"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
  },
  {
    id: "mercadopago",
    nombre: "Mercado Pago",
    subtitulo: "Cobros directo a tu cuenta",
    detalle:
      "Tu cliente puede pagar el presupuesto o el retiro desde el mismo link con tarjeta o transferencia. El dinero va directo a tu cuenta de Mercado Pago y se registra en la orden.",
    datoClave: "Conciliación inmediata con tu caja diaria",
    colorBorde: "border-[#00B1EA]",
    icono: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        fill="#00B1EA"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M11.115 16.479a.93.927 0 0 1-.939-.886c-.002-.042-.006-.155-.103-.155-.04 0-.074.023-.113.059-.112.103-.254.206-.46.206a.816.814 0 0 1-.305-.066c-.535-.214-.542-.578-.521-.725.006-.038.007-.08-.02-.11l-.032-.03h-.034c-.027 0-.055.012-.093.039a.788.786 0 0 1-.454.16.7.699 0 0 1-.253-.05c-.708-.27-.65-.928-.617-1.126.005-.041-.005-.072-.03-.092l-.05-.04-.047.043a.728.726 0 0 1-.505.203.73.728 0 0 1-.732-.725c0-.4.328-.722.732-.722.364 0 .675.27.721.63l.026.195.11-.165c.01-.018.307-.46.852-.46.102 0 .21.016.316.05.434.13.508.52.519.68.008.094.075.1.09.1.037 0 .064-.024.083-.045a.746.744 0 0 1 .54-.225c.128 0 .263.03.402.09.69.293.379 1.158.374 1.167-.058.144-.061.207-.005.244l.027.013h.02c.03 0 .07-.014.134-.035.093-.032.235-.08.367-.08a.944.942 0 0 1 .94.93.936.934 0 0 1-.94.928zm7.302-4.171c-1.138-.98-3.768-3.24-4.481-3.77-.406-.302-.685-.462-.928-.533a1.559 1.554 0 0 0-.456-.07c-.182 0-.376.032-.58.095-.46.145-.918.505-1.362.854l-.023.018c-.414.324-.84.66-1.164.73a1.986 1.98 0 0 1-.43.049c-.362 0-.687-.104-.81-.258-.02-.025-.007-.066.04-.125l.008-.008 1-1.067c.783-.774 1.525-1.506 3.23-1.545h.085c1.062 0 2.12.469 2.24.524a7.03 7.03 0 0 0 3.056.724c1.076 0 2.188-.263 3.354-.795a9.135 9.11 0 0 0-.405-.317c-1.025.44-2.003.66-2.946.66-.962 0-1.925-.229-2.858-.68-.05-.022-1.22-.567-2.44-.57-.032 0-.065 0-.096.002-1.434.033-2.24.536-2.782.976-.528.013-.982.138-1.388.25-.361.1-.673.186-.979.185-.125 0-.35-.01-.37-.012-.35-.01-2.115-.437-3.518-.962-.143.1-.28.203-.415.31 1.466.593 3.25 1.053 3.812 1.089.157.01.323.027.491.027.372 0 .744-.103 1.104-.203.213-.059.446-.123.692-.17l-.196.194-1.017 1.087c-.08.08-.254.294-.14.557a.705.703 0 0 0 .268.292c.243.162.677.27 1.08.271.152 0 .297-.015.43-.044.427-.095.874-.448 1.349-.82.377-.296.913-.672 1.323-.782a1.494 1.49 0 0 1 .37-.05.611.61 0 0 1 .095.005c.27.034.533.125 1.003.472.835.62 4.531 3.815 4.566 3.846.002.002.238.203.22.537-.007.186-.11.352-.294.466a.902.9 0 0 1-.484.15.804.802 0 0 1-.428-.124c-.014-.01-1.28-1.157-1.746-1.543-.074-.06-.146-.115-.22-.115a.122.122 0 0 0-.096.045c-.073.09.01.212.105.294l1.48 1.47c.002 0 .184.17.204.395.012.244-.106.447-.35.606a.957.955 0 0 1-.526.171.766.764 0 0 1-.42-.127l-.214-.206a21.035 20.978 0 0 0-1.08-1.009c-.072-.058-.148-.112-.221-.112a.127.127 0 0 0-.094.038c-.033.037-.056.103.028.212a.698.696 0 0 0 .075.083l1.078 1.198c.01.01.222.26.024.511l-.038.048a1.18 1.178 0 0 1-.1.096c-.184.15-.43.164-.527.164a.8.798 0 0 1-.147-.012c-.106-.018-.178-.048-.212-.089l-.013-.013c-.06-.06-.602-.609-1.054-.98-.059-.05-.133-.11-.21-.11a.128.128 0 0 0-.096.042c-.09.096.044.24.1.293l.92 1.003a.204.204 0 0 1-.033.062c-.033.044-.144.155-.479.196a.91.907 0 0 1-.122.007c-.345 0-.712-.164-.902-.264a1.343 1.34 0 0 0 .13-.576 1.368 1.365 0 0 0-1.42-1.357c.024-.342-.025-.99-.697-1.274a1.455 1.452 0 0 0-.575-.125c-.146 0-.287.025-.42.075a1.153 1.15 0 0 0-.671-.564 1.52 1.515 0 0 0-.494-.085c-.28 0-.537.08-.767.242a1.168 1.165 0 0 0-.903-.43 1.173 1.17 0 0 0-.82.335c-.287-.217-1.425-.93-4.467-1.613a17.39 17.344 0 0 1-.692-.189 4.822 4.82 0 0 0-.077.494l.67.157c3.108.682 4.136 1.391 4.309 1.525a1.145 1.142 0 0 0-.09.442 1.16 1.158 0 0 0 1.378 1.132c.096.467.406.821.879 1.003a1.165 1.162 0 0 0 .415.08c.09 0 .179-.012.266-.034.086.22.282.493.722.668a1.233 1.23 0 0 0 .457.094c.122 0 .241-.022.355-.063a1.373 1.37 0 0 0 1.269.841c.37.002.726-.147.985-.41.221.121.688.341 1.163.341.06 0 .118-.002.175-.01.47-.059.689-.24.789-.382a.571.57 0 0 0 .048-.078c.11.032.234.058.373.058.255 0 .501-.086.75-.265.244-.174.418-.424.444-.637v-.01c.083.017.167.026.251.026.265 0 .527-.082.773-.242.48-.31.562-.715.554-.98a1.28 1.279 0 0 0 .978-.194 1.04 1.04 0 0 0 .502-.808 1.088 1.085 0 0 0-.16-.653c.804-.342 2.636-1.003 4.795-1.483a4.734 4.721 0 0 0-.067-.492 27.742 27.667 0 0 0-5.049 1.62zm5.123-.763c0 4.027-5.166 7.293-11.537 7.293-6.372 0-11.538-3.266-11.538-7.293 0-4.028 5.165-7.293 11.539-7.293 6.371 0 11.537 3.265 11.537 7.293zm.46.004c0-4.272-5.374-7.755-12-7.755S.002 7.277.002 11.55L0 12.004c0 4.533 4.695 8.203 11.999 8.203 7.347 0 12-3.67 12-8.204z" />
      </svg>
    ),
  },
  {
    id: "googlecloud",
    nombre: "Google Cloud",
    subtitulo: "Datos seguros y respaldados",
    detalle:
      "Cada orden, foto de ingreso, cliente e inventario se respalda en vivo en servidores de Google. Si cambias de celular o de computador en el mesón, tu taller sigue intacto.",
    datoClave: "Respaldo continuo · Exportable a Excel en 1 clic",
    colorBorde: "border-[#4285F4]",
    icono: (
      <svg
        role="img"
        viewBox="0 0 64 64"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path
          d="M40.728 20.488l2.05.035 5.57-5.57.27-2.36C44.2 8.657 38.367 6.26 31.993 6.26c-11.54 0-21.28 7.852-24.163 18.488.608-.424 1.908-.106 1.908-.106l11.13-1.83s.572-.947.862-.9A13.88 13.88 0 0 1 32 17.375c3.3.007 6.34 1.173 8.728 3.102z"
          fill="#EA4335"
        />
        <path
          d="M56.17 24.77c-1.293-4.77-3.958-8.982-7.555-12.177l-7.887 7.887c3.16 2.55 5.187 6.452 5.187 10.82v1.392c3.837 0 6.954 3.124 6.954 6.954 0 3.837-3.124 6.954-6.954 6.954H32.007L30.615 48v8.346l1.392 1.385h13.908A18.11 18.11 0 0 0 64 39.647c-.007-6.155-3.1-11.6-7.83-14.876z"
          fill="#4285F4"
        />
        <path
          d="M18.085 57.74h13.9V46.6h-13.9a6.89 6.89 0 0 1-2.862-.622l-2.007.615-5.57 5.57-.488 1.88a18 18 0 0 0 10.926 3.689z"
          fill="#34A853"
        />
        <path
          d="M18.085 21.57A18.11 18.11 0 0 0 0 39.654c0 5.873 2.813 11.095 7.166 14.403l8.064-8.064a6.96 6.96 0 0 1-4.099-6.339c0-3.837 3.124-6.954 6.954-6.954 2.82 0 5.244 1.7 6.34 4.1l8.064-8.064c-3.307-4.353-8.53-7.166-14.403-7.166z"
          fill="#FBBC05"
        />
      </svg>
    ),
  },
  {
    id: "googleplay",
    nombre: "Google Play",
    subtitulo: "App rápida en Android",
    detalle:
      "Aplicación Android diseñada para operar con una sola mano en el piso del taller: cámara directa para patentes y QR, fotos de piezas gastadas y vinculación instantánea con el PC.",
    datoClave: "Sincronizada en tiempo real con el mostrador web",
    colorBorde: "border-[#00F076]",
    icono: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path
          fill="#00D7FE"
          d="M3.6 1.8 13.4 12 3.6 22.2c-.4-.2-.6-.7-.6-1.2V3c0-.5.2-1 .6-1.2z"
        />
        <path
          fill="#FFCE00"
          d="m16.8 8.6-3.4 3.4 3.4 3.4 3.9-2.2c1.1-.6 1.1-1.8 0-2.4z"
        />
        <path
          fill="#00F076"
          d="M3.6 1.8 13.4 12l3.4-3.4L5.2 2c-.6-.4-1.2-.4-1.6-.2z"
        />
        <path
          fill="#F83F52"
          d="M3.6 22.2c.4.2 1 .2 1.6-.2l11.6-6.6-3.4-3.4z"
        />
      </svg>
    ),
  },
  {
    id: "gemini",
    nombre: "Google Gemini IA",
    subtitulo: "Carga tu catálogo por foto",
    detalle:
      "Digitaliza tu lista de precios desde 1 foto para entregarte el taller listo. Además, impulsa el Asistente MAZA que consulta tu inventario, cola y caja real en segundos.",
    datoClave: "Lee solo los datos reales de tu taller · No inventa precios",
    colorBorde: "border-[#8C65F7]",
    spanDosCol: true,
    icono: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="gemini-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4E82EE" />
            <stop offset="50%" stopColor="#8C65F7" />
            <stop offset="100%" stopColor="#D96570" />
          </linearGradient>
        </defs>
        <path
          fill="url(#gemini-grad)"
          d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81"
        />
      </svg>
    ),
  },
];

export function TecnologiasBar() {
  const [activaId, setActivaId] = useState<string | null>(null);
  const activa = TECNOLOGIAS.find((t) => t.id === activaId) ?? null;

  return (
    <section className="border-y border-[#26262C] bg-[#0E0E11] px-5 py-4 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6E6E77]">
            CONECTADO CON LA TECNOLOGÍA DE
          </p>
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-[#9A9AA3]">
            <svg
              viewBox="0 0 24 24"
              className="h-3 w-3 shrink-0 text-[#FF9900]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
            </svg>
            <span>Toca un ícono para ver qué hace</span>
          </span>
        </div>

        {/* Fila minimalista de 5 íconos oficiales */}
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-5">
          {TECNOLOGIAS.map((t) => {
            const seleccionada = t.id === activaId;
            return (
              <button
                key={t.id}
                type="button"
                aria-expanded={seleccionada}
                onClick={() => setActivaId((prev) => (prev === t.id ? null : t.id))}
                className={`group flex items-center justify-between gap-2 rounded-sm border px-3 py-2 text-left transition-colors cursor-pointer ${
                  t.spanDosCol ? "col-span-2 lg:col-span-1" : "col-span-1"
                } ${
                  seleccionada
                    ? "border-[#FF9900] bg-[#1C1C21]"
                    : "border-[#26262C] bg-[#141417]/80 hover:border-[#FF9900]/50 hover:bg-[#141417]"
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-xs border transition-colors ${
                      seleccionada
                        ? "border-[#FF9900]/60 bg-[#0A0A0A]"
                        : "border-[#26262C] bg-[#1C1C21] group-hover:border-[#FF9900]/30"
                    }`}
                  >
                    {t.icono}
                  </span>
                  <span className="text-xs font-bold leading-tight text-[#F2F2F5] truncate">
                    {t.nombre}
                  </span>
                </div>
                <span
                  className={`shrink-0 font-mono text-[10px] font-bold transition-transform ${
                    seleccionada ? "text-[#FF9900]" : "text-[#6E6E77] group-hover:text-[#FF9900]"
                  }`}
                  aria-hidden="true"
                >
                  {seleccionada ? "▴" : "▾"}
                </span>
              </button>
            );
          })}
        </div>

        {/* Franja inline instantánea (sin popups ni modales) */}
        {activa && (
          <div
            className={`mt-2 flex flex-col justify-between gap-2 rounded-sm border border-[#26262C] border-l-2 ${activa.colorBorde} bg-[#141417] px-3.5 py-2.5 sm:flex-row sm:items-center sm:gap-4`}
          >
            <p className="text-xs leading-relaxed text-[#F2F2F5]">
              <strong className="font-bold text-[#FF9900]">{activa.nombre}: </strong>
              {activa.detalle}
            </p>
            <div className="flex items-center justify-between gap-3 sm:shrink-0">
              <span className="font-mono text-[10px] font-bold text-[#22A559]">
                ✓ {activa.datoClave}
              </span>
              <button
                type="button"
                onClick={() => setActivaId(null)}
                className="font-mono text-[10px] text-[#9A9AA3] hover:text-[#F2F2F5] cursor-pointer px-1"
                aria-label="Cerrar detalle"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
