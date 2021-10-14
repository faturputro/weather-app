import VueEvaIcons from 'vue-eva-icons';

import axiosPlugin from './axios';
import routePlugin from './router';
import globalComponents from './globalComponents';

import 'mapbox-gl/dist/mapbox-gl.css';

const plugins = {
  install(Vue) {
    Vue.use(VueEvaIcons);
    Vue.use(axiosPlugin);
    Vue.use(routePlugin);
    Vue.use(globalComponents);
  },
};

export default plugins;
