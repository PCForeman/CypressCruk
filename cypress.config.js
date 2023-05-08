const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    baseUrl: "https://app.pws.int.cruk.org/support-us/your-donation",
    redirectionLimit: 10,
    retries: 2,
    viewportHeight: 1920,
    viewportWidth: 1080,
  },
});
