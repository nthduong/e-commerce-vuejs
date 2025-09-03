<script setup>
import HeroSection from '@/components/sections/HomeSection/HeroSection.vue'
import CategoriesSection from '@/components/sections/HomeSection/CategoriesSection.vue'
import StatsSection from '@/components/sections/HomeSection/StatsSection.vue'
import AboutSection from '@/components/sections/HomeSection/AboutSection.vue'
import FeaturesSection from '@/components/sections/HomeSection/FeaturesSection.vue'
import SubscribeSection from '@/components/sections/HomeSection/SubscribeSection.vue'
</script>

<template>
  <HeroSection />
  <CategoriesSection />
  <StatsSection class="stats-section" />
  <AboutSection />
  <FeaturesSection />
  <SubscribeSection />
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
