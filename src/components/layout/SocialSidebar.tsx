import type { CSSProperties } from "react";
import { socialLinks } from "@/lib/site";

/** Desktop shortcuts; mobile visitors use the booking bar and footer links. */
export default function SocialSidebar() {
  return (
    <nav className="social-sidebar" aria-label="Social media shortcuts">
      {socialLinks.map(({ id, href, label, Icon, brand }) => (
        <a
          key={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${label} (opens in a new tab)`}
          style={
            {
              "--social-accent": id === "whatsapp" ? "#137044" : brand,
            } as CSSProperties
          }
        >
          <span className="social-sidebar-label">{label}</span>
          <span className="social-sidebar-icon">
            <Icon aria-hidden="true" />
          </span>
        </a>
      ))}
    </nav>
  );
}
