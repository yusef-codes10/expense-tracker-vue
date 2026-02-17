// this is the pinia store
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useStore = defineStore('useExpense', () => {
  // *state (computed)
  //   const balance = ref(300)

  // const income = ref(100)

  // const expense = ref(0)

  const items = ref([{ id: 1, title: 'Needle', price: 22.99, isIncome: true }])

  const isIncome = ref(true)

  const deleteItem = (id) => {
    console.log('yes 11111111111')
    items.value = items.value.filter((item) => item.id !== id)
  }

  const checkBalance = (price) => {
    //     if price is positive → it's income → just add it, no check needed
    //     if price is negative → it's expense → check if balance can cover it
    //     if balance >= the expense amount → allow it
    //     if balance < the expense amount → block it, "not enough money"
    if (price < 0) {
      // this is expense
      // check if balance can cover it
      if (price > balance.value) {
        console.error('Not enough money!!!')
        return false
      }
    }
    return true
  }

  // * getters (computed)
  const balance = computed(() => {
    const balanceResult = income.value - Math.abs(expense.value)
    return balanceResult.toFixed(2)
  })
  // income should be computed prop that calculates the total of al items
  const income = computed(() => {
    let sum = 0
    for (const item of items.value) {
      if (item.isIncome) {
        sum += Number(item.price)
      }
    }
    return sum.toFixed(2)
  })

  const expense = computed(() => {
    let sum = 0
    for (const item of items.value) {
      if (!item.isIncome) {
        sum += Number(item.price)
      }
    }
    return sum.toFixed(2)
  })

  return {
    balance,
    income,
    expense,
    items,
    isIncome,

    // * actions
    deleteItem,
    checkBalance,
  }
})
