"use client";

const items = [
  "Your Fitness Space",
  "AI Habit Intelligence",
  "Steam Room Recovery",
  "Zumba & Group Fitness",
  "Personal Training",
  "Consistency Score",
  "Where Health Meets Habit",
  "Phygital Wellness",
];

export default function Ticker({ className }: { className?: string }) {
  return (
    <div
      className={`ticker-root ${className ?? ""}`}
      style={{
        width:           "100%",
        backgroundColor: "var(--color-ticker-bg)",
        overflow:        "hidden",
        display:         "flex",
        alignItems:      "center",
        borderTop:       "1px solid rgba(255,255,255,0.05)",
        borderBottom:    "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div
        style={{
          display:    "flex",
          gap:        "0px",
          alignItems: "center",
          animation:  "ticker 30s linear infinite",
          whiteSpace: "nowrap",
        }}
      >
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "48px", flexShrink: 0 }}>
            <span
              className="ticker-text"
              style={{
                fontFamily:    "var(--font-display)",
                fontWeight:    700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color:         "var(--text-secondary)",
              }}
            >
              {item}
            </span>
            <span style={{ color: "var(--neon)", fontSize: "8px", opacity: 0.6 }}>✦</span>
          </span>
        ))}
      </div>

      <style>{`
        .ticker-root {
          height: 72px;
        }
        .ticker-text {
          font-size: 16px;
        }
        @media (min-width: 768px) {
          .ticker-root {
            height: 96px;
          }
          .ticker-text {
            font-size: 22px;
          }
        }
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
