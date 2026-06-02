import { formatPrice } from "@demo/shared";
import { minus } from "@demo/utils";

export function useProductPrice(price: number) {
  minus(price, 10);
  return {
    display: formatPrice(price),
    raw: price,
  };
}
