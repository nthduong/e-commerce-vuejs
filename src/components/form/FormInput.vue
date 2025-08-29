<script setup>
// import BaseButton from '@/components/common/BaseButton.vue'
import TextInput from '@/components/form/TextInput.vue'
</script>

<template>
  <div class="form-input">
    <text-input placeholder="Location or zip code">
      <template #icon>
        <img src="@/assets/icons/location.svg" alt="location icon" />
      </template>
    </text-input>
    <!-- <base-button>Explore</base-button> -->
     <button class="btn btn-primary">Explore</button>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/abstracts';

.form-input {
  display: flex;
  gap: 16px;
  
  @include abstracts.screen(md) {
    flex-direction: column;
    gap: 12px;
  }
}
</style>
