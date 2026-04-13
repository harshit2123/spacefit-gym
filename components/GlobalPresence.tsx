"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const locations = [
  { city: "Sukhlia, Indore",       country: "HQ · 2026",      active: true  },
  { city: "Vijay Nagar, Indore",   country: "Centre 2 · 2028", active: false },
  { city: "Bhopal",                country: "Centre 3 · 2029", active: false },
  { city: "Jaipur",                country: "Centre 4 · 2030", active: false },
  { city: "Nagpur",                country: "Centre 5 · 2030", active: false },
];

export default function GlobalPresence({ className }: { className?: string }) {
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
      id="global"
      className={`global-section ${className ?? ""}`}
      style={{
        position:        "relative",
        backgroundColor: "var(--bg-primary)",
        padding:         "80px 20px",
        overflow:        "hidden",
      }}
    >
      {/* Radial neon glow */}
      <div
        aria-hidden="true"
        style={{
          position:      "absolute",
          inset:         0,
          background:    "radial-gradient(ellipse 80% 60% at 50% -20%, rgba(0,255,46,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div
          className="reveal"
          style={{
            display:        "flex",
            justifyContent: "space-between",
            alignItems:     "flex-end",
            marginBottom:   "48px",
            flexWrap:       "wrap",
            gap:            "16px",
          }}
        >
          <div>
            <p className="section-label" style={{ marginBottom: "12px" }}>05 / Expansion Roadmap</p>
            <h2
              style={{
                fontFamily:    "var(--font-display)",
                fontWeight:    900,
                fontSize:      "clamp(2.2rem, 8vw, 5.5rem)",
                lineHeight:    0.95,
                letterSpacing: "-0.03em",
                textTransform: "uppercase",
                color:         "var(--text-primary)",
              }}
            >
              Built in Indore.<br />
              <span style={{ color: "var(--neon)" }}>Scaling India.</span>
            </h2>
          </div>
          <Link href="/contact" className="btn-primary" style={{ flexShrink: 0 }}>
            Visit Us
          </Link>
        </div>

        {/* Locations grid */}
        <div
          className="reveal expansion-grid"
        >
          {locations.map((loc, i) => (
            <div
              key={loc.city}
              style={{
                padding:         "24px 20px",
                borderRadius:    "16px",
                border:          loc.active ? "1px solid rgba(0,255,46,0.4)" : "1px solid var(--border-default)",
                backgroundColor: loc.active ? "#0d1f00" : "var(--bg-tertiary)",
                transition:      "border-color 0.3s, background 0.3s, transform 0.2s",
                animationDelay:  `${i * 60}ms`,
                position:        "relative",
                overflow:        "hidden",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor     = "rgba(0,255,46,0.5)";
                el.style.backgroundColor = "#0d1f00";
                el.style.transform       = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor     = loc.active ? "rgba(0,255,46,0.4)" : "var(--border-default)";
                el.style.backgroundColor = loc.active ? "#0d1f00" : "var(--bg-tertiary)";
                el.style.transform       = "translateY(0)";
              }}
            >
              {loc.active && (
                <span style={{
                  position:        "absolute",
                  top:             "12px",
                  right:           "12px",
                  width:           "6px",
                  height:          "6px",
                  borderRadius:    "50%",
                  backgroundColor: "var(--neon)",
                  boxShadow:       "0 0 8px var(--neon)",
                }} />
              )}
              <p
                style={{
                  fontFamily:    "var(--font-mono)",
                  fontSize:      "0.625rem",
                  letterSpacing: "0.1em",
                  color:         "var(--neon)",
                  textTransform: "uppercase",
                  marginBottom:  "6px",
                  opacity:       loc.active ? 1 : 0.5,
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
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .expansion-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        /* HQ card spans full width on mobile */
        .expansion-grid > div:first-child {
          grid-column: span 2;
        }
        @media (min-width: 640px) {
          .expansion-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .expansion-grid > div:first-child {
            grid-column: span 1;
          }
        }
        @media (min-width: 900px) {
          .global-section { padding: 96px 40px; }
          .expansion-grid {
            grid-template-columns: repeat(5, 1fr);
            gap: 16px;
          }
          .expansion-grid > div:first-child {
            grid-column: span 1;
          }
        }
      `}</style>
    </section>
  );
}
