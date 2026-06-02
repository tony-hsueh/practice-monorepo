import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    name: 'cms',
    include: ['src/**/*.test.ts'],
  },
})
