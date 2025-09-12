<script setup>
import AppHeader from "@/components/navigation/NavigationHeader.vue";
import AppFooter from "@/components/navigation/NavigationFooter.vue";
</script>

<template>
  <div>
    <AppHeader />
    <slot></slot>
    <AppFooter />
  </div>
</template>


