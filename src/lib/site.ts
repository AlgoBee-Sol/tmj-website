import type { IconType } from "react-icons";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";
import siteData from "@/data/site.json";

export const site = siteData;

/** Canonical origin — overridable per-environment without touching data. */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || siteData.url;

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
