import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Visa Services",
  description:
    "Apply for a Sierra Leone visa — fee schedule, step-by-step application process, required documents, and information for minors.",
};

const steps = [
  {
    n: "01",
    title: "Download & Complete the Application Form",
    body: "Download the Sierra Leone Visa Application Form from the link below or obtain one in person at the Embassy's Consular Section. Complete all fields in BLOCK CAPITALS using black or blue ink. Incomplete or illegible applications will be returned.",
  },
  {
    n: "02",
    title: "Gather Your Supporting Documents",
    body: "Collect all required documents listed in the checklist below. Ensure your passport has at least six (6) months validity beyond your intended stay and at least two blank visa pages.",
  },
  {
    n: "03",
    title: "Prepare Payment",
    body: "Prepare a money order or cashier's check (no personal checks or cash accepted) payable to 'Embassy of Sierra Leone' for the exact visa fee. See the fee schedule below for the amount applicable to your visa category.",
  },
  {
    n: "04",
    title: "Submit Your Application",
    body: "Applications may be submitted in person at the Consular Section (Monday–Friday, 10:00 AM–3:00 PM) or by mail. If submitting by mail, include a prepaid, self-addressed return envelope (FedEx or UPS with tracking — no USPS).",
  },
  {
    n: "05",
    title: "Processing & Collection",
    body: "Standard processing takes 5–7 business days from receipt of a complete application. Expedited processing (2–3 business days) is available for an additional fee where noted. You will be notified when your passport is ready for collection or return mailing.",
  },
];

const checklist = [
  "Original passport valid for at least 6 months beyond intended entry date, with at least 2 blank pages",
  "Completed and signed Sierra Leone Visa Application Form",
  "Two (2) recent passport-size photographs (2×2 inch, white background, taken within the last 6 months)",
  "Money order or cashier's check payable to 'Embassy of Sierra Leone' for the applicable fee",
  "Confirmed round-trip airline ticket or itinerary",
  "Proof of accommodation in Sierra Leone (hotel booking, invitation letter, or host's details)",
  "Bank statement for the last three (3) months showing sufficient funds",
  "For business visits: official letter from your employer or company on company letterhead stating purpose and dates of travel",
  "For sponsored travel: letter from Sierra Leonean host/sponsor and copy of their national ID or passport",
  "Travel health insurance covering the full duration of stay (recommended)",
  "Yellow fever vaccination certificate (required for travelers arriving from or via yellow-fever-endemic countries)",
];

const minorsItems = [
  "Completed and signed application form signed by a parent or legal guardian",
  "Original birth certificate of the minor",
  "Notarized written consent letter from both parents/legal guardians (if only one parent is travelling with the child) or from both parents/guardians (if the child is travelling alone or with a third party)",
  "Copy of the passport(s) of the parent(s) or legal guardian(s) signing the consent letter",
  "Court order confirming sole guardianship, if applicable",
  "All other standard requirements listed above apply",
];

const fees = [
  { category: "Tourist / Visitor", single: "$100", multiple: "$150", notes: "Up to 30 days per visit" },
  { category: "Business", single: "$100", multiple: "$150", notes: "Letter from employer required" },
  { category: "Transit", single: "$30", multiple: "N/A", notes: "Max 72 hours, onward ticket required" },
  { category: "Student", single: "$75", multiple: "$100", notes: "Enrollment letter required" },
  { category: "Journalist / Media", single: "$100", multiple: "$150", notes: "Press credentials required" },
  { category: "Diplomatic / Official", single: "Gratis", multiple: "Gratis", notes: "Diplomatic note required" },
  { category: "Expedited Service (add-on)", single: "+$50", multiple: "+$50", notes: "2–3 business days" },
];

