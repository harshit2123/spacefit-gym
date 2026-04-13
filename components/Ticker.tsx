"use client";

const items = [
  "Pilates Coaching",
  "Strength Training",
  "HIIT Classes",
  "Personal Training",
  "Yoga & Mobility",
];

export default function Ticker({ className }: { className?: string }) {
  return (
    <div
      className={className}
      style={{
        width: "100%",
        height: "131px",
        backgroundColor: "var(--color-ticker-bg)",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "72px",
          alignItems: "center",
          animation: "ticker 20s linear infinite",
          whiteSpace: "nowrap",
        }}
      >
        {[...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 400,
              fontSize: "24px",
              color: "var(--color-text)",
              textTransform: "uppercase",
              letterSpacing: "0.02em",
              flexShrink: 0,
            }}
          >
            {item}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
