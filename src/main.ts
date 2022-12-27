import { createApp } from "vue"
import { createPinia } from "pinia"
import { VueQueryPlugin } from "@tanstack/vue-query"
import { persistQueryClient } from "@tanstack/query-persist-client-core"
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister"
import type { VueQueryPluginOptions } from "@tanstack/vue-query"
import App from "@/App.vue"
import router from "@/router"
import { pb } from "@/lib"

import "./assets/main.css"
import "@/assets/tailwind.css"
import { pocketBaseSymbol } from "@/symbols/injectionSymbols"

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

app.use(createPinia())
app.use(router)
app.use(VueQueryPlugin, vueQueryOptions)
app.provide(pocketBaseSymbol, pb)

app.mount("#app")
