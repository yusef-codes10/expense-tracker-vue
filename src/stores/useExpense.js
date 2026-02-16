// this is the pinia store
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore('useExpense', () => {
  // *state (computed)
  const balance = ref(300)

  const income = ref(100)

  const expense = ref(87)

  //   * actions
  const addIncome = () => {}

  const addexpense = () => {}

  // * getters (computed)

  return {
    balance,
    income,
    expense,
  }
})
