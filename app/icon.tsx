import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 16,
          background: "#1a1a2e",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="44" height="44" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#f5f6fa" strokeWidth="7" />
          <circle cx="50" cy="50" r="39" fill="none" stroke="#f5f6fa" strokeWidth="2" />
          <line x1="50" y1="50" x2="50" y2="11" stroke="#f5f6fa" strokeWidth="1.8" />
          <line x1="50" y1="50" x2="69.5" y2="16.73" stroke="#f5f6fa" strokeWidth="1.8" />
          <line x1="50" y1="50" x2="83.77" y2="30.5" stroke="#f5f6fa" strokeWidth="1.8" />
          <line x1="50" y1="50" x2="89" y2="50" stroke="#f5f6fa" strokeWidth="1.8" />
          <line x1="50" y1="50" x2="83.77" y2="69.5" stroke="#f5f6fa" strokeWidth="1.8" />
          <line x1="50" y1="50" x2="69.5" y2="83.27" stroke="#f5f6fa" strokeWidth="1.8" />
          <line x1="50" y1="50" x2="50" y2="89" stroke="#f5f6fa" strokeWidth="1.8" />
          <line x1="50" y1="50" x2="30.5" y2="83.27" stroke="#f5f6fa" strokeWidth="1.8" />
          <line x1="50" y1="50" x2="16.23" y2="69.5" stroke="#f5f6fa" strokeWidth="1.8" />
          <line x1="50" y1="50" x2="11" y2="50" stroke="#f5f6fa" strokeWidth="1.8" />
          <line x1="50" y1="50" x2="16.23" y2="30.5" stroke="#f5f6fa" strokeWidth="1.8" />
          <line x1="50" y1="50" x2="30.5" y2="16.73" stroke="#f5f6fa" strokeWidth="1.8" />
          <circle cx="50" cy="50" r="6" fill="#ff9900" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
