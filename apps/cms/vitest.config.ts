import { resolve } from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@demo/shared": resolve(__dirname, "../../packages/shared/src/index.ts"),
    },
  },
  test: {
    name: "cms",
    include: ["src/**/*.test.ts"],
  },
});
