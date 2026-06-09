import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ServicesStrip from "@/components/ServicesStrip";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Official website of the Embassy of the Republic of Sierra Leone in Washington, D.C. — serving the United States, Canada, and eight other accredited countries.",
};

const latestNews = [
  {
    id: 0,
    title: "Sierra Leone's Ambassador Presents Letters of Credence to President Trump",
    date: "July 25, 2025",
    excerpt:
      "H.E. Ambassador Amara Sheikh Mohammed Sowa presented his Letter of Accreditation to President Donald J. Trump at the White House, highlighting the historic and enduring ties between Sierra Leone and the United States.",
    image: "/images/blog/Blog_pic1.jpg",
  },
  {
    id: 1,
    title: "President Bio Addresses the United Nations General Assembly",
    date: "September 22, 2023",
    excerpt:
      "President Julius Maada Bio delivered Sierra Leone's statement at the 78th session of the United Nations General Assembly in New York.",
    image: "/images/news/news-1.jpg",
  },
  {
    id: 2,
    title: "Embassy Hosts Independence Day National Reception",
    date: "April 27, 2023",
    excerpt:
      "The Embassy of Sierra Leone in Washington, D.C. hosted a gala reception marking the 62nd Independence Day of the Republic.",
    image: "/images/news/news-2.jpg",
  },
];


