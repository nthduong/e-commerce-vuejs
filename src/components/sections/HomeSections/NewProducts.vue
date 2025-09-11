<script setup>
import ProductSwiper from '@/components/products/ProductSwiper.vue'


// Components

// Composable
import { useProduct } from '@/composables/useProduct'
const { NewProducts } = useProduct()

// Swiper refs
</script>

<template>
  <div class="new-products">
    <div class="container">
      <product-swiper heading="New Products" :products="NewProducts" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/abstracts';

.new-products {
  padding-bottom: 80px;
}
</style>
