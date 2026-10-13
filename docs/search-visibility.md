# Search visibility

Production website: https://themuscularjunction.com/

## Technical configuration

- Every content page uses an explicit title containing the clinic name. The homepage title is **The Muscular Junction | Physiotherapy in Islamabad**. This avoids Next.js skipping the root layout title template for the homepage.
- The canonical website is HTTPS without `www`. Page metadata and the 43-page sitemap use this origin.
- `robots.txt` allows crawling and advertises `/sitemap.xml`; public content pages permit indexing.
- The public Google verification tag in `src/app/layout.tsx` supports the Search Console URL-prefix property `https://themuscularjunction.com/`. Keep the tag after verification. `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` can override it when intentionally changing verification; it is a public identifier, not a password.
- Clinic and website structured data identify The Muscular Junction and link the confirmed address, phone, hours, map and social profiles.

## Cloudflare redirects

The zone-level configuration below lives in Cloudflare, separately from the Worker configuration in `wrangler.jsonc`.

- Ruleset: `4db8a8d6d6b74aa8aa0deccc863a25e3`, **TMJ canonical website redirect**.
- Phase: `http_request_dynamic_redirect`.
- Rule reference: `tmj_canonical_https`.
- Match: `(http.host eq "www.themuscularjunction.com") or (http.host eq "themuscularjunction.com" and not ssl)`.
- Target: `concat("https://themuscularjunction.com", http.request.uri.path)` with status **301** and query strings preserved.
- DNS: proxied `A` record `www` → `192.0.2.1`, used only to route requests through Cloudflare's redirect rule. It is not an origin server.
- The rule does not match the clinic application's `app` subdomain.

## Search Console follow-up

1. Verify the public website property using its HTML tag.
2. Submit `https://themuscularjunction.com/sitemap.xml` once and monitor its processing status.
3. Inspect the homepage URL, run a live test, and request indexing if eligible.
4. Review Page indexing, Manual actions, Security issues and Performance once Google has data. An absent `site:` result is not conclusive proof of non-indexing.
5. Confirm the existing Google Business Profile uses the canonical website URL and the same clinic name, address, phone and opening hours. Link to the website from the clinic's social profiles.

The October 13, 2026 search observation showed anatomy results for the unqualified clinic name. That observation does not establish Google's indexing status or predict future rankings. Publication, valid metadata, verification and sitemap submission do not guarantee indexing or a first-page position.

References: [Google recrawl guidance](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl), [local ranking guidance](https://support.google.com/business/answer/7091), [Cloudflare redirect API](https://developers.cloudflare.com/rules/url-forwarding/single-redirects/create-api/).
