<script setup>
import ItemComp from './ItemComp.vue'
import { ref } from 'vue'
import { useStore } from '@/stores/useExpense'

const myStore = useStore()

// the reactive variables
const title = ref('')
const price = ref()

const addNewTransaction = () => {
  // before adding a new transaction, check you balance
  if (!checkBalance()) {
    return
  }

  if (title.value === '' || price.value === '') {
    return
  }
  // const currentTitle = title.value
  // const currentPrice = price.value
  myStore.items.push({
    id: crypto.randomUUID(),
    title: title.value,
    price: price.value,
  })

  // title.value = ''
  // price.value = ''
}

// delete item function
// const deleteItem = (toDelete) => {
//   console.log('yes 11111111111')
//   myStore.items = myStore.items.filter((item) => item.id !== toDelete)
// }

const checkBalance = () => {
  if (price.value > myStore.balance) {
    console.error('not enough money!!!')
    return false
  }
  if (myStore.balance < 0) {
    // call the addExpense function
    myStore.addIncome(price.value)
  } else {
    // call the add Income function
  }
  return true
}
</script>

<template>
  <div class="history">
    <h3>History</h3>
    <br />
    <ItemComp
      v-for="item in myStore.items"
      :key="item.id"
      :item="item"
      @deleteItem="myStore.deleteItem"
    />
  </div>
  <div class="admin-section">
    <h3>Add new transactions</h3>
    <br />
    <div class="text-filed">
      <label for="text">Text</label>
      <input type="text" id="text" placeholder="Enter text..." v-model="title" />
    </div>
    <div class="amount-filed">
      <label for="amount"
        >Amount
        <br />
        (Negative: Expense, Posisitve: income)
      </label>
      <input type="text" id="amount" placeholder="Enter amount..." v-model="price" />
    </div>
    <div class="btn">
      <button @click="addNewTransaction">Add</button>
    </div>
  </div>
</template>

<style scoped>
.admin-section {
  width: 100%;
  margin: 40px auto;
  padding: 25px;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  font-family: Arial, Helvetica, sans-serif;
}

.admin-section h3 {
  margin-bottom: 20px;
  text-align: center;
  font-weight: 600;
}

.text-filed,
.amount-filed {
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
}

label {
  font-size: 14px;
  margin-bottom: 6px;
  color: #444;
}

input {
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 14px;
  transition: 0.2s ease;
}

input:focus {
  outline: none;
  border-color: #4f46e5;
  box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.15);
}

.btn {
  text-align: center;
}

button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 8px;
  background-color: #4f46e5;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s ease;
}

button:hover {
  background-color: #4338ca;
}

.history {
  width: 100%;
}
</style>
