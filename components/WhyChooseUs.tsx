"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const features = [
  {
    label: "State of the Art Equipment",
    desc:  "Latest machines, free weights, and functional rigs.",
    href:  "/services",
  },
  {
    label: "Expert Trainers",
    desc:  "Certified coaches with elite performance backgrounds.",
    href:  "/services",
  },
  {
    label: "Wide Range of Classes",
    desc:  "Yoga, HIIT, Pilates, Strength — something for everyone.",
    href:  "/services",
  },
  {
    label: "Welcoming Community",
    desc:  "A high-performance culture that lifts everyone up.",
    href:  "/about",
  },
];

function ArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function WhyChooseUs({ className }: { className?: string }) {
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
      id="features"
      className={className}
      style={{ backgroundColor: "var(--bg-primary)", padding: "96px 40px" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Section header */}
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
            <p className="section-label" style={{ marginBottom: "12px" }}>01 / Why Us</p>
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
              Why Choose{" "}
              <span style={{ color: "var(--neon)" }}>Us</span>
            </h2>
          </div>
          <Link
            href="/about"
            className="btn-secondary"
            style={{ flexShrink: 0 }}
          >
            Our Story
          </Link>
        </div>

        {/* Two-col layout */}
        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "1fr 1fr",
            gap:                 "40px",
            alignItems:          "start",
          }}
          className="why-grid"
        >
          {/* Left — image placeholder */}
          <div
            className="reveal"
            style={{
              width:        "100%",
              height:       "520px",
              background:   "linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)",
              borderRadius: "20px",
              border:       "1px solid var(--border-default)",
              position:     "relative",
              overflow:     "hidden",
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position:   "absolute",
                bottom:     0,
                left:       0,
                right:      0,
                height:     "40%",
                background: "linear-gradient(to top, rgba(0,255,46,0.06), transparent)",
              }}
            />
            <div
              style={{
                position:      "absolute",
                bottom:        "24px",
                left:          "24px",
                right:         "24px",
                padding:       "20px 24px",
                background:    "rgba(10,10,10,0.8)",
                backdropFilter:"blur(12px)",
                borderRadius:  "12px",
                border:        "1px solid var(--border-default)",
              }}
            >
              <p className="section-label" style={{ marginBottom: "4px" }}>Active Members</p>
              <p
                style={{
                  fontFamily:    "var(--font-display)",
                  fontWeight:    800,
                  fontSize:      "2.5rem",
                  letterSpacing: "-0.02em",
                  color:         "var(--neon)",
                  lineHeight:    1,
                }}
              >
                27K+
              </p>
            </div>
          </div>

          {/* Right — feature list */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {features.map((f, i) => (
              <Link
                key={f.label}
                href={f.href}
                className="reveal feature-row"
                style={{
                  display:         "flex",
                  alignItems:      "center",
                  justifyContent:  "space-between",
                  padding:         "24px 32px",
                  borderRadius:    "16px",
                  border:          "1px solid var(--border-default)",
                  backgroundColor: "var(--bg-tertiary)",
                  textDecoration:  "none",
                  transition:      "border-color 0.3s ease-out, background 0.3s ease-out, transform 0.2s ease-out",
                  animationDelay:  `${i * 100}ms`,
                  cursor:          "pointer",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor     = "var(--neon)";
                  el.style.backgroundColor = "#0d1f00";
                  el.style.transform       = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor     = "var(--border-default)";
                  el.style.backgroundColor = "var(--bg-tertiary)";
                  el.style.transform       = "translateX(0)";
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily:  "var(--font-body)",
                      fontWeight:  600,
                      fontSize:    "1.0625rem",
                      color:       "var(--text-primary)",
                      marginBottom:"4px",
                    }}
                  >
                    {f.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 400,
                      fontSize:   "0.875rem",
                      color:      "var(--text-secondary)",
                    }}
                  >
                    {f.desc}
                  </p>
                </div>
                <span style={{ color: "var(--neon)", flexShrink: 0, marginLeft: "16px" }}>
                  <ArrowIcon />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .why-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
