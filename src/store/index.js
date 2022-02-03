import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    landscapes: [],
  },
  mutations: {
    setLandscapes(state, landscapes) {
      state.landscapes = landscapes;
    },
  },
  actions: {
    async fetchLandscapes({ commit }) {
      try {
        const landscapes = await axios.get("../assets/landscapes.js");
        console.log("logging ", landscapes);
        commit("setLandscapes", landscapes);
      } catch (error) {
        console.log(error);
        return error;
      }
    },
  },
  getters: {},
});
