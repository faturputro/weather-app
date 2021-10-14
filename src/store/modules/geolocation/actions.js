// import axios from 'axios';
import WeatherAPI from '@/services';

const actions = {
  fetchCurrentLocation: ({ commit }) => {
    try {
      navigator.geolocation.getCurrentPosition(async ({ coords }) => {
        const params = {
          lat: coords.latitude,
          lon: coords.longitude,
        };
        const { 0: res } = await WeatherAPI.fetchReverseGeocode(params);
        const payload = {
          country: res.country,
          city: res.name,
          lat: res.lat,
          long: res.lon,
        };
        commit('SET_CURRENT_LOCATION', payload);
      }, (err) => {
        console.error(err);
      }, {
        enableHighAccuracy: true,
      });
      commit('SET_LOADED');
    } catch (e) {
      //  do nothing
    }
  },
};

export default actions;
