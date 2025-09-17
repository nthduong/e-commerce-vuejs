<script setup>
import { useCategory } from '@/composables/useCategory'
import { useProduct } from '@/composables/useProduct'

const { categories } = useCategory()
const { countProduct, countProductByCategory } = useProduct()

const getImage = (categories) => {
  const imageName = categories.image?.replace('/images/category/', '') || 'placeholder.png'
  const imagePath = `/src/assets/images/category/${imageName}`
  return imagePath
}
</script>

<template>
  <div class="CategoryFilter">
    <h2 class="CategoryFilter__heading">Category</h2>
    <div class="CategoryFilter__list">
      <button class="CategoryFilter-item">
        <div class="CategoryFilter-item__content">
          <img src="@/assets/images/category/category-all.png" alt="" class="CategoryFilter-item__img" />
          <h3 class="CategoryFilter-item__title">All</h3>
        </div>
        <span class="CategoryFilter-item__number">{{ countProduct }}</span>
      </button>

      <button v-for="category in categories" :key="category.id" class="CategoryFilter-item">
        <div class="CategoryFilter-item__content">
          <img :src="getImage(category)" alt="" class="CategoryFilter-item__img" />
          <h3 class="CategoryFilter-item__title">{{ category.name }}</h3>
        </div>
        <span class="CategoryFilter-item__number">{{ countProductByCategory(category.id) }}</span>
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
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
}

.CategoryFilter-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  border-radius: 999px;
  border: 1px solid var(--color-button-bg);
  gap: 10px;

  &__content {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  &__title {
    font-size: 1.6rem;
    font-weight: 600;
  }

  &__img {
    width: 25px;
  }

  &__number {
    display: flex;
    font-size: 1rem;
    font-weight: 600;
    background: var(--color-button-bg);
    color: #fff;
    width: 22px;
    height: 22px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
}
</style>
