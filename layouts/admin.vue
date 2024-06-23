<template>
    <div>
        <slot />
    </div>
</template>
  
<script lang="ts" setup>
  import { ref } from 'vue';

  const displaySidenav = ref(false);
</script>
  
<style>
  html {
    font-family: 'Open Sans', sans-serif;
  
  }
  body {
    margin: 0;
  }
</style>