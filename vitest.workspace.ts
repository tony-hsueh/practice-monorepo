import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
  "packages/shared/vitest.config.ts",
  "apps/pim/vitest.config.ts",
  "apps/cms/vitest.config.ts",
]);
