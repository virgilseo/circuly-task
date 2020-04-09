
<template>
  <div class="add-address">
    <h1>Add customer address</h1>
    <form class="form" action="index.html" method="get">
      <input type="text" v-model="company" name="company-name" placeholder="Company Name" value="">
      <input type="text" v-model="firstName" name="first-name" placeholder="First Name" value="">
      <input type="text" v-model="lastName" name="last-name"  placeholder="Last Name"  value="">
      <input type="text" v-model="country" name="country" placeholder="Country" value="">
      <input type="text" v-model="countryCodeAlpha2" name="country-code2" placeholder="Contry Code Alpha 2" value="">
      <input type="text" v-model="countryCodeAlpha3" name="country-code3" placeholder="Contry Code Alpha 3" value="">
      <input type="text" v-model="countryCodeNumeric" name="country-code" placeholder="Contry Code Numeric" value="">
      <input type="text" v-model="city" name="city" placeholder="City" value="">
      <input type="text" v-model="streetAddress" name="street-address" placeholder="Street Address" value="">
      <input type="text" v-model="postalCode" name="postal-code" placeholder="Postal code" value="">
      <input type="text" v-model="region" name="region" placeholder="Region" value="">
      <input type="text" v-model="extendedAddress" name="extended-address" placeholder="Extended Address" value="">
      <input type="text" v-model="customerId" name="customer-id" placeholder="Customer Id" value="">
      <input type="submit" value="Submit">
    </form>
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
          country: null,
          countryCodeAlpha2: null,
          countryCodeAlpha3: null,
          countryCodeNumeric: null,
          city: null,
          streetAddress: null,
          postalCode: null,
          region: null,
          extendedAddress: null,
          customerId: null
        }
      }
  }
</script>
