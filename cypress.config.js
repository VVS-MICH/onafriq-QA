const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportHeight: 1080,
    viewportWidth: 1920,
    baseUrl: "https://www.automationexercise.com/",
    // pageLoadTimeout: 150000,
    // defaultCommandTimeout: 20000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});