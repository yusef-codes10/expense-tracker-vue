<script setup></script>

<template>
  <div class="admin-section">
    <h3>Add new transactions</h3>
    <br />
    <div class="text-filed">
      <label for="text">Text</label>
      <input type="text" id="text" placeholder="Enter text..." />
    </div>
    <div class="amount-filed">
      <label for="amount"
        >Amount
        <br />
        (Negative: Expense, Posisitve: income)
      </label>
      <input type="text" id="amount" placeholder="Enter amount..." />
    </div>
    <div class="btn">
      <button>Add</button>
    </div>
  </div>
</template>

<style scoped></style>
