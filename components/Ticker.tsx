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
          display:    "flex",
          gap:        "0px",
          alignItems: "center",
          animation:  "ticker 30s linear infinite",
          whiteSpace: "nowrap",
        }}
      >
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "72px", flexShrink: 0 }}>
            <span
              style={{
                fontFamily:    "var(--font-display)",
                fontWeight:    700,
                fontSize:      "24px",
                color:         "var(--text-secondary)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              {item}
            </span>
            <span style={{ color: "var(--neon)", fontSize: "10px", opacity: 0.6 }}>✦</span>
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
