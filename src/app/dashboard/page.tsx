import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();
  if (!session) redirect("/auth/login");

  const name = session.user?.name ?? session.user?.email ?? "Client";

  const cards = [
    { label: "My Applications", icon: "ti-file-text", count: 0 },
    { label: "My Appointments", icon: "ti-calendar", count: 0 },
    { label: "My Documents", icon: "ti-folder", count: 0 },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f7f8fa",
        padding: "2.5rem 1rem",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ marginBottom: "2rem" }}>
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "1.75rem",
              color: "#1a2332",
              marginBottom: "0.4rem",
            }}
          >
            Welcome, {name}
          </h1>
          <p style={{ color: "#6b7280", fontSize: "0.95rem" }}>
            Embassy of Sierra Leone — Client Portal
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {cards.map((card) => (
            <div
              key={card.label}
              style={{
                background: "white",
                borderRadius: "0.625rem",
                padding: "1.5rem",
                boxShadow: "0 1px 6px rgba(0,0,0,0.07)",
                borderTop: "3px solid #3db0a3",
              }}
            >
              <i
                className={`ti ${card.icon}`}
                style={{ fontSize: "1.75rem", color: "#3db0a3", marginBottom: "0.75rem", display: "block" }}
              />
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: 700,
                  color: "#1a2332",
                  fontFamily: "var(--font-heading)",
                  lineHeight: 1,
                  marginBottom: "0.35rem",
                }}
              >
                {card.count}
              </div>
              <div style={{ color: "#6b7280", fontSize: "0.875rem" }}>
                {card.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
