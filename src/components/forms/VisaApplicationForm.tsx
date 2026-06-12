"use client";

import { useState } from "react";

const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];

type VisaFormData = {
  lastName: string;
  firstName: string;
  middleName: string;
  sex: string;
  maritalStatus: string;
  phoneNumber: string;
  emailAddress: string;
  dobDay: string;
  dobMonth: string;
  dobYear: string;
  occupation: string;
  placeOfBirthTown: string;
  placeOfBirthCountry: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  passportNumber: string;
  passportDateOfIssue: string;
  passportDateOfExpiry: string;
  countryOfIssue: string;
  passportType: string;
  nationality: string;
  visaType: string;
  purposeOfVisit: string;
  proposedDateOfArrival: string;
  durationOfStay: string;
  refereeName: string;
  refereePhone: string;
  proposedAddressInSL: string;
  // Additional requirements
  hasForm: boolean;
  hasPassport: boolean;
  hasPhoto: boolean;
  hasYellowFever: boolean;
  hasPrepaidEnvelope: boolean;
  // Minors
  isMinor: boolean;
  hasBirthCertificate: boolean;
  hasConsentLetter: boolean;
  hasParentID: boolean;
  // Business
  hasBusinessLetter: boolean;
  // Expedited
  requiresExpedited: boolean;
  // Acknowledgement
  acknowledged: boolean;
};

const blank: VisaFormData = {
  lastName: "", firstName: "", middleName: "", sex: "", maritalStatus: "",
  phoneNumber: "", emailAddress: "", dobDay: "", dobMonth: "", dobYear: "",
  occupation: "", placeOfBirthTown: "", placeOfBirthCountry: "",
  street: "", city: "", state: "", zipCode: "",
  passportNumber: "", passportDateOfIssue: "", passportDateOfExpiry: "",
  countryOfIssue: "", passportType: "", nationality: "",
  visaType: "", purposeOfVisit: "", proposedDateOfArrival: "", durationOfStay: "",
  refereeName: "", refereePhone: "", proposedAddressInSL: "",
  hasForm: false, hasPassport: false, hasPhoto: false,
  hasYellowFever: false, hasPrepaidEnvelope: false,
  isMinor: false, hasBirthCertificate: false, hasConsentLetter: false, hasParentID: false,
  hasBusinessLetter: false, requiresExpedited: false, acknowledged: false,
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
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label style={lbl}>
        {label}
        {required && <span style={{ color: "#e53e3e", marginLeft: "0.2rem" }}>*</span>}
      </label>
      {children}
    </div>
  );
}

function CheckRow({
  name,
  checked,
  onChange,
  children,
}: {
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children: React.ReactNode;
}) {
  return (
    <label
      style={{
        display: "flex",
        gap: "0.65rem",
        alignItems: "flex-start",
        cursor: "pointer",
        fontSize: "0.87rem",
        color: "var(--color-text-mid)",
        lineHeight: 1.6,
      }}
    >
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        style={{ marginTop: "0.15rem", accentColor: "var(--color-teal)", flexShrink: 0 }}
      />
      {children}
    </label>
  );
}

