<script lang="ts" setup>
import { ref } from 'vue';
import AppButton from '../ui/AppButton.vue';
import AppControlInput from '../ui/AppControlInput.vue';

const router = useRouter();

const props = defineProps({
    post: {
        type: Object,
        required: false
    }
});

const editedPost = ref( props.post?{...props.post}:{
    auther: '',
    title: '',
    thumbnailLink: '',
    content: '',
});

const onSave = () => {
    console.log("dfghh", editedPost.value);
};
const onCancle = () => {
    console.log("dfghh");
    router.push('/admin');
}
</script>

<template>
    <form action="" @submit.prevent="onSave()">
        <AppControlInput v-model="editedPost.auther">Auther Name</AppControlInput>
        <AppControlInput v-model="editedPost.title">Title</AppControlInput>
        <AppControlInput v-model="editedPost.thumbnailLink">Thumbnail Link</AppControlInput>
        <AppControlInput control-type="textarea" v-model="editedPost.content">Content</AppControlInput>
        <AppButton type="submit">Save</AppButton>
        <AppButton type="button" style="margin-left: 10px;" btn-style="cancel" @click="onCancle()">Cancle</AppButton>
    </form>
</template>
