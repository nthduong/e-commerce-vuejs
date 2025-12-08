<script setup>
import { useRouter } from 'vue-router'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { useToast } from 'vue-toastification'
import { useCart } from '@/composables/useCart'
import { TAX } from '@/config/tax.config'
import { useOder } from '@/composables/useOrder'
import { useAuth } from '@/composables/useAuth'

const router = useRouter()
const toast = useToast()
const { user } = useAuth()
const { getTotalItems, getTotalPrice, getVAT, getTotalWithVAT, clearAllItem } = useCart()
const { submitOrder } = useOder()

const schema = yup.object({
  name: yup.string().required('Please enter your name.'),
  email: yup.string().required('Please enter your email.').email('Invalid email.'),
  address: yup.string().required('Please enter your address.'),
  mote: yup.string(),
  phone: yup
    .string()
    .required('Please enter your phone.')
    .matches(/^0\d{9,10}$/, 'Invalid phone number'),
})

const { handleSubmit, submitCount } = useForm({
  validationSchema: schema,
})

const { value: fullName, errorMessage: nameError } = useField('name')
const { value: email, errorMessage: emailError } = useField('email')
const { value: phone, errorMessage: phoneError } = useField('phone')
const { value: address, errorMessage: addressError } = useField('address')
const { value: note, errorMessage: noteError } = useField('note')

const orderData = {
  userId: user.value?.id ?? null,
  status: 'pending',
  subtotal: getTotalPrice.value,
  tax: getVAT.value,
  total: getTotalWithVAT.value,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}

const onSubmit = handleSubmit(async (values) => {
  if (getTotalItems.value < 1) return

  const orderPayload = {
    order: orderData,
    shippingAddress: values,
  }

  const res = submitOrder(orderPayload)

  if (res) {
    toast.success('Order Placed Successfully!', { timeout: 5000 })
    clearAllItem()
    router.push({ name: 'home' })
  }
})
</script>

<template>
  <div class="check-out">
    <div class="container">
      <form @submit.prevent="onSubmit">
        <h1 class="check-out__heading">Check Out</h1>
        <div class="row">
          <div class="col-8 col-lg-12">
            <div class="check-out__table">
              <div class="auth__form">
                <div class="form__group"><h2 class="form__group-heading">Customer</h2></div>
                <div class="form__group">
                  <label class="form__label" for="check-out-name">Full Name</label>
                  <input
                    v-model="fullName"
                    type="text"
                    id="check-out-name"
                    class="form__input"
                    :class="{ 'input-error': submitCount > 0 && nameError }"
                    placeholder="name"
                  />
                  <span v-if="submitCount > 0 && nameError" class="error-text">{{
                    nameError
                  }}</span>
                </div>
              </div>
              <div class="form__group">
                <label class="form__label" for="check-out-phone">Phone</label>
                <input
                  v-model="phone"
                  type="text"
                  id="check-out-phone"
                  class="form__input"
                  :class="{ 'input-error': submitCount > 0 && phoneError }"
                  placeholder="phone"
                />
                <span v-if="submitCount > 0 && phoneError" class="error-text">{{
                  phoneError
                }}</span>
              </div>
              <div class="form__group">
                <label class="form__label" for="check-out-email">Email</label>
                <input
                  v-model="email"
                  type="text"
                  id="check-out-email"
                  class="form__input"
                  :class="{ 'input-error': submitCount > 0 && emailError }"
                  placeholder="email"
                />
                <span v-if="submitCount > 0 && emailError" class="error-text">{{
                  emailError
                }}</span>
              </div>
            </div>
            <div class="check-out__table">
              <div class="auth__form">
                <div class="form__group"><h2 class="form__group-heading">Deliver To</h2></div>
                <div class="form__group">
                  <label class="form__label" for="check-out-address">Address</label>
                  <input
                    v-model="address"
                    type="text"
                    id="check-out-address"
                    class="form__input"
                    :class="{ 'input-error': submitCount > 0 && addressError }"
                    placeholder="address"
                  />
                  <span v-if="submitCount > 0 && addressError" class="error-text">{{
                    addressError
                  }}</span>
                </div>
                <div class="form__group">
                  <label class="form__label" for="check-out-note">Order Notes</label>
                  <textarea
                    v-model="note"
                    type="text"
                    id="check-out-note"
                    class="form__input form__area"
                    :class="{ 'input-error': submitCount > 0 && noteError }"
                    placeholder="note"
                  />
                  <span v-if="submitCount > 0 && noteError" class="error-text">{{
                    noteError
                  }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4 col-lg-12">
            <div class="cart-info">
              <div class="cart-info__sub-wrap">
                <div class="cart-info__row">
                  <strong>Subtotal (items)</strong>
                  <strong>{{ getTotalItems }}</strong>
                </div>
                <div class="cart-info__row">
                  <strong>Price (Total)</strong>
                  <strong>${{ getTotalPrice }}</strong>
                </div>
                <div class="cart-info__row">
                  <strong>VAT({{ TAX.VAT_RATE * 100 }}%)</strong>
                  <strong>${{ getVAT }}</strong>
                </div>
                <div class="cart-info__sparater"></div>
                <div class="cart-info__row">
                  <strong>Estimated Total</strong>
                  <strong class="cart-info__price">${{ getTotalWithVAT }}</strong>
                </div>
                <button class="btn cart-info__btn" type="submit">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/abstracts';

.form__group-heading {
  font-size: 2.6rem;
  font-weight: 500;
  margin-bottom: 10px;
}

.check-out {
  padding: 80px 0;

  @include abstracts.screen(md) {
    padding: 50px 0;
  }

  &__heading {
    font-size: 3.2rem;
    font-weight: 600;
    line-height: 1;
    margin-bottom: 40px;
    text-align: center;
  }

  &__table {
    width: 100%;
    padding: 0 20px 20px 20px;
    box-shadow: var(--box-shadow);
    border: 1px solid var(--color-button-bg);
    border-radius: 20px;
    background: #fff;
  }

  &__table + &__table {
    margin-top: 30px;
  }
}

.cart-info {
  width: 100%;
  padding: 20px;
  box-shadow: var(--box-shadow);
  border: 1px solid var(--color-button-bg);
  border-radius: 20px;
  background: #fff;

  @include abstracts.screen(lg) {
    margin-top: 20px;
  }

  &__sub-wrap {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  &__row {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & strong {
      font-weight: 500;
    }
  }

  &__sparater {
    height: 1px;
    width: 100%;
    background: var(--color-border);
    margin: 5px 0;
  }

  &__price {
    font-size: 2.6rem;
    color: var(--color-button-bg);
  }

  &__btn {
    margin-top: 20px;
  }
}

.form__label {
  font-size: 1.6rem;
}
</style>
