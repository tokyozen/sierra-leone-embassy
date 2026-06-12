"use client";

import { useState } from "react";

const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];

type ETCFormData = {
  nameOfBearer: string;
  address: string;
  expectedDateOfTravel: string;
  purposeOfTravel: string;
  occupation: string;
  dobDay: string;
  dobMonth: string;
  dobYear: string;
  placeOfBirthTown: string;
  placeOfBirthCountry: string;
  height: string;
  nationalStatus: string;
  travelingTo: string;
  viaTransitingAt: string;
  telephoneNumber: string;
  passportNumber: string;
  passportDateOfIssue: string;
  passportDateOfExpiry: string;
  passportPlaceOfIssue: string;
  reasonsUnavailable: string;
  lossReported: string;
  lossReportedWhen: string;
  lossNotReportedWhy: string;
  acknowledged: boolean;
};

const blank: ETCFormData = {
  nameOfBearer: "", address: "", expectedDateOfTravel: "", purposeOfTravel: "",
  occupation: "", dobDay: "", dobMonth: "", dobYear: "", placeOfBirthTown: "",
  placeOfBirthCountry: "", height: "", nationalStatus: "", travelingTo: "",
  viaTransitingAt: "", telephoneNumber: "", passportNumber: "",
  passportDateOfIssue: "", passportDateOfExpiry: "", passportPlaceOfIssue: "",
  reasonsUnavailable: "", lossReported: "", lossReportedWhen: "",
  lossNotReportedWhy: "", acknowledged: false,
};

const lbl: React.CSSProperties = {
  display: "block",
  fontSize: "0.77rem",
  fontWeight: 600,
  color: "#374151",
  marginBottom: "0.3rem",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  fontFamily: "var(--font-heading)",
};

const sectionHead: React.CSSProperties = {
  backgroundColor: "var(--color-navy)",
  color: "white",
  fontFamily: "var(--font-heading)",
  fontWeight: 700,
  fontSize: "0.8rem",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  padding: "0.6rem 1rem",
  borderRadius: "0.25rem",
  marginBottom: "1.25rem",
};

const g2: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "1rem",
};

const g3: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "0.75rem",
};

function Field({
  label,
  required,
  sub,
  children,
}: {
  label: string;
  required?: boolean;
  sub?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label style={lbl}>
        {label}
        {required && <span style={{ color: "#e53e3e", marginLeft: "0.2rem" }}>*</span>}
      </label>
      {sub && <div style={{ fontSize: "0.72rem", color: "#6b7280", marginBottom: "0.3rem" }}>{sub}</div>}
      {children}
    </div>
  );
}

