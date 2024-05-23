export default defineNuxtConfig({
  ssr: false,
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  components: [
    { path: "~/components/layouts", prefix: "Layout" },
    "~/components",
  ],
  modules: ["@nuxt/ui", "@nuxtjs/i18n", "@nuxtjs/tailwindcss"],
  css: ["~/assets/css/main.css"],
  ui: {
    icons: ["solar", "material-symbols", "twemoji"],
  },
  colorMode: {
    preference: "light",
  },
  devtools: { enabled: false },
  i18n: {
    defaultLocale: "en",
    locales: [
      {
        name: "Khmer",
        code: "kh",
        file: "lang/kh.json",
      },
      {
        name: "English",
        code: "en",
        file: "lang/en.json",
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "lang",
      alwaysRedirect: true,
      fallbackLocale: "en",
    },
  },
});
