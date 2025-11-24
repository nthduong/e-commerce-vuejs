<script setup></script>

<template>
  <div>
    <div class="auth-cta">
      <router-link :to="{ name: 'login' }"
        ><button class="btn btn--text btn--sm">Login</button></router-link
      >
      <router-link :to="{ name: 'register' }"><button class="btn btn--sm btn--shadow">Sign Up</button></router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/abstracts';
.auth-cta {
  display: flex;
}
</style>
