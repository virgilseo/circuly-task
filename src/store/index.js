import Vue from "vue";
import Vuex from "vuex";

// Import customer datababe

import clientData from "@/json/test.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: clientData,
  mutations: {},
  actions: {},
  modules: {}
});

console.log(clientData);
