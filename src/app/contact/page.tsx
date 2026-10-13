import AppointmentForm from "@/components/appointment/AppointmentForm";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import PageHero from "@/components/layout/PageHero";
import LocationSection from "@/components/home/LocationSection";
import FaqSection from "@/components/seo/FaqSection";
import { pageMetadata } from "@/lib/seo";
import { site, telHref, mailHref, waHref, defaultWaMessage } from "@/lib/site";
export const metadata = pageMetadata(
  "Physiotherapy clinic in River Gardens — Contact",
  `Visit ${site.name} at ${site.contact.address}. Call ${site.contact.phone}. ${site.hours.summary}.`,
  "/contact",
);
export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} />
      <PageHero
        eyebrow="Contact & location"
        title="Physiotherapy clinic in River Gardens, Islamabad"
        subtitle="A local place for assessment, rehabilitation and a conversation about what comes next."
      />
      <LocationSection />
      <section className="section">
        <div className="container-page booking-layout">
          <div className="prose-content">
            <h2>Let’s arrange your visit.</h2>
            <p>
              Contact the clinic for appointment availability, fees and
              clinician preferences. If you have mobility or access needs, let
              us know before travelling.
            </p>
            <div className="contact-channels">
              <a href={telHref}>Call {site.contact.phone}</a>
              <a
                href={waHref(defaultWaMessage)}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp the clinic ↗
              </a>
              <a href={mailHref} className="break-all">
                {site.contact.email}
              </a>
            </div>
            <h2>Before you arrive</h2>
            <p>
              Bring relevant reports, a medication list and any post-operative
              instructions. Wear clothing that allows comfortable movement. Your
              appointment is confirmed when the clinic replies.
            </p>
          </div>
          <div className="booking-form-panel">
            <h2 className="text-2xl font-semibold mb-6">
              Request an appointment
            </h2>
            <AppointmentForm />
          </div>
        </div>
      </section>
      <FaqSection className="bg-surface" />
    </>
  );
}
