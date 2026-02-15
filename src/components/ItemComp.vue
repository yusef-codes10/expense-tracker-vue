<script setup>
import { ref } from 'vue'

const isVisible = ref(true)
</script>

<template>
  <div class="item" @mouseenter="isVisible = true" @mouseleave="isVisible = false">
    <div class="item-title">Sneakers</div>
    <div class="item-price">$400</div>
    <div class="delete-btn" v-show="isVisible"></div>
  </div>
</template>

<style scoped>
.item {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid red;
  padding: 1rem;
  border-right: 4px green solid;
}

.delete-btn {
  height: 100px;
  width: 100px;
  background-color: sienna;
}
</style>
