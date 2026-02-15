<script setup>
import DisplaySection from './components/DisplaySection.vue'
</script>

<template>
  <div class="expense-tracker">
    <DisplaySection />
  </div>
</template>

<style scoped>
.expense-tracker {
  display: flex;
  flex-direction: column;
  height: 100dvh;
  align-items: center;
}
</style>
