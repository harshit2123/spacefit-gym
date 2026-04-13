"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const locations = [
  { city: "New York",  country: "USA"       },
  { city: "London",    country: "UK"        },
  { city: "Dubai",     country: "UAE"       },
  { city: "Singapore", country: "SG"        },
  { city: "Sydney",    country: "AUS"       },
  { city: "Toronto",   country: "CAN"       },
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
      className={className}
      style={{
        position:        "relative",
        backgroundColor: "var(--bg-primary)",
        padding:         "96px 40px",
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
            marginBottom:   "64px",
            flexWrap:       "wrap",
            gap:            "16px",
          }}
        >
          <div>
            <p className="section-label" style={{ marginBottom: "12px" }}>05 / Presence</p>
            <h2
              style={{
                fontFamily:    "var(--font-display)",
                fontWeight:    900,
                fontSize:      "clamp(2.5rem, 7vw, 5.5rem)",
                lineHeight:    0.95,
                letterSpacing: "-0.03em",
                textTransform: "uppercase",
                color:         "var(--text-primary)",
              }}
            >
              Global<br />
              <span style={{ color: "var(--neon)" }}>Presence</span>
            </h2>
          </div>
          <Link href="/contact" className="btn-primary" style={{ flexShrink: 0 }}>
            Find a Location
          </Link>
        </div>

        {/* Locations grid */}
        <div
          className="reveal"
          style={{
            display:             "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            gap:                 "12px",
          }}
        >
          {locations.map((loc, i) => (
            <div
              key={loc.city}
              style={{
                padding:         "24px",
                borderRadius:    "16px",
                border:          "1px solid var(--border-default)",
                backgroundColor: "var(--bg-tertiary)",
                transition:      "border-color 0.3s, background 0.3s, transform 0.2s",
                animationDelay:  `${i * 60}ms`,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor     = "rgba(0,255,46,0.3)";
                el.style.backgroundColor = "#0d1a00";
                el.style.transform       = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor     = "var(--border-default)";
                el.style.backgroundColor = "var(--bg-tertiary)";
                el.style.transform       = "translateY(0)";
              }}
            >
              <p
                style={{
                  fontFamily:    "var(--font-mono)",
                  fontSize:      "0.625rem",
                  letterSpacing: "0.1em",
                  color:         "var(--neon)",
                  textTransform: "uppercase",
                  marginBottom:  "6px",
                }}
              >
                {loc.country}
              </p>
              <p
                style={{
                  fontFamily:    "var(--font-display)",
                  fontWeight:    700,
                  fontSize:      "1.25rem",
                  letterSpacing: "-0.01em",
                  textTransform: "uppercase",
                  color:         "var(--text-primary)",
                }}
              >
                {loc.city}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
