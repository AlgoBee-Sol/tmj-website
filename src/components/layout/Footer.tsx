import Link from "next/link";
import siteData from "@/data/site.json";
import footerData from "@/data/footer.json";

import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted pt-16 pb-8 text-muted-foreground">
      <div className="container mx-auto px-4 md:px-6">
        {/* Top Section */}
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Clinic Info */}
          <div>
            <h3 className="mb-4 text-2xl font-bold text-primary">
              {siteData.name}
            </h3>

            <p className="mb-6 leading-relaxed text-muted-foreground">
              {footerData.about}
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href={siteData.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#1877F2] hover:text-white hover:shadow-lg"
              >
                <FaFacebookF className="text-lg transition-transform duration-300 group-hover:scale-110" />
              </a>

              <a
                href={siteData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-border bg-card text-muted-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:text-white hover:shadow-lg"
              >
                <span className="absolute inset-0 bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af] opacity-0 transition group-hover:opacity-100" />
                <FaInstagram className="relative text-lg transition-transform duration-300 group-hover:scale-110" />
              </a>

              <a
                href={siteData.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#25D366] hover:text-white hover:shadow-lg"
              >
                <FaWhatsapp className="text-lg transition-transform duration-300 group-hover:scale-110" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="mb-6 text-lg font-bold text-foreground">Quick Links</h4>

            <ul className="flex flex-col gap-3">
              {footerData.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="relative w-fit text-muted-foreground transition after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:text-primary hover:after:w-full"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="mb-6 text-lg font-bold text-foreground">Contact Us</h4>

            <ul className="flex flex-col gap-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <FiMapPin className="mt-1 shrink-0 text-primary" />
                <a
                  href="https://maps.app.goo.gl/FYRvSV1PP8b67fc79"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-primary"
                >
                  {siteData.contact.address}
                </a>
              </li>

              <li className="flex items-center gap-3">
                <FiPhone className="shrink-0 text-primary" />
                <a
                  href={`tel:${siteData.contact.phone}`}
                  className="transition hover:text-primary"
                >
                  {siteData.contact.phone}
                </a>
              </li>

              <li className="flex items-center gap-3">
                <FiMail className="shrink-0 text-primary" />
                <a
                  href={`mailto:${siteData.contact.email}`}
                  className="transition hover:text-primary"
                >
                  {siteData.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Map */}
          <div className="h-64 overflow-hidden rounded-xl border border-border shadow-lg md:h-auto">
            <iframe
              src={siteData.contact.mapEmbedUrl}
              className="h-full w-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location"
            />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-border pt-8 text-center text-sm text-subtle-foreground">
          <p>
            &copy; {new Date().getFullYear()} {siteData.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
