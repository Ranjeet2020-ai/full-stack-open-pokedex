const { defineConfig } = require('@playwright/test')

module.exports = defineConfig({
  testDir: './e2e-tests',
  webServer: {
    command: 'PORT=3001 npm run start-prod',
    url: 'http://localhost:3001',
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: 'http://localhost:3001',
  },
})
