<template>
  <div class="new-addresses">
    <h1 class="page-titles">New addresses</h1>
    <!--Display error message to the user when appropriate-->
    <section v-if="error">
      <p class="address-error">Something went wrong. Please try again later.</p>
    </section>
      <!--Display loader container to the user when appropriate-->
    <section class="address-loader" v-else-if='loading'>
      <p>Loading...</p>
    </section>
    <!--Display message if no new address has been added yet-->
    <section class="address-not-found" v-else-if="hits.length === 0">
      <p>No new addresses have been added yet. Please use the form.</p>
    </section>
    <ul v-else class="adresses-container">
      <!-- Loop trought hits from the database and display new addresses on the page -->
      <li class="address-list-container" v-for="hit in hits" :key="hit.id">
        <ul>
            <li><span class="address-label">Company </span><span class="address-item">{{hit.company}}</span></li>
            <li><span class="address-label">First name </span><span class="address-item">{{hit.firstName}}</span></li>
            <li><span class="address-label">Last name </span><span class="address-item">{{hit.lastName}}</span></li>
            <li><span class="address-label">Country </span><span class="address-item">{{hit.countryName}}</span></li>
            <li><span class="address-label">City </span><span class="address-item">{{hit.locality}}</span></li>
            <li><span class="address-label">Street address </span><span class="address-item">{{hit.streetAddress}}</span></li>
            <li><span class="address-label">Postal code </span><span class="address-item">{{hit.postalCode}}</span></li>
            <li><span class="address-label">Extended address </span><span class="address-item">{{hit.extendedAddress}}</span></li>
            <li><span class="address-label">Region </span><span class="address-item">{{hit.region}}</span></li>
            <li><span class="address-label">Customer id </span><span class="address-item">{{hit.customerId}}</span></li>
            <li><span class="address-label">Created </span><span class="address-item">{{hit.createdAt.date}} {{hit.createdAt.timezone}}</span></li>
            <li><span class="address-label">Updated </span><span class="address-item">{{hit.updatedAt.date}} {{hit.updatedAt.timezone}}</span></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>

export default {

// Set the initial state of the component

  data() {

    return {
      hits: [],
      loading: true,
      error: false
    }
  },

// Fetch new address from the server after the component has mounted

  mounted() {

    const axios = require('axios');

    axios.get('http://localhost:3000/newAddresses')
    .then(response => {
      this.hits = response.data;
    })
    .catch(error => {
      console.log(error);

      this.error = true;
    })
    .finally(() => this.loading = false);
  }
}

</script>
