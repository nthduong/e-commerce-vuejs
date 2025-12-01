<script setup>
import { useCartStore } from '@/stores/cartStore'
import { useRouter } from 'vue-router'
const { cart } = useCartStore()

const router = useRouter()

const goToDetail = (slug) => {
  console.log(1)

  router.push({
    name: 'product-detail',
    params: { categorySlug: 'all', productSlug: slug },
  })
}
</script>

<template>
  <div class="cart">
    <div class="container">
      <h1 class="cart__heading">Cart Page</h1>
      <div class="cart-table">
        <div class="cart-table__top">
          <div class="cart-table__title flex-center">Product</div>
          <div class="cart-table__title flex-center">Quantity</div>
          <div class="cart-table__title flex-center">Price</div>
          <div class="cart-table__title flex-center">
            <img src="@/assets/icons/trash.svg" alt="" />
          </div>
        </div>
        <div class="cart-table__list">
          <div v-for="item in cart" :key="item.id" class="cart-item">
            <div class="cart-item__info">
              <div class="cart-item__image-wrap" @click="goToDetail(item.slug)">
                <img class="cart-item__image" :src="`/src/assets/${item.image}`" alt="" />
              </div>
              <div class="cart-item__info-right">
                <div class="cart-item__name" @click="goToDetail(item.slug)">{{ item.name }}</div>
                <div class="cart-item__desc line-clamp">{{ item.description }}</div>
              </div>
            </div>
            <div class="cart-item__quantity flex-center">
              <div class="quantity-item">
                <button class="quantity-item__btn">
                  <img src="@/assets/icons/minus-qty.svg" alt="" />
                </button>
                <input
                  class="quantity-item__input"
                  type="text"
                  min="1"
                  max="99"
                  maxlength="2"
                  :value="item.quantity"
                />
                <button class="quantity-item__btn">
                  <img src="@/assets/icons/plus-qty.svg" alt="" />
                </button>
              </div>
            </div>
            <div class="cart-item__price flex-center">${{ item.price }}</div>
            <div class="cart-item__delete flex-center">
              <img src="@/assets/icons/trash-gray.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/abstracts';

.quantity-item {
  border: 0.1rem solid #e9e8e8;
  border-radius: 999px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__input {
    width: 40px;
    text-align: center;
  }

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding: 8px;
    background: #ebebeb;
    cursor: pointer;
  }
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.cart {
  padding: 80px 0;
  @include abstracts.screen(sm) {
    padding: 50px 0;
  }

  &__heading {
    font-size: 3.2rem;
    font-weight: 600;
    line-height: 1;
  }
}

.cart-table {
  margin-top: 40px;
  width: 70%;
  padding: 20px 20px 0px 20px;
  border: 1px solid var(--color-border);
  border-radius: 20px;

  &__top {
    display: grid;
    grid-template-columns: 4fr 2fr 2fr 0.5fr;
  }

  &__title {
    font-size: 2rem;
    font-weight: 500;
    color: var(--color-text-heading);
    padding-bottom: 15px;
    border-bottom: 1px solid var(--color-border);
  }

  &__list {
    display: flex;
    flex-direction: column;
  }
}

.cart-item {
  position: relative;
  display: grid;
  padding: 10px 0;
  grid-template-columns: 4fr 2fr 2fr 0.5fr;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    height: 1px;
    width: 100%;
    background: var(--color-border);
  }

  &:last-child::before {
    content: none;
  }

  &__info {
    display: flex;
    align-items: center;
    gap: 15px;
    padding-right: 10px;
  }
  &__image-wrap {
    position: relative;
    width: 25%;
    padding-top: 20%;
    flex-shrink: 0;
    cursor: pointer;
  }
  &__image {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 20px;
  }

  &__name {
    font-weight: 500;
    cursor: pointer;
  }

  &__desc {
    margin-top: 5px;
    font-size: 1.4rem;
    color: var(--color-text-desc);
  }


  &__delete {
    cursor: pointer;

    &:hover img {
      filter: var(--color-icon);
    }
  }
}
</style>
