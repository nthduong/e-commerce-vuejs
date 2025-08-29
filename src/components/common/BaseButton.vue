<script setup>
defineProps({
  type: {
    type: String,
    default: 'primary',
  },
  size: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div>
    <button :class="['btn', `btn--${type}`, size ? `btn--${size}` : '']">
      <slot></slot>
    </button>
  </div>
</template>

<style scoped></style>
