<script setup>
import { ref } from 'vue'

const isVisible = ref(false)

const toggleDeleteBtn = () => {
  isVisible.value = !isVisible.value
}
</script>

<template>
  <div class="item" @mouseenter="toggleDeleteBtn" @mouseleave="toggleDeleteBtn">
    <div class="item-title">Sneakers</div>
    <div class="item-price">$400</div>
    <div class="delete-btn" v-show="isVisible">
      <i class="fa-solid fa-x"></i>
    </div>
  </div>
</template>

<style scoped>
.item {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 2px solid red; */
  padding: 1rem;
  border-right: 4px green solid;
  background-color: #fff;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);

  position: relative;
}

.delete-btn {
  height: 54px;
  width: 20px;
  /* background-color: sienna; */
  color: red;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  left: -20px;
  top: 0;
}

i {
  cursor: pointer;
}
</style>
