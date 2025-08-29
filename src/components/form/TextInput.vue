<script setup>
defineProps({
  placeholder: {
    type: String,
    default: 'Type here...',
  },
})
</script>

<template>
  <div class="form">
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
  border-radius: 6px;
  border: 1px solid #191720;
  background: #fff;

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
  }
}
</style>
