<script setup></script>

<template>
  <div class="product-detail">
    <div class="container">
      <div class="row">
        <div class="col-5">
          <div class="product-detail_preview">
            <figure class="product-detail__image-wrap">
              <img
                class="product-detail__image"
                src="../assets/images/products/pizza/pizza-15.png"
                alt=""
              />
            </figure>
          </div>
        </div>
        <div class="col-7">
          <div class="product-detail__content">
            <h1 class="product-detail__heading">Seafood Pizza</h1>
            <p class="product-detail__desc">
              Explore a variety of pizzas, from classic to premium flavors.
            </p>
            <span class="product-detail__price">$5000</span>
            <div class="product-detail__cta-wrap">
              
              <button class="btn product-detail__cta">Add to card</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/abstracts';
.product-detail {
  padding: 80px 0;
  @include abstracts.screen(sm) {
    padding: 50px 0;
  }

  &__image-wrap {
    position: relative;
    width: 100%;
    padding-top: 80%;
    flex-shrink: 0;
    border: 1px solid var(--color-bg-primary);
    border-radius: 20px;
    overflow: hidden;
  }

  &__image {
    border-radius: 20px;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  &__content {
    display: flex;
    flex-direction: column;
    background: var(--color-bg-primary);
    height: 100%;
    padding: 60px;
    border-radius: 20px;
  }

  &__heading {
    font-size: 3.2rem;
    font-weight: 500;
    color: var(--color-text-heading);
  }

  &__desc {
    margin-top: 20px;
    font-size: 1.8rem;
    color: var(--color-text-desc);
  }

  &__price {
    display: block;
    font-size: 4.2rem;
    margin-top: 20px;
    font-weight: 500;
    color: var(--color-button-bg);
  }

  &__cta-wrap {
    height: 100%;
    flex: 1;
    display: flex;
  }

  &__cta {
    margin-top: auto;
  }
}
</style>
