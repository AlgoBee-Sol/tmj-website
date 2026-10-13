import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
export default function RelatedLinks({
  title,
  items,
}: {
  title: string;
  items: { title: string; href: string }[];
}) {
  if (!items.length) return null;
  return (
    <section className="related-block">
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>
              {item.title}
              <FiArrowUpRight aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
