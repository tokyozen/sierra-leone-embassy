import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About Sierra Leone",
  description:
    "Discover the Republic of Sierra Leone — country facts, history, government, official public holidays, and more.",
};

const facts = [
  { label: "Official Name", value: "Republic of Sierra Leone" },
  { label: "Capital City", value: "Freetown" },
  { label: "Independence", value: "April 27, 1961 (from the United Kingdom)" },
  { label: "Area", value: "71,740 km² (27,699 sq mi)" },
  { label: "Population", value: "Approximately 8.6 million (2023 estimate)" },
  { label: "Official Language", value: "English" },
  { label: "National Languages", value: "Krio, Temne, Mende, Limba, and others" },
  { label: "Currency", value: "Sierra Leonean Leone (SLE)" },
  { label: "Government", value: "Constitutional Republic" },
  { label: "President", value: "H.E. Julius Maada Bio" },
  { label: "Vice President", value: "H.E. Mohamed Juldeh Jalloh" },
  { label: "Parliament", value: "Unicameral — Parliament of Sierra Leone (146 seats)" },
  { label: "Highest Court", value: "Supreme Court of Sierra Leone" },
  { label: "National Anthem", value: "High We Exalt Thee, Realm of the Free" },
  { label: "Religion", value: "Islam (~77%), Christianity (~22%), Indigenous beliefs" },
  { label: "Time Zone", value: "GMT / UTC+0 (no daylight saving time)" },
  { label: "Internet Domain", value: ".sl" },
  { label: "Country Code", value: "+232" },
  { label: "Region", value: "West Africa — borders Guinea (north/east) and Liberia (southeast)" },
  { label: "Coastline", value: "402 km along the Atlantic Ocean" },
];

const holidays = [
  { date: "January 1", name: "New Year's Day" },
  { date: "February 18", name: "Armed Forces Day" },
  { date: "March 8", name: "International Women's Day" },
  { date: "Variable (March/April)", name: "Good Friday" },
  { date: "Variable (March/April)", name: "Easter Monday" },
  { date: "April 27", name: "Independence Day — National Day" },
  { date: "May 1", name: "Labour Day (Workers' Day)" },
  { date: "Variable (Islamic calendar)", name: "Eid ul-Fitr (End of Ramadan)" },
  { date: "Variable (Islamic calendar)", name: "Eid ul-Adha (Feast of the Sacrifice)" },
  { date: "Variable (Islamic calendar)", name: "Maulid al-Nabi (Prophet Muhammad's Birthday)" },
  { date: "December 25", name: "Christmas Day" },
  { date: "December 26", name: "Boxing Day" },
];

const branches = [
  {
    branch: "Executive",
    head: "President Julius Maada Bio",
    description:
      "The President of Sierra Leone is both the head of state and head of government. Elected by popular vote for a maximum of two five-year terms, the President appoints the cabinet and leads the executive branch of government.",
  },
  {
    branch: "Legislature",
    head: "Parliament of Sierra Leone",
    description:
      "The unicameral Parliament of Sierra Leone consists of 146 members elected by proportional representation for five-year terms. Parliament enacts legislation, approves the national budget, and provides oversight of the executive branch.",
  },
  {
    branch: "Judiciary",
    head: "Chief Justice of Sierra Leone",
    description:
      "The judicial branch is independent of the executive and legislative branches. The Supreme Court is the highest court in the land, followed by the Court of Appeal, the High Court of Justice, and subordinate courts throughout the country.",
  },
];

