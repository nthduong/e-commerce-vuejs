<script setup>
import ProductSideBar from '@/components/sections/Product/ProductSideBar.vue'
</script>

<template>
  <div class="product">
    <div class="container">
      <div class="row">
        <div class="col-4">
          <product-side-bar />
        </div>
        <div class="col-8"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/abstracts';

.product {
  padding: 80px 0;
}
</style>
