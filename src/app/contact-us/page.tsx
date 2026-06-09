import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact the Embassy of Sierra Leone in Washington, D.C. — address, telephone, email, office hours, and online contact form.",
};

const infoBlock = (label: string, children: React.ReactNode) => (
  <div style={{ marginBottom: "1.75rem" }}>
    <h3
      style={{
        fontFamily: "var(--font-heading)",
        fontWeight: 700,
        fontSize: "0.78rem",
        color: "var(--color-teal-dark)",
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        marginBottom: "0.5rem",
      }}
    >
      {label}
    </h3>
    {children}
  </div>
);

export default function ContactUsPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Reach out to the Embassy of the Republic of Sierra Leone in Washington, D.C."
      />

      {/* ── Main content ─────────────────────────── */}
      <section style={{ padding: "4.5rem 0" }}>
        <div className="container-site">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "4rem",
              alignItems: "start",
            }}
          >
            {/* Left — Contact details */}
            <div>
              <div className="section-divider" />
              <h2 className="section-heading" style={{ marginBottom: "1.75rem" }}>
                Embassy Information
              </h2>

              {infoBlock(
                "Mailing Address",
                <address
                  style={{
                    fontStyle: "normal",
                    color: "var(--color-text-mid)",
                    lineHeight: 1.85,
                    fontSize: "0.93rem",
                  }}
                >
                  Embassy of the Republic of Sierra Leone
                  <br />
                  1701 19th Street, NW
                  <br />
                  Washington, D.C. 20009-1605
                  <br />
                  United States of America
                </address>
              )}

              {infoBlock(
                "Telephone",
                <div style={{ color: "var(--color-text-mid)", lineHeight: 2, fontSize: "0.93rem" }}>
                  <a href="tel:+12029399261" style={{ color: "var(--color-text-mid)", textDecoration: "none", display: "block" }}>
                    +1 (202) 939-9261
                  </a>
                  <a href="tel:+12029399262" style={{ color: "var(--color-text-mid)", textDecoration: "none", display: "block" }}>
                    +1 (202) 939-9262
                  </a>
                  <a href="tel:+12029399263" style={{ color: "var(--color-text-mid)", textDecoration: "none", display: "block" }}>
                    +1 (202) 939-9263
                  </a>
                </div>
              )}

              {infoBlock(
                "Facsimile",
                <p style={{ color: "var(--color-text-mid)", fontSize: "0.93rem" }}>(202) 483-1793</p>
              )}

              {infoBlock(
                "Email",
                <a
                  href="mailto:info@embassyofsierraleone.net"
                  style={{ color: "var(--color-teal)", textDecoration: "none", fontSize: "0.93rem" }}
                >
                  info@embassyofsierraleone.net
                </a>
              )}

              {infoBlock(
                "Office Hours",
                <div
                  style={{
                    backgroundColor: "var(--color-teal-light)",
                    borderLeft: "3px solid var(--color-teal)",
                    borderRadius: "0 0.25rem 0.25rem 0",
                    padding: "0.85rem 1rem",
                    fontSize: "0.88rem",
                    color: "var(--color-text-mid)",
                    lineHeight: 2,
                  }}
                >
                  <strong style={{ color: "var(--color-navy)" }}>General Office:</strong> Monday – Friday, 9:00 AM – 5:00 PM
                  <br />
                  <strong style={{ color: "var(--color-navy)" }}>Consular Section:</strong> Monday – Friday, 10:00 AM – 3:00 PM
                  <br />
                  <em style={{ fontSize: "0.8rem", color: "var(--color-text-light)" }}>
                    Closed on Sierra Leonean and U.S. federal holidays.
                  </em>
                </div>
              )}

              {infoBlock(
                "For Emergencies",
                <p style={{ color: "var(--color-text-mid)", fontSize: "0.88rem", lineHeight: 1.7 }}>
                  Sierra Leonean nationals who require emergency consular assistance outside
                  of normal business hours should call{" "}
                  <a href="tel:+12029399261" style={{ color: "var(--color-teal)", fontWeight: 600 }}>
                    +1 (202) 939-9261
                  </a>{" "}
                  and follow the prompts.
                </p>
              )}
            </div>

            {/* Right — Contact form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── Google Maps ─────────────────────────── */}
      <section style={{ borderTop: "1px solid #eee" }}>
        <div className="container-site" style={{ padding: "0" }}>
          <div style={{ padding: "2rem 1rem 0" }}>
            <div className="section-divider" />
            <h2 className="section-heading" style={{ marginBottom: "1.25rem" }}>
              Find Us
            </h2>
          </div>
        </div>
        <div style={{ width: "100%", height: "420px" }}>
          <iframe
            title="Embassy of Sierra Leone location"
            src="https://maps.google.com/maps?q=1701+19th+Street+NW,+Washington,+DC+20009&output=embed&hl=en&z=16"
            width="100%"
            height="420"
            style={{ border: 0, display: "block" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
