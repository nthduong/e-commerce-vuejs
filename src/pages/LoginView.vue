<script setup>
import LogoMain from '@/components/common/LogoMain.vue'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { useAuth } from '@/composables/useAuth'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const { login } = useAuth()

const schema = yup.object({
  email: yup.string().required('Please enter your email.').email('Invalid email.'),
  password: yup.string().required('Please enter your password.'),
})

const { handleSubmit, submitCount, setFieldError } = useForm({
  validationSchema: schema,
})

const { value: email, errorMessage: emailError } = useField('email')
const { value: password, errorMessage: passwordError } = useField('password')

const onSubmit = handleSubmit(async (value) => {
  try {
    const res = await login(value)

    if (res.success) {
      const redirect = route.query.redirect

      if (redirect) {
        router.push(redirect)
      } else {
        router.push({ name: 'home' })
      }
    } else {
      setFieldError('email', res.message)
      setFieldError('password', res.message)
    }
  } catch (error) {
    console.log(error)
  }
})
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

      <form class="auth__form" @submit.prevent="onSubmit">
        <div class="form__group">
          <label class="form__label" for="login-email">Email</label>
          <input
            v-model="email"
            type="text"
            id="login-email"
            class="form__input"
            :class="{ 'input-error': submitCount > 0 && emailError }"
            placeholder="email"
          />
          <span class="error-text" v-if="submitCount > 0 && emailError">{{ emailError }}</span>
        </div>
        <div class="form__group">
          <label class="form__label" for="login-password">Password</label>
          <input
            v-model="password"
            type="password"
            id="login-password"
            class="form__input"
            :class="{ 'input-error': submitCount > 0 && passwordError }"
            placeholder="password"
          />
          <span class="error-text" v-if="submitCount > 0 && passwordError">
            {{ passwordError }}
          </span>
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
        <router-link
          :to="{
            name: 'register',
            query: { redirect: $route.query.redirect },
          }"
          >Sign up</router-link
        >
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
