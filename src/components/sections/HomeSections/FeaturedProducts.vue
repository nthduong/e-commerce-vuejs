<script setup>
import ProductSwiper from '@/components/products/ProductSwiper.vue'
import ProductItem from '@/components/products/ProductItem.vue'

// Components

// Composable
import { useProduct } from '@/composables/useProduct'
const { featuredProducts } = useProduct()

// Swiper refs
</script>

<template>
  <div class="featured-products">
    <div class="container">
      <product-swiper heading="Featured Products" :products="featuredProducts">
        <template #item="{ product }">
          <product-item :product="product"/>
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
