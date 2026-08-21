import { existsSync } from "node:fs";
import { join } from "node:path";

/** true si el archivo existe en /public/<relPath>. Server-only (usa fs). */
export function mediaExists(relPath: string): boolean {
  return existsSync(join(process.cwd(), "public", relPath));
}
