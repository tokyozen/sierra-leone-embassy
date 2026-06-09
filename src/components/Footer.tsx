"use client";

import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/" },
  { label: "The Embassy", href: "/the-embassy" },
  { label: "News Blog", href: "/news-blog" },
  { label: "Consular Services", href: "/consular-services" },
  { label: "Visa Services", href: "/visa-services" },
  { label: "Trade & Investment", href: "/trade-and-investment" },
  { label: "About Sierra Leone", href: "/about-us-in-sierra-leone" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Press Releases", href: "/press-releases" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "var(--color-navy)", color: "white", marginTop: "auto" }}>
      <div className="container-site" style={{ padding: "3rem 1rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2.5rem", marginBottom: "2.5rem" }}>

          {/* Column 1 — About */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <Image src="/images/logo/logo.png" alt="Embassy logo" width={40} height={40} style={{ objectFit: "contain" }} />
              <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.95rem", color: "var(--color-teal)" }}>
                Embassy of Sierra Leone
              </span>
            </div>
            <p style={{ fontSize: "0.82rem", color: "#ccc", lineHeight: 1.7, marginBottom: "1rem" }}>
              Relations between Sierra Leone and the United States began in the 19th century. 
              The Embassy was established in Washington, D.C. on April 27, 1961.
            </p>
            <div style={{ fontSize: "0.82rem", color: "#ccc", lineHeight: 2 }}>
              <div>🕘 Office Hours: Mon–Fri 9:00AM – 5:00PM</div>
              <div>📋 Consular Hours: 10:00AM – 3:00PM</div>
            </div>
          </div>

          {/* Column 2 — Contact */}
          <div>
            <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1rem", color: "var(--color-teal)", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Contact
            </h3>
            <div style={{ fontSize: "0.82rem", color: "#ccc", lineHeight: 2.2 }}>
              <div>📍 1701 19th Street, NW</div>
              <div style={{ paddingLeft: "1.4rem" }}>Washington, D.C. 20009-1605</div>
              <div>
                📞{" "}
                <a href="tel:+12029399261" style={{ color: "#ccc", textDecoration: "none" }}>
                  +1 (202) 939-9261 / 9262 / 9263
                </a>
              </div>
              <div>
                📠 Fax: (202) 483-1793
              </div>
              <div>
                ✉️{" "}
                <a href="mailto:info@embassyofsierraleone.net" style={{ color: "var(--color-teal)", textDecoration: "none" }}>
                  info@embassyofsierraleone.net
                </a>
              </div>
            </div>
          </div>

          {/* Column 3 — Navigation */}
          <div>
            <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1rem", color: "var(--color-teal)", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Quick Links
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {navItems.map((item) => (
                <li key={item.href} style={{ marginBottom: "0.4rem" }}>
                  <Link
                    href={item.href}
                    style={{ color: "#ccc", textDecoration: "none", fontSize: "0.82rem", transition: "color 0.2s" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--color-teal)")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#ccc")}
                  >
                    → {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1.5rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "0.5rem" }}>
          <p style={{ fontSize: "0.75rem", color: "#888", margin: 0 }}>
            Copyright ©{year} Embassy of the Republic of Sierra Leone in the United States. All Rights Reserved.
          </p>
          <p style={{ fontSize: "0.75rem", color: "#888", margin: 0 }}>
            Designed by{" "}
            <a href="http://www.kallmania.com/" style={{ color: "var(--color-teal)", textDecoration: "none" }}>
              Kallmania
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}