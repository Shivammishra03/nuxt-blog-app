<template>
  <div>
    <TheHeader @sidenavToggle=" displaySidenav = !displaySidenav "/>
    <TheSidenav :show="displaySidenav" @close="displaySidenav = false"/>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import TheHeader from '~/components/navigation/TheHeader.vue';
import TheSidenav from '~/components/navigation/TheSidenav.vue';

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