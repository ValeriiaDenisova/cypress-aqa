const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      BASE_URL: 'https://www.fake.com/',
      USER_NAME: 'problem_user',
      USER_PASSWORD: 'secret_sauce'
    },
    chromeWebSecurity: false, // Отключить функции безопасности Chrome
    experimentalSessionAndOrigin: true, // Включить поддержку сессий и кросс-доменных запросов
    defaultCommandTimeout: 10000, // Время ожидания команд
    viewportWidth: 1280,
    viewportHeight: 720,
    specPattern: 'cypress/e2e/4-POM/testEnv.cy.js'
  },
});