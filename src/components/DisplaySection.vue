<script setup></script>

<template>
  <div class="header">
    <h3>Expense Tracker</h3>
    <div class="balance">
      <p>Your Ballance: <span> $300.99</span></p>
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
  display: inline-flex;
  width: 100%;
  /* margin: 0 auto; */
  /* justify-self: center; */
}

.income,
.expense {
  background-color: #fff;
  padding: 0.5rem 1.5rem;

  box-shadow: 2px 2px 2px #000;
}

.income span {
  color: green;
}

.expense span {
  color: red;
}
</style>
