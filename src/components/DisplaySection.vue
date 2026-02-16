<script setup>
import { useStore } from '@/stores/useExpense'
</script>

<template>
  <div class="header">
    <h3>Expense Tracker</h3>
    <div class="balance">
      <p>
        Your Ballance: <span> {{ useStore.balance }}</span>
      </p>
    </div>
    <div class="values">
      <div class="income">
        Income
        <span>+$100</span>
      </div>
      <div class="expense">
        Expense
        <span>-$200</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  width: 100%;
  /* background-color: seagreen; */
}

h3 {
  margin: 1rem 0;
}

span {
  font-size: 1.3rem;
  font-weight: 600;
  display: block;
  margin: 0.5rem;
}
.values {
  /* display: inline-flex; */
  display: flex;
  /* width: 100%; */
  justify-content: center;
  /* margin: 0 auto; */
  /* justify-self: center; */
}

.income,
.expense {
  background-color: #fff;
  padding: 0.5rem 1.5rem;

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  width: 100%;
}

.income span {
  color: green;
}

.expense span {
  color: red;
}
</style>