export default function AboutSierraLeonePage() {
  return (
    <>
      <PageHero
        title="About Sierra Leone"
        subtitle="The Republic of Sierra Leone — a West African nation of remarkable beauty, rich culture, and growing opportunity."
        image="/images/heroes/about-hero.jpg"
      />

      {/* ── Introduction ────────────────────────── */}
      <section style={{ padding: "4rem 0" }}>
        <div className="container-site">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "3rem",
              alignItems: "start",
            }}
          >
            <div>
              <div className="section-divider" />
              <h2 className="section-heading">Overview</h2>
              <p style={{ color: "var(--color-text-mid)", lineHeight: 1.85, fontSize: "0.93rem", marginBottom: "1rem" }}>
                The Republic of Sierra Leone is a sovereign state located on the southwestern coast of West Africa. Bordered
                by Guinea to the north and northeast, Liberia to the southeast, and the Atlantic Ocean to the southwest,
                Sierra Leone covers an area of 71,740 square kilometres and is home to approximately 8.6 million people.
              </p>
              <p style={{ color: "var(--color-text-mid)", lineHeight: 1.85, fontSize: "0.93rem", marginBottom: "1rem" }}>
                Sierra Leone gained independence from the United Kingdom on April 27, 1961 — a date celebrated as
                Independence Day, the country&apos;s most important national holiday. The country became a republic in 1971
                and a multiparty democracy was restored in 1991 following years of one-party rule.
              </p>
              <p style={{ color: "var(--color-text-mid)", lineHeight: 1.85, fontSize: "0.93rem" }}>
                The capital city, Freetown, was founded in 1792 by liberated African slaves from Britain, Nova Scotia,
                and Jamaica — a history that gives the city its name and its unique cultural character. Today, Freetown is
                a vibrant city and the political, economic, and cultural heart of Sierra Leone.
              </p>
            </div>

            <div>
              <div className="section-divider" />
              <h2 className="section-heading">Geography &amp; Climate</h2>
              <p style={{ color: "var(--color-text-mid)", lineHeight: 1.85, fontSize: "0.93rem", marginBottom: "1rem" }}>
                Sierra Leone&apos;s terrain varies from coastal mangrove swamps in the west to tropical rainforests in the
                interior, rising to the Loma Mountains in the northeast — home to Bintimani Peak (1,948 m), the highest
                point in West Africa west of Mount Cameroon.
              </p>
              <p style={{ color: "var(--color-text-mid)", lineHeight: 1.85, fontSize: "0.93rem", marginBottom: "1rem" }}>
                The climate is tropical, with a wet season from May to November and a dry season from December to April.
                The Harmattan wind from the Sahara is common during the dry season, particularly in January and February.
              </p>
              <p style={{ color: "var(--color-text-mid)", lineHeight: 1.85, fontSize: "0.93rem" }}>
                Sierra Leone&apos;s coastline stretches 402 kilometres along the Atlantic Ocean, encompassing some of
                West Africa&apos;s finest beaches, including Lumley Beach, River Number Two, and the Banana Islands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Country Facts ────────────────────────── */}
      <section style={{ backgroundColor: "var(--color-cream)", padding: "4rem 0" }}>
        <div className="container-site">
          <div className="section-divider" />
          <h2 className="section-heading" style={{ marginBottom: "1.5rem" }}>
            Country Facts at a Glance
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem", minWidth: "480px" }}>
              <tbody>
                {facts.map((row, i) => (
                  <tr key={row.label} style={{ backgroundColor: i % 2 === 0 ? "white" : "var(--color-cream)" }}>
                    <td
                      style={{
                        padding: "0.7rem 1rem",
                        fontFamily: "var(--font-heading)",
                        fontWeight: 700,
                        color: "var(--color-navy)",
                        fontSize: "0.8rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                        whiteSpace: "nowrap",
                        width: "220px",
                        borderRight: "3px solid var(--color-teal)",
                      }}
                    >
                      {row.label}
                    </td>
                    <td style={{ padding: "0.7rem 1rem 0.7rem 1.25rem", color: "var(--color-text-mid)", lineHeight: 1.5 }}>
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Government Branches ──────────────────── */}
      <section style={{ padding: "4rem 0" }}>
        <div className="container-site">
          <div className="section-divider" />
          <h2 className="section-heading" style={{ marginBottom: "2rem" }}>
            Government of Sierra Leone
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.75rem",
            }}
          >
            {branches.map((b) => (
              <div
                key={b.branch}
                style={{
                  borderTop: "4px solid var(--color-teal)",
                  backgroundColor: "var(--color-cream)",
                  borderRadius: "0 0 0.5rem 0.5rem",
                  padding: "1.5rem",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "0.78rem",
                    color: "var(--color-teal-dark)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: "0.25rem",
                  }}
                >
                  {b.branch}
                </h3>
                <h4
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "var(--color-navy)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {b.head}
                </h4>
                <p style={{ color: "var(--color-text-mid)", fontSize: "0.86rem", lineHeight: 1.75, margin: 0 }}>
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── History ──────────────────────────────── */}
      <section style={{ backgroundColor: "var(--color-navy)", padding: "4rem 0" }}>
        <div className="container-site">
          <div className="section-divider" />
          <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.75rem", color: "white", marginBottom: "1.75rem" }}>
            A Brief History
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
              color: "rgba(255,255,255,0.8)",
              fontSize: "0.9rem",
              lineHeight: 1.85,
            }}
          >
            <p>
              Sierra Leone&apos;s coast was known to Portuguese explorers as early as 1462, when Pedro de Sintra charted its
              mountains. The region became an important source for the slave trade over the following centuries, with
              thousands of Africans transported across the Atlantic under brutal conditions.
            </p>
            <p>
              The Province of Freedom was established in 1787 by British abolitionists as a settlement for freed slaves
              and poor Black people from Britain. In 1792, the Sierra Leone Company established the Colony of Freetown,
              which was transferred to the British Crown in 1808. The interior became a Protectorate in 1896.
            </p>
            <p>
              Sierra Leone achieved independence on April 27, 1961, under Prime Minister Sir Milton Margai. The country
              became a republic in 1971. A devastating civil war from 1991 to 2002 caused widespread destruction and loss
              of life. Since the restoration of peace, Sierra Leone has made significant strides in rebuilding its
              institutions and economy.
            </p>
          </div>
        </div>
      </section>

      {/* ── Public Holidays ──────────────────────── */}
      <section style={{ padding: "4rem 0" }}>
        <div className="container-site">
          <div className="section-divider" />
          <h2 className="section-heading" style={{ marginBottom: "1.5rem" }}>
            Official Public Holidays
          </h2>
          <p style={{ color: "var(--color-text-mid)", fontSize: "0.88rem", marginBottom: "1.75rem", lineHeight: 1.7 }}>
            The following are the official public holidays of the Republic of Sierra Leone. The Embassy observes these
            holidays in addition to selected U.S. federal holidays.
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem", maxWidth: "700px" }}>
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
                {holidays.map((h, i) => (
                  <tr key={h.name} style={{ backgroundColor: i % 2 === 0 ? "white" : "var(--color-cream)" }}>
                    <td style={{ padding: "0.65rem 1rem", color: "var(--color-teal-dark)", fontWeight: 600, fontFamily: "var(--font-heading)", fontSize: "0.85rem", whiteSpace: "nowrap" }}>
                      {h.date}
                    </td>
                    <td style={{ padding: "0.65rem 1rem", color: "var(--color-text-mid)" }}>
                      {h.name}
                      {h.name === "Independence Day — National Day" && (
                        <span
                          style={{
                            marginLeft: "0.5rem",
                            backgroundColor: "var(--color-teal)",
                            color: "white",
                            fontFamily: "var(--font-heading)",
                            fontWeight: 600,
                            fontSize: "0.65rem",
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                            padding: "0.15rem 0.5rem",
                            borderRadius: "2px",
                          }}
                        >
                          National Day
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

      {/* ── CTA ───────────────────────────────────── */}
      <section style={{ backgroundColor: "var(--color-teal)", padding: "2.75rem 0" }}>
        <div className="container-site" style={{ textAlign: "center" }}>
          <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.1rem", color: "white", marginBottom: "0.5rem" }}>
            Interested in Visiting or Investing in Sierra Leone?
          </h3>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.88rem", marginBottom: "1.25rem" }}>
            Learn about visa requirements or explore trade and investment opportunities.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/visa-services" className="btn-outline" style={{ borderColor: "white", color: "white" }}>
              Visa Services
            </Link>
            <Link href="/trade-and-investment" className="btn-outline" style={{ borderColor: "white", color: "white" }}>
              Trade &amp; Investment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
