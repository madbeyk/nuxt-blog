<template>
  <ClientOnly>
    <button @click="toggleColorMode" class="ml-4 p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
      {{ colorMode.value === 'dark' ? '🌙' : '☀️' }}
    </button>
  </ClientOnly>
</template>

<script setup>
const colorMode = useColorMode()

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>