import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import {
  validateAppointment,
  clinicToday,
  appointmentMessage,
} from "../src/lib/appointment.mjs";
import { workshopStatus } from "../src/lib/workshops.mjs";
const read = (name) =>
  JSON.parse(
    readFileSync(new URL(`../src/data/${name}.json`, import.meta.url)),
  );
const services = read("services"),
  conditions = read("condition-pages"),
  workshops = read("workshops"),
  articles = read("articles");
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
  ...services.map((x) => "/services/" + x.id),
  ...conditions.map((x) => "/conditions/" + x.id),
  ...workshops.map((x) => "/workshops/" + x.id),
  ...articles.map((x) => "/blog/" + x.id),
];
test("all original public URLs remain canonical and aliases cannot chain", () => {
  const old = JSON.parse(
    readFileSync(new URL("../docs/routes-before.json", import.meta.url)),
  );
  for (const route of old) assert.ok(routes.includes(route), route);
  const redirects = read("redirects");
  for (const r of redirects) {
    assert.equal(r.statusCode, 301);
    assert.ok(routes.includes(r.destination));
    assert.ok(!routes.includes(r.source));
    assert.ok(!redirects.some((x) => x.source === r.destination));
  }
  assert.equal(new Set(routes).size, routes.length);
});
test("related content graph resolves and local images exist", () => {
  for (const s of services)
    for (const id of s.conditionIds)
      assert.ok(
        conditions.some((c) => c.id === id),
        id,
      );
  for (const c of conditions) {
    for (const id of c.serviceIds)
      assert.ok(
        services.some((s) => s.id === id),
        id,
      );
    for (const id of c.relatedIds)
      assert.ok(
        conditions.some((x) => x.id === id),
        id,
      );
    assert.ok(c.seekHelp.length > 50);
    assert.ok(c.faqs.length);
  }
  for (const w of workshops)
    for (const id of w.serviceIds)
      assert.ok(
        services.some((s) => s.id === id),
        id,
      );
  for (const a of articles) {
    assert.ok(read("blog-categories").includes(a.category));
    for (const id of a.serviceIds) assert.ok(services.some((x) => x.id === id));
    for (const id of a.conditionIds)
      assert.ok(conditions.some((x) => x.id === id));
  }
  for (const item of [...read("doctors"), ...articles])
    if (item.image)
      assert.ok(
        existsSync(new URL("../public" + item.image, import.meta.url)),
        item.image,
      );
});
test("upcoming workshop status expires at the correct instant", () => {
  const w = workshops.find((w) => w.id === "mulligan-technique-october-2026");
  assert.equal(workshopStatus(w, new Date("2026-10-24T10:00:00Z")), "upcoming");
  assert.equal(
    workshopStatus(w, new Date("2026-10-25T05:00:00Z")),
    "in-progress",
  );
  assert.equal(workshopStatus(w, new Date("2026-10-25T09:00:01Z")), "past");
  assert.equal(workshopStatus(workshops[0]), "archive");
});
const valid = {
  name: "Test Patient",
  phone: "0339 6116665",
  date: "2026-10-20",
  time: "Afternoon",
  consent: true,
  company: "",
};
test("booking validation rejects invalid dates, phones and missing consent", () => {
  assert.deepEqual(validateAppointment(valid, "2026-10-13"), {});
  for (const value of [
    { ...valid, date: "2026-10-12" },
    { ...valid, date: "2026-02-30" },
    { ...valid, phone: "123" },
    { ...valid, phone: "abcdefghijk" },
    { ...valid, consent: false },
    { ...valid, name: "x" },
    { ...valid, time: "3am" },
  ])
    assert.ok(Object.keys(validateAppointment(value, "2026-10-13")).length);
});
test("Pakistan midnight is used and booking messages exclude clinical information", () => {
  assert.equal(clinicToday(new Date("2026-10-13T20:00:00Z")), "2026-10-14");
  const message = appointmentMessage({
    ...valid,
    medicalHistory: "PRIVATE",
    company: "BOT",
  });
  assert.ok(message.includes("Test Patient"));
  assert.ok(!message.includes("PRIVATE"));
  assert.ok(!message.includes("BOT"));
});
