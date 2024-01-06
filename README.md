# [vue-pocketbase-template](https://vue-pocketbase-template.vercel.app)

**🚨Important Notes🚨**

You should probably just use [nuxt](https://nuxt.com/) or [vitesse](https://github.com/antfu/vitesse/tree/main) instead.

This template should help get you started developing with Vue 3 PWA in Vite, with [pocketbase](https://pocketbase.io) as backend. I've setup to deploy it on [fly.io](https://fly.io) but you can deploy it anywhere.

## Stack

### Base

- [Vue 3](https://vuejs.org)
- [Poacketbase](https://pocketbase.io)
- [Typescript](https://www.typescriptlang.org/)

### Router / State Management / Data Fetching

- [Vue Router](https://router.vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Vue Query](https://tanstack.com/query/v4)

### UI

- [Headless ui](https://headlessui.com)
- [Iconify](https://iconify.design)
- [Motion](https://motion.dev)

### CSS / Fonts

- [Tailwindcss](https://tailwindcss.com)
- [Inter](https://rsms.me/inter)

### DX Things

- [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages)
- [vite-plugin-vue-layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts)
- [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
- [Vue Macros](https://vue-macros.sxzz.moe)

### Miscellaneous

- [vite-plugin-pwa](https://vite-pwa-org.netlify.app/)
- [@vueuse/head](https://github.com/vueuse/head)
- [prettier](https://prettier.io)
- [eslint](https://eslint.org)

## Project Structure

- `backend`: backend contains all the backend code
- `backend/build`: contains all the build related files. Includes Dockerfile.
- `backend/cmd`: contains all the files that direclty provide commands to the program. This would also include the starting point for our app.
- `src`: contains all the front end source code
- `src/assets`: contains all the assets you want bundled via vite
- `src/components`: contains all the vue components
- `src/composables`: contains all the composables for the app
- `src/layouts`: contains all the layouts and it's components for the app
- `src/lib`: contains all the module level business logic
- `src/main`: main entry point for the app
- `src/pages`: contains all the top level page components for the app
- `src/stores`: contains pinia stores
- `src/symbols`: contains symbols to use via provide/inject vue api

## General Conventions

- `@` is root of your frontend source code. i.e. `./src`
- We use lot of plugins to provide us with nice dx while developing the app. It allows us to just focus on the core part of the app. So try to rely on them for most cases. i.e. you don't really need to import components, core apis, functions etc. It just works.

## Deploying

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) + [Go](https://marketplace.visualstudio.com/items?itemName=golang.Go)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

### Vue

```sh
pnpm install
```

### Pocketbase

```sh
cd backend
go mod tidy
```

<aside>
Note: You should also copy .env

```sh
cp .env.example .env
```

</aside>

### Compile and Hot-Reload for Development

### Vue

```sh
pnpm dev
```

### Pocketbase

```sh
cd backend
go run cmd/server/main.go serve
```

> Note that it doesn't hot reload. yet. I'll add a makefile later

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Pocketbase

```sh
cd backend
go build -o server cmd/server/*.go
```

If you're using flyctl (Highly Recommended!)

```sh
cd backend
flyctl deploy --dockerfile build/Dockerfile
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
