"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Service {
  name:  string;
  slots: string;
  href:  string;
}

const services: Service[] = [
  {
    name:  "Open Gym Floor",
    slots: "Cardio + Resistance + Free Weights",
    href:  "/contact",
  },
  {
    name:  "Zumba & Group Fitness",
    slots: "HIIT · Yoga · Dance Cardio",
    href:  "/contact",
  },
  {
    name:  "Steam Room Recovery",
    slots: "Electrolyte Station Included",
    href:  "/contact",
  },
  {
    name:  "Personal Training",
    slots: "Certified Coaches · 1-on-1",
    href:  "/contact",
  },
];

export default function PremiumServices({ className }: { className?: string }) {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section
      id="classes"
      className={`services-section ${className ?? ""}`}
      style={{ backgroundColor: "var(--bg-secondary)", padding: "80px 20px", position: "relative" }}
    >
      {/* Top luxury divider */}
      <div className="luxury-divider" />

      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div
          ref={headerRef}
          style={{
            display:        "flex",
            justifyContent: "space-between",
            alignItems:     "flex-end",
            marginBottom:   "48px",
            flexWrap:       "wrap",
            gap:            "16px",
            paddingTop:     "56px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="section-label" style={{ marginBottom: "14px" }}>02 / Services</p>
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
              Premium{" "}
              <span style={{ color: "var(--neon)" }}>Services</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <Link href="#classes" className="btn-secondary" style={{ flexShrink: 0 }}>
              View All
            </Link>
          </motion.div>
        </div>

        {/* Cards grid */}
        <div className="services-grid">
          {services.map((s, i) => {
            return (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={s.href}
                  className="service-card"
                  style={{
                    position:        "relative",
                    borderRadius:    "12px",
                    overflow:        "hidden",
                    border:          "1px solid var(--border-default)",
                    textDecoration:  "none",
                    display:         "block",
                    backgroundColor: "var(--bg-secondary)",
                    transition:      "border-color 0.3s, transform 0.28s, box-shadow 0.3s",
                    boxShadow:       "var(--shadow-md), inset 0 1px 0 rgba(255,255,255,0.03)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(0,255,46,0.25)";
                    el.style.transform   = "translateY(-4px)";
                    el.style.boxShadow   = `var(--shadow-lg), inset 0 1px 0 rgba(255,255,255,0.05)`;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--border-default)";
                    el.style.transform   = "translateY(0)";
                    el.style.boxShadow   = "var(--shadow-md), inset 0 1px 0 rgba(255,255,255,0.03)";
                  }}
                >
                  {/* Visual area */}
                  <div
                    style={{
                      paddingTop: "65%",
                      position:   "relative",
                      background: `radial-gradient(ellipse 80% 80% at 50% 100%, ${"rgba(0,255,46,0.07)"} 0%, transparent 70%)`,
                    }}
                  >
                    {/* Accent top border line */}
                    <div
                      aria-hidden="true"
                      style={{
                        position:   "absolute",
                        top:        0,
                        left:       "20%",
                        right:      "20%",
                        height:     "1px",
                        background: `linear-gradient(to right, transparent, ${"var(--neon)"}40, transparent)`,
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div style={{ padding: "20px 20px 22px" }}>
                    <div
                      style={{
                        display:        "flex",
                        justifyContent: "space-between",
                        alignItems:     "center",
                        marginBottom:   "12px",
                      }}
                    >
                      <p
                        style={{
                          fontFamily:    "var(--font-body)",
                          fontWeight:    600,
                          fontSize:      "1rem",
                          color:         "var(--text-primary)",
                          lineHeight:    1.2,
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {s.name}
                      </p>
                      <span
                        style={{
                          color:      "var(--neon)",
                          opacity:    0.7,
                          fontSize:   "1rem",
                          flexShrink: 0,
                        }}
                      >
                        →
                      </span>
                    </div>

                    <div style={{ height: "1px", background: "rgba(0,255,46,0.08)", marginBottom: "10px" }} />

                    <span
                      style={{
                        fontFamily:    "var(--font-mono)",
                        fontSize:      "0.625rem",
                        color:         "var(--text-tertiary)",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      {s.slots}
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        @media (max-width: 480px) {
          .services-grid { grid-template-columns: 1fr; }
        }
        @media (min-width: 768px) {
          .services-section { padding: 96px 32px; }
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 18px;
          }
        }
        @media (min-width: 1024px) {
          .services-section { padding: 96px 40px; }
          .services-grid { grid-template-columns: repeat(4, 1fr); gap: 20px; }
        }
      `}</style>
    </section>
  );
}
