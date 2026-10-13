import { site, telHref } from "@/lib/site";
import MapEmbed from "@/components/map/MapEmbed";
import Button from "@/components/ui/Button";
export default function LocationSection() {
  return (
    <section className="section location-section">
      <div className="container-page location-grid">
        <div>
          <p className="eyebrow">Close to home</p>
          <h2 className="display-2 mt-4">
            Your physiotherapy clinic
            <br />
            in River Gardens.
          </h2>
          <address className="location-address">
            <strong>{site.name}</strong>
            <span>{site.contact.streetAddress}</span>
            <span>{site.contact.locality}, Pakistan</span>
          </address>
          <p className="font-semibold">{site.hours.summary}</p>
          <a className="text-link mt-3" href={telHref}>
            {site.contact.phone}
          </a>
          <p className="mt-5 text-muted-foreground">
            We welcome patients from PWD, Soan Gardens, Pakistan Town, Naval
            Anchorage, Jinnah Gardens, Bahria Town, DHA II and Gulberg Greens,
            as well as wider Islamabad and Rawalpindi.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            {site.contact.accessNote}
          </p>
          <Button href={site.contact.mapLink} className="mt-6">
            Get directions ↗
          </Button>
        </div>
        <div className="location-map">
          <MapEmbed />
        </div>
      </div>
    </section>
  );
}
