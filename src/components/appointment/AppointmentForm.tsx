"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import servicesData from "@/data/services.json";
import siteData from "@/data/site.json";
import { FaWhatsapp } from "react-icons/fa";

const TIME_SLOTS = [
  "Morning (9:00 AM – 12:00 PM)",
  "Afternoon (12:00 PM – 4:00 PM)",
  "Evening (4:00 PM – 8:00 PM)",
];

export default function AppointmentForm() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [method, setMethod] = useState<"whatsapp" | "email">("whatsapp");

  const today = new Date().toISOString().split("T")[0];

  // EmailJS — replace these with real credentials to enable email requests
  const SERVICE_ID = "YOUR_SERVICE_ID";
  const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
  const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

  const field = (name: string) => {
    const el = form.current?.elements.namedItem(name) as HTMLInputElement | null;
    return (el?.value || "").trim();
  };

  const buildWhatsAppLink = () => {
    const lines = [
      "*New Appointment Request* 🩺",
      `Name: ${field("user_name")}`,
      `Phone: ${field("user_phone")}`,
      field("user_email") && `Email: ${field("user_email")}`,
      field("service") && `Service: ${field("service")}`,
      `Preferred Date: ${field("date")}`,
      field("time") && `Preferred Time: ${field("time")}`,
      field("message") && `Message: ${field("message")}`,
    ].filter(Boolean);
    return `${siteData.social.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
  };

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current?.reportValidity()) return;
    window.open(buildWhatsAppLink(), "_blank", "noopener,noreferrer");
    setMethod("whatsapp");
    setStatus("success");
  };

  const sendEmail = () => {
    if (!form.current?.reportValidity()) return;
    setMethod("email");
    setStatus("sending");
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      () => {
        setStatus("success");
        form.current?.reset();
      },
      () => setStatus("error")
    );
  };

  const inputClass =
    "w-full rounded-xl border border-input bg-background px-4 py-2.5 text-foreground outline-none transition placeholder:text-subtle-foreground focus:border-transparent focus:ring-2 focus:ring-ring";
  const labelClass = "mb-1.5 block text-sm font-medium text-muted-foreground";

  if (status === "success") {
    return (
      <div className="flex h-full flex-col items-center justify-center py-10 text-center">
        <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mb-2 text-2xl font-bold text-foreground">
          {method === "whatsapp" ? "Almost done!" : "Request Sent!"}
        </h3>
        <p className="max-w-sm text-muted-foreground">
          {method === "whatsapp"
            ? "We've opened WhatsApp with your appointment details — just press send to confirm your booking with us."
            : "Your appointment request has been received. We'll confirm shortly via WhatsApp and Email."}
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 font-bold text-primary hover:underline"
        >
          Book Another
        </button>
      </div>
    );
  }

  return (
    <form ref={form} onSubmit={handleWhatsApp} className="space-y-4">
      <div>
        <label htmlFor="user_name" className={labelClass}>Full Name</label>
        <input type="text" name="user_name" id="user_name" required className={inputClass} placeholder="John Doe" />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="user_phone" className={labelClass}>Phone / WhatsApp</label>
          <input type="tel" name="user_phone" id="user_phone" required className={inputClass} placeholder="+92 3xx xxxxxxx" />
        </div>
        <div>
          <label htmlFor="user_email" className={labelClass}>Email (optional)</label>
          <input type="email" name="user_email" id="user_email" className={inputClass} placeholder="john@example.com" />
        </div>
      </div>

      <div>
        <label htmlFor="service" className={labelClass}>Service</label>
        <select name="service" id="service" className={inputClass} defaultValue="">
          <option value="" disabled>Select a service</option>
          {servicesData.map((s) => (
            <option key={s.id} value={s.title}>{s.title}</option>
          ))}
          <option value="General Consultation">General Consultation</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="date" className={labelClass}>Preferred Date</label>
          <input type="date" name="date" id="date" required min={today} className={inputClass} />
        </div>
        <div>
          <label htmlFor="time" className={labelClass}>Preferred Time</label>
          <select name="time" id="time" className={inputClass} defaultValue="">
            <option value="" disabled>Select a slot</option>
            {TIME_SLOTS.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>Message / Issue (optional)</label>
        <textarea name="message" id="message" rows={3} className={inputClass} placeholder="Briefly describe your issue..."></textarea>
      </div>

      {/* Primary: WhatsApp */}
      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-6 py-4 text-lg font-bold text-white shadow-lg shadow-green-600/20 transition hover:-translate-y-0.5 hover:bg-[#20bd5a]"
      >
        <FaWhatsapp className="text-2xl" aria-hidden="true" />
        Book on WhatsApp
      </button>

      {/* Secondary: email */}
      <div className="flex items-center gap-3 text-xs text-subtle-foreground">
        <span className="h-px flex-1 bg-border" />
        or
        <span className="h-px flex-1 bg-border" />
      </div>
      <button
        type="button"
        onClick={sendEmail}
        disabled={status === "sending"}
        className="flex w-full items-center justify-center gap-2 rounded-xl border border-border px-6 py-3 font-semibold text-foreground transition hover:bg-muted disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? (
          <>
            <svg className="h-5 w-5 animate-spin text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </>
        ) : (
          "Send request by Email"
        )}
      </button>

      {status === "error" && (
        <p className="text-center text-sm text-red-500">
          Email sending isn&apos;t configured yet — please use the WhatsApp button above or call us directly.
        </p>
      )}
    </form>
  );
}
