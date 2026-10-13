import Link from "next/link";
import conditions from "@/data/condition-pages.json";
import { FiArrowUpRight } from "react-icons/fi";
export default function Conditions({ className = "" }: { className?: string }) {
  return (
    <section id="conditions" className={`section ${className}`}>
      <div className="container-page">
        <div className="section-intro">
          <div>
            <p className="eyebrow">Find your starting point</p>
            <h2 className="display-2 mt-4">
              What’s getting in
              <br className="hidden md:block" /> the way of your day?
            </h2>
          </div>
          <div>
            <p className="lead">
              Explore common problems we help people manage, from everyday aches
              to rehabilitation after injury.
            </p>
            <Link href="/conditions" className="text-link mt-5">
              All condition guides <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="condition-links">
          {conditions.slice(0, 8).map((c) => (
            <Link href={`/conditions/${c.id}`} key={c.id}>
              <span>{c.title}</span>
              <FiArrowUpRight aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
