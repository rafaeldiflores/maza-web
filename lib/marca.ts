/**
 * Geometría de la marca MAZA en un viewBox de 0 0 100 100.
 *
 * "Maza" es el buje: el centro de la rueda. Llanta de cinco rayos (auto, moto o
 * bici por igual) con el buje en naranjo, único acento. La fuente es
 * Maza-app/scripts/marca/generar-marca.mjs (marca-100.json): no dibujarla a
 * mano acá, copiar de ahí si cambia.
 *
 * `anillo` y `buje` se pintan con fill-rule evenodd (llevan el hueco calado).
 */
export const MARCA = {
  anillo:
    "M50.00,0.00A50.00,50.00 0 1,1 50.00,100.00A50.00,50.00 0 1,1 50.00,0.00ZM50.00,7.19A42.81,42.81 0 1,1 50.00,92.81A42.81,42.81 0 1,1 50.00,7.19Z",
  rayos:
    "M45.47,31.56L54.53,31.56L53.13,6.25L46.88,6.25ZM66.13,39.99L68.94,48.61L92.57,39.45L90.64,33.51ZM64.50,62.25L57.17,67.58L73.19,87.23L78.24,83.56ZM42.83,67.58L35.50,62.25L21.76,83.56L26.81,87.23ZM31.06,48.61L33.87,39.99L9.36,33.51L7.43,39.45Z",
  buje: "M50.00,30.31A19.69,19.69 0 1,1 50.00,69.69A19.69,19.69 0 1,1 50.00,30.31ZM50.00,42.81A7.19,7.19 0 1,1 50.00,57.19A7.19,7.19 0 1,1 50.00,42.81Z",
} as const;

export const NARANJO = "#ff9900";
export const TINTA = "#16161a";
export const CLARO = "#f2f2f5";
