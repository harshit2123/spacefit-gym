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
      { label: "Privacy Policy",    href: "/contact" },
      { label: "Terms of Service",  href: "/contact" },
      { label: "Cookie Policy",     href: "/contact" },
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
      className={className}
      style={{
        backgroundColor: "#0a0a0a",
        borderTop:       "1px solid var(--border-default)",
        padding:         "80px 40px 40px",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Top row */}
        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "1fr auto",
            gap:                 "80px",
            marginBottom:        "64px",
            alignItems:          "start",
          }}
          className="footer-grid"
        >
          {/* Left — brand + newsletter */}
          <div style={{ maxWidth: "480px" }}>
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
                SPACE<span style={{ color: "var(--neon)" }}>FIT</span>
              </span>
            </Link>

            <p
              style={{
                fontFamily:   "var(--font-body)",
                fontWeight:   400,
                fontSize:     "0.9375rem",
                lineHeight:   1.65,
                color:        "var(--text-secondary)",
                marginBottom: "32px",
              }}
            >
              Experience a fitness space designed around you. Cutting-edge
              technology, elite coaching and a community built for
              high-performance living.
            </p>

            {/* Newsletter */}
            <p className="section-label" style={{ marginBottom: "12px", color: "var(--text-secondary)" }}>
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
                  height:          "52px",
                  borderRadius:    "9999px",
                  border:          "1px solid var(--border-default)",
                  backgroundColor: "var(--bg-tertiary)",
                  padding:         "6px 6px 6px 20px",
                  maxWidth:        "400px",
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
                    fontSize:   "0.875rem",
                    color:      "var(--text-primary)",
                    minWidth:   0,
                  }}
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  style={{
                    width:          "40px",
                    height:         "40px",
                    borderRadius:   "50%",
                    backgroundColor:"var(--neon)",
                    border:         "none",
                    display:        "flex",
                    alignItems:     "center",
                    justifyContent: "center",
                    cursor:         "pointer",
                    flexShrink:     0,
                    color:          "var(--text-inverse)",
                    transition:     "background 0.2s ease-out, transform 0.2s ease-out",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background  = "var(--neon-light)";
                    (e.currentTarget as HTMLElement).style.transform   = "scale(1.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background  = "var(--neon)";
                    (e.currentTarget as HTMLElement).style.transform   = "scale(1)";
                  }}
                >
                  →
                </button>
              </form>
            )}

            {/* Social links */}
            <div style={{ display: "flex", gap: "12px", marginTop: "28px" }}>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  style={{
                    width:          "40px",
                    height:         "40px",
                    borderRadius:   "50%",
                    backgroundColor:"var(--bg-tertiary)",
                    border:         "1px solid var(--border-default)",
                    display:        "flex",
                    alignItems:     "center",
                    justifyContent: "center",
                    fontFamily:     "var(--font-mono)",
                    fontSize:       "0.625rem",
                    letterSpacing:  "0.05em",
                    color:          "var(--text-secondary)",
                    textDecoration: "none",
                    transition:     "border-color 0.2s, color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor     = "var(--neon)";
                    el.style.color           = "var(--neon)";
                    el.style.backgroundColor = "rgba(0,255,46,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor     = "var(--border-default)";
                    el.style.color           = "var(--text-secondary)";
                    el.style.backgroundColor = "var(--bg-tertiary)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right — nav columns */}
          <div
            style={{
              display: "flex",
              gap:     "64px",
            }}
            className="footer-nav"
          >
            {footerNav.map((section) => (
              <div key={section.heading} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <p
                  style={{
                    fontFamily:    "var(--font-body)",
                    fontWeight:    700,
                    fontSize:      "0.8125rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color:         "var(--text-primary)",
                  }}
                >
                  {section.heading}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {section.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      style={{
                        fontFamily:     "var(--font-body)",
                        fontWeight:     400,
                        fontSize:       "0.9375rem",
                        lineHeight:     1.4,
                        color:          "var(--text-secondary)",
                        textDecoration: "none",
                        transition:     "color 0.2s ease-out",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
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

        {/* Divider */}
        <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.06)", marginBottom: "24px" }} />

        {/* Bottom bar */}
        <div
          style={{
            display:        "flex",
            justifyContent: "space-between",
            alignItems:     "center",
            flexWrap:       "wrap",
            gap:            "12px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              fontSize:   "0.8125rem",
              color:      "var(--text-tertiary)",
            }}
          >
            © 2025 SpaceFit. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <Link
                key={item}
                href="/contact"
                style={{
                  fontFamily:     "var(--font-body)",
                  fontWeight:     400,
                  fontSize:       "0.8125rem",
                  color:          "var(--text-tertiary)",
                  textDecoration: "none",
                  transition:     "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-tertiary)")}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .footer-nav  { flex-wrap: wrap; gap: 32px !important; }
        }
      `}</style>
    </footer>
  );
}
