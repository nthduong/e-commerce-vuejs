<script setup></script>

<template>
  <section class="categories">
    <div class="container">
      <div class="categories__inner">
        <section class="categories__top">
          <h2 class="categories__heading">Your everyday, right away</h2>
          <p class="categories__desc">
            Order food and grocery delivery online from hundreds of restaurants and shops nearby.
          </p>
        </section>
        <div class="row row-cols-3 row-cols-lg-1 categories__list">
          <div class="col">
            <div class="categories__item">
              <figure class="categories__img-wrap">
                <img class="categories__img" src="@/assets/images/categories-1.png" alt="" />
              </figure>
              <h3 class="categories__item-heading">Restaurants</h3>
              <p class="categories__item-desc">
                Find deals, free delivery, and more from our restaurant partners.
              </p>
              <router-link :to="{ name: 'home' }" class="categories__item-link btn btn--outline"
                >Explore</router-link
              >
            </div>
          </div>
          <div class="col">
            <div class="categories__item">
              <figure class="categories__img-wrap">
                <img class="categories__img" src="@/assets/images/categories-2.png" alt="" />
              </figure>
              <h3 class="categories__item-heading">Groceries</h3>
              <p class="categories__item-desc">
                Find deals, free delivery, and more from our restaurant partners.
              </p>
              <router-link :to="{ name: 'home' }" class="categories__item-link btn btn--outline"
                >Explore</router-link
              >
            </div>
          </div>
          <div class="col">
            <div class="categories__item">
              <figure class="categories__img-wrap">
                <img class="categories__img" src="@/assets/images/categories-3.png" alt="" />
              </figure>
              <h3 class="categories__item-heading">Flower Items</h3>
              <p class="categories__item-desc">
                Find deals, free delivery, and more from our restaurant partners.
              </p>
              <router-link :to="{ name: 'home' }" class="categories__item-link btn btn--outline"
                >Explore</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/styles/abstracts';

.categories {
  background: var(--color-bg-secondary);
  padding-top: 160px;
  padding-bottom: 260px;

  @include abstracts.screen(md) {
    padding-top: 70px;
    padding-bottom: 70px;
  }

  &__heading {
    color: var(--color-text-heading);
    text-align: center;
    font-size: 4.4rem;
    font-weight: 600;
    line-height: 1;

    @include abstracts.screen(md) {
      font-size: 3.4rem;
    }
  }

  &__desc {
    display: block;
    margin: 0 auto;
    margin-top: 18px;
    text-align: center;
    color: var(--color-text-desc);
    font-size: 1.8rem;
    line-height: 166.667%;

    @include abstracts.screen(md) {
      font-size: 1.6rem;
      margin-top: 12px;
      max-width: initial;
      width: 100%;
    }
  }

  &__list {
    margin-top: 55px;

    @include abstracts.screen(lg) {
      gap: 30px;
    }

    @include abstracts.screen(md) {
      gap: 20px;
    }
  }

  &__item {
    display: flex;
    flex: 1;
    height: 100%;
    flex-direction: column;
    align-items: center;
    padding: 30px 20px;
    border-radius: 20px;
    background: var(--color-bg-secondary);
    transition: box-shadow 0.3s ease, border 0.3s ease, transform 0.3s ease;
    border: 16px solid #fffae3;

    &:hover {
      border: 16px solid var(--color-button-bg);
      transform: scale(1.05);
    }
  }

  &__img-wrap {
    width: 100px;
    height: 100px;
    flex-shrink: 0;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  &__item-heading {
    margin-top: 20px;
    color: var(--color-text-heading);
    font-size: 2.6rem;
    font-weight: 600;
    line-height: 138.462%;
  }

  &__item-desc {
    margin-top: 12px;
    color: var(--color-text-desc);
    font-size: 1.8rem;
    line-height: 166.667%;
    max-width: 330px;
    text-align: center;

    @include abstracts.screen(md) {
      font-size: 1.6rem;
      margin-top: 12px;
      max-width: initial;
      width: 100%;
    }
  }

  &__item-link {
    margin-top: 30px;
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 166.667%;
    transition: color 0.3s ease;

  }
}
</style>
