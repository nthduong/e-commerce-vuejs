<script setup>
import { NAV_ITEMS } from '@/constants/navbar'
import { ref } from 'vue'
import LogoMain from '@/components/common/LogoMain.vue'


const isShow = ref(false)

const ToggleSidebar = () => {
  isShow.value = !isShow.value
}
</script>

<template>
  <img src="@/assets/icons/menu.svg" alt="" class="d-none d-md-block" @click="ToggleSidebar" />

  <div class="navbar" :class="{ show: isShow }">
    <LogoMain />
    <img src="@/assets/icons/close.svg" alt="" class="icon" @click="ToggleSidebar" />
    <ul class="navbar__list">
      <li v-for="navItem in NAV_ITEMS" :key="navItem.id">
        <router-link :to="{ name: navItem.name }" class="navbar__link">{{
          navItem.label
        }}</router-link>
      </li>
    </ul>
  </div>

  <div class="overlay" :class="{ show: isShow }" @click="ToggleSidebar"></div>
</template>

<style lang="scss" scoped>
@use '@/styles/abstracts';

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

.icon {
  width: 24px;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
}
</style>
