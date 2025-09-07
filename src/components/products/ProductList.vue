<script setup>
import { onMounted } from 'vue'
import ProductItem from './ProductItem.vue'
import { useProductStore } from '@/stores/productStore'

const productStore = useProductStore()

onMounted(() => {
  productStore.fetchProducts()
})
</script>

<template>
  <div class="product-list">
    <div class="row row-cols-4">
      <div class="col" v-for="pizza in productStore.products" :key="pizza.id">
        <ProductItem :product="pizza" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/abstracts';
</style>
