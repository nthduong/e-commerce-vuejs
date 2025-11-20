<script setup>
import { useRoute, useRouter } from 'vue-router'
import ProductSwiper from '@/components/sections/Product/ProductSwiper.vue'
import ProductItem from '@/components/sections/Product/ProductItem.vue'
import { useProduct } from '@/composables/useProduct'

const router = useRouter()
const route = useRoute()
const { NewProducts } = useProduct()

const goToDetail = (slug) => {
  router.push({
    name: 'product-detail',
    params: { categorySlug: route.params.categorySlug || 'all', productSlug: slug },
  })
}
</script>

<template>
  <div class="new-products">
    <div class="container">
      <product-swiper heading="New Products" :products="NewProducts" current="new-products">
        <template #item="{ product }">
          <product-item :product="product" @view-detail="goToDetail"/>
        </template>
      </product-swiper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/abstracts';

.new-products {
  padding-bottom: 80px;
}
</style>
