<script setup>
import LogoMain from '@/components/common/LogoMain.vue'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { useAuth } from '@/composables/useAuth'
import { useRouter } from 'vue-router'

const router = useRouter()
const { register } = useAuth()

const schema = yup.object({
  name: yup.string().required('Vui lòng nhập tên'),
  email: yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
  password: yup.string().min(6, 'Tối thiểu 6 ký tự').required('Vui lòng nhập mật khẩu'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Mật khẩu xác nhận không khớp')
    .required('Vui lòng xác nhận mật khẩu'),
})

useForm({
  validationSchema: schema,
})

const { value: name, errorMessage: nameError } = useField('name')
const { value: email, errorMessage: emailError } = useField('email')
const { value: password, errorMessage: passwordError } = useField('password')
const { value: confirmPassword, errorMessage: confirmPasswordError } = useField('confirmPassword')

const onSubmit = async () => {
  const values = {
    name: name.value,
    email: email.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
  }
  const res = await register(values)
  if (res) {
    router.push({ name: 'login' })
  }
}
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

      <form class="auth__form" @submit.prevent="onSubmit">
        <div class="form__group">
          <label class="form__label" for="register-email">Username</label>
          <input v-model="name" type="text" id="register-name" class="form__input" placeholder="name" />
          <span class="error">{{ nameError }}</span>
        </div>
        <div class="form__group">
          <label class="form__label" for="register-email">Email</label>
          <input v-model="email" type="email" id="register-email" class="form__input" placeholder="email" />
          <span class="error">{{ emailError }}</span>
        </div>
        <div class="form__group">
          <label class="form__label" for="register-password">Password</label>
          <input
            v-model="password"
            type="password"
            id="register-password"
            class="form__input"
            placeholder="password"
          />
          <span class="error">{{ passwordError }}</span>

        </div>
        <div class="form__group">
          <label class="form__label" for="register-confirm-password">Confirm Password</label>
          <input
            v-model="confirmPassword"
            type="password"
            id="register-confirm-password"
            class="form__input"
            placeholder="Confirm your password"
          />
          <span class="error">{{ confirmPasswordError }}</span>

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
