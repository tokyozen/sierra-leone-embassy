import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "The Embassy",
  description:
    "About the Embassy of Sierra Leone in Washington, D.C. — the Ambassador, mission statement, departments, embassy holidays, and former ambassadors.",
};

const departments = [
  {
    name: "Office of the Ambassador",
    phone: "(202) 939-9265",
    extension: "Ext. 112",
    email: "he@embassyofsierraleone.net",
  },
  {
    name: "Consular Section",
    phone: "(202) 939-9261/62/63",
    extension: "Ext. 110",
    email: "consular@embassyofsierraleone.net",
  },
  {
    name: "Chancery Administration",
    phone: "",
    extension: "Ext. 2222",
    email: "admin@embassyofsierraleone.net",
  },
  {
    name: "Trade & Investment Section",
    phone: "",
    extension: "Ext. 2223",
    email: "trade@embassyofsierraleone.net",
  },
  {
    name: "Press & Public Affairs",
    phone: "",
    extension: "Ext. 2224",
    email: "press@embassyofsierraleone.net",
  },
  {
    name: "General Enquiries",
    phone: "",
    extension: "Ext. 2225",
    email: "info@embassyofsierraleone.net",
  },
];

const embassyHolidays = [
  // Sierra Leone public holidays
  { date: "January 1", name: "New Year's Day" },
  { date: "3rd Monday, January", name: "Martin Luther King Jr. Day (U.S.)" },
  { date: "February 18", name: "Armed Forces Day (Sierra Leone)" },
  { date: "3rd Monday, February", name: "Presidents' Day (U.S.)" },
  { date: "March 8", name: "International Women's Day (Sierra Leone)" },
  { date: "Variable (March/April)", name: "Good Friday" },
  { date: "Variable (March/April)", name: "Easter Monday" },
  { date: "April 27", name: "Independence Day — National Day of Sierra Leone" },
  { date: "May 1", name: "Labour Day (Sierra Leone)" },
  { date: "Last Monday, May", name: "Memorial Day (U.S.)" },
  { date: "Variable (Islamic calendar)", name: "Eid ul-Fitr" },
  { date: "July 4", name: "Independence Day (U.S.)" },
  { date: "Variable (Islamic calendar)", name: "Eid ul-Adha" },
  { date: "1st Monday, September", name: "Labor Day (U.S.)" },
  { date: "November 11", name: "Veterans Day (U.S.)" },
  { date: "Variable (Islamic calendar)", name: "Maulid al-Nabi (Prophet's Birthday)" },
  { date: "4th Thursday, November", name: "Thanksgiving Day (U.S.)" },
  { date: "December 25", name: "Christmas Day" },
  { date: "December 26", name: "Boxing Day (Sierra Leone)" },
];

const formerAmbassadors = [
  {
    name: "Ambassador Gershon B.O. Collier",
    period: "1961 – 1967",
    note: "First Ambassador to the United States",
    image: "/images/ambassadors/gershon-collier.jpg",
  },
  {
    name: "Ambassador George Carew",
    period: "1967 – 1971",
    note: "",
    image: "/images/ambassadors/george-carew.jpg",
  },
  {
    name: "Ambassador Philip Palmer",
    period: "1971 – 1975",
    note: "",
    image: "/images/ambassadors/philip-palmer.jpg",
  },
  {
    name: "Ambassador Bockari K. Stevens",
    period: "1975 – 1985",
    note: "",
    image: "/images/ambassadors/bockari-stevens.png",
  },
  {
    name: "Ambassador Thomas Kargbo",
    period: "1985 – 1995",
    note: "",
    image: "/images/ambassadors/thomas-kargbo.jpg",
  },
  {
    name: "Ambassador Dauda Kamara",
    period: "1995 – 2005",
    note: "",
    image: "/images/ambassadors/dauda-kamara.jpg",
  },
  {
    name: "Ambassador Ibrahim M. Kamara",
    period: "2005 – 2010",
    note: "",
    image: "/images/ambassadors/ibrahim-kamara.jpg",
  },
  {
    name: "Ambassador John Ernest Leigh",
    period: "2014 – 2018",
    note: "",
    image: "/images/ambassadors/john-leigh.jpg",
  },
  {
    name: "Ambassador Sidique Abou-Bakarr Wai",
    period: "2018 – 2024",
    note: "",
    image: "/images/ambassadors/sidique-wai.jpg",
  },
];

