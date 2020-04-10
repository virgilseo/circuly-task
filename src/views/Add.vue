
<template>
  <div class="add-address">
    <h1>Add customer address</h1>
    <form class="form" action="index.html" method="post">
      <!-- Create form inputs and capture their respective values -->
      <input type="text" v-model="company" name="company-name" placeholder="Company Name" value="">
      <input type="text" v-model="firstName" name="first-name" placeholder="First Name" value="">
      <input type="text" v-model="lastName" name="last-name"  placeholder="Last Name"  value="">
      <input type="text" v-model="countryName" name="country" placeholder="Country" value="">
      <input type="text" v-model="countryCodeAlpha2" name="country-code2" placeholder="Contry Code Alpha 2" value="">
      <input type="text" v-model="countryCodeAlpha3" name="country-code3" placeholder="Contry Code Alpha 3" value="">
      <input type="text" v-model="countryCodeNumeric" name="country-code" placeholder="Contry Code Numeric" value="">
      <input type="text" v-model="city" name="city" placeholder="City" value="">
      <input type="text" v-model="streetAddress" name="street-address" placeholder="Street Address" value="">
      <input type="text" v-model="postalCode" name="postal-code" placeholder="Postal code" value="">
      <input type="text" v-model="region" name="region" placeholder="Region" value="">
      <input type="text" v-model="extendedAddress" name="extended-address" placeholder="Extended Address" value="">
      <input type="text" v-model="customerId" name="customer-id" placeholder="Customer Id" value="">
      <input type="submit" value="Submit" @click="addAddress">
    </form>
    <section v-if='success'>
      <p>Form submited successfuly!</p>
    </section>
    <section v-if='error'>
      <p>Form was not submited successfuly!</p>
    </section>
  </div>
</template>

<script>
  export default {

    //Set the initial state

    data() {

        return {
          company: null,
          firstName: null,
          lastName: null,
          countryName: null,
          countryCodeAlpha2: null,
          countryCodeAlpha3: null,
          countryCodeNumeric: null,
          city: null,
          streetAddress: null,
          postalCode: null,
          region: null,
          extendedAddress: null,
          customerId: null,
          success: false,
          error: false
        }
      },

      methods: {

        // Update the server(db.json file) with new customer address based on form input values

        addAddress(event) {
          const axios = require('axios');
          const date = new Date();

          axios.post('http://localhost:3000/newAddress', {
              company: this.company,
              countryCodeAlpha2: this.countryCodeAlpha2,
              countryCodeAlpha3: this.countryCodeAlpha3,
              countryCodeNumeric: this.countryCodeNumeric,
              countryName: this.countryName,
              createdAt: {
                "date": `${date.getUTCFullYear()}-${date.getUTCMonth()}-${date.getUTCDate()} ${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}.${date.getUTCMilliseconds()}`,
                "timezone": "UTC",
                "timezone-type": 3
              },
              customerId: this.customerId,
              extendedAddress: this.extendedAddress,
              firstName: this.firstName,
              lastName: this.lastName,
              locality: this.city,
              postalCode: this.postalCode,
              region: this.region,
              streetAddress: this.streetAddress,
              updatedAt: {
                "date": `${date.getUTCFullYear()}-${date.getUTCMonth()}-${date.getUTCDate()} ${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}.${date.getUTCMilliseconds()}`,
                "timezone": "UTC",
                "timezone-type": 3
              }
          }).then(resp => {
              console.log(resp.data);
              this.success = true;

          }).catch(error => {
              console.log(error);
              this.error = true;
          });

          event.preventDefault();

        }
      }
  }
</script>
