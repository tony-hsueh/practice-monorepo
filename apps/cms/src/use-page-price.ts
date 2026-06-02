import { formatPrice } from "@demo/shared";
import { minus } from "@demo/utils/minus";

export function usePagePrice(price: number) {
  minus(5, 2);
  return {
    label: formatPrice(price),
  };
}
