<script setup lang="ts">
import { RouterLink } from "vue-router"
interface Props {
  href: string
}
defineProps<Props>()
</script>

<template>
  <li>
    <PopoverButton :as="RouterLink" class="block py-2" :to="href">
      <slot />
    </PopoverButton>
  </li>
</template>
