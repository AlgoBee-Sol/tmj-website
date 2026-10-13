import Link from "next/link";
import Image from "next/image";
import { site, socialLinks, telHref } from "@/lib/site";
const links = [
  {
    title: "Popular services",
    items: [
      ["Manual therapy", "/services/manual-therapy"],
      ["Sports rehabilitation", "/services/sports-rehab"],
      ["Post-operative care", "/services/post-operative-rehabilitation"],
      ["All services", "/services"],
    ],
  },
  {
    title: "Conditions",
    items: [
      ["Back & neck pain", "/conditions/back-pain"],
      ["Knee pain", "/conditions/knee-pain"],
      ["Frozen shoulder", "/conditions/frozen-shoulder"],
      ["All conditions", "/conditions"],
    ],
  },
  {
    title: "The clinic",
    items: [
      ["Dr. Syed Mozaffar", "/doctors/dr-syed-mozaffar"],
      ["Meet the team", "/doctors"],
      ["Our approach", "/about"],
      ["Workshops", "/workshops"],
      ["Blog", "/blog"],
      ["Contact & directions", "/contact"],
    ],
  },
];
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-page">
        <div className="footer-grid">
          <div className="footer-brand">
            <Image
              src="/images/logo-tmj.webp"
              width={52}
              height={52}
              alt="The Muscular Junction logo"
            />
            <h2>{site.name}</h2>
            <p>Physiotherapy & Clinical Rehabilitation Center</p>
            <address>
              {site.contact.streetAddress}
              <br />
              {site.contact.locality}, Pakistan
            </address>
            <a className="footer-phone" href={telHref}>
              {site.contact.phone}
            </a>
            <p>{site.hours.summary}</p>
            <div className="footer-socials">
              {socialLinks.map(({ id, label, href, Icon }) => (
                <a
                  key={id}
                  href={href}
                  aria-label={`${label} (opens in a new tab)`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          {links.map((group) => (
            <div key={group.title}>
              <h2>{group.title}</h2>
              <ul>
                {group.items.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <Link href="/privacy">Privacy & website information</Link>
          <a
            href={site.contact.mapLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get directions ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
