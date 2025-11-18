<script setup>
import ProductItem from './ProductItem.vue'
import { useRoute } from 'vue-router'
import { useProduct } from '@/composables/useProduct'
import { watch } from 'vue';

const { productList,fetchProductList} = useProduct()
const route = useRoute()

watch(
  () => [route.params.categorySlug, route.query],
  () => {
    const params = {}

    if (route.params.categorySlug) {
      params.category = route.params.categorySlug
    }

    if (route.query.sort) {
      switch(route.query.sort) {
        case "featured":
          params._sort = "isFeatured"
          params._order = "desc"
          break
        case "new":
          params._sort = "isNew"
          params._order = "desc"
          break
        case "price_asc":
          params._sort = "price"
          params._order = "asc"
          break
        case "price_desc":
          params._sort = "price"
          params._order = "desc"
          break
      }
    }

    fetchProductList(params)
  },
  { immediate: true, deep: true }
)

</script>

<template>
  <div class="product-list">
    <div class="row row-cols-4 row-cols-lg-2 row-cols-sm-1 g-3">
      <div class="col" v-for="productItem in productList" :key="productItem.id">
        <ProductItem :product="productItem" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/abstracts';
</style>
