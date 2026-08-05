"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaWhatsapp } from "react-icons/fa";
import { FiCheck, FiAlertCircle } from "react-icons/fi";
import servicesData from "@/data/services.json";
import { site } from "@/lib/site";

const TIME_SLOTS = [
  "Morning (9:00 AM – 12:00 PM)",
  "Afternoon (12:00 PM – 4:00 PM)",
  "Evening (4:00 PM – 9:00 PM)",
];

// Email delivery is optional: configure these to enable the email fallback.
const EMAILJS = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
};
const emailEnabled = Boolean(
  EMAILJS.serviceId && EMAILJS.templateId && EMAILJS.publicKey,
);

type Status = "idle" | "sending" | "success" | "error";

export default function AppointmentForm() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [method, setMethod] = useState<"whatsapp" | "email">("whatsapp");

  const today = new Date().toISOString().split("T")[0];

  const field = (name: string) => {
    const el = form.current?.elements.namedItem(
      name,
    ) as HTMLInputElement | null;
    return (el?.value || "").trim();
  };

  const buildWhatsAppLink = () => {
    const lines = [
      "*New Appointment Request*",
      `Name: ${field("user_name")}`,
      `Phone: ${field("user_phone")}`,
      field("user_email") && `Email: ${field("user_email")}`,
      field("service") && `Service: ${field("service")}`,
      `Preferred date: ${field("date")}`,
      field("time") && `Preferred time: ${field("time")}`,
      field("message") && `Details: ${field("message")}`,
    ].filter(Boolean);

    return `${site.social.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
  };

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current?.reportValidity()) return;
    // Bot check — a real user never fills a hidden field.
    if (field("company")) return;

    window.open(buildWhatsAppLink(), "_blank", "noopener,noreferrer");
    setMethod("whatsapp");
    setStatus("success");
  };

  const sendEmail = () => {
    if (!form.current?.reportValidity()) return;
    if (field("company")) return;

    setMethod("email");
    setStatus("sending");

    emailjs
      .sendForm(
        EMAILJS.serviceId!,
        EMAILJS.templateId!,
        form.current!,
        EMAILJS.publicKey!,
      )
      .then(
        () => {
          setStatus("success");
          form.current?.reset();
        },
        () => setStatus("error"),
      );
  };

  const inputClass =
    "w-full rounded-xl border border-input bg-background px-4 py-2.5 text-foreground outline-none transition " +
    "placeholder:text-subtle-foreground focus:border-primary focus:ring-2 focus:ring-ring/30";
  const labelClass = "mb-1.5 block text-sm font-medium text-foreground";

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center justify-center py-12 text-center"
      >
        <span className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-success-soft text-success">
          <FiCheck className="h-8 w-8" aria-hidden="true" />
        </span>

        <h3 className="display-3 text-foreground">
          {method === "whatsapp" ? "Almost there" : "Request received"}
        </h3>

        <p className="mt-3 max-w-sm text-muted-foreground">
          {method === "whatsapp"
            ? "We've opened WhatsApp with your details filled in — press send and our team will confirm your slot, usually the same day."
            : "Thanks — we have your request. Our team will confirm your appointment by phone or WhatsApp shortly."}
        </p>

        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-7 font-semibold text-primary hover:underline"
        >
          Book another appointment
        </button>
      </div>
    );
  }

  return (
    <form ref={form} onSubmit={handleWhatsApp} className="space-y-4" noValidate>
      {/* Honeypot */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="user_name" className={labelClass}>
          Full name <span className="text-primary">*</span>
        </label>
        <input
          type="text"
          name="user_name"
          id="user_name"
          required
          autoComplete="name"
          className={inputClass}
          placeholder="Your name"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="user_phone" className={labelClass}>
            Phone / WhatsApp <span className="text-primary">*</span>
          </label>
          <input
            type="tel"
            name="user_phone"
            id="user_phone"
            required
            autoComplete="tel"
            className={inputClass}
            placeholder="+92 3xx xxxxxxx"
          />
        </div>
        <div>
          <label htmlFor="user_email" className={labelClass}>
            Email <span className="text-subtle-foreground">(optional)</span>
          </label>
          <input
            type="email"
            name="user_email"
            id="user_email"
            autoComplete="email"
            className={inputClass}
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className={labelClass}>
          What do you need help with?
        </label>
        <select name="service" id="service" className={inputClass} defaultValue="">
          <option value="">Not sure yet — please advise</option>
          {servicesData.map((s) => (
            <option key={s.id} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="General Consultation">General consultation</option>
        </select>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="date" className={labelClass}>
            Preferred date <span className="text-primary">*</span>
          </label>
          <input
            type="date"
            name="date"
            id="date"
            required
            min={today}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="time" className={labelClass}>
            Preferred time
          </label>
          <select name="time" id="time" className={inputClass} defaultValue="">
            <option value="">Any time</option>
            {TIME_SLOTS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Briefly, what is going on?{" "}
          <span className="text-subtle-foreground">(optional)</span>
        </label>
        <textarea
          name="message"
          id="message"
          rows={3}
          className={inputClass}
          placeholder="e.g. Lower back pain for 3 weeks, worse when sitting."
        />
      </div>

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-[var(--whatsapp)] px-6 py-4 text-base font-bold text-white shadow-[0_8px_24px_rgb(37_211_102/0.3)] transition hover:-translate-y-0.5 hover:bg-[var(--whatsapp-dark)]"
      >
        <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
        Send request on WhatsApp
      </button>

      <p className="text-center text-xs text-subtle-foreground">
        Opens WhatsApp with your details filled in. Nothing is sent until you
        press send.
      </p>

      {emailEnabled && (
        <>
          <div className="flex items-center gap-3 pt-1 text-xs text-subtle-foreground">
            <span className="h-px flex-1 bg-border" />
            or
            <span className="h-px flex-1 bg-border" />
          </div>

          <button
            type="button"
            onClick={sendEmail}
            disabled={status === "sending"}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-border-strong px-6 py-3 font-semibold text-foreground transition hover:bg-surface disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Send request by email instead"}
          </button>
        </>
      )}

      {status === "error" && (
        <p
          role="alert"
          className="flex items-start gap-2 rounded-xl border border-red-500/30 bg-red-500/5 p-3 text-sm text-red-600 dark:text-red-400"
        >
          <FiAlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          We could not send that by email. Please use the WhatsApp button above
          or call us on {site.contact.phone}.
        </p>
      )}
    </form>
  );
}
