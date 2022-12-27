import { createApp } from "vue"
import { createPinia } from "pinia"

import App from "./App.vue"
import router from "./router"
import { pb } from "@/lib"

import "./assets/main.css"
import "@/assets/tailwind.css"
import { pocketBaseSymbol } from "@/symbols/injectionSymbols"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.provide(pocketBaseSymbol, pb)

app.mount("#app")
