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
</style>