export default function TheEmbassyPage() {
  return (
    <>
      <PageHero
        title="The Embassy"
        subtitle="The Embassy of the Republic of Sierra Leone in Washington, D.C."
        image="/images/heroes/embassy-hero.jpg"
      />

      {/* ── Ambassador Bio ─────────────────────── */}
      <section style={{ backgroundColor: "var(--color-cream)", padding: "4.5rem 0" }}>
        <div className="container-site">
          <div style={{ display: "flex", gap: "3rem", alignItems: "flex-start", flexWrap: "wrap" }}>
            {/* Photo */}
            <div
              style={{
                flex: "0 0 auto",
                width: "clamp(180px, 25%, 240px)",
                borderRadius: "0.5rem",
                overflow: "hidden",
                boxShadow: "var(--shadow-card-hover)",
                aspectRatio: "3/4",
                position: "relative",
              }}
            >
              <Image
                src="/images/presidents/Ambassador-Amara-Sheikh-Mohammed-Sowa.jpg"
                alt="H.E. Ambassador Amara Sheikh Mohammed Sowa"
                fill
                sizes="100vw"
                style={{ objectFit: "cover", objectPosition: "top center" }}
              />
            </div>

            {/* Bio text */}
            <div style={{ flex: "1 1 300px" }}>
              <div className="section-divider" />
              <h2 className="section-heading">Ambassador&apos;s Message</h2>
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1rem",
                  color: "var(--color-teal)",
                  fontWeight: 600,
                  marginBottom: "0.25rem",
                }}
              >
                H.E. Ambassador Amara Sheikh Mohammed Sowa
              </div>
              <div
                style={{
                  fontSize: "0.82rem",
                  color: "var(--color-text-light)",
                  fontFamily: "var(--font-heading)",
                  marginBottom: "1.25rem",
                }}
              >
                Ambassador Extraordinary and Plenipotentiary
                <br />
                Embassy of the Republic of Sierra Leone, Washington, D.C.
                <br />
                <em>Letters of Credence presented: July 24, 2025</em>
              </div>

              <p style={{ color: "var(--color-text-mid)", lineHeight: 1.85, fontSize: "0.93rem", marginBottom: "1rem" }}>
                On behalf of the Government and people of the Republic of Sierra Leone, and on my own behalf, I extend a
                warm welcome to all visitors to the official website of the Embassy of Sierra Leone in Washington, D.C.
                It is a privilege and an honour to serve as Sierra Leone&apos;s Ambassador Extraordinary and
                Plenipotentiary to the United States of America and to the nine other countries to which our Embassy
                is accredited.
              </p>
              <p style={{ color: "var(--color-text-mid)", lineHeight: 1.85, fontSize: "0.93rem", marginBottom: "1rem" }}>
                The Embassy of Sierra Leone was established in Washington, D.C. on April 27, 1961 — the very day Sierra Leone
                gained independence — reflecting the importance that the Government of Sierra Leone has always placed on
                its relationship with the United States. For more than six decades, our two nations have cultivated a
                strong partnership built on shared democratic values, mutual respect, and a commitment to the well-being
                of our peoples.
              </p>
              <p style={{ color: "var(--color-text-mid)", lineHeight: 1.85, fontSize: "0.93rem", marginBottom: "1.75rem" }}>
                My mission is to strengthen and deepen this relationship in all its dimensions — diplomatic, economic,
                cultural, and people-to-people. I am committed to delivering the highest quality consular services to
                Sierra Leoneans in our region of accreditation, to promoting Sierra Leone as a prime destination for
                trade, tourism, and investment, and to advocating for the interests of Sierra Leone and its citizens on
                the world stage. I invite you to explore this website and to reach out to us for any assistance you may
                require.
              </p>
              <Link href="/contact-us" className="btn-primary">
                Contact the Embassy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission Statement ──────────────────── */}
      <section style={{ backgroundColor: "var(--color-navy)", padding: "3.5rem 0" }}>
        <div className="container-site">
          <div className="section-divider" />
          <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.5rem", color: "white", marginBottom: "1.5rem" }}>
            Mission Statement
          </h2>
          <blockquote
            style={{
              borderLeft: "4px solid var(--color-teal)",
              paddingLeft: "1.5rem",
              marginLeft: 0,
              fontFamily: "var(--font-heading)",
              fontSize: "1.1rem",
              fontStyle: "italic",
              color: "rgba(255,255,255,0.9)",
              lineHeight: 1.7,
              maxWidth: "820px",
              marginBottom: "1.25rem",
            }}
          >
            &ldquo;The Embassy of the Republic of Sierra Leone in Washington, D.C. is committed to advancing the national
            interests of Sierra Leone through the promotion of diplomatic relations, the provision of high-quality
            consular services to Sierra Leonean nationals and foreign nationals, the facilitation of trade, investment,
            and development partnerships, and the strengthening of the bonds of friendship and cooperation between
            Sierra Leone and the United States of America.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* ── About the Embassy ──────────────────── */}
      <section style={{ padding: "4rem 0" }}>
        <div className="container-site">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "3rem",
            }}
          >
            <div>
              <div className="section-divider" />
              <h2 className="section-heading">About the Embassy</h2>
              <p style={{ color: "var(--color-text-mid)", lineHeight: 1.85, fontSize: "0.93rem", marginBottom: "1rem" }}>
                The Embassy of the Republic of Sierra Leone in Washington, D.C. is the principal diplomatic mission of
                Sierra Leone to the United States. Established on April 27, 1961, the Embassy serves as the official
                channel of communication between the governments of Sierra Leone and the United States, and between
                Sierra Leone and the nine other countries to which it is accredited in the Americas.
              </p>
              <p style={{ color: "var(--color-text-mid)", lineHeight: 1.85, fontSize: "0.93rem" }}>
                The Embassy provides a wide range of services to Sierra Leonean nationals residing in the region,
                including passport and travel document services, civil registration, notarial services, and emergency
                assistance. The Embassy also serves the interests of Sierra Leone through diplomatic engagement,
                trade and investment promotion, and cultural outreach.
              </p>
            </div>

            <div>
              <div className="section-divider" />
              <h2 className="section-heading">Countries of Accreditation</h2>
              <p style={{ color: "var(--color-text-mid)", lineHeight: 1.85, fontSize: "0.93rem", marginBottom: "1rem" }}>
                In addition to the United States, the Embassy of Sierra Leone in Washington, D.C. is accredited to the
                following nine countries:
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {["Canada", "Brazil", "Mexico", "Jamaica", "Trinidad & Tobago", "The Bahamas", "Barbados", "Guyana", "Suriname"].map(
                  (c) => (
                    <li
                      key={c}
                      style={{
                        display: "flex",
                        gap: "0.6rem",
                        alignItems: "center",
                        padding: "0.35rem 0",
                        borderBottom: "1px solid #f0f0f0",
                        fontSize: "0.88rem",
                        color: "var(--color-text-mid)",
                      }}
                    >
                      <span style={{ color: "var(--color-teal)", fontWeight: 700 }}>→</span>
                      {c}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Departments ────────────────────────── */}
      <section style={{ backgroundColor: "var(--color-cream)", padding: "4rem 0" }}>
        <div className="container-site">
          <div className="section-divider" />
          <h2 className="section-heading" style={{ marginBottom: "0.5rem" }}>
            Departments &amp; Extensions
          </h2>
          <p style={{ color: "var(--color-text-mid)", fontSize: "0.88rem", marginBottom: "1.75rem" }}>
            All calls to the Embassy should be made to <strong>+1 (202) 939-9261</strong>. Request the extension listed below.
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem", minWidth: "520px" }}>
              <thead>
                <tr style={{ backgroundColor: "var(--color-navy)" }}>
                  {["Department / Section", "Direct Line", "Extension", "Email"].map((h) => (
                    <th
                      key={h}
                      style={{
                        padding: "0.85rem 1rem",
                        textAlign: "left",
                        color: "white",
                        fontFamily: "var(--font-heading)",
                        fontWeight: 600,
                        fontSize: "0.78rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {departments.map((dept, i) => (
                  <tr key={dept.name} style={{ backgroundColor: i % 2 === 0 ? "white" : "var(--color-cream)" }}>
                    <td style={{ padding: "0.75rem 1rem", fontFamily: "var(--font-heading)", fontWeight: 600, color: "var(--color-navy)" }}>
                      {dept.name}
                    </td>
                    <td style={{ padding: "0.75rem 1rem", color: "var(--color-text-mid)", fontFamily: "var(--font-heading)", whiteSpace: "nowrap" }}>
                      {dept.phone || "—"}
                    </td>
                    <td style={{ padding: "0.75rem 1rem", color: "var(--color-text-mid)", fontFamily: "var(--font-heading)" }}>
                      {dept.extension}
                    </td>
                    <td style={{ padding: "0.75rem 1rem" }}>
                      <a href={`mailto:${dept.email}`} style={{ color: "var(--color-teal)", textDecoration: "none", fontSize: "0.85rem" }}>
                        {dept.email}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Embassy Holidays ───────────────────── */}
      <section style={{ padding: "4rem 0" }}>
        <div className="container-site">
          <div className="section-divider" />
          <h2 className="section-heading" style={{ marginBottom: "0.5rem" }}>
            Embassy Closure Days
          </h2>
          <p style={{ color: "var(--color-text-mid)", fontSize: "0.88rem", marginBottom: "1.75rem", lineHeight: 1.7 }}>
            The Embassy of Sierra Leone observes official Sierra Leonean public holidays as well as designated U.S.
            federal holidays. On these days, the Embassy is closed to the public. Consular services are not available
            on Embassy closure days.
          </p>
          <div style={{ overflowX: "auto", maxWidth: "680px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
              <thead>
                <tr style={{ backgroundColor: "var(--color-navy)" }}>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "left", color: "white", fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Date
                  </th>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "left", color: "white", fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Holiday
                  </th>
                </tr>
              </thead>
              <tbody>
                {embassyHolidays.map((h, i) => (
                  <tr key={h.name} style={{ backgroundColor: i % 2 === 0 ? "white" : "var(--color-cream)" }}>
                    <td style={{ padding: "0.6rem 1rem", color: "var(--color-teal-dark)", fontWeight: 600, fontFamily: "var(--font-heading)", fontSize: "0.82rem", whiteSpace: "nowrap" }}>
                      {h.date}
                    </td>
                    <td style={{ padding: "0.6rem 1rem", color: "var(--color-text-mid)" }}>
                      {h.name}
                      {h.name.includes("U.S.") && (
                        <span
                          style={{
                            marginLeft: "0.5rem",
                            backgroundColor: "#e3f2fd",
                            color: "#1565c0",
                            fontFamily: "var(--font-heading)",
                            fontWeight: 600,
                            fontSize: "0.62rem",
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                            padding: "0.12rem 0.45rem",
                            borderRadius: "2px",
                          }}
                        >
                          U.S.
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Former Ambassadors ─────────────────── */}
      <section style={{ backgroundColor: "var(--color-navy)", padding: "4.5rem 0" }}>
        <div className="container-site">
          <div className="section-divider" />
          <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.75rem", color: "white", marginBottom: "0.5rem" }}>
            Former Ambassadors
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.88rem", marginBottom: "2.5rem" }}>
            Sierra Leone has been represented in Washington, D.C. by distinguished diplomats since independence in 1961.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {formerAmbassadors.map((amb) => (
              <div key={amb.name} style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: "120px",
                    height: "140px",
                    borderRadius: "0.375rem",
                    overflow: "hidden",
                    margin: "0 auto 0.75rem",
                    position: "relative",
                    border: "2px solid rgba(61,176,163,0.4)",
                  }}
                >
                  <Image
                    src={amb.image}
                    alt={amb.name}
                    fill
                    sizes="100vw"
                    style={{ objectFit: "cover", objectPosition: "top center" }}
                  />
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "0.82rem",
                    color: "white",
                    lineHeight: 1.35,
                    marginBottom: "0.25rem",
                  }}
                >
                  {amb.name}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.75rem",
                    color: "var(--color-teal)",
                    fontWeight: 600,
                    marginBottom: amb.note ? "0.2rem" : 0,
                  }}
                >
                  {amb.period}
                </div>
                {amb.note && (
                  <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.5)", fontStyle: "italic" }}>
                    {amb.note}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Job Openings ──────────────────────── */}
      <section style={{ padding: "3.5rem 0" }}>
        <div className="container-site">
          <div className="section-divider" />
          <h2 className="section-heading" style={{ marginBottom: "1rem" }}>
            Job Openings
          </h2>
          <div
            style={{
              backgroundColor: "var(--color-cream)",
              border: "1px solid #e0e0e0",
              borderRadius: "0.5rem",
              padding: "2rem",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>📋</div>
            <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1rem", color: "var(--color-navy)", marginBottom: "0.5rem" }}>
              No Current Vacancies
            </h3>
            <p style={{ color: "var(--color-text-mid)", fontSize: "0.88rem", lineHeight: 1.7, maxWidth: "520px", margin: "0 auto 1.25rem" }}>
              There are no open positions at the Embassy at this time. When vacancies arise, they will be advertised on
              this page. Unsolicited applications are not accepted.
            </p>
            <p style={{ color: "var(--color-text-light)", fontSize: "0.82rem" }}>
              For general enquiries, please contact{" "}
              <a href="mailto:admin@embassyofsierraleone.net" style={{ color: "var(--color-teal)" }}>
                admin@embassyofsierraleone.net
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
