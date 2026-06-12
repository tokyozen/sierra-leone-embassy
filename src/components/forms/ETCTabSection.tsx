"use client";

import { useState } from "react";
import ETCForm from "./ETCForm";

type Tab = "online" | "pdf";

const TABS: { id: Tab; label: string }[] = [
  { id: "online", label: "📱  Apply Online" },
  { id: "pdf",    label: "📄  Download PDF" },
];

export default function ETCTabSection() {
  const [active, setActive] = useState<Tab>("online");

  return (
    <div style={{ marginTop: "1.5rem" }}>
      {/* Tab buttons */}
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
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

      {/* Tab content */}
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
          <ETCForm />
        </div>
      )}

      {active === "pdf" && (
        <div style={{ marginTop: "1.5rem" }}>
          <a
            href="/documents/ETC_Form.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
          >
            📄 Download ETC Application Form (PDF)
          </a>
          <p
            style={{
              marginTop: "1rem",
              fontSize: "0.87rem",
              color: "var(--color-text-mid)",
              lineHeight: 1.7,
            }}
          >
            Print, complete, and mail to the Embassy with required documents and fees.
          </p>
        </div>
      )}
    </div>
  );
}
