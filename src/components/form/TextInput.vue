<script setup>
defineProps({
  placeholder: {
    type: String,
    default: 'Type here...',
  },
  border: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div
    class="form"
    :style="{
      border: border ? '2px solid var(--color-text-heading)' : 'none',
    }"
  >
    <label for="form-input">
      <div class="form__icon">
        <slot name="icon"></slot>
      </div>
    </label>

    <input type="text" class="form__input" id="form-input" :placeholder="placeholder" />
  </div>
</template>

<style lang="scss" scoped>
.form {
  display: flex;
  align-items: center;
  padding: 0px 16.5px;
  flex: 1;
  line-height: 60px;
  min-height: 60px;
  border-radius: 999px;
  background: #fff;
  width: 100%;
  box-shadow: 0px 13px 26px -8px rgba(0, 0, 0, 0.06);

  &::placeholder {
    line-height: 175%; /* 175% */
  }

  &__icon {
    display: flex;
    align-items: center;
  }

  &__input {
    margin-left: 11.5px;
    width: 100%;
    font-size: 1.8rem;
  }
}
</style>
