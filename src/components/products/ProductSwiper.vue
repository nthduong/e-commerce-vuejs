<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { ref } from 'vue'

// Swiper CSS
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// Components
import NavigationControls from '@/components/common/NavigationControls.vue'

const props = defineProps({
  products: { type: Array, required: true },
  heading: { type: String, default: 'Product' },
  numberView: { type: Number, default: 4 },
})

// Swiper refs
const swiperInstance = ref(null)

const onSwiper = (swiper) => {
  swiperInstance.value = swiper
}

const goPrev = () => {
    swiperInstance.value.slidePrev()
}

const goNext = () => {
    swiperInstance.value.slideNext()
}

const swiperBreakpoints = {
  320: { slidesPerView: 1, spaceBetween: 10 },
  640: { slidesPerView: 2, spaceBetween: 20 },
  1024: { slidesPerView: 3, spaceBetween: 30 },
  1440: { slidesPerView: props.numberView, spaceBetween: 30 },
}
</script>

<template>
  <div class="product-top">
    <h2 class="product-heading">{{ heading }}</h2>
    <NavigationControls @prev="goPrev" @next="goNext" class="d-md-none" />
  </div>

  <Swiper
    :modules="[Navigation, Pagination, Autoplay]"
    :slidesPerView="numberView"
    :spaceBetween="30"
    :speed="1200"
    :breakpoints="swiperBreakpoints"
    :pagination="{ clickable: true }"
    @swiper="onSwiper"
  >
    <SwiperSlide v-for="product in products" :key="product.id">
      <div class="swiper-wrap">
        <slot name="item" :product="product"></slot>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<style lang="scss" scoped>
@use '@/styles/abstracts';

.swiper {
  position: relative;
  padding-bottom: 30px;
}

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

  @include abstracts.screen(md) {
    margin-bottom: 30px;
  }
}

.product-heading {
  color: var(--color-text-heading);
  text-align: center;
  font-size: 4.4rem;
  font-weight: 600;
  line-height: 1;

  @include abstracts.screen(md) {
    font-size: 3.4rem;
  }
}
</style>