export default function ETCForm() {
  const [form, setForm] = useState<ETCFormData>(blank);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("ETC Application:", form);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (submitted) {
    return (
      <div
        style={{
          backgroundColor: "#f0faf8",
          border: "2px solid var(--color-teal)",
          borderRadius: "0.5rem",
          padding: "2.5rem 2rem",
          textAlign: "center",
          marginTop: "1rem",
        }}
      >
        <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>✅</div>
        <h3
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: "1.1rem",
            color: "var(--color-navy)",
            marginBottom: "0.75rem",
          }}
        >
          Application Submitted
        </h3>
        <p
          style={{
            color: "var(--color-text-mid)",
            lineHeight: 1.8,
            fontSize: "0.9rem",
            maxWidth: "540px",
            margin: "0 auto",
          }}
        >
          Your ETC application has been submitted. The Embassy will contact you within 3–5
          business days. Please ensure your prepaid self-addressed envelope is ready to mail.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "2rem", marginTop: "1.25rem" }}
    >
      {/* ── Personal Information ────────────────────── */}
      <section>
        <div style={sectionHead}>Personal Information</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Field label="Name of Bearer" required>
            <input
              className="form-input"
              name="nameOfBearer"
              value={form.nameOfBearer}
              onChange={handleChange}
              type="text"
              required
            />
          </Field>

          <Field label="Address" required>
            <textarea
              className="form-input"
              name="address"
              value={form.address}
              onChange={handleChange}
              required
              rows={3}
              style={{ resize: "vertical" }}
            />
          </Field>

          <div style={g2}>
            <Field label="Expected Date of Travel" required>
              <input
                className="form-input"
                name="expectedDateOfTravel"
                value={form.expectedDateOfTravel}
                onChange={handleChange}
                type="date"
                required
              />
            </Field>
            <Field label="Purpose of Travel" required>
              <input
                className="form-input"
                name="purposeOfTravel"
                value={form.purposeOfTravel}
                onChange={handleChange}
                type="text"
                required
              />
            </Field>
          </div>

          <Field label="Occupation" required>
            <input
              className="form-input"
              name="occupation"
              value={form.occupation}
              onChange={handleChange}
              type="text"
              required
            />
          </Field>

          {/* Date of Birth */}
          <div>
            <div style={lbl}>
              Date of Birth<span style={{ color: "#e53e3e", marginLeft: "0.2rem" }}>*</span>
            </div>
            <div style={g3}>
              <div>
                <div style={{ fontSize: "0.72rem", color: "#6b7280", marginBottom: "0.25rem" }}>Day</div>
                <input
                  className="form-input"
                  name="dobDay"
                  value={form.dobDay}
                  onChange={handleChange}
                  type="number"
                  min="1"
                  max="31"
                  placeholder="DD"
                  required
                />
              </div>
              <div>
                <div style={{ fontSize: "0.72rem", color: "#6b7280", marginBottom: "0.25rem" }}>Month</div>
                <select
                  className="form-input"
                  name="dobMonth"
                  value={form.dobMonth}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  {MONTHS.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>
              <div>
                <div style={{ fontSize: "0.72rem", color: "#6b7280", marginBottom: "0.25rem" }}>Year</div>
                <input
                  className="form-input"
                  name="dobYear"
                  value={form.dobYear}
                  onChange={handleChange}
                  type="number"
                  min="1900"
                  max={new Date().getFullYear()}
                  placeholder="YYYY"
                  required
                />
              </div>
            </div>
          </div>

          {/* Place of Birth */}
          <div>
            <div style={lbl}>
              Place of Birth<span style={{ color: "#e53e3e", marginLeft: "0.2rem" }}>*</span>
            </div>
            <div style={g2}>
              <div>
                <div style={{ fontSize: "0.72rem", color: "#6b7280", marginBottom: "0.25rem" }}>Town</div>
                <input
                  className="form-input"
                  name="placeOfBirthTown"
                  value={form.placeOfBirthTown}
                  onChange={handleChange}
                  type="text"
                  required
                />
              </div>
              <div>
                <div style={{ fontSize: "0.72rem", color: "#6b7280", marginBottom: "0.25rem" }}>Country</div>
                <input
                  className="form-input"
                  name="placeOfBirthCountry"
                  value={form.placeOfBirthCountry}
                  onChange={handleChange}
                  type="text"
                  required
                />
              </div>
            </div>
          </div>

          <div style={g2}>
            <Field label="Height">
              <input
                className="form-input"
                name="height"
                value={form.height}
                onChange={handleChange}
                type="text"
                placeholder='e.g. 5&apos;10"'
              />
            </Field>
            <Field label="National Status" required>
              <input
                className="form-input"
                name="nationalStatus"
                value={form.nationalStatus}
                onChange={handleChange}
                type="text"
                placeholder="e.g. Sierra Leonean"
                required
              />
            </Field>
          </div>

          <div style={g2}>
            <Field label="Traveling To" required>
              <input
                className="form-input"
                name="travelingTo"
                value={form.travelingTo}
                onChange={handleChange}
                type="text"
                required
              />
            </Field>
            <Field label="Via / Transiting At">
              <input
                className="form-input"
                name="viaTransitingAt"
                value={form.viaTransitingAt}
                onChange={handleChange}
                type="text"
              />
            </Field>
          </div>

          <Field label="Telephone Number" required>
            <input
              className="form-input"
              name="telephoneNumber"
              value={form.telephoneNumber}
              onChange={handleChange}
              type="tel"
              required
            />
          </Field>
        </div>
      </section>

      {/* ── Passport Particulars ────────────────────── */}
      <section>
        <div style={sectionHead}>Passport Particulars</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div style={g2}>
            <Field label="Passport Number">
              <input
                className="form-input"
                name="passportNumber"
                value={form.passportNumber}
                onChange={handleChange}
                type="text"
              />
            </Field>
            <Field label="Place of Issue">
              <input
                className="form-input"
                name="passportPlaceOfIssue"
                value={form.passportPlaceOfIssue}
                onChange={handleChange}
                type="text"
              />
            </Field>
          </div>

          <div style={g2}>
            <Field label="Date of Issue">
              <input
                className="form-input"
                name="passportDateOfIssue"
                value={form.passportDateOfIssue}
                onChange={handleChange}
                type="date"
              />
            </Field>
            <Field label="Date of Expiry">
              <input
                className="form-input"
                name="passportDateOfExpiry"
                value={form.passportDateOfExpiry}
                onChange={handleChange}
                type="date"
              />
            </Field>
          </div>

          <Field label="Reasons for Unavailability of Passport">
            <textarea
              className="form-input"
              name="reasonsUnavailable"
              value={form.reasonsUnavailable}
              onChange={handleChange}
              rows={3}
              style={{ resize: "vertical" }}
            />
          </Field>

          <div>
            <div style={lbl}>Has the loss been reported to Police / Embassy?</div>
            <div style={{ display: "flex", gap: "1.5rem", marginTop: "0.4rem" }}>
              {(["Yes", "No"] as const).map((opt) => (
                <label
                  key={opt}
                  style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer", fontSize: "0.9rem" }}
                >
                  <input
                    type="radio"
                    name="lossReported"
                    value={opt.toLowerCase()}
                    checked={form.lossReported === opt.toLowerCase()}
                    onChange={handleChange}
                    style={{ accentColor: "var(--color-teal)" }}
                  />
                  {opt}
                </label>
              ))}
            </div>
          </div>

          {form.lossReported === "yes" && (
            <Field label="If yes, when">
              <input
                className="form-input"
                name="lossReportedWhen"
                value={form.lossReportedWhen}
                onChange={handleChange}
                type="text"
              />
            </Field>
          )}

          {form.lossReported === "no" && (
            <Field label="If no, why not">
              <input
                className="form-input"
                name="lossNotReportedWhy"
                value={form.lossNotReportedWhy}
                onChange={handleChange}
                type="text"
              />
            </Field>
          )}
        </div>
      </section>

      {/* ── Document Upload ─────────────────────────── */}
      <section>
        <div style={sectionHead}>Document Upload</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Field label="Two Passport Size Photographs" sub="Upload two recent photos (white background)">
            <input type="file" accept="image/*" multiple style={{ fontSize: "0.88rem" }} />
          </Field>
          <Field
            label="Copy of Old Passport or Birth Certificate"
            sub="Accepted formats: PDF, JPG, PNG"
          >
            <input type="file" accept=".pdf,image/*" style={{ fontSize: "0.88rem" }} />
          </Field>
        </div>
      </section>

      {/* ── Payment Notice ──────────────────────────── */}
      <div
        style={{
          backgroundColor: "#fff8e1",
          border: "1px solid #ffe082",
          borderRadius: "0.375rem",
          padding: "1rem 1.25rem",
          fontSize: "0.875rem",
          color: "#6d4c00",
          lineHeight: 1.7,
        }}
      >
        <strong>💰 Payment Notice:</strong> Fee of US $100.00 Money Order made payable to{" "}
        <strong>Embassy of Sierra Leone</strong>. Cash payments are NOT accepted.
      </div>

      {/* ── Acknowledgement ─────────────────────────── */}
      <label
        style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", cursor: "pointer" }}
      >
        <input
          type="checkbox"
          name="acknowledged"
          checked={form.acknowledged}
          onChange={handleChange}
          required
          style={{ marginTop: "0.2rem", accentColor: "var(--color-teal)", flexShrink: 0 }}
        />
        <span style={{ fontSize: "0.87rem", color: "var(--color-text-mid)", lineHeight: 1.7 }}>
          I understand that it is my responsibility to check whether or not the ETC is accepted by
          both the country of transit and destination. Fees are <strong>NON-REFUNDABLE</strong>.{" "}
          <span style={{ color: "#e53e3e" }}>*</span>
        </span>
      </label>

      {/* ── Submit ──────────────────────────────────── */}
      <div>
        <button
          type="submit"
          className="btn-primary"
          style={{ fontSize: "0.95rem", padding: "0.85rem 2.5rem", cursor: "pointer", border: "none" }}
        >
          Submit ETC Application
        </button>
      </div>
    </form>
  );
}
