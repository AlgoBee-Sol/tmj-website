import Button from "./Button";
import { telHref, waHref, defaultWaMessage } from "@/lib/site";
export default function CtaBand({
  title = "Take the next step towards moving well.",
  description = "Start with a conversation. We’ll help you arrange an assessment at our River Gardens clinic.",
  waMessage = defaultWaMessage,
}: {
  title?: string;
  description?: string;
  waMessage?: string;
}) {
  return (
    <section className="cta-section">
      <div className="container-page">
        <div>
          <p className="eyebrow">Here when you’re ready</p>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="cta-actions">
          <Button href="/appointment" size="lg">
            Book Appointment ↗
          </Button>
          <Button href={waHref(waMessage)} variant="on-ink">
            WhatsApp
          </Button>
          <a href={telHref}>Call the clinic →</a>
        </div>
      </div>
    </section>
  );
}
