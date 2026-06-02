import { describe, expect, it } from "vitest";
import { formatSlug } from "./format-slug";

describe("formatSlug (CMS)", () => {
  it("converts spaces to hyphens", () => {
    expect(formatSlug("Hello World")).toBe("hello-world");
  });

  it("removes special characters", () => {
    expect(formatSlug("Hello, World!")).toBe("hello-world");
  });

  it("trims whitespace", () => {
    expect(formatSlug("  my page  ")).toBe("my-page");
  });
});
