import { describe, it, expect } from "vitest";
import { magneticOffset } from "@/lib/motion/magnetic";

const rect = { left: 100, top: 100, width: 100, height: 40 }; // center 150,120

describe("magneticOffset", () => {
  it("is zero at the center", () => {
    expect(magneticOffset(150, 120, rect, 0.4)).toEqual({ x: 0, y: 0 });
  });
  it("pulls toward the pointer, scaled by strength", () => {
    const { x } = magneticOffset(200, 120, rect, 0.4); // 50px right of center
    expect(x).toBeCloseTo(20); // 50 * 0.4
  });
});
