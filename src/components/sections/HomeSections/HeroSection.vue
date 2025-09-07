<script setup>
import TextInput from '@/components/form/TextInput.vue'
</script>

<template>
  <header>
    <section class="hero">
      <div class="container">
        <div class="hero__inner">
          <div class="row">
            <div class="col-5 col-md-12">
              <section class="hero__content">
                <p class="hero__label">#Best Pizza</p>
                <h1 class="hero__heading">HOT PIZZA DELIVERED TO YOU</h1>
                <p class="hero__desc">
                  Hot, cheesy, and delicious pizza delivered straight to your door. Order now and satisfy your cravings!
                </p>
                <div class="hero__form">
                  <text-input placeholder="Location or zip code">
                    <template #icon>
                      <img src="@/assets/icons/location.svg" alt="location icon" />
                    </template>
                  </text-input>
                  <button class="btn">Order Now</button>
                </div>
                <!-- <div class="get-app">
                  <span class="get-app__text">Get our pizza app:</span>
                  <div class="get-app__list">
                    <a href="#!">
                      <img class="get-app__item" src="@/assets/icons/apple.svg" alt="" />
                    </a>
                  </div>
                </div> -->
              </section>
            </div>
            <div class="col-7 col-md-12">
              <div class="hero__media">
                <figure class="hero__media-wrap">
                  <img class="hero__img" src="@/assets/images/pizza4.png" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </header>
</template>

<style lang="scss" scoped>
@use '@/styles/abstracts';
.hero {
  background: var(--color-bg-primary);
  padding-top: 52px;
  padding-bottom: 100px;
  @include abstracts.screen(md) {
    padding-top: 30px;
  }
  &__inner {
    display: flex;
    align-items: center;
  }

  &__content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__label {
    color: var(--color-button-bg);
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 166.667%;
    letter-spacing: 3.6px;
    @include abstracts.screen(xl) {
      font-size: 1.6rem;
    }
  }

  &__heading {
    margin-top: 12px;
    font-size: 7.4rem;
    font-weight: 600;
    line-height: 1; /* 100% */
    @include abstracts.screen(xl) {
      font-size: 6.4rem;
    }
    @include abstracts.screen(lg) {
      font-size: 4.6rem;
    }
    @include abstracts.screen(md) {
      font-size: 4.6rem;
    }
  }

  &__desc {
    margin-top: 18px;
    font-size: 1.8rem;
    line-height: 166.667%; /* 166.667% */
    @include abstracts.screen(xl) {
      font-size: 1.6rem;
    }
    @include abstracts.screen(lg) {
      margin-top: 12px;
    }
  }

  &__form {
    margin-top: 38px;
    display: flex;
    gap: 16px;
    @include abstracts.screen(md) {
      margin-top: 30px;
      flex-direction: column;
      gap: 12px;
    }
  }

  &__media {
    margin-left: auto;
    height: 100%;
    display: flex;
    align-items: center;
    @include abstracts.screen(md) {
      margin-top: 50px;
    }
    &-wrap {
      width: 100%;
      object-fit: cover;
    }
  }
  &__img {
    width: 100%;
    height: auto;
    margin-left: 28px;
    @include abstracts.screen(md) {
      margin-left: initial;
    }
  }
}

.get-app {
  margin-top: 38px;
  gap: 16px;
  display: flex;
  align-items: center;
  @include abstracts.screen(md) {
    margin-top: 18px;
  }
  &__text {
    font-size: 2rem;
    font-weight: 700;
    line-height: 150%; /* 150% */
    @include abstracts.screen(xl) {
      font-size: 1.8rem;
    }
    @include abstracts.screen(lg) {
      font-size: 1.6rem;
    }
  }

  &__list {
    gap: 16px;
    display: flex;
    align-items: center;
  }

  &__item {
    width: 48px;
    height: 48px;
    flex-shrink: 0;

    @include abstracts.screen(xl) {
      width: 40px;
      height: 40px;
    }
  }
}
</style>
