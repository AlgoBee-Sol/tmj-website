import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { site, mailHref } from "@/lib/site";
import PageHero from "@/components/layout/PageHero";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
export const metadata = pageMetadata(
  "Privacy & website information",
  "How appointment requests, external contact services and general health information work on The Muscular Junction website.",
  "/privacy",
);
export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Privacy", path: "/privacy" }]} />
      <PageHero
        eyebrow="Website information"
        title="Your privacy and your choices."
      />
      <article className="container-page section prose-content">
        <p>
          Updated 13 October 2026. This page describes how this website handles
          appointment requests. Contact the clinic for information about the
          separate handling of clinical records.
        </p>
        <h2>Appointment details</h2>
        <p>
          The booking form asks for your name, phone number and preferred
          appointment date and time. It prepares a request in your browser.
          Opening the WhatsApp link shares those details with WhatsApp; you
          choose whether to send the message to the clinic. Please do not
          include medical reports or sensitive health information in a booking
          message.
        </p>
        <p>
          If the email option is enabled, selecting it sends the booking details
          to the clinic through EmailJS. You can instead call the clinic. The
          website does not take payment or confirm appointments automatically.
        </p>
        <h2>External services</h2>
        <p>
          WhatsApp, Google Maps and social platforms apply their own privacy
          terms. The interactive Google map loads only when you select its load
          button. Normal hosting requests may be processed by the website’s
          hosting provider to deliver and protect the site.
        </p>
        <h2>Storage and analytics</h2>
        <p>
          This version of the website does not install advertising trackers or
          an analytics tag, and the appointment form does not save your entries
          to browser storage. The clinic receives details you choose to send
          using the contact services above.
        </p>
        <h2>Questions about your information</h2>
        <p>
          Contact <a href={mailHref}>{site.contact.email}</a> or the{" "}
          <Link href="/contact">clinic</Link> to ask about information you have
          sent, corrections or deletion requests. Clinical-record retention and
          any applicable obligations should be discussed directly with the
          clinic.
        </p>
        <h2>Health information</h2>
        <p>
          Website content is general information and does not replace an
          individual medical assessment. It cannot diagnose you or promise an
          outcome. Testimonials describe individual experiences. Seek emergency
          medical care for urgent symptoms rather than waiting for a booking
          response.
        </p>
      </article>
    </>
  );
}
