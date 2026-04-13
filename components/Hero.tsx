"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
      <path d="M2 1.5l10 5.5-10 5.5V1.5z" />
    </svg>
  );
}

export default function Hero({ className }: { className?: string }) {
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
      id="main-content"
      className={className}
      style={{
        position:        "relative",
        minHeight:       "100vh",
        backgroundColor: "var(--bg-primary)",
        overflow:        "hidden",
        display:         "flex",
        flexDirection:   "column",
      }}
    >
      {/* Atmospheric neon glow */}
      <div
        aria-hidden="true"
        style={{
          position:      "absolute",
          inset:         0,
          background:    "radial-gradient(ellipse 60% 50% at -10% 120%, rgba(0,255,46,0.10) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Hero banner — right side */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top:      0,
          bottom:   0,
          right:    0,
          width:    "55%",
          overflow: "hidden",
        }}
      >
        <Image
          src="/hero-banner.png"
          alt=""
          role="presentation"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center top" }}
          sizes="55vw"
        />
        {/* Fade left edge into background */}
        <div
          style={{
            position:   "absolute",
            inset:      0,
            background: "linear-gradient(to right, var(--bg-primary) 0%, rgba(10,10,10,0.6) 35%, transparent 100%)",
          }}
        />
      </div>

      {/* Main content */}
      <div
        style={{
          position:   "relative",
          zIndex:     10,
          flex:       1,
          display:    "flex",
          alignItems: "center",
          maxWidth:   "1280px",
          margin:     "0 auto",
          width:      "100%",
          padding:    "80px 40px",
        }}
      >
        <div style={{ maxWidth: "580px" }}>
          <p className="section-label animate-fadeIn" style={{ marginBottom: "20px" }}>
            India&apos;s First AI-Powered Phygital Wellness Ecosystem — Indore
          </p>

          <h1
            className="animate-slideUp"
            style={{
              fontFamily:    "var(--font-display)",
              fontWeight:    900,
              fontSize:      "clamp(3.5rem, 8vw, 6.5rem)",
              lineHeight:    0.95,
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
              color:         "var(--text-primary)",
              marginBottom:  "24px",
            }}
          >
            Break Your<br />
            Biological<br />
            <span style={{ color: "var(--neon)" }}>Ceiling</span>
          </h1>

          <p
            className="animate-slideUp delay-200"
            style={{
              fontFamily:   "var(--font-body)",
              fontWeight:   400,
              fontSize:     "1.125rem",
              lineHeight:   1.65,
              color:        "var(--text-secondary)",
              maxWidth:     "460px",
              marginBottom: "16px",
            }}
          >
            SpaceFit — Your Fitness Space. Where Health Meets Habit.
            AI-driven habit intelligence, elite coaching, and Indore&apos;s
            only Steam Room recovery — built for high-performance living.
          </p>

          <p
            className="animate-slideUp delay-300"
            style={{
              fontFamily:    "var(--font-mono)",
              fontSize:      "0.75rem",
              letterSpacing: "0.12em",
              color:         "var(--neon)",
              textTransform: "uppercase",
              marginBottom:  "40px",
              opacity:       0.8,
            }}
          >
            Sukhlia, Near MR-10 · Indore, MP
          </p>

          {/* CTAs */}
          <div
            className="animate-slideUp delay-400"
            style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px" }}
          >
            <Link
              href="/contact"
              className="btn-primary"
              style={{ padding: "14px 32px", fontSize: "0.9375rem" }}
            >
              Get a Tour
            </Link>

            <Link
              href="#classes"
              style={{
                display:        "flex",
                alignItems:     "center",
                gap:            "12px",
                color:          "var(--text-secondary)",
                textDecoration: "none",
                transition:     "color 0.2s ease-out",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              <span
                style={{
                  width:          "44px",
                  height:         "44px",
                  borderRadius:   "50%",
                  border:         "1px solid rgba(255,255,255,0.2)",
                  background:     "rgba(255,255,255,0.05)",
                  display:        "flex",
                  alignItems:     "center",
                  justifyContent: "center",
                  flexShrink:     0,
                  transition:     "border-color 0.3s, background 0.3s",
                }}
              >
                <PlayIcon />
              </span>
              <span
                style={{
                  fontFamily:    "var(--font-body)",
                  fontWeight:    500,
                  fontSize:      "0.875rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Explore Services
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden="true"
        style={{
          position:      "absolute",
          bottom:        "32px",
          left:          "50%",
          transform:     "translateX(-50%)",
          display:       "flex",
          flexDirection: "column",
          alignItems:    "center",
          gap:           "6px",
          color:         "var(--text-tertiary)",
        }}
        className="scroll-bounce"
      >
        <span
          style={{
            fontFamily:    "var(--font-mono)",
            fontSize:      "0.625rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 2v10M2 7l5 5 5-5" />
        </svg>
      </div>

      {/* Secondary nav bar */}
      <div
        style={{
          position:        "relative",
          zIndex:          10,
          borderTop:       "1px solid var(--border-default)",
          backgroundColor: "rgba(20,20,20,0.8)",
          backdropFilter:  "blur(8px)",
        }}
      >
        <div
          style={{
            maxWidth:   "1280px",
            margin:     "0 auto",
            padding:    "0 40px",
            height:     "48px",
            display:    "flex",
            alignItems: "center",
            gap:        "32px",
            overflowX:  "auto",
          }}
        >
          {[
            { label: "Features", href: "#features" },
            { label: "Classes",  href: "#classes" },
            { label: "Pricing",  href: "#pricing" },
            { label: "Contact",  href: "/contact" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              style={{
                fontFamily:     "var(--font-body)",
                fontWeight:     500,
                fontSize:       "0.75rem",
                letterSpacing:  "0.08em",
                textTransform:  "uppercase",
                color:          "var(--text-tertiary)",
                textDecoration: "none",
                whiteSpace:     "nowrap",
                transition:     "color 0.2s ease-out",
                flexShrink:     0,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-tertiary)")}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .scroll-bounce { animation: heroBounce 1.5s ease-in-out infinite; }
        @keyframes heroBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
    </section>
  );
}
