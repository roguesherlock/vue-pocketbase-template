<script setup lang="ts">
interface Props {
  title: string
  href?: string
}
defineProps<Props>()
</script>
<template>
  <li class="group relative flex flex-col items-start">
    <component
      :is="href ? 'a' : 'h3'"
      :href="href ? href : null"
      :target="href ? '_blank' : null"
      class="text-base font-semibold tracking-tight"
      :class="[
        href
          ? 'text-teal-400 hover:text-teal-500 hover:underline dark:text-teal-600 dark:hover:text-teal-700'
          : 'text-neutral-800 dark:text-neutral-100',
      ]"
    >
      {{ title }}
    </component>
    <p
      class="
        prose prose-teal
        relative
        z-10
        mt-2
        text-base text-neutral-600
        dark:text-neutral-400
      "
    >
      <slot />
    </p>
  </li>
</template>
