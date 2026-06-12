"use client";

import { useState } from "react";
import VisaApplicationForm from "./VisaApplicationForm";

type Tab = "online" | "pdf";

const TABS: { id: Tab; label: string }[] = [
  { id: "online", label: "📱  Apply Online" },
  { id: "pdf",    label: "📄  Download PDF" },
];

const steps = [
  {
    n: "01",
    title: "Download & Complete the Application Form",
    body: "Download the Sierra Leone Visa Application Form using the button above or obtain one in person at the Embassy's Consular Section. Complete all fields in BLOCK CAPITALS using black or blue ink. Incomplete or illegible applications will be returned.",
  },
  {
    n: "02",
    title: "Gather Your Supporting Documents",
    body: "Collect all required documents listed in the checklist below. Ensure your passport has at least six (6) months validity beyond your intended stay and at least two blank visa pages.",
  },
  {
    n: "03",
    title: "Prepare Payment",
    body: "Prepare a money order or cashier's check (no personal checks or cash accepted) payable to 'Embassy of Sierra Leone' for the exact visa fee. See the fee schedule for the amount applicable to your visa category.",
  },
  {
    n: "04",
    title: "Submit Your Application",
    body: "Applications may be submitted in person at the Consular Section (Monday–Friday, 10:00 AM–3:00 PM) or by mail. If submitting by mail, include a prepaid, self-addressed return envelope (FedEx or UPS with tracking — no USPS).",
  },
  {
    n: "05",
    title: "Processing & Collection",
    body: "Standard processing takes 5–7 business days from receipt of a complete application. Expedited processing (2–3 business days) is available for an additional fee. You will be notified when your passport is ready for collection or return mailing.",
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
  "Notarized written consent letter from both parents/legal guardians if only one parent is travelling with the child, or from both parents/guardians if the child is travelling alone or with a third party",
  "Copy of the passport(s) of the parent(s) or legal guardian(s) signing the consent letter",
  "Court order confirming sole guardianship, if applicable",
  "All other standard requirements listed above apply",
];

export default function VisaTabSection() {
  const [active, setActive] = useState<Tab>("online");

  return (
    <div>
      {/* Tab buttons */}
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "0" }}>
        {TABS.map((tab) => {
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              style={{
                padding: "0.65rem 1.5rem",
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: "0.85rem",
                borderRadius: "0.375rem",
                cursor: "pointer",
                transition: "all 0.15s",
                border: "2px solid",
                letterSpacing: "0.03em",
                ...(isActive
                  ? {
                      backgroundColor: "var(--color-teal)",
                      color: "white",
                      borderColor: "var(--color-teal)",
                    }
                  : {
                      backgroundColor: "white",
                      color: "var(--color-navy)",
                      borderColor: "var(--color-navy)",
                    }),
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* ── Tab 1: Online form ──────────────────────── */}
      {active === "online" && (
        <div
          style={{
            marginTop: "1.5rem",
            backgroundColor: "var(--color-cream)",
            borderRadius: "0.5rem",
            padding: "1.75rem",
            border: "1px solid rgba(61,176,163,0.2)",
          }}
        >
          <VisaApplicationForm />
        </div>
      )}

      {/* ── Tab 2: PDF + Steps + Checklist ─────────── */}
      {active === "pdf" && (
        <div style={{ marginTop: "1.5rem" }}>
          {/* PDF Download */}
          <div
            style={{
              backgroundColor: "var(--color-navy)",
              borderRadius: "0.5rem",
              padding: "1.25rem 1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              flexWrap: "wrap",
              justifyContent: "space-between",
              marginBottom: "3rem",
            }}
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

          {/* Step-by-step */}
          <div style={{ marginBottom: "3.5rem" }}>
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
                    <h3
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 700,
                        fontSize: "0.97rem",
                        color: "var(--color-navy)",
                        marginBottom: "0.4rem",
                      }}
                    >
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

          {/* Checklist + Minors */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "3rem",
            }}
          >
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
                    style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start", fontSize: "0.87rem", color: "var(--color-text-mid)", lineHeight: 1.6 }}
                  >
                    <span style={{ flex: "0 0 auto", color: "var(--color-teal)", fontWeight: 700, marginTop: "0.05rem" }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="section-divider" />
              <h2 className="section-heading">Minors (Under 18)</h2>
              <p style={{ color: "var(--color-text-mid)", fontSize: "0.88rem", marginBottom: "1.25rem", lineHeight: 1.7 }}>
                Additional documentation is required for all visa applications submitted on behalf of minors,
                regardless of nationality. The following must be included in addition to the standard requirements:
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {minorsItems.map((item, i) => (
                  <li
                    key={i}
                    style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start", fontSize: "0.87rem", color: "var(--color-text-mid)", lineHeight: 1.6 }}
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
                <strong>⚠ Note:</strong> Consent letters must be notarized by a Notary Public. The Embassy
                reserves the right to request additional documentation on a case-by-case basis.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
