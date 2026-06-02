import { describe, expect, it } from "vitest";
import { formatPrice } from "./format-price";

describe("formatPrice", () => {
  it("formats price with NT$ prefix", () => {
    expect(formatPrice(1000)).toBe("NT$ 1,000");
  });

  it("handles zero", () => {
    expect(formatPrice(0)).toBe("NT$ 0");
  });
});
