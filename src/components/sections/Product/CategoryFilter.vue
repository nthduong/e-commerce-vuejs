<script setup>
import { useCategory } from '@/composables/useCategory'

const { categories } = useCategory()

const getProductImage = (product) => {
  const imageName = product.image?.replace('/icons', '') || 'placeholder.png';
  const imagePath = `/src/assets/images/products/pizza/${imageName}`;
  return imagePath;
};
</script>

<template>
  <div class="CategoryFilter">
    <h2 class="CategoryFilter__heading">Category</h2>
    <div class="CategoryFilter__list">
      <button v-for="category in categories" :key="category.id" class="CategoryFilter-item">
        <div class="CategoryFilter-item__content">
          <img :src="getProductImage(category)" alt="" class="CategoryFilter-item__img" />
          <h3 class="CategoryFilter-item__title">{{ category.name }}</h3>
        </div>
        <span class="CategoryFilter-item__number">1</span>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/abstracts';

.CategoryFilter {
  padding: 20px;
  background: #fff;
  box-shadow: var(--box-shadow);
  border-radius: 20px;

  &__heading {
    font-size: 2.6rem;
    font-weight: 600;
  }

  &__list {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
}

.CategoryFilter-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 16px;
  border-radius: 20px;
  border: 1px solid var(--color-border);

  &__content {
    display: flex;
    align-items: center;
  }

  &__title {
    font-size: 1.8rem;
    font-weight: 600;
  }

  &__number {
    font-size: 1.8rem;
    font-weight: 600;
  }
}
</style>
