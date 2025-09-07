<script setup>
import { onMounted } from 'vue'
import { useProductStore } from '@/stores/productStore'

import ProductList from '@/components/products/ProductList.vue'

const productStore = useProductStore()

onMounted(() => {
  productStore.fetchProducts()
})
</script>

<template>
  <div class="featured-products">
    <div class="container">
      <div class="featured-products__top">
        <h2 class="featured-products__heading">Featured Products</h2>
      </div>
      <ProductList />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/abstracts';

.featured-products {
  padding-bottom:  160px;
  &__top {
    text-align: center;
    margin-bottom: 55px;
  }

  &__heading {
    color: var(--color-text-heading);
    text-align: center;
    font-size: 4.4rem;
    font-weight: 600;
    line-height: 1;
  }
}
</style>
