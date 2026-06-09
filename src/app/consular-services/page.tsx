import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Consular Services",
  description:
    "Consular services offered by the Embassy of Sierra Leone — Emergency Travel Certificates, authentication of documents, and more.",
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

const InfoRow = ({ label, value }: { label: string; value: React.ReactNode }) => (
  <div
    style={{
      display: "flex",
      gap: "1rem",
      padding: "0.6rem 0",
      borderBottom: "1px solid #f0f0f0",
      fontSize: "0.88rem",
    }}
  >
    <span
      style={{
        flex: "0 0 180px",
        fontFamily: "var(--font-heading)",
        fontWeight: 600,
        color: "var(--color-navy)",
        fontSize: "0.82rem",
        textTransform: "uppercase",
        letterSpacing: "0.04em",
      }}
    >
      {label}
    </span>
    <span style={{ color: "var(--color-text-mid)", lineHeight: 1.6 }}>{value}</span>
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

          {/* ── Emergency Travel Certificate ──────── */}
          <SectionCard icon="🆘" title="Emergency Travel Certificate (ETC)">
            <p style={{ color: "var(--color-text-mid)", fontSize: "0.88rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
              An Emergency Travel Certificate (ETC) is issued to Sierra Leonean nationals who have lost their passport,
              had it stolen, or whose passport has expired and who urgently need to travel. The ETC is valid for a
              single journey to the Republic of Sierra Leone only and cannot be used for onward travel.
            </p>

            <InfoRow label="Document Validity" value="Single journey to Sierra Leone only" />
            <InfoRow label="Processing Time" value="24–48 hours (subject to verification)" />
            <InfoRow
              label="Fee"
              value={
                <span>
                  Please contact the Consular Section for the applicable fee.{" "}
                  <a href="mailto:consular@embassyofsierraleone.net" style={{ color: "var(--color-teal)" }}>
                    consular@embassyofsierraleone.net
                  </a>
                </span>
              }
            />

            <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.88rem", color: "var(--color-navy)", textTransform: "uppercase", letterSpacing: "0.06em", margin: "1.25rem 0 0.75rem" }}>
              Required Documents
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <CheckItem>Completed ETC Application Form (download link below)</CheckItem>
              <CheckItem>Two (2) recent passport-size photographs (white background)</CheckItem>
              <CheckItem>Copy of lost/expired Sierra Leonean passport (if available)</CheckItem>
              <CheckItem>Official police report for lost or stolen passport (issued within 30 days)</CheckItem>
              <CheckItem>Proof of Sierra Leonean citizenship — national ID card, birth certificate, or previous passport copy</CheckItem>
              <CheckItem>Confirmed onward flight ticket to Sierra Leone</CheckItem>
              <CheckItem>Payment of the applicable fee (money order payable to &quot;Embassy of Sierra Leone&quot;)</CheckItem>
            </ul>

            <div
              style={{
                marginTop: "1.5rem",
                backgroundColor: "#fff8e1",
                border: "1px solid #ffe082",
                borderRadius: "0.375rem",
                padding: "0.85rem 1rem",
                fontSize: "0.83rem",
                color: "#6d4c00",
                lineHeight: 1.7,
              }}
            >
              <strong>⚠ Note:</strong> The Embassy may require the applicant to appear in person for an interview to verify
              identity before an ETC is issued. The Embassy reserves the right to refuse issuance where identity cannot be
              satisfactorily established.
            </div>

            <div style={{ marginTop: "1.5rem" }}>
              <a
                href="/documents/ETC-Application-Form.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
              >
                📄 Download ETC Application Form (PDF)
              </a>
            </div>
          </SectionCard>

          {/* ── Authentication of Documents ───────── */}
          <SectionCard icon="📜" title="Authentication of Documents">
            <p style={{ color: "var(--color-text-mid)", fontSize: "0.88rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
              The Embassy authenticates and legalises documents that are to be used in Sierra Leone. This service
              confirms the authenticity of official signatures and seals on documents issued in the United States or
              other accredited countries. Authentication by the Embassy may be required for educational certificates,
              legal documents, commercial documents, and other official records.
            </p>

            <InfoRow
              label="Fee"
              value={
                <span>
                  <strong style={{ color: "var(--color-teal-dark)", fontSize: "1rem" }}>US$100.00</strong> per document
                </span>
              }
            />
            <InfoRow label="Processing Time" value="3–5 business days (standard)" />
            <InfoRow label="Payment Method" value="Money order or cashier's check payable to 'Embassy of Sierra Leone'" />
            <InfoRow label="In-Person Hours" value="Monday – Friday, 10:00 AM – 3:00 PM" />

            <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.88rem", color: "var(--color-navy)", textTransform: "uppercase", letterSpacing: "0.06em", margin: "1.25rem 0 0.75rem" }}>
              Required Documents
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <CheckItem>Original document to be authenticated</CheckItem>
              <CheckItem>
                Document must first be notarised by a licensed Notary Public and, where applicable,
                certified by the relevant state authority (Apostille), before submission to the Embassy
              </CheckItem>
              <CheckItem>Cover letter indicating the purpose of authentication</CheckItem>
              <CheckItem>Copy of the applicant&apos;s valid passport or national ID</CheckItem>
              <CheckItem>Payment of US$100.00 per document</CheckItem>
              <CheckItem>Prepaid, self-addressed return envelope (FedEx or UPS with tracking) if submitting by mail</CheckItem>
            </ul>

            <p style={{ marginTop: "1.25rem", color: "var(--color-text-mid)", fontSize: "0.85rem", lineHeight: 1.7 }}>
              For questions regarding document authentication, please contact the Consular Section at{" "}
              <a href="mailto:consular@embassyofsierraleone.net" style={{ color: "var(--color-teal)" }}>
                consular@embassyofsierraleone.net
              </a>
              .
            </p>
          </SectionCard>

          {/* ── Passport Services ─────────────────── */}
          <SectionCard icon="🛂" title="Sierra Leonean Passport Services">
            <p style={{ color: "var(--color-text-mid)", fontSize: "0.88rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
              The Embassy facilitates new passport applications, passport renewals, and amendments for Sierra Leonean
              nationals residing in the United States and other accredited countries. All passport applications are
              processed through the Government of Sierra Leone&apos;s central immigration authority.
            </p>

            <InfoRow label="New Passport" value="Application form, birth certificate, national ID, and 2 photographs required" />
            <InfoRow label="Renewal" value="Expired or near-expiry passport, 2 photographs, and completed renewal form" />
            <InfoRow label="Processing Time" value="Approximately 6–8 weeks (processed in Freetown)" />
            <InfoRow label="Collection" value="Applicant must collect in person or provide a prepaid tracked return envelope" />

            <div
              style={{
                marginTop: "1.5rem",
                backgroundColor: "var(--color-teal-light)",
                border: "1px solid var(--color-teal)",
                borderRadius: "0.375rem",
                padding: "0.85rem 1rem",
                fontSize: "0.83rem",
                color: "var(--color-teal-dark)",
                lineHeight: 1.7,
              }}
            >
              <strong>ℹ Information:</strong> Passport fees and forms are available at the Consular Section counter.
              Contact the Embassy to confirm current requirements and fees before submitting your application.
            </div>
          </SectionCard>

          {/* ── Notarial Services ─────────────────── */}
          <SectionCard icon="✍️" title="Notarial & Civil Registration Services">
            <p style={{ color: "var(--color-text-mid)", fontSize: "0.88rem", lineHeight: 1.8, marginBottom: "1rem" }}>
              The Embassy provides a range of notarial and civil registration services including:
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <CheckItem>Certification and witnessing of signatures on official documents</CheckItem>
              <CheckItem>Registration of births of Sierra Leonean nationals born abroad</CheckItem>
              <CheckItem>Registration of marriages and deaths occurring abroad (where applicable)</CheckItem>
              <CheckItem>Preparation of affidavits for use in Sierra Leone</CheckItem>
              <CheckItem>Issuance of letters of nationality or citizenship verification</CheckItem>
              <CheckItem>Legalisation of power of attorney documents for use in Sierra Leone</CheckItem>
            </ul>
            <p style={{ marginTop: "1rem", color: "var(--color-text-mid)", fontSize: "0.85rem", lineHeight: 1.7 }}>
              Fees vary by service type. Please contact the Consular Section for specific requirements and applicable fees.
            </p>
          </SectionCard>
        </div>
      </section>

      {/* ── Book Appointment CTA ──────────────────── */}
      <section style={{ backgroundColor: "var(--color-navy)", padding: "2.75rem 0" }}>
        <div className="container-site" style={{ textAlign: "center" }}>
          <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.1rem", color: "white", marginBottom: "0.5rem" }}>
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
