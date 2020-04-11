<template>
  <div class="transactions">
    <h1 class="page-titles">Transactions</h1>
    <ul class="transaction-container">
      <!-- Loop trought client transactions and render them on the page -->
      <li v-for="transaction in transactions" :key="transaction.id">
        <ul class="list-container">
          <li><span class="transaction-label">Client name </span><span class="transaction-item">{{transaction.billing.firstName}} {{transaction.billing.lastName}}</span></li>
          <li><span class="transaction-label">Amount </span><span class="transaction-item">{{transaction.amount}}</span></li>
          <li><span class="transaction-label">Currency </span><span class="transaction-item">{{transaction.currencyIsoCode}}</span></li>
          <li><span class="transaction-label">Merchant account id </span><span class="transaction-item">{{transaction.merchantAccountId}}</span></li>
          <li><span class="transaction-label">Payment type </span><span class="transaction-item">{{transaction.paymentInstrumentType}}</span></li>
          <li><span class="transaction-label">Plan id </span><span class="transaction-item">{{transaction.planId}}</span></li>
          <li><span class="transaction-label">Authorization code </span><span class="transaction-item">{{transaction.processorAuthorizationCode}}</span></li>
          <li><span class="transaction-label">Settlement batch id </span><span class="transaction-item">{{transaction.settlementBatchId}}</span></li>
          <li><span class="transaction-label">Status </span><span class="transaction-item">{{transaction.status}}</span></li>
          <li><span class="transaction-label">Subscription id </span><span class="transaction-item">{{transaction.subscriptionId}}</span></li>
          <li><span class="transaction-label">Type </span><span class="transaction-item">{{transaction.type}}</span></li>
          <li><span class="transaction-label">Created </span><span class="transaction-item">{{transaction.createdAt.date}} {{transaction.createdAt.timezone}}</span></li>
          <li><span class="transaction-label">Updated </span><span class="transaction-item">{{transaction.updatedAt.date}} {{transaction.updatedAt.timezone}}</span></li>
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
