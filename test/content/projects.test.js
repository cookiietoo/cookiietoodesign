import { describe, it, expect } from "vitest";
import { projects, getAllProjects, getProjectBySlug, getNextProject } from "@/lib/content/projects";

describe("projects content", () => {
  it("includes the three marquee projects", () => {
    const slugs = getAllProjects().map((p) => p.slug);
    expect(slugs).toEqual(expect.arrayContaining(["saudi-electric", "hm", "airbnb"]));
  });
  it("looks up by slug", () => {
    const p = getProjectBySlug("hm");
    expect(p.client).toBe("H&M");
    expect(p.outcomes.some((o) => o.value.includes("8%"))).toBe(true);
  });
  it("returns undefined for unknown slug", () => {
    expect(getProjectBySlug("nope")).toBeUndefined();
  });
  it("wraps to the first project for next-after-last", () => {
    const last = getAllProjects().at(-1);
    const next = getNextProject(last.slug);
    expect(next.slug).toBe(getAllProjects()[0].slug);
  });
  it("every project has required fields", () => {
    for (const p of projects) {
      expect(p.slug && p.title && p.client && p.role && p.year).toBeTruthy();
      expect(Array.isArray(p.sections)).toBe(true);
      expect(Array.isArray(p.outcomes)).toBe(true);
    }
  });
});
