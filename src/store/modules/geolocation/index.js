import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const defaultLocation = () => ({
  country: '',
  city: '',
  lat: 0,
  long: 0,
});

const state = {
  isLoaded: false,
  currentLocation: defaultLocation(),
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
