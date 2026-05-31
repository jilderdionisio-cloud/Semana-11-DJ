export function formatPrice(cents: number) {
  return `$${(cents / 100).toFixed(2)}`
}

export function clamp(n: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, n))
}
