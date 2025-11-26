<script setup>
const prop = defineProps({
  isAuthenticated: Boolean,
  currentUser: Object,
  logout: Function,
})

console.log(prop.currentUser)
</script>

<template>
  <template v-if="!isAuthenticated">
    <div class="auth-cta">
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
      <div class="header-actions__wrap-icon">
        <img class="header-actions__icon" src="@/assets/icons/user.svg" alt="" />
      </div>
      <div class="header-actions__wrap-icon cart">
        <img class="header-actions__icon" src="@/assets/icons/cart.svg" alt="" />
        <span class="cart__count">2</span>
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
    cursor: pointer;
  }

  &__icon {
    width: 100%;
    height: 100%;
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
</style>
