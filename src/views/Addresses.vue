<template>
  <div class="addresses">
    <h1>Addresses</h1>
    <ul>
      <!-- Loop trought client addresses and render them on the page -->
      <li v-for="address in addresses" :key="address.id" >
        <ul>
          <li><span>Company: </span><span>{{address.company}}</span></li>
          <li><span>First name: </span><span>{{address.firstName}}</span></li>
          <li><span>Last name: </span><span>{{address.lastName}}</span></li>
          <li><span>Country: </span><span>{{address.countryName}}</span></li>
          <li><span>City: </span><span>{{address.locality}}</span></li>
          <li><span>Street address: </span><span>{{address.streetAddress}}</span></li>
          <li><span>Postal code: </span><span>{{address.postalCode}}</span></li>
          <li><span>Extended address: </span><span>{{address.extendedAddress}}</span></li>
          <li><span>Region: </span><span>{{address.region}}</span></li>
          <li><span>Customer id: </span><span>{{address.customerId}}</span></li>
          <li><span>Created: </span><span>{{address.createdAt.date}} {{address.createdAt.timezone}}</span></li>
          <li><span>Updated: </span><span>{{address.updatedAt.date}} {{address.updatedAt.timezone}}</span></li>
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
