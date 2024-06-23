<script lang="ts" setup>

definePageMeta({
  layout:'admin'
});

const loadedPost = ref({
    auther:'Shivam',
    title:'My awesome Posts',
    content:'super amazing, thanks for that!',
    thumbnailLink: 'https://images.unsplash.com/photo-1537884944318-390069bb8665?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
});

</script>

<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost"/>
        </section>
    </div>
</template>

<style>
.update-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
