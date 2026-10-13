"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { site, waHref } from "@/lib/site";
import {
  clinicToday,
  validateAppointment,
  appointmentMessage,
} from "@/lib/appointment.mjs";
const emailConfig = {
  service: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  template: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  key: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
};
export default function AppointmentForm() {
  const form = useRef<HTMLFormElement>(null);
  const summary = useRef<HTMLDivElement>(null);
  const result = useRef<HTMLDivElement>(null);
  const lastSent = useRef(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [prepared, setPrepared] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  function values() {
    const data = new FormData(form.current!);
    return {
      name: String(data.get("name") || ""),
      phone: String(data.get("phone") || ""),
      date: String(data.get("date") || ""),
      time: String(data.get("time") || ""),
      consent: data.get("consent") === "on",
      company: String(data.get("company") || ""),
    };
  }
  function validate() {
    const value = values();
    if (value.company) return null;
    const next = validateAppointment(value, clinicToday());
    setErrors(next);
    if (Object.keys(next).length) {
      requestAnimationFrame(() => summary.current?.focus());
      return null;
    }
    return value;
  }
  function prepare(event: React.FormEvent) {
    event.preventDefault();
    const value = validate();
    if (value) {
      const draft = appointmentMessage(value);
      setMessage(draft);
      setPrepared(waHref(draft));
      setStatus("Your request is ready. Nothing has been sent.");
      requestAnimationFrame(() => result.current?.focus());
    }
  }
  async function email() {
    const value = validate();
    if (!value || sending || Date.now() - lastSent.current < 30000) return;
    setSending(true);
    lastSent.current = Date.now();
    try {
      const { default: emailjs } = await import("@emailjs/browser");
      await emailjs.send(
        emailConfig.service!,
        emailConfig.template!,
        {
          user_name: value.name.trim(),
          user_phone: value.phone.trim(),
          date: value.date,
          time: value.time,
          message:
            "Appointment request. Please contact the patient to confirm availability.",
        },
        emailConfig.key!,
      );
      setStatus(
        "Your request was sent. The appointment is not booked until the clinic confirms.",
      );
    } catch {
      setStatus(
        "Email could not be sent. Please prepare a WhatsApp request or call the clinic.",
      );
    } finally {
      setSending(false);
    }
  }
  const fields = [
    {
      name: "name",
      label: "Full name",
      type: "text",
      autoComplete: "name",
      maxLength: 80,
    },
    {
      name: "phone",
      label: "Phone / WhatsApp",
      type: "tel",
      autoComplete: "tel",
      maxLength: 25,
    },
    {
      name: "date",
      label: "Preferred date",
      type: "date",
      autoComplete: "off",
      maxLength: 10,
    },
  ];
  return (
    <>
      <div
        role="status"
        aria-live="polite"
        className={status ? "form-help" : ""}
      >
        {status}
      </div>
      {prepared && (
        <div className="booking-result" ref={result} tabIndex={-1}>
          <h3>Review, then send on WhatsApp.</h3>
          <p>
            Open WhatsApp to review your name, phone and preferred time, then
            press Send. The clinic will reply to confirm availability. Opening
            WhatsApp shares these details with WhatsApp.
          </p>
          <p className="whitespace-pre-line rounded-lg bg-surface p-4 text-sm">
            {message}
          </p>
          <a href={prepared} target="_blank" rel="noopener noreferrer">
            Open WhatsApp with my request ↗
          </a>
          <p>
            If WhatsApp does not open, call{" "}
            <a href={`tel:${site.contact.phoneDial}`}>{site.contact.phone}</a>.
          </p>
          <button
            type="button"
            onClick={() => {
              setPrepared("");
              setStatus("");
              requestAnimationFrame(() =>
                form.current
                  ?.querySelector<HTMLInputElement>("#booking-name")
                  ?.focus(),
              );
            }}
          >
            Edit booking details
          </button>
        </div>
      )}
      <form ref={form} onSubmit={prepare} noValidate hidden={Boolean(prepared)}>
        {Object.keys(errors).length > 0 && (
          <div
            ref={summary}
            className="form-summary"
            role="alert"
            tabIndex={-1}
          >
            <p className="font-semibold mb-2">Please check these details:</p>
            <ul>
              {Object.entries(errors).map(([key, message]) => (
                <li key={key}>
                  <a href={`#booking-${key}`}>{message}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div hidden aria-hidden="true">
          <label htmlFor="booking-company">Company</label>
          <input
            id="booking-company"
            name="company"
            autoComplete="off"
            tabIndex={-1}
          />
        </div>
        <div className="form-grid">
          {fields.map((f) => (
            <div
              className={`form-field ${f.name === "name" ? "form-field-wide" : ""}`}
              key={f.name}
            >
              <label htmlFor={`booking-${f.name}`}>
                {f.label} <span aria-hidden="true">*</span>
              </label>
              <input
                id={`booking-${f.name}`}
                name={f.name}
                type={f.type}
                autoComplete={f.autoComplete}
                maxLength={f.maxLength}
                min={f.type === "date" ? clinicToday() : undefined}
                required
                aria-invalid={Boolean(errors[f.name])}
                aria-describedby={
                  errors[f.name] ? `error-${f.name}` : undefined
                }
              />
              {errors[f.name] && (
                <p className="field-error" id={`error-${f.name}`}>
                  {errors[f.name]}
                </p>
              )}
            </div>
          ))}
          <div className="form-field">
            <label htmlFor="booking-time">Time preference</label>
            <select
              id="booking-time"
              name="time"
              aria-invalid={Boolean(errors.time)}
              aria-describedby={errors.time ? "error-time" : undefined}
            >
              <option>Any available time</option>
              <option>Afternoon</option>
              <option>Evening</option>
            </select>
            {errors.time && (
              <p id="error-time" className="field-error">
                {errors.time}
              </p>
            )}
          </div>
        </div>
        <p className="form-help">
          {site.hours.summary}, Pakistan time. A preferred date is a request,
          not a confirmed appointment. Please keep medical details and reports
          for your clinical consultation.
        </p>
        <label className="form-consent" htmlFor="booking-consent">
          <input
            type="checkbox"
            id="booking-consent"
            name="consent"
            required
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "error-consent" : undefined}
          />
          <span>
            I agree to share these booking details with the clinic through my
            chosen contact service.{" "}
            <Link href="/privacy">Privacy information</Link>.
          </span>
        </label>
        {errors.consent && (
          <p className="field-error mb-3" id="error-consent">
            {errors.consent}
          </p>
        )}
        <button type="submit" className="form-submit">
          Prepare WhatsApp request →
        </button>
        <p className="form-help">
          You’ll review the request before opening WhatsApp. Nothing is sent
          automatically.
        </p>
        {emailConfig.service && emailConfig.template && emailConfig.key && (
          <button
            className="mt-5 text-link"
            type="button"
            disabled={sending}
            onClick={email}
          >
            {sending ? "Sending…" : "Send these details by email instead"}
          </button>
        )}
      </form>
    </>
  );
}
