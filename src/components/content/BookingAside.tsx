import Button from "@/components/ui/Button";
import { site, telHref, waHref, defaultWaMessage } from "@/lib/site";
import Link from "next/link";
export default function BookingAside() {
  return (
    <aside className="booking-aside">
      <p className="eyebrow">Your next step</p>
      <h2>Let’s start with an assessment.</h2>
      <p>
        Tell us what you want to get back to. We’ll help you find the right
        appointment.
      </p>
      <Button href="/appointment">Book Appointment</Button>
      <Button variant="secondary" href={waHref(defaultWaMessage)}>
        WhatsApp the clinic
      </Button>
      <a href={telHref} className="text-link">
        {site.contact.phone}
      </a>
      <div className="aside-location">
        <strong>River Gardens, Islamabad</strong>
        <span>{site.hours.summary}</span>
        <Link href="/contact">Clinic details & directions →</Link>
      </div>
    </aside>
  );
}
