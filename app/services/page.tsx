import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — SpaceFit",
  description: "Explore SpaceFit's premium fitness services: strength training, cardio, yoga, pilates, and personal coaching.",
};

const services = [
  {
    name: "Strength Zone",
    description: "State-of-the-art free weights, machines, and functional training rigs for all levels.",
    slots: "07 of 10",
  },
  {
    name: "Cardio Hub",
    description: "Premium treadmills, bikes, and rowing machines with performance tracking.",
    slots: "05 of 10",
  },
  {
    name: "Yoga Studio",
    description: "Daily classes from sunrise flows to advanced power yoga with certified instructors.",
    slots: "09 of 10",
  },
  {
    name: "Pilates Room",
    description: "Reformer and mat pilates sessions designed to build strength and flexibility.",
    slots: "03 of 10",
  },
  {
    name: "Personal Training",
    description: "1-on-1 coaching with elite certified trainers tailored to your goals.",
    slots: "Available",
  },
  {
    name: "HIIT Classes",
    description: "High-intensity interval training sessions that maximize results in minimum time.",
    slots: "08 of 10",
  },
];

export default function ServicesPage() {
  return (
    <main id="main-content" style={{ backgroundColor: "var(--bg-primary)", minHeight: "100vh", paddingTop: "80px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "80px 40px" }}>
        <p className="section-label" style={{ marginBottom: "16px" }}>What We Offer</p>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: "clamp(3rem, 8vw, 6rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            textTransform: "uppercase",
            color: "var(--text-primary)",
            marginBottom: "64px",
          }}
        >
          Premium<br />
          <span style={{ color: "var(--neon)" }}>Services</span>
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "24px",
          }}
        >
          {services.map((s) => (
            <div key={s.name} className="card-base" style={{ borderRadius: "16px" }}>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1.75rem",
                  letterSpacing: "-0.01em",
                  textTransform: "uppercase",
                  color: "var(--text-primary)",
                  marginBottom: "12px",
                }}
              >
                {s.name}
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9375rem",
                  lineHeight: 1.6,
                  color: "var(--text-secondary)",
                  marginBottom: "20px",
                }}
              >
                {s.description}
              </p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "var(--neon)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {s.slots} slots
                </span>
                <Link href="/membership" className="btn-primary" style={{ padding: "8px 20px", fontSize: "0.75rem" }}>
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
