import Vue from 'vue';

const fetchWeather = async (params) => {
  const res = await Vue.axios({
    url: '/data/2.5/weather',
    method: 'GET',
    params,
  });

  return res.data;
};

const fetchReverseGeocode = async (params) => {
  const res = await Vue.axios({
    url: '/geo/1.0/reverse',
    method: 'GET',
    params,
  });

  return res.data;
};

export default {
  fetchWeather,
  fetchReverseGeocode,
};
