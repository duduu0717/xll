<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="row">
    <span class="dot"></span>
    <span class="text">{{ msg }}</span>
    <span class="dot"></span>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.dot {
  display: block;
  width: 4px;
  height: 4px;
  background: var(--border-color);
  border-radius: 50%;
}

.text {
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 0.28em;
  color: var(--text-muted);
  text-transform: uppercase;
}
</style>
