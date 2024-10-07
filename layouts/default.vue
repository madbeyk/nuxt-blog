<template>
  <div :class="{ 'dark': colorMode.value === 'dark' }" class="flex flex-col min-h-screen">
    <div class="flex-grow bg-gray-100 dark:bg-gray-900">
      <ClientOnly>
        <AppHeader />
      </ClientOnly>
      <main class="container mx-auto px-4 py-8">
        <PageLoader />
        <Transition name="fade" mode="out-in">
          <slot />
        </Transition>
      </main>
    </div>
    <ClientOnly>
      <AppFooter />
    </ClientOnly>
  </div>
</template>

<script setup>
import { useColorMode } from '@vueuse/core'
import PageLoader from '~/components/PageLoader.vue'

const colorMode = useColorMode()
</script>

<style>
@import '~/assets/css/transitions.css';
@import '~/assets/css/content.css';

body {
  @apply text-gray-900 dark:text-gray-100;
}
</style>