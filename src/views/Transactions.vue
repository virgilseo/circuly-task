<template>
  <div class="transactions">
    <h1>Transactions</h1>
    <ul>
      <!-- Loop trought client transactions and render them on the page -->
      <li v-for="transaction in transactions" :key="transaction.id">
        <ul>
          <li v-for="(value, propertyName, index) in transaction" :key="index">
            {{propertyName}}: {{value}}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>

  export default {

// Get transactions from global state
    computed: {

      transactions() {
        return this.$store.state.androidPayCards[0].subscriptions[0].transactions
      }
    }
  }
</script>
