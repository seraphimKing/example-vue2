import Vue from 'vue';
import Vuex from 'vuex';
import header from './header.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    header,
  },
});
