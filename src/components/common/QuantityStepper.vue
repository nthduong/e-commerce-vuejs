<script setup>
defineProps({
  quantity: {
    type: Number,
    default: 1,
  },
  size: {
    type: String,
    default: 'default',
  },
})
</script>

<template>
  <div class="quantity-item" :class="`size--${size}`">
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
  border: 0.1rem solid var(--color-button-bg);
  border-radius: 999px;
  padding: 7px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--color-bg-secondary);
  @include abstracts.screen(xl) {
    padding: 5px;
  }

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
    background: var(--color-button-bg);
    cursor: pointer;
    @include abstracts.screen(xl) {
      padding: 12px;
    }
    @include abstracts.screen(lg) {
      padding: 10px;
    }

    &:hover {
      opacity: 0.9;
    }
  }

  &__btn img {
    filter: brightness(0) saturate(100%) invert(100%) sepia(2%) saturate(7472%) hue-rotate(160deg)
      brightness(104%) contrast(101%);
  }
}

.size--md {
  padding: 5px;
  .quantity-item__btn {
    padding: 10px;
    @include abstracts.screen(lg) {
      padding: 8px;
    }
  }
}
</style>
