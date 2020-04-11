<template>
  <div class="addresses">
    <h1 class="page-titles">Addresses</h1>
    <ul class="adresses-container">
      <!-- Loop trought client addresses and render them on the page -->
      <li v-for="address in addresses" :key="address.id" >
        <ul class="address-list-container">
          <li><span class="address-label">Company </span><span class="address-item">{{address.company}}</span></li>
          <li><span class="address-label">First name </span><span class="address-item">{{address.firstName}}</span></li>
          <li><span class="address-label">Last name </span><span class="address-item">{{address.lastName}}</span></li>
          <li><span class="address-label">Country </span><span class="address-item">{{address.countryName}}</span></li>
          <li><span class="address-label">City </span><span class="address-item">{{address.locality}}</span></li>
          <li><span class="address-label">Street address </span><span class="address-item">{{address.streetAddress}}</span></li>
          <li><span class="address-label">Postal code </span><span class="address-item">{{address.postalCode}}</span></li>
          <li><span class="address-label">Extended address </span><span class="address-item">{{address.extendedAddress}}</span></li>
          <li><span class="address-label">Region </span><span class="address-item">{{address.region}}</span></li>
          <li><span class="address-label">Customer id </span><span class="address-item">{{address.customerId}}</span></li>
          <li><span class="address-label">Created </span><span class="address-item">{{address.createdAt.date}} {{address.createdAt.timezone}}</span></li>
          <li><span class="address-label">Updated </span><span class="address-item">{{address.updatedAt.date}} {{address.updatedAt.timezone}}</span></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
 export default {

   //Get client addresses from global state

   computed: {
     addresses() {
       return this.$store.state.addresses
     }
   }
 }
</script>
