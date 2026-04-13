import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact — SpaceFit",
  description: "Get in touch with SpaceFit. Book a tour, ask a question, or start your membership journey.",
};

export default function ContactPage() {
  return (
    <main id="main-content" style={{ backgroundColor: "var(--bg-primary)", minHeight: "100vh", paddingTop: "80px" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "80px 40px" }}>
        <p className="section-label" style={{ marginBottom: "16px" }}>Get In Touch</p>
        <h1
          style={{
            fontFamily:    "var(--font-display)",
            fontWeight:    900,
            fontSize:      "clamp(3rem, 8vw, 6rem)",
            lineHeight:    0.95,
            letterSpacing: "-0.03em",
            textTransform: "uppercase",
            color:         "var(--text-primary)",
            marginBottom:  "48px",
          }}
        >
          Book a<br />
          <span style={{ color: "var(--neon)" }}>Tour</span>
        </h1>

        <ContactForm />
      </div>
    </main>
  );
}
