const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false, // Отключить функции безопасности Chrome
    experimentalSessionAndOrigin: true, // Включить поддержку сессий и кросс-доменных запросов
    defaultCommandTimeout: 10000, // Время ожидания команд
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});