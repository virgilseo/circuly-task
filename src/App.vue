<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to='/transactions'>Transactions</router-link>
      <router-link to='/addresses'>Addresses</router-link>
      <router-link to='/add'>Add address</router-link> 
      <router-link to='/new-address'>New address</router-link>
    </div>
  <router-view />
  </div>
</template>

<style>

@import './assets/stylesheets/app.css';

</style>
