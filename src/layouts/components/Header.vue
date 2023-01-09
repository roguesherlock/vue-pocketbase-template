<template>
  <header class="pointer-events-none relative z-50 flex flex-col">
    <div class="z-10 h-16 pt-6">
      <Container>
        <div class="relative flex gap-4">
          <div class="flex flex-1">
            <div class="h-9 w-9">
              <RouterLink to="/" aria-label="Home" class="pointer-events-auto">
                <img src="/favicons/pwa-512x512.png" alt="logo" />
              </RouterLink>
            </div>
          </div>
          <div class="flex flex-1 justify-end md:justify-center">
            <MobileNavigation class="pointer-events-auto md:hidden" />
            <DesktopNavigation class="pointer-events-auto hidden md:block" />
          </div>
          <div class="flex justify-end md:flex-1"></div>
        </div>
      </Container>
    </div>
  </header>
</template>
