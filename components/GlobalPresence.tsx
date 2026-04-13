export default function GlobalPresence({ className }: { className?: string }) {
  return (
    <section
      className={className}
      style={{
        position: "relative",
        width: "100%",
        height: "541px",
        overflow: "hidden",
        display: "flex",
        alignItems: "flex-end",
        paddingBottom: "60px",
        paddingLeft: "30px",
      }}
    >
      {/* Radial green glow bg */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 80% at 50% -20%, rgba(126,211,33,0.20) 31%, rgba(96,160,26,0.15) 42%, rgba(37,58,12,0.08) 64%, rgba(7,7,5,0.02) 76%, transparent 100%)",
          backgroundColor: "var(--color-bg)",
        }}
      />

      <h2
        style={{
          position: "relative",
          zIndex: 1,
          fontFamily: "var(--font-space-grotesk), sans-serif",
          fontWeight: 700,
          fontSize: "64px",
          lineHeight: 1,
          color: "var(--color-text)",
          textTransform: "uppercase",
        }}
      >
        Global Presence
      </h2>
    </section>
  );
}
