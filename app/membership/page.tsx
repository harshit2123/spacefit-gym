import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Membership — SpaceFit",
  description: "Choose your SpaceFit membership plan. Basic, Standard, or Elite — start your journey today.",
};

const plans = [
  {
    name: "Basic",
    price: "$25",
    period: "/mo",
    features: [
      "Gym floor access",
      "Cardio Hub",
      "2 group classes/month",
      "Locker room access",
    ],
    highlighted: false,
  },
  {
    name: "Standard",
    price: "$35",
    period: "/mo",
    features: [
      "Everything in Basic",
      "Unlimited group classes",
      "Yoga Studio access",
      "1 PT session/month",
    ],
    highlighted: false,
  },
  {
    name: "Elite",
    price: "$45",
    period: "/mo",
    features: [
      "Everything in Standard",
      "Unlimited PT sessions",
      "Pilates Room priority",
      "Nutrition coaching",
      "24/7 access",
    ],
    highlighted: true,
  },
];

export default function MembershipPage() {
  return (
    <main id="main-content" style={{ backgroundColor: "var(--bg-primary)", minHeight: "100vh", paddingTop: "80px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "80px 40px" }}>
        <p className="section-label" style={{ marginBottom: "16px", textAlign: "center" }}>Plans & Pricing</p>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: "clamp(3rem, 8vw, 6rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            textTransform: "uppercase",
            color: "var(--text-primary)",
            textAlign: "center",
            marginBottom: "16px",
          }}
        >
          Choose Your<br />
          <span style={{ color: "var(--neon)" }}>Plan</span>
        </h1>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.125rem",
            color: "var(--text-secondary)",
            textAlign: "center",
            marginBottom: "64px",
          }}
        >
          No contracts. Cancel anytime.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
            maxWidth: "960px",
            margin: "0 auto",
          }}
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              style={{
                borderRadius: "20px",
                border: plan.highlighted ? "2px solid var(--neon)" : "1px solid var(--border-default)",
                backgroundColor: plan.highlighted ? "#0d1f00" : "var(--bg-tertiary)",
                padding: "40px 32px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                boxShadow: plan.highlighted
                  ? "0 0 0 1px var(--neon), 0 0 24px rgba(0,255,46,0.2), var(--shadow-lg)"
                  : "var(--shadow-md)",
                position: "relative",
                transition: "transform 0.3s ease-out, box-shadow 0.3s ease-out",
              }}
            >
              {plan.highlighted && (
                <div
                  style={{
                    position: "absolute",
                    top: "-14px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "var(--neon)",
                    color: "var(--text-inverse)",
                    fontFamily: "var(--font-body)",
                    fontWeight: 700,
                    fontSize: "0.6875rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "4px 14px",
                    borderRadius: "9999px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Most Popular
                </div>
              )}

              <div>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "1.5rem",
                    letterSpacing: "0.02em",
                    textTransform: "uppercase",
                    color: plan.highlighted ? "var(--neon)" : "var(--text-primary)",
                    marginBottom: "8px",
                  }}
                >
                  {plan.name}
                </p>
                <div style={{ display: "flex", alignItems: "flex-end", gap: "4px" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 800,
                      fontSize: "3.5rem",
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                      color: "var(--text-primary)",
                    }}
                  >
                    {plan.price}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 500,
                      fontSize: "1rem",
                      color: "var(--text-tertiary)",
                      paddingBottom: "6px",
                    }}
                  >
                    {plan.period}
                  </span>
                </div>
              </div>

              <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.08)" }} />

              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>
                {plan.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.9375rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <span style={{ color: "var(--neon)", flexShrink: 0, fontSize: "1rem" }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="btn-primary"
                style={{ justifyContent: "center", marginTop: "8px" }}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
