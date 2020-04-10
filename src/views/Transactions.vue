<template>
  <div class="transactions">
    <h1>Transactions</h1>
    <ul>
      <!-- Loop trought client transactions and render them on the page -->
      <li v-for="transaction in transactions" :key="transaction.id">
        <ul>
          <li><span>Client name: </span><span>{{transaction.billing.firstName}} {{transaction.billing.lastName}}</span></li>
          <li><span>Amount: </span><span>{{transaction.amount}}</span></li>
          <li><span>Currency: </span><span>{{transaction.currencyIsoCode}}</span></li>
          <li><span>Merchant account id: </span><span>{{transaction.merchantAccountId}}</span></li>
          <li><span>Payment type: </span><span>{{transaction.paymentInstrumentType}}</span></li>
          <li><span>Plan id: </span><span>{{transaction.planId}}</span></li>
          <li><span>Authorization code: </span><span>{{transaction.processorAuthorizationCode}}</span></li>
          <li><span>Settlement batch id: </span><span>{{transaction.settlementBatchId}}</span></li>
          <li><span>Status: </span><span>{{transaction.status}}</span></li>
          <li><span>Subscription id: </span><span>{{transaction.subscriptionId}}</span></li>
          <li><span>Type: </span><span>{{transaction.type}}</span></li>
          <li><span>Created: </span><span>{{transaction.createdAt.date}} {{transaction.createdAt.timezone}}</span></li>
          <li><span>Updated: </span><span>{{transaction.updatedAt.date}} {{transaction.updatedAt.timezone}}</span></li>
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
