<script setup lang="ts">
import Section from "@/components/elements/Section.vue"
</script>
<template>
  <Section>
    <ul role="list" class="space-y-16">
      <slot />
    </ul>
  </Section>
</template>
