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
      <h3 class="product__title">{{ product.name }}</h3>
      <p class="product__desc">{{ product.category }}</p>
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
  background: #fff;
  height: 100%;
  border-radius: 20px;
  box-shadow: 0px 20px 60px 10px rgba(237, 237, 246, 0.4);

  &__img-wrap {
    position: relative;
    width: 100%;
    padding-top: 100%;
    flex-shrink: 0;
  }
  &__img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 80%;
    width: 80%;
    object-fit: cover;
    border-radius: 20px;
  }

  &__content {
    padding: 0 20px 20px 20px;
    display: flex;
    flex-direction: column;
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
    margin-top: 12px;
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
