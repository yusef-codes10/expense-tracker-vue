// this is the pinia store
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useStore = defineStore('useExpense', () => {
  // *state (computed)
  //   const balance = ref(300)

  // const income = ref(100)

  const expense = ref(87)

  const items = ref([{ id: 1, title: 'Needle', price: 22.99, isIncome: true }])

  const isIncome = ref(true)

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
  // income should be computed prop that calculates the total of al items
  const income = computed(() => {
    let sum = 0
    for (const item of items) {
      sum += item.price
    }
    return sum
  })

  return {
    balance,
    income,
    expense,
    items,
    isIncome,

    // * actions
    deleteItem,
    addIncome,
  }
})
