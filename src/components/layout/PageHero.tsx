interface PageHeroProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
}

export default function PageHero({ title, subtitle, eyebrow }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 text-white md:py-24">
      {/* Decorative blobs */}
      <div className="absolute right-[-6%] top-[-30%] h-[360px] w-[360px] animate-pulse-slow rounded-full bg-blue-500 opacity-20 mix-blend-multiply blur-3xl" />
      <div
        className="absolute bottom-[-40%] left-[-6%] h-[380px] w-[380px] animate-pulse-slow rounded-full bg-sky-600 opacity-20 mix-blend-multiply blur-3xl"
        style={{ animationDelay: "2s" }}
      />
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.08]" />

      <div className="container relative z-10 mx-auto max-w-3xl px-4 text-center md:px-6">
        {eyebrow && (
          <span className="mb-3 inline-block rounded-full border border-blue-500/30 bg-blue-800/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-300 backdrop-blur-sm">
            {eyebrow}
          </span>
        )}
        <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
