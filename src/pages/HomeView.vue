<script setup>
import HeroSection from '@/components/sections/Home/HeroSection.vue'
import CategoriesSection from '@/components/sections/Home/CategoriesSection.vue'
import FeaturedProducts from '@/components/sections/Home/FeaturedProducts.vue'
import NewProducts from '@/components/sections/Home/NewProducts.vue'

</script>

<template>
  <HeroSection />
  <CategoriesSection />
  <FeaturedProducts />
  <NewProducts/>
</template>

<style lang="scss" scoped>
@use '@/styles/abstracts';

.stats-section {
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  @include abstracts.screen(md) {
    position: initial;
    transform: initial;
    left: initial;
    margin-bottom: 70px;
  }
}
</style>
