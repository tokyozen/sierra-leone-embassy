import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Trade & Investment",
  description:
    "Explore trade and investment opportunities in the Republic of Sierra Leone — key sectors, the ministry mandate, investment climate, and resources.",
};

const sectors = [
  {
    icon: "⛏️",
    title: "Mining & Natural Resources",
    body: "Sierra Leone possesses some of the world's richest mineral deposits, including diamonds, rutile, ilmenite, bauxite, iron ore, and gold. The sector is regulated by the National Minerals Agency (NMA) and offers significant opportunities for exploration and production partnerships.",
  },
  {
    icon: "🌾",
    title: "Agriculture & Agribusiness",
    body: "With over 5.4 million hectares of arable land, Sierra Leone's agricultural sector is ripe for commercial investment. Key opportunities exist in rice production, cocoa, coffee, palm oil, cassava, and aquaculture. The Smallholder Commercialisation Programme actively supports agribusiness development.",
  },
  {
    icon: "🌊",
    title: "Fisheries & Aquaculture",
    body: "Sierra Leone's Exclusive Economic Zone spans 200 nautical miles, offering rich fishing grounds. The sector remains largely underdeveloped and presents substantial opportunities for industrial fishing, fish processing plants, and aquaculture operations.",
  },
  {
    icon: "🏨",
    title: "Tourism & Hospitality",
    body: "Sierra Leone boasts pristine beaches, diverse wildlife, tropical rainforests, and a rich cultural heritage. The government's Destination Sierra Leone initiative is actively promoting hotel development, eco-tourism ventures, and hospitality infrastructure investment.",
  },
  {
    icon: "⚡",
    title: "Energy",
    body: "Sierra Leone has significant potential in hydroelectric, solar, and other renewable energy sources. The country is actively seeking private sector investment to expand electricity access across the nation, with both on-grid and off-grid opportunities available.",
  },
  {
    icon: "🏗️",
    title: "Infrastructure & Real Estate",
    body: "Significant demand exists for road networks, port development, commercial real estate, affordable housing, and telecommunications infrastructure. The government welcomes public–private partnerships (PPPs) across all infrastructure sub-sectors.",
  },
  {
    icon: "🏦",
    title: "Financial Services & Fintech",
    body: "Sierra Leone's growing banking sector and increasing mobile money adoption present exciting opportunities for financial services innovation, microfinance institutions, and fintech solutions targeting underserved populations.",
  },
  {
    icon: "🏭",
    title: "Manufacturing",
    body: "The government is committed to developing Sierra Leone's manufacturing base through special economic zones and industrial parks. Priority areas include agro-processing, cement production, pharmaceuticals, and building materials.",
  },
];

const highlights = [
  "100% foreign ownership permitted in most sectors",
  "No restrictions on profit repatriation",
  "Five-year corporate tax holiday for qualifying investments",
  "Duty-free importation of capital goods and raw materials for approved projects",
  "AGOA eligibility — preferential access to the U.S. market for qualifying goods",
  "Member of ECOWAS — free trade area of over 400 million consumers",
  "Competitive labour costs with a young, English-speaking workforce",
  "Ongoing infrastructure improvements including road networks and port expansion",
  "Stable democratic government with a strong commitment to investor protection",
  "Sierra Leone Investment and Export Promotion Agency (SLIEPA) — one-stop shop for investors",
  "Bilateral Investment Treaties (BITs) with key partner countries",
  "Growing fintech and mobile money ecosystem supporting business operations",
];