const accreditedCountries = [
  "United States of America",
  "Canada",
  "Brazil",
  "Mexico",
  "Jamaica",
  "Trinidad & Tobago",
  "The Bahamas",
  "Barbados",
  "Guyana",
  "Suriname",
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          minHeight: "520px",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Image
          src="/images/heroes/embassy-hero.jpg"
          alt="Embassy of the Republic of Sierra Leone, Washington D.C."
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(105deg, rgba(69,69,69,0.72) 40%, rgba(69,69,69,0.30) 100%)",
          }}
        />
        <div
          className="container-site"
          style={{ position: "relative", zIndex: 1, padding: "5rem 1rem" }}
        >
          <div style={{ maxWidth: "600px" }}>
            <div
              style={{
                display: "inline-block",
                backgroundColor: "var(--color-teal)",
                color: "white",
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "0.3rem 0.85rem",
                borderRadius: "2px",
                marginBottom: "1.25rem",
              }}
            >
              Official Embassy Website
            </div>
            <h1
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 4vw, 2.75rem)",
                color: "white",
                lineHeight: 1.2,
                marginBottom: "1.25rem",
              }}
            >
              Embassy of the Republic of
              <br />
              <span style={{ color: "var(--color-teal)" }}>Sierra Leone</span>
            </h1>
            <p
              style={{
                color: "#e0e0e0",
                fontSize: "1rem",
                lineHeight: 1.8,
                marginBottom: "2rem",
                maxWidth: "500px",
              }}
            >
              Promoting Sierra Leone–U.S. relations and serving Sierra Leonean
              nationals across ten accredited countries from our embassy in
              Washington, D.C.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/consular-services" className="btn-primary">
                Consular Services
              </Link>
              <Link
                href="/the-embassy"
                style={{
                  display: "inline-block",
                  border: "2px solid rgba(255,255,255,0.75)",
                  color: "white",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  padding: "0.75rem 1.5rem",
                  borderRadius: "0.25rem",
                  fontSize: "0.875rem",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                About the Embassy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Strip ────────────────────────────── */}
      <ServicesStrip />

      {/* ── Ambassador's Welcome ──────────────────────── */}
      <section style={{ backgroundColor: "var(--color-cream)", padding: "4.5rem 0" }}>
        <div className="container-site">
          <div
            style={{
              display: "flex",
              gap: "3rem",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {/* Photo */}
            <div
              style={{
                flex: "0 0 auto",
                width: "clamp(200px, 28%, 270px)",
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
                style={{ objectFit: "cover", objectPosition: "top center" }}
              />
            </div>

            {/* Message */}
            <div style={{ flex: "1 1 300px" }}>
              <div className="section-divider" />
              <h2 className="section-heading">Ambassador&apos;s Welcome</h2>
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1rem",
                  fontStyle: "italic",
                  color: "var(--color-teal)",
                  marginBottom: "1.25rem",
                  fontWeight: 500,
                }}
              >
                H.E. Ambassador Amara Sheikh Mohammed Sowa
                <span
                  style={{
                    display: "block",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "0.82rem",
                    color: "var(--color-text-light)",
                    marginTop: "0.2rem",
                  }}
                >
                  Ambassador Extraordinary and Plenipotentiary
                </span>
              </div>
              <p style={{ color: "var(--color-text-mid)", lineHeight: 1.85, marginBottom: "1rem", fontSize: "0.95rem" }}>
                On behalf of the Government and people of the Republic of Sierra Leone, I warmly welcome you to the official website of the Embassy of Sierra Leone in Washington, D.C. Our Embassy serves as the primary diplomatic mission of Sierra Leone to the United States and is accredited to nine other countries in the Americas.
              </p>
              <p style={{ color: "var(--color-text-mid)", lineHeight: 1.85, marginBottom: "2rem", fontSize: "0.95rem" }}>
                We are committed to strengthening the bonds of friendship and cooperation between our two nations, promoting trade and investment, and providing the highest quality consular services to Sierra Leoneans residing across our region of accreditation.
              </p>
              <Link href="/the-embassy" className="btn-primary">
                Read Full Message
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Latest News ───────────────────────────────── */}
      <section style={{ padding: "4.5rem 0" }}>
        <div className="container-site">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "1rem",
              marginBottom: "2.5rem",
            }}
          >
            <div>
              <div className="section-divider" />
              <h2 className="section-heading">Latest News &amp; Updates</h2>
            </div>
            <Link href="/news-blog" className="btn-outline" style={{ whiteSpace: "nowrap" }}>
              View All News
            </Link>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.75rem",
            }}
          >
            {latestNews.map((item) => (
              <Link
                key={item.id}
                href="/news-blog"
                className="card"
                style={{ textDecoration: "none", display: "block" }}
              >
                <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: "1.25rem 1.25rem 1.5rem" }}>
                  <div
                    style={{
                      fontSize: "0.72rem",
                      fontFamily: "var(--font-heading)",
                      color: "var(--color-teal)",
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.date}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "var(--color-navy)",
                      lineHeight: 1.4,
                      marginBottom: "0.65rem",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.84rem",
                      color: "var(--color-text-mid)",
                      lineHeight: 1.7,
                      marginBottom: "1rem",
                    }}
                  >
                    {item.excerpt}
                  </p>
                  <span
                    style={{
                      fontSize: "0.77rem",
                      fontFamily: "var(--font-heading)",
                      fontWeight: 600,
                      color: "var(--color-teal)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sierra Leone at a Glance ──────────────────── */}
      <section style={{ backgroundColor: "#454545", padding: "4rem 0", position: "relative", overflow: "hidden" }}>
        {/* Background image */}
        <Image
          src="/images/Services-strip/visa-services.jpg"
          alt=""
          fill
          style={{ objectFit: "cover" }}
          aria-hidden="true"
        />
        {/* Dark overlay */}
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.65)" }} />
        <div className="container-site" style={{ position: "relative", zIndex: 1 }}>
          {/* Flag stripes + heading */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              marginBottom: "0.75rem",
            }}
          >
            {["#1eb853", "white", "#1eb853"].map((c, i) => (
              <div
                key={i}
                style={{
                  width: "36px",
                  height: "4px",
                  borderRadius: "2px",
                  backgroundColor: c,
                }}
              />
            ))}
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: "1.75rem",
                color: "white",
                margin: "0 0.5rem",
              }}
            >
              Sierra Leone at a Glance
            </h2>
            {["#1eb853", "white", "#1eb853"].map((c, i) => (
              <div
                key={i}
                style={{
                  width: "36px",
                  height: "4px",
                  borderRadius: "2px",
                  backgroundColor: c,
                }}
              />
            ))}
          </div>

          <p
            style={{
              textAlign: "center",
              fontSize: "0.85rem",
              color: "#aaa",
              marginBottom: "2.5rem",
            }}
          >
            A sovereign nation on the west coast of Africa
          </p>

          {/* Stat cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.25rem",
              marginBottom: "2.5rem",
            }}
          >
            {[
              { icon: "ti-flag", value: "April 27, 1961", label: "Independence" },
              { icon: "ti-building-arch", value: "Freetown", label: "Capital City" },
              { icon: "ti-users", value: "8.2 Million", label: "Population" },
              { icon: "ti-language", value: "English", label: "Official Language" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "0.5px solid rgba(255,255,255,0.1)",
                  borderRadius: "10px",
                  padding: "1.75rem 1.25rem",
                  textAlign: "center",
                }}
              >
                <i
                  className={`ti ${stat.icon}`}
                  aria-hidden="true"
                  style={{
                    fontSize: "28px",
                    color: "#3db0a3",
                    display: "block",
                    marginBottom: "0.85rem",
                  }}
                />
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "1.15rem",
                    color: "white",
                    marginBottom: "0.4rem",
                    lineHeight: 1.2,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    color: "#888",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ textAlign: "center" }}>
            <Link href="/about-us-in-sierra-leone" className="btn-primary">
              Learn About Sierra Leone →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Presidential Travel Advisory ─────────────── */}
      <section style={{ backgroundColor: "var(--color-cream)", padding: "4.5rem 0", overflow: "hidden" }}>
        <div className="container-site">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.4fr",
              gap: "0",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 8px 40px rgba(0,0,0,0.13)",
              minHeight: "420px",
            }}
          >
            {/* Left — President photo */}
            <div style={{ position: "relative", minHeight: "380px" }}>
              <Image
                src="/images/presidents/presidentmaadabio.jpg"
                alt="H.E. Rtd. Brigadier Dr. Julius Maada Bio — President of the Republic of Sierra Leone"
                fill
                style={{ objectFit: "cover", objectPosition: "top center" }}
              />
              {/* Gradient overlay at bottom of photo */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(69,69,69,0.85) 0%, rgba(69,69,69,0.2) 50%, transparent 100%)",
                }}
              />
              {/* Name plate */}
              <div
                style={{
                  position: "absolute",
                  bottom: "1.5rem",
                  left: "1.5rem",
                  right: "1.5rem",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    backgroundColor: "var(--color-teal)",
                    color: "white",
                    fontSize: "0.65rem",
                    fontFamily: "var(--font-heading)",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "3px",
                    marginBottom: "0.5rem",
                  }}
                >
                  Presidential Statement
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    color: "white",
                    lineHeight: 1.3,
                  }}
                >
                  H.E. Rtd. Brig. Dr. Julius Maada Bio
                </div>
                <div
                  style={{
                    fontSize: "0.72rem",
                    color: "rgba(255,255,255,0.7)",
                    marginTop: "0.2rem",
                  }}
                >
                  President of the Republic of Sierra Leone
                </div>
              </div>
            </div>

            {/* Right — Advisory content */}
            <div
              style={{
                backgroundColor: "var(--color-navy)",
                padding: "3rem 2.5rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {/* Tag */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.65rem",
                  marginBottom: "1.25rem",
                }}
              >
                <i
                  className="ti ti-alert-triangle"
                  aria-hidden="true"
                  style={{ fontSize: "18px", color: "#f0a500" }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "0.7rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#f0a500",
                  }}
                >
                  Travel Advisory
                </span>
              </div>

              {/* Divider */}
              <div
                style={{
                  width: "3rem",
                  height: "3px",
                  backgroundColor: "var(--color-teal)",
                  marginBottom: "1.25rem",
                  borderRadius: "2px",
                }}
              />

              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  color: "white",
                  lineHeight: 1.4,
                  marginBottom: "1.25rem",
                }}
              >
                Resumption of Commercial Flight Operations — Freetown International Airport
              </h3>

              <p
                style={{
                  fontSize: "0.87rem",
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: 1.85,
                  marginBottom: "2rem",
                }}
              >
                Following the declaration made by His Excellency Brig. (Rtd) Julius Maada Bio on the resumption of commercial flight operations on the 22nd July 2020, the Government of Sierra Leone through the Ministry of Transport and Aviation — in collaboration with the Ministry of Health and Sanitation, Sierra Leone Civil Aviation Authority, Sierra Leone Airports Authority, and the National COVID-19 Emergency Response Centre (NACOVERC) — publishes the following safety and public health guidelines which shall be strictly adhered to by all arriving and departing passengers at/from the Freetown International Airport.
              </p>

              {/* Info strip */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.75rem",
                  marginBottom: "2rem",
                }}
              >
                {[
                  { icon: "ti-calendar", label: "Effective Date", value: "July 22, 2020" },
                  { icon: "ti-plane-arrival", label: "Airport", value: "Freetown Intl." },
                  { icon: "ti-building", label: "Issued By", value: "Govt. of Sierra Leone" },
                  { icon: "ti-shield-check", label: "Authority", value: "NACOVERC" },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      backgroundColor: "rgba(255,255,255,0.05)",
                      border: "0.5px solid rgba(255,255,255,0.08)",
                      borderRadius: "6px",
                      padding: "0.75rem 1rem",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.6rem",
                    }}
                  >
                    <i
                      className={`ti ${item.icon}`}
                      aria-hidden="true"
                      style={{ fontSize: "15px", color: "var(--color-teal)", marginTop: "1px", flexShrink: 0 }}
                    />
                    <div>
                      <div style={{ fontSize: "0.65rem", color: "#777", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.15rem" }}>
                        {item.label}
                      </div>
                      <div style={{ fontSize: "0.8rem", color: "white", fontWeight: 600 }}>
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/consular-services"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  backgroundColor: "var(--color-teal)",
                  color: "white",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  fontSize: "0.78rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  padding: "0.7rem 1.5rem",
                  borderRadius: "5px",
                  textDecoration: "none",
                  width: "fit-content",
                }}
              >
                <i className="ti ti-external-link" aria-hidden="true" style={{ fontSize: "14px" }} />
                View Full Advisory
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Countries We Serve ────────────────────────── */}
      <section style={{ backgroundColor: "var(--color-teal-light)", padding: "3.5rem 0" }}>
        <div className="container-site">
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <div className="section-divider" style={{ margin: "0 auto 0.5rem" }} />
            <h2 className="section-heading">Countries We Are Accredited To</h2>
            <p
              style={{
                color: "var(--color-text-mid)",
                fontSize: "0.9rem",
                maxWidth: "560px",
                margin: "0.5rem auto 0",
                lineHeight: 1.7,
              }}
            >
              The Embassy of Sierra Leone in Washington, D.C. is accredited to the
              following ten countries in the Americas.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "0.65rem",
            }}
          >
            {accreditedCountries.map((country) => (
              <div
                key={country}
                style={{
                  backgroundColor: "white",
                  border: "1px solid rgba(61,176,163,0.3)",
                  borderRadius: "2rem",
                  padding: "0.4rem 1.1rem",
                  fontSize: "0.85rem",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 500,
                  color: "var(--color-navy)",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                }}
              >
                {country}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Emergency Contact Bar ─────────────────────── */}
      <section
        style={{
          backgroundColor: "var(--color-teal-dark)",
          padding: "2.5rem 0",
        }}
      >
        <div className="container-site" style={{ textAlign: "center" }}>
          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "1.15rem",
              color: "white",
              marginBottom: "0.5rem",
            }}
          >
            Need Emergency Consular Assistance?
          </h3>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.88rem", marginBottom: "1.25rem" }}>
            For urgent matters outside business hours, please contact our embassy directly.
          </p>
          <div
            style={{
              display: "flex",
              gap: "2rem",
              justifyContent: "center",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <a
              href="tel:+12029399261"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: "1.05rem",
                color: "white",
                textDecoration: "none",
              }}
            >
              📞 +1 (202) 939-9261
            </a>
            <a
              href="mailto:info@embassyofsierraleone.net"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: "0.95rem",
                color: "white",
                textDecoration: "none",
              }}
            >
              ✉️ info@embassyofsierraleone.net
            </a>
            <Link
              href="/contact-us"
              style={{
                display: "inline-block",
                backgroundColor: "white",
                color: "var(--color-teal-dark)",
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                padding: "0.6rem 1.25rem",
                borderRadius: "0.25rem",
                textDecoration: "none",
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
