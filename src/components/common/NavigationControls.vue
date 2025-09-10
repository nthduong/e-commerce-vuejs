<script setup></script>

<template>
  <div class="control">
    <button class="prev control__btn">
      <img
        @click="$emit('prev')"
        class="control__img"
        src="@/assets/icons/prev.svg "
        alt=""
      />
    </button>
    <button class="next control__btn">
      <img
        @click="$emit('next')"
        class="control__img"
        src="@/assets/icons/next.svg"
        alt=""
      />
    </button>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/abstracts';

.control {
  display: flex;
  gap: 14px;
  &__btn {
    width: 50px;
    height: 50px;
    background: transparent;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--color-button-bg);
    transition: background 0.25s ease;

    &:hover {
      background: var(--color-button-bg);
    }
    &:hover .control__img {
      filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(101deg)
        brightness(102%) contrast(103%);
    }
  }
  &__img {
    width: 20px;
    transition: filter 0.25s ease;
  }
}
</style>
