<script setup lang="ts">
interface Props {
  href: string
}

defineProps<Props>()
</script>
<template>
  <RouterLink
    :to="href"
    class="transition hover:text-teal-500 dark:hover:text-teal-400"
  >
    <slot />
  </RouterLink>
</template>
