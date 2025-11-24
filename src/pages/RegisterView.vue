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
        <div class="auth__heading">Create an account</div>
        <div class="auth__desc">Enter your details to register</div>
      </div>

      <form class="auth__form" id="auth-form-register">
        <div class="form__group">
          <label class="form__label" for="register-email">Username</label>
          <input type="text" id="register-name" class="form__input" placeholder="name" />
        </div>
        <div class="form__group">
          <label class="form__label" for="register-email">Email</label>
          <input type="email" id="register-email" class="form__input" placeholder="email" />
        </div>
        <div class="form__group">
          <label class="form__label" for="register-password">Password</label>
          <input
            type="password"
            id="register-password"
            class="form__input"
            placeholder="password"
          />
        </div>
        <div class="form__group">
          <label class="form__label" for="register-confirm-password">Confirm Password</label>
          <input
            type="password"
            id="register-confirm-password"
            class="form__input"
            placeholder="Confirm your password"
          />
        </div>
        <div class="form__group">
          <button class="auth__form-submit">Create Account</button>
        </div>
        <div class="auth__separation-wrap">
          <span class="auth__line"></span>
          <span class="auth__separation">Or continue with</span>
        </div>

        <div class="auth__oauth">
          <button class="auth__btn-oauth disable">
            <img class="auth__oauth-img" src="@/assets/icons/google.svg" alt="Google logo" />Sing up
            width Google
          </button>
        </div>
      </form>
      <p class="auth__bottom">
        Already have an account?
        <router-link :to="{ name: 'login' }">Sign in</router-link>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/abstracts';
.header {
  position: fixed;
  left: 0;
  right: 0;
  background: transparent;
}
</style>
