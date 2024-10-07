<template>
  <ul>
    <li v-for="article in list" :key="article._path" class="mb-4">
      <ULink :to="article._path" class="text-xl font-semibold">{{ article.title }}</ULink>
      <p class="text-sm text-gray-600 dark:text-gray-400">{{ article.description }}</p>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  list: {
    type: Array,
    required: true
  }
})
</script>