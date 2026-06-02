export function formatPrice(price: number): string {
  const a = 3;
  return `NT$ ${price.toLocaleString()}`;
}
