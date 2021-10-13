import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import plugins from './plugins';
import '@/assets/scss/main.scss';
import './assets/tailwind.css';

Vue.config.productionTip = false;

Vue.use(plugins);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
