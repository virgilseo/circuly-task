<template>
  <div class="addresses">
    <h1>Addresses</h1>
    <ul>
      <!-- Loop trought client addresses and render them on the page -->
      <li v-for="address in addresses" :key="address.id" >
        <span>countryCodeAlpha2: {{address.countryCodeAlpha2}}</span>
        <span>countryCodeAlpha3: {{address.countryCodeAlpha3}}</span>
        <span>countryCodeNumeric: {{address.countryCodeNumeric}}</span>
        <span>countryName: {{address.countryName}}</span>
        <span>createdAt: date: {{address.createdAt.date}} timezone: {{address.createdAt.timezone}} timezone_type: {{address.createdAt.timezone_type}}</span>
        <span>customerId: {{address.customerId}}</span>
        <span>firstName: {{address.firstName}}</span>
        <span>lastName: {{address.lastName}}</span>
        <span>id: {{address.id}}</span>
        <span>locality: {{address.locality}}</span>
        <span>postalCode: {{address.postalCode}}</span>
        <span>streetAddress: {{address.streetAddress}}</span>
        <span>updatedAt: date: {{address.updatedAt.date}} timezone: {{address.updatedAt.timezone}} timezone_type: {{address.updatedAt.timezone_type}} </span>
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
