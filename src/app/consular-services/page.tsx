import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Consular Services",
  description:
    "Consular services offered by the Embassy of Sierra Leone — Emergency Travel Certificates, authentication of documents, repatriation of human remains, and more.",
};

const SectionCard = ({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
}) => (
  <div
    style={{
      backgroundColor: "white",
      borderRadius: "0.5rem",
      boxShadow: "var(--shadow-card)",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        backgroundColor: "var(--color-navy)",
        padding: "1.25rem 1.5rem",
        display: "flex",
        alignItems: "center",
        gap: "0.85rem",
      }}
    >
      <span style={{ fontSize: "1.5rem" }}>{icon}</span>
      <h2
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 700,
          fontSize: "1.05rem",
          color: "white",
          margin: 0,
        }}
      >
        {title}
      </h2>
    </div>
    <div style={{ padding: "1.75rem 1.5rem" }}>{children}</div>
  </div>
);

const CheckItem = ({ children }: { children: React.ReactNode }) => (
  <li
    style={{
      display: "flex",
      gap: "0.6rem",
      alignItems: "flex-start",
      fontSize: "0.87rem",
      color: "var(--color-text-mid)",
      lineHeight: 1.65,
      marginBottom: "0.5rem",
    }}
  >
    <span style={{ flex: "0 0 auto", color: "var(--color-teal)", fontWeight: 700 }}>✓</span>
    {children}
  </li>
);

export default function ConsularServicesPage() {
  return (
    <>
      <PageHero
        title="Consular Services"
        subtitle="Services provided by the Embassy of Sierra Leone to Sierra Leonean nationals and foreign nationals."
      />

      {/* ── Intro note ───────────────────────────── */}
      <section style={{ backgroundColor: "var(--color-teal-light)", padding: "2rem 0" }}>
        <div className="container-site">
          <p style={{ color: "var(--color-text-mid)", fontSize: "0.93rem", lineHeight: 1.8, maxWidth: "820px" }}>
            The Consular Section of the Embassy of Sierra Leone in Washington, D.C. provides a range of services to
            Sierra Leonean nationals in the United States, Canada, and other accredited countries, as well as to foreign
            nationals seeking certain documentation. Consular services are available{" "}
            <strong>Monday through Friday, 10:00 AM – 3:00 PM</strong>, excluding public holidays.
          </p>
        </div>
      </section>

      <section style={{ padding: "4.5rem 0" }}>
        <div className="container-site" style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>

          {/* ── Section A: Emergency Travel Certificate ── */}
          <SectionCard icon="🆘" title="Emergency Travel Certificate (ETC)">
            <p style={{ color: "var(--color-text-mid)", fontSize: "0.88rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
              The Emergency Travel Certificate is issued to Sierra Leoneans who are traveling back to Sierra Leone. It is
              only good for one-way travel to Sierra Leone.
            </p>

            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: "0.88rem",
                color: "var(--color-navy)",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                margin: "1.25rem 0 0.75rem",
              }}
            >
              Requirements
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <CheckItem>Two passport size photographs</CheckItem>
              <CheckItem>Fee of US $100.00 Money Order</CheckItem>
              <CheckItem>Copy of your old passport/Birth Certificate</CheckItem>
              <CheckItem>Prepaid self-addressed envelope</CheckItem>
            </ul>

            <div style={{ marginTop: "1.5rem" }}>
              <a
                href="/documents/ETC_Form.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
              >
                📄 Download ETC Application Form (PDF)
              </a>
            </div>
          </SectionCard>

          {/* ── Section B: Authentication of Documents ── */}
          <SectionCard icon="📜" title="Authentication of Documents">
            <p style={{ color: "var(--color-text-mid)", fontSize: "0.88rem", lineHeight: 1.8, marginBottom: "1rem" }}>
              <strong style={{ color: "var(--color-navy)" }}>Fee: US$100.00 per document</strong>
            </p>
            <p style={{ color: "var(--color-text-mid)", fontSize: "0.88rem", lineHeight: 1.8 }}>
              The Embassy authenticates documents such as Birth Certificates, Death Certificates, Educational and
              business documents, driver&apos;s license etc., that have been issued by the various authorities in
              Sierra Leone. Submit your original document(s) to be authenticated by mail together with the required
              fee of US$100.00 per document.
            </p>
          </SectionCard>

          {/* ── Section C: Repatriation of Human Remains ── */}
          <SectionCard icon="🕊️" title="Repatriation of Human Remains">
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: "1rem",
                color: "var(--color-navy)",
                marginBottom: "0.25rem",
              }}
            >
              Requirements for Repatriation of Human Remains to Sierra Leone
            </h3>
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: "0.88rem",
                color: "var(--color-teal-dark)",
                marginBottom: "0.75rem",
              }}
            >
              For Citizens of the Republic of Sierra Leone
            </p>

            <div
              style={{
                backgroundColor: "#fff8e1",
                border: "1px solid #ffe082",
                borderRadius: "0.375rem",
                padding: "0.75rem 1rem",
                fontSize: "0.83rem",
                color: "#6d4c00",
                marginBottom: "1.25rem",
                lineHeight: 1.7,
              }}
            >
              <strong>Note:</strong> Unless indicated, all documents submitted should be ORIGINAL
            </div>

            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <CheckItem>Death Certificate</CheckItem>
              <CheckItem>Burial/Transit Permit</CheckItem>
              <CheckItem>
                Letter from Embalmer certifying that the remains have been embalmed according to accepted mortuary
                procedures and have been enclosed in a sealed casket containing only the body of the person in
                question, the clothing and packing
              </CheckItem>
              <CheckItem>
                Certificate of non-contagious disease by the treating physician or the local health department
              </CheckItem>
              <CheckItem>
                Current Republic of Sierra Leone Passport. If not available, an Emergency Travel Certificate (ETC)
                should be obtained. The form is available at{" "}
                <a
                  href="https://www.embassyofsierraleone.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--color-teal)" }}
                >
                  www.embassyofsierraleone.net
                </a>
                . Note: A Money Order of US$100.00 made payable to the Embassy of Sierra Leone should be enclosed
                for the Emergency Travel Certificate
              </CheckItem>
              <CheckItem>
                Note that for persons with dual citizenship: The Republic of Sierra Leone passport needs to be
                valid or an Emergency Travel Certificate should be obtained
              </CheckItem>
              <CheckItem>Copy of itinerary</CheckItem>
              <CheckItem>
                Money order of US$100 made payable to the Embassy of Sierra Leone for processing the funeral
                documents and a prepaid self-addressed envelope (US Postal Express Mail is advised)
              </CheckItem>
            </ul>
          </SectionCard>

        </div>
      </section>

      {/* ── Contact CTA ──────────────────────────── */}
      <section style={{ backgroundColor: "var(--color-navy)", padding: "2.75rem 0" }}>
        <div className="container-site" style={{ textAlign: "center" }}>
          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "1.1rem",
              color: "white",
              marginBottom: "0.5rem",
            }}
          >
            Ready to Visit the Consular Section?
          </h3>
          <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.88rem", marginBottom: "1.25rem" }}>
            Walk-ins are welcome during consular hours (Mon–Fri, 10:00 AM – 3:00 PM). For complex matters,
            we recommend calling ahead.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+12029399261" className="btn-primary">
              📞 Call +1 (202) 939-9261
            </a>
            <Link href="/contact-us" className="btn-outline" style={{ borderColor: "rgba(255,255,255,0.5)", color: "white" }}>
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
