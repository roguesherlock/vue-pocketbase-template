import { fileURLToPath, URL } from "node:url"

import Layouts from "vite-plugin-vue-layouts"
import Pages from "vite-plugin-pages"
import AutoImport from "unplugin-auto-import/vite"
import Icons from "unplugin-icons/vite"
import IconsResolver from "unplugin-icons/resolver"
import { HeadlessUiResolver } from "unplugin-vue-components/resolvers"
import Components from "unplugin-vue-components/vite"
import { defineConfig } from "vite"
import Vue from "@vitejs/plugin-vue"
import VueMacros from "unplugin-vue-macros/vite"
import { VitePWA } from "vite-plugin-pwa"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // https://github.com/sxzz/unplugin-vue-macros
    VueMacros({
      plugins: {
        vue: Vue({
          reactivityTransform: true,
        }),
      },
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      extensions: ["vue"],
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ["vue", "vue-router", "vue/macros", "@vueuse/head"],
      dts: "src/auto-imports.d.ts",
      dirs: ["src/composables", "src/stores", "src/lib"],
      vueTemplate: true,
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      extensions: ["vue"],
      include: [/\.vue$/, /\.vue\?vue/],
      dirs: ["src/components", "src/layouts/components"],
      resolvers: [
        HeadlessUiResolver(),
        IconsResolver(),
        (componentName) => {
          // where `componentName` is always CapitalCase
          if (componentName === "Head")
            return { name: componentName, from: "@vueuse/head" }
        },
      ],
      dts: "src/components.d.ts",
    }),

    //https://github.com/antfu/unplugin-icons
    Icons({
      autoInstall: true,
    }),

    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        maximumFileSizeToCacheInBytes: 30000000, // ~30Mib
        globPatterns: ["**/*.{js,css,html,ico}"],
      },
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
      manifest: {
        name: "YOUR_APP_NAME",
        short_name: "YOUR_APP_SHORT_NAME",
        description: "YOUR_APP_DESCRIPTION",
        theme_color: "#000000",
        icons: [
          {
            src: "favicons/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "favicons/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "favicons/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
