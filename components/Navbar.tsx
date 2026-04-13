"use client";

import Link from "next/link";

const navLinks = ["Home", "About", "Services", "Membership"];

export default function Navbar({ className }: { className?: string }) {
  return (
    <nav
      className={className}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: "110px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: "30px",
        paddingRight: "30px",
        background: "rgba(20, 20, 20, 0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontFamily: "var(--font-space-grotesk), sans-serif",
          fontWeight: 700,
          fontSize: "22px",
          color: "var(--color-text)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          display: "flex",
          alignItems: "center",
          gap: "2px",
        }}
      >
        <span>SPACE</span>
        <span style={{ color: "var(--color-primary)" }}>FIT</span>
      </div>

      {/* Nav Links */}
      <div
        style={{
          display: "flex",
          gap: "60px",
          alignItems: "center",
        }}
      >
        {navLinks.map((link, i) => (
          <Link
            key={link}
            href="#"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 400,
              fontSize: "24px",
              color: i === 0 ? "var(--color-primary)" : "var(--color-text)",
              textDecoration: "none",
              textTransform: "uppercase",
              letterSpacing: "0.02em",
              transition: "color 0.2s",
            }}
          >
            {link}
          </Link>
        ))}
      </div>

      {/* CTA */}
      <Link
        href="#"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          height: "48px",
          padding: "0 28px",
          borderRadius: "43px",
          background: "var(--color-primary)",
          color: "#fff",
          fontFamily: "var(--font-inter), sans-serif",
          fontWeight: 500,
          fontSize: "16px",
          textTransform: "capitalize",
          textDecoration: "none",
          transition: "opacity 0.2s",
          whiteSpace: "nowrap",
        }}
      >
        Join Now
      </Link>
    </nav>
  );
}
