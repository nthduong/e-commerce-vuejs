<script setup>
import { useRoute,useRouter } from 'vue-router'
import { ref, watch } from 'vue'
import ProductSideBar from '@/components/sections/Product/ProductSideBar.vue'
import ProductList from '@/components/sections/Product/ProductList.vue'
import { capitalizeFirstLetter } from '@/utils/string'

const route = useRoute()
const router = useRouter()
const category = ref(null)

watch(
  () => route.params.categorySlug,
  (newSlug) => {
    category.value = capitalizeFirstLetter(newSlug)
  },
  { immediate: true },
)

const sortBy = ref(route.query.sort || 'featured')

watch(sortBy, (newVal) => {
  router.replace({
    query: {
      ...route.query,
      sort: newVal || undefined, 
    }
  })
})
</script>

<template>
  <div class="product">
    <div class="container">
      <div class="row">
        <div class="col-3 col-lg-4 d-md-none">
          <product-side-bar />
        </div>
        <div class="col-9 col-lg-8 col-md-12">
          <div class="product__top">
            <p class="product__category">{{ route.params.categorySlug ? category : 'All' }}</p>
            <div class="product__select">
              <p class="product__text">Sort by:</p>
              <div class="select-wrapper">
                <el-select v-model="sortBy" placeholder="Sắp xếp sản phẩm" style="width: 180px">
                  <el-option label="Featured Products" value="featured"></el-option>
                  <el-option label="New Products" value="new"></el-option>
                  <el-option label="High Price" value="price_asc"></el-option>
                  <el-option label="Low Price" value="price_desc"></el-option>
                </el-select>
              </div>
            </div>
          </div>
          <product-list />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/abstracts';

.product {
  padding: 80px 0;

  &__top {
    margin-top: 5px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__category {
    font-weight: 600;
    font-size: 2.8rem;
  }

  &__select {
    display: flex;
    align-items: center;
    gap: 10px;
  }
}
</style>
