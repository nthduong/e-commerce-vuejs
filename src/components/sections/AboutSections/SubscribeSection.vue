<script setup>
import TextInput from '@/components/form/TextInput.vue'
</script>

<template>
  <div class="subscribe">
    <div class="container">
      <div class="subscribe__content">
        <h2 class="subscribe__title">Subscribe for hot pizza deals</h2>

        <p class="subscribe__desc">
          Get exclusive offers and updates on your favorite pizzas, straight to your inbox.
        </p>

        <form @submit.prevent="submitForm" class="subscribe__form">
          <text-input :border="false" placeholder="Enter your email"></text-input>
          <button class="btn btn--secondary">Subscribe</button>
        </form>
      </div>
    </div>

    <img src="@/assets/images/decor-sub.svg" alt="Pizza deals decoration" class="subscribe__decor" />
  </div>
</template>


<style lang="scss" scoped>
@use '@/styles/abstracts';
.subscribe {
  background: #952323;
  padding: 100px 0;
  position: relative;
  overflow: hidden;
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 1;
  }

  &__title {
    max-width: 500px;
    color: #fff;
    text-align: center;
    font-size: 4.4rem;
    font-weight: 600;
    line-height: 1;
    @include abstracts.screen(md) {
      font-size: 3.4rem;
    }
  }

  &__desc {
    max-width: 470px;
    margin-top: 18px;
    color: #fff;
    text-align: center;
    font-size: 1.8rem;
    line-height: 166.667%;
    @include abstracts.screen(md) {
      font-size: 1.6rem;
    }
  }
  &__form {
    width: 570px;
    margin-top: 38px;
    display: flex;
    gap: 20px;

    @include abstracts.screen(md) {
      flex-direction: column;
      gap: 12px;
      width: 100%;
    }
  }

  &__decor {
    position: absolute;
    height: 100%;
    top: 0;
    right: 50%;
    transform: translateX(50%);
    filter: brightness(0) saturate(100%) invert(17%) sepia(58%) saturate(2446%) hue-rotate(341deg) brightness(100%) contrast(93%);
  }
}

</style>
