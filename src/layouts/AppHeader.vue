<script setup>
import NavigationHeader from '@/components/navigation/NavigationHeader.vue'
import NavigationSidebar from '@/components/navigation/NavigationSidebar.vue'
import LogoMain from '@/components/common/LogoMain.vue'
</script>

<template>
  <div class="header">
    <div class="container">
      <div class="header__inner">
        <LogoMain />

        <NavigationHeader class="d-md-none" />

        <div class="header-cta d-md-none">
          <button class="btn btn--text btn--sm">Login</button>
          <button class="btn btn--sm">Sign Up</button>
        </div>
        <NavigationSidebar />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  background: var(--color-bg-primary);
  height: 108px;
  display: flex;
  justify-content: center;
  align-items: center;
  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.header-cta {
  display: flex;
}
</style>
