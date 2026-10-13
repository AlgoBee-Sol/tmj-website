import Link from "next/link";
export default function NotFound() {
  return (
    <section className="section">
      <div className="container-page text-center">
        <p className="eyebrow">404 · Page not found</p>
        <h1 className="display-1 mt-5">Let’s get you back on track.</h1>
        <p className="lead mt-5">
          This page may have moved, or the address may be incomplete.
        </p>
        <nav
          aria-label="Helpful pages"
          className="flex flex-wrap justify-center gap-6 mt-8"
        >
          <Link className="text-link" href="/">
            Home →
          </Link>
          <Link className="text-link" href="/services">
            Services →
          </Link>
          <Link className="text-link" href="/conditions">
            Conditions →
          </Link>
          <Link className="text-link" href="/contact">
            Contact the clinic →
          </Link>
        </nav>
      </div>
    </section>
  );
}
