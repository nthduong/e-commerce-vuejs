<script setup>
import NavigationHeader from '@/components/navigation/NavbarMenu.vue'
import NavigationSidebar from '@/components/navigation/NavigationDrawer.vue'
import LogoMain from '@/components/common/LogoMain.vue'
import AuthButton from '@/components/auth/AuthButton.vue'
</script>

<template>
  <div class="header">
    <div class="container">
      <div class="header__inner">
        <LogoMain />
        <NavigationHeader class="d-lg-none" />
        <AuthButton class="d-lg-none" />
        <NavigationSidebar />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/abstracts';
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
    background: #fff;
    border-radius: 999px;
    padding: 10px 14px;
    box-shadow: var(--box-shadow);

    @include abstracts.screen(lg) {
      background: initial;
      border-radius: initial;
      padding: initial;
      box-shadow: initial;
    }
  }
}
</style>
