<script setup>
import ProductSwiper from '@/components/sections/Product/ProductSwiper.vue'
import ProductItem from '@/components/sections/Product/ProductItem.vue'

import { useProduct } from '@/composables/useProduct'
const { featuredProducts } = useProduct()

</script>

<template>
  <div class="featured-products">
    <div class="container">
      <product-swiper heading="Featured Products" :products="featuredProducts" current="featured-products">
        <template #item="{ product }">
          <product-item :product="product" />
        </template>
      </product-swiper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/abstracts';
.featured-products {
  padding-bottom: 80px;
}
</style>
