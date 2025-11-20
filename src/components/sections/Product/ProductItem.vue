<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const getProductImage = (product) => {
  const imageName = product.image?.replace('/images/products/', '') || 'placeholder.png'
  const imagePath = `/src/assets/images/products/${imageName}`
  return imagePath
}
</script>

<template>
  <article class="product-item">
    <figure class="product-item__img-wrap" @click="$emit('view-detail', product.slug)">
      <img class="product-item__img" :src="getProductImage(product)" alt="pizza Image" />
    </figure>
    <div class="product-item__content">
      <h3 class="product-item__title line-clamp line-1">{{ product.name }}</h3>
      <p class="product-item__desc line-clamp line-2">{{ product.description }}</p>
      <div class="product-item__bottom">
        <div class="product-item__price">${{ product.price }}</div>
        <button class="product-item__button" @click="$emit('view-detail', product.slug)">
          <img class="product-item__icon" src="@/assets/icons/plus.svg" alt="" />
        </button>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@use '@/styles/abstracts';

.product-item {
  background: var(--color-bg-item);
  border-radius: 25px;
  box-shadow: var(--box-shadow);
  // border: 1px solid var(--color-button-bg);
  overflow: hidden;
  display: flex;
  flex-direction: column;

  &__img-wrap {
    position: relative;
    width: 100%;
    padding-top: 80%;
    flex-shrink: 0;
    cursor: pointer;
  }
  &__img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }

  &__content {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
  }

  &__title {
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--color-text-heading);
  }

  &__desc {
    margin-top: 12px;
    font-size: 1.2rem;
    color: var(--color-text-desc);
    flex-grow: 1;
  }

  &__bottom {
    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__price {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--color-text-heading);
  }

  &__button {
    background: var(--color-button-bg);
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    &:hover {
      opacity: 0.8;
    }
  }

  &__icon {
    width: 20px;
  }
}
</style>
