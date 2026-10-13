import type { IconType } from "react-icons";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";
import siteData from "@/data/site.json";

const displayTime = (time: string) => {
  if (time === "12:00") return "12 noon";
  if (time === "00:00") return "12 midnight";
  const [hours, minutes] = time.split(":").map(Number);
  return `${hours % 12 || 12}${minutes ? `:${String(minutes).padStart(2, "0")}` : ""} ${hours >= 12 ? "pm" : "am"}`;
};
export const site = {
  ...siteData,
  hours: {
    ...siteData.hours,
    summary: siteData.hours.schema
      .map(
        (row) =>
          `${row.days.length === 7 ? "Daily" : row.days.join(", ")} · ${displayTime(row.opens)} – ${displayTime(row.closes)}`,
      )
      .join("; "),
  },
};

/** The clinic's weekday, regardless of the visitor's device timezone. */
export function currentDayHours(now = new Date()) {
  const day = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    timeZone: site.hours.timezone,
  }).format(now);
  const sessions = site.hours.schema.filter((row) => row.days.includes(day));
  return `${day} · ${sessions.length ? sessions.map((row) => `${displayTime(row.opens)} – ${displayTime(row.closes)}`).join(", ") : "Closed"}`;
}

/** Preferred production origin, also used by local previews to avoid duplicate canonicals. */
export const siteUrl = siteData.url.replace(/\/$/, "");

/** Absolute URL for metadata, JSON-LD and share images. */
export const absoluteUrl = (path = "/") =>
  `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;

export const telHref = `tel:${siteData.contact.phoneDial}`;
export const mailHref = `mailto:${siteData.contact.email}`;

/** WhatsApp deep link with a pre-filled message. */
export const waHref = (message: string) =>
  `${siteData.social.whatsapp}?text=${encodeURIComponent(message)}`;

export const defaultWaMessage =
  "Hi, I'd like to book a physiotherapy appointment at The Muscular Junction.";

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  Icon: IconType;
  /** Brand colour used for hover fills. */
  brand: string;
}

/**
 * Display order is deliberate and fixed: WhatsApp first because it is the
 * clinic's primary booking channel, then Instagram (patient stories),
 * LinkedIn (professional workshops) and Facebook.
 */
export const socialLinks: SocialLink[] = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: siteData.social.whatsapp,
    Icon: FaWhatsapp,
    brand: "#25D366",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: siteData.social.instagram,
    Icon: FaInstagram,
    brand: "#E1306C",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: siteData.social.linkedin,
    Icon: FaLinkedinIn,
    brand: "#0A66C2",
  },
  {
    id: "facebook",
    label: "Facebook",
    href: siteData.social.facebook,
    Icon: FaFacebookF,
    brand: "#1877F2",
  },
];

/**
 * Profile URLs for schema.org `sameAs`, used to reconcile this entity with the
 * clinic's other listings. WhatsApp is excluded on purpose — `wa.me` is a chat
 * deep link, not a profile page, so it tells a search engine nothing about
 * identity.
 */
export const sameAs = [
  ...socialLinks.filter((s) => s.id !== "whatsapp").map((s) => s.href),
  siteData.contact.mapLink,
];
