"use client";

import { useState } from "react";

const fieldStyle: React.CSSProperties = {
  display: "block",
  width: "100%",
  padding: "0.65rem 0.85rem",
  fontFamily: "var(--font-sans)",
  fontSize: "0.9rem",
  color: "var(--color-text-dark)",
  backgroundColor: "white",
  border: "1px solid #ddd",
  borderRadius: "0.25rem",
  outline: "none",
  transition: "border-color 0.2s",
  boxSizing: "border-box",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-heading)",
  fontWeight: 600,
  fontSize: "0.8rem",
  color: "var(--color-navy)",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  marginBottom: "0.4rem",
};

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1200);
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="section-divider" />
      <h2 className="section-heading" style={{ marginBottom: "1.5rem" }}>
        Send Us a Message
      </h2>

      {status === "sent" ? (
        <div
          style={{
            backgroundColor: "var(--color-teal-light)",
            border: "1px solid var(--color-teal)",
            borderRadius: "0.375rem",
            padding: "1.25rem 1.5rem",
            color: "var(--color-teal-dark)",
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
          }}
        >
          ✓ Thank you for your message. We will respond within 2–3 business days.
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <div>
            <label htmlFor="name" style={labelStyle}>Full Name *</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              style={fieldStyle}
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div>
              <label htmlFor="email" style={labelStyle}>Email Address *</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                style={fieldStyle}
              />
            </div>
            <div>
              <label htmlFor="phone" style={labelStyle}>Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="+1 (xxx) xxx-xxxx"
                style={fieldStyle}
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" style={labelStyle}>Message *</label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={form.message}
              onChange={handleChange}
              placeholder="Please describe how we can assist you..."
              style={{ ...fieldStyle, resize: "vertical", minHeight: "140px" }}
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary"
              style={{ cursor: status === "sending" ? "wait" : "pointer", border: "none" }}
            >
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>
          </div>
        </div>
      )}
    </form>
  );
}
