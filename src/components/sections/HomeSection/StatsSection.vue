<script setup></script>

<template>
  <div class="container">
    <div class="stats">
      <div class="stats__inner">
        <div class="stats__list">
          <div class="stats__item">
            <h3 class="stats__title">350+</h3>
            <p class="stats__text">Order per minute</p>
          </div>
          <div class="stats__item">
            <h3 class="stats__title">10x</h3>
            <p class="stats__text">Faster delivery</p>
          </div>
          <div class="stats__item">
            <h3 class="stats__title">10+</h3>
            <p class="stats__text">In Country</p>
          </div>
          <div class="stats__item">
            <h3 class="stats__title">99.9%</h3>
            <p class="stats__text">Order accuracy</p>
          </div>
        </div>
      </div>
      <img class="stats__decor-1" src="@/assets/images/stats-1.png" alt="" />
      <img class="stats__decor-2" src="@/assets/images/stats-2.png" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/abstracts';

.stats {
  border-radius: 12px;
  background: #191720;
  position: relative;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 55px;
    padding-bottom: 55px;

    @include abstracts.screen(md) {
      padding-top: 50px;
      padding-bottom: 50px;
    }
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 100px;
    row-gap: 50px;

    @include abstracts.screen(xl) {
      column-gap: 70px;
    }

    @include abstracts.screen(lg) {
      grid-template-columns: 1fr 1fr;
      column-gap: 140px;
    }

    @include abstracts.screen(md) {
      grid-template-columns: 1fr;
      row-gap: 20px;
    }
  }

  &__title {
    color: #fff;
    text-align: center;
    font-family: 'Roboto';
    font-size: 4.4rem;
    font-weight: 600;
    line-height: 1;
  }
  &__text {
    margin-top: 18px;
    color: #fff;
    text-align: center;
    font-size: 1.8rem;
    line-height: 166.667%;
  }

  &__decor-1 {
    position: absolute;
    top: 0;
    left: 0;
  }

  &__decor-2 {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);

    @include abstracts.screen(lg) {
      top: initial;
      bottom: 0;
    }
  }
}
</style>
