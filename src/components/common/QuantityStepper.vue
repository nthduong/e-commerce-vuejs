<script setup>
import { number } from 'yup'

defineProps({
  quantity: {
    type: number,
    default: 1,
  },
})
</script>

<template>
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
      :value="quantity"
    />
    <button class="quantity-item__btn">
      <img src="@/assets/icons/plus-qty.svg" alt="" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/abstracts';
.quantity-item {
  border: 0.1rem solid #e9e8e8;
  border-radius: 999px;
  padding: 7px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--color-bg-secondary);

  &__input {
    width: 40px;
    text-align: center;
    font-size: 1.6rem;
  }

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding: 14px;
    background: #ebebeb;
    cursor: pointer;
  }
}
</style>
