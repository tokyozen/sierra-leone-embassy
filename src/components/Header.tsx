"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

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

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{ backgroundColor: "var(--color-navy)" }}>
      {/* Top info bar */}
      <div
        style={{
          backgroundColor: "var(--color-teal)",
          color: "white",
          fontSize: "0.8rem",
          padding: "0.4rem 0",
        }}
      >
        <div className="container-site" style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
          <span>🕘 Office Hours: Mon–Fri 9:00AM – 5:00PM</span>
          <span>📋 Consular Hours: 10:00AM – 3:00PM</span>
          <span>📞 +1 (202) 939-9261</span>
        </div>
      </div>

      {/* Main header */}
      <div className="container-site" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 1rem" }}>
        {/* Logo + Site Name */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
          <Image
            src="/images/logo/logo.png"
            alt="Embassy of Sierra Leone"
            width={52}
            height={52}
            style={{ objectFit: "contain" }}
          />
          <div>
            <div style={{ color: "white", fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.95rem", lineHeight: 1.2 }}>
              Embassy of the Republic of
            </div>
            <div style={{ color: "var(--color-teal)", fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1rem", lineHeight: 1.2 }}>
              Sierra Leone
            </div>
            <div style={{ color: "#aaa", fontSize: "0.7rem", letterSpacing: "0.08em" }}>
              WASHINGTON, D.C.
            </div>
          </div>
        </Link>

        {/* Hamburger (mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: "none", background: "none", border: "none", color: "white", fontSize: "1.5rem", cursor: "pointer" }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Navigation */}
      <nav
        style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        className={menuOpen ? "nav-open" : ""}
      >
        <div className="container-site">
          <ul style={{ display: "flex", flexWrap: "wrap", listStyle: "none", margin: 0, padding: 0, gap: 0 }}>
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      display: "block",
                      padding: "0.85rem 0.9rem",
                      color: isActive ? "var(--color-teal)" : "white",
                      fontFamily: "var(--font-heading)",
                      fontWeight: isActive ? 600 : 400,
                      fontSize: "0.82rem",
                      textDecoration: "none",
                      letterSpacing: "0.03em",
                      borderBottom: isActive ? "2px solid var(--color-teal)" : "2px solid transparent",
                      transition: "color 0.2s, border-color 0.2s",
                      whiteSpace: "nowrap",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        (e.target as HTMLElement).style.color = "var(--color-teal)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        (e.target as HTMLElement).style.color = "white";
                      }
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .mobile-menu-btn { display: block !important; }
          nav ul { flex-direction: column; display: none; }
          nav.nav-open ul { display: flex; }
        }
      `}</style>
    </header>
  );
}