"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, type Variants } from "framer-motion";

const HeroCanvas3D = dynamic(() => import("./HeroCanvas3D"), { ssr: false });

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  show:   (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: d, ease: EASE },
  }),
};

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
      <path d="M2 1.5l10 5.5-10 5.5V1.5z" />
    </svg>
  );
}

export default function Hero({ className }: { className?: string }) {
  return (
    <section
      id="main-content"
      className={`hero-section ${className ?? ""}`}
      style={{
        position:        "relative",
        backgroundColor: "var(--bg-primary)",
        overflow:        "visible",
        display:         "flex",
        flexDirection:   "column",
      }}
    >
      {/* 3D WebGL Canvas — fixed, full-page scroll-driven */}
      <HeroCanvas3D />

      {/* Luxury atmospheric layer: deep warm bottom-left glow */}
      <div
        aria-hidden="true"
        style={{
          position:      "absolute",
          inset:         0,
          background:    "radial-gradient(ellipse 60% 60% at -8% 110%, rgba(0,255,46,0.10) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 105% -10%, rgba(0,255,46,0.05) 0%, transparent 50%)",
          pointerEvents: "none",
          zIndex:        1,
        }}
      />

      {/* Right image panel — desktop/iPad */}
      <div
        aria-hidden="true"
        className="hero-image-panel"
        style={{
          position: "absolute",
          top:      0,
          bottom:   0,
          right:    0,
          width:    "55%",
          overflow: "hidden",
          zIndex:   1,
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
        {/* Multi-layer fade for seamless bleed */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, var(--bg-primary) 0%, rgba(10,10,10,0.6) 35%, transparent 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, var(--bg-primary) 0%, transparent 22%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, var(--bg-primary) 0%, transparent 12%)" }} />
      </div>

      {/* Main text content */}
      <div
        className="hero-content"
        style={{
          position:   "relative",
          zIndex:     10,
          flex:       1,
          display:    "flex",
          alignItems: "center",
          maxWidth:   "1280px",
          margin:     "0 auto",
          width:      "100%",
        }}
      >
        <div className="hero-text-block">

          {/* Gold overline label */}
          <motion.div
            initial="hidden"
            animate="show"
            custom={0.05}
            variants={fadeUp}
            style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "22px" }}
          >
            <span style={{ display: "block", width: "28px", height: "1px", background: "var(--neon)", opacity: 0.5 }} />
            <p className="section-label" style={{ color: "var(--neon)", opacity: 0.7 }}>
              India&apos;s First AI-Powered Phygital Wellness Ecosystem — Indore
            </p>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial="hidden"
            animate="show"
            custom={0.15}
            variants={fadeUp}
            style={{
              fontFamily:    "var(--font-display)",
              fontWeight:    900,
              fontSize:      "clamp(3.2rem, 10.5vw, 7rem)",
              lineHeight:    0.92,
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
              color:         "var(--text-primary)",
              marginBottom:  "28px",
            }}
          >
            Break Your<br />
            Biological<br />
            <span
              style={{
                color:      "var(--neon)",
                textShadow: "0 0 40px rgba(0,255,46,0.35), 0 0 80px rgba(0,255,46,0.12)",
              }}
            >
              Ceiling
            </span>
          </motion.h1>

          {/* Body copy */}
          <motion.p
            initial="hidden"
            animate="show"
            custom={0.28}
            variants={fadeUp}
            style={{
              fontFamily:   "var(--font-body)",
              fontWeight:   300,
              fontSize:     "clamp(0.9375rem, 2.5vw, 1.125rem)",
              lineHeight:   1.7,
              color:        "var(--text-secondary)",
              maxWidth:     "440px",
              marginBottom: "12px",
            }}
          >
            SpaceFit — Your Fitness Space. Where Health Meets Habit.
            AI-driven habit intelligence, elite coaching, and Indore&apos;s
            only Steam Room recovery — built for high-performance living.
          </motion.p>

          {/* Location line */}
          <motion.p
            initial="hidden"
            animate="show"
            custom={0.38}
            variants={fadeUp}
            style={{
              fontFamily:    "var(--font-mono)",
              fontSize:      "0.6875rem",
              letterSpacing: "0.14em",
              color:         "var(--neon)",
              textTransform: "uppercase",
              marginBottom:  "44px",
              opacity:       0.55,
            }}
          >
            Sukhlia, Near MR-10 · Indore, MP
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial="hidden"
            animate="show"
            custom={0.5}
            variants={fadeUp}
            style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px" }}
          >
            <Link
              href="/contact"
              className="btn-primary"
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
                  width:           "44px",
                  height:          "44px",
                  borderRadius:    "50%",
                  border:          "1px solid rgba(0,255,46,0.2)",
                  background:      "rgba(0,255,46,0.04)",
                  backdropFilter:  "blur(6px)",
                  display:         "flex",
                  alignItems:      "center",
                  justifyContent:  "center",
                  flexShrink:      0,
                  transition:      "border-color 0.3s, background 0.3s",
                  boxShadow:       "inset 0 1px 0 rgba(255,255,255,0.08)",
                }}
              >
                <PlayIcon />
              </span>
              <span
                style={{
                  fontFamily:    "var(--font-body)",
                  fontWeight:    500,
                  fontSize:      "0.8125rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Explore Services
              </span>
            </Link>
          </motion.div>

          {/* Micro-badge row — social proof */}
          <motion.div
            initial="hidden"
            animate="show"
            custom={0.65}
            variants={fadeUp}
            style={{
              display:    "flex",
              alignItems: "center",
              gap:        "20px",
              marginTop:  "36px",
              paddingTop: "28px",
              borderTop:  "1px solid rgba(0,255,46,0.1)",
            }}
          >
            {[
              { val: "351+", lbl: "Target Members" },
              { val: "4+",   lbl: "Expert Coaches" },
              { val: "98%",  lbl: "Satisfaction" },
            ].map((s) => (
              <div key={s.lbl} style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span
                  style={{
                    fontFamily:    "var(--font-display)",
                    fontWeight:    800,
                    fontSize:      "clamp(1.3rem, 3vw, 1.75rem)",
                    letterSpacing: "-0.02em",
                    color:         "var(--text-primary)",
                    lineHeight:    1,
                  }}
                >
                  {s.val}
                </span>
                <span
                  style={{
                    fontFamily:    "var(--font-mono)",
                    fontSize:      "0.5625rem",
                    letterSpacing: "0.1em",
                    color:         "var(--text-tertiary)",
                    textTransform: "uppercase",
                  }}
                >
                  {s.lbl}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — desktop only */}
      <motion.div
        aria-hidden="true"
        className="hero-scroll-indicator scroll-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.7 }}
        style={{
          position:      "absolute",
          bottom:        "96px",
          left:          "50%",
          transform:     "translateX(-50%)",
          flexDirection: "column",
          alignItems:    "center",
          gap:           "6px",
          color:         "var(--text-tertiary)",
          zIndex:        10,
        }}
      >
        <span
          style={{
            fontFamily:    "var(--font-mono)",
            fontSize:      "0.5625rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color:         "var(--neon)",
            opacity:       0.5,
          }}
        >
          Scroll
        </span>
        <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 2v10M2 7l5 5 5-5" />
        </svg>
      </motion.div>

      {/* Secondary nav bar */}
      <div
        className="hero-subnav"
        style={{
          position:        "relative",
          zIndex:          10,
          borderTop:       "1px solid rgba(0,255,46,0.1)",
          backgroundColor: "rgba(10,10,10,0.85)",
          backdropFilter:  "blur(16px)",
        }}
      >
        <div
          style={{
            maxWidth:       "1280px",
            margin:         "0 auto",
            padding:        "0 20px",
            height:         "48px",
            display:        "flex",
            alignItems:     "center",
            justifyContent: "space-between",
            overflowX:      "auto",
            scrollbarWidth: "none",
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
                fontSize:       "0.6875rem",
                letterSpacing:  "0.1em",
                textTransform:  "uppercase",
                color:          "var(--text-tertiary)",
                textDecoration: "none",
                whiteSpace:     "nowrap",
                transition:     "color 0.2s ease-out",
                flexShrink:     0,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--neon)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-tertiary)")}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .hero-section { min-height: auto; }

        .scroll-bounce {
          animation: heroBounce 1.8s ease-in-out infinite;
        }
        @keyframes heroBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(7px); }
        }

        /* ── Mobile ── */
        .hero-image-panel      { display: none; }
        .hero-scroll-indicator { display: none; }

        .hero-content {
          padding: 80px 20px 48px !important;
          align-items: flex-start !important;
          flex: none !important;
        }
        .hero-text-block {
          max-width: 580px;
          width: 100%;
        }

        .hero-subnav div::-webkit-scrollbar { display: none; }

        /* ── iPad ── */
        @media (min-width: 768px) {
          .hero-section          { min-height: 100dvh; }
          .hero-image-panel      { display: block; width: 50%; }
          .hero-scroll-indicator { display: flex; }

          .hero-content {
            padding: 80px 32px !important;
            align-items: center !important;
            flex: 1 !important;
          }
          .hero-text-block { max-width: 46%; }
        }

        /* ── Desktop ── */
        @media (min-width: 1024px) {
          .hero-image-panel { width: 55%; }
          .hero-content     { padding: 80px 40px !important; }
          .hero-text-block  { max-width: 580px; }
        }
      `}</style>
    </section>
  );
}
