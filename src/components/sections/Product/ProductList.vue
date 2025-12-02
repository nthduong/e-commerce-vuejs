<script setup>
import ProductItem from './ProductItem.vue'

defineProps({
  products: {
    type: Array,
    required: true
  }
})

</script>

<template>
  <div class="product-list">
    <div class="row row-cols-3 row-cols-lg-2 row-cols-sm-1 g-3">
      <div class="col" v-for="productItem in products" :key="productItem.id">
        <ProductItem :product="productItem" @view-detail="$emit('view-detail', $event)" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/abstracts';
</style>
