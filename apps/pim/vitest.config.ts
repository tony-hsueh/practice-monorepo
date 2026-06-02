import { resolve } from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      // 指向 shared 套件的原始碼，讓 vitest 能追蹤 import 相依圖
      "@demo/shared": resolve(__dirname, "../../packages/shared/src/index.ts"),
    },
  },
  test: {
    name: "pim",
    include: ["src/**/*.test.ts"],
  },
});
