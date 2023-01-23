// https://nuxt.com/docs/api/configuration/nuxt-config
import Eslint from "vite-plugin-eslint";
import Stylelint from "vite-plugin-stylelint";

export default defineNuxtConfig({
  typescript: {
    strict: true,
    typeCheck: true,
  },
  app: {
    // pageTransition: {
    //   name: "page-transition",
    // },
    head: {
      // TODO: og, seo meta
      meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
      script: [],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css",
        },
      ],
    },
  },
  css: ["@/assets/styles/main.scss"],
  vite: {
    plugins: [
      Eslint({
        fix: true,
      }),
      Stylelint({
        fix: true,
        include: [
          "assets/**/*.{css,less,scss,sass,vue}",
          "components/**/*.{css,less,scss,sass,vue}",
          "content/**/*.{css,less,scss,sass,vue}",
          "layouts/**/*.{css,less,scss,sass,vue}",
          "pages/**/*.{css,less,scss,sass,vue}",
          "server/**/*.{css,less,scss,sass,vue}",
          "src/**/*.{css,less,scss,sass,vue}",
          "styles/**/*.{css,less,scss,sass,vue}",
          "app.vue",
          "App.vue",
          "error.vue",
          "Error.vue",
        ],
        exclude: ["node_modules", ".nuxt", "dist"],
      }),
    ],
  },
});
