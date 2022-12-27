<script setup lang="ts">
import NavLink from "./NavLink.vue"
import { ContainerOuter, ContainerInner } from "@/components/Container"
</script>
<template>
  <footer class="mt-32">
    <ContainerOuter>
      <div
        class="
          border-t border-neutral-100
          pt-10
          pb-16
          dark:border-neutral-700/40
        "
      >
        <ContainerInner>
          <div
            class="flex flex-col items-center justify-between gap-6 sm:flex-row"
          >
            <div
              class="
                flex
                gap-6
                text-sm
                font-medium
                text-neutral-800
                dark:text-neutral-200
              "
            >
              <NavLink href="/about">About</NavLink>
            </div>
            <p class="text-sm text-neutral-400 dark:text-neutral-500">
              &copy; {{ new Date().getFullYear() }} Akash. All rights reserved.
            </p>
          </div>
        </ContainerInner>
      </div>
    </ContainerOuter>
  </footer>
</template>
