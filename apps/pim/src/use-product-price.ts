import { formatPrice } from "@demo/shared";

export function useProductPrice(price: number) {
  return {
    display: formatPrice(price),
    raw: price,
  };
}
