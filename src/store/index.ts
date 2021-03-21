import Vue from 'vue'
import Vuex from 'vuex'
import axios from "./axios";
import api from "./api";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    axios,
    api,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
