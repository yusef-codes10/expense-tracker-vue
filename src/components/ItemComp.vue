<script setup></script>

<template>
  <div class="item">
    <div class="item-title">Sneakers</div>
    <div class="item-price">$400</div>
  </div>
</template>

<style scoped>
.item {
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid red;
  padding: 1rem;
}

.item-title {
  background-color: red;
}

.item-price {
  background-color: blue;
}
</style>
