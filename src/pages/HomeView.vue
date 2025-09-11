<script setup>
import HeroSection from '@/components/sections/HomeSections/HeroSection.vue'
import CategoriesSection from '@/components/sections/HomeSections/CategoriesSection.vue'
import FeaturedProducts from '@/components/sections/HomeSections/FeaturedProducts.vue'
import NewProducts from '@/components/sections/HomeSections/NewProducts.vue'

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
