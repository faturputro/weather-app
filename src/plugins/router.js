import router from '../router';
import store from '../store';

const route = {
  install() {
    router.beforeEach(async (to, from, next) => {
      if (!store.getters['geolocation/loaded']) {
        try {
          await store.dispatch('geolocation/fetchCurrentLocation');
        } catch (error) {
          // do nothing
        }
      }
      next();
    });
  },
};

export default route;
