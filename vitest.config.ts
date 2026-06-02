import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    env: {
      TZ: 'Asia/Taipei',
    },
    projects: ['apps/*', 'packages/*'],
  },
})
