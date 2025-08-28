<script setup></script>

<template>
  <nav class="navbar">
    <ul class="navbar__list">
      <li class="navbar__item">
        <a href="#!">Home</a>
      </li>
      <li class="navbar__item">
        <a href="#!">About</a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  &__list {
    display: flex;
  }
  &__item {
    padding: 12px 24px;
  }
}
</style>
