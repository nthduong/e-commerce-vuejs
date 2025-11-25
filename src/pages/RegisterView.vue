<script setup>
import LogoMain from '@/components/common/LogoMain.vue'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { useAuth } from '@/composables/useAuth'
import { useRouter } from 'vue-router'

const router = useRouter()
const { register } = useAuth()

const schema = yup.object({
  name: yup.string().required('Please enter your name.'),
  email: yup.string().required('Please enter your email.').email('Invalid email.'),
  password: yup.string().required('Please enter your password.').min(6, 'At least 6 characters.'),
  confirmPassword: yup
    .string()
    .test('confirm-password', 'Passwords do not match.', function (value) {
      if (!value) {
        return this.createError({ message: 'Please confirm your password.' })
      }
      if (value !== this.parent.password) {
        return this.createError({ message: 'Passwords do not match.' })
      }
      return true
    }),
})

const { handleSubmit, submitCount } = useForm({
  validationSchema: schema,
})

const { value: name, errorMessage: nameError  } = useField('name')
const { value: email, errorMessage: emailError } = useField('email')
const { value: password, errorMessage: passwordError } = useField('password')
const { value: confirmPassword, errorMessage: confirmPasswordError} = useField('confirmPassword')



const onSubmit = handleSubmit(async (values) => {
  const res = await register(values)
  if (res) {
    router.push({ name: 'login' })
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
        <div class="auth__heading">Create an account</div>
        <div class="auth__desc">Enter your details to register</div>
      </div>

      <form class="auth__form" @submit.prevent="onSubmit">
        <div class="form__group">
          <label class="form__label" for="register-email">Username</label>
          <input
            v-model="name"
            type="text"
            id="register-name"
            class="form__input"
            :class="{ 'input-error': submitCount > 0 && nameError}"
            placeholder="name"
          />
          <span v-if="submitCount > 0 && nameError" class="error-text">{{ nameError }}</span>
        </div>
        <div class="form__group">
          <label class="form__label" for="register-email">Email</label>
          <input
            v-model="email"
            type="text"
            id="register-email"
            class="form__input"
            :class="{ 'input-error': submitCount > 0 && emailError}"
            placeholder="email"
          />
          <span v-if="submitCount > 0 && emailError" class="error-text">{{ emailError }}</span>
        </div>
        <div class="form__group">
          <label class="form__label" for="register-password">Password</label>
          <input
            v-model="password"
            type="password"
            id="register-password"
            class="form__input"
            :class="{ 'input-error': submitCount > 0 && passwordError}"
            placeholder="password"
          />
          <span v-if="submitCount > 0 && passwordError" class="error-text">{{ passwordError }}</span>
        </div>
        <div class="form__group">
          <label class="form__label" for="register-confirm-password">Confirm Password</label>
          <input
            v-model="confirmPassword"
            type="password"
            id="register-confirm-password"
            class="form__input"
            :class="{ 'input-error': submitCount > 0 && confirmPasswordError}"
            placeholder="Confirm your password"
          />
          <span v-if="submitCount > 0 && confirmPasswordError" class="error-text">{{ confirmPasswordError }}</span>
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
            <img class="auth__oauth-img" src="@/assets/icons/google.svg" alt="Google logo" />Sign up
            with Google
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
