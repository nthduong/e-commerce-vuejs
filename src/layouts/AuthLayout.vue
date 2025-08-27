<script setup>
import AppHeader from "@/layouts/AppHeader.vue";
import AppFooter from "@/layouts/AppFooter.vue";
</script>

<template>
  <div>
    <AppHeader />
    <slot></slot>
    <AppFooter />
  </div>
</template>
