import siteData from "@/data/site.json";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import type { IconType } from "react-icons";

interface SocialItem {
  href: string;
  label: string;
  Icon: IconType;
  hover: string; // brand hover background
}

const socials: SocialItem[] = [
  { href: siteData.social.facebook, label: "Facebook", Icon: FaFacebookF, hover: "hover:bg-[#1877F2]" },
  { href: siteData.social.instagram, label: "Instagram", Icon: FaInstagram, hover: "hover:bg-[#E1306C]" },
  { href: siteData.social.whatsapp, label: "WhatsApp", Icon: FaWhatsapp, hover: "hover:bg-[#25D366]" },
  { href: siteData.social.linkedin, label: "LinkedIn", Icon: FaLinkedinIn, hover: "hover:bg-[#0A66C2]" },
];

/**
 * Fixed, vertically-centered social bar pinned to the right edge of the
 * viewport. Each pill expands to reveal its label on hover. Hidden on small
 * screens (the footer carries the socials there) to avoid covering content.
 */
export default function SocialSidebar() {
  return (
    <div className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-2.5 md:flex">
      {socials.map(({ href, label, Icon, hover }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`group flex items-center justify-end overflow-hidden rounded-l-xl border border-r-0 border-border bg-card text-foreground shadow-md transition-colors duration-300 ${hover}`}
        >
          <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:max-w-[160px] group-hover:pl-4 group-hover:opacity-100">
            {label}
          </span>
          <span className="flex h-11 w-11 shrink-0 items-center justify-center text-lg transition-colors duration-300 group-hover:text-white">
            <Icon aria-hidden="true" />
          </span>
        </a>
      ))}
    </div>
  );
}
