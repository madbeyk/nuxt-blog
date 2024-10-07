<template>
  <div>
    <ContentDoc v-slot="{ doc }">
      <template v-if="doc">
        <h1 class="text-4xl font-bold mb-4">{{ doc.title }}</h1>
        <div class="prose dark:prose-invert max-w-none">
          <ContentRenderer :value="doc" />
        </div>
      </template>
      <template v-else>
        <SkeletonLoader />
      </template>
    </ContentDoc>
  </div>
</template>

<script setup>
import SkeletonLoader from '~/components/SkeletonLoader.vue'
</script>