export default function VisaApplicationForm() {
  const [form, setForm] = useState<VisaFormData>(blank);
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
    console.log("Visa Application:", form);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const isBusinessVisa =
    form.visaType.toLowerCase().includes("business") ||
    form.visaType.toLowerCase().includes("official") ||
    form.visaType.toLowerCase().includes("diplomatic");

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
          Your visa application has been submitted. Processing time is 4–5 business days. The Embassy will
          contact you at the email address provided. Please ensure your prepaid self-addressed envelope is
          mailed to the Embassy.
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
          <div style={g2}>
            <Field label="Last Name" required>
              <input className="form-input" name="lastName" value={form.lastName} onChange={handleChange} type="text" required />
            </Field>
            <Field label="First Name" required>
              <input className="form-input" name="firstName" value={form.firstName} onChange={handleChange} type="text" required />
            </Field>
          </div>

          <Field label="Middle Name">
            <input className="form-input" name="middleName" value={form.middleName} onChange={handleChange} type="text" />
          </Field>

          <div style={g2}>
            <Field label="Sex" required>
              <select className="form-input" name="sex" value={form.sex} onChange={handleChange} required>
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </Field>
            <Field label="Marital Status" required>
              <select className="form-input" name="maritalStatus" value={form.maritalStatus} onChange={handleChange} required>
                <option value="">Select</option>
                <option>Single</option>
                <option>Married</option>
                <option>Divorced</option>
                <option>Widowed</option>
              </select>
            </Field>
          </div>

          <div style={g2}>
            <Field label="Phone Number" required>
              <input className="form-input" name="phoneNumber" value={form.phoneNumber} onChange={handleChange} type="tel" required />
            </Field>
            <Field label="Email Address" required>
              <input className="form-input" name="emailAddress" value={form.emailAddress} onChange={handleChange} type="email" required />
            </Field>
          </div>

          {/* Date of Birth */}
          <div>
            <div style={lbl}>
              Date of Birth<span style={{ color: "#e53e3e", marginLeft: "0.2rem" }}>*</span>
            </div>
            <div style={g3}>
              <div>
                <div style={{ fontSize: "0.72rem", color: "#6b7280", marginBottom: "0.25rem" }}>Day</div>
                <input className="form-input" name="dobDay" value={form.dobDay} onChange={handleChange} type="number" min="1" max="31" placeholder="DD" required />
              </div>
              <div>
                <div style={{ fontSize: "0.72rem", color: "#6b7280", marginBottom: "0.25rem" }}>Month</div>
                <select className="form-input" name="dobMonth" value={form.dobMonth} onChange={handleChange} required>
                  <option value="">Select</option>
                  {MONTHS.map((m) => <option key={m} value={m}>{m}</option>)}
                </select>
              </div>
              <div>
                <div style={{ fontSize: "0.72rem", color: "#6b7280", marginBottom: "0.25rem" }}>Year</div>
                <input className="form-input" name="dobYear" value={form.dobYear} onChange={handleChange} type="number" min="1900" max={new Date().getFullYear()} placeholder="YYYY" required />
              </div>
            </div>
          </div>

          <Field label="Occupation" required>
            <input className="form-input" name="occupation" value={form.occupation} onChange={handleChange} type="text" required />
          </Field>

          {/* Place of Birth */}
          <div>
            <div style={lbl}>
              Place of Birth<span style={{ color: "#e53e3e", marginLeft: "0.2rem" }}>*</span>
            </div>
            <div style={g2}>
              <div>
                <div style={{ fontSize: "0.72rem", color: "#6b7280", marginBottom: "0.25rem" }}>Town</div>
                <input className="form-input" name="placeOfBirthTown" value={form.placeOfBirthTown} onChange={handleChange} type="text" required />
              </div>
              <div>
                <div style={{ fontSize: "0.72rem", color: "#6b7280", marginBottom: "0.25rem" }}>Country</div>
                <input className="form-input" name="placeOfBirthCountry" value={form.placeOfBirthCountry} onChange={handleChange} type="text" required />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Home Address ────────────────────────────── */}
      <section>
        <div style={sectionHead}>Home Address</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Field label="Street" required>
            <input className="form-input" name="street" value={form.street} onChange={handleChange} type="text" required />
          </Field>
          <div style={g3}>
            <Field label="City" required>
              <input className="form-input" name="city" value={form.city} onChange={handleChange} type="text" required />
            </Field>
            <Field label="State" required>
              <input className="form-input" name="state" value={form.state} onChange={handleChange} type="text" required />
            </Field>
            <Field label="ZIP Code" required>
              <input className="form-input" name="zipCode" value={form.zipCode} onChange={handleChange} type="text" required />
            </Field>
          </div>
        </div>
      </section>

      {/* ── Passport Particulars ────────────────────── */}
      <section>
        <div style={sectionHead}>Passport Particulars</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div style={g2}>
            <Field label="Passport Number" required>
              <input className="form-input" name="passportNumber" value={form.passportNumber} onChange={handleChange} type="text" required />
            </Field>
            <Field label="Passport Type" required>
              <select className="form-input" name="passportType" value={form.passportType} onChange={handleChange} required>
                <option value="">Select</option>
                <option>Regular</option>
                <option>Official</option>
                <option>Diplomatic</option>
                <option>ECOWAS</option>
              </select>
            </Field>
          </div>
          <div style={g2}>
            <Field label="Date of Issue" required>
              <input className="form-input" name="passportDateOfIssue" value={form.passportDateOfIssue} onChange={handleChange} type="date" required />
            </Field>
            <Field label="Date of Expiry" required>
              <input className="form-input" name="passportDateOfExpiry" value={form.passportDateOfExpiry} onChange={handleChange} type="date" required />
            </Field>
          </div>
          <div style={g2}>
            <Field label="Country of Issue" required>
              <input className="form-input" name="countryOfIssue" value={form.countryOfIssue} onChange={handleChange} type="text" required />
            </Field>
            <Field label="Nationality" required>
              <input className="form-input" name="nationality" value={form.nationality} onChange={handleChange} type="text" required />
            </Field>
          </div>
        </div>
      </section>

      {/* ── Visa Details ────────────────────────────── */}
      <section>
        <div style={sectionHead}>Visa Details</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Field label="Visa Type" required>
            <select className="form-input" name="visaType" value={form.visaType} onChange={handleChange} required>
              <option value="">Select visa type</option>
              <option value="tourist-single">Tourist / Single Entry — 6 months</option>
              <option value="tourist-multiple">Tourist / Multiple Entry — 1 year</option>
              <option value="us-passport-multiple">US Passport Holders — 3-year Multiple Entry</option>
              <option value="official-diplomatic">Official / Diplomatic — GRATIS</option>
              <option value="ecowas">ECOWAS — GRATIS</option>
            </select>
          </Field>
          <Field label="Purpose of Visit" required>
            <textarea
              className="form-input"
              name="purposeOfVisit"
              value={form.purposeOfVisit}
              onChange={handleChange}
              required
              rows={3}
              style={{ resize: "vertical" }}
            />
          </Field>
          <div style={g2}>
            <Field label="Proposed Date of Arrival" required>
              <input className="form-input" name="proposedDateOfArrival" value={form.proposedDateOfArrival} onChange={handleChange} type="date" required />
            </Field>
            <Field label="Duration of Stay" required>
              <input className="form-input" name="durationOfStay" value={form.durationOfStay} onChange={handleChange} type="text" placeholder="e.g. 2 weeks" required />
            </Field>
          </div>
        </div>
      </section>

      {/* ── Sierra Leone Contact ────────────────────── */}
      <section>
        <div style={sectionHead}>Sierra Leone Contact</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div style={g2}>
            <Field label="Name of Referee in Sierra Leone" required>
              <input className="form-input" name="refereeName" value={form.refereeName} onChange={handleChange} type="text" required />
            </Field>
            <Field label="Referee Phone Number" required>
              <input className="form-input" name="refereePhone" value={form.refereePhone} onChange={handleChange} type="tel" required />
            </Field>
          </div>
          <Field label="Proposed Address in Sierra Leone" required>
            <textarea
              className="form-input"
              name="proposedAddressInSL"
              value={form.proposedAddressInSL}
              onChange={handleChange}
              required
              rows={3}
              style={{ resize: "vertical" }}
            />
          </Field>
        </div>
      </section>

      {/* ── Additional Requirements ─────────────────── */}
      <section>
        <div style={sectionHead}>Additional Requirements — Confirm Enclosed</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
          <CheckRow name="hasForm" checked={form.hasForm} onChange={handleChange}>
            Completed visa application form
          </CheckRow>
          <CheckRow name="hasPassport" checked={form.hasPassport} onChange={handleChange}>
            Valid Passport with blank pages (valid for at least 6 months)
          </CheckRow>
          <CheckRow name="hasPhoto" checked={form.hasPhoto} onChange={handleChange}>
            One passport size photograph
          </CheckRow>
          <CheckRow name="hasYellowFever" checked={form.hasYellowFever} onChange={handleChange}>
            Evidence of Yellow Fever Vaccine
          </CheckRow>
          <CheckRow name="hasPrepaidEnvelope" checked={form.hasPrepaidEnvelope} onChange={handleChange}>
            Prepaid self-addressed envelope
          </CheckRow>
        </div>
      </section>

      {/* ── For Minors ──────────────────────────────── */}
      <section>
        <div style={sectionHead}>For Minors (Under 18)</div>
        <label
          style={{ display: "flex", gap: "0.65rem", alignItems: "center", cursor: "pointer", fontSize: "0.9rem", fontWeight: 600, color: "var(--color-navy)", marginBottom: "1rem" }}
        >
          <input
            type="checkbox"
            name="isMinor"
            checked={form.isMinor}
            onChange={handleChange}
            style={{ accentColor: "var(--color-teal)" }}
          />
          Applicant is under 18 years of age
        </label>
        {form.isMinor && (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem", paddingLeft: "1.25rem", borderLeft: "3px solid var(--color-teal)" }}>
            <CheckRow name="hasBirthCertificate" checked={form.hasBirthCertificate} onChange={handleChange}>
              Copy of child&apos;s birth certificate
            </CheckRow>
            <CheckRow name="hasConsentLetter" checked={form.hasConsentLetter} onChange={handleChange}>
              Letter of Consent signed by both parents (notarized)
            </CheckRow>
            <CheckRow name="hasParentID" checked={form.hasParentID} onChange={handleChange}>
              Copies of Government ID of both parents
            </CheckRow>
          </div>
        )}
      </section>

      {/* ── Business Visa ───────────────────────────── */}
      {isBusinessVisa && (
        <section>
          <div style={sectionHead}>For Business / Official Visa</div>
          <div style={{ paddingLeft: "0.25rem" }}>
            <CheckRow name="hasBusinessLetter" checked={form.hasBusinessLetter} onChange={handleChange}>
              Letter of support from company on official letterhead
            </CheckRow>
          </div>
        </section>
      )}

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
        <strong>💰 Payment Notice:</strong> Visa fees are payable by Money Order or Cashier&apos;s Check made
        payable to <strong>Embassy of Sierra Leone</strong>. Cash and personal checks are NOT accepted. All
        fees are <strong>NON-REFUNDABLE</strong>.
      </div>

      {/* ── Expedited Service ───────────────────────── */}
      <label
        style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", cursor: "pointer" }}
      >
        <input
          type="checkbox"
          name="requiresExpedited"
          checked={form.requiresExpedited}
          onChange={handleChange}
          style={{ marginTop: "0.2rem", accentColor: "var(--color-teal)", flexShrink: 0 }}
        />
        <span style={{ fontSize: "0.87rem", color: "var(--color-text-mid)", lineHeight: 1.6 }}>
          I require <strong>expedited service</strong> (+US$50.00 additional fee) — processing in 2–3 business days
        </span>
      </label>

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
          I certify that the information provided is true and correct.{" "}
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
          Submit Visa Application
        </button>
      </div>
    </form>
  );
}
