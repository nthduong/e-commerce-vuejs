<script setup>
import { onMounted, computed } from 'vue'
import { useProduct } from '@/composables/useProduct'
import { useCart } from '@/composables/useCart'
import { useToast } from 'vue-toastification'
import QuantityStepper from '@/components/common/QuantityStepper.vue'

const toast = useToast()

const props = defineProps(['productSlug'])
const { productDetail, fetchDetail } = useProduct()
const { addToCart } = useCart()

onMounted(() => {
  fetchDetail(props.productSlug)
})

const productName = computed(() => productDetail.value?.name || '')
const productDescription = computed(() => productDetail.value?.description || '')
const productPrice = computed(() => productDetail.value?.price || '')
const productImage = computed(() => productDetail.value?.image || 'images/products/placeholder.png')

const addProduct = () => {
  const result = addToCart(productDetail.value, 1)
  if (result) {
    toast.success('Product added to your cart.')
  } else {
    toast.error('Failed to add product to cart.')
  }
}
</script>

<template>
  <div class="product-detail">
    <div class="container">
      <div class="row">
        <div class="col-5 col-xl-6 col-lg-5 col-md-12">
          <div class="product-detail_preview">
            <figure class="product-detail__image-wrap">
              <img class="product-detail__image" :src="`/src/assets/${productImage}`" alt="" />
            </figure>
          </div>
        </div>
        <div class="col-7 col-xl-6 col-lg-7 col-md-12">
          <div class="product-detail__content">
            <h1 class="product-detail__heading">{{ productName }}</h1>
            <p class="product-detail__desc">
              {{ productDescription }}
            </p>
            <span class="product-detail__price">${{ productPrice }}</span>
            <div class="product-detail__cta-wrap">
              <quantity-stepper :quantity="1" />
              <button class="btn btn--md product-detail__cta" @click="addProduct">
                Add to card
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/abstracts';

.product-detail {
  padding: 80px 0;
  @include abstracts.screen(sm) {
    padding: 50px 0;
  }

  &__image-wrap {
    position: relative;
    width: 100%;
    padding-top: 80%;
    flex-shrink: 0;
    border: 1px solid var(--color-bg-primary);
    border-radius: 20px;
    overflow: hidden;
  }

  &__image {
    border-radius: 20px;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  &__content {
    display: flex;
    flex-direction: column;
    background: var(--color-bg-primary);
    height: 100%;
    padding: 60px;
    border-radius: 20px;

    @include abstracts.screen(lg) {
      padding: 30px;
    }

    @include abstracts.screen(md) {
      margin-top: 20px;
    }
  }

  &__heading {
    font-size: 3.2rem;
    font-weight: 500;
    color: var(--color-text-heading);

    @include abstracts.screen(xl) {
      font-size: 3rem;
    }
    @include abstracts.screen(lg) {
      font-size: 2.6rem;
    }
  }

  &__desc {
    margin-top: 20px;
    font-size: 1.8rem;
    color: var(--color-text-desc);

    @include abstracts.screen(xl) {
      font-size: 1.6rem;
    }
    @include abstracts.screen(lg) {
      margin-top: 12px;
      font-size: 1.2rem;
    }
  }

  &__price {
    display: block;
    font-size: 4.2rem;
    margin-top: 20px;
    font-weight: 500;
    color: var(--color-button-bg);

    @include abstracts.screen(xl) {
      font-size: 3.6rem;
    }
    @include abstracts.screen(lg) {
      margin-top: 12px;
      font-size: 3rem;
    }
  }

  &__cta-wrap {
    margin-top: 20px;
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    gap: 20px;
    @include abstracts.screen(lg) {
      margin-top: 12px;
    }
  }

  &__cta {
    // margin-top: auto;
    @include abstracts.screen(xl) {
      font-size: 1.4rem;
    }
    @include abstracts.screen(lg) {
      padding: 10px 24px;
    }
  }
}
</style>
