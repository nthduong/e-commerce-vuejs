<script setup></script>

<template>
  <div class="auth">
    <div class="auth__content">
      <div class="auth__top">
        <div class="auth__heading">Welcome back</div>
        <div class="auth__desc">Login with your email and password</div>
      </div>

      <form class="auth__form" action="">
        <div class="form__group">
          <label class="form__label" for="login-email">Email</label>
          <input type="email" id="login-email" class="form__input" placeholder="email" />
        </div>
        <div class="form__group">
          <label class="form__label" for="login-password">Password</label>
          <input
            type="password"
            id="login-password"
            class="form__input"
            placeholder="password"
          />
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
            <img src="" alt="" />
            Login width Apple
          </button>
          <button class="auth__btn-oauth disable"><img src="" alt="" />Login width Google</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/abstracts';
</style>
