<script setup>
import { computed } from "vue";
import { RouterView,useRoute } from 'vue-router'
import { DEFAULT_LAYOUT } from "@/constants/layouts";

const route = useRoute();
const layout = computed(() => (route.meta.layout || DEFAULT_LAYOUT) + "-layout");
</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<style scoped>

</style>
