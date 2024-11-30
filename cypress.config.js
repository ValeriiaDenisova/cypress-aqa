const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      BASE_URL: 'https://www.saucedemo.com/',
      USER_NAME: 'standard_user',
      USER_PASSWORD: 'secret_sauce'
    },
    chromeWebSecurity: false, // Отключить функции безопасности Chrome
    experimentalSessionAndOrigin: true, // Включить поддержку сессий и кросс-доменных запросов
    defaultCommandTimeout: 10000, // Время ожидания команд
    viewportWidth: 1280,
    viewportHeight: 720,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: false
    },
    // specPattern: 'cypress/e2e/4-POM/testEnv.cy.js'
  },
});