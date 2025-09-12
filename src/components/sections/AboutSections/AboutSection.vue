<script setup></script>

<template>
  <div class="about">
    <div class="container">
      <div class="about__inner">
        <div class="about__content">
          <h1 class="about__heading">About <span>PizzaRush</span></h1>
          <p class="about__text">
            PizzaRush brings you the best, freshest pizzas, delivered straight to your door. Just
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
        <figure class="about__image-wrap">
          <img class="about__image" src="@/assets/images/pizza5.png" alt="About Us" />
        </figure>
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
      flex-direction: column;
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
    font-size: 7.4rem;
    font-weight: 600;
    line-height: 1;


     @include abstracts.screen(xl) {
      font-size: 6.4rem;
    }
    @include abstracts.screen(lg) {
      font-size: 4.6rem;
    }
    @include abstracts.screen(md) {
      font-size: 4.6rem;
    }

    & span {
      color: var(--color-button-bg);
    }
  }

  &__text {
    margin-top: 18px;
    color: var(--color-text-desc);
    font-size: 1.8rem;
    line-height: 166.667%;

     @include abstracts.screen(xl) {
      font-size: 1.6rem;
    }
    @include abstracts.screen(lg) {
      margin-top: 12px;
    }
  }

  &__button {
    margin-top: 38px;
  }
}
</style>
