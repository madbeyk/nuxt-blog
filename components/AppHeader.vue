<template>
  <header class="bg-white dark:bg-gray-800 shadow-sm">
    <nav class="container mx-auto px-4 py-3 flex justify-between items-center">
      <NuxtLink to="/" class="font-bold text-2xl text-gray-900 dark:text-white">Nuxt Blog</NuxtLink>
      <div class="flex items-center space-x-4">
        <NuxtLink
          to="/"
          class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          active-class="font-bold"
          >Home</NuxtLink
        >
        <NuxtLink
          to="/blog"
          class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          active-class="font-bold"
          >Blog</NuxtLink
        >
        <NuxtLink
          to="/about"
          class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          active-class="font-bold"
          >About</NuxtLink
        >
        <ColorModeToggle />
      </div>
    </nav>
  </header>
</template>
