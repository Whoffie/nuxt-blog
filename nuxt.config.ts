// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiHost: process.env.HANDLER_HOST,
      apiPort: process.env.HANDLER_PORT
    }
  },
  devtools: { enabled: true },
  css: ['./assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}, // tailwind dependency
    },
  }
})
