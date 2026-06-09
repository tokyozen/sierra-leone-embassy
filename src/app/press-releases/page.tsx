import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Press Releases",
  description:
    "Official press releases and statements from the Embassy of the Republic of Sierra Leone in Washington, D.C.",
};

const pressRelease = {
  id: "PR-2025-001",
  title: "Ambassador Amara Sheikh Mohammed Sowa Presents Letters of Credence to President Trump",
  date: "July 24, 2025",
  location: "Washington, D.C.",
  category: "Diplomatic Affairs",
  body: [
    "WASHINGTON, D.C. — His Excellency Ambassador Amara Sheikh Mohammed Sowa, Sierra Leone's Ambassador Extraordinary and Plenipotentiary to the United States of America, formally presented his Letters of Credence to President Donald J. Trump at the White House on Thursday, July 24, 2025.",
    "The solemn ceremony, steeped in centuries of diplomatic tradition, formally accredited Ambassador Sowa as the official representative of the Government of the Republic of Sierra Leone to the Government of the United States of America, and to the nine other countries in the Americas to which Sierra Leone's Washington Embassy is accredited.",
    "At the ceremony, Ambassador Sowa conveyed to President Trump the warm greetings and good wishes of His Excellency President Julius Maada Bio, the Government, and the people of the Republic of Sierra Leone. The Ambassador also reaffirmed Sierra Leone's deep and abiding commitment to its longstanding friendship and partnership with the United States — a relationship built on shared democratic values, mutual respect, and a common commitment to peace, prosperity, and human dignity.",
    "During the courtesy meeting that followed the credential ceremony, Ambassador Sowa and President Trump discussed a range of issues of mutual interest, including the continued strengthening of bilateral trade and investment ties, security cooperation in West Africa, and the important role of the Sierra Leonean diaspora community in the United States. The two leaders expressed their shared determination to advance the Sierra Leone–U.S. partnership for the benefit of both nations.",
    "Ambassador Sowa took the occasion to highlight the significant strides Sierra Leone has made in recent years under President Bio's leadership — including the landmark free quality education programme, the Feed Salone agricultural transformation initiative, and ongoing efforts to strengthen democratic governance, rule of law, and anti-corruption institutions.",
    "Speaking to Embassy staff and Sierra Leonean community representatives after the ceremony, Ambassador Sowa expressed his deep sense of honour and responsibility. 'This is a moment of immense pride — not just for me personally, but for every Sierra Leonean. I present these credentials not merely as a formality of protocol, but as a solemn pledge to serve my country with dedication, integrity, and diligence. I am committed to working tirelessly to deepen our partnership with the United States and to delivering the highest quality of service to every Sierra Leonean who relies on this Embassy,' Ambassador Sowa said.",
    "Ambassador Sowa brings to the role extensive experience in diplomacy and public service. His appointment was confirmed by the Government of Sierra Leone and his credentials were signed by His Excellency President Julius Maada Bio.",
    "The Embassy of Sierra Leone in Washington, D.C. was established on April 27, 1961, the day Sierra Leone gained independence from the United Kingdom. It is the primary channel of communication between the Government of Sierra Leone and the Government of the United States, and represents Sierra Leone's interests across ten accredited countries in the Americas.",
  ],
  footer: "For media enquiries, please contact the Embassy's Press & Public Affairs Section at press@embassyofsierraleone.net or call +1 (202) 939-9261 (Ext. 2224).",
};

