// this is the pinia store
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useStore = defineStore('useExpense', () => {
  // *state (computed)
  //   const balance = ref(300)

  const income = ref(100)

  const expense = ref(87)

  const items = ref([{ id: 1, title: 'Needle', price: 22.99 }])

  //   * actions
  const addIncome = (something) => {
    income.value += something
  }

  const addexpense = () => {}

  const deleteItem = (id) => {
    console.log('yes 11111111111')
    items.value = items.value.filter((item) => item.id !== id)
  }

  // * getters (computed)
  const balance = computed(() => {
    return income.value - expense.value
  })

  return {
    balance,
    income,
    expense,
    items,

    // * actions
    deleteItem,
    addIncome,
  }
})
