const mutations = {
  SET_LOADED: (state) => {
    state.isLoaded = true;
  },
  SET_CURRENT_LOCATION: (state, payload) => {
    state.currentLocation = payload;
  },
  CLEAR_CURRENT_LOCATION: (state) => {
    state.currentLocation = {
      country: '',
      city: '',
      lat: 0,
      long: 0,
    };
  },
};

export default mutations;
