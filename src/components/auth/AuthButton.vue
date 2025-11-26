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
    <div class="cart">
      <div class="cart__wrap-icon">
        <img class="cart__icon" src="@/assets/icons/user.svg" alt="" />
      </div>
      <div class="cart__wrap-icon">
        <img class="cart__icon" src="@/assets/icons/cart.svg" alt="" />
      </div>
    </div>
  </template>
</template>

<style lang="scss" scoped>
@use '@/styles/abstracts';
.auth-cta {
  display: flex;
}

.cart {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right: 10px;

  &__wrap-icon {
    width: 25px;
    cursor: pointer;
  }

  &__icon {
    width: 100%;
    height: 100%;
  }
}
</style>
