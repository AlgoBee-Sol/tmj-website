import siteData from "@/data/site.json";
import PageHero from "@/components/layout/PageHero";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with The Muscular Junction for appointments and inquiries — phone, email, or visit our clinic in Islamabad.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const details = [
    {
      icon: FiMapPin,
      title: "Address",
      content: siteData.contact.address,
    },
    {
      icon: FiPhone,
      title: "Phone",
      content: siteData.contact.phone,
      href: `tel:${siteData.contact.phone}`,
    },
    {
      icon: FiMail,
      title: "Email",
      content: siteData.contact.email,
      href: `mailto:${siteData.contact.email}`,
    },
  ];

  return (
    <div className="bg-background pb-24">
      <PageHero
        eyebrow="Get In Touch"
        title="Contact Us"
        subtitle="We are here to help. Reach out via phone, email, or visit our clinic."
      />

      <div className="container mx-auto mt-12 px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <h3 className="mb-6 text-2xl font-bold text-foreground">Get in Touch</h3>

            <div className="space-y-6">
              {details.map(({ icon: Icon, title, content, href }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-xl text-primary">
                    <Icon aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{title}</h4>
                    {href ? (
                      <a href={href} className="text-muted-foreground transition hover:text-primary">
                        {content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-border pt-8">
              <h4 className="mb-4 font-bold text-foreground">Working Hours</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex justify-between">
                  <span>Monday - Friday</span> <span>9:00 AM - 8:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span> <span>10:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between font-medium text-red-500">
                  <span>Sunday</span> <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Map */}
          <div className="h-96 overflow-hidden rounded-2xl border border-border bg-muted shadow-lg lg:h-auto">
            <iframe
              src={siteData.contact.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
