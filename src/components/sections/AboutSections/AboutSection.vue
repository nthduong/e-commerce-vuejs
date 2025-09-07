<script setup></script>

<template>
  <div class="about">
    <div class="container">
      <div class="about__inner">
        <figure class="about__image-wrap">
          <img class="about__image" src="@/assets/images/pizza5.png" alt="About Us" />
        </figure>
        <div class="about__content">
          <h2 class="about__heading">About Foodeats</h2>
          <p class="about__text">
            Foodeats brings you the best, freshest pizzas, delivered straight to your door. Just
            enter your location and browse our wide selection of delicious pizzas and sides.
          </p>
          <p class="about__text">
            Craving something specific? Search by topping, pizza type, or combo deal, and we’ll show
            you exactly what you need.
          </p>
          <!-- <router-link :to="{ name: 'about' }" class="about__button btn btn--outline">
            Learn More
          </router-link> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/abstracts';
.about {
  padding-bottom: 100px;
  background: var(--color-bg-primary);

  @include abstracts.screen(xl) {
    padding-bottom: 150px;
  }

  @include abstracts.screen(lg) {
    padding-top: 70px;
    padding-bottom: 150px;
  }

  @include abstracts.screen(md) {
    padding-top: 30px;
    padding-bottom: 30px;
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
