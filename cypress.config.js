const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "9hsiyh",
  // ket: "64cfc106-94a4-4048-9b94-6e2ff4a0dbb0",
  video: true,
  videoCompression: 32,
  trashAssetsBeforeRuns: false,
  e2e: {
    baseUrl: "https://example.cypress.io",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
