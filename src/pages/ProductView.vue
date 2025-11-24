<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ProductSideBar from '@/components/sections/Product/ProductSideBar.vue'
import ProductListComponent from '@/components/sections/Product/ProductList.vue'
import { useProduct } from '@/composables/useProduct'
import { capitalizeFirstLetter } from '@/utils/string'

const route = useRoute()
const router = useRouter()
const { productList, fetchProductList } = useProduct()

const category = ref(null)
const sortBy = ref(route.query.sort || 'featured')
const isShowCategory = ref(false)

watch(
  () => route.params.categorySlug,
  (slug) => {
    category.value = slug ? capitalizeFirstLetter(slug) : null
  },
  { immediate: true },
)

const buildParams = () => {
  const params = {}
  if (route.params.categorySlug) params.category = route.params.categorySlug

  switch (sortBy.value) {
    case 'featured':
      params._sort = 'isFeatured'
      params._order = 'desc'
      break
    case 'new':
      params._sort = 'isNew'
      params._order = 'desc'
      break
    // case 'price_asc':
    //   params._sort = 'price'
    //   params._order = 'asc'
    //   break
    case 'price_desc':
      params._sort = 'price'
      params._order = 'desc'
      break
  }
  return params
}

watch(
  () => [route.params.categorySlug, sortBy.value],
  () => fetchProductList(buildParams()),
  { immediate: true },
)

watch(sortBy, (value) => {
  router.replace({ query: { ...route.query, sort: value } })
})

const goToDetail = (slug) => {
  router.push({
    name: 'product-detail',
    params: { categorySlug: route.params.categorySlug || 'all', productSlug: slug },
  })
}

const ToggleCategory = () => {
  isShowCategory.value = !isShowCategory.value
}
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
            <div class="product__right">
              <div class="product__select">
                <p class="product__text">Sort by:</p>
                <div class="select-wrapper">
                  <el-select v-model="sortBy" placeholder="Sort products" style="width: 180px">
                    <el-option label="Featured Products" value="featured"></el-option>
                    <el-option label="New Products" value="new"></el-option>
                    <!-- <el-option label="High Price" value="price_asc"></el-option> -->
                    <el-option label="Low Price" value="price_desc"></el-option>
                  </el-select>
                </div>
              </div>
              <button class="category-toggle d-none d-md-block" @click="ToggleCategory">
                <img class="category-toggle__icon" src="@/assets/icons/list.svg" alt="" />
                <product-side-bar v-show="isShowCategory" class="category-toggle__item" />
              </button>
            </div>
          </div>
          <product-list-component
            v-if="productList.length"
            :products="productList"
            @view-detail="goToDetail"
          />
          <div v-else class="empty-message">No products available</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/abstracts';

.product {
  padding: 80px 0;
  @include abstracts.screen(sm) {
    padding: 50px 0;
  }

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

  &__right {
    display: flex;
    align-items: center;
    gap: 10px;
  }
}

.category-toggle {
  position: relative;
  &__icon {
    width: 30px;
  }

  &__item {
    top: 40px;
    right: 0;
    position: absolute;
    z-index: 1;
    width: 200px;
  }
}
</style>
