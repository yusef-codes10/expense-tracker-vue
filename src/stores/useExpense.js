// this is the pinia store
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore('useExpense', () => {
  // *state
  const balance = ref(300)
})
