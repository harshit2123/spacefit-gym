"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: "2px" }}>
      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PricingCard({ name, price, features, highlighted }: PlanProps) {
  return (
    <motion.div
      whileHover={{ y: highlighted ? -6 : -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{
        borderRadius:    "16px",
        border:          highlighted
          ? "1px solid rgba(0,255,46,0.35)"
          : "1px solid rgba(0,255,46,0.1)",
        backgroundColor: highlighted ? "#091209" : "var(--bg-secondary)",
        padding:         "32px 24px",
        display:         "flex",
        flexDirection:   "column",
        gap:             "20px",
        boxShadow:       highlighted
          ? "0 0 0 1px rgba(0,255,46,0.1), 0 0 40px rgba(0,255,46,0.1), var(--shadow-xl)"
          : "var(--shadow-lg), inset 0 1px 0 rgba(0,255,46,0.04)",
        position:        "relative",
        overflow:        "visible",
        paddingTop:      highlighted ? "44px" : "32px",
      }}
    >
      {/* Top inner refraction border */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", borderRadius: "16px 16px 0 0", background: highlighted ? "rgba(0,255,46,0.3)" : "rgba(0,255,46,0.08)" }} />

      {highlighted && (
        <div
          style={{
            position:        "absolute",
            top:             "-14px",
            left:            "50%",
            transform:       "translateX(-50%)",
            background:      "linear-gradient(135deg, var(--neon) 0%, var(--neon-dark) 100%)",
            color:           "#050505",
            fontFamily:      "var(--font-mono)",
            fontWeight:      700,
            fontSize:        "0.5625rem",
            letterSpacing:   "0.14em",
            textTransform:   "uppercase",
            padding:         "5px 16px",
            borderRadius:    "9999px",
            whiteSpace:      "nowrap",
            boxShadow:       "0 4px 12px rgba(0,255,46,0.3)",
          }}
        >
          Most Popular
        </div>
      )}

      {/* Name + price */}
      <div>
        <p
          style={{
            fontFamily:    "var(--font-mono)",
            fontWeight:    400,
            fontSize:      "0.6875rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color:         "var(--neon)",
            marginBottom:  "14px",
            opacity:       0.9,
          }}
        >
          {name}
        </p>
        <div style={{ display: "flex", alignItems: "flex-end", gap: "4px" }}>
          <span
            style={{
              fontFamily:    "var(--font-display)",
              fontWeight:    900,
              fontSize:      "clamp(2.8rem, 6vw, 3.8rem)",
              lineHeight:    1,
              letterSpacing: "-0.03em",
              color:         "var(--text-primary)",
            }}
          >
            {price}
          </span>
          <span
            style={{
              fontFamily:    "var(--font-body)",
              fontWeight:    400,
              fontSize:      "0.875rem",
              color:         "var(--text-tertiary)",
              paddingBottom: "6px",
              letterSpacing: "0.04em",
            }}
          >
            /yr
          </span>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: "1px", background: highlighted ? "rgba(0,255,46,0.12)" : "rgba(0,255,46,0.05)" }} />

      {/* Features */}
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>
        {features.map((f) => (
          <li
            key={f}
            style={{
              display:    "flex",
              alignItems: "flex-start",
              gap:        "10px",
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              fontSize:   "0.875rem",
              color:      "var(--text-secondary)",
              lineHeight: 1.45,
            }}
          >
            <span style={{ color: "var(--neon)", opacity: 0.8 }}>
              <CheckIcon />
            </span>
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
    </motion.div>
  );
}

export default function Pricing({ className }: { className?: string }) {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section
      id="pricing"
      className={`pricing-section ${className ?? ""}`}
      style={{ backgroundColor: "var(--bg-secondary)", padding: "80px 20px", position: "relative", overflow: "hidden" }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        style={{
          position:      "absolute",
          inset:         0,
          background:    "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,255,46,0.04) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div ref={headerRef} style={{ textAlign: "center", marginBottom: "56px" }}>
          <motion.p
            className="section-label"
            style={{ marginBottom: "14px", display: "block" }}
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            03 / Membership
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily:    "var(--font-display)",
              fontWeight:    900,
              fontSize:      "clamp(2.4rem, 7vw, 4.5rem)",
              lineHeight:    0.95,
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
              color:         "var(--text-primary)",
              marginBottom:  "16px",
            }}
          >
            Simple{" "}
            <span style={{ color: "var(--neon)" }}>Pricing</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              fontSize:   "0.9375rem",
              color:      "var(--text-secondary)",
              maxWidth:   "480px",
              margin:     "0 auto",
              lineHeight: 1.65,
            }}
          >
            Annual membership. No hidden fees. Breakeven at 351 members — join the founding cohort.
          </motion.p>
        </div>

        <motion.div
          className="pricing-grid"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {plans.map((p) => (
            <PricingCard key={p.name} {...p} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ textAlign: "center", marginTop: "44px" }}
        >
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6875rem", letterSpacing: "0.1em", color: "var(--text-tertiary)", marginBottom: "18px", textTransform: "uppercase" }}>
            Corporate wellness packages available · Blended ARPU ₹16,000/yr
          </p>
          <Link href="/contact" className="btn-secondary">
            Contact Us
          </Link>
        </motion.div>
      </div>

      <style>{`
        .pricing-grid {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        @media (min-width: 768px) {
          .pricing-section { padding: 96px 32px; }
          .pricing-grid {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: stretch;
            gap: 20px;
          }
          .pricing-grid > * {
            flex: 1 1 0;
            min-width: 0;
          }
        }
        @media (min-width: 1024px) {
          .pricing-section { padding: 96px 40px; }
          .pricing-grid { gap: 24px; }
          .pricing-grid > * { max-width: 420px; }
        }
      `}</style>
    </section>
  );
}
