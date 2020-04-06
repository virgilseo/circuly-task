<template>
  <div class="addresses">
    <h1>Addresses</h1>
    <ul>
      <!-- Loop trought client addresses and render them on the page -->
      <li v-for="address in addresses" :key="address.id" >
        <ul>
          <li v-for="(value, propertyName, index) in address" :key="index">
            {{propertyName}}: {{value}}
          </li>
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
