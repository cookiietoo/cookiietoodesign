import "@testing-library/jest-dom";

// jsdom has no matchMedia; provide a default so components that read media
// queries can render in tests. Tests that need specific values reassign it.
if (typeof window !== "undefined" && !window.matchMedia) {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false,
  });
}
