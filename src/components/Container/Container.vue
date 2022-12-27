<script setup lang="ts">
import ContainerOuter from "./ContainerOuter.vue"
import ContainerInner from "./ContainerInner.vue"
</script>
<template>
  <ContainerOuter v-bind="$attrs">
    <ContainerInner>
      <slot />
    </ContainerInner>
  </ContainerOuter>
</template>
