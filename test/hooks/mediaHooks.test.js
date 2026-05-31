import { describe, it, expect, beforeEach, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { usePointerFine } from "@/lib/hooks/usePointerFine";

function mockMatchMedia(matches) {
  window.matchMedia = vi.fn().mockImplementation((query) => ({
    matches,
    media: query,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  }));
}

describe("media hooks", () => {
  beforeEach(() => vi.restoreAllMocks());

  it("useReducedMotion reflects matchMedia", () => {
    mockMatchMedia(true);
    const { result } = renderHook(() => useReducedMotion());
    expect(result.current).toBe(true);
  });

  it("usePointerFine reflects matchMedia", () => {
    mockMatchMedia(true);
    const { result } = renderHook(() => usePointerFine());
    expect(result.current).toBe(true);
  });
});
