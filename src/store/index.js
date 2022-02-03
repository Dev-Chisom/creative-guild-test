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
        const landscapes = await axios.get("/data/landscapes.json");
        commit("setLandscapes", landscapes.data);
      } catch (error) {
        console.log(error);
        return error;
      }
    },
  },
  getters: {},
});
