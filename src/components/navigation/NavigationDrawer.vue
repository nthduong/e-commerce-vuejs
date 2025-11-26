<script setup>
import { NAV_ITEMS } from '@/config/navbar.config'
import { ref } from 'vue'
import LogoMain from '@/components/common/LogoMain.vue'

const isShow = ref(false)

const ToggleSidebar = () => {
  isShow.value = !isShow.value
}
</script>

<template>
  <button class="sidebarToggle d-none d-lg-block">
    <img src="@/assets/icons/menu.svg" alt="" class="sidebarToggle__img" @click="ToggleSidebar" />
  </button>

  <div class="navbar" :class="{ show: isShow }">
    <LogoMain />
    <img src="@/assets/icons/close.svg" alt="" class="navbar-icon" @click="ToggleSidebar" />
    <ul class="navbar__list">
      <li v-for="navItem in NAV_ITEMS" :key="navItem.id">
        <router-link :to="{ name: navItem.name }" class="navbar__link">{{
          navItem.label
        }}</router-link>
      </li>
    </ul>
    <span class="separation"></span>
    <ul>
      <li class="auth-cta">
        <router-link :to="{ name: 'login' }">Login</router-link>
      </li>
      <li class="auth-cta">
        <router-link :to="{ name: 'register' }">Sign Up</router-link>
      </li>
    </ul>
  </div>

  <div class="overlay" :class="{ show: isShow }" @click="ToggleSidebar"></div>
</template>

<style lang="scss" scoped>
@use '@/styles/abstracts';

.separation {
  display: block;
  height: 1px;
  width: 100%;
  margin: 10px 0;
  background: var(--color-border);
}

.auth-cta {
  display: block;
  padding: 12px 0;
  font-weight: 500;
  font-size: 1.8rem;
}

.navbar {
  z-index: 9;
  position: fixed;
  border-radius: 0px 20px 20px 0px;
  inset: 0 40% 0 0;
  padding: 40px 0;
  background: var(--color-bg-secondary);
  margin-left: 0;
  transition: transform 0.5s;
  transform: translateX(-100%);
  padding: 40px;

  @include abstracts.screen(sm) {
    inset: 0 20% 0 0;
  }

  &__list {
    margin-top: 20px;
  }

  &__link {
    display: block;
    padding: 12px 0;
    font-weight: 500;
    font-size: 1.8rem;
  }
}

.navbar.show {
  transform: translateX(0);
}

.overlay {
  position: fixed;
  inset: 0;
  z-index: 8;
  transition: opacity, visibility;
  transition-duration: 0.5s;
  background-color: rgba(0, 0, 0, 0.4);
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
}

.overlay.show {
  opacity: 1;
  visibility: visible;
}

.navbar-icon {
  width: 24px;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
}

.sidebarToggle {
  width: 25px;

  @include abstracts.screen(md) {
    width: 20px;
  }

  &__img {
    width: 100%;
    height: 100%;
  }
}
</style>
