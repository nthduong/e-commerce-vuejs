<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { ref } from 'vue'

// Swiper CSS
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const props = defineProps({
  products: { type: Array, required: true },
  heading: { type: String, default: 'Product' },
  numberView: { type: Number, default: 4 },
  current: { type: String, default: '' },
})

// Swiper refs
const swiperInstance = ref(null)

const onSwiper = (swiper) => {
  swiperInstance.value = swiper
}

const swiperBreakpoints = {
  320: { slidesPerView: 1, spaceBetween: 10 },
  640: { slidesPerView: 2, spaceBetween: 20 },
  1024: { slidesPerView: 3, spaceBetween: 30 },
  1440: { slidesPerView: props.numberView, spaceBetween: 30 },
}

const navigationOptions = {
  nextEl: `.${props.current} .next`, // selector nút next
  prevEl: `.${props.current} .prev`, // selector nút prev
}

const paginationOptions = {
  clickable: true, // cho phép click vào pagination
}
</script>

<template>
  <div class="product-top">
    <h2 class="product-heading">{{ heading }}</h2>
    <div class="control">
      <button class="prev control__btn">
        <img class="control__img" src="@/assets/icons/prev.svg " alt="" />
      </button>
      <button class="next control__btn">
        <img class="control__img" src="@/assets/icons/next.svg" alt="" />
      </button>
    </div>
  </div>

  <Swiper
    :modules="[Navigation, Pagination, Autoplay]"
    :slidesPerView="numberView"
    :spaceBetween="30"
    :speed="1200"
    :breakpoints="swiperBreakpoints"
    :navigation="navigationOptions"
    :pagination="paginationOptions"
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

.control {
  display: flex;
  gap: 14px;
  &__btn {
    width: 50px;
    height: 50px;
    background: transparent;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--color-button-bg);
    transition: background 0.25s ease;
    @include abstracts.screen(md) {
      width: 36px;
      height: 36px;
    }

    &:hover {
      background: var(--color-button-bg);
    }
    &:hover .control__img {
      filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(101deg)
        brightness(102%) contrast(103%);
    }
  }
  &__img {
    width: 20px;
    transition: filter 0.25s ease;
  }
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
