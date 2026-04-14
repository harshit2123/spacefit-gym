"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const locations = [
  { city: "Sukhlia, Indore",       country: "HQ · 2026",       active: true  },
  { city: "Vijay Nagar, Indore",   country: "Centre 2 · 2028",  active: false },
  { city: "Bhopal",                country: "Centre 3 · 2029",  active: false },
  { city: "Jaipur",                country: "Centre 4 · 2030",  active: false },
  { city: "Nagpur",                country: "Centre 5 · 2030",  active: false },
];

export default function GlobalPresence({ className }: { className?: string }) {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <section
      id="global"
      className={`global-section ${className ?? ""}`}
      style={{
        position:        "relative",
        backgroundColor: "var(--bg-primary)",
        padding:         "80px 20px",
        overflow:        "hidden",
      }}
    >

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
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
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="section-label" style={{ marginBottom: "14px" }}>05 / Expansion Roadmap</p>
            <h2
              style={{
                fontFamily:    "var(--font-display)",
                fontWeight:    900,
                fontSize:      "clamp(2.4rem, 8vw, 5.5rem)",
                lineHeight:    0.92,
                letterSpacing: "-0.03em",
                textTransform: "uppercase",
                color:         "var(--text-primary)",
              }}
            >
              Built in Indore.<br />
              <span style={{ color: "var(--neon)" }}>Scaling India.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={headerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/contact" className="btn-primary" style={{ flexShrink: 0 }}>
              Visit Us
            </Link>
          </motion.div>
        </div>

        {/* Locations grid */}
        <div ref={gridRef} className="expansion-grid">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.city}
              initial={{ opacity: 0, y: 28 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              style={{
                padding:         "22px 20px",
                borderRadius:    "12px",
                border:          loc.active
                  ? "1px solid rgba(0,255,46,0.2)"
                  : "1px solid var(--border-default)",
                backgroundColor: "var(--bg-secondary)",
                transition:      "border-color 0.3s, background 0.3s, transform 0.25s, box-shadow 0.3s",
                position:        "relative",
                overflow:        "hidden",
                boxShadow:       "inset 0 1px 0 rgba(255,255,255,0.03)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = loc.active ? "rgba(0,255,46,0.35)" : "rgba(0,255,46,0.12)";
                el.style.transform   = "translateY(-3px)";
                el.style.boxShadow   = "var(--shadow-md), inset 0 1px 0 rgba(255,255,255,0.05)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = loc.active ? "rgba(0,255,46,0.2)" : "var(--border-default)";
                el.style.transform   = "translateY(0)";
                el.style.boxShadow   = "inset 0 1px 0 rgba(255,255,255,0.03)";
              }}
            >
              {/* Active dot */}
              {loc.active && (
                <span style={{
                  position:        "absolute",
                  top:             "12px",
                  right:           "12px",
                  width:           "6px",
                  height:          "6px",
                  borderRadius:    "50%",
                  backgroundColor: "var(--neon)",
                }} />
              )}
              <p
                style={{
                  fontFamily:    "var(--font-mono)",
                  fontSize:      "0.5625rem",
                  letterSpacing: "0.12em",
                  color:         "var(--neon)",
                  textTransform: "uppercase",
                  marginBottom:  "6px",
                  opacity:       loc.active ? 0.9 : 0.45,
                }}
              >
                {loc.country}
              </p>
              <p
                style={{
                  fontFamily:    "var(--font-display)",
                  fontWeight:    700,
                  fontSize:      "1rem",
                  letterSpacing: "-0.01em",
                  textTransform: "uppercase",
                  color:         loc.active ? "var(--text-primary)" : "var(--text-tertiary)",
                  lineHeight:    1.2,
                }}
              >
                {loc.city}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .expansion-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .expansion-grid > div:first-child { grid-column: span 2; }

        @media (min-width: 640px) {
          .expansion-grid { grid-template-columns: repeat(3, 1fr); }
          .expansion-grid > div:first-child { grid-column: span 1; }
        }
        @media (min-width: 768px) {
          .global-section { padding: 96px 32px; }
        }
        @media (min-width: 1024px) {
          .global-section { padding: 96px 40px; }
          .expansion-grid {
            grid-template-columns: repeat(5, 1fr);
            gap: 14px;
          }
          .expansion-grid > div:first-child { grid-column: span 1; }
        }
      `}</style>
    </section>
  );
}
