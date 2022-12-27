<script setup lang="ts">
import { computed } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()
const layoutComponent = computed(() => route.meta.layout ?? null)
</script>

<template>
  <Suspense>
    <Component :is="layoutComponent" />
  </Suspense>
</template>
