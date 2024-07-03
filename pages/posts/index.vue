<script lang="ts" setup>
import PostList from '~/components/posts/PostList.vue';

const loadedPosts = ref([
  {
    id:'1', 
    title:'first post', 
    previewText: 'This is my first post', 
    thumbnail: 'https://images.unsplash.com/photo-1537884944318-390069bb8665?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id:'2', 
    title:'first post', 
    previewText: 'This is my first post', 
    thumbnail: 'https://images.unsplash.com/photo-1537884944318-390069bb8665?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id:'3', 
    title:'first post', 
    previewText: 'This is my first post', 
    thumbnail: 'https://images.unsplash.com/photo-1537884944318-390069bb8665?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
])


</script>

<template>
    <div class="posts-page">
        <PostList :posts="loadedPosts"/>
    </div>
</template>

<style scoped>
.posts-page {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
 