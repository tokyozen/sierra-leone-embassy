import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import VisaTabSection from "@/components/forms/VisaTabSection";

export const metadata: Metadata = {
  title: "Visa Services",
  description:
    "Apply for a Sierra Leone visa — fee schedule, step-by-step application process, required documents, and information for minors.",
};


const feeNotes = [
  "All US Passport Holders are issued 3-year multiple entry visas for a fee of US$160.00",
  "Official and Diplomatic Passport Holders on official duties are issued GRATIS Visas",
  "ECOWAS passport holders are issued GRATIS visas",
];

const fees = [
  { category: "Canada", single: "US$75.00", multiple: "US$150.00" },
  { category: "British", single: "US$229.00", multiple: "US$523.00" },
  { category: "Other Nationals", single: "US$40.00", multiple: "US$80.00" },
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

      {/* ── Apply Online / Download tabs ──────────── */}
      <section style={{ padding: "3rem 0" }}>
        <div className="container-site">
          <VisaTabSection />
        </div>
      </section>

      <section style={{ padding: "0 0 4.5rem" }}>
        <div className="container-site">

          {/* ── Fee Schedule ──────────────────────── */}
          <div style={{ marginBottom: "4rem" }}>
            <div className="section-divider" />
            <h2 className="section-heading">Visa Fee Schedule</h2>
            <p style={{ color: "var(--color-text-mid)", fontSize: "0.88rem", marginBottom: "1.5rem", lineHeight: 1.7 }}>
              All fees are in US dollars. Payment must be by money order or cashier's check payable to{" "}
              <strong>&quot;Embassy of Sierra Leone&quot;</strong>. Cash and personal checks are not accepted.
            </p>

            <div style={{ marginBottom: "1.5rem" }}>
              {feeNotes.map((note, i) => (
                <p
                  key={note}
                  style={{ color: "var(--color-text-mid)", fontSize: "0.88rem", lineHeight: 1.7, marginBottom: "0.4rem" }}
                >
                  <strong style={{ color: "var(--color-navy)" }}>{String.fromCharCode(65 + i)}.</strong> {note}
                </p>
              ))}
            </div>

            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.88rem", minWidth: "560px" }}>
                <thead>
                  <tr style={{ backgroundColor: "var(--color-navy)", color: "white" }}>
                    {["Nationality", "Six Months (Single)", "One Year (Multiple)"].map((h) => (
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
                    </tr>
                  ))}
                </tbody>
              </table>
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
