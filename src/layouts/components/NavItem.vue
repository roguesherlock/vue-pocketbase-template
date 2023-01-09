<script setup lang="ts">
interface Props {
  href: string
}

const props = defineProps<Props>()

const isActive = computed(() => useRoute().path === props.href)
</script>
<template>
  <li>
    <RouterLink
      :to="href"
      :class="[
        'relative block px-3 py-2 transition',
        isActive
          ? 'text-teal-500 dark:text-teal-400'
          : 'hover:text-teal-500 dark:hover:text-teal-400',
      ]"
    >
      <slot />
      <span
        v-if="isActive"
        class="
          absolute
          inset-x-1
          -bottom-px
          h-px
          bg-gradient-to-r
          from-teal-500/0
          via-teal-500/40
          to-teal-500/0
          dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0
        "
      />
    </RouterLink>
  </li>
</template>
