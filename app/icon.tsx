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
          background: "#1a1a2e",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="48" height="48" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="41" fill="none" stroke="#f2f2f5" strokeWidth="5.5" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="#2f6df6" strokeWidth="1.6" />
          <line x1="50" y1="15" x2="50" y2="50" stroke="#f2f2f5" strokeWidth="2.6" strokeLinecap="round" />
          <line x1="74.75" y1="25.25" x2="50" y2="50" stroke="#f2f2f5" strokeWidth="2.6" strokeLinecap="round" />
          <line x1="85" y1="50" x2="50" y2="50" stroke="#f2f2f5" strokeWidth="2.6" strokeLinecap="round" />
          <line x1="74.75" y1="74.75" x2="50" y2="50" stroke="#f2f2f5" strokeWidth="2.6" strokeLinecap="round" />
          <line x1="50" y1="85" x2="50" y2="50" stroke="#f2f2f5" strokeWidth="2.6" strokeLinecap="round" />
          <line x1="25.25" y1="74.75" x2="50" y2="50" stroke="#f2f2f5" strokeWidth="2.6" strokeLinecap="round" />
          <line x1="15" y1="50" x2="50" y2="50" stroke="#f2f2f5" strokeWidth="2.6" strokeLinecap="round" />
          <line x1="25.25" y1="25.25" x2="50" y2="50" stroke="#f2f2f5" strokeWidth="2.6" strokeLinecap="round" />
          <circle cx="50" cy="50" r="16.5" fill="#1a1a2e" stroke="#f2f2f5" strokeWidth="3.5" />
          <circle cx="50" cy="50" r="10.5" fill="#ff9900" />
          <circle cx="50" cy="50" r="4.2" fill="#1a1a2e" />
          <circle cx="50" cy="37.2" r="1.3" fill="#f2f2f5" />
          <circle cx="62.8" cy="50" r="1.3" fill="#f2f2f5" />
          <circle cx="50" cy="62.8" r="1.3" fill="#f2f2f5" />
          <circle cx="37.2" cy="50" r="1.3" fill="#f2f2f5" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
