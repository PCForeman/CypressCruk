const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // implement node event listeners here
    baseUrl: "https://app.pws.int.cruk.org/support-us/your-donation",
    redirectionLimit: 10,
    retries: 0,
    viewportHeight: 1920,
    viewportWidth: 1080,
  },
});
