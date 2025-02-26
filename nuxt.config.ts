import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assests/css/tailwind.css'],

  modules: [
    '@pinia/nuxt',
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  compatibilityDate: '2025-02-26',
});