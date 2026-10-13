import { readFileSync, writeFileSync } from "node:fs";
import assert from "node:assert/strict";
const origin = process.env.CHECK_SITE_URL || "http://127.0.0.1:3001";
const read = (n) =>
  JSON.parse(readFileSync(new URL(`../src/data/${n}.json`, import.meta.url)));
const site = read("site");
const canonical = site.url;
const routes = [
  "/",
  "/about",
  "/appointment",
  "/contact",
  "/doctors",
  "/doctors/dr-syed-mozaffar",
  "/services",
  "/conditions",
  "/workshops",
  "/blog",
  "/privacy",
  ...read("services").map((x) => "/services/" + x.id),
  ...read("condition-pages").map((x) => "/conditions/" + x.id),
  ...read("workshops").map((x) => "/workshops/" + x.id),
  ...read("articles").map((x) => "/blog/" + x.id),
];
const attrs = (tag) =>
  Object.fromEntries(
    [...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map((m) => [m[1], m[2]]),
  );
const htmlByRoute = new Map(),
  titles = new Set(),
  descriptions = new Set(),
  images = new Set(),
  results = [];
for (const route of routes) {
  const response = await fetch(origin + route);
  assert.equal(response.status, 200, route);
  const html = await response.text();
  htmlByRoute.set(route, html);
  assert.equal(
    [...html.matchAll(/<h1(?:\s[^>]*)?>/g)].length,
    1,
    `${route}: h1`,
  );
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  assert.ok(title, route);
  assert.ok(!titles.has(title), `${route}: duplicate title`);
  titles.add(title);
  const metas = [...html.matchAll(/<meta\b[^>]*>/g)].map((m) => attrs(m[0]));
  const desc = metas.find((x) => x.name === "description")?.content;
  assert.ok(desc, route);
  assert.ok(!descriptions.has(desc), `${route}: duplicate description`);
  descriptions.add(desc);
  const links = [...html.matchAll(/<link\b[^>]*>/g)].map((m) => attrs(m[0]));
  assert.equal(
    new URL(links.find((x) => x.rel === "canonical")?.href).href,
    new URL(canonical + route).href,
    `${route}: canonical`,
  );
  assert.equal(
    new URL(metas.find((x) => x.property === "og:url")?.content).href,
    new URL(canonical + route).href,
    `${route}: og:url`,
  );
  assert.ok(
    metas.find((x) => x.name === "twitter:title")?.content,
    `${route}: Twitter metadata`,
  );
  const schemas = [
    ...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs),
  ].map((m) => JSON.parse(m[1]));
  assert.ok(schemas.length, `${route}: schema`);
  for (const schema of schemas) {
    if (schema["@type"] === "FAQPage")
      for (const item of schema.mainEntity)
        assert.ok(
          html.includes(
            item.name.replaceAll("&", "&amp;").replaceAll("'", "&#x27;"),
          ) || html.includes(item.name),
          `${route}: FAQ visible`,
        );
  }
  assert.ok(html.includes(site.contact.phoneDial), `${route}: phone`);
  assert.ok(
    !/Niha Batool|60\+ Google|same-day confirmation/.test(html),
    `${route}: stale claim`,
  );
  for (const match of html.matchAll(/<img\b[^>]*>/g)) {
    const a = attrs(match[0]);
    assert.ok("alt" in a, `${route}: missing alt`);
    if (a.src?.startsWith("/")) images.add(a.src);
  }
  results.push({
    route,
    status: response.status,
    title,
    schemas: schemas.map((s) => s["@type"] || "Graph"),
  });
}
for (const [route, html] of htmlByRoute) {
  for (const m of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
    const href = m[1];
    if (!href.startsWith("/") && !href.startsWith("#")) continue;
    const url = new URL(href, origin + route);
    assert.ok(htmlByRoute.has(url.pathname), `${route}: broken link ${href}`);
    if (url.hash)
      assert.ok(
        htmlByRoute.get(url.pathname).includes(`id="${url.hash.slice(1)}"`),
        `${route}: missing anchor ${href}`,
      );
  }
}
for (const image of images) {
  const r = await fetch(origin + image);
  assert.equal(r.status, 200, `image ${image}`);
}
const sitemap = await (await fetch(origin + "/sitemap.xml")).text();
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
assert.deepEqual(new Set(urls), new Set(routes.map((r) => canonical + r)));
const robots = await (await fetch(origin + "/robots.txt")).text();
assert.ok(robots.includes(canonical + "/sitemap.xml"));
assert.ok(!robots.includes("Disallow: /\n"));
for (const redirect of read("redirects")) {
  const r = await fetch(origin + redirect.source, { redirect: "manual" });
  assert.equal(r.status, 301);
  assert.equal(
    new URL(r.headers.get("location"), origin).pathname,
    redirect.destination,
  );
}
for (const route of [
  "/does-not-exist",
  "/services/does-not-exist",
  "/conditions/does-not-exist",
  "/workshops/does-not-exist",
  "/blog/does-not-exist",
]) {
  const r = await fetch(origin + route);
  assert.equal(r.status, 404, route);
}
writeFileSync(
  new URL("../docs/route-verification.json", import.meta.url),
  JSON.stringify(
    {
      checkedAt: new Date().toISOString(),
      origin,
      routes: results,
      images: [...images],
      checks: [
        "200 routes",
        "unique titles/descriptions",
        "one h1",
        "canonical and OG/Twitter metadata",
        "valid JSON-LD",
        "internal links and anchors",
        "images",
        "sitemap/robots",
        "301 redirects",
        "404s",
      ],
    },
    null,
    2,
  ) + "\n",
);
console.log(
  `PASS: ${routes.length} routes, ${images.size} local images, all internal links, metadata, schema, sitemap, robots, redirects and 404s.`,
);
