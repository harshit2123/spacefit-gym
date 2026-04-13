import Link from "next/link";

const footerSections = [
  {
    heading: "Connect",
    links: ["About Us", "Our Approach", "Our Approach", "Membership"],
  },
  {
    heading: "Services",
    links: ["Pilates Coaching", "Our Approach", "Our Approach", "Membership"],
  },
  {
    heading: "Connect",
    links: ["About Us", "Our Approach", "Our Approach"],
  },
];

function ArrowIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
      <path
        d="M3 8.5H14M14 8.5L9 3.5M14 8.5L9 13.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={className}
      style={{
        backgroundColor: "#141414",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "60px 30px 40px",
      }}
    >
      {/* Top row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "60px",
          gap: "40px",
        }}
      >
        {/* Left — brand + tagline + newsletter */}
        <div style={{ maxWidth: "552px" }}>
          {/* Logo */}
          <div
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontWeight: 700,
              fontSize: "22px",
              color: "var(--color-text)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            <span>SPACE</span>
            <span style={{ color: "var(--color-primary)" }}>FIT</span>
          </div>

          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 500,
              fontSize: "24px",
              lineHeight: 1.4,
              color: "var(--color-text)",
              marginBottom: "32px",
            }}
          >
            Experience a fitness space designed around you. Cutting-edge
            technology, elite coaching.
          </p>

          {/* Newsletter input */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "454px",
              height: "71px",
              borderRadius: "45px",
              border: "1px solid var(--color-divider)",
              backgroundColor: "var(--color-surface-alt)",
              padding: "10px 10px 10px 37px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 500,
                fontSize: "24px",
                color: "var(--color-text-muted)",
              }}
            >
              Expert Trainers
            </span>
            <button
              aria-label="Submit"
              style={{
                width: "51px",
                height: "51px",
                borderRadius: "50%",
                backgroundColor: "var(--color-primary-dark)",
                border: "1px solid var(--color-primary-border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                flexShrink: 0,
              }}
            >
              <ArrowIcon />
            </button>
          </div>

          {/* Social dots */}
          <div
            style={{
              display: "flex",
              gap: "34px",
              marginTop: "32px",
            }}
          >
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  width: "51px",
                  height: "51px",
                  borderRadius: "50%",
                  backgroundColor: "var(--color-surface)",
                  border: "1px solid var(--color-border-light)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Right — nav columns */}
        <div
          style={{
            display: "flex",
            gap: "88px",
            alignItems: "flex-start",
          }}
        >
          {footerSections.map((section, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "61px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 700,
                  fontSize: "24px",
                  lineHeight: 1.33,
                  color: "var(--color-text)",
                }}
              >
                {section.heading}
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                {section.links.map((link) => (
                  <Link
                    key={link}
                    href="#"
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 500,
                      fontSize: "24px",
                      lineHeight: 1.33,
                      color: "var(--color-text-muted)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div
        style={{
          height: "1px",
          backgroundColor: "rgba(134,134,139,0.3)",
          marginBottom: "24px",
        }}
      />

      {/* Bottom bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            color: "var(--color-text-muted)",
          }}
        >
          © 2025 SpaceFit. All rights reserved.
        </p>
        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            color: "var(--color-text-muted)",
          }}
        >
          Privacy Policy · Terms of Service
        </p>
      </div>
    </footer>
  );
}
