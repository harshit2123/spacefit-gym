const services = [
  { name: "Strength Zone", slots: "07 of 10" },
  { name: "Cardio Hub", slots: "05 of 10" },
  { name: "Yoga Studio", slots: "09 of 10" },
  { name: "Pilates Room", slots: "03 of 10" },
];

function ArrowSmall() {
  return (
    <svg width="11" height="10" viewBox="0 0 11 10" fill="none">
      <path
        d="M1 5H10M10 5L6 1M10 5L6 9"
        stroke="#7ed321"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PremiumServices({ className }: { className?: string }) {
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
          Premium{" "}
          <span style={{ color: "var(--color-primary)" }}>Services</span>
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

      {/* Cards grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 302px)",
          gap: "58px",
        }}
      >
        {services.map((s) => (
          <div
            key={s.name}
            style={{
              position: "relative",
              width: "302px",
              height: "397px",
              borderRadius: "29px",
              overflow: "hidden",
              border: "1px solid var(--color-border)",
            }}
          >
            {/* Image bg */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "var(--color-border-light)",
              }}
            />
            {/* Gradient overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0) 12%, rgba(0,0,0,0.89) 72%, #000 100%)",
              }}
            />
            {/* Card content */}
            <div
              style={{
                position: "absolute",
                bottom: "21px",
                left: "30px",
                right: "29px",
              }}
            >
              {/* Name + badge row */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  marginBottom: "11px",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 500,
                    fontSize: "24px",
                    lineHeight: 1.05,
                    color: "var(--color-text)",
                    width: "157px",
                  }}
                >
                  {s.name}
                </p>
                <div
                  style={{
                    backgroundColor: "var(--color-primary-dark)",
                    borderRadius: "29px",
                    width: "59px",
                    height: "29px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "4px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 300,
                      fontSize: "14px",
                      color: "var(--color-primary)",
                    }}
                  >
                    of
                  </span>
                  <ArrowSmall />
                </div>
              </div>

              {/* Divider */}
              <div
                style={{
                  height: "1px",
                  backgroundColor: "rgba(134,134,139,0.4)",
                  marginBottom: "11px",
                }}
              />

              {/* Slots */}
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    color: "var(--color-text-muted)",
                    marginBottom: "4px",
                  }}
                >
                  {s.slots}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 500,
                    fontSize: "24px",
                    color: "var(--color-text)",
                  }}
                >
                  {s.slots}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