export default function TradeAndInvestmentPage() {
  return (
    <>
      <PageHero
        title="Trade & Investment"
        subtitle="Discover investment opportunities and explore Sierra Leone's growing economy."
        image="/images/heroes/trade-hero.jpg"
      />

      {/* ── Ministry Mandate ──────────────────────── */}
      <section style={{ backgroundColor: "var(--color-teal-light)", padding: "3rem 0" }}>
        <div className="container-site">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2.5rem",
            }}
          >
            <div>
              <div className="section-divider" />
              <h2 className="section-heading">Ministry Mandate</h2>
              <p style={{ color: "var(--color-text-mid)", lineHeight: 1.85, fontSize: "0.93rem" }}>
                The Ministry of Trade and Industry (MTI) is the government body responsible for formulating and implementing
                policies that promote domestic and international trade, industrial development, and private sector growth
                in Sierra Leone. The MTI provides the regulatory framework that governs commerce and investment, working
                in close collaboration with the Sierra Leone Investment and Export Promotion Agency (SLIEPA) to attract,
                facilitate, and retain foreign direct investment.
              </p>
              <p style={{ color: "var(--color-text-mid)", lineHeight: 1.85, fontSize: "0.93rem", marginTop: "0.85rem" }}>
                The Ministry is also responsible for trade negotiations, bilateral and multilateral trade agreements, and
                the administration of trade-related laws and regulations, including those governing intellectual property,
                consumer protection, and competition.
              </p>
            </div>

            <div>
              <div className="section-divider" />
              <h2 className="section-heading">Our Vision</h2>
              <blockquote
                style={{
                  borderLeft: "4px solid var(--color-teal)",
                  paddingLeft: "1.25rem",
                  marginLeft: 0,
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.05rem",
                  fontStyle: "italic",
                  color: "var(--color-navy)",
                  lineHeight: 1.7,
                  marginBottom: "1rem",
                }}
              >
                &ldquo;To make Sierra Leone a competitive destination for trade and investment in West Africa, driving
                sustainable economic growth, job creation, and prosperity for all Sierra Leoneans.&rdquo;
              </blockquote>
              <p style={{ color: "var(--color-text-mid)", lineHeight: 1.85, fontSize: "0.9rem" }}>
                The Embassy of Sierra Leone in Washington, D.C. actively supports this vision by connecting U.S. and
                international investors with opportunities in Sierra Leone and facilitating business delegations, trade
                missions, and investment forums between the two countries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Invest ────────────────────────────── */}
      <section style={{ backgroundColor: "var(--color-navy)", padding: "3.5rem 0" }}>
        <div className="container-site">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <div className="section-divider" style={{ margin: "0 auto 0.5rem" }} />
            <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.75rem", color: "white" }}>
              Why Invest in Sierra Leone?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem", maxWidth: "600px", margin: "0.5rem auto 0" }}>
              Sierra Leone offers a compelling investment climate with a supportive government and abundant natural resources.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "0.85rem",
            }}
          >
            {highlights.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  alignItems: "flex-start",
                  backgroundColor: "rgba(255,255,255,0.06)",
                  borderRadius: "0.375rem",
                  padding: "0.85rem 1rem",
                  fontSize: "0.86rem",
                  color: "rgba(255,255,255,0.85)",
                  lineHeight: 1.6,
                }}
              >
                <span style={{ flex: "0 0 auto", color: "var(--color-teal)", fontWeight: 700, fontSize: "1rem" }}>✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key Sectors ───────────────────────────── */}
      <section style={{ padding: "4.5rem 0" }}>
        <div className="container-site">
          <div style={{ marginBottom: "2.5rem" }}>
            <div className="section-divider" />
            <h2 className="section-heading">Key Investment Sectors</h2>
            <p style={{ color: "var(--color-text-mid)", fontSize: "0.9rem", maxWidth: "680px", lineHeight: 1.7 }}>
              Sierra Leone offers investment opportunities across a broad spectrum of sectors. The following represent
              areas of particular priority and potential for foreign investors.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {sectors.map((sector) => (
              <div
                key={sector.title}
                className="card"
                style={{ padding: "1.5rem" }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem", lineHeight: 1 }}>
                  {sector.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "var(--color-navy)",
                    marginBottom: "0.6rem",
                  }}
                >
                  {sector.title}
                </h3>
                <p style={{ color: "var(--color-text-mid)", fontSize: "0.85rem", lineHeight: 1.75, margin: 0 }}>
                  {sector.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SLIEPA & Resources ────────────────────── */}
      <section style={{ backgroundColor: "var(--color-cream)", padding: "3.5rem 0" }}>
        <div className="container-site">
          <div className="section-divider" />
          <h2 className="section-heading" style={{ marginBottom: "1.5rem" }}>
            Investment Resources &amp; Contact
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
            }}
          >
            <div>
              <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.95rem", color: "var(--color-navy)", marginBottom: "0.5rem" }}>
                SLIEPA — One-Stop Investment Shop
              </h3>
              <p style={{ color: "var(--color-text-mid)", fontSize: "0.87rem", lineHeight: 1.75, marginBottom: "0.85rem" }}>
                The Sierra Leone Investment and Export Promotion Agency (SLIEPA) is the government agency dedicated to
                facilitating investment in Sierra Leone. SLIEPA provides investor support services, assists with business
                registration, and acts as a liaison between investors and government ministries.
              </p>
              <p style={{ color: "var(--color-text-mid)", fontSize: "0.87rem" }}>
                Website:{" "}
                <a href="https://www.sliepa.org" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-teal)" }}>
                  www.sliepa.org
                </a>
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.95rem", color: "var(--color-navy)", marginBottom: "0.5rem" }}>
                Contact the Embassy&apos;s Trade Section
              </h3>
              <p style={{ color: "var(--color-text-mid)", fontSize: "0.87rem", lineHeight: 1.75, marginBottom: "0.85rem" }}>
                The Embassy&apos;s Trade and Investment Section can assist U.S.-based investors, businesses, and individuals
                seeking to engage with Sierra Leone. We can provide introductions, facilitate business delegations, and
                connect you with the appropriate Sierra Leonean government ministries and agencies.
              </p>
              <p style={{ color: "var(--color-text-mid)", fontSize: "0.87rem" }}>
                Email:{" "}
                <a href="mailto:trade@embassyofsierraleone.net" style={{ color: "var(--color-teal)" }}>
                  trade@embassyofsierraleone.net
                </a>
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.95rem", color: "var(--color-navy)", marginBottom: "0.5rem" }}>
                U.S.–Sierra Leone Business Council
              </h3>
              <p style={{ color: "var(--color-text-mid)", fontSize: "0.87rem", lineHeight: 1.75 }}>
                The Embassy supports the U.S.–Sierra Leone Business Council, an organisation promoting bilateral trade
                and investment between the two countries. The Council hosts networking events, investment forums, and
                trade missions. Contact the Embassy for more information on how to engage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────── */}
      <section style={{ backgroundColor: "var(--color-teal)", padding: "2.75rem 0" }}>
        <div className="container-site" style={{ textAlign: "center" }}>
          <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.1rem", color: "white", marginBottom: "0.5rem" }}>
            Ready to Explore Investment in Sierra Leone?
          </h3>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.88rem", marginBottom: "1.25rem" }}>
            Contact our Trade &amp; Investment Section to discuss your interests or to schedule a consultation.
          </p>
          <Link href="/contact-us" className="btn-outline" style={{ borderColor: "white", color: "white" }}>
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
