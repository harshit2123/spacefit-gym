import Link from "next/link";

export default function Hero({ className }: { className?: string }) {
  return (
    <section
      className={className}
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        paddingTop: "110px",
        backgroundColor: "var(--color-bg)",
        overflow: "hidden",
      }}
    >
      {/* Background hero image area — dark grey overlay block */}
      <div
        style={{
          position: "absolute",
          top: "110px",
          left: 0,
          right: 0,
          height: "882px",
          background:
            "linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%)",
          opacity: 0.6,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: "40px 30px 80px",
        }}
      >
        {/* Brand tag */}
        <div
          style={{
            display: "inline-block",
            height: "62px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontWeight: 700,
              fontSize: "28px",
              color: "var(--color-text)",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: "2px",
            }}
          >
            <span>SPACE</span>
            <span style={{ color: "var(--color-primary)" }}>FIT</span>
          </div>
        </div>

        {/* Hero heading */}
        <h1
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontWeight: 700,
            fontSize: "clamp(72px, 9.7vw, 140px)",
            lineHeight: 1,
            color: "var(--color-text)",
            textTransform: "uppercase",
            maxWidth: "831px",
            marginBottom: "40px",
          }}
        >
          Break Your
          <br />
          Biological
          <br />
          Ceiling
        </h1>

        {/* Subheading */}
        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 500,
            fontSize: "24px",
            lineHeight: 1.4,
            color: "var(--color-text)",
            maxWidth: "669px",
            marginBottom: "48px",
          }}
        >
          Experience a fitness space designed around you. Cutting-edge
          technology, elite coaching and a community built for
          high-performance living.
        </p>

        {/* CTA buttons */}
        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <Link
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              height: "74px",
              padding: "0 40px",
              borderRadius: "43px",
              background: "var(--color-primary)",
              color: "#fff",
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 400,
              fontSize: "24px",
              textTransform: "uppercase",
              textDecoration: "none",
              whiteSpace: "nowrap",
              transition: "opacity 0.2s",
            }}
          >
            Get Started
          </Link>
          <Link
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              height: "74px",
              padding: "0 40px",
              borderRadius: "43px",
              border: "2px solid var(--color-border-light)",
              background: "rgba(134,134,139,0.21)",
              color: "var(--color-text)",
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 400,
              fontSize: "24px",
              textTransform: "uppercase",
              textDecoration: "none",
              whiteSpace: "nowrap",
              transition: "opacity 0.2s",
            }}
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
