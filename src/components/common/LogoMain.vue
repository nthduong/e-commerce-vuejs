<script setup></script>

<template>
  <router-link :to="{ name: 'home' }" class="logo">
    <img src="@/assets/images/logo-icon.svg" alt="PizzaRush" class="logo__main" />
    <span class="logo__text">PizzaRush</span>
  </router-link>
</template>

<style lang="scss" scoped>
@use '@/styles/abstracts';

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  padding-right: 12px;
  &__text {
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    color: var(--color-button-bg);
    @include abstracts.screen(md) {
      font-size: 2rem;
    }
  }
  &__main {
    width: 50px;
    @include abstracts.screen(md) {
      width: 45px;
    }
  }
}
</style>
