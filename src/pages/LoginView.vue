<script setup>
import LogoMain from '@/components/common/LogoMain.vue'
</script>

<template>
  <div class="header">
    <LogoMain />
  </div>
  <div class="auth">
    <div class="auth__content">
      <div class="auth__top">
        <div class="auth__heading">Welcome back</div>
        <div class="auth__desc">Login with your email and password</div>
      </div>

      <form class="auth__form" id="auth-form-login">
        <div class="form__group">
          <label class="form__label" for="login-email">Email</label>
          <input type="email" id="login-email" class="form__input" placeholder="email" />
        </div>
        <div class="form__group">
          <label class="form__label" for="login-password">Password</label>
          <input type="password" id="login-password" class="form__input" placeholder="password" />
        </div>
        <div class="form__group">
          <button class="auth__form-submit">Login</button>
        </div>
        <div class="auth__separation-wrap">
          <span class="auth__line"></span>
          <span class="auth__separation">Or continue with</span>
        </div>

        <div class="auth__oauth">
          <button class="auth__btn-oauth disable">
            <img class="auth__oauth-img" src="@/assets/icons/google.svg" alt="Google logo" />Login
            width Google
          </button>
        </div>
      </form>
      <p class="auth__bottom">
        Don't have an account?
        <router-link :to="{ name: 'register' }">Sign up</router-link>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/abstracts';
.header {
  position:fixed;
  left: 0;
  right: 0;
  background: transparent;
}
</style>
