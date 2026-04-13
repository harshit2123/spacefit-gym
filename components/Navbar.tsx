"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Home",       href: "/" },
  { label: "About",      href: "/about" },
  { label: "Services",   href: "/services" },
  { label: "Membership", href: "/membership" },
];

function useScrolled(threshold = 10) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [threshold]);
  return scrolled;
}

export default function Navbar({ className }: { className?: string }) {
  const pathname  = usePathname();
  const scrolled  = useScrolled();
  const [open, setOpen]   = useState(false);
  const hamburgerRef      = useRef<HTMLButtonElement>(null);
  const firstLinkRef      = useRef<HTMLAnchorElement>(null);

  // Focus management
  useEffect(() => {
    if (open) firstLinkRef.current?.focus();
    else      hamburgerRef.current?.focus();
  }, [open]);

  // Close on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Prevent body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={className}
        role="banner"
        data-scrolled={scrolled}
        style={{
          position:       "sticky",
          top:            0,
          left:           0,
          right:          0,
          zIndex:         30,
          height:         "64px",
          backgroundColor:"rgba(10, 10, 10, 0.92)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom:   "1px solid rgba(255, 255, 255, 0.06)",
          transition:     "box-shadow 0.3s ease-out",
          boxShadow:      scrolled ? "0 4px 24px rgba(0, 0, 0, 0.8)" : "none",
        }}
      >
        <nav
          aria-label="Main navigation"
          style={{
            maxWidth:       "1280px",
            margin:         "0 auto",
            height:         "100%",
            padding:        "0 40px",
            display:        "flex",
            alignItems:     "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="SpaceFit — Home"
            style={{
              display:        "inline-flex",
              alignItems:     "center",
              gap:            "8px",
              textDecoration: "none",
            }}
          >
            <Image
              src="/logo-icon.png"
              alt="SpaceFit"
              width={28}
              height={28}
              style={{ objectFit: "contain" }}
              priority
            />
            <span
              style={{
                fontFamily:    "var(--font-display)",
                fontWeight:    700,
                fontSize:      "1.25rem",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                color:         "var(--text-primary)",
              }}
            >
              SPACE<span style={{ color: "var(--neon)" }}>FIT</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <ul
            role="list"
            style={{
              display:    "flex",
              alignItems: "center",
              gap:        "32px",
              listStyle:  "none",
              margin:     0,
              padding:    0,
            }}
            className="hidden-mobile"
          >
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    style={{
                      fontFamily:     "var(--font-body)",
                      fontWeight:     500,
                      fontSize:       "0.875rem",
                      letterSpacing:  "0.04em",
                      textTransform:  "uppercase",
                      textDecoration: "none",
                      color:          active ? "var(--neon)" : "var(--text-secondary)",
                      position:       "relative",
                      paddingBottom:  "2px",
                      transition:     "color 0.2s ease-out",
                    }}
                    onMouseEnter={(e) => {
                      if (!active) (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                    }}
                    onMouseLeave={(e) => {
                      if (!active) (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                    }}
                  >
                    {item.label}
                    {/* Active neon dot */}
                    {active && (
                      <span
                        aria-hidden="true"
                        style={{
                          position:     "absolute",
                          bottom:       "-6px",
                          left:         "50%",
                          transform:    "translateX(-50%)",
                          width:        "4px",
                          height:       "4px",
                          borderRadius: "50%",
                          background:   "var(--neon)",
                          boxShadow:    "0 0 8px rgba(0,255,46,0.6)",
                        }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Link
              href="/contact"
              className="btn-primary"
              style={{ padding: "10px 22px", fontSize: "0.8125rem" }}
            >
              Get a Tour
            </Link>

            {/* Mobile hamburger */}
            <button
              ref={hamburgerRef}
              aria-label="Toggle menu"
              aria-expanded={open}
              aria-controls="mobile-drawer"
              onClick={() => setOpen((v) => !v)}
              style={{
                display:        "none",
                width:          "40px",
                height:         "40px",
                flexDirection:  "column",
                justifyContent: "center",
                alignItems:     "center",
                gap:            "5px",
                background:     "transparent",
                border:         "none",
                cursor:         "pointer",
                padding:        0,
              }}
              className="show-mobile"
            >
              <span
                style={{
                  display:         "block",
                  width:           "20px",
                  height:          "2px",
                  backgroundColor: "var(--text-primary)",
                  borderRadius:    "2px",
                  transition:      "transform 0.2s ease-out, opacity 0.2s ease-out",
                  transform:       open ? "rotate(45deg) translate(5px, 5px)" : "none",
                }}
              />
              <span
                style={{
                  display:         "block",
                  width:           "20px",
                  height:          "2px",
                  backgroundColor: "var(--text-primary)",
                  borderRadius:    "2px",
                  transition:      "opacity 0.2s ease-out",
                  opacity:         open ? 0 : 1,
                }}
              />
              <span
                style={{
                  display:         "block",
                  height:          "2px",
                  backgroundColor: "var(--text-primary)",
                  borderRadius:    "2px",
                  transition:      "transform 0.2s ease-out, width 0.2s ease-out",
                  transform:       open ? "rotate(-45deg) translate(5px, -5px)" : "none",
                  width:           open ? "20px" : "14px",
                }}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <div
        id="mobile-drawer"
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
        style={{
          position:   "fixed",
          inset:      0,
          zIndex:     40,
          backgroundColor: "var(--bg-primary)",
          display:    "flex",
          flexDirection: "column",
          transform:  open ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
        className="mobile-drawer"
      >
        {/* Drawer header */}
        <div
          style={{
            height:         "64px",
            padding:        "0 24px",
            display:        "flex",
            alignItems:     "center",
            justifyContent: "space-between",
            borderBottom:   "1px solid var(--border-default)",
          }}
        >
          <Link
            href="/"
            onClick={() => setOpen(false)}
            style={{
              display:        "inline-flex",
              alignItems:     "center",
              gap:            "8px",
              textDecoration: "none",
            }}
          >
            <Image src="/logo-icon.png" alt="SpaceFit" width={24} height={24} style={{ objectFit: "contain" }} />
            <span
              style={{
                fontFamily:    "var(--font-display)",
                fontWeight:    700,
                fontSize:      "1.25rem",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                color:         "var(--text-primary)",
              }}
            >
              SPACE<span style={{ color: "var(--neon)" }}>FIT</span>
            </span>
          </Link>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            style={{
              width:       "40px",
              height:      "40px",
              display:     "flex",
              alignItems:  "center",
              justifyContent:"center",
              background:  "transparent",
              border:      "none",
              cursor:      "pointer",
              color:       "var(--text-secondary)",
              fontSize:    "1.25rem",
            }}
          >
            ✕
          </button>
        </div>

        {/* Drawer links */}
        <nav style={{ flex: 1, padding: "16px 24px 32px", display: "flex", flexDirection: "column", gap: "4px" }}>
          {navItems.map((item, i) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.label}
                ref={i === 0 ? firstLinkRef : undefined}
                href={item.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
                className="animate-slideDown"
                style={{
                  display:         "flex",
                  alignItems:      "center",
                  justifyContent:  "space-between",
                  padding:         "16px 0",
                  borderBottom:    "1px solid var(--border-default)",
                  fontFamily:      "var(--font-body)",
                  fontSize:        "1.125rem",
                  fontWeight:      500,
                  letterSpacing:   "0.04em",
                  textTransform:   "uppercase",
                  textDecoration:  "none",
                  color:           active ? "var(--neon)" : "var(--text-secondary)",
                  animationDelay:  `${i * 80}ms`,
                  transition:      "color 0.2s ease-out",
                }}
              >
                {item.label}
                <span style={{ color: "var(--neon)", fontSize: "0.875rem" }}>→</span>
              </Link>
            );
          })}
        </nav>

        {/* Drawer CTA */}
        <div style={{ padding: "0 24px 40px" }}>
          <Link
            href="/contact"
            className="btn-primary"
            onClick={() => setOpen(false)}
            style={{ display: "flex", justifyContent: "center", width: "100%", padding: "16px" }}
          >
            Get a Tour
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
        }
        @media (min-width: 1024px) {
          .mobile-drawer { display: none !important; }
          .show-mobile   { display: none !important; }
        }
      `}</style>
    </>
  );
}
