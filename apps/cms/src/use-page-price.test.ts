import { describe, expect, it } from "vitest";
import { usePagePrice } from "./use-page-price";

describe("usePagePrice (CMS)", () => {
  it("returns formatted label", () => {
    const result = usePagePrice(500);
    expect(result.label).toBe("NT$ 500");
  });
});
