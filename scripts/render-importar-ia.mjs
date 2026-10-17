// Renderiza la pantalla real "Recepción de compra · Planilla o factura" de Maza-app
// (tokens de theme/variables.scss en oscuro + _placa.scss) a 1080x1920.
import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";
const APP = "C:/Proyectos IT/Proyectos Android/Maza/Maza-app";
const require = createRequire(APP + "/package.json");
const { chromium } = require("playwright");
const F = pathToFileURL(APP + "/src/assets/fonts/barlow").href;

const svgCam = `<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="#c7c9d1" stroke-width="1.6" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`;
const svgClip = `<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="#c7c9d1" stroke-width="1.6" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg>`;

const filas = [
  ["Nombre o descripción", "obligatoria"],
  ["Cantidad", "obligatoria"],
  ["Categoría", 'si falta, "Otros"'],
  ["Costo o precio unitario", "opcional; si solo hay total, se divide"],
  ["Precio de venta", "opcional"],
];

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:Barlow;font-weight:400;src:url(${F}/Barlow-Regular.ttf)}
@font-face{font-family:Barlow;font-weight:500;src:url(${F}/Barlow-Medium.ttf)}
@font-face{font-family:Barlow;font-weight:600;src:url(${F}/Barlow-SemiBold.ttf)}
@font-face{font-family:Barlow;font-weight:700;src:url(${F}/Barlow-Bold.ttf)}
@font-face{font-family:Barlow;font-weight:800;src:url(${F}/Barlow-ExtraBold.ttf)}
*{box-sizing:border-box;margin:0}
body{width:360px;height:640px;background:#0d0d0d;color:#f2f2f5;font-family:Barlow,sans-serif;overflow:hidden}
.mono{font-family:Consolas,'Courier New',monospace}
.bar{height:56px;display:flex;align-items:center;gap:20px;padding:0 16px;font-size:20px;font-weight:800}
.seg{display:grid;grid-template-columns:1fr 1fr;background:#24262e;border-bottom:1px solid #31333c}
.seg div{text-align:center;padding:16px 0;font-size:11px;font-weight:600;letter-spacing:.12em;color:#9498a3}
.seg .on{color:#f2f2f5;box-shadow:inset 0 -2px 0 #9498a3;background:#1b1c21}
.rc{padding:16px}
.or{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.ar{display:flex;flex-direction:column;align-items:center;gap:4px;padding:24px 12px;background:#1b1c21;border:1px dashed #40424d;text-align:center}
.ar svg{margin-bottom:6px}
.t{font-size:16px;font-weight:700}.s{font-size:12.5px;color:#9498a3;line-height:1.3}
.sec{margin-top:32px;display:flex;padding-bottom:4px;border-bottom:2px solid #f2f2f5;font-size:10.5px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;font-family:Consolas,monospace}
.col{display:flex;justify-content:space-between;gap:12px;padding:8px 0;border-bottom:1px solid #2a2c34;align-items:center}
.col span{font-size:13.5px;font-weight:700;font-family:Consolas,monospace;letter-spacing:-.02em}
.col em{font-style:normal;font-size:12.5px;color:#9498a3;text-align:right;max-width:55%}
.ay{margin-top:12px;font-size:12.5px;line-height:1.45;color:#9498a3}
</style></head><body>
<div class="bar"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f2f2f5" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>Recepción de compra</div>
<div class="seg"><div>A MANO</div><div class="on">PLANILLA O FACTURA</div></div>
<div class="rc">
<div class="or">
<div class="ar">${svgCam}<div class="t">Factura o guía</div><div class="s">Foto o PDF · la lee la IA</div></div>
<div class="ar">${svgClip}<div class="t">Planilla</div><div class="s">Excel, CSV o el XML de la factura electrónica (sin IA)</div></div>
</div>
<div class="sec">Columnas que se leen de la planilla</div>
${filas.map(([a, b]) => `<div class="col"><span>${a}</span><em>${b}</em></div>`).join("")}
<p class="ay">El encabezado puede estar bajo el membrete del proveedor, y las filas de subtotal, IVA o flete se saltan. Se cruza por nombre con tu inventario; si un nombre se parece a uno tuyo, te lo pregunta antes de crear un duplicado.</p>
</div></body></html>`;

const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 360, height: 640 }, deviceScaleFactor: 3 });
await p.setContent(html);
await p.evaluate(() => document.fonts.ready);
await p.screenshot({ path: "public/screenshots/importar-ia.png" });
await b.close();
console.log("ok");
