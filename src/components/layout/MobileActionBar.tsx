import Link from "next/link";
import { FiPhone, FiCalendar } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { telHref, waHref, defaultWaMessage } from "@/lib/site";

/**
 * Persistent mobile booking bar.
 *
 * On phones the three actions a visitor actually wants — call, WhatsApp, book —
 * are otherwise a scroll away at all times. Pinning them costs one row of
 * screen and removes every dead end in the funnel.
 */
export default function MobileActionBar() {
  const items = [
    {
      href: telHref,
      label: "Call",
      Icon: FiPhone,
      className: "text-foreground",
      external: true,
    },
    {
      href: waHref(defaultWaMessage),
      label: "WhatsApp",
      Icon: FaWhatsapp,
      className: "text-[var(--whatsapp)]",
      external: true,
    },
  ];

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md lg:hidden">
      <div className="grid grid-cols-3 items-stretch">
        {items.map(({ href, label, Icon, className }) => (
          <a
            key={label}
            href={href}
            {...(href.startsWith("http")
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="flex flex-col items-center justify-center gap-1 py-2.5 text-[0.6875rem] font-semibold text-muted-foreground transition active:bg-surface"
          >
            <Icon className={`h-5 w-5 ${className}`} aria-hidden="true" />
            {label}
          </a>
        ))}

        <Link
          href="/appointment"
          className="m-1.5 flex flex-col items-center justify-center gap-1 rounded-xl bg-primary py-2 text-[0.6875rem] font-semibold text-primary-foreground"
        >
          <FiCalendar className="h-5 w-5" aria-hidden="true" />
          Book
        </Link>
      </div>
    </div>
  );
}
