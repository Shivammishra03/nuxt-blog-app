<script lang="ts" setup>
import PostPreview from '~/components/posts/PostPreview.vue';

const props = defineProps({
  isAdmin: {
    type: Boolean,
    default: false
  },
  posts: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section class="posts-list">
    <PostPreview v-for="postsItems in props.posts" :key="postsItems.id" :id="postsItems.id" :is-admin="props.isAdmin" :title="postsItems.title" :previewText="postsItems.previewText" :thumbnail="postsItems.thumbnail"/>
  </section>
</template>

<style scoped>
.posts-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
