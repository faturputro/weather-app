import VueEvaIcons from 'vue-eva-icons';
import axiosPlugin from './axios';

const plugins = {
  install(Vue) {
    Vue.use(VueEvaIcons);
    Vue.use(axiosPlugin);
  },
};

export default plugins;
