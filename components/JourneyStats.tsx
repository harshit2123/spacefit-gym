"use client";

import { useEffect, useRef } from "react";

const stats = [
  { value: "351+",  label: "Target Members at Launch"  },
  { value: "4+",    label: "Expert Coaches"            },
  { value: "98%",   label: "Member Satisfaction"       },
];

export default function JourneyStats({ className }: { className?: string }) {
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
      id="stats"
      className={`stats-section ${className ?? ""}`}
      style={{ backgroundColor: "var(--bg-primary)", padding: "80px 20px" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
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
            <p className="section-label" style={{ marginBottom: "12px" }}>04 / Numbers</p>
            <h2
              style={{
                fontFamily:    "var(--font-display)",
                fontWeight:    900,
                fontSize:      "clamp(2.2rem, 7vw, 4rem)",
                lineHeight:    1,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
                color:         "var(--text-primary)",
              }}
            >
              Journey &amp;{" "}
              <span style={{ color: "var(--neon)" }}>Stats</span>
            </h2>
          </div>
        </div>

        {/* Stats block */}
        <div
          className="reveal"
          style={{
            width:        "100%",
            borderRadius: "20px",
            border:       "1px solid var(--border-default)",
            background:   "linear-gradient(135deg, var(--bg-tertiary) 0%, var(--bg-secondary) 100%)",
            overflow:     "hidden",
          }}
        >
          {stats.map((stat, i) => (
            <div key={stat.label}>
              {i > 0 && (
                <div style={{ height: "1px", backgroundColor: "rgba(134,134,139,0.2)" }} />
              )}
              <div className="stat-row">
                <p className="stat-value">
                  {stat.value}
                </p>
                <p className="stat-label">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
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
          font-size:      clamp(3rem, 12vw, 8rem);
          line-height:    1;
          letter-spacing: -0.03em;
          color:          var(--text-primary);
          text-transform: uppercase;
        }
        .stat-label {
          font-family:    var(--font-body);
          font-weight:    400;
          font-size:      clamp(0.75rem, 2.5vw, 1.125rem);
          color:          var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          text-align:     right;
        }
        @media (min-width: 768px) {
          .stats-section { padding: 96px 32px; }
          .stat-row { padding: 40px 40px; }
        }
        @media (min-width: 1024px) {
          .stats-section { padding: 96px 40px; }
          .stat-row { padding: 48px 60px; }
        }
      `}</style>
    </section>
  );
}
