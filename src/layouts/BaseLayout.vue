<script setup lang="ts">
import Footer from "./components/Footer.vue"
import Header from "./components/Header.vue"
import { RouterView } from "vue-router"
</script>

<template>
  <div class="fixed inset-0 flex justify-center sm:px-8">
    <div class="hidden w-full max-w-7xl sm:flex lg:px-8">
      <div
        class="
          w-full
          bg-white
          ring-1 ring-neutral-100
          dark:bg-neutral-900 dark:ring-neutral-300/20
        "
      />
    </div>
    <div
      class="
        fixed
        inset-0
        z-50
        bg-neutral-800/40
        backdrop-blur-[1px]
        dark:bg-black/60
        sm:hidden
      "
    ></div>
  </div>
  <div class="relative">
    <Header />
    <main>
      <RouterView />
    </main>
    <Footer />
  </div>
</template>