export default function VisaServicesPage() {
  return (
    <>
      <PageHero
        title="Visa Services"
        subtitle="Information and requirements for obtaining a Sierra Leone visa for residents of accredited countries."
      />

      {/* ── Intro ─────────────────────────────────── */}
      <section style={{ backgroundColor: "var(--color-teal-light)", padding: "2.25rem 0" }}>
        <div className="container-site">
          <p style={{ color: "var(--color-text-mid)", fontSize: "0.93rem", lineHeight: 1.8, maxWidth: "820px" }}>
            All foreign nationals wishing to visit the Republic of Sierra Leone must obtain a valid Sierra Leone visa before
            arriving, unless they hold a passport from a visa-exempt country. The Embassy of Sierra Leone in Washington, D.C.
            processes visa applications for residents of the United States, Canada, and other accredited countries. Please
            read all requirements carefully before submitting your application.
          </p>
        </div>
      </section>

      {/* ── Download form CTA ─────────────────────── */}
      <section style={{ backgroundColor: "var(--color-navy)", padding: "1.5rem 0" }}>
        <div
          className="container-site"
          style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap", justifyContent: "space-between" }}
        >
          <p style={{ color: "white", fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "0.95rem", margin: 0 }}>
            📄 Download the Sierra Leone Visa Application Form
          </p>
          <a
            href="/documents/visa-application-form-2017.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ whiteSpace: "nowrap" }}
          >
            Download Application Form (PDF)
          </a>
        </div>
      </section>

      <section style={{ padding: "4.5rem 0" }}>
        <div className="container-site">

          {/* ── Fee Schedule ──────────────────────── */}
          <div style={{ marginBottom: "4rem" }}>
            <div className="section-divider" />
            <h2 className="section-heading">Visa Fee Schedule</h2>
            <p style={{ color: "var(--color-text-mid)", fontSize: "0.88rem", marginBottom: "1.5rem", lineHeight: 1.7 }}>
              All fees are in US dollars. Payment must be by money order or cashier's check payable to{" "}
              <strong>&quot;Embassy of Sierra Leone&quot;</strong>. Cash and personal checks are not accepted.
            </p>

            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.88rem", minWidth: "560px" }}>
                <thead>
                  <tr style={{ backgroundColor: "var(--color-navy)", color: "white" }}>
                    {["Visa Category", "Single Entry", "Multiple Entry", "Notes"].map((h) => (
                      <th
                        key={h}
                        style={{
                          padding: "0.85rem 1rem",
                          textAlign: "left",
                          fontFamily: "var(--font-heading)",
                          fontWeight: 600,
                          fontSize: "0.8rem",
                          letterSpacing: "0.04em",
                          textTransform: "uppercase",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {fees.map((row, i) => (
                    <tr
                      key={row.category}
                      style={{ backgroundColor: i % 2 === 0 ? "white" : "var(--color-cream)" }}
                    >
                      <td style={{ padding: "0.75rem 1rem", fontWeight: 600, color: "var(--color-navy)", fontFamily: "var(--font-heading)" }}>
                        {row.category}
                      </td>
                      <td style={{ padding: "0.75rem 1rem", color: "var(--color-teal-dark)", fontWeight: 700 }}>
                        {row.single}
                      </td>
                      <td style={{ padding: "0.75rem 1rem", color: "var(--color-teal-dark)", fontWeight: 700 }}>
                        {row.multiple}
                      </td>
                      <td style={{ padding: "0.75rem 1rem", color: "var(--color-text-mid)" }}>
                        {row.notes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ── Step-by-step ──────────────────────── */}
          <div style={{ marginBottom: "4rem" }}>
            <div className="section-divider" />
            <h2 className="section-heading">Application Process</h2>
            <p style={{ color: "var(--color-text-mid)", fontSize: "0.88rem", marginBottom: "2rem", lineHeight: 1.7 }}>
              Follow these steps carefully to ensure your application is processed without delay.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {steps.map((step) => (
                <div
                  key={step.n}
                  style={{
                    display: "flex",
                    gap: "1.5rem",
                    alignItems: "flex-start",
                    padding: "1.5rem",
                    backgroundColor: "var(--color-cream)",
                    borderRadius: "0.375rem",
                    borderLeft: "4px solid var(--color-teal)",
                  }}
                >
                  <div
                    style={{
                      flex: "0 0 auto",
                      width: "2.5rem",
                      height: "2.5rem",
                      borderRadius: "50%",
                      backgroundColor: "var(--color-teal)",
                      color: "white",
                      fontFamily: "var(--font-heading)",
                      fontWeight: 700,
                      fontSize: "0.78rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {step.n}
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.97rem", color: "var(--color-navy)", marginBottom: "0.4rem" }}>
                      {step.title}
                    </h3>
                    <p style={{ color: "var(--color-text-mid)", fontSize: "0.87rem", lineHeight: 1.75, margin: 0 }}>
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Two-column: Checklist + Minors ────── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "3rem",
            }}
          >
            {/* Checklist */}
            <div>
              <div className="section-divider" />
              <h2 className="section-heading">Required Documents Checklist</h2>
              <p style={{ color: "var(--color-text-mid)", fontSize: "0.88rem", marginBottom: "1.25rem", lineHeight: 1.7 }}>
                All documents must be originals or certified copies unless otherwise specified.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {checklist.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      gap: "0.6rem",
                      alignItems: "flex-start",
                      fontSize: "0.87rem",
                      color: "var(--color-text-mid)",
                      lineHeight: 1.6,
                    }}
                  >
                    <span style={{ flex: "0 0 auto", color: "var(--color-teal)", fontWeight: 700, marginTop: "0.05rem" }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Minors */}
            <div>
              <div className="section-divider" />
              <h2 className="section-heading">Minors (Under 18)</h2>
              <p style={{ color: "var(--color-text-mid)", fontSize: "0.88rem", marginBottom: "1.25rem", lineHeight: 1.7 }}>
                Additional documentation is required for all visa applications submitted on behalf of minors, regardless
                of nationality. The following must be included in addition to the standard requirements:
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {minorsItems.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      gap: "0.6rem",
                      alignItems: "flex-start",
                      fontSize: "0.87rem",
                      color: "var(--color-text-mid)",
                      lineHeight: 1.6,
                    }}
                  >
                    <span style={{ flex: "0 0 auto", color: "var(--color-teal)", fontWeight: 700, marginTop: "0.05rem" }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div
                style={{
                  marginTop: "1.5rem",
                  backgroundColor: "#fff8e1",
                  border: "1px solid #ffe082",
                  borderRadius: "0.375rem",
                  padding: "1rem 1.1rem",
                  fontSize: "0.83rem",
                  color: "#6d4c00",
                  lineHeight: 1.7,
                }}
              >
                <strong>⚠ Note:</strong> Consent letters must be notarized by a Notary Public. The Embassy reserves the
                right to request additional documentation on a case-by-case basis.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact CTA ───────────────────────────── */}
      <section style={{ backgroundColor: "var(--color-navy)", padding: "2.75rem 0" }}>
        <div className="container-site" style={{ textAlign: "center" }}>
          <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.1rem", color: "white", marginBottom: "0.5rem" }}>
            Questions About Your Visa Application?
          </h3>
          <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.88rem", marginBottom: "1.25rem" }}>
            Contact the Consular Section directly at{" "}
            <a href="mailto:consular@embassyofsierraleone.net" style={{ color: "var(--color-teal)" }}>
              consular@embassyofsierraleone.net
            </a>{" "}
            or call +1 (202) 939-9261 during consular hours.
          </p>
          <Link href="/contact-us" className="btn-primary">
            Contact the Consular Section
          </Link>
        </div>
      </section>
    </>
  );
}
