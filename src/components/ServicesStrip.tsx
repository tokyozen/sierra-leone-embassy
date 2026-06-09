"use client";

import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Consular Services",
    description:
      "Passports, emergency travel documents, notarial services, and civil registration for Sierra Leonean nationals abroad.",
    href: "/consular-services",
    icon: "ti-id-badge",
    bgImage: "/images/Services-strip/consular-services.jpg",
  },
  {
    title: "Visa Services",
    description:
      "Apply for a visa to visit Sierra Leone — tourist, business, transit, and diplomatic entry categories.",
    href: "/visa-services",
    icon: "ti-plane",
    bgImage: "/images/Services-strip/visa-services.jpg",
  },
  {
    title: "Trade & Investment",
    description:
      "Explore opportunities in mining, agriculture, tourism, and energy in one of West Africa's growing economies.",
    href: "/trade-and-investment",
    icon: "ti-chart-line",
    bgImage: "/images/Services-strip/Tradeandinvestment.jpg",
  },
  {
    title: "About Sierra Leone",
    description:
      "Discover the history, culture, geography, and government of the Republic of Sierra Leone.",
    href: "/about-us-in-sierra-leone",
    icon: "ti-world",
    bgImage: "/images/Services-strip/about-sierraleone.jpg",
  },
];

export default function ServicesStrip() {
  return (
    <section style={{ backgroundColor: "#2d9088", padding: "3rem 0" }}>
      <div className="container-site">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {services.map((svc) => (
            <Link
              key={svc.href}
              href={svc.href}
              style={{
                display: "block",
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "2rem 1.5rem 1.75rem",
                textDecoration: "none",
                textAlign: "center",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
                boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "scale(1.04)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.08)";
              }}
            >
              {/* Background image with overlay */}
              <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
                <Image
                  src={svc.bgImage}
                  alt=""
                  fill
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                  aria-hidden="true"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(255,255,255,0.65)",
                  }}
                />
              </div>

              {/* Card content */}
              <div style={{ position: "relative", zIndex: 1 }}>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#e8f7f6",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.25rem",
                  }}
                >
                  <i
                    className={`ti ${svc.icon}`}
                    aria-hidden="true"
                    style={{ fontSize: "26px", color: "#2d9088" }}
                  />
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "var(--color-navy)",
                    marginBottom: "0.65rem",
                  }}
                >
                  {svc.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.82rem",
                    color: "var(--color-text-mid)",
                    lineHeight: 1.7,
                    marginBottom: "1.25rem",
                  }}
                >
                  {svc.description}
                </p>

                <span
                  style={{
                    display: "inline-block",
                    backgroundColor: "var(--color-teal)",
                    color: "white",
                    fontFamily: "var(--font-heading)",
                    fontWeight: 600,
                    fontSize: "0.72rem",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    padding: "0.4rem 1rem",
                    borderRadius: "4px",
                  }}
                >
                  Learn More
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
