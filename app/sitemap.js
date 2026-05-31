import { getAllProjects } from "@/lib/content/projects";

const BASE = "https://cookiietoodesign.vercel.app";

export default function sitemap() {
  const routes = ["", "/about"].map((r) => ({ url: `${BASE}${r}`, priority: 1 }));
  const work = getAllProjects().map((p) => ({ url: `${BASE}/work/${p.slug}` }));
  return [...routes, ...work];
}
