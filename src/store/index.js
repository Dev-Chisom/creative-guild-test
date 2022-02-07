import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profileData: [],
    loadingStatus: false,
  },
  mutations: {
    setProfileData(state, profileData) {
      state.profileData = profileData;
    },
    loadingStatus(state, loadingStatus) {
      state.loadingStatus = loadingStatus;
    },
  },
  actions: {
    async fetchProfileData({ commit }) {
      commit("loadingStatus", true);
      try {
        const profileData = await axios.get("/data/landscapes.json");
        commit("setProfileData", profileData.data);
        commit("loadingStatus", false);
      } catch (error) {
        console.log(error);
        return error;
      }
    },
  },
  getters: {
    profileData(state) {
      return state.profileData;
    },
    loadingStatus(state) {
      return state.loadingStatus;
    },
  },
});
