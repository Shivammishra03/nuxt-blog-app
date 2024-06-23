<script lang="ts" setup>
import PostPreview from '~/components/posts/PostPreview.vue';

const props = defineProps({
  isAdmin: {
    type: Boolean,
    default: false
  }
})

</script>

<template>
    <section class="posts-list">
        <PostPreview id="1" :is-admin="props.isAdmin" title="Hello Tech," previewText="This is my first post" thumbnail="https://images.unsplash.com/photo-1537884944318-390069bb8665?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <PostPreview id="2" :is-admin="props.isAdmin" title="Hello Tech," previewText="This is my second post" thumbnail="https://images.unsplash.com/photo-1537884944318-390069bb8665?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <PostPreview id="3" :is-admin="props.isAdmin" title="Hello Tech," previewText="This is my third post" thumbnail="https://images.unsplash.com/photo-1537884944318-390069bb8665?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
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
