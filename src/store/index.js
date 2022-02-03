import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profileData: [],
  },
  mutations: {
    setProfileData(state, profileData) {
      state.profileData = profileData;
    },
  },
  actions: {
    async fetchProfileData({ commit }) {
      try {
        const profileData = await axios.get("/data/landscapes.json");
        commit("setProfileData", profileData.data);
      } catch (error) {
        console.log(error);
        return error;
      }
    },
  },
  getters: {},
});
