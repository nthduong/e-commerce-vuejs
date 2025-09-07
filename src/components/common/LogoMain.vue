<script setup></script>

<template>
  <router-link :to="{name: 'home'}" class="logo">
    <img src="@/assets/images/Logo-icon.svg" alt="PizzaRush" class="logo__main" />
    <span class="logo__text">PizzaRush</span>
  </router-link>
</template>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  &__text {
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    color: var(--color-button-bg);
  }
  &__main {
    width: 50px;
  }
}
</style>
