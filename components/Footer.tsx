"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const footerNav = [
  {
    heading: "Company",
    links: [
      { label: "About Us",    href: "/#features" },
      { label: "Services",    href: "/#classes" },
      { label: "Membership",  href: "/#pricing" },
      { label: "Contact",     href: "/contact" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Strength Zone",     href: "/#classes" },
      { label: "Cardio Hub",        href: "/#classes" },
      { label: "Yoga Studio",       href: "/#classes" },
      { label: "Personal Training", href: "/#classes" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy",   href: "/contact" },
      { label: "Terms of Service", href: "/contact" },
      { label: "Cookie Policy",    href: "/contact" },
    ],
  },
];

const socialLinks = [
  { label: "Instagram", href: "#", icon: "IG" },
  { label: "Twitter",   href: "#", icon: "TW" },
  { label: "YouTube",   href: "#", icon: "YT" },
];

export default function Footer({ className }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [sent,  setSent]  = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) { setSent(true); setEmail(""); }
  }

  return (
    <footer
      className={`footer-root ${className ?? ""}`}
      style={{
        backgroundColor: "#080806",
        borderTop:       "1px solid rgba(0,255,46,0.1)",
        padding:         "64px 20px 40px",
        position:        "relative",
        overflow:        "hidden",
      }}
    >

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Top row */}
        <div className="footer-grid" style={{ marginBottom: "48px" }}>
          {/* Left — brand + newsletter */}
          <div className="footer-brand">
            <Link
              href="/"
              style={{
                display:        "inline-flex",
                alignItems:     "center",
                gap:            "10px",
                textDecoration: "none",
                marginBottom:   "20px",
              }}
            >
              <Image
                src="/logo-icon.png"
                alt="SpaceFit logo"
                width={32}
                height={32}
                style={{ objectFit: "contain" }}
              />
              <span
                style={{
                  fontFamily:    "var(--font-display)",
                  fontWeight:    700,
                  fontSize:      "1.25rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color:         "var(--text-primary)",
                }}
              >
                SPACE<span style={{ color: "var(--neon)", textShadow: "0 0 16px rgba(0,255,46,0.4)" }}>FIT</span>
              </span>
            </Link>

            <p
              style={{
                fontFamily:    "var(--font-mono)",
                fontSize:      "0.5625rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color:         "var(--neon)",
                marginBottom:  "10px",
                opacity:       0.7,
              }}
            >
              Where Health Meets Habit
            </p>
            <p
              style={{
                fontFamily:   "var(--font-body)",
                fontWeight:   300,
                fontSize:     "0.9375rem",
                lineHeight:   1.65,
                color:        "var(--text-secondary)",
                marginBottom: "16px",
              }}
            >
              India&apos;s first AI-powered phygital wellness ecosystem.
              Built for high-performance living — designed for India.
            </p>
            <p
              style={{
                fontFamily:   "var(--font-body)",
                fontWeight:   300,
                fontSize:     "0.8125rem",
                lineHeight:   1.6,
                color:        "var(--text-tertiary)",
                marginBottom: "32px",
              }}
            >
              Aditya Gateway Building, Sukhlia<br />
              Near MR-10, Indore, Madhya Pradesh
            </p>

            {/* Newsletter */}
            <p
              style={{
                fontFamily:    "var(--font-mono)",
                fontSize:      "0.5625rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color:         "var(--neon)",
                opacity:       0.65,
                marginBottom:  "12px",
              }}
            >
              Newsletter
            </p>
            {sent ? (
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize:   "0.875rem",
                  color:      "var(--neon)",
                  animation:  "fadeIn 0.4s ease-out",
                }}
              >
                ✓ You&apos;re on the list!
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  display:         "flex",
                  alignItems:      "center",
                  justifyContent:  "space-between",
                  height:          "50px",
                  borderRadius:    "4px",
                  border:          "1px solid rgba(0,255,46,0.15)",
                  backgroundColor: "rgba(0,255,46,0.03)",
                  padding:         "6px 6px 6px 18px",
                  maxWidth:        "400px",
                  boxShadow:       "inset 0 1px 0 rgba(255,255,255,0.03)",
                }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  style={{
                    flex:       1,
                    background: "transparent",
                    border:     "none",
                    outline:    "none",
                    fontFamily: "var(--font-body)",
                    fontWeight: 300,
                    fontSize:   "0.875rem",
                    color:      "var(--text-primary)",
                    minWidth:   0,
                  }}
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  style={{
                    width:           "38px",
                    height:          "38px",
                    borderRadius:    "3px",
                    background:      "linear-gradient(135deg, var(--neon) 0%, var(--neon-dark) 100%)",
                    border:          "none",
                    display:         "flex",
                    alignItems:      "center",
                    justifyContent:  "center",
                    cursor:          "pointer",
                    flexShrink:      0,
                    color:           "#050505",
                    fontWeight:      700,
                    transition:      "transform 0.2s, box-shadow 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform  = "scale(1.06)";
                    (e.currentTarget as HTMLElement).style.boxShadow  = "var(--shadow-neon-sm)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform  = "scale(1)";
                    (e.currentTarget as HTMLElement).style.boxShadow  = "none";
                  }}
                >
                  →
                </button>
              </form>
            )}

            {/* Social links */}
            <div style={{ display: "flex", gap: "10px", marginTop: "28px" }}>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  style={{
                    width:           "38px",
                    height:          "38px",
                    borderRadius:    "4px",
                    backgroundColor: "rgba(0,255,46,0.03)",
                    border:          "1px solid rgba(0,255,46,0.12)",
                    display:         "flex",
                    alignItems:      "center",
                    justifyContent:  "center",
                    fontFamily:      "var(--font-mono)",
                    fontSize:        "0.5625rem",
                    letterSpacing:   "0.08em",
                    color:           "var(--text-tertiary)",
                    textDecoration:  "none",
                    transition:      "border-color 0.2s, color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor     = "var(--neon)";
                    el.style.color           = "var(--neon)";
                    el.style.backgroundColor = "rgba(0,255,46,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor     = "rgba(0,255,46,0.12)";
                    el.style.color           = "var(--text-tertiary)";
                    el.style.backgroundColor = "rgba(0,255,46,0.03)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right — nav columns */}
          <div className="footer-nav">
            {footerNav.map((section) => (
              <div key={section.heading} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <p
                  style={{
                    fontFamily:    "var(--font-mono)",
                    fontWeight:    400,
                    fontSize:      "0.5625rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color:         "var(--neon)",
                    opacity:       0.65,
                  }}
                >
                  {section.heading}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {section.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      style={{
                        fontFamily:     "var(--font-body)",
                        fontWeight:     300,
                        fontSize:       "0.9375rem",
                        lineHeight:     1.4,
                        color:          "var(--text-secondary)",
                        textDecoration: "none",
                        transition:     "color 0.2s ease-out",
                        letterSpacing:  "-0.01em",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--neon)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom divider */}
        <div style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(0,255,46,0.1) 50%, transparent)", marginBottom: "24px" }} />

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p
            style={{
              fontFamily:    "var(--font-mono)",
              fontWeight:    400,
              fontSize:      "0.5625rem",
              letterSpacing: "0.1em",
              color:         "var(--text-tertiary)",
              textTransform: "uppercase",
            }}
          >
            © 2026 Spacefit Innovations LLP — Built in Indore · Powered by AI · Designed for India
          </p>
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <Link
                key={item}
                href="/contact"
                style={{
                  fontFamily:     "var(--font-mono)",
                  fontWeight:     400,
                  fontSize:       "0.5625rem",
                  letterSpacing:  "0.1em",
                  color:          "var(--text-tertiary)",
                  textDecoration: "none",
                  textTransform:  "uppercase",
                  transition:     "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--neon)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-tertiary)")}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: flex;
          flex-direction: column;
          gap: 48px;
        }
        .footer-brand { max-width: 100%; }
        .footer-nav {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }
        .footer-bottom {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        @media (min-width: 768px) {
          .footer-root { padding: 80px 32px 40px; }
          .footer-bottom {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
          .footer-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 48px;
            align-items: start;
          }
          .footer-nav { display: flex; gap: 40px; }
        }

        @media (min-width: 1024px) {
          .footer-root { padding: 80px 40px 40px; }
          .footer-grid { grid-template-columns: 1fr auto; gap: 80px; }
          .footer-brand { max-width: 480px; }
          .footer-nav { gap: 64px; }
        }
      `}</style>
    </footer>
  );
}
