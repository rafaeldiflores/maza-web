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
      className={`relative aspect-[9/19.5] w-full max-w-[260px] overflow-hidden rounded-[2.25rem] border-4 border-white/15 bg-bg-start shadow-2xl shadow-black/40 ${className ?? ""}`}
    >
      <div className="pointer-events-none absolute left-1/2 top-2.5 z-10 h-1.5 w-14 -translate-x-1/2 rounded-full bg-black/40" />

      {ready ? (
        <Image
          src={`/${file}`}
          alt={alt}
          fill
          sizes="260px"
          className="object-cover"
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-2 border border-dashed border-white/15 p-4 text-center">
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6 text-ink-faint"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="3.5" y="5" width="17" height="14" rx="2" />
            <circle cx="9" cy="10.5" r="1.7" />
            <path d="m5.5 16.5 4-4 3 3 3.5-4.5 4.5 5.5" />
          </svg>
          <span className="text-xs font-medium text-ink-faint">
            Captura pendiente
          </span>
          <code className="text-[10px] leading-tight text-ink-faint/70">
            /public/{file}
          </code>
        </div>
      )}
    </div>
  );
}
