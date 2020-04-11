<template>
  <div class="new-addresses">
    <h1 class="page-titles">New address</h1>
    <!--Display error message to the user when appropriate-->
    <section v-if="error">
      <p class="address-error">Something went wrong. Please try again later.</p>
    </section>
      <!--Display loader container to the user when appropriate-->
    <section class="address-loader" v-else-if='loading'>
      <p>Loading...</p>
    </section>
    <!--Display message if no new address has been added yet-->
    <section class="address-not-found" v-else-if="Object.keys(hits).length === 0">
      <p>No new addresses have been addeded yet. Please use the form.</p>
    </section>
    <ul class="address-list-container" v-else>
      <!-- Display new address on the page -->
        <li><span class="address-label">Company: </span><span class="address-item">{{hits.company}}</span></li>
        <li><span class="address-label">First name: </span><span class="address-item">{{hits.firstName}}</span></li>
        <li><span class="address-label">Last name: </span><span class="address-item">{{hits.lastName}}</span></li>
        <li><span class="address-label">Country: </span><span class="address-item">{{hits.countryName}}</span></li>
        <li><span class="address-label">City: </span><span class="address-item">{{hits.locality}}</span></li>
        <li><span class="address-label">Street address: </span><span class="address-item">{{hits.streetAddress}}</span></li>
        <li><span class="address-label">Postal code: </span><span class="address-item">{{hits.postalCode}}</span></li>
        <li><span class="address-label">Extended address: </span><span class="address-item">{{hits.extendedAddress}}</span></li>
        <li><span class="address-label">Region: </span><span class="address-item">{{hits.region}}</span></li>
        <li><span class="address-label">Customer id: </span><span class="address-item">{{hits.customerId}}</span></li>
        <li><span class="address-label">Created: </span><span class="address-item">{{hits.createdAt.date}} {{hits.createdAt.timezone}}</span></li>
        <li><span class="address-label">Updated: </span><span class="address-item">{{hits.updatedAt.date}} {{hits.updatedAt.timezone}}</span></li>
    </ul>
  </div>
</template>

<script>

export default {

// Set the initial state of the component

  data() {

    return {
      hits: {},
      loading: true,
      error: false
    }
  },

// Fetch new address from the server after the component has mounted

  mounted() {

    const axios = require('axios');

    axios.get('http://localhost:3000/newAddress')
    .then(response => {
      this.hits = response.data
      console.log(this.hits)
    })
    .catch(error => {
      console.log(error)
      this.error = true
      console.log(this.error)
    })
    .finally(() => this.loading = false)
  }
}


</script>
