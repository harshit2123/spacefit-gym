const features = [
  { label: "State of the art equipment", active: true },
  { label: "Expert Trainers", active: false },
  { label: "Wide Range of Classes", active: false },
  { label: "Welcoming Community", active: false },
];

function ArrowIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12H19M19 12L13 6M19 12L13 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function WhyChooseUs({ className }: { className?: string }) {
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
          Why Choose{" "}
          <span style={{ color: "var(--color-primary)" }}>Us</span>
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

      {/* Content grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          alignItems: "start",
        }}
      >
        {/* Left — image placeholder */}
        <div
          style={{
            width: "100%",
            height: "501px",
            background: "var(--color-border-light)",
            borderRadius: "35px",
          }}
        />

        {/* Right — feature list */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "31px",
          }}
        >
          {features.map((f) => (
            <div
              key={f.label}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: "102px",
                padding: "0 53px 0 46px",
                borderRadius: "29px",
                border: `1px solid ${f.active ? "var(--color-primary-border)" : "var(--color-border-light)"}`,
                backgroundColor: f.active
                  ? "var(--color-primary-dark)"
                  : "var(--color-surface-alt)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 700,
                  fontSize: "30px",
                  lineHeight: 1.27,
                  color: "var(--color-text)",
                }}
              >
                {f.label}
              </span>
              <span
                style={{
                  color: f.active
                    ? "var(--color-primary)"
                    : "var(--color-text-muted)",
                }}
              >
                <ArrowIcon />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
