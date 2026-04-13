"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const services = [
  { name: "Open Gym Floor",         slots: "Cardio + Resistance + Free Weights", href: "/contact" },
  { name: "Zumba & Group Fitness",  slots: "HIIT · Yoga · Dance Cardio",         href: "/contact" },
  { name: "Steam Room Recovery",    slots: "Electrolyte Station Included",        href: "/contact" },
  { name: "Personal Training",      slots: "Certified Coaches · 1-on-1",         href: "/contact" },
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
      className={`services-section ${className ?? ""}`}
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
            <p className="section-label" style={{ marginBottom: "12px" }}>02 / Services</p>
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
              Premium{" "}
              <span style={{ color: "var(--neon)" }}>Services</span>
            </h2>
          </div>
          <Link href="#classes" className="btn-secondary" style={{ flexShrink: 0 }}>
            View All
          </Link>
        </div>

        {/* Cards grid */}
        <div className="services-grid">
          {services.map((s, i) => (
            <Link
              key={s.name}
              href={s.href}
              className="reveal service-card"
              style={{
                position:       "relative",
                borderRadius:   "20px",
                overflow:       "hidden",
                border:         "1px solid var(--border-default)",
                textDecoration: "none",
                display:        "block",
                animationDelay: `${i * 80}ms`,
                transition:     "border-color 0.3s ease-out, transform 0.3s ease-out",
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
                  paddingTop: "62%",
                  background: `linear-gradient(135deg, #${["2a3a2a","1a2a3a","2a1a3a","3a2a1a"][i]} 0%, #111 100%)`,
                  position:   "relative",
                }}
              />

              {/* Gradient overlay */}
              <div
                style={{
                  position:   "absolute",
                  inset:      0,
                  background: "linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(0,0,0,0.85) 70%, #000 100%)",
                }}
              />

              {/* Content */}
              <div
                style={{
                  position: "absolute",
                  bottom:   "20px",
                  left:     "20px",
                  right:    "20px",
                }}
              >
                <div
                  style={{
                    display:        "flex",
                    justifyContent: "space-between",
                    alignItems:     "flex-end",
                    marginBottom:   "10px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 600,
                      fontSize:   "1rem",
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

                <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.1)", marginBottom: "8px" }} />

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px" }}>
                  <span
                    style={{
                      fontFamily:    "var(--font-mono)",
                      fontSize:      "0.6875rem",
                      color:         "var(--neon)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {s.slots}
                  </span>
                  <span
                    style={{
                      fontFamily:    "var(--font-body)",
                      fontSize:      "0.6875rem",
                      color:         "var(--text-tertiary)",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      flexShrink:    0,
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

      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        @media (max-width: 480px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (min-width: 768px) {
          .services-section {
            padding: 96px 32px;
          }
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }
        @media (min-width: 1024px) {
          .services-section {
            padding: 96px 40px;
          }
          .services-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
