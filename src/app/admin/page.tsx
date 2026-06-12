import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function AdminDashboardPage() {
  const session = await auth();
  if (!session) redirect("/auth/login");

  const role = (session.user as any)?.role;
  const adminRoles = ["SUPER_ADMIN", "ADMIN", "CONSULAR_OFFICER", "EDITOR"];
  if (!adminRoles.includes(role)) redirect("/");

  const stats = [
    { label: "Total Applications", icon: "ti-file-description", value: 0, color: "#3db0a3" },
    { label: "Pending Review", icon: "ti-clock", value: 0, color: "#f59e0b" },
    { label: "News Posts", icon: "ti-news", value: 0, color: "#1a2332" },
    { label: "Press Releases", icon: "ti-speakerphone", value: 0, color: "#6366f1" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f7f8fa",
        padding: "2.5rem 1rem",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
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
            Admin Dashboard
          </h1>
          <p style={{ color: "#6b7280", fontSize: "0.95rem" }}>
            Embassy of Sierra Leone — Staff Portal
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              style={{
                background: "white",
                borderRadius: "0.625rem",
                padding: "1.5rem",
                boxShadow: "0 1px 6px rgba(0,0,0,0.07)",
                borderTop: `3px solid ${stat.color}`,
              }}
            >
              <i
                className={`ti ${stat.icon}`}
                style={{ fontSize: "1.75rem", color: stat.color, marginBottom: "0.75rem", display: "block" }}
              />
              <div
                style={{
                  fontSize: "2.25rem",
                  fontWeight: 700,
                  color: "#1a2332",
                  fontFamily: "var(--font-heading)",
                  lineHeight: 1,
                  marginBottom: "0.35rem",
                }}
              >
                {stat.value}
              </div>
              <div style={{ color: "#6b7280", fontSize: "0.875rem" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
