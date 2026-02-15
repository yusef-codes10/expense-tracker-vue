<script setup>
import DisplaySection from './components/DisplaySection.vue'
import HistorySection from './components/HistorySection.vue'
</script>

<template>
  <div class="expense-tracker">
    <DisplaySection />
    <HistorySection />
  </div>
</template>

<style scoped>
.expense-tracker {
  display: flex;
  flex-direction: column;
  height: 100dvh;
  align-items: center;
  gap: 0.5rem;
}
</style>
