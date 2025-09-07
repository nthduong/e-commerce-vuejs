<script setup></script>

<template>
  <div class="features">
    <div class="container">

      <div class="features__top">
        <h2 class="features__title">ALL YOUR FAVORITE PIZZAS ONE PLACE</h2>
        <p class="features__desc">
          Order fresh hot pizzas online from your local pizzerias, fast and easy.
        </p>
      </div>

      <div class="row row-cols-2 row-cols-lg-1 features__list">
        <div class="col">
          <div class="features__item">
            <img
              src="@/assets/images/features-1.png"
              alt="Join as a Delivery Rider"
              class="features__img"
            />
            <h3 class="features__item-title">Deliver Pizzas</h3>
            <p class="features__item-desc">
              Join our team and start delivering delicious pizzas to happy customers.
            </p>
            <router-link
              :to="{ name: 'home' }"
              class="features__item-cta btn btn--outline">
              Learn More
            </router-link>
          </div>
        </div>

        <div class="col">
          <div class="features__item">
            <img
              src="@/assets/images/features-2.png"
              alt="Become a Pizza Partner"
              class="features__img"
            />
            <h3 class="features__item-title">Partner With Us</h3>
            <p class="features__item-desc">
              Grow your pizza business by reaching more customers through our platform.
            </p>
            <router-link
              :to="{ name: 'home' }"
              class="features__item-cta btn btn--outline">
              Learn More
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@use '@/styles/abstracts';
.features {
  padding-top: 160px;
  padding-bottom: 160px;

  @include abstracts.screen(md) {
    padding-top: 70px;
    padding-bottom: 70px;
  }

  &__title {
    color: var(--color-text-heading);
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
    font-size: 4.4rem;
    font-weight: 600;
    line-height: 1;

    @include abstracts.screen(md) {
      font-size: 3.4rem;
    }
  }

  &__desc {
    margin: 0 auto;
    margin-top: 18px;
    margin-bottom: 55px;
    max-width: 470px;
    color: var(--color-text-desc);
    text-align: center;
    font-size: 1.8rem;
    line-height: 166.667%;

    @include abstracts.screen(md) {
      font-size: 1.6rem;
      margin-top: 12px;
      margin-bottom: 30px;
    }
  }

  &__list {
    row-gap: 30px;

    @include abstracts.screen(md) {
      row-gap: 18px;
    }
  }

  &__item {
    padding: 48px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    background: var(--color-bg-secondary);
    transition: box-shadow 0.3s ease;
    border: 16px solid #fffae3;
    transition: box-shadow 0.3s ease, border 0.3s ease, transform 0.3s ease;

    &:hover {
      box-shadow: 0 20px 70px 0 rgba(27, 12, 84, 0.07);
      border: 16px solid var(--color-button-bg);
      transform: translateY(-16px);
    }

    &-title {
      margin-top: 38px;
      color: var(--color-text-heading);
      text-align: center;
      font-size: 3rem;
      font-weight: 700;
      line-height: 133.333%;

      @include abstracts.screen(md) {
        font-size: 2rem;
      }
    }

    &-desc {
      max-width: 474px;
      margin-top: 18px;
      color: var(--color-text-desc);
      text-align: center;
      font-size: 1.8rem;
      line-height: 166.667%;

      @include abstracts.screen(md) {
        margin-top: 12px;
        font-size: 1.4rem;
      }
    }

    &-cta {
      margin-top: 38px;

      @include abstracts.screen(md) {
        margin-top: 30px;
      }
    }
  }

  &__img {
    height: 220px;
    width: 100%;
    object-fit: contain;
    display: block;
  }
}
</style>
