import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — SpaceFit",
  description: "Learn about SpaceFit's mission, values, and the team behind the premium fitness experience.",
};

export default function AboutPage() {
  return (
    <main id="main-content" style={{ backgroundColor: "var(--bg-primary)", minHeight: "100vh", paddingTop: "80px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "80px 40px" }}>
        <p className="section-label" style={{ marginBottom: "16px" }}>Our Story</p>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: "clamp(3rem, 8vw, 6rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            textTransform: "uppercase",
            color: "var(--text-primary)",
            marginBottom: "32px",
          }}
        >
          Built for<br />
          <span style={{ color: "var(--neon)" }}>Champions</span>
        </h1>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.125rem",
            lineHeight: 1.65,
            color: "var(--text-secondary)",
            maxWidth: "640px",
            marginBottom: "48px",
          }}
        >
          SpaceFit was founded on a single belief: elite training shouldn't be reserved
          for professionals. We built a space where cutting-edge technology, world-class
          coaching, and an uncompromising community come together.
        </p>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <Link href="/membership" className="btn-primary">View Memberships</Link>
          <Link href="/services" className="btn-secondary">Our Services</Link>
        </div>
      </div>
    </main>
  );
}
