<script setup>
import { useCart } from '@/composables/useCart'

const { getTotalItems } = useCart()
const prop = defineProps({
  isAuthenticated: Boolean,
  currentUser: Object,
  logout: Function,
})

const logOut = () => {
  prop.logout()
}

</script>

<template>
  <template v-if="!isAuthenticated">
    <div class="auth-cta d-lg-none" >
      <router-link :to="{ name: 'login' }"
        ><button class="btn btn--text btn--sm">Login</button></router-link
      >
      <router-link :to="{ name: 'register' }"
        ><button class="btn btn--sm btn--shadow">Sign Up</button></router-link
      >
    </div>
  </template>
  <template v-else>
    <div class="header-actions">
      <div class="header-actions__wrap-icon user">
        <img class="header-actions__icon" src="@/assets/icons/user.svg" alt="" />
        <div class="user__list">
          <div class="user__item">
            <img class="user__icon" src="@/assets/icons/profile.svg" alt="icon profile" />
            Profile
          </div>
          <div class="user__item">
            <img class="user__icon" src="@/assets/icons/setting.svg" alt="icon setting" />
            Setting
          </div>
          <div class="user__item" @click="logOut">
            <img class="user__icon" src="@/assets/icons/logout.svg" alt="icon logout" />
            Logout
          </div>
        </div>
      </div>
      <div class="header-actions__wrap-icon cart" @click="$router.push({ name: 'cart' })">
        <img class="header-actions__icon" src="@/assets/icons/cart.svg" alt="" />
        <span class="cart__count">{{ getTotalItems <= 99 ? getTotalItems : '99+' }}</span>
      </div>
    </div>
  </template>
</template>

<style lang="scss" scoped>
@use '@/styles/abstracts';
.auth-cta {
  display: flex;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right: 10px;

  &__wrap-icon {
    width: 28px;
  }

  &__icon {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
}

.cart {
  position: relative;

  &__count {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 10px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    top: -8px;
    right: -6px;
    background: var(--color-button-bg);
  }
}

.user {
  position: relative;

  &:hover &__list {
    opacity: 1;
    visibility: visible;
  }

  &__list {
    min-width: 150px;
    position: absolute;
    background: #fff;
    padding: 5px;
    top: 35px;
    right: 0;
    box-shadow: var(--box-shadow);
    border: 1px solid var(--auth-border);
    border-radius: 10px;
    opacity: 0;
    visibility: hidden;
    transition:
      opacity 0.25s ease,
      visibility 0.25s ease;
  }

  &__item {
    font-size: 14px;
    padding: 8px 12px;
    border-radius: 8px;
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 5px;
    user-select: none;
    cursor: pointer;
    &:hover {
      background: #f5f5f5;
    }
  }

  &__icon {
    width: 20px;
  }
}
</style>
