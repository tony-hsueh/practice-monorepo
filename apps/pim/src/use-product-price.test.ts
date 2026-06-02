import { describe, expect, it } from "vitest";
import { useProductPrice } from "./use-product-price";

describe("useProductPrice (PIM)", () => {
  it("returns formatted display price", () => {
    const result = useProductPrice(1999);
    expect(result.display).toBe("NT$ 1,999");
    expect(result.raw).toBe(1999);
  });
});
