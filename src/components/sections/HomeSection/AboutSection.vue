<script setup></script>

<template>
  <div class="about">
    <div class="container">
      <div class="about__inner">
        <figure class="about__image-wrap">
          <img class="about__image" src="@/assets/images/about.png" alt="About Us" />
        </figure>
        <div class="about__content">
          <h2 class="about__heading">About Foodeats</h2>
          <p class="about__text">
            Foodeats helps you find and order food from wherever you are. How it works: you type in
            an address, we tell you the restaurants that deliver to that locale as well as showing
            you droves of pickup restaurants near you.
          </p>
          <p class="about__text">
            Want to be more specific? Search by cuisine, restaurant name or menu item. We'll filter
            your results accordingly.
          </p>
          <router-link :to="{ name: 'about' }" class="about__button btn">Learn More</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/abstracts';
.about {
  padding-top: 200px;
  padding-bottom: 100px;
  background: var(--color-bg-primary);

  @include abstracts.screen(md) {
    padding-top: 50px;
  }

  &__inner {
    display: flex;
    align-items: center;

    @include abstracts.screen(lg) {
      flex-direction: column-reverse;
    }
  }

  &__image-wrap {
    width: 50%;

    @include abstracts.screen(lg) {
      margin-top: 50px;
      width: 100%;
    }
  }

  &__image {
    display: block;
    width: 100%;
  }

  &__content {
    width: 50%;
    padding-left: 130px;

    @include abstracts.screen(lg) {
      width: 100%;
      padding-left: initial;
    }
  }

  &__heading {
    color: var(--color-text-heading);
    font-family: 'Roboto';
    font-size: 4.4rem;
    font-weight: 600;
    line-height: 1;

    @include abstracts.screen(md) {
      font-size: 3.4rem;
    }
  }

  &__text {
    margin-top: 18px;
    color: var(--color-text-desc);
    font-size: 1.8rem;
    line-height: 166.667%;

    @include abstracts.screen(md) {
      font-size: 1.6rem;
    }
  }

  &__button {
    margin-top: 38px;
  }
}
</style>
