<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const getProductImage = (product) => {
  const imageName = product.image?.replace('/images/products/pizza/', '') || 'placeholder.png';
  const imagePath = `/src/assets/images/products/pizza/${imageName}`;
  return imagePath;
};
</script>

<template>
  <article class="product">
    <figure class="product__img-wrap">
      <img class="product__img" :src="getProductImage(product)" alt="pizza Image" />
    </figure>
    <div class="product__content">
      <h3 class="product__title line-clamp line-2">{{ product.name }}</h3>
      <p class="product__desc line-clamp line-2">{{ product.description }}</p>
      <div class="product__bottom">
        <div class="product__price">${{ product.price }}</div>
        <button class="product__button btn btn--primary btn--sm">Add</button>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@use '@/styles/abstracts';

.product {
  background: var(--color-bg-item);
  height: 100%;
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
    font-size: 2.2rem;
    font-weight: 600;
    color: var(--color-text-heading);
  }

  &__desc {
    margin-top: 12px;
    font-size: 1.4rem;
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
    font-size: 2.2rem;
    font-weight: 700;
    color: var(--color-text-heading);
  }
}
</style>
