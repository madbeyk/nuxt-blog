<template>
  <div>
    <h1 class="text-4xl font-bold mb-4">Blog</h1>
    <ContentList path="/blog" v-slot="{ list }">
      <template v-if="list.length">
        <Transition name="fade" mode="out-in">
          <BlogPostList :list="list" />
        </Transition>
      </template>
      <template v-else>
        <SkeletonLoader />
      </template>
    </ContentList>
  </div>
</template>

<script setup>
import { BlogPostList } from '#components'
import SkeletonLoader from '~/components/SkeletonLoader.vue'
</script>