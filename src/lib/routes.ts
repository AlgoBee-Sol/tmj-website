import services from "@/data/services.json";
import conditions from "@/data/condition-pages.json";
import workshops from "@/data/workshops.json";
import articles from "@/data/articles.json";
export const contentRoutes = [
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
  ...services.map((s) => `/services/${s.id}`),
  ...conditions.map((c) => `/conditions/${c.id}`),
  ...workshops.map((w) => `/workshops/${w.id}`),
  ...articles.map((a) => `/blog/${a.id}`),
];
