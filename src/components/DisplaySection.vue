<script setup></script>

<template>
  <h1>Expense Tracker</h1>
  <div class="balance">
    <p>Your Ballance:</p>
  </div>
  <div class="values">
    <div class="income">Income</div>
    <div class="expense">Expense</div>
  </div>
</template>

<style scoped>
.values {
  display: inline-flex;
  width: 20%;
}

.income,
.expense {
  background-color: seagreen;
  padding: 0.5rem 1.5rem;
}
</style>
