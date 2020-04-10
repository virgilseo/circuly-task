<template>
  <div class="new-addresses">
    <h1>New address</h1>
    <!--Display error message to the user when appropriate-->
    <section v-if="error">
      <p>Something went wrong. Please try again later.</p>
    </section>
      <!--Display loader container to the user when appropriate-->
    <section v-else-if='loading'>
      <p>Loading...</p>
    </section>
    <!--Display message if no new address has been added yet-->
    <section v-else-if="Object.keys(hits).length === 0">
      <p>No new addresses have been addeded yet. Please use the form.</p>
    </section>
    <ul v-else>
      <!-- Display new address on the page -->
        <li><span>Company: </span><span>{{hits.company}}</span></li>
        <li><span>First name: </span><span>{{hits.firstName}}</span></li>
        <li><span>Last name: </span><span>{{hits.lastName}}</span></li>
        <li><span>Country: </span><span>{{hits.countryName}}</span></li>
        <li><span>City: </span><span>{{hits.locality}}</span></li>
        <li><span>Street address: </span><span>{{hits.streetAddress}}</span></li>
        <li><span>Postal code: </span><span>{{hits.postalCode}}</span></li>
        <li><span>Extended address: </span><span>{{hits.extendedAddress}}</span></li>
        <li><span>Region: </span><span>{{hits.region}}</span></li>
        <li><span>Customer id: </span><span>{{hits.customerId}}</span></li>
        <li><span>Created: </span><span>{{hits.createdAt.date}} {{hits.createdAt.timezone}}</span></li>
        <li><span>Updated: </span><span>{{hits.updatedAt.date}} {{hits.updatedAt.timezone}}</span></li>
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
