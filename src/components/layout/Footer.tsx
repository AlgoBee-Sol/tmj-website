import Link from "next/link";
import siteData from "@/data/site.json";
import footerData from "@/data/footer.json";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import {
  FiMapPin,
  FiPhone,
  FiMail,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white pt-16 pb-8 border-t border-gray-200 text-gray-700">
      <div className="container mx-auto px-4 md:px-6">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Column 1: Clinic Info */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">
              {siteData.name}
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {footerData.about}
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {/* Facebook */}
              <a
                href={siteData.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="group relative flex h-11 w-11 items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#1877F2] hover:text-white hover:shadow-lg"
              >
                <FaFacebookF className="text-lg transition-transform duration-300 group-hover:scale-110" />
              </a>

              {/* Instagram */}
              <a
                href={siteData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group relative flex h-11 w-11 items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:text-white hover:shadow-lg overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af] opacity-0 group-hover:opacity-100 transition" />
                <FaInstagram className="relative text-lg transition-transform duration-300 group-hover:scale-110" />
              </a>

              {/* WhatsApp */}
              <a
                href={siteData.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="group relative flex h-11 w-11 items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#25D366] hover:text-white hover:shadow-lg"
              >
                <FaWhatsapp className="text-lg transition-transform duration-300 group-hover:scale-110" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6">
              Quick Links
            </h4>

            <ul className="flex flex-col gap-3">
              {footerData.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="relative w-fit text-gray-600 transition hover:text-primary after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6">
              Contact Us
            </h4>

            <ul className="flex flex-col gap-4 text-gray-600">
              <li className="flex items-start gap-3">
                <FiMapPin className="mt-1 text-primary" />
                <a
                  href="https://maps.app.goo.gl/FYRvSV1PP8b67fc79"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition"
                >
                  {siteData.contact.address}
                </a>
              </li>

              <li className="flex items-center gap-3">
                <FiPhone className="text-primary" />
                <a
                  href={`tel:${siteData.contact.phone}`}
                  className="hover:text-primary transition"
                >
                  {siteData.contact.phone}
                </a>
              </li>

              <li className="flex items-center gap-3">
                <FiMail className="text-primary" />
                <a
                  href={`mailto:${siteData.contact.email}`}
                  className="hover:text-primary transition"
                >
                  {siteData.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Map */}
          <div className="h-64 md:h-auto rounded-xl overflow-hidden shadow-lg border border-gray-100">
            <iframe
              src={siteData.contact.mapEmbedUrl}
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location"
            />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 pt-8 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} {siteData.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
