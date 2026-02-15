<script setup>
import { ref, defineProps, defineEmits } from 'vue'

const isVisible = ref(false)

const toggleDeleteBtn = () => {
  isVisible.value = !isVisible.value
}

// define the props
defineProps({
  item: {
    type: Object,
  },
})

const emit = defineEmits(['deleteItem'])
</script>

<template>
  <div class="item" @mouseenter="toggleDeleteBtn" @mouseleave="toggleDeleteBtn">
    <div class="item-title">{{ item.title }}</div>
    <div class="item-price">{{ item.price }}</div>
    <div class="delete-btn" v-show="isVisible">
      <i class="fa-solid fa-x" @click="emit('deleteItem', item.title)"></i>
    </div>
  </div>
</template>

<style scoped>
.item {
  width: 100%;
  height: 50px;
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
