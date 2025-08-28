<script setup></script>

<template>
  <header>
    <section class="hero">
      <div class="container">
        <div class="hero__inner">
          <div class="hero__content">
            <p class="hero__label">#The Best in Town</p>
            <h1 class="hero__heading">Get food delivery and more</h1>
            <p class="hero__desc">
              You want it. We get it. Food, drinks, groceries, and more available for delivery and
              pickup.
            </p>
            <div class="get-app">
              <span class="get-app__text">Get the app:</span>
              <div class="get-app__list">
                <a href="#!" class="get-app__item">
                  <img src="@/assets/icons/apple.svg" alt="" />
                </a>
                <a href="#!" class="get-app__item">
                  <img src="@/assets/icons/android.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div class="hero__media">
            <figure class="hero__media-wrap">
              <img class="hero__img" src="@/assets/images/hero.png" alt="" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  </header>
</template>

<style lang="scss" scoped>
.hero {
  background: #fffae3;
  padding-top: 52px;
  padding-bottom: 100px;
  &__inner {
    display: flex;
    align-items: center;
  }

  &__content {
    width: 44%;
  }

  &__label {
    color: #572af8;
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 166.667%;
    letter-spacing: 3.6px;
  }

  &__heading {
    margin-top: 12px;
    font-size: 7.4rem;
    font-weight: 600;
    line-height: 1; /* 100% */
  }

  &__desc {
    margin-top: 18px;
    font-size: 1.8rem;
    line-height: 166.667%; /* 166.667% */
  }

  &__media {
    width: 56%;

    &-wrap {
      width: 100%;
      object-fit: cover;
    }
  }
  &__img {
    width: 100%;
    height: auto;
  }
}

.get-app {
  margin-top: 38px;
  gap: 16px;
  display: flex;
  align-items: center;
  &__text {
    font-size: 2rem;
    font-weight: 700;
    line-height: 150%; /* 150% */
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
  }
}
</style>
