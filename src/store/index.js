import Vue from 'vue';
import Vuex from 'vuex';

import geolocation from './modules/geolocation';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    geolocation,
  },
});
