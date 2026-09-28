/**
 * De dónde llegó la visita. Se decide una vez por sesión, con la primera
 * página vista: el `utm_source` del link (bio o anuncio) manda; si no viene,
 * el referrer o el navegador interno de la app (Instagram y TikTok abren los
 * links en su propio navegador y se identifican en el user agent).
 * Solo cliente: usa window.
 */
const CLAVE = "maza_origen";

const NOMBRES: Record<string, string> = {
  tiktok: "TikTok",
  tt: "TikTok",
  instagram: "Instagram",
  ig: "Instagram",
  facebook: "Facebook",
  fb: "Facebook",
  whatsapp: "WhatsApp",
  google: "Google",
};

function detectar(): string {
  const utm = new URLSearchParams(location.search).get("utm_source")?.trim().toLowerCase();
  if (utm) return utm;

  const ua = navigator.userAgent;
  if (/musical_ly|TikTok|BytedanceWebview/i.test(ua)) return "tiktok";
  if (/Instagram/i.test(ua)) return "instagram";
  if (/FBAN|FBAV/i.test(ua)) return "facebook";

  const ref = document.referrer.toLowerCase();
  for (const red of ["tiktok", "instagram", "facebook", "google"]) {
    if (ref.includes(red)) return red;
  }
  return "directo";
}

export function origenVisita(): string {
  try {
    const guardado = sessionStorage.getItem(CLAVE);
    if (guardado) return guardado;
    const origen = detectar();
    sessionStorage.setItem(CLAVE, origen);
    return origen;
  } catch {
    return detectar();
  }
}

/** Nombre para el mensaje de WhatsApp, o null si no aporta (directo). */
export function nombreOrigen(origen: string): string | null {
  if (origen === "directo") return null;
  return NOMBRES[origen] ?? origen;
}

const CLAVE_REF = "maza_ref";

/**
 * Código de referido (`?ref=`) de la primera página que lo trajo en esta
 * sesión. El link del referido suele apuntar a la portada o a /registro, y el
 * alta está dos clics más allá: sin guardarlo, se perdía en el camino.
 */
export function refVisita(): string | null {
  try {
    const enUrl = new URLSearchParams(location.search).get("ref")?.trim();
    if (enUrl) {
      sessionStorage.setItem(CLAVE_REF, enUrl);
      return enUrl;
    }
    return sessionStorage.getItem(CLAVE_REF);
  } catch {
    return null;
  }
}
