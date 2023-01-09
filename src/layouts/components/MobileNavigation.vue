<template>
  <Popover>
    <PopoverButton
      class="
        group
        flex
        items-center
        rounded-full
        px-4
        py-2
        text-sm
        font-medium
        text-neutral-500
        shadow-lg shadow-neutral-800/5
        ring-2 ring-neutral-900/5 ring-offset-transparent
        backdrop-blur
        focus:outline-none focus:ring-offset-2
        dark:ring-white/10 dark:hover:ring-white/20
        sm:bg-white/90
        sm:text-neutral-800
        sm:ring-1
        sm:dark:bg-neutral-800/90
        sm:dark:text-neutral-200
      "
    >
      Menu
      <i-heroicons-chevron-down
        class="
          ml-3
          h-auto
          w-2
          stroke-neutral-500
          group-hover:stroke-neutral-700
          dark:group-hover:stroke-neutral-400
        "
      />
    </PopoverButton>
    <TransitionRoot>
      <TransitionChild
        as="template"
        enter="duration-150 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-150 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <PopoverOverlay
          class="
            fixed
            inset-0
            z-50
            bg-neutral-800/40
            backdrop-blur-sm
            dark:bg-black/80
          "
        />
      </TransitionChild>
      <TransitionChild
        as="template"
        enter="duration-150 ease-out"
        enter-from="opacity-0 scale-95"
        enter-to="opacity-100 scale-100"
        leave="duration-150 ease-in"
        leave-from="opacity-100 scale-100"
        leave-to="opacity-0 scale-95"
      >
        <PopoverPanel
          focus
          class="
            fixed
            inset-x-4
            top-8
            z-50
            origin-top
            rounded-3xl
            bg-neutral-800/50
            p-8
            ring-1 ring-neutral-900/5
            backdrop-blur-sm
            dark:ring-neutral-800
            sm:bg-white sm:dark:bg-neutral-900
          "
          v-slot="{ close }"
        >
          <div class="flex flex-row-reverse items-center justify-between">
            <PopoverButton
              aria-label="Close menu"
              class="
                -m-1
                rounded-full
                p-1
                focus:outline-none
                focus:ring-1
                focus:ring-neutral-800
                focus:ring-offset-2
                focus:ring-offset-neutral-900
              "
            >
              <i-heroicons-x-mark
                class="h-6 w-6 text-neutral-500 dark:text-neutral-400"
              />
            </PopoverButton>
            <h2
              class="text-sm font-medium text-neutral-600 dark:text-neutral-400"
            >
              Navigation
            </h2>
          </div>
          <nav class="mt-6">
            <ul
              class="
                -my-2
                divide-y divide-neutral-100
                text-base text-neutral-800
                dark:divide-neutral-100/5 dark:text-neutral-300
              "
            >
              <MobileNavItem href="/about" @click="close">About</MobileNavItem>
            </ul>
          </nav>
        </PopoverPanel>
      </TransitionChild>
    </TransitionRoot>
  </Popover>
</template>
