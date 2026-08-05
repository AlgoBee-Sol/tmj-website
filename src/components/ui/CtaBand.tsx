import { FiArrowRight, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Button from "./Button";
import GoogleRating from "./GoogleRating";
import { site, telHref, waHref, defaultWaMessage } from "@/lib/site";

/**
 * Closing conversion band, reused at the foot of every page so no route is a
 * dead end. Offers all three booking channels because the right one differs by
 * visitor: form for planners, WhatsApp for most, phone for urgent cases.
 */
export default function CtaBand({
  title = "Ready to stop working around the pain?",
  description = "Book a full assessment and find out what is actually going on — usually within a day or two.",
  waMessage = defaultWaMessage,
}: {
  title?: string;
  description?: string;
  waMessage?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <div className="bg-ink-wash absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className="bg-grid absolute inset-0 -z-10 text-white opacity-[0.05]"
        aria-hidden="true"
      />

      <div className="container-page section-tight">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="display-2 text-balance text-white">{title}</h2>
          <p className="lead mx-auto mt-5 max-w-2xl text-on-ink-muted">
            {description}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/appointment" size="lg">
              Book an appointment
              <FiArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href={waHref(waMessage)} variant="whatsapp" size="lg">
              <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
              Message on WhatsApp
            </Button>
            <Button href={telHref} variant="on-ink" size="lg">
              <FiPhone className="h-4 w-4" aria-hidden="true" />
              {site.contact.phone}
            </Button>
          </div>

          <div className="mt-9 flex justify-center">
            <GoogleRating variant="ink" />
          </div>
        </div>
      </div>
    </section>
  );
}
