import { describe, it, expect, beforeEach, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { usePointerFine } from "@/lib/hooks/usePointerFine";

function mockMatchMedia(matches) {
  const removeEventListener = vi.fn();
  window.matchMedia = vi.fn().mockImplementation((query) => ({
    matches,
    media: query,
    addEventListener: vi.fn(),
    removeEventListener,
  }));
  return { removeEventListener };
}

describe("media hooks", () => {
  beforeEach(() => vi.restoreAllMocks());

  it("useReducedMotion reflects matchMedia (true)", () => {
    mockMatchMedia(true);
    const { result } = renderHook(() => useReducedMotion());
    expect(result.current).toBe(true);
  });

  it("usePointerFine reflects matchMedia (true)", () => {
    mockMatchMedia(true);
    const { result } = renderHook(() => usePointerFine());
    expect(result.current).toBe(true);
  });

  it("useReducedMotion returns false when matchMedia reports false", () => {
    mockMatchMedia(false);
    const { result } = renderHook(() => useReducedMotion());
    expect(result.current).toBe(false);
  });

  it("usePointerFine returns false when matchMedia reports false", () => {
    mockMatchMedia(false);
    const { result } = renderHook(() => usePointerFine());
    expect(result.current).toBe(false);
  });

  it("useReducedMotion removes its change listener on unmount", () => {
    const { removeEventListener } = mockMatchMedia(true);
    const { unmount } = renderHook(() => useReducedMotion());
    expect(removeEventListener).not.toHaveBeenCalled();
    unmount();
    expect(removeEventListener).toHaveBeenCalledTimes(1);
  });

  it("usePointerFine removes its change listener on unmount", () => {
    const { removeEventListener } = mockMatchMedia(true);
    const { unmount } = renderHook(() => usePointerFine());
    expect(removeEventListener).not.toHaveBeenCalled();
    unmount();
    expect(removeEventListener).toHaveBeenCalledTimes(1);
  });
});
