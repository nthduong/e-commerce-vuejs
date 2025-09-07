<script setup>
import AboutSection from '@/components/sections/AboutSections/AboutSection.vue'
import StatsSection from '@/components/sections/AboutSections/StatsSection.vue'
import FeaturesSection from '@/components/sections/AboutSections/FeaturesSection.vue'
import SubscribeSection from '@/components/sections/AboutSections/SubscribeSection.vue'


</script>

<template>
  <AboutSection />
  <StatsSection class="stats-section" />
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
    margin-top: 70px;
    margin-bottom: 70px;
  }
}
</style>
