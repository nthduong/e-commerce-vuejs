<script setup>
import ProductItem from './ProductItem.vue'
import { useProduct } from '@/composables/useProduct'

const { products } = useProduct()


</script>

<template>
  <div class="product-list">
    <div class="row row-cols-3 g-3">
      <div class="col" v-for="pizza in products" :key="pizza.id">
        <ProductItem :product="pizza" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/abstracts';
</style>
