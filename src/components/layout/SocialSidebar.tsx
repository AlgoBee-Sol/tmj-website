import { socialLinks } from "@/lib/site";

/**
 * Fixed social rail pinned to the right edge on large screens. Each pill
 * expands to reveal its label on hover and fills with the platform's own brand
 * colour, passed down as a `--brand` custom property.
 *
 * Hidden below `lg` — the mobile action bar and footer carry these links there.
 * Order (WhatsApp → Instagram → LinkedIn → Facebook) is owned by `socialLinks`
 * in `@/lib/site` so every placement on the site stays in sync.
 */
export default function SocialSidebar() {
  return (
    <div className="fixed right-0 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-end gap-2 lg:flex">
      {socialLinks.map(({ href, label, Icon, brand }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          style={{ "--brand": brand } as React.CSSProperties}
          className="group flex items-center justify-end overflow-hidden rounded-l-xl border border-r-0 border-border bg-card text-muted-foreground shadow-sm transition-colors duration-300 hover:border-[var(--brand)] hover:bg-[var(--brand)] hover:text-white"
        >
          <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:max-w-[10rem] group-hover:pl-4 group-hover:opacity-100">
            {label}
          </span>
          <span className="flex h-11 w-11 shrink-0 items-center justify-center text-lg">
            <Icon aria-hidden="true" />
          </span>
        </a>
      ))}
    </div>
  );
}
