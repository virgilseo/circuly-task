
<template>
  <div class="add-address">
    <h1 class="page-titles">Add customer address</h1>
    <form class="form" action="index.html" method="post">
      <!-- Create form inputs and capture their respective values -->
      <input type="text" v-model="data.company" name="company-name" placeholder="Company Name" value="">
      <input type="text" v-model="data.firstName" name="first-name" placeholder="First Name" value="">
      <input type="text" v-model="data.lastName" name="last-name"  placeholder="Last Name"  value="">
      <input type="text" v-model="data.countryName" name="country" placeholder="Country" value="">
      <input type="text" v-model="data.countryCodeAlpha2" name="country-code2" placeholder="Contry Code Alpha 2" value="">
      <input type="text" v-model="data.countryCodeAlpha3" name="country-code3" placeholder="Contry Code Alpha 3" value="">
      <input type="text" v-model="data.countryCodeNumeric" name="country-code" placeholder="Contry Code Numeric" value="">
      <input type="text" v-model="data.city" name="city" placeholder="City" value="">
      <input type="text" v-model="data.streetAddress" name="street-address" placeholder="Street Address" value="">
      <input type="text" v-model="data.postalCode" name="postal-code" placeholder="Postal code" value="">
      <input type="text" v-model="data.region" name="region" placeholder="Region" value="">
      <input type="text" v-model="data.extendedAddress" name="extended-address" placeholder="Extended Address" value="">
      <input type="text" v-model="data.customerId" name="customer-id" placeholder="Customer Id" value="">
      <button class="form-submit" type="submit" value="Submit" @click="addAddress">Submit</button>
    </form>
    <section class="form-status" v-if='status.success'>
      <p>Form submited successfuly!</p>
    </section>
    <section class="form-status" v-if='status.error'>
      <p>Form was not submited successfuly!</p>
    </section>
  </div>
</template>

<script>
  export default {

    //Set the initial state

    data() {

        return {
          data: {
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
           customerId: null

          },
          status: {
            success: false,
            error: false
          }
        }
      },

      methods: {

        // Update the server(db.json file) with new customer address based on form input values

        addAddress(event) {
          const axios = require('axios');
          const date = new Date();

          axios.post('http://localhost:3000/newAddress', {
              company: this.data.company,
              countryCodeAlpha2: this.data.countryCodeAlpha2,
              countryCodeAlpha3: this.data.countryCodeAlpha3,
              countryCodeNumeric: this.data.countryCodeNumeric,
              countryName: this.data.countryName,
              createdAt: {
                "date": `${date.getUTCFullYear()}-${date.getUTCMonth()}-${date.getUTCDate()} ${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}.${date.getUTCMilliseconds()}`,
                "timezone": "UTC",
                "timezone-type": 3
              },
              customerId: this.data.customerId,
              extendedAddress: this.data.extendedAddress,
              firstName: this.data.firstName,
              lastName: this.data.lastName,
              locality: this.data.city,
              postalCode: this.data.postalCode,
              region: this.data.region,
              streetAddress: this.data.streetAddress,
              updatedAt: {
                "date": `${date.getUTCFullYear()}-${date.getUTCMonth()}-${date.getUTCDate()} ${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}.${date.getUTCMilliseconds()}`,
                "timezone": "UTC",
                "timezone-type": 3
              }
          }).then(resp => {
              console.log(resp.data);
              this.status.success = true;

              // Clear form inputs after the form was submited successfuly

              var self = this;
              Object.keys(this.$data.data).forEach((key) =>
                  self.$data.data[key] = null
              );

          }).catch(error => {
              console.log(error);
              this.status.error = true;

              // Clear form inputs after error

              var self = this;
              Object.keys(this.$data.data).forEach((key) =>
                  self.$data.data[key] = null
              );
          });

          event.preventDefault();

        }
      }
  }
</script>
