"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    label: "AI Habit Intelligence",
    desc:  "Your Consistency Score. Smarter nudges. You show up — even when motivation doesn't.",
    href:  "#classes",
    num:   "01",
  },
  {
    label: "Steam Room + Electrolyte Recovery",
    desc:  "Indore's only gym with in-house steam. Recover faster. Train harder.",
    href:  "#classes",
    num:   "02",
  },
  {
    label: "Zumba, HIIT & Group Fitness",
    desc:  "High-energy studio classes led by certified coaches. Every day. Every level.",
    href:  "#classes",
    num:   "03",
  },
  {
    label: "Phygital Platform",
    desc:  "Gym floor meets AI app. Track, log, and level up — all in one place.",
    href:  "#classes",
    num:   "04",
  },
];

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function WhyChooseUs({ className }: { className?: string }) {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section
      id="features"
      className={`why-section ${className ?? ""}`}
      style={{ backgroundColor: "var(--bg-primary)", padding: "80px 20px", position: "relative", overflow: "hidden" }}
    >
      {/* Subtle gold top glow */}
      <div
        aria-hidden="true"
        style={{
          position:      "absolute",
          top:           0,
          left:          "50%",
          transform:     "translateX(-50%)",
          width:         "60%",
          height:        "1px",
          background:    "linear-gradient(to right, transparent 0%, var(--neon) 50%, transparent 100%)",
          opacity:       0.08,
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div
          ref={headerRef}
          className="why-header"
          style={{
            display:        "flex",
            justifyContent: "space-between",
            alignItems:     "flex-end",
            marginBottom:   "56px",
            flexWrap:       "wrap",
            gap:            "16px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="section-label" style={{ marginBottom: "14px" }}>01 / Why Us</p>
            <h2
              style={{
                fontFamily:    "var(--font-display)",
                fontWeight:    900,
                fontSize:      "clamp(2.4rem, 7vw, 4.5rem)",
                lineHeight:    0.95,
                letterSpacing: "-0.03em",
                textTransform: "uppercase",
                color:         "var(--text-primary)",
              }}
            >
              Why Choose{" "}
              <span style={{ color: "var(--neon)" }}>Us</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={headerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href="#features" className="btn-secondary" style={{ flexShrink: 0 }}>
              Our Story
            </Link>
          </motion.div>
        </div>

        {/* Two-col grid */}
        <div className="why-grid">
          {/* Left — luxury image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="why-image-col"
            style={{
              width:        "100%",
              background:   "linear-gradient(135deg, #181814 0%, #0f0f0c 100%)",
              borderRadius: "16px",
              border:       "1px solid rgba(0,255,46,0.1)",
              position:     "relative",
              overflow:     "hidden",
              boxShadow:    "var(--shadow-xl), inset 0 1px 0 rgba(0,255,46,0.05)",
            }}
          >
            {/* Ambient gradient */}
            <div
              aria-hidden="true"
              style={{
                position:   "absolute",
                inset:      0,
                background: "radial-gradient(ellipse 70% 50% at 50% 85%, rgba(0,255,46,0.05) 0%, transparent 65%)",
              }}
            />

            {/* Floating badge — bottom */}
            <div
              style={{
                position:        "absolute",
                bottom:          "24px",
                left:            "24px",
                right:           "24px",
                padding:         "20px 24px",
                background:      "rgba(10,10,9,0.88)",
                backdropFilter:  "blur(20px)",
                borderRadius:    "10px",
                border:          "1px solid rgba(0,255,46,0.12)",
                boxShadow:       "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
            >
              <p className="section-label" style={{ marginBottom: "4px" }}>Only Phygital Gym</p>
              <p
                style={{
                  fontFamily:    "var(--font-display)",
                  fontWeight:    900,
                  fontSize:      "clamp(1.8rem, 5vw, 2.8rem)",
                  letterSpacing: "-0.02em",
                  color:         "var(--neon)",
                  lineHeight:    1,
                }}
              >
                In Indore
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "0.8125rem", color: "var(--text-tertiary)", marginTop: "8px", letterSpacing: "0.03em" }}>
                Physical + Digital, under one roof
              </p>
            </div>
          </motion.div>

          {/* Right — feature list */}
          <div className="why-features-col">
            {features.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                style={{ flex: 1 }}
              >
                <Link
                  href={f.href}
                  className="feature-row"
                  style={{
                    display:         "flex",
                    alignItems:      "center",
                    justifyContent:  "space-between",
                    padding:         "22px 24px",
                    borderRadius:    "12px",
                    border:          "1px solid var(--border-default)",
                    backgroundColor: "var(--bg-secondary)",
                    textDecoration:  "none",
                    transition:      "border-color 0.3s, background 0.3s, transform 0.25s, box-shadow 0.3s",
                    cursor:          "pointer",
                    height:          "100%",
                    boxShadow:       "inset 0 1px 0 rgba(255,255,255,0.03)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor     = "rgba(0,255,46,0.25)";
                    el.style.backgroundColor = "var(--bg-interactive)";
                    el.style.transform       = "translateX(4px)";
                    el.style.boxShadow       = "var(--shadow-neon-sm), inset 0 1px 0 rgba(0,255,46,0.04)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor     = "var(--border-default)";
                    el.style.backgroundColor = "var(--bg-secondary)";
                    el.style.transform       = "translateX(0)";
                    el.style.boxShadow       = "inset 0 1px 0 rgba(255,255,255,0.03)";
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "16px", flex: 1, minWidth: 0, marginRight: "12px" }}>
                    {/* Number */}
                    <span
                      style={{
                        fontFamily:    "var(--font-mono)",
                        fontSize:      "0.625rem",
                        letterSpacing: "0.1em",
                        color:         "var(--neon)",
                        opacity:       0.6,
                        flexShrink:    0,
                        minWidth:      "22px",
                      }}
                    >
                      {f.num}
                    </span>
                    <div>
                      <p
                        style={{
                          fontFamily:   "var(--font-body)",
                          fontWeight:   600,
                          fontSize:     "0.9375rem",
                          color:        "var(--text-primary)",
                          marginBottom: "3px",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {f.label}
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontWeight: 300,
                          fontSize:   "0.8125rem",
                          color:      "var(--text-tertiary)",
                          lineHeight: 1.5,
                        }}
                      >
                        {f.desc}
                      </p>
                    </div>
                  </div>
                  <span style={{ color: "var(--neon)", opacity: 0.6, flexShrink: 0 }}>
                    <ArrowIcon />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .why-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .why-image-col  { min-height: 280px; }
        .why-features-col {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        @media (min-width: 768px) {
          .why-section { padding: 96px 32px; }
          .why-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 32px;
            align-items: stretch;
          }
          .why-image-col   { min-height: 400px; }
          .why-features-col { height: 100%; }
          .feature-row { flex: 1; }
        }

        @media (min-width: 1024px) {
          .why-section { padding: 96px 40px; }
          .why-grid { gap: 40px; }
          .why-image-col { min-height: 520px; }
        }
      `}</style>
    </section>
  );
}
