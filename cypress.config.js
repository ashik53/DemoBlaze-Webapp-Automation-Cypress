const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    url: "https://www.demoblaze.com"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/*.js'
  },
});
