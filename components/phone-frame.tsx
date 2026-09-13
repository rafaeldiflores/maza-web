import Image from "next/image";
import { mediaExists } from "@/lib/media";

export function PhoneFrame({
  file,
  alt,
  className,
}: {
  file: string;
  alt: string;
  className?: string;
}) {
  const ready = mediaExists(file);

  return (
    <div
      className={`relative aspect-[9/19.5] w-full max-w-[260px] overflow-hidden border-2 border-ink bg-surface ${className ?? ""}`}
    >
      <div className="pointer-events-none absolute left-1/2 top-2.5 z-10 h-1.5 w-14 -translate-x-1/2 bg-ink" />

      {ready ? (
        <Image
          src={`/${file}`}
          alt={alt}
          fill
          sizes="260px"
          className="object-cover"
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-3 border-t border-neutral-track p-4 text-center">
          <span className="rotulo text-[10px]">Captura pendiente</span>
          <span className="h-px w-10 bg-border-strong" />
          <code className="text-[10px] leading-tight text-ink-ghost">
            /public/{file}
          </code>
        </div>
      )}
    </div>
  );
}
