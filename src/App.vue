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

<!-- App.vue -->
<style scoped>
.expense-tracker {
  display: flex;
  flex-direction: column;
  height: 100dvh;
  align-items: center; /* This centers the container horizontally */
  gap: 0.5rem;
  width: 100%;
  max-width: 400px; /* Set max-width on the parent instead */
  margin: 0 auto; /* Center the whole app */
}
</style>
