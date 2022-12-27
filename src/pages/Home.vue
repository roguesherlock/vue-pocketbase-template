<script setup lang="ts">
import SimpleLayout from "@/layouts/SimpleLayout.vue"
import ToolsSection from "@/components/home/ToolsSection.vue"
import Tool from "@/components/home/Tool.vue"
</script>

<template>
  <SimpleLayout title="Home" intro="Vue 3 / Typescript / Pocketbase template">
    <div class="space-y-20">
      <ToolsSection title="Base">
        <Tool title="Vue 3" href="https://vuejs.org">
          <p>The Progressive JavaScript Framework</p>
          <p>
            I really like vue. It feels very intuitive to me personally. And I'm
            really able to be very productive in it.
          </p>
        </Tool>
        <Tool title="Pocketbase" href="https://pocketbase.io/"
          ><p>
            Open Source backend for your next SaaS and Mobile app in 1 file
          </p>
          <p>
            I've always wanted to learn golang. So pocketbase seemed like a such
            nice fit. Also, I really like the idea of having a backend in 1
            file.
          </p>
          <p>
            It has all the basic features I need. And I can easily customize it
            if I want!
          </p>
          <ul>
            <li>Realtime database</li>
            <li>Authentication</li>
            <li>File storage</li>
            <li>Admin dashboard</li>
          </ul>
        </Tool>
        <Tool title="Typescript" href="https://www.typescriptlang.org/">
          <p>TypeScript is JavaScript with syntax for types.</p>
          <p>
            I don't want to spend too much time here but let's just say
            typescript makes javascript more robust. Especially when working on
            a large codebase.
          </p>
        </Tool>
      </ToolsSection>
      <ToolsSection title="Router / State / Data Fetching">
        <Tool title="Vue Router" href="https://router.vuejs.org/">
          <p>The official router for Vue.js.</p>
          <p>I think it does the job well. No complaints</p>
        </Tool>
        <Tool title="Pinia" href="https://pinia.vuejs.org/">
          <p>The Vue Store that you will enjoy using</p>
        </Tool>
        <Tool title="Vue Query (Tanstack)" href="https://tanstack.com/query/v4">
          <p>Powerful asynchronous state management</p>
          <p>
            Toss out that granular state management, manual refetching and
            endless bowls of async-spaghetti code. TanStack Query gives you
            declarative, always-up-to-date auto-managed queries and mutations
            that directly improve both your developer and user experiences.
          </p>
          <p>
            I really love vue query. It has a very simple api behind powerful
            features!
          </p>
        </Tool>
      </ToolsSection>
      <ToolsSection title="UI">
        <Tool title="Headlessui" href="https://headlessui.com">
          <p>
            Completely unstyled, fully accessible UI components, designed to
            integrate beautifully with Tailwind CSS.
          </p>
        </Tool>
        <Tool title="Heroicons" href="https://heroicons.com/">
          <p>
            Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.
          </p>
        </Tool>
        <Tool title="Motion" href="https://motion.dev/">
          <p>
            A new animation library, built on the Web Animations API for the
            smallest filesize and the fastest performance.
          </p>
        </Tool>
      </ToolsSection>
      <ToolsSection title="Css / Fonts">
        <Tool title="Tailwind CSS" href="https://tailwindcss.com/">
          <p>Rapidly build modern websites without ever leaving your HTML.</p>
          <p>
            I know it's a bit of a hot topic right now but I just really love
            tailwind css. I love having my styles, markup and js right inside
            the component. And their api is so intuitive.
          </p>
          <p>
            Tailwind makes it very hard to make write bad css with it's nice
            loosely held abstractions on ui elements like colors, typography,
            padding, spacing, etc
          </p>
        </Tool>
        <Tool title="Inter" href="https://rsms.me/inter/">
          <p>
            Inter is a typeface carefully crafted & designed for computer
            screens.
          </p></Tool
        >
      </ToolsSection>
      <ToolsSection title="Miscellaneous">
        <Tool title="vite-plugin-pwa" href="https://vite-pwa-org.netlify.app/">
          <p>
            PWA integrations for Vite and the ecosystem Zero-config and
            framework-agnostic PWA Plugin for Vite
          </p>
        </Tool>
        <Tool title="@vueuse/head" href="https://github.com/vueuse/head/">
          <p>Super-charged document head management for Vue</p>
        </Tool>
        <Tool title="prettier" href="https://prettier.io/">
          <p>An opinionated code formatter</p>
        </Tool>
        <Tool title="eslint" href="https://eslint.org/"
          ><p>
            ESLint statically analyzes your code to quickly find problems. It is
            built into most text editors and you can run ESLint as part of your
            continuous integration pipeline.
          </p>
        </Tool>
      </ToolsSection>
    </div>
  </SimpleLayout>
</template>
