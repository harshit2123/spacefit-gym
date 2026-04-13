"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const services = [
  { name: "Strength Zone",    slots: "07 / 10", href: "/services" },
  { name: "Cardio Hub",       slots: "05 / 10", href: "/services" },
  { name: "Yoga Studio",      slots: "09 / 10", href: "/services" },
  { name: "Pilates Room",     slots: "03 / 10", href: "/services" },
];

export default function PremiumServices({ className }: { className?: string }) {
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
      id="classes"
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
            <p className="section-label" style={{ marginBottom: "12px" }}>02 / Services</p>
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
              Premium{" "}
              <span style={{ color: "var(--neon)" }}>Services</span>
            </h2>
          </div>
          <Link href="/services" className="btn-secondary" style={{ flexShrink: 0 }}>
            View All
          </Link>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap:                 "20px",
          }}
        >
          {services.map((s, i) => (
            <Link
              key={s.name}
              href={s.href}
              className="reveal service-card"
              style={{
                position:        "relative",
                height:          "380px",
                borderRadius:    "20px",
                overflow:        "hidden",
                border:          "1px solid var(--border-default)",
                textDecoration:  "none",
                display:         "block",
                animationDelay:  `${i * 80}ms`,
                transition:      "border-color 0.3s ease-out, transform 0.3s ease-out",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(0,255,46,0.4)";
                el.style.transform   = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--border-default)";
                el.style.transform   = "translateY(0)";
              }}
            >
              {/* Card image placeholder */}
              <div
                style={{
                  position:   "absolute",
                  inset:      0,
                  background: `linear-gradient(135deg, #${["2a3a2a","1a2a3a","2a1a3a","3a2a1a"][i]} 0%, #111 100%)`,
                }}
              />

              {/* Gradient overlay */}
              <div
                style={{
                  position:   "absolute",
                  inset:      0,
                  background: "linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,0.85) 70%, #000 100%)",
                }}
              />

              {/* Content */}
              <div
                style={{
                  position:  "absolute",
                  bottom:    "24px",
                  left:      "24px",
                  right:     "24px",
                }}
              >
                <div
                  style={{
                    display:        "flex",
                    justifyContent: "space-between",
                    alignItems:     "flex-end",
                    marginBottom:   "12px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 600,
                      fontSize:   "1.125rem",
                      color:      "var(--text-primary)",
                      lineHeight: 1.2,
                    }}
                  >
                    {s.name}
                  </p>
                  <span
                    style={{
                      display:         "flex",
                      alignItems:      "center",
                      justifyContent:  "center",
                      width:           "32px",
                      height:          "32px",
                      borderRadius:    "50%",
                      backgroundColor: "rgba(0,255,46,0.15)",
                      border:          "1px solid rgba(0,255,46,0.3)",
                      color:           "var(--neon)",
                      fontSize:        "0.75rem",
                      flexShrink:      0,
                    }}
                  >
                    →
                  </span>
                </div>

                <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.1)", marginBottom: "10px" }} />

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span
                    style={{
                      fontFamily:    "var(--font-mono)",
                      fontSize:      "0.75rem",
                      color:         "var(--neon)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {s.slots} slots
                  </span>
                  <span
                    style={{
                      fontFamily:    "var(--font-body)",
                      fontSize:      "0.75rem",
                      color:         "var(--text-tertiary)",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    Book Now
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
