<script lang="ts" setup>
import { ref ,} from 'vue';

const router = useRouter();

const editedPost = ref({
    auther: '',
    title: '',
    thumbnailLink: '',
    content: '',
});

const onSave = () => {
    console.log("dfghh");
};
const onCancle = () => {
    console.log("dfghh");
    router.push('/admin');
}
</script>

<template>
    <form action="" @submit.prevent="onSave">
        <UiAppControlInput v-model="editedPost.auther">Auther Name</UiAppControlInput>
        <UiAppControlInput v-model="editedPost.title">Title</UiAppControlInput>
        <UiAppControlInput v-model="editedPost.thumbnailLink">Thumbnail Link</UiAppControlInput>
        <UiAppControlInput control-type="textarea" v-model="editedPost.content">Content</UiAppControlInput>
        <UiAppButton type="submit">Save</UiAppButton>
        <UiAppButton type="button" style="margin-left: 10px;" btn-style="cancel" @click="onCancle">Cancle</UiAppButton>
    </form>
</template>
