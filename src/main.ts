import { createApp } from "vue"
import { createPinia } from "pinia"
import { VueQueryPlugin } from "@tanstack/vue-query"
import { persistQueryClient } from "@tanstack/query-persist-client-core"
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister"
import type { VueQueryPluginOptions } from "@tanstack/vue-query"
import App from "@/App.vue"
import { createRouter, createWebHistory } from "vue-router"
import { setupLayouts } from "virtual:generated-layouts"
import generatedRoutes from "virtual:generated-pages"
import { pocketBaseSymbol } from "@/symbols/injectionSymbols"
import { createHead } from "@vueuse/head"
import "@/assets/tailwind.css"
import "@fontsource/inter/variable.css"

const routes = setupLayouts(generatedRoutes)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

const vueQueryOptions: VueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        cacheTime: 1000 * 60 * 60 * 24, // 24 hours
        staleTime: 1000 * 60 * 5, // 5 minutes
      },
    },
  },
  clientPersister: (queryClient) => {
    return persistQueryClient({
      queryClient,
      persister: createSyncStoragePersister({ storage: localStorage }),
    })
  },
}

const app = createApp(App)

app.use(createHead())
app.use(createPinia())
app.use(router)
app.use(VueQueryPlugin, vueQueryOptions)
app.provide(pocketBaseSymbol, pb)

app.mount("#app")
