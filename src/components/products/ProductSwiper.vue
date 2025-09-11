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

// Swiper refs
const swiperInstance = ref(null)

const onSwiper = (swiper) => {
  swiperInstance.value = swiper
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

defineProps({
  products: {
    type: Object,
    required: true,
  },
  heading: {
    type: String,
    required: true,
    default: "Product"
  }
})
</script>

<template>
  <div class="product-top">
    <h2 class="product-heading">{{ heading }}</h2>
    <NavigationControls @prev="goPrev" @next="goNext" />
  </div>

  <Swiper
    :modules="[Navigation, Autoplay]"
    :slidesPerView="4"
    :spaceBetween="30"
    :speed="1500"
    :loop="true"
    @swiper="onSwiper"
  >
    <SwiperSlide v-for="product in products" :key="product.id">
      <div class="swiper-wrap">
        <ProductItem :product="product" />
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<style lang="scss" scoped>
@use '@/styles/abstracts';

.swiper-slide {
  height: 100%;
}

.swiper-wrap {
  padding: 6px 0;
  height: 100%;
}

.product-top {
  text-align: center;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.product-heading {
  color: var(--color-text-heading);
  text-align: center;
  font-size: 4.4rem;
  font-weight: 600;
  line-height: 1;
}
</style>
