<script setup>
import ProductItem from './ProductItem.vue'
import { useRoute } from 'vue-router'
import { useProduct } from '@/composables/useProduct'
import { watch } from 'vue';

const { products,fetchProducts } = useProduct()
const route = useRoute()

// Theo dõi cả params + query
watch(
  () => [route.params.categorySlug, route.query],
  () => {
    fetchProducts({
      category: route.params.categorySlug,
    });
  },
  { immediate: true }
);

</script>

<template>
  <div class="product-list">
    <div class="row row-cols-4 g-3">
      <div class="col" v-for="pizza in products" :key="pizza.id">
        <ProductItem :product="pizza" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/abstracts';
</style>
