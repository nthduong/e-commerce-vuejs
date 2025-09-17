<script setup>
import { useCategory } from '@/composables/useCategory'

const { categories } = useCategory()

const getImage = (categories) => {
  const imageName = categories.image?.replace('/images/category/', '') || 'placeholder.png';
  const imagePath = `/src/assets/images/category/${imageName}`;
  return imagePath;
};
</script>

<template>
  <section class="categories">
    <div class="container">
      <div class="categories__inner">
        <section class="categories__top">
          <h2 class="categories__heading">PIZZA FOR EVERY CRAVING</h2>
          <p class="categories__desc">
            Order hot, fresh pizzas online from your favorite local pizzerias.
          </p>
        </section>
        <div class="row row-cols-3 row-cols-lg-1 categories__list">
          <div class="col" v-for="category in categories" :key="category.id">
            <router-link
              :to="{ name: 'product', params: { categorySlug: category.slug } }"
              class="categories__item"
            >
              <figure class="categories__img-wrap">
                <img class="categories__img" :src="getImage(category)" alt="" />
              </figure>
              <h3 class="categories__item-heading">{{ category.name}}</h3>
              <p class="categories__item-desc">
                {{ category.description }}
              </p>
            </router-link>
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
  padding-bottom: 160px;

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
    background: var(--color-bg-item);
    transition:
      box-shadow 0.3s ease,
      border 0.3s ease,
      transform 0.3s ease;
    box-shadow: var(--box-shadow);
    border: 16px solid transparent;

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
  }
}
</style>
