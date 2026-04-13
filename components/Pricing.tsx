"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

interface PlanProps {
  name:        string;
  price:       string;
  features:    string[];
  highlighted?: boolean;
}

const plans: PlanProps[] = [
  {
    name:     "Student",
    price:    "₹12,000",
    features: [
      "Open Gym Floor access",
      "Group fitness classes",
      "SpaceFit app — full digital platform",
      "Consistency Score tracking",
      "Locker room access",
    ],
  },
  {
    name:        "Adult / Professional",
    price:       "₹18,000",
    highlighted: true,
    features: [
      "Everything in Student",
      "Steam Room + Electrolyte access",
      "Priority class booking",
      "Enhanced nutrition logging",
      "1 PT session / month",
    ],
  },
  {
    name:     "Premium / Corporate",
    price:    "₹24,000",
    features: [
      "Everything in Adult",
      "2× Personal Training / week",
      "Dedicated nutrition plan",
      "Wearable device integration",
      "Early access to new programmes",
    ],
  },
];

function PricingCard({ name, price, features, highlighted }: PlanProps) {
  return (
    <div
      className="pricing-card"
      style={{
        borderRadius:    "20px",
        border:          highlighted ? "2px solid var(--neon)" : "1px solid var(--border-default)",
        backgroundColor: highlighted ? "#0d1f00" : "var(--bg-tertiary)",
        padding:         "32px 24px",
        display:         "flex",
        flexDirection:   "column",
        gap:             "20px",
        boxShadow:       highlighted
          ? "0 0 0 1px var(--neon), 0 0 24px rgba(0,255,46,0.15), var(--shadow-lg)"
          : "var(--shadow-md)",
        position:        "relative",
        transition:      "transform 0.3s ease-out, box-shadow 0.3s ease-out",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      {highlighted && (
        <div
          style={{
            position:      "absolute",
            top:           "-14px",
            left:          "50%",
            transform:     "translateX(-50%)",
            background:    "var(--neon)",
            color:         "var(--text-inverse)",
            fontFamily:    "var(--font-body)",
            fontWeight:    700,
            fontSize:      "0.6875rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding:       "4px 14px",
            borderRadius:  "9999px",
            whiteSpace:    "nowrap",
          }}
        >
          Most Popular
        </div>
      )}

      <div>
        <p
          style={{
            fontFamily:    "var(--font-display)",
            fontWeight:    700,
            fontSize:      "1.125rem",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            color:         highlighted ? "var(--neon)" : "var(--text-primary)",
            marginBottom:  "12px",
          }}
        >
          {name}
        </p>
        <div style={{ display: "flex", alignItems: "flex-end", gap: "4px" }}>
          <span
            style={{
              fontFamily:    "var(--font-display)",
              fontWeight:    800,
              fontSize:      "clamp(2.5rem, 6vw, 3.5rem)",
              lineHeight:    1,
              letterSpacing: "-0.02em",
              color:         "var(--text-primary)",
            }}
          >
            {price}
          </span>
          <span
            style={{
              fontFamily:    "var(--font-body)",
              fontWeight:    500,
              fontSize:      "0.9375rem",
              color:         "var(--text-tertiary)",
              paddingBottom: "4px",
            }}
          >
            /yr
          </span>
        </div>
      </div>

      <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.08)" }} />

      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>
        {features.map((f) => (
          <li
            key={f}
            style={{
              display:    "flex",
              alignItems: "flex-start",
              gap:        "10px",
              fontFamily: "var(--font-body)",
              fontSize:   "0.9rem",
              color:      "var(--text-secondary)",
              lineHeight: 1.4,
            }}
          >
            <span style={{ color: "var(--neon)", flexShrink: 0, marginTop: "1px" }}>✓</span>
            {f}
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        className={highlighted ? "btn-primary" : "btn-secondary"}
        style={{ justifyContent: "center" }}
      >
        Get Started
      </Link>
    </div>
  );
}

export default function Pricing({ className }: { className?: string }) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const items = el.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in-view"); }),
      { threshold: 0.1 }
    );
    items.forEach((i) => obs.observe(i));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className={`pricing-section ${className ?? ""}`}
      style={{ backgroundColor: "var(--bg-secondary)", padding: "80px 20px" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: "48px" }}>
          <p className="section-label" style={{ marginBottom: "12px" }}>03 / Membership</p>
          <h2
            style={{
              fontFamily:    "var(--font-display)",
              fontWeight:    900,
              fontSize:      "clamp(2.2rem, 7vw, 4rem)",
              lineHeight:    1,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              color:         "var(--text-primary)",
              marginBottom:  "16px",
            }}
          >
            Simple{" "}
            <span style={{ color: "var(--neon)" }}>Pricing</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize:   "0.9375rem",
              color:      "var(--text-secondary)",
              maxWidth:   "480px",
              margin:     "0 auto",
              lineHeight: 1.6,
            }}
          >
            Annual membership. No hidden fees. Breakeven at 351 members — join the founding cohort.
          </p>
        </div>

        <div className="reveal pricing-grid">
          {plans.map((p) => (
            <PricingCard key={p.name} {...p} />
          ))}
        </div>

        <div
          className="reveal"
          style={{ textAlign: "center", marginTop: "40px" }}
        >
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "var(--text-tertiary)", marginBottom: "16px" }}>
            Corporate wellness packages available. Blended ARPU ₹16,000/yr.
          </p>
          <Link href="/contact" className="btn-secondary">
            Contact Us
          </Link>
        </div>
      </div>

      <style>{`
        .pricing-grid {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        @media (min-width: 640px) {
          .pricing-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            align-items: stretch;
          }
          .pricing-card:nth-child(2) {
            grid-column: span 2;
            max-width: 480px;
            margin: 0 auto;
            width: 100%;
          }
        }
        @media (min-width: 900px) {
          .pricing-section {
            padding: 96px 40px;
          }
          .pricing-grid {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: stretch;
            gap: 24px;
          }
          .pricing-card {
            flex: 1 1 300px;
            max-width: 420px;
          }
          .pricing-card:nth-child(2) {
            grid-column: unset;
            max-width: 420px;
            margin: 0;
          }
        }
      `}</style>
    </section>
  );
}
