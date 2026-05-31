/** Offset to translate an element toward the pointer. */
export function magneticOffset(px, py, rect, strength = 0.4) {
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  return { x: (px - cx) * strength, y: (py - cy) * strength };
}
