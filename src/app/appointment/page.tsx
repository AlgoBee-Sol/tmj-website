import AppointmentForm from "@/components/appointment/AppointmentForm";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import PageHero from "@/components/layout/PageHero";
import { pageMetadata } from "@/lib/seo";
import { site, telHref, waHref, defaultWaMessage } from "@/lib/site";
export const metadata = pageMetadata(
  "Book a physiotherapy appointment",
  "Request an appointment at The Muscular Junction in River Gardens, Islamabad. Open daily, noon to midnight. Book with Dr. Mozaffar and the team.",
  "/appointment",
);
export default function Page() {
  return (
    <>
      <Breadcrumbs
        items={[{ name: "Book Appointment", path: "/appointment" }]}
      />
      <PageHero
        eyebrow="We’re here to help"
        title="Your next step starts here."
        subtitle="Request a time that suits you. The clinic will confirm your appointment and help you choose the right physiotherapist."
      />
      <section className="section">
        <div className="container-page booking-layout">
          <div className="prose-content">
            <h2>What to expect</h2>
            <ul>
              <li>A conversation about your symptoms, history and goals.</li>
              <li>An assessment of relevant movement and function.</li>
              <li>A clear discussion of options and next steps.</li>
              <li>Time to ask questions before deciding on treatment.</li>
            </ul>
            <h2>Prefer to talk?</h2>
            <div className="contact-channels">
              <a href={telHref}>Call {site.contact.phone} ↗</a>
              <a
                href={waHref(defaultWaMessage)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Message us on WhatsApp ↗
              </a>
              <a
                href={site.contact.mapLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get directions to the clinic ↗
              </a>
            </div>
            <p className="mt-6">
              {site.hours.summary}. Mention if you would prefer a female
              physiotherapist.
            </p>
            <p className="medical-note">
              For urgent or emergency symptoms, seek medical care directly. This
              form is for routine appointments.
            </p>
          </div>
          <div className="booking-form-panel">
            <h2 className="text-2xl font-semibold mb-2">
              Request an appointment
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Fields marked * are required. No payment is taken here.
            </p>
            <AppointmentForm />
          </div>
        </div>
      </section>
    </>
  );
}
