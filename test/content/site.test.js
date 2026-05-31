import { describe, it, expect } from "vitest";
import { site, skills, clients } from "@/lib/content/site";

describe("site config", () => {
  it("exposes identity + links", () => {
    expect(site.name).toBe("Nilesh Chhipa");
    expect(site.email).toBe("chhipanilesh1@gmail.com");
    expect(site.cvPath).toBe("/cv/Nilesh_Chhipa_Product_Designer.pdf");
  });
  it("has the hero skills list", () => {
    expect(skills).toContain("Design Systems");
    expect(skills).toContain("3D / Motion");
    expect(skills.length).toBeGreaterThanOrEqual(12);
  });
  it("lists marquee clients", () => {
    expect(clients).toEqual(
      expect.arrayContaining(["H&M", "Airbnb", "Gov. of Saudi Arabia", "Horizontal Digital"])
    );
  });
});
