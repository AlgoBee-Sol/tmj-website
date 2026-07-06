import AppointmentForm from "@/components/appointment/AppointmentForm";
import siteData from "@/data/site.json";
import { FaWhatsapp, FaPhoneAlt, FaCheckCircle, FaRegClock } from "react-icons/fa";

export const metadata = {
  title: "Book Appointment",
  description:
    "Book your physiotherapy appointment at The Muscular Junction in seconds — instantly on WhatsApp, or send a request online.",
  alternates: { canonical: "/appointment" },
};

const benefits = [
  "Certified expert therapists",
  "Advanced, modern equipment",
  "Personalized care plans",
  "Affordable & transparent pricing",
];

// Generic WhatsApp chat link (the form builds a detailed one from your inputs)
const waChatLink = `${siteData.social.whatsapp}?text=${encodeURIComponent(
  "Hi, I would like to book an appointment at The Muscular Junction."
)}`;

export default function AppointmentPage() {
  return (
    <div className="bg-background py-16 md:py-20">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-2 block text-sm font-bold uppercase tracking-widest text-primary">
            Book an Appointment
          </span>
          <h1 className="mb-4 text-balance text-4xl font-bold text-foreground md:text-5xl">
            Your Recovery Starts Here
          </h1>
          <p className="text-lg text-muted-foreground">
            Book instantly on WhatsApp or send us a request — our team will
            confirm your slot right away.
          </p>
        </div>

        {/* Split card */}
        <div className="grid overflow-hidden rounded-3xl border border-border bg-card shadow-2xl lg:grid-cols-5">
          {/* Left: gradient info panel */}
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 p-8 text-white md:p-10 lg:col-span-2">
            {/* Decorative blobs */}
            <div className="absolute right-[-20%] top-[-10%] h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-[-15%] left-[-20%] h-64 w-64 rounded-full bg-sky-300/20 blur-3xl" />

            <div className="relative z-10">
              <h2 className="mb-4 text-2xl font-bold">Start Your Recovery Journey</h2>
              <p className="mb-8 leading-relaxed text-blue-100">
                Our expert therapists are ready to help you regain your strength
                and mobility. Take the first step towards a pain-free life.
              </p>

              <ul className="mb-8 space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-blue-50">
                    <FaCheckCircle className="shrink-0 text-cyan-300" aria-hidden="true" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Quick actions */}
              <div className="space-y-3">
                <a
                  href={waChatLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-6 py-3.5 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#20bd5a]"
                >
                  <FaWhatsapp className="text-xl" aria-hidden="true" />
                  Chat on WhatsApp
                </a>
                <a
                  href={`tel:${siteData.contact.phone}`}
                  className="flex items-center justify-center gap-2.5 rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  <FaPhoneAlt aria-hidden="true" />
                  {siteData.contact.phone}
                </a>
              </div>

              {/* Hours */}
              <div className="mt-8 flex items-start gap-3 border-t border-white/15 pt-6 text-sm text-blue-100">
                <FaRegClock className="mt-0.5 shrink-0 text-cyan-300" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-white">Working Hours</p>
                  <p>Mon – Sat: 9:00 AM – 8:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="p-8 md:p-10 lg:col-span-3">
            <h2 className="mb-1 text-2xl font-bold text-foreground">
              Request Your Appointment
            </h2>
            <p className="mb-6 text-sm text-muted-foreground">
              Fill in your details and book in seconds.
            </p>
            <AppointmentForm />
          </div>
        </div>
      </div>
    </div>
  );
}
