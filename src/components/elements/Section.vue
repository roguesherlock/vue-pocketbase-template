<script setup lang="ts">
interface Props {
  title?: string
}

defineProps<Props>()

const id = useId()
</script>
<template>
  <section
    :aria-labelledby="`${id}`"
    class="
      md:border-l md:border-neutral-100 md:pl-6 md:dark:border-neutral-700/40
    "
  >
    <div
      class="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4"
    >
      <h2
        :id="`${id}`"
        class="text-sm font-semibold text-neutral-800 dark:text-neutral-100"
      >
        {{ title }}
      </h2>
      <div class="md:col-span-3"><slot /></div>
    </div>
  </section>
</template>
