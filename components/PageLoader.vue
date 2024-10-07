<template>
  <div v-if="isLoading" class="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75">
    <div class="text-center">
      <div class="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900 dark:border-white"></div>
      <p class="mt-2 text-gray-700 dark:text-gray-300">Loading...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const isLoading = ref(false)
const router = useRouter()

const startLoading = () => {
  isLoading.value = true
}

const stopLoading = () => {
  isLoading.value = false
}

onMounted(() => {
  router.beforeEach(startLoading)
  router.afterEach(stopLoading)
})

onUnmounted(() => {
  router.beforeEach(() => {})
  router.afterEach(() => {})
})
</script>