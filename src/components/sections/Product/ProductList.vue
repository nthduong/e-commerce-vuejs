<script setup>
import ProductItem from './ProductItem.vue'

defineProps({
  products: {
    type: Array,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
})
const skeletonItems = Array(6).fill(null)
</script>

<template>
  <div class="product-list">
    <div v-if="loading" class="row row-cols-3 row-cols-lg-2 row-cols-sm-1 g-3">
      <div class="col" v-for="i in skeletonItems" :key="`skeleton-${i}`">
        <div class="product-skeleton">
          <div class="product-skeleton__image"></div>
          <div class="product-skeleton__text"></div>
          <div class="product-skeleton__text product-skeleton__text--short"></div>
        </div>
      </div>
    </div>

    <div v-else-if="products.length" class="row row-cols-3 row-cols-lg-2 row-cols-sm-1 g-3">
      <div class="col" v-for="productItem in products" :key="productItem.id">
        <ProductItem 
          :product="productItem" 
          @view-detail="$emit('view-detail', $event)" 
        />
      </div>
    </div>

    <div v-else class="empty-message">No products available</div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/abstracts';


.product-skeleton {
  &__image {
    width: 100%;
    height: 250px;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
    border-radius: 12px;
  }

  &__text {
    height: 16px;
    margin-top: 12px;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
    border-radius: 4px;

    &--short {
      width: 60%;
    }
  }
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
</style>
