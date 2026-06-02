import { formatPrice } from "@demo/shared";

export function usePagePrice(price: number) {
  return {
    label: formatPrice(price),
  };
}
