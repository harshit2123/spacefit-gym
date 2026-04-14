"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "351+", label: "Target Members at Launch", accent: "neon" },
  { value: "4+",   label: "Expert Coaches",            accent: "gold" },
  { value: "98%",  label: "Member Satisfaction",       accent: "neon" },
];

export default function JourneyStats({ className }: { className?: string }) {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  const blockRef = useRef<HTMLDivElement>(null);
  const blockInView = useInView(blockRef, { once: true, margin: "-60px" });

  return (
    <section
      id="stats"
      className={`stats-section ${className ?? ""}`}
      style={{ backgroundColor: "var(--bg-primary)", padding: "80px 20px", position: "relative", overflow: "hidden" }}
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
            <p className="section-label" style={{ marginBottom: "14px" }}>04 / Numbers</p>
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
              Journey &amp;{" "}
              <span style={{ color: "var(--neon)" }}>Stats</span>
            </h2>
          </motion.div>
        </div>

        {/* Stats block */}
        <motion.div
          ref={blockRef}
          initial={{ opacity: 0, y: 32 }}
          animate={blockInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width:        "100%",
            borderRadius: "16px",
            border:       "1px solid rgba(0,255,46,0.1)",
            background:   "linear-gradient(135deg, #131309 0%, #0d0d0a 50%, #141410 100%)",
            overflow:     "hidden",
            boxShadow:    "var(--shadow-xl), inset 0 1px 0 rgba(0,255,46,0.05)",
          }}
        >
          {/* Top gold line */}
          <div style={{ height: "1px", background: "linear-gradient(to right, transparent 0%, var(--neon) 50%, transparent 100%)", opacity: 0.2 }} />

          {stats.map((stat, i) => (
            <div key={stat.label}>
              {i > 0 && (
                <div style={{ height: "1px", background: "rgba(0,255,46,0.06)", marginLeft: "24px", marginRight: "24px" }} />
              )}
              <motion.div
                className="stat-row"
                initial={{ opacity: 0, x: -20 }}
                animate={blockInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="stat-value">
                  {/* Number part */}
                  <span>{stat.value.replace(/[+%]$/, "")}</span>
                  {/* Symbol accent */}
                  <span style={{
                    color: "var(--neon)",
                  }}>
                    {stat.value.match(/[+%]$/)?.[0] ?? ""}
                  </span>
                </p>
                <p className="stat-label">
                  {stat.label}
                </p>
              </motion.div>
            </div>
          ))}

          {/* Bottom border */}
          <div style={{ height: "1px", background: "rgba(0,255,46,0.04)" }} />
        </motion.div>
      </div>

      <style>{`
        .stat-row {
          padding: 32px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 8px;
        }
        .stat-value {
          font-family:    var(--font-display);
          font-weight:    900;
          font-size:      clamp(3.5rem, 12vw, 9rem);
          line-height:    1;
          letter-spacing: -0.04em;
          color:          var(--text-primary);
          text-transform: uppercase;
        }
        .stat-label {
          font-family:    var(--font-mono);
          font-weight:    400;
          font-size:      clamp(0.625rem, 2vw, 0.875rem);
          color:          var(--text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          text-align:     right;
          max-width:      180px;
          line-height:    1.5;
        }
        @media (min-width: 768px) {
          .stats-section { padding: 96px 32px; }
          .stat-row { padding: 40px 40px; }
        }
        @media (min-width: 1024px) {
          .stats-section { padding: 96px 40px; }
          .stat-row { padding: 48px 64px; }
        }
      `}</style>
    </section>
  );
}
