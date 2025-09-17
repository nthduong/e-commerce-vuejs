<script setup>
import ProductSideBar from '@/components/sections/Product/ProductSideBar.vue'
import ProductList from '@/components/sections/Product/ProductList.vue';
</script>

<template>
  <div class="product">
    <div class="container">
      <div class="row">
        <div class="col-3">
          <product-side-bar />
        </div>
        <div class="col-9">
          <product-list/>
        </div>
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
