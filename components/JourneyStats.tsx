"use client";

import { useEffect, useRef } from "react";

const stats = [
  { value: "12+",  label: "Global Locations" },
  { value: "27K+", label: "Active Members"   },
  { value: "98%",  label: "Satisfaction Rate" },
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
      className={className}
      style={{ backgroundColor: "var(--bg-primary)", padding: "96px 40px" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div
          className="reveal"
          style={{
            display:        "flex",
            justifyContent: "space-between",
            alignItems:     "flex-end",
            marginBottom:   "56px",
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
                fontSize:      "clamp(2.5rem, 5vw, 4rem)",
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
            borderRadius: "24px",
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
              <div
                style={{
                  padding:        "48px 60px",
                  display:        "flex",
                  alignItems:     "center",
                  justifyContent: "space-between",
                  flexWrap:       "wrap",
                  gap:            "16px",
                }}
              >
                <p
                  style={{
                    fontFamily:    "var(--font-display)",
                    fontWeight:    900,
                    fontSize:      "clamp(4rem, 10vw, 8rem)",
                    lineHeight:    1,
                    letterSpacing: "-0.03em",
                    color:         "var(--text-primary)",
                    textTransform: "uppercase",
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    fontFamily:    "var(--font-body)",
                    fontWeight:    400,
                    fontSize:      "1.125rem",
                    color:         "var(--text-secondary)",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
