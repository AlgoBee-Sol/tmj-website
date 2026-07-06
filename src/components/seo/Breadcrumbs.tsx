import siteData from "@/data/site.json";
import JsonLd from "./JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || siteData.url;

export interface Crumb {
  name: string;
  path: string;
}

/**
 * Emits BreadcrumbList JSON-LD so Google can show breadcrumb rich results.
 * "Home" is prepended automatically.
 */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail: Crumb[] = [{ name: "Home", path: "/" }, ...items];

  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${siteUrl}${crumb.path}`,
    })),
  };

  return <JsonLd data={data} />;
}
