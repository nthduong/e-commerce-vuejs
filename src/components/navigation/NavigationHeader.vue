<script setup>
import { NAV_ITEMS } from '@/constants/navbar'
</script>

<template>
  <nav class="navbar">
    <ul class="navbar__list">
      <li v-for="navItem in NAV_ITEMS" :key="navItem.id">
        <router-link :to="{name: navItem.name}" class="navbar__link">{{ navItem.label }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  &__list {
    display: flex;
  }
  &__link {
    padding: 12px 24px;
  }
}
</style>
