// Re-render de la pantalla real "Nuevo ingreso" (ingreso.page) de Maza-app, en modo
// oscuro, con los tokens de theme/variables.scss. Salida: 1080x1920.
import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";
import { writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
const APP = "C:/Proyectos IT/Proyectos Android/Maza/Maza-app";
const require = createRequire(APP + "/package.json");
const { chromium } = require("playwright");
const F = pathToFileURL(APP + "/src/assets/fonts/barlow").href;

const ic = (d) => `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
const I = {
  x: ic('<path d="M18 6L6 18M6 6l12 12"/>'),
  up: ic('<path d="M18 15l-6-6-6 6"/>'),
  wrench: ic('<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z"/>'),
  cog: ic('<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>'),
  chev: ic('<path d="M9 6l6 6-6 6"/>'),
  cam: ic('<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>'),
  clip: ic('<rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4h6v3H9z"/>'),
  cash: ic('<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/>'),
};

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:Barlow;font-weight:400;src:url(${F}/Barlow-Regular.ttf)}
@font-face{font-family:Barlow;font-weight:500;src:url(${F}/Barlow-Medium.ttf)}
@font-face{font-family:Barlow;font-weight:600;src:url(${F}/Barlow-SemiBold.ttf)}
@font-face{font-family:Barlow;font-weight:700;src:url(${F}/Barlow-Bold.ttf)}
@font-face{font-family:Barlow;font-weight:800;src:url(${F}/Barlow-ExtraBold.ttf)}
*{box-sizing:border-box;margin:0}
body{width:360px;height:640px;background:#0d0d0d;color:#f2f2f5;font-family:Barlow,sans-serif;overflow:hidden;position:relative}
.mono{font-family:Consolas,'Courier New',monospace}
.bar{height:52px;display:flex;align-items:center;justify-content:space-between;padding:0 16px;font-size:19px;font-weight:800;border-bottom:1px solid #31333c}
.pg{padding:14px 16px}
h2{display:flex;align-items:center;gap:8px;font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;font-family:Consolas,monospace;padding-bottom:4px;border-bottom:2px solid #f2f2f5;margin-bottom:10px}
h2 b{background:#f2f2f5;color:#0d0d0d;width:16px;height:16px;display:inline-flex;align-items:center;justify-content:center;font-size:10px}
.chip{display:flex;align-items:center;gap:10px;padding:8px 10px;background:#1b1c21;border:1px solid #40424d}
.av{width:30px;height:30px;background:#f2f2f5;color:#0d0d0d;font-weight:800;display:flex;align-items:center;justify-content:center}
.chip strong{display:block;font-size:14px}.chip span{font-size:11.5px;color:#9498a3}
.chip u{margin-left:auto;font-size:12px;font-weight:600;color:#c7c9d1}
.sec{margin-top:16px}
.card{background:#1b1c21;border:1px solid #40424d}
.head{display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-bottom:1px solid #2a2c34}
.head strong{font-size:15px}
.cu{padding:10px 12px;display:flex;flex-direction:column;gap:8px}
.row{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.f label{display:block;font-size:10.5px;font-weight:600;color:#c7c9d1;margin-bottom:2px}
.f div{height:30px;border:1px solid #40424d;background:#0d0d0d;padding:0 8px;display:flex;align-items:center;font-size:13px}
.f .ta{height:42px;align-items:flex-start;padding-top:6px;line-height:1.25}
.ac{display:flex;align-items:center;gap:10px;padding:8px 10px;border:1px solid #40424d;background:#0d0d0d}
.ac .ico{width:26px;height:26px;display:flex;align-items:center;justify-content:center;background:#24262e;color:#ffb020}
.ac .t{flex:1}.ac .t b{display:block;font-size:13px}.ac .t i{font-style:normal;font-size:11px;color:#9498a3}
.ac .m{font-weight:700;font-size:13px;font-family:Consolas,monospace;color:#ffb020}
.ex{display:grid;grid-template-columns:repeat(3,1fr);gap:6px}
.ex div{display:flex;align-items:center;justify-content:center;gap:5px;padding:7px 0;border:1px solid #40424d;font-size:11.5px;font-weight:600;color:#c7c9d1}
.ft{position:absolute;left:0;right:0;bottom:0;padding:10px 16px 14px;background:#1b1c21;border-top:1px solid #31333c;display:flex;justify-content:space-between;align-items:center;gap:12px}
.ft small{font-size:10px;letter-spacing:.14em;color:#9498a3;font-family:Consolas,monospace;display:block}
.ft strong{font-size:20px;font-family:Consolas,monospace;color:#ffb020}
.btn{flex:1;max-width:190px;height:44px;background:#ffb020;color:#0a0a0a;font-weight:800;font-size:15px;display:flex;align-items:center;justify-content:center}
</style></head><body>
<div class="bar"><span>Nuevo ingreso</span>${I.x}</div>
<div class="pg">
<div><h2><b>1</b> Cliente</h2>
<div class="chip"><div class="av">C</div><div><strong>Camila Rojas</strong><span>+56 9 8123 4567 · 3 visitas</span></div><u>Cambiar</u></div></div>
<div class="sec"><h2><b>2</b> Lo que deja</h2>
<div class="card"><div class="head"><strong>Honda CB 190R</strong>${I.up}</div>
<div class="cu">
<div class="row"><div class="f"><label>Marca *</label><div>Honda</div></div><div class="f"><label>Modelo *</label><div>CB 190R</div></div></div>
<div class="f"><label>Qué le pasa</label><div class="ta">Ruido al frenar y la cadena suelta</div></div>
<div class="ac"><div class="ico">${I.wrench}</div><div class="t"><b>Servicios · 2</b><i>Cambio de pastillas, Ajuste de cadena</i></div><span class="m">$38.000</span>${I.chev}</div>
<div class="ac"><div class="ico">${I.cog}</div><div class="t"><b>Repuestos · 1</b><i>Pastillas delanteras</i></div><span class="m">$14.500</span>${I.chev}</div>
<div class="ex"><div>${I.cam} Fotos · 4</div><div>${I.clip} Inspección</div><div>${I.cash} Abono</div></div>
</div></div></div>
</div>
<div class="ft"><div><small>TOTAL ESTIMADO</small><strong>$52.500</strong></div><div class="btn">Registrar ingreso</div></div>
</body></html>`;

const f = join(tmpdir(), "maza-ingreso.html");
writeFileSync(f, html);
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 360, height: 640 }, deviceScaleFactor: 3 });
await p.goto(pathToFileURL(f).href);
await p.evaluate(() => document.fonts.ready);
await p.screenshot({ path: "public/screenshots/ingreso.png" });
await b.close();
console.log("ok");

