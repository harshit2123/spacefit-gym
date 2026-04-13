export default function JourneyStats({ className }: { className?: string }) {
  return (
    <section
      className={className}
      style={{
        backgroundColor: "var(--color-bg)",
        padding: "80px 30px",
      }}
    >
      {/* Section header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "48px",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontWeight: 700,
            fontSize: "64px",
            lineHeight: 1,
            color: "var(--color-text)",
            textTransform: "uppercase",
          }}
        >
          Journey &amp;{" "}
          <span style={{ color: "var(--color-primary)" }}>Stats</span>
        </h2>
        <div
          style={{
            display: "flex",
            gap: "5px",
            alignItems: "center",
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 400,
            fontSize: "24px",
            color: "var(--color-primary)",
            textTransform: "uppercase",
          }}
        >
          <span>01</span>
          <span>-</span>
          <span>Service</span>
        </div>
      </div>

      {/* Stats block */}
      <div
        style={{
          width: "100%",
          borderRadius: "35px",
          background: "var(--color-border-light)",
          padding: "60px",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        {/* Stat 1 */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontWeight: 700,
              fontSize: "140px",
              lineHeight: 1,
              color: "var(--color-text)",
              textTransform: "uppercase",
            }}
          >
            12+
          </p>
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 400,
              fontSize: "24px",
              color: "var(--color-text-muted)",
              textTransform: "uppercase",
              marginTop: "8px",
            }}
          >
            Global Locations
          </p>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            backgroundColor: "rgba(134,134,139,0.3)",
          }}
        />

        {/* Stat 2 */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontWeight: 700,
              fontSize: "140px",
              lineHeight: 1,
              color: "var(--color-text)",
              textTransform: "uppercase",
            }}
          >
            27k+
          </p>
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 400,
              fontSize: "24px",
              color: "var(--color-text-muted)",
              textTransform: "uppercase",
              marginTop: "8px",
            }}
          >
            Members
          </p>
        </div>
      </div>
    </section>
  );
}
