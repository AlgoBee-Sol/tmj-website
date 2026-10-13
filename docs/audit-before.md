# TMJ audit before redesign — 13 October 2026

- Next.js 16.2.10 App Router / React 19 / TypeScript / Tailwind 4. Existing OpenNext Cloudflare deployment retained; account configuration already changed before this task.
- Inspected app routes, shared components, JSON data, styles, asset inventory, metadata, forms, configuration and live homepage. Public URL inventory: `routes-before.json` (20 content URLs). No existing content URL needs removal.
- Baseline: `npm run lint`, `npx tsc --noEmit --incremental false`, and `npm run build` passed. No tests/test script present.
- Static rendering and local JSON already form a good foundation. Server components predominate; hydration is used for header/theme/map/form.
- Existing clinic WebP images are 36/92 KB; founder portrait 36 KB. Preserve them. No new stock or invented clinic photography needed.
- Contact data partly centralized, but hours conflict: Mon–Sat 09:00–21:00 in site data vs Saturday 10:00–18:00 in schema/FAQ/contact metadata.
- Six clinicians in source vs claims of four. Female names: Ulfat Zahra, Eman Fatima, Ayesha; FAQ additionally names Niha Batool. Do not choose a name without confirmation.
- Review data: 5.0, 63 exact reviews, 60+ label, no verified timestamp. Remove current-number assertions pending owner confirmation. Preserve original testimonial wording; two links are profile links, not individual videos.
- Workshops contain mismatched weekday/date labels and expired dates, but still solicit registration. Retain topic URLs; do not invent completion or upcoming status.
- Schema: invalid Physiotherapy entity type, mixed Person/Physician types, unsupported therapy properties, unconfirmed payment options, and nonexistent founder image `/images/doctors/doctor-1.jpg`.
- Titles/canonicals exist, but many pages inherit homepage social metadata. Breadcrumb schema often has no matching visible navigation. Sitemap invents a new lastModified on every build.
- Missing: condition detail routes, founder profile, blog, privacy information, custom 404, robust related-content graph.
- Forms: WhatsApp sends health details in query text; no length/phone checks, no accessible error summary, no retry link if popup blocked, EmailJS eagerly bundled. No server submission endpoint. EmailJS environment variables are absent locally. No analytics/tracker infrastructure detected.
- Mobile menu lacks modal semantics, Escape/focus management. Brand/navigation width and nowrap CTAs need 320px testing. WhatsApp green with white text and subtle text tokens need stronger contrast.
- Static founding year is inferred by subtracting a constant from current year, so it drifts. Several clinical and response-time promises are too absolute.
- No Chrome DevTools trace tool is available. Use actual browser responsive/console checks, HTTP route crawl and build artifacts; do not claim field Core Web Vitals scores.

## Implementation scope
Preserve Next.js/OpenNext and all original URLs. Add useful condition/service/profile/editorial routes, centralize factual approval state, implement restrained clinical design and meaningful validation. No deployment, GBP edits or new analytics account is required to implement the codebase redesign.
