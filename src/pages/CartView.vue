<script setup>
import { useCart } from '@/composables/useCart'
import { useRouter, useRoute } from 'vue-router'
import QuantityStepper from '@/components/common/QuantityStepper.vue'
import { TAX } from '@/config/tax.config'
import { useAuth } from '@/composables/useAuth'
import { useToast } from 'vue-toastification'

const toast = useToast()
const route = useRoute()
const router = useRouter()
const { isAuthenticated } = useAuth()
const {
  cart,
  getTotalItems,
  getTotalPrice,
  getVAT,
  getTotalWithVAT,
  clearItemFromCart,
  clearAllItem,
} = useCart()

const goToDetail = (slug) => {
  router.push({
    name: 'product-detail',
    params: { categorySlug: 'all', productSlug: slug },
  })
}

const removeItemCart = (productId) => {
  clearItemFromCart(productId)
}

const removeAllItem = () => {
  clearAllItem()
}

const checkOut = () => {
  if (isAuthenticated.value) {
    router.push({ name: 'check-out' })
  } else {
    toast.info('Please log in to continue to checkout.')
    router.push({ name: 'login', query: { redirect: route.fullPath } })
  }
}
</script>

<template>
  <template v-if="getTotalItems > 0">
    <div class="cart">
      <div class="container">
        <h1 class="cart__heading">Your Cart</h1>
        <div class="row">
          <div class="col-8 col-lg-12">
            <div class="cart-table">
              <div class="cart-table__top d-md-none">
                <div class="cart-table__title flex-center">Product</div>
                <div class="cart-table__title flex-center">Quantity</div>
                <div class="cart-table__title flex-center">Price</div>
                <div
                  class="cart-table__title flex-center cart-table__delete"
                  @click="removeAllItem"
                >
                  <img src="@/assets/icons/trash.svg" alt="" />
                </div>
              </div>
              <div class="cart-table__list">
                <div v-for="item in cart" :key="item.id" class="cart-item">
                  <div class="cart-item__info">
                    <div class="cart-item__image-wrap" @click="goToDetail(item.slug)">
                      <img class="cart-item__image" :src="item.image" alt="" />
                    </div>
                    <div class="cart-item__info-right">
                      <div class="cart-item__name" @click="goToDetail(item.slug)">
                        {{ item.name }}
                      </div>
                      <div class="cart-item__desc line-clamp">{{ item.description }}</div>
                    </div>
                  </div>
                  <div class="cart-item__quantity flex-center">
                    <quantity-stepper v-model="item.quantity" size="md" />
                  </div>
                  <div class="cart-item__price flex-center">${{ item.price }}</div>
                  <div class="cart-item__delete flex-center" @click="removeItemCart(item.id)">
                    <img src="@/assets/icons/trash-gray.svg" alt="" />
                  </div>
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
                <button class="btn cart-info__btn" @click="checkOut">Continue to checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <template v-else>
    <div class="container">
      <div class="cart-empty">
        <div class="cart-empty__content">
          <figure class="cart-empty__img-wrap">
            <img class="cart-empty__img" src="@/assets/images/cart-empty.png" alt="" />
          </figure>
          <p class="cart-empty__title">Your cart is empty</p>
          <button class="btn cart-empty__btn" @click="$router.push({ name: 'product' })">
            Order now
          </button>
        </div>
      </div>
    </div>
  </template>
</template>

<style lang="scss" scoped>
@use '@/styles/abstracts';

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;

  @include abstracts.screen(md) {
    justify-content: flex-end;
  }
}

.cart {
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
}

.cart-table {
  width: 100%;
  padding: 20px 20px 0px 20px;
  box-shadow: var(--box-shadow);
  border: 1px solid var(--color-button-bg);
  border-radius: 20px;
  background: #fff;

  @include abstracts.screen(md) {
    padding: 0px 10px;
  }

  &__top {
    display: grid;
    grid-template-columns: 3fr 2fr 2fr 0.5fr;
  }

  &__title {
    font-size: 2rem;
    font-weight: 500;
    color: var(--color-text-heading);
    padding-bottom: 15px;
    border-bottom: 1px solid var(--color-border);
  }

  &__list {
    display: flex;
    flex-direction: column;
  }

  &__delete {
    cursor: pointer;
    &:hover img {
      filter: var(--color-icon);
    }
  }
}

.cart-item {
  position: relative;
  display: grid;
  padding: 20px 0;
  grid-template-columns: 3fr 2fr 2fr 0.5fr;

  @include abstracts.screen(md) {
    padding: 10px 0;
    grid-template-columns: 2fr 2fr 1fr 1fr;
    grid-template-areas:
      'aa aa cc dd'
      'aa aa bb bb';
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    height: 1px;
    width: 100%;
    background: var(--color-border);
  }

  &:last-child::before {
    content: none;
  }

  &__info {
    display: flex;
    align-items: center;
    gap: 15px;
    padding-right: 10px;
    @include abstracts.screen(md) {
      grid-area: aa;
      width: 100%;
    }
  }

  &__quantity {
    @include abstracts.screen(md) {
      grid-area: bb;
    }
  }

  &__price {
    @include abstracts.screen(md) {
      grid-area: cc;
    }
  }
  &__image-wrap {
    position: relative;
    width: 40%;
    padding-top: 30%;
    flex-shrink: 0;
    cursor: pointer;
    @include abstracts.screen(md) {
      width: 50%;
      padding-top: 40%;
    }
  }
  &__image {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 16px;
  }

  &__name {
    font-weight: 500;
    cursor: pointer;
  }

  &__desc {
    margin-top: 5px;
    font-size: 1.4rem;
    color: var(--color-text-desc);
  }

  &__delete {
    @include abstracts.screen(md) {
      grid-area: dd;
    }
    cursor: pointer;

    &:hover img {
      filter: var(--color-icon);
    }
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

.cart-empty {
  margin: 40px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &__content {
    text-align: center;
  }

  &__title {
    font-size: 3.2rem;
    font-weight: 500;
  }

  &__img-wrap {
    width: 100%;
  }
  &__img {
    width: 80%;
  }

  &__btn {
    margin-top: 20px;
    width: 300px;
    background: #e1830e;
  }
}
</style>
