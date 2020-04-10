<template>
  <div class="new-addresses">
    <h1>New addresses</h1>
    <ul>
      <!-- Loop trought the address object and render it on the page -->
      <li >
      </li>
    </ul>
  </div>
</template>

<script>

export default {

// Set the initial state of the component

  data() {

    return {
      hits: null,
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
    })
    .finally(() => this.loading = false)
  }
}


</script>
