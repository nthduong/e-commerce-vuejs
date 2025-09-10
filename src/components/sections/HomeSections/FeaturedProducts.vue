<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper/modules'
import { ref } from 'vue'

// Swiper CSS
import 'swiper/css'
import 'swiper/css/navigation'

// Components
import ProductItem from '@/components/products/ProductItem.vue'
import NavigationControls from '@/components/common/NavigationControls.vue'

// Composable
import { useProduct } from '@/composables/useProduct'
const { products } = useProduct()

// Swiper refs
const swiperInstance = ref(null)

const onSwiper = (swiper) => {
  swiperInstance.value = swiper
}

const onSlideChange = (swiper) => {
  console.log('Slide changed to index:', swiper.activeIndex)
}

const goPrev = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slidePrev()
  }
}

const goNext = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slideNext()
  }
}
</script>

<template>
  <div class="featured-products">
    <div class="container">
      <div class="featured-products__top">
        <h2 class="featured-products__heading">Featured Products</h2>
        <NavigationControls @prev="goPrev" @next="goNext" />
      </div>

      <Swiper
        :modules="[Navigation, Autoplay]"
        :slidesPerView="3"
        :spaceBetween="30"
        :speed="1500"
        :autoplay="{ delay: 3000 }"
        :loop="true"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <SwiperSlide v-for="product in products" :key="product.id">
          <div class="swiper-wrap">
            <ProductItem :product="product" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/abstracts';

.swiper-wrap {
  padding: 6px 0;
}

.featured-products {
  padding-bottom: 160px;
  &__top {
    text-align: center;
    margin-bottom: 55px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
