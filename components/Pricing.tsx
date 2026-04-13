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
    name:     "Basic",
    price:    "$25",
    features: ["Gym floor access", "Cardio Hub", "2 group classes/month", "Locker room access"],
  },
  {
    name:     "Standard",
    price:    "$35",
    features: ["Everything in Basic", "Unlimited group classes", "Yoga Studio access", "1 PT session/month"],
  },
  {
    name:        "Elite",
    price:       "$45",
    features:    ["Everything in Standard", "Unlimited PT sessions", "Pilates priority", "Nutrition coaching", "24/7 access"],
    highlighted: true,
  },
];

function PricingCard({ name, price, features, highlighted }: PlanProps) {
  return (
    <div
      style={{
        flex:            "1 1 300px",
        maxWidth:        "420px",
        borderRadius:    "20px",
        border:          highlighted ? "2px solid var(--neon)" : "1px solid var(--border-default)",
        backgroundColor: highlighted ? "#0d1f00" : "var(--bg-tertiary)",
        padding:         "40px 32px",
        display:         "flex",
        flexDirection:   "column",
        gap:             "24px",
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
            fontSize:      "1.25rem",
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
              fontSize:      "3.5rem",
              lineHeight:    1,
              letterSpacing: "-0.02em",
              color:         "var(--text-primary)",
            }}
          >
            {price}
          </span>
          <span
            style={{
              fontFamily:   "var(--font-body)",
              fontWeight:   500,
              fontSize:     "1rem",
              color:        "var(--text-tertiary)",
              paddingBottom:"6px",
            }}
          >
            /mo
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
              alignItems: "center",
              gap:        "10px",
              fontFamily: "var(--font-body)",
              fontSize:   "0.9375rem",
              color:      "var(--text-secondary)",
            }}
          >
            <span style={{ color: "var(--neon)", flexShrink: 0 }}>✓</span>
            {f}
          </li>
        ))}
      </ul>

      <Link
        href="/membership"
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
      className={className}
      style={{ backgroundColor: "var(--bg-secondary)", padding: "96px 40px" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: "64px" }}>
          <p className="section-label" style={{ marginBottom: "12px" }}>03 / Membership</p>
          <h2
            style={{
              fontFamily:    "var(--font-display)",
              fontWeight:    900,
              fontSize:      "clamp(2.5rem, 5vw, 4rem)",
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
              fontSize:   "1rem",
              color:      "var(--text-secondary)",
            }}
          >
            No contracts. No hidden fees. Cancel anytime.
          </p>
        </div>

        <div
          className="reveal"
          style={{
            display:        "flex",
            gap:            "24px",
            justifyContent: "center",
            flexWrap:       "wrap",
            alignItems:     "stretch",
          }}
        >
          {plans.map((p) => (
            <PricingCard key={p.name} {...p} />
          ))}
        </div>

        <div
          className="reveal"
          style={{ textAlign: "center", marginTop: "48px" }}
        >
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "var(--text-tertiary)", marginBottom: "16px" }}>
            Need a custom plan for your team or corporation?
          </p>
          <Link href="/contact" className="btn-secondary">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
