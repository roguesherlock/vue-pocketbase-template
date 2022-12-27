<script setup lang="ts">
import { Container } from "@/components/Container"
import { Head } from "@vueuse/head"

interface Props {
  title: string
  intro: string
}

defineProps<Props>()
</script>
<template>
  <Container class="mt-16 sm:mt-32">
    <Head>
      <title>{{ title }}</title>
      <meta name="description" :content="intro" />
      <slot name="head" />
    </Head>
    <header class="max-w-2xl">
      <h1
        class="
          text-4xl
          font-bold
          tracking-tight
          text-neutral-800
          dark:text-neutral-100
          sm:text-5xl
        "
      >
        {{ title }}
      </h1>
      <p class="mt-6 text-base text-neutral-600 dark:text-neutral-400">
        {{ intro }}
      </p>
    </header>
    <div class="mt-16 sm:mt-20"><slot /></div>
  </Container>
</template>
