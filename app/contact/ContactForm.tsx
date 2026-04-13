"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div
        style={{
          padding:      "40px",
          borderRadius: "16px",
          border:       "1px solid var(--neon)",
          background:   "#0d1f00",
          textAlign:    "center",
          animation:    "fadeIn 0.4s ease-out",
        }}
      >
        <p
          style={{
            fontFamily:  "var(--font-display)",
            fontWeight:  700,
            fontSize:    "2rem",
            color:       "var(--neon)",
            marginBottom:"8px",
          }}
        >
          Message Sent!
        </p>
        <p style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)", marginBottom: "24px" }}>
          We&apos;ll be in touch shortly.
        </p>
        <Link href="/" className="btn-secondary">Back to Home</Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-grid">
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <label htmlFor="name" className="section-label" style={{ color: "var(--text-secondary)" }}>
            Full Name
          </label>
          <input id="name" type="text" placeholder="Your name" className="input-base" required />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <label htmlFor="email" className="section-label" style={{ color: "var(--text-secondary)" }}>
            Email
          </label>
          <input id="email" type="email" placeholder="you@example.com" className="input-base" required />
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <label htmlFor="interest" className="section-label" style={{ color: "var(--text-secondary)" }}>
          I&apos;m interested in
        </label>
        <select id="interest" className="input-base" style={{ cursor: "pointer" }}>
          <option value="">Select a service...</option>
          <option value="membership">Membership</option>
          <option value="pt">Personal Training</option>
          <option value="classes">Group Classes</option>
          <option value="tour">Gym Tour</option>
        </select>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <label htmlFor="message" className="section-label" style={{ color: "var(--text-secondary)" }}>
          Message
        </label>
        <textarea
          id="message"
          placeholder="Tell us about your goals..."
          rows={4}
          className="input-base"
          style={{ height: "auto", padding: "12px 16px", resize: "vertical" }}
        />
      </div>

      <button type="submit" className="btn-primary" style={{ alignSelf: "flex-start", padding: "14px 36px" }}>
        Send Message
      </button>

      <style>{`
        @media (max-width: 600px) { .form-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </form>
  );
}
