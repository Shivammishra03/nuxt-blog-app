<script lang="ts" setup>
import PostList from '~/components/posts/PostList.vue';
import AppButton from '~/components/ui/AppButton.vue';

definePageMeta({
  layout:'admin'
});

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
    <div class="admin-page">
        <section class="new-post">
            <AppButton @click="$router.push('/admin/new-post')">Create Post</AppButton>
        </section>
        <section class="existing-posts">
            <h1>Existing Posts</h1>
            <PostList :isAdmin="true" :posts="loadedPosts"/>
        </section>
    </div>
</template>

<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>