export default function PressReleasesPage() {
  return (
    <>
      <PageHero
        title="Press Releases"
        subtitle="Official statements and press releases from the Embassy of the Republic of Sierra Leone."
      />

      <section style={{ padding: "4.5rem 0" }}>
        <div className="container-site">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr minmax(0, 820px) 1fr",
              gap: "0",
            }}
          >
            {/* Centre column — document card */}
            <div style={{ gridColumn: "2", minWidth: 0 }}>
              <div className="section-divider" />
              <h2 className="section-heading" style={{ marginBottom: "2rem" }}>
                Latest Press Release
              </h2>

              {/* Document card */}
              <article
                style={{
                  border: "1px solid #e0e0e0",
                  borderTop: "4px solid var(--color-teal)",
                  borderRadius: "0.5rem",
                  overflow: "hidden",
                  backgroundColor: "white",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                {/* Document header */}
                <div
                  style={{
                    backgroundColor: "var(--color-cream)",
                    borderBottom: "1px solid #e8e8e8",
                    padding: "1.5rem 2rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "center",
                      flexWrap: "wrap",
                      marginBottom: "0.75rem",
                    }}
                  >
                    <span
                      style={{
                        backgroundColor: "var(--color-teal)",
                        color: "white",
                        fontFamily: "var(--font-heading)",
                        fontWeight: 600,
                        fontSize: "0.68rem",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "2px",
                      }}
                    >
                      Press Release
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "0.78rem",
                        color: "var(--color-text-light)",
                        fontWeight: 500,
                      }}
                    >
                      Ref: {pressRelease.id}
                    </span>
                    <span
                      style={{
                        marginLeft: "auto",
                        fontFamily: "var(--font-heading)",
                        fontSize: "0.78rem",
                        color: "var(--color-text-light)",
                      }}
                    >
                      {pressRelease.category}
                    </span>
                  </div>

                  <h1
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 700,
                      fontSize: "clamp(1.15rem, 2.5vw, 1.5rem)",
                      color: "var(--color-navy)",
                      lineHeight: 1.3,
                      marginBottom: "0.75rem",
                    }}
                  >
                    {pressRelease.title}
                  </h1>

                  <div
                    style={{
                      display: "flex",
                      gap: "1.5rem",
                      flexWrap: "wrap",
                      fontSize: "0.82rem",
                      color: "var(--color-text-light)",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    <span>📅 {pressRelease.date}</span>
                    <span>📍 {pressRelease.location}</span>
                  </div>
                </div>

                {/* Letterhead */}
                <div
                  style={{
                    textAlign: "center",
                    padding: "1.75rem 2rem 0.5rem",
                    borderBottom: "1px solid #f0f0f0",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 700,
                      fontSize: "0.82rem",
                      color: "var(--color-navy)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginBottom: "0.2rem",
                    }}
                  >
                    Embassy of the Republic of Sierra Leone
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "0.75rem",
                      color: "var(--color-text-light)",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Washington, D.C. — United States of America
                  </div>
                  <div
                    style={{
                      width: "3rem",
                      height: "2px",
                      backgroundColor: "var(--color-teal)",
                      margin: "0 auto",
                    }}
                  />
                </div>

                {/* Body */}
                <div style={{ padding: "1.75rem 2rem" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                    {pressRelease.body.map((para, i) => (
                      <p
                        key={i}
                        style={{
                          color: "var(--color-text-mid)",
                          lineHeight: 1.9,
                          fontSize: "0.93rem",
                          margin: 0,
                          textAlign: i === 0 ? "left" : "left",
                        }}
                      >
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Footer / media contact */}
                  <div
                    style={{
                      marginTop: "2rem",
                      paddingTop: "1.25rem",
                      borderTop: "1px solid #e8e8e8",
                      fontSize: "0.82rem",
                      color: "var(--color-text-light)",
                      lineHeight: 1.7,
                      fontStyle: "italic",
                    }}
                  >
                    {pressRelease.footer}
                  </div>

                  {/* END mark */}
                  <div
                    style={{
                      marginTop: "1.25rem",
                      textAlign: "center",
                      fontFamily: "var(--font-heading)",
                      fontWeight: 700,
                      fontSize: "0.78rem",
                      color: "var(--color-text-light)",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                    }}
                  >
                    — END —
                  </div>
                </div>
              </article>

              {/* Archive note */}
              <div
                style={{
                  marginTop: "2rem",
                  backgroundColor: "var(--color-teal-light)",
                  borderRadius: "0.375rem",
                  padding: "1rem 1.25rem",
                  fontSize: "0.84rem",
                  color: "var(--color-text-mid)",
                  lineHeight: 1.7,
                }}
              >
                <strong style={{ color: "var(--color-navy)" }}>Archive:</strong> This is the most recent press release
                from the Embassy of Sierra Leone in Washington, D.C. For older press releases or additional media
                resources, please contact the Press &amp; Public Affairs Section at{" "}
                <a href="mailto:press@embassyofsierraleone.net" style={{ color: "var(--color-teal)" }}>
                  press@embassyofsierraleone.net
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Media CTA ─────────────────────────── */}
      <section style={{ backgroundColor: "var(--color-navy)", padding: "2.75rem 0" }}>
        <div className="container-site" style={{ textAlign: "center" }}>
          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "1.05rem",
              color: "white",
              marginBottom: "0.5rem",
            }}
          >
            Media &amp; Press Enquiries
          </h3>
          <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.88rem", marginBottom: "1.25rem" }}>
            Journalists and media organisations seeking comment or information from the Embassy should contact
            our Press &amp; Public Affairs Section.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="mailto:press@embassyofsierraleone.net"
              className="btn-primary"
            >
              ✉️ press@embassyofsierraleone.net
            </a>
            <Link href="/contact-us" className="btn-outline" style={{ borderColor: "rgba(255,255,255,0.5)", color: "white" }}>
              Contact the Embassy
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
