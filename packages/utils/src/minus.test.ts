import { describe, expect, it } from "vitest";
import { minus } from "./minus";

describe("minus", () => {
  it("subtracts two numbers", () => {
    expect(minus(5, 2)).toBe(3);
  });
});
